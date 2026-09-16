import { readdirSync } from "node:fs";
import { describe, expect, expectTypeOf, it } from "vitest";
import { IntacctClient, type ObjectReference } from "../src/index.js";
import { accountsPayable, type Bill, type BillCreate } from "../src/generated/accounts-payable/index.js";
import { generalLedger } from "../src/generated/general-ledger/index.js";
import { orderEntry } from "../src/generated/order-entry/index.js";
import { companyConfiguration } from "../src/generated/company-configuration/index.js";
import { commonResources } from "../src/generated/common-resources/index.js";
import { json, mockFetch, specExample } from "./helpers.js";

type Has<T, K extends string> = K extends keyof T ? true : false;

const client = (responses: Response[]) => {
  const { fetch, calls } = mockFetch(responses);
  return { client: new IntacctClient({ auth: "t", fetch }), calls };
};

describe("generated accounts-payable", () => {
  it("returns the spec's own example for GET bill", async () => {
    const example = specExample("accounts-payable", "get", "/objects/accounts-payable/bill/{key}") as Record<string, unknown>;
    const { client: c, calls } = client([json(example)]);
    const bill = await accountsPayable(c).bill.get("60");
    expect(bill).toEqual(example["ia::result"]);
    expect(bill.billNumber).toBe("Bill-001-06");
    expect(bill.vendor?.id).toBe("1099 Int");
    expect(new URL(calls[0]!.url).pathname).toBe("/ia/api/v1/objects/accounts-payable/bill/60");
  });

  it("creates a bill with the spec's request example and gets an Object Reference back", async () => {
    const body = specExample("accounts-payable", "post", "/objects/accounts-payable/bill", "request") as BillCreate;
    const response = specExample("accounts-payable", "post", "/objects/accounts-payable/bill", 201) as Record<string, unknown>;
    const { client: c, calls } = client([json(response, 201)]);
    const ref = await accountsPayable(c).bill.create(body);
    expect(ref).toEqual(response["ia::result"]);
    expect(calls[0]!.body).toEqual(body);
    expectTypeOf(ref).toEqualTypeOf<ObjectReference>();
  });

  it("exposes Workflow Actions from /workflows", async () => {
    const response = specExample("accounts-payable", "post", "/workflows/accounts-payable/bill/submit") as Record<string, unknown>;
    const { client: c, calls } = client([json(response)]);
    const out = await accountsPayable(c).bill.submit({ key: "132" });
    expect(out).toEqual(response["ia::result"]);
    expect(new URL(calls[0]!.url).pathname).toBe("/ia/api/v1/workflows/accounts-payable/bill/submit");
  });

  it("types the record from the schema and narrows ops", () => {
    const { client: c } = client([]);
    const ap = accountsPayable(c);
    expectTypeOf(ap.bill.get).returns.resolves.toEqualTypeOf<Bill>();
    expectTypeOf<Has<typeof ap.billSummary, "create">>().toEqualTypeOf<false>();
    expectTypeOf<Has<typeof ap.billSummary, "get">>().toEqualTypeOf<true>();
    expectTypeOf<Bill["billNumber"]>().toEqualTypeOf<string | null | undefined>();
  });
});

describe("other generated applications", () => {
  it("general ledger exposes the account object and allocation-run actions", async () => {
    const { client: c, calls } = client([json({ "ia::result": [{ id: "1000" }], "ia::meta": { totalCount: 1, next: null } })]);
    const gl = generalLedger(c);
    const page = await gl.account.query({ fields: ["id", "name"] });
    expect(page.items[0]!.id).toBe("1000");
    expect(calls[0]!.body).toMatchObject({ object: "general-ledger/account" });
    expectTypeOf<Has<typeof gl.accountAllocationRun, "restart">>().toEqualTypeOf<true>();
  });

  it("order entry parameterized documents fill the document name", async () => {
    const { client: c, calls } = client([json({ "ia::result": { key: "1" } })]);
    await orderEntry(c).documentByDocumentName("Sales Invoice").get("1");
    expect(new URL(calls[0]!.url).pathname).toBe("/ia/api/v1/objects/order-entry/document::Sales%20Invoice/1");
  });

  it("company configuration singletons hit their own path", async () => {
    const { client: c, calls } = client([json({ "ia::result": {} })]);
    await companyConfiguration(c).consolidationPreferenceSetup.get();
    expect(new URL(calls[0]!.url).pathname).toBe("/ia/api/v1/objects/company-config/consolidation-preference/setup");
  });

  it("common resources exposes the raw Query Service", async () => {
    const { client: c, calls } = client([json({ "ia::result": [], "ia::meta": {} })]);
    await commonResources(c).services.core.query({ object: "accounts-payable/vendor", fields: ["id"] });
    expect(new URL(calls[0]!.url).pathname).toBe("/ia/api/v1/services/core/query");
  });

  it("every generated application loads and exposes at least one member", async () => {
    const groups = readdirSync("src/generated");
    expect(groups.length).toBe(18);
    for (const g of groups) {
      const mod = (await import(`../src/generated/${g}/index.ts`)) as { default: (c: IntacctClient) => object };
      const { client: c } = client([]);
      expect(Object.keys(mod.default(c)).length, g).toBeGreaterThan(0);
    }
  });
});
