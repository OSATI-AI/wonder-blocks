/**
 * This is a little helper that we can use to wrap the react-popper reference
 * update methods so that we can convert a regular React ref into a DOM node
 * as react-popper expects, and also ensure we only update react-popper
 * on actual changes, and not just renders of the same thing.
 */
import * as React from "react";
import type { PopperChildrenProps } from "react-popper";
type PopperRef = PopperChildrenProps["ref"];
type TargetFn = (target?: HTMLElement | null) => void;
export default class RefTracker {
    _lastRef: HTMLElement | null | undefined;
    _targetFn: TargetFn | undefined;
    updateRef: (ref?: React.Component<any> | Element | null | undefined) => void;
    setCallback: (targetFn?: PopperRef | null | undefined) => void;
}
export {};
