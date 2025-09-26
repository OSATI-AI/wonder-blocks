import type { Result, ValidCacheData } from "../util/types";
import { FetchPolicy } from "../util/types";
type CachedEffectOptions<TData extends ValidCacheData> = {
    /**
     * The policy to use when determining how to retrieve the request data from
     * cache and network.
     *
     * Defaults to `FetchPolicy.CacheBeforeNetwork`.
     */
    fetchPolicy?: (typeof FetchPolicy)[keyof typeof FetchPolicy];
    /**
     * When `true`, the effect will not be executed; otherwise, the effect will
     * be executed.
     *
     * If this is set to `true` while the effect is still pending, the pending
     * effect will be cancelled.
     *
     * Default is `false`.
     */
    skip?: boolean;
    /**
     * When `true`, the effect will not reset the result to the loading status
     * while executing if the requestId changes, instead, returning
     * the existing result from before the change; otherwise, the result will
     * be set to loading status.
     *
     * If the status is loading when the changes are made, it will remain as
     * loading; old pending effects are discarded on changes and as such this
     * value has no effect in that case.
     */
    retainResultOnChange?: boolean;
    /**
     * Callback that is invoked if the result for the given hook has changed.
     *
     * When defined, the hook will invoke this callback whenever it has reason
     * to change the result and will not otherwise affect component rendering
     * directly.
     *
     * When not defined, the hook will ensure the component re-renders to pick
     * up the latest result.
     */
    onResultChanged?: (result: Result<TData>) => void;
    /**
     * Scope to use with the shared cache.
     *
     * When specified, the given scope will be used to isolate this hook's
     * cached results. Otherwise, a shared default scope will be used.
     *
     * Changing this value after the first call is not supported.
     */
    scope?: string;
};
/**
 * Hook to execute and cache an async operation on the client.
 *
 * This hook executes the given handler on the client if there is no
 * cached result to use.
 *
 * Results are cached so they can be shared between equivalent invocations.
 * In-flight requests are also shared, so that concurrent calls will
 * behave as one might exect. Cache updates invoked by one hook instance
 * do not trigger renders in components that use the same requestID; however,
 * that should not matter since concurrent requests will share the same
 * in-flight request, and subsequent renders will grab from the cache.
 *
 * Once the request has been tried once and a non-loading response has been
 * cached, the request will not executed made again.
 */
export declare const useCachedEffect: <TData extends ValidCacheData>(requestId: string, handler: () => Promise<TData>, options?: CachedEffectOptions<TData>) => [Result<TData>, () => void];
export {};
