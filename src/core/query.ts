import type { IntacctClient } from "./client.js";
import type { PageMeta, RequestOptions } from "./types.js";

export const QUERY_PATH = "services/core/query";
export const MAX_PAGE_SIZE = 4000;

type Scalar = string | number | boolean | null;

/** A field on the record, a dotted related-object path, or an aggregate like `sum:amount`. */
export type FieldPath<T> =
  | (keyof T & string)
  | `${keyof T & string}.${string}`
  | `${"count" | "avg" | "sum" | "min" | "max"}:${string}`
  | (string & {});

type FieldMap<T> = Partial<Record<FieldPath<T>, Scalar>>;

/** One Query Service filter condition. Combine several with `filterExpression`. */
export type Filter<T = Record<string, unknown>> =
  | { $eq: FieldMap<T> }
  | { $ne: FieldMap<T> }
  | { $lt: FieldMap<T> }
  | { $lte: FieldMap<T> }
  | { $gt: FieldMap<T> }
  | { $gte: FieldMap<T> }
  | { $in: Partial<Record<FieldPath<T>, Scalar[]>> }
  | { $notIn: Partial<Record<FieldPath<T>, Scalar[]>> }
  | { $between: Partial<Record<FieldPath<T>, [Scalar, Scalar]>> }
  | { $notBetween: Partial<Record<FieldPath<T>, [Scalar, Scalar]>> }
  | { $contains: FieldMap<T> }
  | { $notContains: FieldMap<T> }
  | { $has: FieldMap<T> }
  | { $startsWith: FieldMap<T> }
  | { $notStartsWith: FieldMap<T> }
  | { $endsWith: FieldMap<T> }
  | { $notEndsWith: FieldMap<T> };

export interface FilterParameters {
  asOfDate?: string;
  caseSensitiveComparison?: boolean;
  includePrivate?: boolean;
  [key: string]: unknown;
}

export interface QuerySpec<T, F extends readonly FieldPath<T>[] = readonly FieldPath<T>[]> {
  fields: F;
  filters?: Filter<T>[];
  /** e.g. `"(1 and 2) or 3"`, referencing 1-based positions in `filters`. */
  filterExpression?: string;
  filterParameters?: FilterParameters;
  orderBy?: Partial<Record<FieldPath<T>, "asc" | "desc">>[];
  /** 1-based first row. */
  start?: number;
  /** Rows per page, at most 4000. */
  size?: number;
}

/** The raw body sent to the Query Service, including `object`. */
export type QueryRequest<T = Record<string, unknown>> = QuerySpec<T> & { object: string };

/**
 * The record type produced by a `fields` selection. Direct fields keep the schema's
 * type; one level of dotted related fields is resolved; anything else is `unknown`.
 */
export type QueryRow<T, F extends readonly string[]> = {
  [K in F[number]]: K extends keyof T
    ? T[K]
    : K extends `${infer A}.${infer B}`
      ? A extends keyof T
        ? B extends keyof NonNullable<T[A]>
          ? NonNullable<T[A]>[B]
          : unknown
        : unknown
      : unknown;
};

export interface Page<Row> extends PageMeta {
  items: Row[];
}

export interface QueryAllOptions extends RequestOptions {
  /** Stop after this many records. */
  maxRecords?: number;
}

/** One page from the Query Service, untyped. Typed resources wrap this. */
export async function queryPage<Row = Record<string, unknown>>(
  client: IntacctClient,
  request: QueryRequest<Record<string, unknown>>,
  options?: RequestOptions,
): Promise<Page<Row>> {
  const { result, meta } = await client.request<Row[], Partial<PageMeta>>("POST", QUERY_PATH, {
    ...options,
    body: request,
  });
  const items = Array.isArray(result) ? result : [];
  return {
    items,
    totalCount: meta.totalCount ?? items.length,
    start: meta.start ?? request.start ?? 1,
    pageSize: meta.pageSize ?? items.length,
    next: meta.next ?? null,
    previous: meta.previous ?? null,
  };
}

/**
 * Follows `next` until Intacct returns null. Pages are evaluated independently by
 * Intacct, so records can be skipped or repeated if the data changes mid-iteration.
 */
export async function* queryAll<Row = Record<string, unknown>>(
  client: IntacctClient,
  request: QueryRequest<Record<string, unknown>>,
  options: QueryAllOptions = {},
): AsyncGenerator<Row, void, undefined> {
  const { maxRecords, ...requestOptions } = options;
  let start = request.start ?? 1;
  let yielded = 0;
  for (;;) {
    const page = await queryPage<Row>(client, { ...request, start }, requestOptions);
    for (const item of page.items) {
      if (maxRecords !== undefined && yielded >= maxRecords) return;
      yielded++;
      yield item;
    }
    if (page.next == null || page.items.length === 0) return;
    if (maxRecords !== undefined && yielded >= maxRecords) return;
    start = page.next;
  }
}
