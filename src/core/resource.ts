import type { IntacctClient } from "./client.js";
import { queryAll, queryPage, type FieldPath, type Page, type QueryAllOptions, type QueryRow, type QuerySpec } from "./query.js";
import type { ObjectReference, RequestOptions } from "./types.js";

/** The three shapes an Object carries: the full record, and its create and update bodies. */
export interface ObjectShape {
  record: unknown;
  create?: unknown;
  update?: unknown;
}

/** Operations an Object's REST endpoints actually offer. `query` is always available. */
export type ObjectOp = "get" | "create" | "update" | "delete";

/**
 * Generic typed access to one Intacct Object. Every Object in the API shares this
 * class; the generated code only supplies the path, the type parameters and the
 * operations Intacct exposes for it.
 */
export class ObjectResource<S extends ObjectShape> {
  constructor(
    protected readonly client: IntacctClient,
    /** `<application>/<object>`, e.g. `accounts-payable/bill`. */
    readonly path: string,
  ) {}

  /** Fetch one record by its system Key. */
  get(key: string, options?: RequestOptions): Promise<S["record"]> {
    return this.client.get<S["record"]>(`objects/${this.path}/${encodeURIComponent(key)}`, options);
  }

  create(body: S["create"], options?: RequestOptions): Promise<ObjectReference> {
    return this.client.post<ObjectReference>(`objects/${this.path}`, body, options);
  }

  update(key: string, body: S["update"], options?: RequestOptions): Promise<ObjectReference> {
    return this.client.patch<ObjectReference>(`objects/${this.path}/${encodeURIComponent(key)}`, body, options);
  }

  delete(key: string, options?: RequestOptions): Promise<void> {
    return this.client.delete<void>(`objects/${this.path}/${encodeURIComponent(key)}`, options);
  }

  /** One page from the Query Service, rows typed from `fields`. */
  query<const F extends readonly FieldPath<S["record"]>[]>(
    spec: QuerySpec<S["record"], F>,
    options?: RequestOptions,
  ): Promise<Page<QueryRow<S["record"], F>>> {
    return queryPage<QueryRow<S["record"], F>>(this.client, { ...(spec as QuerySpec<Record<string, unknown>>), object: this.path }, options);
  }

  /** Every matching record across pages, as an async iterable. */
  queryAll<const F extends readonly FieldPath<S["record"]>[]>(
    spec: QuerySpec<S["record"], F>,
    options?: QueryAllOptions,
  ): AsyncGenerator<QueryRow<S["record"], F>, void, undefined> {
    return queryAll<QueryRow<S["record"], F>>(this.client, { ...(spec as QuerySpec<Record<string, unknown>>), object: this.path }, options);
  }

  /** Call a Workflow Action, e.g. `submit`, at `/workflows/<path>/<action>`. */
  action<Req, Res>(name: string, body: Req, options?: RequestOptions): Promise<Res> {
    return this.client.post<Res>(`workflows/${this.path}/${name}`, body, options);
  }
}
