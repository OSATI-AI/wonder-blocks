import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
/**
 * This is a potentially labeled 🔘 or ☑️ item. This is an internal component
 * that's wrapped by Checkbox and Radio. Choice is a wrapper for Checkbox and
 * Radio with many of its props auto-populated, to be used with CheckboxGroup
 * and RadioGroup. This design allows for more explicit prop typing. For
 * example, we can make onChange a required prop on Checkbox but not on Choice
 * (because for Choice, that prop would be auto-populated by CheckboxGroup).
 */ declare const ChoiceInternal: React.ForwardRefExoticComponent<Readonly<import("@osati-ai/wonder-blocks-core").AriaAttributes> & Readonly<{
    role?: import("@osati-ai/wonder-blocks-core").AriaRole;
}> & {
    /** Whether this choice is checked. */
    checked: boolean | null | undefined;
    /** Whether this choice option is disabled. */
    disabled?: boolean;
    /** Whether this choice is in error mode. */
    error?: boolean;
    /** Returns the new checked state of the component. */
    onChange: (newCheckedState: boolean) => unknown;
    /**
     * Used for accessibility purposes, where the label id should match the
     * input id.
     */
    id?: string;
    /**
     * Optional additional styling.
     */
    style?: StyleType;
    /**
     * Adds CSS classes to the Button.
     */
    className?: string;
    /**
     * Optional id for testing purposes.
     */
    testId?: string;
    /**
     * Label for the field.
     */
    label?: React.ReactNode;
    /** Optional description for the field. */
    description?: React.ReactNode;
    /** Auto-populated by parent's groupName prop if in a group. */
    groupName?: string;
    /** Takes either "radio" or "checkbox" value. */
    variant: "radio" | "checkbox";
} & React.RefAttributes<HTMLInputElement>>;
export default ChoiceInternal;
