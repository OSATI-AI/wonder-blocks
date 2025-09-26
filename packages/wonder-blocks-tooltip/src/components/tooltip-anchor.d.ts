/**
 * This component turns the given content into an accessible anchor for
 * positioning and displaying tooltips.
 */
import * as React from "react";
import type { IActiveTrackerSubscriber } from "../util/active-tracker";
type Props = {
    /**
     * The content for anchoring the tooltip.
     * This element will be used to position the tooltip.
     * If a string is passed as children we wrap it in a Text element.
     * We allow children to be a string so that we can add tooltips to
     * words within a large block of text easily.
     */
    children: React.ReactElement<any> | string;
    /**
     * Callback to be invoked when the anchored content is mounted.
     * This provides a reference to the anchored content, which can then be
     * used for calculating tooltip bubble positioning.
     */
    anchorRef: (arg1?: Element | null | undefined) => unknown;
    /**
     * When true, if a tabindex attribute is not already present on the element
     * wrapped by the anchor, the element will be given tabindex=0 to make it
     * keyboard focusable; otherwise, does not attempt to change the ability to
     * focus the anchor element.
     *
     * Defaults to true.
     *
     * One might set this to false in circumstances where the wrapped component
     * already can receive focus or contains an element that can.
     * Use good judgement when overriding this value, the tooltip content should
     * be accessible via keyboard in all circumstances where the tooltip would
     * appear using the mouse, so verify those use-cases.
     */
    forceAnchorFocusivity?: boolean;
    /**
     * Callback to pass active state back to Tooltip.
     *
     * `active` will be true whenever the anchor is hovered or focused and false
     * otherwise.
     */
    onActiveChanged: (active: boolean) => unknown;
    /**
     * Required aria-describedby id.
     * This ID will reference the text in the tooltip bubble.
     * It should only be set to `undefined` when the tooltip bubble
     * is not visible.
     */
    "aria-describedby": string | undefined;
};
type DefaultProps = {
    forceAnchorFocusivity: Props["forceAnchorFocusivity"];
};
type State = {
    /** Is the anchor active or not? */
    active: boolean;
};
export default class TooltipAnchor extends React.Component<Props, State> implements IActiveTrackerSubscriber {
    private anchorRef;
    _weSetFocusivity: boolean | null | undefined;
    _anchorNode: Element | null | undefined;
    _focused: boolean;
    _hovered: boolean;
    _stolenFromUs: boolean;
    _unsubscribeFromTracker: () => void | null | undefined;
    _timeoutID: number | null | undefined;
    static defaultProps: DefaultProps;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    activeStateStolen: () => void;
    _updateFocusivity(): void;
    _updateActiveState(hovered: boolean, focused: boolean): void;
    _clearPendingAction(): void;
    _setActiveState(active: boolean, instant?: boolean): void;
    _handleFocusIn: () => void;
    _handleFocusOut: () => void;
    _handleMouseEnter: () => void;
    _handleMouseLeave: () => void;
    _handleKeyUp: (e: KeyboardEvent) => void;
    _renderAnchorableChildren(): React.ReactElement<any>;
    render(): React.ReactNode;
}
export {};
