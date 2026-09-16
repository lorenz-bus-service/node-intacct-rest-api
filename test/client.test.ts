import { describe, expect, it } from "vitest";
import { IntacctClient, NotFoundError, RateLimitError, type TokenProvider } from "../src/index.js";
import { envelope, json, mockFetch } from "./helpers.js";

const make = (fetch: typeof globalThis.fetch, extra: Partial<ConstructorParameters<typeof IntacctClient>[0]> = {}) =>
  new IntacctClient({ auth: "tok", fetch, ...extra });

describe("IntacctClient", () => {
  it("sends bearer auth, accept JSON and unwraps the envelope", async () => {
    const { fetch, calls } = mockFetch([envelope({ key: "1" }, { totalCount: 1 })]);
    const client = make(fetch);
    const res = await client.request<{ key: string }>("GET", "/objects/accounts-payable/bill/1");
    expect(res.result).toEqual({ key: "1" });
    expect(res.meta).toEqual({ totalCount: 1 });
    expect(res.response.status).toBe(200);
    expect(calls[0]!.url).toBe("https://api.intacct.com/ia/api/v1/objects/accounts-payable/bill/1");
    expect(calls[0]!.headers.get("authorization")).toBe("Bearer tok");
    expect(calls[0]!.headers.get("accept")).toBe("application/json");
    expect(calls[0]!.headers.has("content-type")).toBe(false);
  });

  it("serialises bodies as JSON and appends query parameters", async () => {
    const { fetch, calls } = mockFetch([envelope({ key: "9" }, {}, 201)]);
    const out = await make(fetch).post("objects/accounts-payable/bill", { billNumber: "B1" }, { query: { a: 1, b: undefined } });
    expect(out).toEqual({ key: "9" });
    expect(calls[0]!.method).toBe("POST");
    expect(calls[0]!.url).toBe("https://api.intacct.com/ia/api/v1/objects/accounts-payable/bill?a=1");
    expect(calls[0]!.headers.get("content-type")).toBe("application/json");
    expect(calls[0]!.body).toEqual({ billNumber: "B1" });
  });

  it("returns undefined for 204 and tolerates non-envelope bodies", async () => {
    const { fetch } = mockFetch([new Response(null, { status: 204 }), json({ plain: true })]);
    const client = make(fetch);
    expect(await client.delete("objects/x/y/1")).toBeUndefined();
    expect(await client.get("anything")).toEqual({ plain: true });
  });

  it("applies the client Entity, per-request override, and null to clear", async () => {
    const { fetch, calls } = mockFetch(() => envelope({}));
    const client = make(fetch, { entity: "Ent-1" });
    await client.get("a");
    await client.get("a", { entity: "Ent-2" });
    await client.get("a", { entity: null });
    await client.withEntity("Ent-3").get("a");
    expect(calls.map((c) => c.headers.get("x-ia-api-param-entity"))).toEqual(["Ent-1", "Ent-2", null, "Ent-3"]);
  });

  it("maps failures to typed errors", async () => {
    const { fetch } = mockFetch([json({ "ia::error": { code: "notFound", message: "No such bill" } }, 404)]);
    const err = await make(fetch).get("objects/accounts-payable/bill/404").catch((e: unknown) => e);
    expect(err).toBeInstanceOf(NotFoundError);
    expect((err as NotFoundError).message).toBe("No such bill");
  });

  it("re-authenticates once on 401 when the provider can invalidate", async () => {
    let tokens = ["stale", "fresh"];
    const provider: TokenProvider = {
      getToken: async () => tokens[0]!,
      invalidate: () => void (tokens = tokens.slice(1)),
    };
    const { fetch, calls } = mockFetch([json({ error: { code: "GW-0034" } }, 401), envelope({ ok: true })]);
    const out = await make(fetch, { auth: provider }).get("a");
    expect(out).toEqual({ ok: true });
    expect(calls.map((c) => c.headers.get("authorization"))).toEqual(["Bearer stale", "Bearer fresh"]);
  });

  it("does not retry 401 twice", async () => {
    const provider: TokenProvider = { getToken: async () => "t", invalidate: () => {} };
    const { fetch, calls } = mockFetch(() => json({}, 401));
    await expect(make(fetch, { auth: provider }).get("a")).rejects.toThrow();
    expect(calls).toHaveLength(2);
  });

  it("does not retry 429 by default", async () => {
    const { fetch, calls } = mockFetch([json({ "ia::error": { code: "GW-0010" } }, 429, { "X-IA-Throttle-Limit-Retry-After": "0" })]);
    await expect(make(fetch).get("a")).rejects.toBeInstanceOf(RateLimitError);
    expect(calls).toHaveLength(1);
  });

  it("retries 429/503 when enabled, honouring retry-after, then gives up", async () => {
    const { fetch, calls } = mockFetch([
      json({}, 429, { "Retry-After": "0" }),
      json({}, 503),
      envelope({ ok: true }),
    ]);
    const client = make(fetch, { retry: { maxRetries: 2, baseDelayMs: 1 } });
    expect(await client.get("a")).toEqual({ ok: true });
    expect(calls).toHaveLength(3);

    const { fetch: f2, calls: c2 } = mockFetch(() => json({}, 429, { "Retry-After": "0" }));
    await expect(make(f2, { retry: { maxRetries: 1, baseDelayMs: 1 } }).get("a")).rejects.toBeInstanceOf(RateLimitError);
    expect(c2).toHaveLength(2);
  });

  it("normalises the base URL and leading slashes", () => {
    const client = make(mockFetch([]).fetch, { baseUrl: "https://api.intacct.com/ia/api/v1/" });
    expect(client.url("/services/core/query")).toBe("https://api.intacct.com/ia/api/v1/services/core/query");
  });
});
