import * as React from "react";
import type { StyleType, AriaProps } from "@osati-ai/wonder-blocks-core";
type Props = AriaProps & {
    /**
     * ARIA label for the clear button. Defaults to "Clear search".
     */
    clearAriaLabel?: string;
    /**
     * The unique identifier for the input. If one is not provided,
     * a unique id will be generated.
     */
    id?: string;
    /**
     * The text input value.
     */
    value: string;
    /**
     * The name for the input control. This is submitted along with
     * the form data.
     */
    name?: string;
    /**
     * Provide hints or examples of what to enter. This shows up as
     * a grayed out text in the field before a value is entered.
     */
    placeholder?: string;
    /**
     * Whether this field should autofocus on page load.
     */
    autoFocus?: boolean;
    /**
     * Makes a read-only input field that cannot be focused.
     * Defaults to false.
     */
    disabled?: boolean;
    /**
     * Custom styles for the main wrapper.
     */
    style?: StyleType;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * Whether the search field is in an error state.
     */
    error?: boolean;
    /**
     * Provide a validation for the input value.
     * Return a string error message or null | void for a valid input.
     *
     * Use this for errors that are shown to the user while they are filling out
     * a form.
     */
    validate?: (value: string) => string | null | void;
    /**
     * Called right after the SearchField is validated.
     */
    onValidate?: (errorMessage?: string | null | undefined) => unknown;
    /**
     * If true, SearchField is validated as the user types (onChange). If false,
     * it is validated when the user's focus moves out of the field (onBlur).
     * It is preferred that instantValidation is set to `false`, however, it
     * defaults to `true` for consistency with form components like TextField
     * and TextArea.
     */
    instantValidation?: boolean;
    /**
     * Called when the value has changed.
     */
    onChange: (newValue: string) => unknown;
    /**
     * Handler that is triggered when this component is clicked. For example,
     * use this to adjust focus in parent component.
     */
    onClick?: () => unknown;
    /**
     * Called when a key is pressed.
     */
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => unknown;
    /**
     * Called when a key is released.
     */
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => unknown;
    /**
     * Called when the element has been focused.
     */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => unknown;
    /**
     * Called when the element has been blurred.
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => unknown;
};
/**
 * Search Field. A TextField with a search icon on its left side
 * and an X icon on its right side.
 *
 * Make sure to provide a label for the field. This can be done by either:
 * - (recommended) Using the **LabeledField** component to provide a label,
 * description, and/or error message for the field
 * - Using a `label` html tag with the `htmlFor` prop set to the unique id of
 * the field
 * - Using an `aria-label` attribute on the field
 * - Using an `aria-labelledby` attribute on the field
 *
 * ### Usage
 * ```jsx
 * import {SearchField} from "@osati-ai/wonder-blocks-search-field";
 *
 * const [value, setValue] = React.useState("");
 *
 * const handleChange = (newValue: string) => {
 *     setValue(newValue);
 * };
 *
 * <SearchField
 *     id="some-id"
 *     value={value}
 *     onChange={handleChange}
 * />
 * ```
 */
declare const SearchField: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export default SearchField;
