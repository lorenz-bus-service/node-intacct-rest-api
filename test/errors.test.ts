import { describe, expect, it } from "vitest";
import {
  AuthenticationError,
  AuthorizationError,
  ConflictError,
  IntacctError,
  NotFoundError,
  RateLimitError,
  ServerError,
  ValidationError,
} from "../src/index.js";
import { errorFromResponse, extractErrorObject } from "../src/core/errors.js";

describe("errorFromResponse", () => {
  it("normalises the documented top-level ia::error shape", () => {
    const body = {
      "ia::error": {
        code: "invalidRequest",
        message: "Malformed URL",
        supportId: "sQrM9%7EYdh5oDEWVb80mrn9xuHjoAAAABBQ",
        details: [{ code: "invalidRequest", message: "The URL is malformed" }],
      },
      "ia::meta": { totalCount: 1, totalSuccess: 0, totalError: 1 },
    };
    const err = errorFromResponse(400, body);
    expect(err).toBeInstanceOf(ValidationError);
    expect(err.code).toBe("invalidRequest");
    expect(err.message).toBe("Malformed URL");
    expect(err.supportId).toBe("sQrM9%7EYdh5oDEWVb80mrn9xuHjoAAAABBQ");
    expect(err.details).toHaveLength(1);
    expect(err.body).toBe(body);
  });

  it("finds ia::error nested under ia::result (gateway shape)", () => {
    const err = errorFromResponse(403, { "ia::result": { "ia::error": { code: "GW-403", message: "Forbidden" } } });
    expect(err).toBeInstanceOf(AuthorizationError);
    expect(err.code).toBe("GW-403");
  });

  it("finds the bare `error` shape used by some 401s", () => {
    const err = errorFromResponse(401, { error: { code: "GW-0034", message: "Invalid token", supportId: "x" } });
    expect(err).toBeInstanceOf(AuthenticationError);
    expect(err.code).toBe("GW-0034");
    expect(err.supportId).toBe("x");
  });

  it("falls back to the first detail message, then a generic message", () => {
    expect(errorFromResponse(422, { "ia::error": { details: [{ message: "Vendor is required" }] } }).message).toBe(
      "Vendor is required",
    );
    expect(errorFromResponse(500, undefined).message).toMatch(/HTTP 500/);
    expect(errorFromResponse(502, "Bad gateway").message).toBe("Bad gateway");
  });

  it("maps each status family to its subclass", () => {
    expect(errorFromResponse(404, {})).toBeInstanceOf(NotFoundError);
    expect(errorFromResponse(409, {})).toBeInstanceOf(ConflictError);
    expect(errorFromResponse(429, {})).toBeInstanceOf(RateLimitError);
    expect(errorFromResponse(503, {})).toBeInstanceOf(ServerError);
    expect(errorFromResponse(418, {})).toBeInstanceOf(IntacctError);
    expect(errorFromResponse(418, {})).not.toBeInstanceOf(ServerError);
  });

  it("reads retry-after from Intacct's throttle headers", () => {
    const res = new Response(null, { status: 429, headers: { "X-IA-Throttle-Limit-Retry-After": "7" } });
    const err = errorFromResponse(429, { "ia::error": { code: "GW-0010" } }, res) as RateLimitError;
    expect(err.retryAfterSeconds).toBe(7);
    expect(err.name).toBe("RateLimitError");
  });

  it("extractErrorObject returns undefined for non-error bodies", () => {
    expect(extractErrorObject("text")).toBeUndefined();
    expect(extractErrorObject({ "ia::result": { key: "1" } })).toBeUndefined();
  });
});
