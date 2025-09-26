import * as React from "react";
type Props = {
    /**
     * Whether the combobox is disabled.
     */
    disabled?: boolean;
    /**
     * The index of the focused item in the pills group.
     */
    focusedMultiSelectIndex: number;
    /**
     * The unique identifier for the selected items.
     */
    id: string;
    /**
     * The list of labels for the selected items.
     */
    labels: Array<string>;
    /**
     * Function to remove a selected item.
     */
    onRemove: (value: string) => void;
    /**
     * Accessible label for the remove button.
     */
    removeSelectedLabel: (value: string) => string;
    /**
     * The list of selected items, where each item represents the value of the
     * selected option.
     */
    selected: Array<string>;
    /**
     * The testId prefix used for the pills.
     */
    testId?: string;
};
/**
 * Renders the selected items as pills that are horizontally stacked before
 * the input element.
 */
export declare const MultipleSelection: React.NamedExoticComponent<Props>;
export {};
