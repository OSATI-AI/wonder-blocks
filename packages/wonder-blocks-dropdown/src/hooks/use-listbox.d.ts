import * as React from "react";
import { MaybeValueOrValues, OptionItemComponent } from "../util/types";
type Props = {
    /**
     * The list of items to display in the listbox.
     */
    children: Array<OptionItemComponent>;
    /**
     * Whether the listbox is disabled.
     */
    disabled: boolean | undefined;
    /**
     * Whether to disable the space key from selecting an item.
     *
     * This is useful when the listbox is used in a combobox and the space key
     * is required in the input field to complete the selection.
     */
    disableSpaceSelection?: boolean;
    /**
     * The unique identifier of the listbox element.
     */
    id: string;
    /**
     * The value of the currently selected items.
     */
    value?: MaybeValueOrValues;
    /**
     * The type of selection that the listbox supports.
     */
    selectionType: "single" | "multiple";
    /**
     * Callback that is called when the value of the listbox changes.
     */
    onChange?: (value: MaybeValueOrValues) => void;
};
/**
 * Hook for managing the state of a listbox.
 *
 * It manages how the options are rendered and how the listbox behaves.
 *
 * This includes:
 * - Keyboard navigation.
 * - Selection management.
 */
export declare function useListbox({ children: options, disabled, disableSpaceSelection, id, onChange, selectionType, value, }: Props): {
    isListboxFocused: boolean;
    focusedIndex: number;
    setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
    renderList: React.ReactElement<JSX.LibraryManagedAttributes<T, React.ComponentProps<T>>, string | React.JSXElementConstructor<any>>[];
    setSelected: React.Dispatch<React.SetStateAction<string | import("../util/types").MaybeString[] | null | undefined>>;
    selected: string | import("../util/types").MaybeString[] | null | undefined;
    handleKeyDown: (event: React.KeyboardEvent) => void;
    handleKeyUp: (event: React.KeyboardEvent) => void;
    handleFocus: () => void;
    handleBlur: () => void;
};
export {};
