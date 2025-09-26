import * as React from "react";
import { MaybeValueOrValues } from "../util/types";
type Props = {
    /**
     * The list of selected items, where each item represents the value of the
     * selected option.
     */
    selected: MaybeValueOrValues;
    /**
     * Function to set the selected items.
     */
    setSelected: (value: MaybeValueOrValues) => void;
    /**
     * The current value of the input.
     */
    inputValue: string;
};
/**
 * Hook for managing the state of the multi-select values in the combobox.
 *
 * It manages keyboard navigation and selection management for the multi-select
 * selected values.
 */
export declare function useMultipleSelection({ inputValue, selected, setSelected, }: Props): {
    focusedMultiSelectIndex: number;
    handleKeyDown: (event: React.KeyboardEvent) => void;
};
export {};
