import { describe, expect, expectTypeOf, it } from "vitest";
import {
  IntacctClient,
  action,
  defineApplication,
  group,
  object,
  parameterizedObject,
  service,
  shape,
  singleton,
  type ObjectReference,
  type Page,
} from "../src/index.js";
import { envelope, mockFetch } from "./helpers.js";

interface Widget {
  id?: string;
  name?: string;
  size?: number;
}
interface WidgetCreate {
  name: string;
}

const app = defineApplication({
  widget: object(shape<{ record: Widget; create: WidgetCreate; update: Partial<WidgetCreate> }>(), "demo/widget", ["get", "create", "update", "delete"], {
    submit: action<{ key: string }, { key: string; state: string }>("submit"),
    generatePdf: action<never, unknown>("generate-pdf"),
    setup: action<{ on: boolean }, unknown>("setup", "objects/demo/widget/setup"),
  }),
  readOnly: object(shape<{ record: Widget }>(), "demo/read-only", ["get"]),
  document: parameterizedObject(shape<{ record: Widget; create: WidgetCreate }>(), "demo/document::{documentName}", ["get", "create"]),
  prefs: singleton(shape<{ record: { on: boolean }; update: { on: boolean } }>(), "objects/demo/prefs/setup", ["get", "update"]),
  services: group({
    core: group({
      model: service<{ name: string }, { fields: string[] }>("services/core/model"),
      status: service<never, { ok: boolean }>("services/reports/status", "GET"),
    }),
  }),
});

type Has<T, K extends string> = K extends keyof T ? true : false;

const setup = (responses: Response[]) => {
  const { fetch, calls } = mockFetch(responses);
  return { api: app(new IntacctClient({ auth: "t", fetch, entity: "E1" })), calls };
};

describe("defineApplication", () => {
  it("routes CRUD to the Object's paths", async () => {
    const { api, calls } = setup([
      envelope({ id: "W1", name: "n" }),
      envelope({ key: "2", id: "2", href: "/objects/demo/widget/2" }, {}, 201),
      envelope({ key: "2", id: "2", href: "/objects/demo/widget/2" }),
      new Response(null, { status: 204 }),
    ]);
    expect(await api.widget.get("a/b")).toEqual({ id: "W1", name: "n" });
    expect(await api.widget.create({ name: "n" })).toMatchObject({ key: "2" });
    expect(await api.widget.update("2", { name: "m" })).toMatchObject({ key: "2" });
    expect(await api.widget.delete("2")).toBeUndefined();
    expect(calls.map((c) => `${c.method} ${new URL(c.url).pathname}`)).toEqual([
      "GET /ia/api/v1/objects/demo/widget/a%2Fb",
      "POST /ia/api/v1/objects/demo/widget",
      "PATCH /ia/api/v1/objects/demo/widget/2",
      "DELETE /ia/api/v1/objects/demo/widget/2",
    ]);
    expect(calls[0]!.headers.get("x-ia-api-param-entity")).toBe("E1");
  });

  it("queries through the Query Service with the Object name filled in", async () => {
    const { api, calls } = setup([envelope([{ id: "W1", size: 3 }], { totalCount: 1, start: 1, pageSize: 100, next: null, previous: null })]);
    const page = await api.widget.query({ fields: ["id", "size"], filters: [{ $gt: { size: 1 } }] }, { entity: null });
    expect(page.items[0]).toEqual({ id: "W1", size: 3 });
    expect(calls[0]!.body).toEqual({ object: "demo/widget", fields: ["id", "size"], filters: [{ $gt: { size: 1 } }] });
    expect(calls[0]!.headers.has("x-ia-api-param-entity")).toBe(false);
    expectTypeOf(page).toEqualTypeOf<Page<{ id: string | undefined; size: number | undefined }>>();
  });

  it("exposes Workflow Actions as methods, including /objects-hosted ones", async () => {
    const { api, calls } = setup([envelope({ key: "1", state: "posted" }), envelope({}), envelope({})]);
    expect(await api.widget.submit({ key: "1" })).toEqual({ key: "1", state: "posted" });
    await api.widget.generatePdf();
    await api.widget.setup({ on: true });
    expect(calls.map((c) => new URL(c.url).pathname)).toEqual([
      "/ia/api/v1/workflows/demo/widget/submit",
      "/ia/api/v1/workflows/demo/widget/generate-pdf",
      "/ia/api/v1/objects/demo/widget/setup",
    ]);
    expect(calls[1]!.body).toEqual({});
  });

  it("narrows read-only Objects to the operations Intacct offers", () => {
    const { api } = setup([]);
    expectTypeOf<Has<typeof api.readOnly, "get">>().toEqualTypeOf<true>();
    expectTypeOf<Has<typeof api.readOnly, "query">>().toEqualTypeOf<true>();
    expectTypeOf<Has<typeof api.readOnly, "create">>().toEqualTypeOf<false>();
    expectTypeOf<Has<typeof api.readOnly, "delete">>().toEqualTypeOf<false>();
    expectTypeOf(api.widget.create).parameter(0).toEqualTypeOf<WidgetCreate>();
    expectTypeOf(api.widget.get).returns.resolves.toEqualTypeOf<Widget>();
    expectTypeOf(api.widget.create).returns.resolves.toEqualTypeOf<ObjectReference>();
  });

  it("fills parameterized Object paths", async () => {
    const { api, calls } = setup([envelope({ id: "D1" })]);
    await api.document("Sales Invoice").get("7");
    expect(new URL(calls[0]!.url).pathname).toBe("/ia/api/v1/objects/demo/document::Sales%20Invoice/7");
  });

  it("handles singletons and nested service groups", async () => {
    const { api, calls } = setup([envelope({ on: true }), envelope({}), envelope({ fields: ["a"] }), envelope({ ok: true })]);
    expect(await api.prefs.get()).toEqual({ on: true });
    await api.prefs.update({ on: false });
    expect(await api.services.core.model({ name: "x" })).toEqual({ fields: ["a"] });
    expect(await api.services.core.status()).toEqual({ ok: true });
    expect(calls.map((c) => `${c.method} ${new URL(c.url).pathname}`)).toEqual([
      "GET /ia/api/v1/objects/demo/prefs/setup",
      "PATCH /ia/api/v1/objects/demo/prefs/setup",
      "POST /ia/api/v1/services/core/model",
      "GET /ia/api/v1/services/reports/status",
    ]);
    expectTypeOf<Has<typeof api.prefs, "create">>().toEqualTypeOf<false>();
  });

  it("is lazy, cached and enumerable", () => {
    const { api } = setup([]);
    expect(Object.keys(api)).toEqual(["widget", "readOnly", "document", "prefs", "services"]);
    expect("widget" in api).toBe(true);
    expect(api.widget).toBe(api.widget);
    expect((api as unknown as Record<string, unknown>)["nope"]).toBeUndefined();
  });
});
