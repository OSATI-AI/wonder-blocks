import * as React from "react";
import { PropsFor } from "@osati-ai/wonder-blocks-core";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
import ModalContent from "./modal-content";
type RenderProps = {
    title: React.ReactNode | string;
};
type Props = {
    /**
     * The main heading of the FlexiblePanel. Used to label the dialog.
     */
    title?: React.ReactNode | string;
    /**
     * The main contents of the FlexiblePanel. All other parts of the panel
     * are positioned around it.
     */
    content: React.ReactElement<PropsFor<typeof ModalContent>> | ((slots: RenderProps) => React.ReactElement) | React.ReactElement;
    /**
     * When true, the close button is shown; otherwise, the close button is not shown.
     */
    closeButtonVisible: boolean;
    /**
     * Any optional styling to apply to the root (panel background) and close button.
     */
    styles?: {
        panel?: StyleType;
        closeButton?: StyleType;
    };
    /**
     * Called when the close button is clicked.
     *
     * If you're using `ModalLauncher`, you should not use this prop!
     * Instead, to listen for when the modal closes, add an `onClose` handler
     * to the `ModalLauncher`.  Doing so will throw an error.
     */
    onClose?: () => unknown;
    /**
     * Test ID used for e2e testing.
     *
     * In this case, this `testId` comes from the `testId` prop defined in the
     * Dialog variant (e.g. FlexibleDialog).
     */
    testId?: string;
};
/**
 * FlexiblePanel is the content container.
 *
 * **Implementation notes:**
 *
 * If you are creating a custom Dialog, make sure to follow these guidelines:
 * - Make sure to add this component inside the [FlexibleDialog](/#flexibledialog).
 * - If you need to create e2e tests, make sure to pass a `testId` prop. This
 *   will be passed down to this component using a sufix: e.g.
 *   `some-random-id-FlexiblePanel`. This scope will be propagated to the
 *   CloseButton element as well: e.g. `some-random-id-CloseButton`.
 *
 * ```js
 * <FlexibleDialog>
 *      <FlexiblePanel content={"custom content goes here"} />
 * </FlexibleDialog>
 * ```
 */
declare function FlexiblePanel({ closeButtonVisible, content, title, onClose, styles, testId, }: Props): import("react/jsx-runtime").JSX.Element;
declare namespace FlexiblePanel {
    var defaultProps: {
        closeButtonVisible: boolean;
        scrollOverflow: boolean;
    };
}
export default FlexiblePanel;
