import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

/** The 18 per-Application OpenAPI documents Sage publishes. Order is the published order. */
export const GROUPS = [
  "accounts-payable",
  "accounts-receivable",
  "cash-management",
  "common-resources",
  "company-configuration",
  "consolidation",
  "construction",
  "contracts-and-revenue-management",
  "expenses",
  "fixed-assets-management",
  "general-ledger",
  "inventory-control",
  "order-entry",
  "project-and-resource-management",
  "purchasing",
  "reports",
  "tax",
  "time",
] as const;
export type Group = (typeof GROUPS)[number];

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const SPEC_DIR = join(ROOT, "spec");
export const GENERATED_DIR = join(ROOT, "src", "generated");
