/**
 * Windmill adapter: `@lorenzbus/intacct-rest/windmill`.
 *
 * Windmill runs every job in a fresh process, so the library's in-memory token cache
 * is empty on each run. This TokenStore keeps tokens in a Windmill secret variable so
 * every script that shares the variable path reuses one Intacct token until it expires.
 *
 * Requires the `windmill-client` peer dependency, which Windmill provides.
 */
import * as wmill from "windmill-client";

import type { StoredToken, TokenStore } from "../core/auth.js";

type Cache = Record<string, StoredToken>;

export class WindmillTokenStore implements TokenStore {
  /**
   * @param variablePath Windmill variable path, e.g. `f/intacct/access_token_cache`.
   *   Created as a secret on first write if it does not exist.
   */
  constructor(private readonly variablePath: string) {}

  async get(key: string): Promise<StoredToken | undefined> {
    return (await this.read())[key];
  }

  async set(key: string, token: StoredToken): Promise<void> {
    await this.write({ ...(await this.read()), [key]: token });
  }

  async delete(key: string): Promise<void> {
    const cache = await this.read();
    if (!(key in cache)) return;
    delete cache[key];
    await this.write(cache);
  }

  private async read(): Promise<Cache> {
    let raw: string | undefined;
    try {
      raw = await wmill.getVariable(this.variablePath);
    } catch {
      return {}; // variable not created yet, or unreadable: treat as empty
    }
    if (!raw) return {};
    try {
      const parsed: unknown = JSON.parse(raw);
      return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? (parsed as Cache) : {};
    } catch {
      return {}; // corrupt contents: start over rather than fail every job
    }
  }

  private write(cache: Cache): Promise<void> {
    return wmill.setVariable(this.variablePath, JSON.stringify(cache), true, "Intacct access token cache (managed by @lorenzbus/intacct-rest)");
  }
}
