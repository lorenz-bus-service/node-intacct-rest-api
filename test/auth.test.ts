import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  AuthenticationError,
  ClientCredentials,
  MemoryTokenStore,
  RefreshToken,
  StaticToken,
  type StoredToken,
  type TokenProvider,
} from "../src/index.js";
import { expiresAtFrom, jwtExp } from "../src/core/auth.js";
import { json, mockFetch } from "./helpers.js";

const tokenResponse = (access: string, extra: Record<string, unknown> = {}) =>
  json({ token_type: "Bearer", access_token: access, expires_in: 43200, ...extra });

const fakeJwt = (payload: Record<string, unknown>) =>
  `eyJhbGciOiJIUzI1NiJ9.${Buffer.from(JSON.stringify(payload)).toString("base64url")}.sig`;

beforeEach(() => vi.useFakeTimers({ now: new Date("2026-09-16T12:00:00Z") }));
afterEach(() => vi.useRealTimers());

describe("ClientCredentials", () => {
  const make = (fetch: typeof globalThis.fetch, store = new MemoryTokenStore()) =>
    new ClientCredentials({ clientId: "cid", clientSecret: "sec", username: "api@Company|Ent", fetch, store });

  it("posts the documented JSON body and reuses the token while valid", async () => {
    const { fetch, calls } = mockFetch([tokenResponse("t1")]);
    const auth = make(fetch);
    expect(await auth.getToken()).toBe("t1");
    expect(await auth.getToken()).toBe("t1");
    expect(calls).toHaveLength(1);
    expect(calls[0]!.method).toBe("POST");
    expect(calls[0]!.url).toBe("https://api.intacct.com/ia/api/v1/oauth2/token");
    expect(calls[0]!.headers.get("content-type")).toBe("application/json");
    expect(calls[0]!.body).toEqual({
      grant_type: "client_credentials",
      client_id: "cid",
      client_secret: "sec",
      username: "api@Company|Ent",
    });
  });

  it("mints again once the token is within the expiry skew", async () => {
    const { fetch, calls } = mockFetch([tokenResponse("t1"), tokenResponse("t2")]);
    const auth = make(fetch);
    await auth.getToken();
    vi.advanceTimersByTime(43200_000 - 61_000);
    expect(await auth.getToken()).toBe("t1");
    vi.advanceTimersByTime(2_000);
    expect(await auth.getToken()).toBe("t2");
    expect(calls).toHaveLength(2);
  });

  it("collapses concurrent callers into one token request", async () => {
    const { fetch, calls } = mockFetch([tokenResponse("t1")]);
    const auth = make(fetch);
    const tokens = await Promise.all([auth.getToken(), auth.getToken(), auth.getToken()]);
    expect(tokens).toEqual(["t1", "t1", "t1"]);
    expect(calls).toHaveLength(1);
  });

  it("reads a still-valid token from a shared store without calling the token endpoint", async () => {
    const store = new MemoryTokenStore();
    store.set("client_credentials:cid:api@Company|Ent", { accessToken: "stored", expiresAt: Date.now() + 3600_000 });
    const { fetch, calls } = mockFetch([]);
    expect(await make(fetch, store).getToken()).toBe("stored");
    expect(calls).toHaveLength(0);
  });

  it("invalidate() drops the cached token so the next call re-mints", async () => {
    const { fetch, calls } = mockFetch([tokenResponse("t1"), tokenResponse("t2")]);
    const auth = make(fetch);
    await auth.getToken();
    await auth.invalidate();
    expect(await auth.getToken()).toBe("t2");
    expect(calls).toHaveLength(2);
  });

  it("surfaces token endpoint failures as IntacctErrors", async () => {
    const { fetch } = mockFetch([json({ error: { code: "invalid_client", message: "bad secret" } }, 401)]);
    await expect(make(fetch).getToken()).rejects.toBeInstanceOf(AuthenticationError);
    const { fetch: f2 } = mockFetch([json({ nope: true })]);
    await expect(make(f2).getToken()).rejects.toThrow(/no access_token/);
  });

  it("calls onToken with the stored token", async () => {
    const seen: StoredToken[] = [];
    const { fetch } = mockFetch([tokenResponse("t1", { refresh_token: "r1" })]);
    const auth = new ClientCredentials({
      clientId: "cid",
      clientSecret: "sec",
      username: "u@c",
      fetch,
      onToken: (t) => void seen.push(t),
    });
    await auth.getToken();
    expect(seen).toEqual([{ accessToken: "t1", expiresAt: Date.now() + 43200_000, refreshToken: "r1" }]);
  });
});

describe("RefreshToken", () => {
  it("sends a form-encoded refresh grant and rotates the refresh token", async () => {
    const { fetch, calls } = mockFetch([
      tokenResponse("a1", { refresh_token: "r2", expires_in: 1 }),
      tokenResponse("a2", { refresh_token: "r3" }),
    ]);
    const auth = new RefreshToken({ clientId: "cid", clientSecret: "sec", refreshToken: "r1", entityId: "CentralUS-35", fetch, expirySkewSeconds: 0 });
    expect(await auth.getToken()).toBe("a1");
    expect(calls[0]!.headers.get("content-type")).toBe("application/x-www-form-urlencoded");
    const first = new URLSearchParams(calls[0]!.body as string);
    expect(first.get("grant_type")).toBe("refresh_token");
    expect(first.get("refresh_token")).toBe("r1");
    expect(first.get("entity_id")).toBe("CentralUS-35");

    vi.advanceTimersByTime(2_000);
    expect(await auth.getToken()).toBe("a2");
    expect(new URLSearchParams(calls[1]!.body as string).get("refresh_token")).toBe("r2");
  });
});

describe("expiry helpers", () => {
  it("prefers expires_in, then the JWT exp claim, then one hour", () => {
    const now = Date.now();
    expect(expiresAtFrom({ access_token: "x", expires_in: 10 })).toBe(now + 10_000);
    expect(expiresAtFrom({ access_token: fakeJwt({ exp: 1_800_000_000 }) })).toBe(1_800_000_000_000);
    expect(expiresAtFrom({ access_token: "not.a.jwt" })).toBe(now + 3600_000);
    expect(jwtExp("garbage")).toBeUndefined();
  });
});

describe("StaticToken", () => {
  it("returns the given token and has no invalidate", async () => {
    const t: TokenProvider = new StaticToken("abc");
    expect(await t.getToken()).toBe("abc");
    expect(t.invalidate).toBeUndefined();
  });
});
