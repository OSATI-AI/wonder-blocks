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
 * A private component used by DrawerLauncher. This is the fixed-position
 * container element that gets mounted outside the DOM. It overlays the modal
 * content (provided as `children`) over the content, with a gray backdrop
 * behind it.
 *
 * This component is also responsible for cloning the provided modal `children`,
 * and adding an `onClose` prop that will call `onCloseModal`. If an
 * `onClose` prop is already provided, the two are merged.
 */
declare const DrawerBackdrop: ({ children, testId, initialFocusId, onCloseModal, }: Props) => import("react/jsx-runtime").JSX.Element;
export default DrawerBackdrop;
