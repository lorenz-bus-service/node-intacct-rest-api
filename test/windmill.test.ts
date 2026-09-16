import { beforeEach, describe, expect, it, vi } from "vitest";

const variables = new Map<string, string>();
vi.mock("windmill-client", () => ({
  getVariable: vi.fn(async (path: string) => {
    if (!variables.has(path)) throw new Error("404 variable not found");
    return variables.get(path)!;
  }),
  setVariable: vi.fn(async (path: string, value: string) => void variables.set(path, value)),
}));

import * as wmill from "windmill-client";
import { WindmillTokenStore } from "../src/windmill/index.js";
import { ClientCredentials } from "../src/index.js";
import { json, mockFetch } from "./helpers.js";

beforeEach(() => {
  variables.clear();
  vi.clearAllMocks();
});

describe("WindmillTokenStore", () => {
  const token = { accessToken: "a", expiresAt: 123 };

  it("returns undefined and does not throw when the variable does not exist", async () => {
    expect(await new WindmillTokenStore("f/x/cache").get("k")).toBeUndefined();
  });

  it("creates the variable as a secret and round-trips tokens", async () => {
    const store = new WindmillTokenStore("f/x/cache");
    await store.set("k1", token);
    await store.set("k2", { ...token, accessToken: "b" });
    expect(vi.mocked(wmill.setVariable).mock.calls[0]!.slice(0, 3)).toEqual(["f/x/cache", JSON.stringify({ k1: token }), true]);
    expect(await store.get("k1")).toEqual(token);
    expect(await store.get("k2")).toEqual({ ...token, accessToken: "b" });
    await store.delete("k1");
    expect(await store.get("k1")).toBeUndefined();
    expect(await store.get("k2")).toBeDefined();
  });

  it("treats corrupt contents as empty", async () => {
    variables.set("f/x/cache", "not json");
    expect(await new WindmillTokenStore("f/x/cache").get("k")).toBeUndefined();
  });

  it("lets two providers share one minted token across 'processes'", async () => {
    const { fetch, calls } = mockFetch([json({ access_token: "t1", expires_in: 3600 })]);
    const make = () =>
      new ClientCredentials({ clientId: "c", clientSecret: "s", username: "u@co", fetch, store: new WindmillTokenStore("f/x/cache") });
    expect(await make().getToken()).toBe("t1");
    expect(await make().getToken()).toBe("t1");
    expect(calls).toHaveLength(1);
  });
});
