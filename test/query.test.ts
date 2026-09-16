import { describe, expect, expectTypeOf, it } from "vitest";
import { IntacctClient, queryAll, queryPage, type QueryRow } from "../src/index.js";
import { envelope, mockFetch } from "./helpers.js";

const page = (items: unknown[], meta: Record<string, unknown>) => envelope(items, meta);

describe("queryPage", () => {
  it("posts the Query Service body and maps ia::meta into a Page", async () => {
    const { fetch, calls } = mockFetch([
      page([{ id: "V1" }, { id: "V2" }], { totalCount: 5, start: 1, pageSize: 2, next: 3, previous: null }),
    ]);
    const client = new IntacctClient({ auth: "t", fetch });
    const result = await queryPage(client, {
      object: "accounts-payable/vendor",
      fields: ["id"],
      filters: [{ $eq: { status: "active" } }],
      orderBy: [{ id: "asc" }],
      size: 2,
    });
    expect(calls[0]!.url).toMatch(/\/services\/core\/query$/);
    expect(calls[0]!.body).toEqual({
      object: "accounts-payable/vendor",
      fields: ["id"],
      filters: [{ $eq: { status: "active" } }],
      orderBy: [{ id: "asc" }],
      size: 2,
    });
    expect(result).toEqual({
      items: [{ id: "V1" }, { id: "V2" }],
      totalCount: 5,
      start: 1,
      pageSize: 2,
      next: 3,
      previous: null,
    });
  });

  it("copes with missing meta", async () => {
    const { fetch } = mockFetch([envelope([{ id: "x" }])]);
    const result = await queryPage(new IntacctClient({ auth: "t", fetch }), { object: "o", fields: ["id"], start: 7 });
    expect(result).toMatchObject({ totalCount: 1, start: 7, pageSize: 1, next: null, previous: null });
  });
});

describe("queryAll", () => {
  it("follows next until null", async () => {
    const { fetch, calls } = mockFetch([
      page([1, 2], { totalCount: 5, start: 1, pageSize: 2, next: 3, previous: null }),
      page([3, 4], { totalCount: 5, start: 3, pageSize: 2, next: 5, previous: 1 }),
      page([5], { totalCount: 5, start: 5, pageSize: 2, next: null, previous: 3 }),
    ]);
    const client = new IntacctClient({ auth: "t", fetch });
    const seen: unknown[] = [];
    for await (const row of queryAll(client, { object: "o", fields: ["id"] })) seen.push(row);
    expect(seen).toEqual([1, 2, 3, 4, 5]);
    expect(calls.map((c) => (c.body as { start: number }).start)).toEqual([1, 3, 5]);
  });

  it("stops at maxRecords without fetching further pages", async () => {
    const { fetch, calls } = mockFetch([
      page([1, 2], { next: 3 }),
      page([3, 4], { next: 5 }),
      page([5], { next: null }),
    ]);
    const client = new IntacctClient({ auth: "t", fetch });
    const seen: unknown[] = [];
    for await (const row of queryAll(client, { object: "o", fields: ["id"] }, { maxRecords: 3 })) seen.push(row);
    expect(seen).toEqual([1, 2, 3]);
    expect(calls).toHaveLength(2);
  });

  it("stops on an empty page even if next is set", async () => {
    const { fetch, calls } = mockFetch([page([], { next: 2 })]);
    const seen: unknown[] = [];
    for await (const row of queryAll(new IntacctClient({ auth: "t", fetch }), { object: "o", fields: ["id"] })) seen.push(row);
    expect(seen).toEqual([]);
    expect(calls).toHaveLength(1);
  });
});

describe("QueryRow", () => {
  it("types direct fields, one level of dotted paths, and leaves the rest unknown", () => {
    interface Bill {
      id?: string;
      totalDue?: string;
      vendor?: { id?: string; name?: string } | null;
    }
    type Row = QueryRow<Bill, ["id", "vendor.name", "sum:totalDue", "custom.field"]>;
    expectTypeOf<Row["id"]>().toEqualTypeOf<string | undefined>();
    expectTypeOf<Row["vendor.name"]>().toEqualTypeOf<string | undefined>();
    expectTypeOf<Row["sum:totalDue"]>().toEqualTypeOf<unknown>();
    expectTypeOf<Row["custom.field"]>().toEqualTypeOf<unknown>();
  });
});
