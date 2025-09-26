import * as React from "react";
import { type AriaProps, type StyleType } from "@osati-ai/wonder-blocks-core";
import OptionItem from "./option-item";
import type { OpenerProps } from "../util/types";
export type LabelsValues = {
    /**
     * Label for describing the dismiss icon on the search filter.
     */
    clearSearch: string;
    /**
     * Label for the search placeholder.
     */
    filter: string;
    /**
     * Value for when the filter returns no results.
     */
    noResults: string;
    /**
     * Label for the "select all" shortcut option.
     */
    selectAllLabel: (numOptions: number) => string;
    /**
     * Label for the "select none" shortcut option
     */
    selectNoneLabel: string;
    /**
     * Value for the opening component when there are no items selected.
     */
    noneSelected: string;
    /**
     * Value for the opening component when there are some items selected.
     */
    someSelected: (numOptions: number) => string;
    /**
     * Value for the opening component when all the items have been selected.
     */
    allSelected: string;
};
type DefaultProps = Readonly<{
    /**
     * Whether this dropdown should be left-aligned or right-aligned with the
     * opener component. Defaults to left-aligned.
     */
    alignment?: "left" | "right";
    /**
     * Whether this component is disabled. A disabled dropdown may not be opened
     * and does not support interaction. Defaults to false.
     */
    disabled?: boolean;
    /**
     * Whether this component is in an error state. Defaults to false.
     */
    error?: boolean;
    /**
     * The values of the items that are currently selected.
     */
    selectedValues?: Array<string>;
    /**
     * Whether to display shortcuts for Select All and Select None.
     */
    shortcuts?: boolean;
    /**
     * When false, the SelectOpener can show a Node as a value. When true, the
     * SelectOpener will use a string as a value. If using custom OptionItems, a
     * plain text label can be provided with the `labelAsText` prop.
     * Defaults to true.
     */
    showOpenerLabelAsText?: boolean;
}>;
type Props = AriaProps & DefaultProps & Readonly<{
    /**
     * The items in this select.
     */
    children?: Array<React.ReactElement<React.ComponentProps<typeof OptionItem>> | false | null | undefined>;
    /**
     * Optional styling to add to the dropdown wrapper.
     */
    dropdownStyle?: StyleType;
    /**
     * Unique identifier attached to the field control. If used, we need to
     * guarantee that the ID is unique within everything rendered on a page.
     * Used to match `<label>` with `<button>` elements for screenreaders.
     */
    id?: string;
    /**
     * When this is true, the menu text shows either "All items" or the value
     * set in `props.labels.allSelected` when no item is selected.
     */
    implicitAllEnabled?: boolean;
    /**
     * When this is true, the dropdown body shows a search text input at the
     * top. The items will be filtered by the input.
     * Selected items will be moved to the top when the dropdown is re-opened.
     */
    isFilterable?: boolean;
    /**
     * The object containing the custom labels and placeholder values used inside this component.
     */
    labels?: LabelsValues;
    /**
     * Callback for when the selection changes. Parameter is an updated array of
     * the values that are now selected.
     */
    onChange: (selectedValues: Array<string>) => unknown;
    /**
     * In controlled mode, use this prop in case the parent needs to be notified
     * when the menu opens/closes.
     */
    onToggle?: (opened: boolean) => unknown;
    /**
     * Can be used to override the state of the ActionMenu by parent elements
     */
    opened?: boolean;
    /**
     * The child function that returns the anchor the MultiSelect will be
     * activated by. This function takes eventState, which allows the opener
     * element to access pointer event state.
     */
    opener?: (openerProps: OpenerProps) => React.ReactElement<any>;
    /**
     * Optional styling to add to the opener component wrapper.
     */
    style?: StyleType;
    /**
     * Adds CSS classes to the opener component wrapper.
     */
    className?: string;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * Unique identifier attached to the listbox dropdown. If used, we need to
     * guarantee that the ID is unique within everything rendered on a page.
     * If one is not provided, one is auto-generated. It is used for the
     * opener's `aria-controls` attribute for screenreaders.
     */
    dropdownId?: string;
    /**
     * Whether this field is required to continue, or the error message to
     * render if this field is left blank.
     *
     * This can be a boolean or a string.
     *
     * String:
     * Please pass in a translated string to use as the error message that will
     * render if the user leaves this field blank. If this field is required,
     * and a string is not passed in, a default untranslated string will render
     * upon error.
     * Note: The string will not be used if a `validate` prop is passed in.
     *
     * Example message: i18n._("A password is required to log in.")
     *
     * Boolean:
     * True/false indicating whether this field is required. Please do not pass
     * in `true` if possible - pass in the error string instead.
     * If `true` is passed, and a `validate` prop is not passed, that means
     * there is no corresponding message and the default untranlsated message
     * will be used.
     */
    required?: boolean | string;
    /**
     * Provide a validation for the field value.
     * Return a string error message or null | void for a valid input.
     *
     * Use this for errors that are shown to the user while they are filling out
     * a form.
     */
    validate?: (value: string[]) => string | null | void;
    /**
     * Called right after the field is validated.
     */
    onValidate?: (errorMessage?: string | null | undefined) => unknown;
}>;
/**
 * A dropdown that consists of multiple selection items. This select allows
 * multiple options to be selected. Clients are responsible for keeping track
 * of the selected items.
 *
 * The multi select stays open until closed by the user. The onChange callback
 * happens every time there is a change in the selection of the items.
 *
 * Make sure to provide a label for the field. This can be done by either:
 * - (recommended) Using the **LabeledField** component to provide a label,
 * description, and/or error message for the field
 * - Using a `label` html tag with the `htmlFor` prop set to the unique id of
 * the field
 * - Using an `aria-label` attribute on the field
 * - Using an `aria-labelledby` attribute on the field
 *
 * ## Usage
 *
 * ```jsx
 * import {OptionItem, MultiSelect} from "@osati-ai/wonder-blocks-dropdown";
 *
 * <MultiSelect aria-label="Fruits" onChange={setSelectedValues} selectedValues={selectedValues}>
 *  <OptionItem value="pear">Pear</OptionItem>
 *  <OptionItem value="mango">Mango</OptionItem>
 * </MultiSelect>
 * ```
 */
declare const MultiSelect: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default MultiSelect;
