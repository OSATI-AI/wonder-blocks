import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
type AccessibleDialogProps = {
    title: React.ReactElement | string;
    "aria-label"?: never;
    "aria-labelledby"?: string;
} | {
    title?: never;
    "aria-label": string;
    "aria-labelledby"?: never;
} | {
    title?: never;
    "aria-label"?: never;
    "aria-labelledby": string;
};
type Props = AccessibleDialogProps & {
    /**
     * An optional id parameter for the main heading. If one is not provided,
     * an ID will be generated.
     */
    titleId?: string;
    /**
     * The content of the modal. Supports a render prop for placing the title in a slot.
     */
    content: React.ReactElement | ((slots: RenderProps) => React.ReactElement);
    /**
     * Called when the close button is clicked.
     *
     * If you're using `ModalLauncher`, you probably shouldn't use this prop!
     * Instead, to listen for when the modal closes, add an `onClose` handler
     * to the `ModalLauncher`.  Doing so will result in a console.warn().
     */
    onClose?: () => unknown;
    /**
     * When true, the close button is shown; otherwise, the close button is not shown.
     */
    closeButtonVisible?: boolean;
    /**
     * When set, overrides the default role value. Default role is "dialog"
     * Roles other than dialog and alertdialog aren't appropriate for this
     * component
     */
    role?: "dialog" | "alertdialog";
    /**
     * Optional custom styles.
     */
    styles?: FlexibleDialogStyles;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * The ID of the content describing this dialog, if applicable.
     */
    "aria-describedby"?: string;
};
export type FlexibleDialogStyles = {
    root?: StyleType;
    dialog?: StyleType;
    panel?: StyleType;
    closeButton?: StyleType;
};
type RenderProps = {
    title: React.ReactNode | string;
};
/**
 * A flexible modal variant with fewer layout constraints. It can receive
 * a custom background (image or color), a title for the main heading, and that
 * title can optionally render in the content area through a render prop.
 *
 * It can be used directly with `ModalLauncher`. In a `DrawerLauncher`, use
 * `DrawerDialog` instead, which is a wrapper around `FlexibleDialog`.
 *
 * One of the following is required for labeling the dialog:
 * - title content (React element or string)
 * - aria-label (string)
 * - aria-labelledby (string ID reference)
 *
 * ### Usage
 *
 * ```jsx
 * import {FlexibleDialog} from "@osati-ai/wonder-blocks-modal";
 * import {BodyText} from "@osati-ai/wonder-blocks-typography";
 *
 * <FlexibleDialog
 *     title={<Heading size="xxlarge" id="main-heading">Select mission</Heading>}
 *     content={
 *         <BodyText>
 *             {`Lorem ipsum dolor sit amet, consectetur adipiscing
 *             elit, sed do eiusmod tempor incididunt ut labore et
 *             dolore magna aliqua. Ut enim ad minim veniam,
 *             quis nostrud exercitation ullamco laboris nisi ut
 *             aliquip ex ea commodo consequat. Duis aute irure
 *             dolor in reprehenderit in voluptate velit esse
 *             cillum dolore eu fugiat nulla pariatur. Excepteur
 *             sint occaecat cupidatat non proident, sunt in culpa
 *             qui officia deserunt mollit anim id est.`}
 *         </BodyText>
 *     }
 * />
 * ```
 */
declare const FlexibleDialog: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default FlexibleDialog;
