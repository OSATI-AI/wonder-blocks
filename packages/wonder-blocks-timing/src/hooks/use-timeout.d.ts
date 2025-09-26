import type { ITimeout, HookOptions } from "../util/types";
/**
 * Hook providing access to a scheduled timeout.
 *
 * @param action The action to be invoked when the timeout period has
 * passed. By default, this will not cause the timeout to restart if it changes.
 * This makes it easier to use with inline lambda functions rather than
 * requiring consumers to wrap their action in a `useCallback`. To change
 * this behavior, see the `actionPolicy` option.
 * @param timeoutMs The timeout period. If this changes, the timeout will
 * be reset per the `schedulePolicy` option.
 * @param options Options for the hook.
 * @param options.actionPolicy Determines how the action is handled when it
 * changes. By default, the action is replaced but the timeout is not reset,
 * and the updated action will be invoked when the timeout next fires.
 * If you want to reset the timeout when the action changes, use
 * `ActionPolicy.Reset`.
 * @param options.clearPolicy Determines how the timeout is cleared when the
 * component is unmounted or the timeout is recreated. By default, the
 * timeout is cleared immediately. If you want to let the timeout run to
 * completion, use `ClearPolicy.Resolve`. This is NOT applied if the timeout
 * is cleared manually via the `clear()` method on the returned API.
 * @param options.schedulePolicy Determines when the timeout is scheduled.
 * By default, the timeout is scheduled immediately. If you want to delay
 * scheduling the timeout, use `SchedulePolicy.OnDemand`.
 * @returns An `ITimeout` API for interacting with the given timeout. This
 * API is a no-op if called when not mounted. This means that any calls prior
 * to mounting or after unmounting will not have any effect. This API is
 * not reactive, so do not deconstruct the return value, but instead
 * dereference it at the time of use.
 */
export declare function useTimeout(action: () => unknown, timeoutMs: number, options?: HookOptions): ITimeout;
