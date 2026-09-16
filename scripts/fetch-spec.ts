/**
 * Downloads Sage Intacct's per-Application OpenAPI documents and stores a
 * lean copy of each under spec/. Run: node scripts/fetch-spec.ts
 *
 * developer.sage.com serves every page as Markdown when ".md" is appended;
 * the OpenAPI pages wrap the JSON in a ```json fence.
 */
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { GROUPS, SPEC_DIR } from "./groups.ts";

const BASE = "https://developer.sage.com/intacct/apis/intacct/1/intacct-openapi/groups";

interface ManifestEntry {
  sha256: string;
  paths: number;
  schemas: number;
}
interface Manifest {
  source: string;
  fetchedAt: string;
  groups: Record<string, ManifestEntry>;
}

function unfence(md: string): string {
  const start = md.indexOf("```json");
  const end = md.lastIndexOf("```");
  if (start === -1 || end <= start) throw new Error("no ```json fence found");
  return md.slice(md.indexOf("\n", start) + 1, end);
}

/** Drop vendor code samples: they are the bulk of the file and unused. */
function lean(node: unknown): unknown {
  if (Array.isArray(node)) return node.map(lean);
  if (node && typeof node === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(node)) {
      if (k === "x-codeSamples") continue;
      out[k] = lean(v);
    }
    return out;
  }
  return node;
}

async function main() {
  await mkdir(SPEC_DIR, { recursive: true });
  const manifestPath = join(SPEC_DIR, "manifest.json");
  let previous: Manifest | undefined;
  try {
    previous = JSON.parse(await readFile(manifestPath, "utf8")) as Manifest;
  } catch {
    /* first run */
  }

  const manifest: Manifest = { source: BASE, fetchedAt: new Date().toISOString(), groups: {} };
  let changed = 0;

  for (const group of GROUPS) {
    const res = await fetch(`${BASE}/${group}.md`, { headers: { "user-agent": "intacct-rest-spec-fetch" } });
    if (!res.ok) throw new Error(`${group}: HTTP ${res.status}`);
    const spec = lean(JSON.parse(unfence(await res.text()))) as {
      paths: Record<string, unknown>;
      components: { schemas: Record<string, unknown> };
    };
    const json = JSON.stringify(spec, null, 1) + "\n";
    const sha256 = createHash("sha256").update(json).digest("hex");
    manifest.groups[group] = {
      sha256,
      paths: Object.keys(spec.paths).length,
      schemas: Object.keys(spec.components.schemas).length,
    };
    if (previous?.groups[group]?.sha256 !== sha256) {
      changed++;
      await writeFile(join(SPEC_DIR, `${group}.json`), json);
    }
    console.log(`${group.padEnd(36)} ${manifest.groups[group].paths} paths  ${previous?.groups[group]?.sha256 === sha256 ? "unchanged" : "updated"}`);
  }

  if (changed > 0 || !previous) {
    await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
  }
  console.log(changed ? `${changed} group(s) changed` : "spec unchanged");
}

await main();
