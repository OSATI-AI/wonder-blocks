import type { ValidCacheData, ScopedCache } from "../util/types";
/**
 * A function for inserting a value into the cache or clearing it.
 */
type CacheValueFn<TValue extends ValidCacheData> = (value?: TValue | null | undefined) => void;
/**
 * Access to the shared in-memory cache.
 *
 * This is the cache used by `useSharedCache` and related hooks and
 * components.
 */
export declare const SharedCache: ScopedCache;
/**
 * Hook to retrieve data from and store data in an in-memory cache.
 *
 * @returns {[?ReadOnlyCacheValue, CacheValueFn]}
 * Returns an array containing the current cache entry (or undefined), a
 * function to set the cache entry (passing null or undefined to this function
 * will delete the entry).
 *
 * NOTE: Unlike useState or useReducer, we don't automatically update folks
 * if the value they reference changes. We might add it later (if we need to),
 * but the likelihood here is that things won't be changing in this cache in a
 * way where we would need that. If we do (and likely only in specific
 * circumstances), we should consider adding a simple boolean useState that can
 * be toggled to cause a rerender whenever the referenced cached data changes
 * so that callers can re-render on cache changes. However, we should make
 * sure this toggling is optional - or we could use a callback argument, to
 * achieve this on an as-needed basis.
 */
export declare const useSharedCache: <TValue extends ValidCacheData>(id: string, scope: string, initialValue?: TValue | null | undefined | (() => TValue | null | undefined)) => [TValue | null | undefined, CacheValueFn<TValue>];
export {};
