import * as React from "react";
import { PropsFor } from "@osati-ai/wonder-blocks-core";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
import ModalContent from "./modal-content";
import ModalHeader from "./modal-header";
import ModalFooter from "./modal-footer";
type Props = {
    /**
     * The main contents of the ModalPanel. All other parts of the panel
     * are positioned around it.
     */
    content: React.ReactElement<PropsFor<typeof ModalContent>> | React.ReactNode;
    /**
     * The modal header to show at the top of the panel.
     */
    header?: React.ReactElement<PropsFor<typeof ModalHeader>> | React.ReactNode;
    /**
     * A footer to show beneath the contents.
     */
    footer?: React.ReactElement<PropsFor<typeof ModalFooter>> | React.ReactNode;
    /**
     * When true, the close button is shown; otherwise, the close button is not shown.
     */
    closeButtonVisible: boolean;
    /**
     * Should the contents of the panel become scrollable should they
     * become too tall?
     */
    scrollOverflow: boolean;
    /**
     * Any optional styling to apply to the panel.
     */
    style?: StyleType;
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
     * Dialog variant (e.g. OnePaneDialog).
     */
    testId?: string;
};
/**
 * ModalPanel is the content container.
 *
 * **Implementation notes:**
 *
 * If you are creating a custom Dialog, make sure to follow these guidelines:
 * - Make sure to add this component inside the [ModalDialog](/#modaldialog).
 * - If needed, you can also add a [ModalHeader](/#modalheader) using the
 *   `header` prop. Same goes for [ModalFooter](/#modalfooter).
 * - If you need to create e2e tests, make sure to pass a `testId` prop. This
 *   will be passed down to this component using a sufix: e.g.
 *   `some-random-id-ModalPanel`. This scope will be propagated to the
 *   CloseButton element as well: e.g. `some-random-id-CloseButton`.
 *
 * ```js
 * <ModalDialog>
 *      <ModalPanel content={"custom content goes here"} />
 * </ModalDialog>
 * ```
 */
declare function ModalPanel({ closeButtonVisible, scrollOverflow, content, footer, header, onClose, style, testId, }: Props): import("react/jsx-runtime").JSX.Element;
declare namespace ModalPanel {
    var defaultProps: {
        closeButtonVisible: boolean;
        scrollOverflow: boolean;
    };
}
export default ModalPanel;
