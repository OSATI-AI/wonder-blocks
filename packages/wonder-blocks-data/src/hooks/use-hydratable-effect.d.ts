import type { Result, ValidCacheData } from "../util/types";
/**
 * Policies to define how a hydratable effect should behave client-side.
 */
export declare enum WhenClientSide {
    /**
     * The result from executing the effect server-side will not be hydrated.
     * The effect will always be executed client-side.
     *
     * This should only be used if there is something else that is responsible
     * for properly hydrating this component (for example, the action invokes
     * Apollo which manages its own cache to ensure things render properly).
     */
    DoNotHydrate = "DoNotHydrate",
    /**
     * The result from executing the effect server-side will be hydrated.
     * The effect will only execute client-side if there was no result to
     * be hydrated (i.e. both error and success hydration results prevent the
     * effect running client-side).
     */
    ExecuteWhenNoResult = "ExecuteWhenNoResult",
    /**
     * The result from executing the effect server-side will be hydrated.
     * If the hydrated result is a success result, the effect will not be
     * executed client-side.
     * If the hydrated result was not a success result, or there was no
     * hydrated result, the effect will not be executed.
     */
    ExecuteWhenNoSuccessResult = "ExecuteWhenNoSuccessResult",
    /**
     * The result from executing the effect server-side will be hydrated.
     * The effect will always be executed client-side, regardless of the
     * hydrated result status.
     */
    AlwaysExecute = "AlwaysExecute"
}
type HydratableEffectOptions<TData extends ValidCacheData> = {
    /**
     * How the hook should behave when rendering client-side for the first time.
     *
     * This controls how the hook hydrates and executes when client-side.
     *
     * Default is `WhenClientSide.ExecuteWhenNoSuccessResult`.
     *
     * Changing this value after the first call is irrelevant as it only
     * affects the initial render behavior.
     */
    clientBehavior?: (typeof WhenClientSide)[keyof typeof WhenClientSide];
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
 * Hook to execute an async operation on server and client.
 *
 * This hook executes the given handler on the server and on the client,
 * and, depending on the given options, can hydrate the server-side result.
 *
 * Results are cached on the client so they can be shared between equivalent
 * invocations. Cache changes from one hook instance do not trigger renders
 * in components that use the same requestID.
 */
export declare const useHydratableEffect: <TData extends ValidCacheData>(requestId: string, handler: () => Promise<TData>, options?: HydratableEffectOptions<TData>) => Result<TData>;
export {};
