import type { Result, ValidCacheData } from "../util/types";
type ServerEffectOptions = {
    /**
     * When `true`, the result of the effect when fulfilled using Wonder Blocks
     * Data will be stored in the hydration cache for hydrating client-side;
     * otherwise, the result will be stored in the server-side-only cache.
     *
     * This should only be set to `false` if something else will be responsible
     * for hydration of the data on the client-side (for example, if Apollo's
     * hydration support is used).
     *
     * Default is `true`.
     */
    hydrate?: boolean;
    /**
     * When `true`, the effect will not be tracked for fulfillment; otherwise,
     * the effect will be tracked for fulfillment.
     *
     * Default is `false`.
     */
    skip?: boolean;
};
/**
 * Hook to perform an asynchronous action during server-side rendering.
 *
 * This hook registers an asynchronous action to be performed during
 * server-side rendering. The action is performed only once, and the result
 * is cached against the given identifier so that subsequent calls return that
 * cached result allowing components to render more of the component.
 *
 * This hook requires the Wonder Blocks Data functionality for resolving
 * pending requests, as well as support for the hydration cache to be
 * embedded into a page so that the result can by hydrated (if that is a
 * requirement).
 *
 * The asynchronous action is never invoked on the client-side.
 */
export declare const useServerEffect: <TData extends ValidCacheData>(requestId: string, handler: () => Promise<TData>, options?: ServerEffectOptions) => Result<TData> | null | undefined;
export {};
