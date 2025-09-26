/**
 * This is a little helper that we can use to wrap the react-popper reference
 * update methods so that we can convert a regular React ref into a DOM node
 * as react-popper expects, and also ensure we only update react-popper
 * on actual changes, and not just renders of the same thing.
 */
import * as React from "react";
import * as ReactDOM from "react-dom";

type PopperRef = React.RefObject<HTMLElement | null>;
type TargetFn = (target?: HTMLElement | null) => void;

export default class RefTracker {
    _lastRef: HTMLElement | null | undefined;
    _targetFn: TargetFn | undefined;

    updateRef: (
        ref?: React.Component<any> | Element | null | undefined,
    ) => void = (ref) => {
        if (ref) {
            // We only want to update the reference if it is
            // actually changed. Otherwise, we can trigger another render that
            // would then update the reference again and just keep looping.
            const domNode = (ref instanceof HTMLElement) ? ref : null;
            if (domNode && domNode !== this._lastRef) {
                this._lastRef = domNode;
                this._targetFn?.(domNode);
            }
        }
    };

    setCallback: (targetFn?: PopperRef | null | undefined) => void = (
        targetFn,
    ) => {
        if (this._targetFn !== targetFn) {
            if (targetFn && typeof targetFn !== "function") {
                throw new Error("targetFn must be a function");
            }

            this._targetFn = targetFn || undefined;
            if (this._lastRef && this._targetFn) {
                // @ts-expect-error [FEI-5019] - TS2345 - Argument of type 'HTMLElement | null' is not assignable to parameter of type 'HTMLElement | null | undefined'.
                this._targetFn(this._lastRef);
            }
        }
    };
}
