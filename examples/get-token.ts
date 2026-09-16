/**
 * Mint an Intacct access token with the client-credentials grant and print a summary.
 *
 *   npm run build
 *   npm run token:test            # loads .env, or:
 *   node --env-file=.env examples/get-token.ts [--verify]
 *
 * .env / environment:
 *   INTACCT_CLIENT_ID, INTACCT_CLIENT_SECRET   from your Sage app registration
 *   INTACCT_USERNAME                           Web Services user id, e.g. api_user
 *   INTACCT_COMPANY_ID                         company id, appended as user@company
 *   INTACCT_ENTITY_ID                          optional, appended as user@company|entity
 *   INTACCT_TOKEN_URL                          optional override of the token endpoint
 *
 * INTACCT_USERNAME may instead already be the full 'user@company' or 'user@company|entity'.
 *   --verify also runs one Query Service call to prove the token works.
 *
 * The full token is never printed. Set PRINT_TOKEN=1 if you need it for curl.
 */
import { ClientCredentials, IntacctClient, IntacctError, type StoredToken } from "@lorenzbus/intacct-rest";

function env(name: string): string {
  const v = process.env[name];
  if (!v) {
    console.error(`Missing ${name}. Required: INTACCT_CLIENT_ID, INTACCT_CLIENT_SECRET, INTACCT_USERNAME`);
    process.exit(2);
  }
  return v;
}

const clientId = env("INTACCT_CLIENT_ID");
const clientSecret = env("INTACCT_CLIENT_SECRET");
const tokenUrl = process.env["INTACCT_TOKEN_URL"];

/** Intacct wants `userId@companyId` or `userId@companyId|entityId`. Build it from the parts if needed. */
function buildUsername(): string {
  let username = env("INTACCT_USERNAME");
  if (!username.includes("@")) {
    const company = process.env["INTACCT_COMPANY_ID"];
    if (!company) {
      console.error("INTACCT_USERNAME has no '@company' part and INTACCT_COMPANY_ID is not set.");
      process.exit(2);
    }
    username = `${username}@${company}`;
  }
  const entity = process.env["INTACCT_ENTITY_ID"];
  if (entity && !username.includes("|")) username = `${username}|${entity}`;
  return username;
}
const username = buildUsername();

let obtained: StoredToken | undefined;
const auth = new ClientCredentials({
  clientId,
  clientSecret,
  username,
  ...(tokenUrl ? { tokenUrl } : {}),
  onToken: (t) => void (obtained = t),
});

try {
  const started = Date.now();
  const token = await auth.getToken();
  console.log(`Token obtained in ${Date.now() - started} ms`);
  console.log(`  user:       ${username}`);
  console.log(`  token:      ${process.env["PRINT_TOKEN"] ? token : `${token.slice(0, 12)}… (${token.length} chars)`}`);
  if (obtained) {
    const minutes = Math.round((obtained.expiresAt - Date.now()) / 60_000);
    console.log(`  expires:    ${new Date(obtained.expiresAt).toISOString()} (~${minutes} min)`);
    console.log(`  refresh:    ${obtained.refreshToken ? "included" : "none"}`);
  }

  // Second call should hit the in-memory cache, not the token endpoint.
  const again = Date.now();
  await auth.getToken();
  console.log(`Cached lookup in ${Date.now() - again} ms`);

  if (process.argv.includes("--verify")) {
    const client = new IntacctClient({ auth });
    const page = await client.request<Record<string, unknown>[], { totalCount?: number }>("POST", "services/core/query", {
      body: { object: "accounts-payable/vendor", fields: ["id", "name"], size: 1 },
    });
    console.log(`Verified: query returned ${page.result.length} row(s) of ${page.meta.totalCount ?? "?"} vendors`);
    if (page.result[0]) console.log(`  first:      ${JSON.stringify(page.result[0])}`);
  }
} catch (err) {
  if (err instanceof IntacctError) {
    console.error(`${err.name}: HTTP ${err.status} ${err.code ?? ""} ${err.message}`);
    if (err.supportId) console.error(`  supportId: ${err.supportId}`);
    if (err.details.length) console.error(`  details:   ${JSON.stringify(err.details)}`);
    if (!err.code && err.body !== undefined) console.error(`  body:      ${JSON.stringify(err.body)}`);
  } else {
    console.error(err);
  }
  process.exit(1);
}
