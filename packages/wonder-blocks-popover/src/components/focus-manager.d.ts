import * as React from "react";
type Props = {
    /**
     * The popover content container
     */
    children: React.ReactElement<any>;
    /**
     * A reference to the trigger element
     */
    anchorElement: HTMLElement | null | undefined;
    /**
     * The selector for the element that will be focused when the dialog shows.
     * When not set, the first tabbable element within the dialog will be used.
     */
    initialFocusId?: string;
    /**
     * The delay in milliseconds before the initial focus is set.
     * This is to ensure that any active event listeners have time to finish.
     *
     * Defaults to 0.
     */
    initialFocusDelay?: number;
};
/**
 * This component ensures that focus flows correctly when the popover is open.
 *
 * Inside the popover:
 * - `tab`: Moves focus to the next focusable element.
 * - `shift + tab`: Moves focus to the previous focusable element.
 *
 * After the focus reaches the start/end of the popover,  then we handle two
 * different scenarios:
 *
 * 1. If the focus has reached the last focusable element inside the popover,
 *    the next tab will set focus on the next focusable element that exists
 *    after the PopoverAnchor.
 * 2. If the focus is set to the first focusable element inside the popover, the
 *    next shift + tab will set focus on the PopoverAnchor element.
 *
 */
export default class FocusManager extends React.Component<Props> {
    /**
     * The focusable element that is positioned after the trigger element
     */
    nextElementAfterPopover: HTMLElement | null | undefined;
    /**
     * Tabbing is restricted to descendents of this element.
     */
    rootNode: HTMLElement | null | undefined;
    componentDidMount(): void;
    componentDidUpdate(): void;
    /**
     * Remove keydown listeners
     */
    componentWillUnmount(): void;
    /**
     * List of focusable elements within the popover content
     */
    elementsThatCanBeFocusableInsidePopover: Array<HTMLElement>;
    /**
     * The first focusable element inside the popover (if it exists)
     */
    firstFocusableElementInPopover: HTMLElement | null | undefined;
    /**
     * The last focusable element inside the popover (if it exists)
     */
    lastFocusableElementInPopover: HTMLElement | null | undefined;
    /**
     * Add keydown listeners
     */
    addEventListeners: () => void;
    removeEventListeners(): void;
    handleKeydownFirstFocusableElement: (e: KeyboardEvent) => void;
    handleKeydownLastFocusableElement: (e: KeyboardEvent) => void;
    /**
     * Gets the next focusable element after the anchor element
     */
    getNextFocusableElement: () => HTMLElement | null | undefined;
    /**
     * Gets the list of focusable elements inside the popover
     */
    getComponentRootNode: () => void;
    /**
     * Triggered when the focus is set to the first sentinel. This way, the
     * focus will be redirected to the anchor element.
     */
    handleFocusPreviousFocusableElement: () => void;
    /**
     * Toggle focusability for all the focusable elements inside the popover.
     * This is useful to prevent the user from tabbing into the popover when it
     * reaches to the last focusable element within the document.
     */
    changeFocusabilityInsidePopover: (enabled?: boolean) => void;
    /**
     * Triggered when the focus is set to the last sentinel. This way, the focus
     * will be redirected to next element after the anchor element.
     */
    handleFocusNextFocusableElement: () => void;
    /**
     * Triggered when the focus is leaving the previous focusable element. This
     * way, the focus is redirected to the first focusable element inside the
     * popover.
     */
    handleKeydownPreviousFocusableElement: (e: KeyboardEvent) => void;
    /**
     * Triggered when the focus is leaving the next focusable element. This way,
     * the focus is redirected to the last focusable element inside the popover.
     */
    handleKeydownNextFocusableElement: (e: KeyboardEvent) => void;
    render(): React.ReactNode;
}
export {};
