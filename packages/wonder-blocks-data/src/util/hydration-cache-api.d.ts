import type { ValidCacheData, CachedResponse, ResponseCache } from "./types";
/**
 * Initialize the hydration cache.
 *
 * @param {ResponseCache} source The cache content to use for initializing the
 * cache.
 * @throws {Error} If the cache is already initialized.
 */
export declare const initializeHydrationCache: (source: ResponseCache) => void;
/**
 * Purge cached hydration responses that match the given predicate.
 *
 * @param {(id: string) => boolean} [predicate] The predicate to match against
 * the cached hydration responses. If no predicate is provided, all cached
 * hydration responses will be purged.
 */
export declare const purgeHydrationCache: (predicate?: (key: string, cacheEntry?: Readonly<CachedResponse<ValidCacheData>> | null | undefined) => boolean) => void;
