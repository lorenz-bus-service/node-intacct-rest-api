import type { Fetch } from "./types.js";
import { AuthenticationError, errorFromResponse } from "./errors.js";

export const DEFAULT_TOKEN_URL = "https://api.intacct.com/ia/api/v1/oauth2/token";

/** An access token plus when it stops being valid, as epoch milliseconds. */
export interface StoredToken {
  accessToken: string;
  expiresAt: number;
  refreshToken?: string;
}

/**
 * Where valid tokens live between calls. The default is in-memory; supply your own
 * to share a token across processes or restarts. Methods may be sync or async.
 */
export interface TokenStore {
  get(key: string): StoredToken | undefined | Promise<StoredToken | undefined>;
  set(key: string, token: StoredToken): void | Promise<void>;
  delete(key: string): void | Promise<void>;
}

export class MemoryTokenStore implements TokenStore {
  private readonly tokens = new Map<string, StoredToken>();
  get(key: string) {
    return this.tokens.get(key);
  }
  set(key: string, token: StoredToken) {
    this.tokens.set(key, token);
  }
  delete(key: string) {
    this.tokens.delete(key);
  }
}

/** Anything that can produce a bearer token for a request. */
export interface TokenProvider {
  getToken(): Promise<string>;
  /** Called after a 401 so the next call fetches a fresh token. Optional for static tokens. */
  invalidate?(): Promise<void> | void;
}

/** Wraps a token the caller manages themselves. */
export class StaticToken implements TokenProvider {
  constructor(private readonly token: string) {}
  async getToken() {
    return this.token;
  }
}

export interface OAuthTokenResponse {
  token_type?: string;
  access_token: string;
  refresh_token?: string;
  expires_in?: number;
}

export interface OAuthProviderOptions {
  clientId: string;
  clientSecret: string;
  /** Defaults to Intacct's production token endpoint. */
  tokenUrl?: string;
  store?: TokenStore;
  /** Seconds before `expiresAt` at which the token is treated as expired. Default 60. */
  expirySkewSeconds?: number;
  fetch?: Fetch;
  /** Called whenever a new token is obtained. */
  onToken?: (token: StoredToken) => void | Promise<void>;
}

/**
 * Shared machinery for OAuth grants: cache lookup, single-flight minting,
 * expiry handling, and persistence through the TokenStore. Subclasses only
 * describe the grant request.
 */
export abstract class OAuthTokenProvider implements TokenProvider {
  protected readonly clientId: string;
  protected readonly clientSecret: string;
  protected readonly tokenUrl: string;
  protected readonly fetchImpl: Fetch;
  private readonly store: TokenStore;
  private readonly skewMs: number;
  private readonly onToken: OAuthProviderOptions["onToken"];
  private inflight: Promise<StoredToken> | undefined;

  constructor(options: OAuthProviderOptions) {
    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret;
    this.tokenUrl = options.tokenUrl ?? DEFAULT_TOKEN_URL;
    this.store = options.store ?? new MemoryTokenStore();
    this.skewMs = (options.expirySkewSeconds ?? 60) * 1000;
    this.fetchImpl = options.fetch ?? globalThis.fetch;
    this.onToken = options.onToken;
  }

  /** Distinguishes this credential set inside a shared TokenStore. */
  protected abstract cacheKey(): string;
  /** The grant-specific token request. */
  protected abstract tokenRequest(previous: StoredToken | undefined): RequestInit;
  /** Lets a grant remember rotated material (e.g. a new refresh token). */
  protected onTokenObtained(_token: StoredToken): void {}

  async getToken(): Promise<string> {
    const cached = await this.store.get(this.cacheKey());
    if (cached && cached.expiresAt - this.skewMs > Date.now()) return cached.accessToken;
    this.inflight ??= this.mint(cached).finally(() => (this.inflight = undefined));
    return (await this.inflight).accessToken;
  }

  async invalidate(): Promise<void> {
    await this.store.delete(this.cacheKey());
  }

  private async mint(previous: StoredToken | undefined): Promise<StoredToken> {
    const res = await this.fetchImpl(this.tokenUrl, this.tokenRequest(previous));
    const text = await res.text();
    let body: unknown;
    try {
      body = text ? JSON.parse(text) : undefined;
    } catch {
      body = text;
    }
    if (!res.ok) throw errorFromResponse(res.status, body, res);
    const parsed = body as Partial<OAuthTokenResponse> | undefined;
    if (!parsed || typeof parsed.access_token !== "string") {
      throw new AuthenticationError({
        status: res.status,
        code: undefined,
        message: "Token endpoint returned no access_token",
        supportId: undefined,
        details: [],
        body,
        response: res,
      });
    }
    const token: StoredToken = {
      accessToken: parsed.access_token,
      expiresAt: expiresAtFrom(parsed),
      ...(parsed.refresh_token !== undefined ? { refreshToken: parsed.refresh_token } : {}),
    };
    this.onTokenObtained(token);
    await this.store.set(this.cacheKey(), token);
    await this.onToken?.(token);
    return token;
  }
}

/** Prefer `expires_in`; fall back to the JWT `exp` claim; else assume one hour. */
export function expiresAtFrom(res: Partial<OAuthTokenResponse>): number {
  if (typeof res.expires_in === "number" && Number.isFinite(res.expires_in)) {
    return Date.now() + res.expires_in * 1000;
  }
  const exp = res.access_token ? jwtExp(res.access_token) : undefined;
  return exp ?? Date.now() + 3600_000;
}

export function jwtExp(token: string): number | undefined {
  const payload = token.split(".")[1];
  if (!payload) return undefined;
  try {
    const json = Buffer.from(payload.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf8");
    const exp = (JSON.parse(json) as { exp?: unknown }).exp;
    return typeof exp === "number" ? exp * 1000 : undefined;
  } catch {
    return undefined;
  }
}

export interface ClientCredentialsOptions extends OAuthProviderOptions {
  /** `userId@companyId`, or `userId@companyId|entityId` for an entity-level token. */
  username: string;
}

/** OAuth client-credentials grant. Needs a Web Services user authorised for the client id. */
export class ClientCredentials extends OAuthTokenProvider {
  private readonly username: string;
  constructor(options: ClientCredentialsOptions) {
    super(options);
    this.username = options.username;
  }
  protected cacheKey() {
    return `client_credentials:${this.clientId}:${this.username}`;
  }
  protected tokenRequest(): RequestInit {
    return {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        grant_type: "client_credentials",
        client_id: this.clientId,
        client_secret: this.clientSecret,
        username: this.username,
      }),
    };
  }
}

export interface RefreshTokenOptions extends OAuthProviderOptions {
  /** A refresh token obtained from an authorization-code login. */
  refreshToken: string;
  /** Mint entity-level access tokens for this Entity. */
  entityId?: string;
}

/**
 * OAuth refresh-token grant. Intacct may rotate the refresh token; the latest one is
 * used for subsequent refreshes and handed to `onToken` so it can be persisted.
 */
export class RefreshToken extends OAuthTokenProvider {
  private refreshToken: string;
  private readonly entityId: string | undefined;
  constructor(options: RefreshTokenOptions) {
    super(options);
    this.refreshToken = options.refreshToken;
    this.entityId = options.entityId;
  }
  protected cacheKey() {
    return `refresh_token:${this.clientId}:${this.entityId ?? ""}`;
  }
  protected tokenRequest(previous: StoredToken | undefined): RequestInit {
    const params = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: previous?.refreshToken ?? this.refreshToken,
      client_id: this.clientId,
      client_secret: this.clientSecret,
    });
    if (this.entityId) params.set("entity_id", this.entityId);
    return {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded", accept: "application/json" },
      body: params.toString(),
    };
  }
  protected override onTokenObtained(token: StoredToken) {
    if (token.refreshToken) this.refreshToken = token.refreshToken;
  }
}
