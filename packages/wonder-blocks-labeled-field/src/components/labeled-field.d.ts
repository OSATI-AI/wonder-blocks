import * as React from "react";
import { StyleType } from "@osati-ai/wonder-blocks-core";
type Props = {
    /**
     * The form field component.
     */
    field: React.ReactElement;
    /**
     * The title for the label element.
     */
    label: React.ReactNode;
    /**
     * The context for the field. Useful for showing if the field is required
     * or optional.
     */
    contextLabel?: React.ReactNode;
    /**
     * The text for the description element.
     */
    description?: React.ReactNode;
    /**
     * The message for the error element. If there is a message, it will also
     * set the `error` prop on the `field` component.
     *
     * Note: Since the error icon has an aria-label, screen readers will
     * prefix the error message with "Error:" (or the value provided to the
     * errorIconAriaLabel in the `labels` prop)
     *
     * If both `errorMessage` and `readOnlyMessage` are provided, the `readOnlyMessage`
     * is displayed first.
     */
    errorMessage?: React.ReactNode;
    /**
     * The helpful text message to display when the field is read only.
     *
     * Use the `labels.readOnlyIconAriaLabel` prop to set the `aria-label` for
     * the read only icon.
     *
     * If both `errorMessage` and `readOnlyMessage` are provided, the `readOnlyMessage`
     * is displayed first.
     */
    readOnlyMessage?: React.ReactNode;
    /**
     * Additional helper text placed under the field.
     */
    additionalHelperMessage?: React.ReactNode;
    /**
     * Custom styles for the elements of LabeledField. Useful if there are
     * specific cases where spacing between elements needs to be customized.
     */
    styles?: {
        root?: StyleType;
        label?: StyleType;
        contextLabel?: StyleType;
        description?: StyleType;
        error?: StyleType;
        readOnlyMessage?: StyleType;
        additionalHelperMessage?: StyleType;
    };
    /**
     * A unique id to use as the base of the ids for the elements within the component.
     * Here is how the id is used for the different elements in the component:
     * - The label will have an id formatted as `${id}-label`
     * - The context label will have an id formatted as `${id}-context-label`
     * - The description will have an id formatted as `${id}-description`
     * - The field will have an id formatted as `${id}-field`
     * - The error will have an id formatted as `${id}-error`
     * - The read only message will have an id formatted as `${id}-read-only-message`
     * - The additional helper message will have an id formatted as `${id}-additional-helper-message`
     *
     * If the `id` prop is not provided, a base unique id will be auto-generated.
     * This is important so that the different elements can be wired up together
     * for accessibility!
     *
     * Note: When using the `LabeledField` component, an `id` provided to the
     * field component (ex: a TextField component) will be overridden.
     */
    id?: string;
    /**
     * Optional test id for e2e testing. Here is how the test id is used for the
     * different elements in the component:
     * - The label will have a testId formatted as `${testId}-label`
     * - The context label will have a testId formatted as `${testId}-context-label`
     * - The description will have a testId formatted as `${testId}-description`
     * - The field will have a testId formatted as `${testId}-field`
     * - The error will have a testId formatted as `${testId}-error`
     * - The read only message will have a testId formatted as `${testId}-read-only-message`
     * - The additional helper message will have a testId formatted as `${testId}-additional-helper-message`
     */
    testId?: string;
    /**
     * The object containing the custom labels used inside this component.
     *
     * This is useful for internationalization.
     */
    labels?: LabeledFieldLabels;
};
export type LabeledFieldLabels = {
    errorIconAriaLabel?: string;
    readOnlyIconAriaLabel?: string;
};
/**
 * A LabeledField is an element that provides a label, context label, and
 * helper text to present more information about any type of form field
 * component. Helper text includes a description, error message, read only
 * message, and any additional helper message.
 */
export default function LabeledField(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
