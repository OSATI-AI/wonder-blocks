import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
/**
 * This component ensures that focus stays within itself. If the user uses Tab
 * at the end of the modal, or Shift-Tab at the start of the modal, then this
 * component wraps focus to the start/end respectively.
 *
 * We use this in `ModalBackdrop` to ensure that focus stays within the launched
 * modal.
 *
 * Adapted from the WAI-ARIA dialog behavior example.
 * https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/dialog-modal/dialog.html
 *
 * NOTE(mdr): This component frequently references the "modal" and the "modal
 *     root", to aid readability in this package. But this component isn't
 *     actually coupled to the modal, and these could be renamed "children"
 *     instead if we were to generalize!
 */
type Props = {
    children: React.ReactNode;
    /**
     * Style applied to the View containing children.
     * TODO(kevinb): only allow z-index to be specified.  We'll be able to remove
     * this prop once we remove all uses of z-indexes from webapp.
     */
    style?: StyleType;
};
export default class FocusTrap extends React.Component<Props> {
    /**
     * Tabbing is restricted to descendents of this element.
     */
    modalRoot: Node | null | undefined;
    getModalRoot: (node?: any) => void;
    /**
     * Try to focus the given node. Return true if successful.
     */
    tryToFocus(node: Node): boolean | null | undefined;
    /**
     * Focus the next available focusable element within the modal root.
     *
     * @param {boolean} isLast Used to determine the next available item. true =
     * First element within the modal, false = Last element within the modal.
     */
    focusElementIn(isLast: boolean): void;
    /**
     * Triggered when the focus is set to the first sentinel. This way, the
     * focus will be redirected to the last element inside the modal dialog.
     */
    handleFocusMoveToLast: () => void;
    /**
     * Triggered when the focus is set to the last sentinel. This way, the focus
     * will be redirected to the first element inside the modal dialog.
     */
    handleFocusMoveToFirst: () => void;
    render(): React.ReactNode;
}
export {};
