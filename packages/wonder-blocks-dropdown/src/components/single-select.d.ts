import * as React from "react";
import { type AriaProps, type StyleType } from "@osati-ai/wonder-blocks-core";
import OptionItem from "./option-item";
import type { OpenerProps } from "../util/types";
export type SingleSelectLabelsValues = {
    /**
     * Label to create an accessible name for the dismiss icon on the search filter.
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
     * Value for the opening component when there are some items selected.
     */
    someResults: (numOptions: number) => string;
};
type DefaultProps = Readonly<{
    /**
     * Whether this dropdown should be left-aligned or right-aligned with the
     * opener component. Defaults to left-aligned.
     */
    alignment?: "left" | "right";
    /**
     * Whether to auto focus an option. Defaults to true.
     */
    autoFocus?: boolean;
    /**
     * Whether this component is disabled. A disabled dropdown may not be opened
     * and does not support interaction. Defaults to false.
     */
    disabled?: boolean;
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
     * Whether or not the input in is an error state. Defaults to false.
     */
    error?: boolean;
    /**
     * The object containing the custom labels and placeholder values used inside this component.
     */
    labels?: SingleSelectLabelsValues;
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
     * Callback for when the selection. Parameter is the value of the newly
     * selected item.
     */
    onChange: (selectedValue: string) => unknown;
    /**
     * Can be used to override the state of the ActionMenu by parent elements
     */
    opened?: boolean;
    /**
     * In controlled mode, use this prop in case the parent needs to be notified
     * when the menu opens/closes.
     */
    onToggle?: (opened: boolean) => unknown;
    /**
     * Unique identifier attached to the field control. If used, we need to
     * guarantee that the ID is unique within everything rendered on a page.
     * Used to match `<label>` with `<button>` elements for screenreaders.
     */
    id?: string;
    /**
     * Placeholder value for the opening component when there are no items selected.
     * Note: a label is still necessary to describe the purpose of the select.
     */
    placeholder: string;
    /**
     * Value of the currently selected item.
     */
    selectedValue?: string | null | undefined;
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
     * Optional styling to add to the dropdown wrapper.
     */
    dropdownStyle?: StyleType;
    /**
     * The child function that returns the anchor the ActionMenu will be
     * activated by. This function takes eventState, which allows the opener
     * element to access pointer event state.
     */
    opener?: (openerProps: OpenerProps) => React.ReactElement<any>;
    /**
     * When this is true, the dropdown body shows a search text input at the
     * top. The items will be filtered by the input.
     */
    isFilterable?: boolean;
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
    validate?: (value?: string | null) => string | null | void;
    /**
     * Called right after the field is validated.
     */
    onValidate?: (errorMessage?: string | null | undefined) => unknown;
}>;
/**
 * The single select allows the selection of one item. Clients are responsible
 * for keeping track of the selected item in the select.
 *
 * The single select dropdown closes after the selection of an item. If the same
 * item is selected, there is no callback.
 *
 * Make sure to provide a label for the field. This can be done by either:
 * - (recommended) Using the **LabeledField** component to provide a label,
 * description, and/or error message for the field
 * - Using a `label` html tag with the `htmlFor` prop set to the unique id of
 * the field
 * - Using an `aria-label` attribute on the field
 * - Using an `aria-labelledby` attribute on the field
 *
 * **NOTE:** If there are more than 125 items, the component automatically uses
 * [react-window](https://github.com/bvaughn/react-window) to improve
 * performance when rendering these elements and is capable of handling many
 * hundreds of items without performance problems.
 *
 * ## Usage
 * General usage
 *
 * ```jsx
 * import {OptionItem, SingleSelect} from "@osati-ai/wonder-blocks-dropdown";
 *
 * const [selectedValue, setSelectedValue] = React.useState("");
 *
 * <SingleSelect aria-label="Your Favorite Fruits" placeholder="Choose a fruit" onChange={setSelectedValue} selectedValue={selectedValue}>
 *     <OptionItem label="Pear" value="pear" />
 *     <OptionItem label="Mango" value="mango" />
 * </SingleSelect>
 * ```
 *
 * Mapping a list
 *
 * ```jsx
 * import {OptionItem, SingleSelect} from "@osati-ai/wonder-blocks-dropdown";
 *
 * const [selectedValue, setSelectedValue] = React.useState("");
 * const fruitArray = ["Apple", "Banana", "Orange", "Mango", "Pear"];
 *
 * <SingleSelect
 *     aria-label="Your Favorite Fruits"
 *     placeholder="Choose a fruit"
 *     onChange={setSelectedValue}
 *     selectedValue={selectedValue}
 * >
 *     {fruitArray.map((value, index) => (
 *         <OptionItem key={index} value={value} label={value} />
 *     ))}
 * </SingleSelect>
 * ```
 */
declare const SingleSelect: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default SingleSelect;
