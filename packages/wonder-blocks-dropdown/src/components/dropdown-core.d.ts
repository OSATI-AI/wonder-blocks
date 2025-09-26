import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
import type { DropdownItem } from "../util/types";
type LabelsValues = {
    /**
     * Label for describing the dismiss icon on the search filter.
     */
    clearSearch: string;
    /**
     * Label for the search placeholder.
     */
    filter: string;
    /**
     * Label for when the filter returns no results.
     */
    noResults: string;
    /**
     * The total number of available options in the dropdown.
     * These can be all items or only the ones that match the filter.
     */
    someResults: (numOptions: number) => string;
};
type DropdownAriaRole = "listbox" | "menu";
type ExportProps = Readonly<{
    /**
     * Items for the menu.
     */
    items: Array<DropdownItem>;
    /**
     * Callback for when the menu is opened or closed. Parameter is whether
     * the dropdown menu should be open.
     */
    onOpenChanged: (open: boolean) => unknown;
    /**
     * Whether the menu is open or not.
     */
    open: boolean;
    /**
     * The component that opens the menu.
     */
    opener: React.ReactElement<any>;
    /**
     * Ref to the opener element.
     */
    openerElement?: HTMLElement;
    /**
     * The aria "role" applied to the dropdown container.
     */
    role: DropdownAriaRole;
    /**
     * An optional handler to set the searchText of the parent. When this and
     * the searchText exist, SearchField will be displayed at the top of the
     * dropdown body.
     */
    onSearchTextChanged?: (searchText: string) => unknown | null | undefined;
    /**
     * An optional string that the user entered to search the items. When this
     * and the onSearchTextChanged exist, SearchField will be displayed at the
     * top of the dropdown body.
     */
    searchText?: string | null | undefined;
    /**
     * Styling specific to the dropdown component that isn't part of the opener,
     * passed by the specific implementation of the dropdown menu,
     */
    dropdownStyle?: StyleType;
    /**
     * Optional styling for the entire dropdown component.
     */
    style?: StyleType;
    /**
     * Optional CSS classes for the entire dropdown component.
     */
    className?: string;
    /**
     * When this is true, the dropdown body shows a search text input at the
     * top. The items will be filtered by the input.
     */
    isFilterable?: boolean;
    /**
     * Whether the dropdown and it's interactions should be disabled.
     */
    disabled?: boolean;
    /**
     * Unique identifier attached to the dropdown.
     */
    id?: string;
    /**
     * Whether this menu should be left-aligned or right-aligned with the
     * opener component. Defaults to left-aligned.
     */
    alignment?: "left" | "right";
    /**
     * Whether to auto focus an option. Defaults to true.
     */
    autoFocus?: boolean;
    /**
     * Whether to enable the type-ahead suggestions feature. Defaults to true.
     *
     * This feature allows to navigate the listbox using the keyboard.
     * - Type a character: focus moves to the next item with a name that starts
     *   with the typed character.
     * - Type multiple characters in rapid succession: focus moves to the next
     *   item with a name that starts with the string of characters typed.
     *
     * **NOTE:** Type-ahead is recommended for all listboxes, but there might be
     * some cases where it's not desirable (for example when using a `TextField`
     * as the opener element).
     */
    enableTypeAhead?: boolean;
    /**
     * An index that represents the index of the focused element when the menu
     * is opened.
     */
    initialFocusedIndex?: number;
    /**
     * The object containing the custom labels used inside this component.
     */
    labels?: LabelsValues;
    /**
     * Used to determine if we can automatically select an item using the keyboard.
     */
    selectionType?: "single" | "multi";
}>;
declare const _default: React.ComponentType<ExportProps>;
export default _default;
