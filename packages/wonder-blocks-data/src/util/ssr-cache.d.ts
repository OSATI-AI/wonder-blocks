import { SerializableInMemoryCache } from "./serializable-in-memory-cache";
import type { ValidCacheData, CachedResponse, ResponseCache } from "./types";
/**
 * Implements the response cache.
 *
 * INTERNAL USE ONLY
 */
export declare class SsrCache {
    static get Default(): SsrCache;
    _hydrationCache: SerializableInMemoryCache;
    _ssrOnlyCache: SerializableInMemoryCache;
    constructor(hydrationCache?: SerializableInMemoryCache | null, ssrOnlyCache?: SerializableInMemoryCache | null);
    _setCachedResponse<TData extends ValidCacheData>(id: string, entry: CachedResponse<TData>, hydrate: boolean): CachedResponse<TData>;
    /**
     * Initialize the cache from a given cache state.
     *
     * This can only be called if the cache is not already in use.
     */
    initialize: (source: ResponseCache) => void;
    /**
     * Cache data for a specific response.
     *
     * This is a noop when client-side.
     */
    cacheData: <TData extends ValidCacheData>(id: string, data: TData, hydrate: boolean) => CachedResponse<TData>;
    /**
     * Cache an error for a specific response.
     *
     * This is a noop when client-side.
     */
    cacheError: <TData extends ValidCacheData>(id: string, error: Error | string, hydrate: boolean) => CachedResponse<TData>;
    /**
     * Retrieve data from our cache.
     */
    getEntry: <TData extends ValidCacheData>(id: string) => Readonly<CachedResponse<TData>> | null | undefined;
    /**
     * Remove from cache, any entries matching the given handler and predicate.
     *
     * This will, if present therein, remove matching values from the framework
     * in-memory cache.
     *
     * It returns a count of all records removed.
     */
    purgeData: (predicate?: (key: string, cachedEntry: Readonly<CachedResponse<ValidCacheData>>) => boolean) => void;
    /**
     * Deep clone the hydration cache.
     *
     * By design, this only clones the data that is to be used for hydration.
     */
    cloneHydratableData: () => ResponseCache;
}
