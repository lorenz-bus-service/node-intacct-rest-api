import type { IntacctClient } from "./client.js";
import { ObjectResource, type ObjectOp, type ObjectShape } from "./resource.js";
import type { RequestOptions } from "./types.js";

/* ------------------------------------------------------------------ */
/* Type helpers over openapi-typescript's `operations` output          */
/* ------------------------------------------------------------------ */

/** JSON request body of an operation, or `never` if it has none. */
export type RequestBody<Op> = Op extends { requestBody?: { content: { "application/json": infer B } } }
  ? B
  : Op extends { requestBody: { content: { "application/json": infer B } } }
    ? B
    : never;

type Json<R> = R extends { content: { "application/json": infer C } } ? C : never;

/** The `ia::result` of an operation's 200 or 201 response. */
export type ResponseResult<Op> = Op extends { responses: infer R }
  ? R extends { 200: infer OK }
    ? Json<OK> extends { "ia::result"?: infer Res }
      ? Res
      : Json<OK>
    : R extends { 201: infer Created }
      ? Json<Created> extends { "ia::result"?: infer Res }
        ? Res
        : Json<Created>
      : unknown
  : unknown;

/* ------------------------------------------------------------------ */
/* Definitions: the data the generator emits                           */
/* ------------------------------------------------------------------ */

export interface ActionDef<Req = unknown, Res = unknown> {
  readonly kind: "action";
  /** URL segment, e.g. `generate-pdf`. */
  readonly name: string;
  /** Full path override for the rare action that lives under /objects rather than /workflows. */
  readonly path?: string;
  /** Phantom types only. */
  readonly _req?: Req;
  readonly _res?: Res;
}

export type ActionDefs = Record<string, ActionDef>;

export interface ObjectDef<S extends ObjectShape, Ops extends ObjectOp, A extends ActionDefs> {
  readonly kind: "object";
  readonly path: string;
  readonly ops: readonly Ops[];
  readonly actions: A;
  readonly _shape?: S;
}

/** An Object whose path contains a parameter, e.g. `order-entry/document::{documentName}`. */
export interface ParameterizedObjectDef<S extends ObjectShape, Ops extends ObjectOp, A extends ActionDefs> {
  readonly kind: "parameterized-object";
  /** Path template containing `{param}`. */
  readonly template: string;
  readonly ops: readonly Ops[];
  readonly actions: A;
  readonly _shape?: S;
}

/** A keyless record with its own path, e.g. a preferences page: `get()` and `update(body)` only. */
export type SingletonOp = "get" | "update" | "create";

export interface SingletonDef<S extends ObjectShape, Ops extends SingletonOp> {
  readonly kind: "singleton";
  readonly path: string;
  readonly ops: readonly Ops[];
  readonly _shape?: S;
}

export interface ServiceDef<Req = unknown, Res = unknown> {
  readonly kind: "service";
  /** Full path under the base URL, e.g. `services/core/query`. */
  readonly path: string;
  readonly method: "GET" | "POST";
  readonly _req?: Req;
  readonly _res?: Res;
}

export type Def =
  | ObjectDef<ObjectShape, ObjectOp, ActionDefs>
  | ParameterizedObjectDef<ObjectShape, ObjectOp, ActionDefs>
  | SingletonDef<ObjectShape, SingletonOp>
  | ServiceDef
  | ServiceGroupDef;

export interface ServiceGroupDef {
  readonly kind: "group";
  readonly members: Record<string, Def>;
}

/** Carries an Object's types into `object()` so the remaining type parameters can still be inferred. */
export interface ShapeOf<S extends ObjectShape> {
  readonly __shape?: S;
}
export const shape = <S extends ObjectShape>(): ShapeOf<S> => ({});

export function action<Req, Res>(name: string, path?: string): ActionDef<Req, Res> {
  return path === undefined ? { kind: "action", name } : { kind: "action", name, path };
}

export function object<S extends ObjectShape, const Ops extends ObjectOp, const A extends ActionDefs = {}>(
  _shape: ShapeOf<S>,
  path: string,
  ops: readonly Ops[],
  actions: A = {} as A,
): ObjectDef<S, Ops, A> {
  return { kind: "object", path, ops, actions };
}

export function parameterizedObject<S extends ObjectShape, const Ops extends ObjectOp, const A extends ActionDefs = {}>(
  _shape: ShapeOf<S>,
  template: string,
  ops: readonly Ops[],
  actions: A = {} as A,
): ParameterizedObjectDef<S, Ops, A> {
  return { kind: "parameterized-object", template, ops, actions };
}

export function singleton<S extends ObjectShape, const Ops extends SingletonOp>(
  _shape: ShapeOf<S>,
  path: string,
  ops: readonly Ops[],
): SingletonDef<S, Ops> {
  return { kind: "singleton", path, ops };
}

export function service<Req, Res>(path: string, method: "GET" | "POST" = "POST"): ServiceDef<Req, Res> {
  return { kind: "service", path, method };
}

export function group<const M extends Record<string, Def>>(members: M): { kind: "group"; members: M } {
  return { kind: "group", members };
}

/* ------------------------------------------------------------------ */
/* Instantiation: definitions + client -> callable API                 */
/* ------------------------------------------------------------------ */

/**
 * When `actions` is omitted inside an inline `defineApplication({...})` literal, TypeScript
 * infers `A` from the contextual constraint (`ActionDefs`, a string-indexed record) instead of
 * the `{}` default. The `string extends keyof A` guard treats that as "no actions".
 */
type ActionMethods<A extends ActionDefs> = string extends keyof A
  ? {}
  : {
      [K in keyof A]: A[K] extends ActionDef<infer Req, infer Res>
        ? [Req] extends [never]
          ? (options?: RequestOptions) => Promise<Res>
          : (body: Req, options?: RequestOptions) => Promise<Res>
        : never;
    };

export type Resource<S extends ObjectShape, Ops extends ObjectOp, A extends ActionDefs> = Pick<
  ObjectResource<S>,
  "path" | "query" | "queryAll" | "action" | Ops
> &
  ActionMethods<A>;

export interface SingletonMethods<S extends ObjectShape> {
  get(options?: RequestOptions): Promise<S["record"]>;
  update(body: S["update"], options?: RequestOptions): Promise<unknown>;
  create(body: S["create"], options?: RequestOptions): Promise<unknown>;
}

export type Instantiate<D> =
  D extends ObjectDef<infer S, infer Ops, infer A>
    ? Resource<S, Ops, A>
    : D extends SingletonDef<infer S, infer Ops>
      ? Pick<SingletonMethods<S>, Ops>
    : D extends ParameterizedObjectDef<infer S, infer Ops, infer A>
      ? (param: string) => Resource<S, Ops, A>
      : D extends ServiceDef<infer Req, infer Res>
        ? [Req] extends [never]
          ? (options?: RequestOptions) => Promise<Res>
          : (body: Req, options?: RequestOptions) => Promise<Res>
        : D extends { kind: "group"; members: infer M }
          ? { [K in keyof M]: Instantiate<M[K]> }
          : never;

export type Application<M extends Record<string, Def>> = { [K in keyof M]: Instantiate<M[K]> };

function buildResource(client: IntacctClient, path: string, actions: ActionDefs): unknown {
  const resource = new ObjectResource<ObjectShape>(client, path);
  for (const [prop, def] of Object.entries(actions)) {
    Object.defineProperty(resource, prop, {
      value: (body?: unknown, options?: RequestOptions) =>
        def.path === undefined
          ? resource.action(def.name, body ?? {}, options)
          : client.post(def.path, body ?? {}, options),
      enumerable: true,
    });
  }
  return resource;
}

function instantiate(client: IntacctClient, def: Def): unknown {
  switch (def.kind) {
    case "object":
      return buildResource(client, def.path, def.actions);
    case "parameterized-object":
      return (param: string) =>
        buildResource(client, def.template.replace(/\{[^}]+\}/, encodeURIComponent(param)), def.actions);
    case "singleton":
      return {
        get: (options?: RequestOptions) => client.get(def.path, options),
        update: (body: unknown, options?: RequestOptions) => client.patch(def.path, body, options),
        create: (body: unknown, options?: RequestOptions) => client.post(def.path, body, options),
      };
    case "service":
      return (bodyOrOptions?: unknown, maybeOptions?: RequestOptions) => {
        if (def.method === "GET") return client.get(def.path, bodyOrOptions as RequestOptions | undefined);
        return client.post(def.path, bodyOrOptions, maybeOptions);
      };
    case "group":
      return Object.fromEntries(Object.entries(def.members).map(([k, m]) => [k, instantiate(client, m)]));
  }
}

/**
 * Turns a map of definitions into a factory: `const ap = accountsPayable(client)`.
 * Resources are created lazily on first access so unused Objects cost nothing.
 */
export function defineApplication<const M extends Record<string, Def>>(members: M): (client: IntacctClient) => Application<M> {
  return (client) => {
    const cache = new Map<string, unknown>();
    return new Proxy({} as Application<M>, {
      get(_target, prop) {
        if (typeof prop !== "string" || !(prop in members)) return undefined;
        if (!cache.has(prop)) cache.set(prop, instantiate(client, members[prop] as Def));
        return cache.get(prop);
      },
      has: (_t, prop) => typeof prop === "string" && prop in members,
      ownKeys: () => Object.keys(members),
      getOwnPropertyDescriptor: (_t, prop) =>
        typeof prop === "string" && prop in members
          ? { enumerable: true, configurable: true, get: () => instantiate(client, members[prop] as Def) }
          : undefined,
    });
  };
}
