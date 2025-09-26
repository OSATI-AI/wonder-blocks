import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
/**
 * This is a labeled 🔘 or ☑️ item. Choice is meant to be used as children of
 * CheckboxGroup and RadioGroup because many of its props are auto-populated
 * and not shown in the documentation here. See those components for usage
 * examples.
 *
 * If you wish to use just a single field, use Checkbox or Radio with the
 * optional label and description props.
 *
 * ### Checkbox Usage
 *
 * ```jsx
 * import {Choice, CheckboxGroup} from "@osati-ai/wonder-blocks-form";
 *
 * const [selectedValues, setSelectedValues] = React.useState([]);
 *
 * // Checkbox usage
 * <CheckboxGroup
 *     label="some-label"
 *     description="some-description"
 *     groupName="some-group-name"
 *     onChange={setSelectedValues}
 *     selectedValues={selectedValues}
 * />
 *     // Add as many choices as necessary
 *     <Choice
 *        label="Choice 1"
 *        value="some-choice-value"
 *        description="Some choice description."
 *     />
 *     <Choice
 *        label="Choice 2"
 *        value="some-choice-value-2"
 *        description="Some choice description."
 *     />
 * </CheckboxGroup>
 * ```
 *
 * ### Radio Usage
 *
 * ```jsx
 * import {Choice, RadioGroup} from "@osati-ai/wonder-blocks-form";
 *
 * const [selectedValue, setSelectedValue] = React.useState("");
 *
 * <RadioGroup
 *     label="some-label"
 *     description="some-description"
 *     groupName="some-group-name"
 *     onChange={setSelectedValue}>
 *     selectedValues={selectedValue}
 * />
 *     // Add as many choices as necessary
 *     <Choice
 *        label="Choice 1"
 *        value="some-choice-value"
 *        description="Some choice description."
 *     />
 *     <Choice
 *        label="Choice 2"
 *        value="some-choice-value-2"
 *        description="Some choice description."
 *     />
 * </RadioGroup>
 * ```
 */
declare const Choice: React.ForwardRefExoticComponent<Readonly<import("@osati-ai/wonder-blocks-core").AriaAttributes> & Readonly<{
    role?: import("@osati-ai/wonder-blocks-core").AriaRole;
}> & {
    /** User-defined. Label for the field. */
    label: React.ReactNode;
    /** User-defined. Optional description for the field. */
    description?: React.ReactNode;
    /** User-defined. Should be distinct for each item in the group. */
    value: string;
    /** User-defined. Whether this choice option is disabled. Default false. */
    disabled?: boolean;
    /** User-defined. Optional id for testing purposes. */
    testId?: string;
    /** User-defined. Optional additional styling. */
    style?: StyleType;
    /**
     * Auto-populated by parent. Whether this choice is checked.
     * @ignore
     */
    checked?: boolean;
    /**
     * Auto-populated by parent. Whether this choice is in error mode (everything
     * in a choice group would be in error mode at the same time).
     * @ignore
     */
    error?: boolean;
    /**
     * Auto-populated by parent. Used for accessibility purposes, where the label
     * id should match the input id.
     * @ignore
     */
    id?: string;
    /**
     * Auto-populated by parent's groupName prop.
     * @ignore
     */
    groupName?: string;
    /**
     * Auto-populated by parent. Returns the new checked state of the component.
     * @ignore
     */
    onChange?: (newCheckedState: boolean) => unknown;
    /**
     * Auto-populated by parent.
     * @ignore
     */
    variant?: "radio" | "checkbox";
} & React.RefAttributes<HTMLInputElement>>;
export default Choice;
