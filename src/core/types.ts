/** Metadata returned with single-record and mutation responses. */
export interface Meta {
  totalCount?: number;
  totalSuccess?: number;
  totalError?: number;
  [key: string]: unknown;
}

/** Metadata returned with paginated responses (list and Query Service). */
export interface PageMeta {
  totalCount: number;
  start: number;
  pageSize: number;
  next: number | null;
  previous: number | null;
}

/** The `{ "ia::result", "ia::meta" }` wrapper Intacct returns on success. */
export interface Envelope<TResult, TMeta = Meta> {
  result: TResult;
  meta: TMeta;
  /** Raw HTTP response, for headers such as rate-limit counters. */
  response: Response;
}

/** The minimal `{ key, id, href }` triple Intacct returns from list, create and update. */
export interface ObjectReference {
  key: string;
  id: string;
  href: string;
}

/** Per-request options accepted by every call. */
export interface RequestOptions {
  /**
   * Entity to run the request against. Overrides the client default.
   * Pass `null` to force the top-level company even when the client has a default.
   */
  entity?: string | null;
  /** Extra headers merged over the client defaults. */
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

export type HttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export type Fetch = typeof fetch;
