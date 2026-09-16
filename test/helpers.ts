import { readFileSync } from "node:fs";
import { join } from "node:path";
import { vi } from "vitest";

export interface Recorded {
  url: string;
  method: string;
  headers: Headers;
  body: unknown;
}

export type Responder = (req: Recorded, index: number) => Response | Promise<Response>;

export function json(body: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(body === undefined ? null : JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...headers },
  });
}

export function envelope(result: unknown, meta: Record<string, unknown> = {}, status = 200): Response {
  return json({ "ia::result": result, "ia::meta": meta }, status);
}

/** A fetch double that records calls and answers from a responder or a queue of responses. */
export function mockFetch(responder: Responder | Response[]) {
  const calls: Recorded[] = [];
  const queue = Array.isArray(responder) ? [...responder] : undefined;
  const fetchImpl = vi.fn(async (input: string | URL | Request, init?: RequestInit) => {
    const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
    const headers = new Headers(init?.headers);
    const raw = init?.body;
    let body: unknown = raw;
    if (typeof raw === "string") {
      try {
        body = JSON.parse(raw);
      } catch {
        body = raw;
      }
    }
    const rec: Recorded = { url, method: init?.method ?? "GET", headers, body };
    calls.push(rec);
    if (queue) {
      const next = queue.shift();
      if (!next) throw new Error(`unexpected fetch #${calls.length}: ${rec.method} ${url}`);
      return next;
    }
    return (responder as Responder)(rec, calls.length - 1);
  });
  return { fetch: fetchImpl as unknown as typeof fetch, calls };
}

/* ---- spec fixtures -------------------------------------------------- */

type Json = Record<string, unknown>;
const specs = new Map<string, Json>();

export function loadSpec(group: string): Json {
  let spec = specs.get(group);
  if (!spec) {
    spec = JSON.parse(readFileSync(join(process.cwd(), "spec", `${group}.json`), "utf8")) as Json;
    specs.set(group, spec);
  }
  return spec;
}

/** First example body for `verb path` (response with `status`, or the request body when `status` is "request"). */
export function specExample(group: string, verb: string, path: string, status: string | number = 200): unknown {
  const spec = loadSpec(group);
  const op = (spec["paths"] as Json)[path] as Json | undefined;
  const operation = op?.[verb] as Json | undefined;
  if (!operation) throw new Error(`no ${verb} ${path} in ${group}`);
  const holder =
    status === "request"
      ? (operation["requestBody"] as Json)
      : ((operation["responses"] as Json)[String(status)] as Json);
  const media = ((holder?.["content"] as Json)?.["application/json"] as Json) ?? {};
  if (media["example"] !== undefined) return media["example"];
  const examples = media["examples"] as Record<string, { value: unknown }> | undefined;
  const first = examples && Object.values(examples)[0];
  if (!first) throw new Error(`no example for ${verb} ${path} ${status}`);
  return first.value;
}
