import { ComboboxLabels } from "./types";
export declare const selectDropdownStyle: {
    readonly marginBlock: string;
};
export declare const filterableDropdownStyle: {
    readonly minHeight: 100;
};
export declare const DROPDOWN_ITEM_HEIGHT = 40;
/**
 * Maximum visible items inside the dropdown list. Based on the defined height
 * that we're using, this is the maximum number of items that can fit into the
 * visible portion of the dropdown's listbox.
 */
export declare const MAX_VISIBLE_ITEMS = 9;
export declare const SEPARATOR_ITEM_HEIGHT = 9;
export declare const defaultLabels: {
    readonly clearSearch: "Clear search";
    readonly filter: "Filter";
    readonly noResults: "No results";
    readonly selectNoneLabel: "Select none";
    readonly selectAllLabel: (numOptions: number) => string;
    readonly noneSelected: "0 items";
    readonly someSelected: (numSelectedValues: number) => string;
    readonly allSelected: "All items";
};
export declare const defaultComboboxLabels: ComboboxLabels;
