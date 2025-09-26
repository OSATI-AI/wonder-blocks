import type { ValidCacheData, CachedResponse, Result } from "./types";
/**
 * Turns a cache entry into a stateful result.
 */
export declare const resultFromCachedResponse: <TData extends ValidCacheData>(cacheEntry?: CachedResponse<TData> | null) => Result<TData> | null | undefined;
