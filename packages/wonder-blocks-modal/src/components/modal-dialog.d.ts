import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
type Props = {
    /**
     * The dialog content
     */
    children: React.ReactNode;
    /**
     * When set, provides a component that can render content above the top of the modal;
     * when not set, no additional content is shown above the modal.
     * This prop is passed down to the ModalDialog.
     */
    above?: React.ReactNode;
    /**
     * When set, provides a component that will render content below the bottom of the modal;
     * when not set, no additional content is shown below the modal.
     * This prop is passed down to the ModalDialog.
     */
    below?: React.ReactNode;
    /**
     * When set, overrides the default role value. Default role is "dialog"
     * Roles other than dialog and alertdialog aren't appropriate for this
     * component
     */
    role?: "dialog" | "alertdialog";
    /**
     * Custom styles
     */
    style?: StyleType;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * The accessible name of dialog.
     * See WCAG 2.1: 4.1.2 Name, Role, Value
     */
    "aria-label"?: string;
    /**
     * The ID of the title labelling this dialog. Required.
     * See WCAG 2.1: 4.1.2 Name, Role, Value
     */
    "aria-labelledby": string;
    /**
     * The ID of the content describing this dialog, if applicable.
     */
    "aria-describedby"?: string;
};
/**
 * `ModalDialog` is a component that contains these elements:
 * - The visual dialog element itself (`<div role="dialog"/>`)
 * - The custom contents below and/or above the Dialog itself (e.g. decorative graphics).
 *
 * **Accessibility notes:**
 * - By default (e.g. using `OnePaneDialog`), `aria-labelledby` is populated automatically using the dialog title `id`.
 * - If there is a custom Dialog implementation (e.g. `TwoPaneDialog`), the dialog element doesn’t have to have
 * the `aria-labelledby` attribute however this is recommended. It should match the `id` of the dialog title.
 */
declare const ModalDialog: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default ModalDialog;
