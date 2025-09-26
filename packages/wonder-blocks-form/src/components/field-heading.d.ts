import * as React from "react";
import { StyleType } from "@osati-ai/wonder-blocks-core";
type Props = {
    /**
     * The form field component.
     */
    field: React.ReactNode;
    /**
     * The title for the label element.
     */
    label: React.ReactNode;
    /**
     * The text for the description element.
     */
    description?: React.ReactNode;
    /**
     * Whether this field is required to continue.
     */
    required?: boolean;
    /**
     * The message for the error element.
     */
    error?: React.ReactNode;
    /**
     * Custom styles for the field heading container.
     */
    style?: StyleType;
    /**
     * A unique id to link the label (and optional error) to the field.
     *
     * The label will assume that the field will have its id formatted as `${id}-field`.
     * The field can assume that the error will have its id formatted as `${id}-error`.
     */
    id?: string;
    /**
     * Optional test ID for e2e testing.
     */
    testId?: string;
};
/**
 * A FieldHeading is an element that provides a label, description, and error element
 * to present better context and hints to any type of form field component.
 */
export default class FieldHeading extends React.Component<Props> {
    renderLabel(): React.ReactNode;
    maybeRenderDescription(): React.ReactNode | null | undefined;
    maybeRenderError(): React.ReactNode | null | undefined;
    render(): React.ReactNode;
}
export {};
