import * as React from "react";
/**
 * Props describing the state of the OptionItem, shared by the checkbox
 * component,
 */
type CheckProps = {
    /** Whether option item is disabled. */
    disabled: boolean;
    /** Whether option item is selected. */
    selected: boolean;
};
/**
 * The check component used by OptionItem.
 */
declare const Check: (props: CheckProps) => React.ReactElement;
export default Check;
