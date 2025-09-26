import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
import Choice from "./choice";
type CheckboxGroupProps = {
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
    errorMessage?: string | null | undefined;
    /**
     * Custom styling for this group of checkboxes.
     */
    style?: StyleType;
    /**
     * Callback for when selection of the group has changed. Passes the newly
     * selected values.
     */
    onChange: (selectedValues: Array<string>) => unknown;
    /**
     * An array of the values of the selected values in this checkbox group.
     */
    selectedValues: Array<string>;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
};
/**
 * A checkbox group allows multiple selection. This component auto-populates
 * many props for its children Choice components. The Choice component is
 * exposed for the user to apply custom styles or to indicate which choices are
 * disabled.
 *
 * ### Usage
 *
 * ```jsx
 * import {Choice, CheckboxGroup} from "@osati-ai/wonder-blocks-form";
 *
 * const [selectedValues, setSelectedValues] = React.useState([]);
 *
 * <CheckboxGroup
 *     label="some-label"
 *     description="some-description"
 *     groupName="some-group-name"
 *     onChange={setSelectedValues}
 *     selectedValues={selectedValues}
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
 * </CheckboxGroup>
 * ```
 */
declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxGroupProps & React.RefAttributes<HTMLFieldSetElement>>;
export default CheckboxGroup;
