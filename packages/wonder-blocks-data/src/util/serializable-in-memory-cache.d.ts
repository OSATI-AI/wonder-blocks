import { ScopedInMemoryCache } from "./scoped-in-memory-cache";
import type { ValidCacheData, RawScopedCache } from "./types";
/**
 * Describe a serializable in-memory cache.
 */
export declare class SerializableInMemoryCache extends ScopedInMemoryCache {
    constructor(initialCache?: RawScopedCache);
    /**
     * Set a value in the cache.
     */
    set(scope: string, id: string, value: ValidCacheData): void;
    /**
     * Clone the cache.
     */
    clone(): RawScopedCache;
}
