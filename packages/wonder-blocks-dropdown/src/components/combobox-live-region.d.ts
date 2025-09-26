import { ComboboxLabels, MaybeValueOrValues, OptionItemComponent } from "../util/types";
type Props = {
    /**
     * The index of the focused item in the listbox.
     */
    focusedIndex: number;
    /**
     * The index of the focused item in the multi-select combobox.
     */
    focusedMultiSelectIndex: number;
    /**
     * The labels associated with the live region.
     */
    labels?: Pick<ComboboxLabels, "closedState" | "liveRegionCurrentItem" | "liveRegionListboxTotal" | "liveRegionMultipleSelectionTotal" | "noItems" | "selected" | "selectionCleared" | "unselected">;
    /**
     * Whether the listbox is open/expanded.
     */
    opened?: boolean;
    /**
     * The list of items in the listbox.
     */
    options: Array<OptionItemComponent>;
    /**
     * The value of the selected item(s).
     */
    selected: MaybeValueOrValues;
    /**
     * The label(s) of the selected item(s).
     */
    selectedLabels: Array<string>;
    /**
     * Whether the use can select more than one option item. Defaults to
     * `single`.
     */
    selectionType?: "single" | "multiple";
    /**
     * The testId used for the live region.
     */
    testId?: string;
};
/**
 * A component that announces focus changes to Screen Readers.
 *
 * This is useful as there are lots of issues with `role="combobox"` + Safari
 * when the browser is not capable of announcing correctly the status of the
 * currently focused option item.
 *
 * @see https://bugs.webkit.org/show_bug.cgi?id=167671
 */
export declare function ComboboxLiveRegion({ focusedIndex, focusedMultiSelectIndex, labels, selectedLabels, opened, options, selected, selectionType, testId, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
