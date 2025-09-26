import * as React from "react";
type Props = {
    /**
     * The container to apply the initial focus
     */
    children: React.ReactElement<any>;
    /**
     * The selector for the element that will be focused when the component shows.
     * When not set, the first tabbable element within the component will be used.
     */
    initialFocusId?: string;
    /**
     * The delay in milliseconds before the initial focus is set.
     * This is to ensure that any active event listeners have time to finish.
     *
     * Defaults to 0.
     */
    delay?: number;
};
/**
 * This component finds which element (from within the children) needs to
 * receive focus. After that, the children is rendered with the focus assigned.
 */
export default class InitialFocus extends React.Component<Props> {
    private containerRef;
    componentDidMount(): void;
    /**
     * Gets the focusable element and applies focus to it
     */
    setInitialFocusableElement: (node: HTMLElement) => void;
    /**
     * Returns an element specified by the user
     */
    maybeGetInitialFocusElement(node: HTMLElement): HTMLElement | null;
    /**
     * Returns the first focusable element found inside the children
     */
    maybeGetFirstFocusableElement(node: HTMLElement): HTMLElement | null;
    render(): React.ReactNode;
}
export {};
