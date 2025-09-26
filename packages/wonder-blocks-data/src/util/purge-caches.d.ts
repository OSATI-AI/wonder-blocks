/**
 * Purge all caches managed by Wonder Blocks Data.
 *
 * This is a convenience method that purges the shared cache and the hydration
 * cache. It is useful for testing purposes to avoid having to reason about
 * which caches may have been used during a given test run.
 */
export declare const purgeCaches: () => void;
