import * as React from "react";
import type { ModalElement } from "../util/types";
type Props = {
    children: ModalElement;
    onCloseModal: () => unknown;
    /**
     * The selector for the element that will be focused when the dialog shows.
     * When not set, the first tabbable element within the dialog will be used,
     * which usually is the dismiss button (X).
     */
    initialFocusId?: string;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
};
/**
 * A private component used by ModalLauncher. This is the fixed-position
 * container element that gets mounted outside the DOM. It overlays the modal
 * content (provided as `children`) over the content, with a gray backdrop
 * behind it.
 *
 * This component is also responsible for cloning the provided modal `children`,
 * and adding an `onClose` prop that will call `onCloseModal`. If an
 * `onClose` prop is already provided, the two are merged.
 */
export default class ModalBackdrop extends React.Component<Props> {
    private backdropRef;
    componentDidMount(): void;
    _mousePressedOutside: boolean;
    /**
     * Returns an element specified by the user
     */
    _getInitialFocusElement(node: HTMLElement): HTMLElement | null;
    /**
     * Returns the first focusable element found inside the Dialog
     */
    _getFirstFocusableElement(node: HTMLElement): HTMLElement | null;
    /**
     * Returns the dialog element
     */
    _getDialogElement(node: HTMLElement): HTMLElement;
    /**
     * When the user clicks on the gray backdrop area (i.e., the click came
     * _directly_ from the positioner, not bubbled up from its children), close
     * the modal.
     */
    handleMouseDown: (e: React.SyntheticEvent) => void;
    handleMouseUp: (e: React.SyntheticEvent) => void;
    render(): React.ReactNode;
}
export {};
