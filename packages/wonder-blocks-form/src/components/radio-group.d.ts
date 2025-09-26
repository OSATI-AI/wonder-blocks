import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
import Choice from "./choice";
type RadioGroupProps = {
    /**
     * Children should be Choice components.
     */
    children: Array<React.ReactElement<React.ComponentProps<typeof Choice>> | false | null | undefined>;
    /**
     * Group name for this checkbox or radio group. Should be unique for all
     * such groups displayed on a page.
     */
    groupName: string;
    /**
     * Optional label for the group. This label is optional to allow for
     * greater flexibility in implementing checkbox and radio groups.
     */
    label?: React.ReactNode;
    /**
     * Optional description for the group.
     */
    description?: React.ReactNode;
    /**
     * Optional error message. If supplied, the group will be displayed in an
     * error state, along with this error message. If no error state is desired,
     * simply do not supply this prop, or pass along null.
     */
    errorMessage?: string;
    /**
     * Custom styling for this group of checkboxes.
     */
    style?: StyleType;
    /**
     * Callback for when the selected value of the radio group has changed.
     */
    onChange: (selectedValue: string) => unknown;
    /**
     * Value of the selected radio item.
     */
    selectedValue: string;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
};
/**
 * A radio group allows only single selection. Like CheckboxGroup, this
 * component auto-populates many props for its children Choice components. The
 * Choice component is exposed for the user to apply custom styles or to
 * indicate which choices are disabled. The use of the groupName prop is
 * important to maintain expected keyboard navigation behavior for
 * accessibility.
 *
 * ### Usage
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
 *     onChange={setSelectedValue}
 *     selectedValue={selectedValue}
 * >
 *     // Add as many choices as necessary
 *     <Choice
 *        label="Choice 1"
 *        value="some-choice-value"
 *     />
 *     <Choice
 *        label="Choice 2"
 *        value="some-choice-value-2"
 *        description="Some choice description."
 *     />
 * </RadioGroup>
 * ```
 */
declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLFieldSetElement>>;
export default RadioGroup;
