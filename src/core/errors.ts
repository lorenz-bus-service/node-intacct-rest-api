export interface IntacctErrorDetail {
  code?: string;
  message?: string;
  [key: string]: unknown;
}

export interface IntacctErrorInfo {
  status: number;
  code: string | undefined;
  message: string;
  supportId: string | undefined;
  details: IntacctErrorDetail[];
  body: unknown;
  response: Response | undefined;
}

/**
 * Base class for every error raised from an Intacct HTTP response.
 * Subclasses exist per family so callers can `instanceof` instead of matching codes.
 */
export class IntacctError extends Error {
  readonly status: number;
  /** Intacct error code, e.g. `GW-0010`. Undefined when the body carried none. */
  readonly code: string | undefined;
  readonly supportId: string | undefined;
  readonly details: IntacctErrorDetail[];
  /** The parsed response body, whatever shape it had. */
  readonly body: unknown;
  readonly response: Response | undefined;

  constructor(info: IntacctErrorInfo) {
    super(info.message);
    this.name = new.target.name;
    this.status = info.status;
    this.code = info.code;
    this.supportId = info.supportId;
    this.details = info.details;
    this.body = info.body;
    this.response = info.response;
  }
}

/** 401: missing, expired or invalid token. */
export class AuthenticationError extends IntacctError {}
/** 403: the user lacks permission for the Object or Entity. */
export class AuthorizationError extends IntacctError {}
/** 404: unknown Key or path. */
export class NotFoundError extends IntacctError {}
/** 400 or 422: Intacct rejected the request body or query. */
export class ValidationError extends IntacctError {}
/** 409: the record changed underneath the request. */
export class ConflictError extends IntacctError {}
/** 5xx, including 503 overload. */
export class ServerError extends IntacctError {}
/** 429: throttled. `retryAfterSeconds` is read from Intacct's rate-limit headers when present. */
export class RateLimitError extends IntacctError {
  readonly retryAfterSeconds: number | undefined;
  constructor(info: IntacctErrorInfo) {
    super(info);
    this.retryAfterSeconds = retryAfterFromHeaders(info.response?.headers);
  }
}

const RETRY_AFTER_HEADERS = [
  "retry-after",
  "x-ia-throttle-limit-retry-after",
  "x-ia-hour-rate-limit-retry-after",
  "x-ia-minute-rate-limit-retry-after",
  "x-ia-tenant-throttle-limit-retry-after",
];

export function retryAfterFromHeaders(headers: Headers | undefined): number | undefined {
  if (!headers) return undefined;
  for (const name of RETRY_AFTER_HEADERS) {
    const raw = headers.get(name);
    if (raw == null) continue;
    const seconds = Number(raw);
    if (Number.isFinite(seconds)) return Math.max(0, seconds);
    const date = Date.parse(raw);
    if (Number.isFinite(date)) return Math.max(0, Math.ceil((date - Date.now()) / 1000));
  }
  return undefined;
}

type Rec = Record<string, unknown>;
const isRec = (v: unknown): v is Rec => typeof v === "object" && v !== null && !Array.isArray(v);

/**
 * Intacct's error envelope is inconsistent. Seen in the wild:
 *   { "ia::error": {...}, "ia::meta": {...} }
 *   { "ia::result": { "ia::error": {...} } }
 *   { "error": { code, message, supportId } }
 * This finds whichever is present.
 */
export function extractErrorObject(body: unknown): Rec | undefined {
  if (!isRec(body)) return undefined;
  const candidates = [body["ia::error"], isRec(body["ia::result"]) ? body["ia::result"]["ia::error"] : undefined, body["error"]];
  for (const c of candidates) if (isRec(c)) return c;
  return undefined;
}

export function errorFromResponse(status: number, body: unknown, response?: Response): IntacctError {
  const err = extractErrorObject(body);
  const rawDetails = err?.["details"];
  const details: IntacctErrorDetail[] = Array.isArray(rawDetails)
    ? rawDetails.filter(isRec)
    : isRec(rawDetails)
      ? [rawDetails]
      : [];
  const code = typeof err?.["code"] === "string" ? err["code"] : undefined;
  const firstDetail = details[0]?.message;
  const message =
    (typeof err?.["message"] === "string" && err["message"]) ||
    (typeof firstDetail === "string" && firstDetail) ||
    (typeof body === "string" && body.trim()) ||
    `Intacct request failed with HTTP ${status}`;
  const supportId = typeof err?.["supportId"] === "string" ? err["supportId"] : undefined;
  const info: IntacctErrorInfo = { status, code, message, supportId, details, body, response };

  switch (status) {
    case 400:
    case 422:
      return new ValidationError(info);
    case 401:
      return new AuthenticationError(info);
    case 403:
      return new AuthorizationError(info);
    case 404:
      return new NotFoundError(info);
    case 409:
      return new ConflictError(info);
    case 429:
      return new RateLimitError(info);
    default:
      return status >= 500 ? new ServerError(info) : new IntacctError(info);
  }
}
