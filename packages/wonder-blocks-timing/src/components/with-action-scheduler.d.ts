import * as React from "react";
import type { WithActionSchedulerProps } from "../util/types";
type WithoutActionScheduler<T> = Omit<T, "schedule">;
/**
 * A higher order component that attaches the given component to an
 * `IScheduleActions` instance. Any actions scheduled will automatically be
 * cleared on unmount.
 *
 * @template TOwnProps The own props of the component being rendered, without
 * the additional action scheduler prop. To attach the additional prop to
 * these props use the `WithActionScheduler` type.
 */
export default function withActionScheduler<Props extends WithActionSchedulerProps>(WrappedComponent: React.ComponentType<Props>): {
    (props: WithoutActionScheduler<Props>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
