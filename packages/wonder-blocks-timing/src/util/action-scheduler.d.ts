import type { IAnimationFrame, IInterval, ITimeout, IScheduleActions, Options } from "./types";
/**
 * Implements the `IScheduleActions` API to provide timeout, interval, and
 * animation frame support. This is not intended for direct use, but instead
 * is to be used solely by the `ActionSchedulerProvider` to provide an
 * `IScheduleActions` instance.
 */
export default class ActionScheduler implements IScheduleActions {
    _disabled: boolean;
    _registeredActions: Array<() => void>;
    static readonly NoopAction: ITimeout & IAnimationFrame & IInterval;
    timeout(action: () => unknown, period: number, options?: Options): ITimeout;
    interval(action: () => unknown, period: number, options?: Options): IInterval;
    animationFrame(action: (arg1: DOMHighResTimeStamp) => void, options?: Options): IAnimationFrame;
    clearAll(): void;
    /**
     * Prevents this scheduler from creating any additional actions.
     * This also clears any pending actions.
     */
    disable(): void;
}
