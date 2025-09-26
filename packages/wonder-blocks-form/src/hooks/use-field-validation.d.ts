type FieldValidationProps = {
    value: string;
    disabled?: boolean;
    validate?: (value: string) => string | null | void;
    onValidate?: (errorMessage?: string | null | undefined) => unknown;
    required?: boolean | string;
    instantValidation?: boolean;
};
/**
 * Hook for validation logic for text based fields. Based on the props provided,
 * the hook will:
 * - call the `validate` and `onValidate` props on initialization and mount
 * - provide validation functions for specific events (onChange and onBlur).
 * These functions will call the `validate` and `onValidate` props as needed.
 *
 * @param {FieldValidationProps} props An object with:
 * - `value` - The value of the field.
 * - `disabled` - If the field is disabled.
 * - `required` - Whether the field is required to continue, or the error
 * message if it is left blank.
 * - `instantValidation` - If the field should be validated instantly.
 * - `validate` - Validation for the field.
 * - `onValidate` - Called after the `validate` prop is called.
 * @returns {object} An object with:
 * - `errorMessage` - The error message from validation.
 * - `onBlurValidation` - Validation logic for when a field is blurred.
 * - `onChangeValidation` - Validation logic for when a field changes.
 *
 * @example
 *  export const MyComponent = ({
 *     value,
 *     disabled,
 *     validate,
 *     onValidate,
 *     required,
 *     instantValidation,
 *  }) => {
 *   const {errorMessage, onBlurValidation, onChangeValidation} =
 *       useFieldValidation({
 *           value,
 *           disabled,
 *           validate,
 *           onValidate,
 *           required,
 *           instantValidation,
 *       });
 *     return (
 *       <input
 *           onBlur={(event) => {
 *               onBlurValidation(event.target.value);
 *           }}
 *           onChange={(event) => {
 *               onChangeValidation(event.target.value);
 *           }}
 *           aria-invalid={!!errorMessage}
 *       />
 *   );
 * }
 *
 */
export declare const useFieldValidation: ({ value, disabled, validate, onValidate, required, instantValidation, }: FieldValidationProps) => {
    errorMessage: string | null;
    onBlurValidation: (newValue: string) => void;
    onChangeValidation: (newValue: string) => void;
};
export {};
