import * as React from "react";
/**
 * Props describing the state of the OptionItem, shared by the check
 * component,
 */
type CheckProps = {
    /** Whether option item is disabled. */
    disabled: boolean;
    /** Whether option item is selected. */
    selected: boolean;
};
/**
 * The checkbox component used by OptionItem.
 */
declare const Checkbox: (props: CheckProps) => React.ReactElement;
export default Checkbox;
