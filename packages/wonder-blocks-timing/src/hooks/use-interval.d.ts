import type { IInterval, HookOptions } from "../util/types";
/**
 * Hook providing access to a scheduled interval.
 *
 * @param action The action to be invoked each time the interval period has
 * passed. By default, this will not cause the interval to restart if it
 * changes. This makes it easier to use with inline lambda functions rather than
 * requiring consumers to wrap their action in a `useCallback`. To change this
 * behavior, see the `actionPolicy` option.
 * @param intervalMs The interval period. If this changes, the interval will
 * be reset per the `schedulePolicy` option.
 * @param options Options for the hook.
 * @param options.actionPolicy Determines how the action is handled when it
 * changes. By default, the action is replaced but the interval is not reset,
 * and the updated action will be invoked when the interval next fires.
 * If you want to reset the interval when the action changes, use
 * `ActionPolicy.Reset`.
 * @param options.clearPolicy Determines how the interval is cleared when the
 * component is unmounted or the interval is recreated. By default, the
 * interval is cleared immediately. If you want to let the interval run to
 * completion, use `ClearPolicy.Resolve`. This is NOT applied if the interval
 * is cleared manually via the `clear()` method on the returned API.
 * @param options.schedulePolicy Determines when the interval is scheduled.
 * By default, the interval is scheduled immediately. If you want to delay
 * scheduling the interval, use `SchedulePolicy.OnDemand`.
 * @returns An `IInterval` API for interacting with the given interval. This
 * API is a no-op if called when not mounted. This means that any calls prior
 * to mounting or after unmounting will not have any effect. This API is
 * not reactive, so do not deconstruct the return value, but instead
 * dereference it at the time of use.
 */
export declare function useInterval(action: () => unknown, intervalMs: number, options?: HookOptions): IInterval;
