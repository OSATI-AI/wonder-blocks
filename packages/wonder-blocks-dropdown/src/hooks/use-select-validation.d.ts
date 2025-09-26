type SingleSelectedValue = string | null | undefined;
type MultiSelectedValues = string[];
export type SelectValue = SingleSelectedValue | MultiSelectedValues;
export type SelectValidationProps<T extends SelectValue> = {
    value?: T;
    disabled?: boolean;
    validate?: (value: T) => string | null | void;
    onValidate?: (errorMessage?: string | null | undefined) => unknown;
    required?: boolean | string;
    open?: boolean;
};
/**
 * Hook for validation logic for select based fields. Based on the props provided,
 * the hook will:
 * - call the `validate` and `onValidate` props on initialization and mount
 * - provide validation functions for specific events
 * - these functions will call the `validate` and `onValidate` props as needed
 *
 * @returns {object} An object with:
 * - `errorMessage` - The error message from validation.
 * - `onOpenerBlurValidation` - Validation logic for when the opener is blurred
 * - `onDropdownClosedValidation` - Validation logic for when the opener is
 * closed
 * - `onSelectionValidation` - Validation logic for when a user is done
 * selecting (a) value/value(s)
 * - `onSelectedValuesChangeValidation` - Validation logic for when selected
 * values are updated before selection is done (ie. values are updated and
 * dropdown isn't closed yet). Note that this should only be called when there
 * are multiple values that can be selected. onSelectionValidation should be
 * used whenever the user is done selecting a value or values.
 */
export declare function useSelectValidation<T extends SelectValue>({ value, disabled, validate, onValidate, required, open, }: SelectValidationProps<T>): {
    errorMessage: string | null;
    onOpenerBlurValidation: () => void;
    onDropdownClosedValidation: () => void;
    onSelectionValidation: (newValue: T) => void;
    onSelectedValuesChangeValidation: () => void;
};
export {};
