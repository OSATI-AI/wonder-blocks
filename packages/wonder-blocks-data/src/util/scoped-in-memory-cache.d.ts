import type { ScopedCache, RawScopedCache, ValidCacheData } from "./types";
/**
 * Describe an in-memory cache.
 */
export declare class ScopedInMemoryCache implements ScopedCache {
    _cache: RawScopedCache;
    constructor(initialCache?: RawScopedCache);
    /**
     * Indicate if this cache is being used or not.
     *
     * When the cache has entries, returns `true`; otherwise, returns `false`.
     */
    get inUse(): boolean;
    /**
     * Set a value in the cache.
     */
    set(scope: string, id: string, value: ValidCacheData): void;
    /**
     * Retrieve a value from the cache.
     */
    get(scope: string, id: string): ValidCacheData | null | undefined;
    /**
     * Purge an item from the cache.
     */
    purge(scope: string, id: string): void;
    /**
     * Purge a scope of items that match the given predicate.
     *
     * If the predicate is omitted, then all items in the scope are purged.
     */
    purgeScope(scope: string, predicate?: (id: string, value: ValidCacheData) => boolean): void;
    /**
     * Purge all items from the cache that match the given predicate.
     *
     * If the predicate is omitted, then all items in the cache are purged.
     */
    purgeAll(predicate?: (scope: string, id: string, value: ValidCacheData) => boolean): void;
}
