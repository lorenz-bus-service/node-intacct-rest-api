import { StaticToken, type TokenProvider } from "./auth.js";
import { errorFromResponse, IntacctError, retryAfterFromHeaders } from "./errors.js";
import type { Envelope, Fetch, HttpMethod, Meta, RequestOptions } from "./types.js";

export const DEFAULT_BASE_URL = "https://api.intacct.com/ia/api/v1";
export const ENTITY_HEADER = "X-IA-API-Param-Entity";

export interface RetryOptions {
  /** Maximum retries after the first attempt. Default 3. */
  maxRetries?: number;
  /** Statuses to retry. Default 429 and 503. */
  statuses?: number[];
  /** Base delay in ms for exponential backoff when Intacct sends no retry-after. Default 500. */
  baseDelayMs?: number;
  /** Cap on any single wait. Default 30 000 ms. */
  maxDelayMs?: number;
}

export interface IntacctClientOptions {
  /** A TokenProvider, or a static bearer token string. */
  auth: TokenProvider | string;
  /** Defaults to Intacct production. */
  baseUrl?: string;
  /** Default Entity for every request. Overridable per call. */
  entity?: string;
  /** Headers sent on every request. */
  headers?: Record<string, string>;
  fetch?: Fetch;
  /**
   * Automatic retry on 429/503 honouring Intacct's retry-after headers.
   * Off by default; pass `true` for defaults or an object to tune.
   */
  retry?: boolean | RetryOptions;
}

export interface CallOptions extends RequestOptions {
  body?: unknown;
  query?: Record<string, string | number | boolean | undefined>;
}

/**
 * The generic transport. Any Intacct path can be called untyped through `request`,
 * `get`, `post`, `patch` and `delete`; typed resources are built on top of it.
 */
export class IntacctClient {
  readonly baseUrl: string;
  readonly defaultEntity: string | undefined;
  private readonly auth: TokenProvider;
  private readonly fetchImpl: Fetch;
  private readonly headers: Record<string, string>;
  private readonly retry: Required<RetryOptions> | undefined;

  constructor(options: IntacctClientOptions) {
    this.auth = typeof options.auth === "string" ? new StaticToken(options.auth) : options.auth;
    this.baseUrl = (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
    this.defaultEntity = options.entity;
    this.fetchImpl = options.fetch ?? globalThis.fetch;
    this.headers = options.headers ?? {};
    this.retry = options.retry
      ? {
          maxRetries: 3,
          statuses: [429, 503],
          baseDelayMs: 500,
          maxDelayMs: 30_000,
          ...(options.retry === true ? {} : options.retry),
        }
      : undefined;
  }

  /** Build a client that shares everything but defaults to a different Entity. */
  withEntity(entity: string | undefined): IntacctClient {
    return new IntacctClient({
      auth: this.auth,
      baseUrl: this.baseUrl,
      ...(entity !== undefined ? { entity } : {}),
      headers: this.headers,
      fetch: this.fetchImpl,
      ...(this.retry ? { retry: this.retry } : {}),
    });
  }

  /** Full envelope: `ia::result`, `ia::meta` and the raw Response. */
  async request<TResult = unknown, TMeta = Meta>(
    method: HttpMethod,
    path: string,
    options: CallOptions = {},
  ): Promise<Envelope<TResult, TMeta>> {
    const response = await this.send(method, path, options);
    if (response.status === 204) {
      return { result: undefined as TResult, meta: {} as TMeta, response };
    }
    const body = (await parseBody(response)) as Record<string, unknown> | undefined;
    return {
      result: (body?.["ia::result"] ?? body) as TResult,
      meta: (body?.["ia::meta"] ?? {}) as TMeta,
      response,
    };
  }

  /** `ia::result` only. */
  async get<T = unknown>(path: string, options?: Omit<CallOptions, "body">): Promise<T> {
    return (await this.request<T>("GET", path, options)).result;
  }
  async post<T = unknown>(path: string, body?: unknown, options?: Omit<CallOptions, "body">): Promise<T> {
    return (await this.request<T>("POST", path, { ...options, body })).result;
  }
  async patch<T = unknown>(path: string, body?: unknown, options?: Omit<CallOptions, "body">): Promise<T> {
    return (await this.request<T>("PATCH", path, { ...options, body })).result;
  }
  async delete<T = void>(path: string, options?: Omit<CallOptions, "body">): Promise<T> {
    return (await this.request<T>("DELETE", path, options)).result;
  }

  /** Raw HTTP: auth, Entity header, error mapping and retries applied, body untouched. */
  async send(method: HttpMethod, path: string, options: CallOptions = {}): Promise<Response> {
    const url = this.url(path, options.query);
    let attempt = 0;
    let retriedAuth = false;
    for (;;) {
      const token = await this.auth.getToken();
      const headers = new Headers({ accept: "application/json", ...this.headers, ...options.headers });
      headers.set("authorization", `Bearer ${token}`);
      const entity = options.entity === undefined ? this.defaultEntity : options.entity;
      if (entity) headers.set(ENTITY_HEADER, entity);
      const init: RequestInit = { method, headers };
      if (options.signal) init.signal = options.signal;
      if (options.body !== undefined) {
        headers.set("content-type", "application/json");
        init.body = JSON.stringify(options.body);
      }

      const response = await this.fetchImpl(url, init);
      if (response.ok) return response;

      if (response.status === 401 && !retriedAuth && this.auth.invalidate) {
        retriedAuth = true;
        await this.auth.invalidate();
        continue;
      }
      if (this.retry && this.retry.statuses.includes(response.status) && attempt < this.retry.maxRetries) {
        const wait = retryAfterFromHeaders(response.headers);
        const delay = Math.min(
          this.retry.maxDelayMs,
          wait !== undefined ? wait * 1000 : this.retry.baseDelayMs * 2 ** attempt,
        );
        attempt++;
        await response.body?.cancel().catch(() => {});
        await sleep(delay, options.signal);
        continue;
      }
      throw errorFromResponse(response.status, await parseBody(response), response);
    }
  }

  url(path: string, query?: CallOptions["query"]): string {
    const url = new URL(`${this.baseUrl}/${path.replace(/^\/+/, "")}`);
    for (const [k, v] of Object.entries(query ?? {})) {
      if (v !== undefined) url.searchParams.set(k, String(v));
    }
    return url.toString();
  }
}

async function parseBody(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) return undefined;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(signal.reason ?? new IntacctError({ status: 0, code: undefined, message: "aborted", supportId: undefined, details: [], body: undefined, response: undefined }));
    const t = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    const onAbort = () => {
      clearTimeout(t);
      reject(signal?.reason);
    };
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}
