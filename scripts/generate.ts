/**
 * Generates src/generated/<group>/{types.ts,index.ts} from spec/<group>.json.
 * Run: node scripts/generate.ts [group ...]
 *
 * types.ts  - openapi-typescript output (components + operations).
 * index.ts  - one definition per Object, Workflow Action and service, wired
 *             into a defineApplication() factory. Nothing here is hand-written.
 */
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import openapiTS, { astToString } from "openapi-typescript";

import { GENERATED_DIR, GROUPS, SPEC_DIR, type Group } from "./groups.ts";

/* ------------------------------------------------------------------ */
/* Spec model                                                          */
/* ------------------------------------------------------------------ */

interface Operation {
  operationId: string;
  requestBody?: unknown;
}
type PathItem = Partial<Record<"get" | "post" | "patch" | "delete" | "put", Operation>> & { parameters?: unknown };
interface Spec {
  paths: Record<string, PathItem>;
  components: { schemas: Record<string, unknown> };
}

type Op = "get" | "create" | "update" | "delete";

interface ObjectInfo {
  app: string;
  /** Object name, possibly containing `::{param}`. */
  name: string;
  path: string;
  ops: Op[];
  getOp?: string;
  createOp?: string;
  updateOp?: string;
  /** `path` is set for actions that live under /objects instead of /workflows. */
  actions: { name: string; operationId: string; path?: string }[];
  skipped: string[];
}

/** A keyless sub-path such as `/objects/company-config/consolidation-preference/setup` with GET/PATCH. */
interface SingletonInfo {
  name: string;
  path: string;
  ops: Op[];
  getOp?: string;
  updateOp?: string;
  createOp?: string;
}

interface ServiceInfo {
  segments: string[];
  path: string;
  method: "GET" | "POST";
  operationId: string;
  hasBody: boolean;
}

const OBJECT_RE = /^\/objects\/([^/]+)\/([^/]+)(\/\{key\})?$/;
/** POST on an Object sub-path that is not `{key}`, e.g. `/objects/company-config/consolidation-preference/setup`. */
const OBJECT_ACTION_RE = /^\/objects\/([^/]+)\/([^/]+)\/([^/{}]+)$/;
const WORKFLOW_RE = /^\/workflows\/([^/]+)\/([^/]+)\/([^/]+)$/;
const SERVICE_RE = /^\/services\/(.+)$/;

function analyse(spec: Spec) {
  const objects = new Map<string, ObjectInfo>();
  const services: ServiceInfo[] = [];
  const singletons: SingletonInfo[] = [];
  const unmatched: string[] = [];

  const objectFor = (app: string, name: string) => {
    const key = `${app}/${name}`;
    let o = objects.get(key);
    if (!o) {
      o = { app, name, path: key, ops: [], actions: [], skipped: [] };
      objects.set(key, o);
    }
    return o;
  };

  for (const [path, item] of Object.entries(spec.paths)) {
    let m = OBJECT_RE.exec(path);
    if (m) {
      const [, app, name, keyed] = m as unknown as [string, string, string, string | undefined];
      const o = objectFor(app, name);
      for (const [verb, op] of Object.entries(item) as [string, Operation][]) {
        if (verb === "parameters") continue;
        if (keyed && verb === "get") (o.ops.push("get"), (o.getOp = op.operationId));
        else if (keyed && verb === "patch") (o.ops.push("update"), (o.updateOp = op.operationId));
        else if (keyed && verb === "delete") o.ops.push("delete");
        else if (!keyed && verb === "post") (o.ops.push("create"), (o.createOp = op.operationId));
        else if (!keyed && verb === "get") {
          /* parameterless list of Object References: intentionally not exposed (ADR 0002) */
        } else o.skipped.push(`${verb.toUpperCase()} ${path}`);
      }
      continue;
    }
    m = OBJECT_ACTION_RE.exec(path);
    if (m) {
      const [, app, name, sub] = m as unknown as [string, string, string, string];
      if (item.post && !item.get && !item.patch) {
        objectFor(app, name).actions.push({ name: sub, operationId: item.post.operationId, path: path.slice(1) });
      } else {
        const ops: Op[] = [];
        if (item.get) ops.push("get");
        if (item.patch) ops.push("update");
        if (item.post) ops.push("create");
        const single: SingletonInfo = { name: `${name}-${sub}`, path: path.slice(1), ops };
        if (item.get) single.getOp = item.get.operationId;
        if (item.patch) single.updateOp = item.patch.operationId;
        if (item.post) single.createOp = item.post.operationId;
        singletons.push(single);
      }
      continue;
    }
    m = WORKFLOW_RE.exec(path);
    if (m) {
      const [, app, name, actionName] = m as unknown as [string, string, string, string];
      const op = item.post;
      if (op) objectFor(app, name).actions.push({ name: actionName, operationId: op.operationId });
      else unmatched.push(path);
      continue;
    }
    m = SERVICE_RE.exec(path);
    if (m) {
      const segments = m[1]!.split("/");
      const op = item.post ?? item.get;
      if (!op) {
        unmatched.push(path);
        continue;
      }
      services.push({
        segments,
        path: path.slice(1),
        method: item.post ? "POST" : "GET",
        operationId: op.operationId,
        hasBody: item.post !== undefined && op.requestBody !== undefined,
      });
      continue;
    }
    unmatched.push(path);
  }
  return { objects: [...objects.values()], services, singletons, unmatched };
}

/* ------------------------------------------------------------------ */
/* Naming                                                              */
/* ------------------------------------------------------------------ */

const camel = (s: string) =>
  s
    .replace(/::\{([^}]+)\}/, "-by-$1")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((w, i) => (i === 0 ? w[0]!.toLowerCase() + w.slice(1) : w[0]!.toUpperCase() + w.slice(1)))
    .join("");
const pascal = (s: string) => {
  const c = camel(s);
  return c[0]!.toUpperCase() + c.slice(1);
};
const RESERVED = new Set(["components", "operations", "default", "services"]);

/** Property/type names per Object, prefixing with the Application on collision. */
function nameObjects(objects: ObjectInfo[]) {
  const counts = new Map<string, number>();
  for (const o of objects) counts.set(camel(o.name), (counts.get(camel(o.name)) ?? 0) + 1);
  const names = new Map<ObjectInfo, { prop: string; type: string }>();
  for (const o of objects) {
    const collides = (counts.get(camel(o.name)) ?? 0) > 1;
    const base = collides ? `${o.app}-${o.name}` : o.name;
    let prop = camel(base);
    if (RESERVED.has(prop)) prop = camel(`${o.app}-${o.name}`);
    names.set(o, { prop, type: pascal(base) });
  }
  return names;
}

/* ------------------------------------------------------------------ */
/* Emit                                                                */
/* ------------------------------------------------------------------ */

const q = JSON.stringify;
const opType = (id: string) => `operations[${q(id)}]`;

function emitIndex(group: Group, spec: Spec, a: ReturnType<typeof analyse>): string {
  const names = nameObjects(a.objects);
  const out: string[] = [];
  out.push(`// Generated from spec/${group}.json by scripts/generate.ts. Do not edit.`);
  out.push(`import type { components, operations } from "./types.js";`);
  out.push(
    `import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";`,
  );
  out.push(`import type { RequestBody, ResponseResult } from "../../core/define.js";`);
  out.push(``);
  out.push(`export type { components, operations };`);
  out.push(``);

  const defs: string[] = [];
  for (const o of a.objects.sort((x, y) => x.path.localeCompare(y.path))) {
    const { prop, type } = names.get(o)!;
    const schemaKey = `objects.${o.app}.${o.name.replace(/::\{[^}]+\}/, "")}`;
    const recordType =
      schemaKey in spec.components.schemas
        ? `components["schemas"][${q(schemaKey)}]`
        : o.getOp
          ? `ResponseResult<${opType(o.getOp)}>`
          : `Record<string, unknown>`;
    out.push(`/** ${o.path} */`);
    out.push(`export type ${type} = ${recordType};`);
    const shapeParts = [`record: ${type}`];
    if (o.createOp) {
      out.push(`export type ${type}Create = RequestBody<${opType(o.createOp)}>;`);
      shapeParts.push(`create: ${type}Create`);
    }
    if (o.updateOp) {
      out.push(`export type ${type}Update = RequestBody<${opType(o.updateOp)}>;`);
      shapeParts.push(`update: ${type}Update`);
    }
    const actions = o.actions
      .sort((x, y) => x.name.localeCompare(y.name))
      .map(
        (act) =>
          `    ${camel(act.name)}: action<RequestBody<${opType(act.operationId)}>, ResponseResult<${opType(act.operationId)}>>(${q(act.name)}${act.path ? `, ${q(act.path)}` : ""}),`,
      );
    const factory = o.name.includes("::{") ? "parameterizedObject" : "object";
    const ops = q([...new Set(o.ops)].sort());
    const actionsArg = actions.length ? `, {\n${actions.join("\n")}\n  }` : "";
    defs.push(`  ${prop}: ${factory}(shape<{ ${shapeParts.join("; ")} }>(), ${q(o.path)}, ${ops}${actionsArg}),`);
  }

  for (const s of a.singletons.sort((x, y) => x.path.localeCompare(y.path))) {
    const type = pascal(s.name);
    out.push(`/** ${s.path} */`);
    out.push(`export type ${type} = ${s.getOp ? `ResponseResult<${opType(s.getOp)}>` : "Record<string, unknown>"};`);
    const shapeParts = [`record: ${type}`];
    if (s.updateOp) {
      out.push(`export type ${type}Update = RequestBody<${opType(s.updateOp)}>;`);
      shapeParts.push(`update: ${type}Update`);
    }
    if (s.createOp) {
      out.push(`export type ${type}Create = RequestBody<${opType(s.createOp)}>;`);
      shapeParts.push(`create: ${type}Create`);
    }
    defs.push(`  ${camel(s.name)}: singleton(shape<{ ${shapeParts.join("; ")} }>(), ${q(s.path)}, ${q(s.ops)}),`);
  }

  if (a.services.length) {
    defs.push(`  services: ${emitServiceGroup(a.services, 1)},`);
  }

  out.push(``);
  out.push(`export const ${camel(group)} = defineApplication({`);
  out.push(...defs);
  out.push(`});`);
  out.push(``);
  out.push(`export default ${camel(group)};`);
  out.push(``);
  return out.join("\n");
}

/** Nest services by path segment: services.core.query, services.reports.generalLedger.trialBalance */
function emitServiceGroup(services: ServiceInfo[], depth: number): string {
  const pad = "  ".repeat(depth + 1);
  const byHead = new Map<string, ServiceInfo[]>();
  const leaves: ServiceInfo[] = [];
  for (const s of services) {
    if (s.segments.length === 1) leaves.push(s);
    else {
      const head = s.segments[0]!;
      byHead.set(head, [...(byHead.get(head) ?? []), { ...s, segments: s.segments.slice(1) }]);
    }
  }
  const lines: string[] = [];
  for (const s of leaves.sort((x, y) => x.path.localeCompare(y.path))) {
    const req = s.hasBody ? `RequestBody<${opType(s.operationId)}>` : "never";
    lines.push(
      `${pad}${camel(s.segments[0]!)}: service<${req}, ResponseResult<${opType(s.operationId)}>>(${q(s.path)}, ${q(s.method)}),`,
    );
  }
  for (const [head, members] of [...byHead.entries()].sort(([x], [y]) => x.localeCompare(y))) {
    lines.push(`${pad}${camel(head)}: ${emitServiceGroup(members, depth + 1)},`);
  }
  return `group({\n${lines.join("\n")}\n${"  ".repeat(depth)}})`;
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

async function generateGroup(group: Group) {
  const spec = JSON.parse(await readFile(join(SPEC_DIR, `${group}.json`), "utf8")) as Spec;
  const dir = join(GENERATED_DIR, group);
  await rm(dir, { recursive: true, force: true });
  await mkdir(dir, { recursive: true });

  // defaultNonNullable would mark every property with a `default` as required,
  // which is wrong for request bodies (e.g. core-query.filterExpression).
  const ast = await openapiTS(spec as never, { alphabetize: false, defaultNonNullable: false });
  const types = `// Generated from spec/${group}.json by scripts/generate.ts. Do not edit.\n${astToString(ast)}`;
  await writeFile(join(dir, "types.ts"), types);

  const analysed = analyse(spec);
  await writeFile(join(dir, "index.ts"), emitIndex(group, spec, analysed));

  const skipped = analysed.objects.flatMap((o) => o.skipped);
  const actions = analysed.objects.reduce((n, o) => n + o.actions.length, 0);
  console.log(
    `${group.padEnd(36)} ${String(analysed.objects.length).padStart(3)} objects  ${String(actions).padStart(3)} actions  ${String(analysed.services.length).padStart(3)} services` +
      (skipped.length ? `  skipped: ${skipped.join(", ")}` : "") +
      (analysed.unmatched.length ? `  UNMATCHED: ${analysed.unmatched.join(", ")}` : ""),
  );
}

const requested = process.argv.slice(2) as Group[];
for (const g of requested) if (!GROUPS.includes(g)) throw new Error(`unknown group ${g}`);
for (const group of requested.length ? requested : GROUPS) await generateGroup(group);
