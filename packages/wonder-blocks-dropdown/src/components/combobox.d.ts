import * as React from "react";
import { StyleType } from "@osati-ai/wonder-blocks-core";
import { PhosphorIcon } from "@osati-ai/wonder-blocks-icon";
import { ComboboxLabels, MaybeValueOrValues, OptionItemComponent } from "../util/types";
type Props = {
    /**
     * The list of items to display in the listbox.
     */
    children: Array<OptionItemComponent>;
    /**
     * Whether the use can select more than one option item. Defaults to
     * `single`.
     *
     * If `multiple` is selected, `aria-multiselectable={true}` is set
     * internally in the listbox element.
     */
    selectionType: "single" | "multiple";
    /**
     * The value of the currently selected items.
     */
    value: MaybeValueOrValues;
    /**
     * Callback for when the selection changes. The value passed as an argument
     * is an updated array of the selected value(s).
     */
    onChange?: (value: MaybeValueOrValues) => void;
    /**
     * Whether the combobox is disabled.
     *
     * A disabled combobox does not support interaction, but it supports focus
     * for a11y reasons. It internally maps to`aria-disabled`. Defaults to
     * false.
     */
    disabled?: boolean;
    /**
     * Whether this component is in an error state.
     * If true, adds `aria-invalid` to the combobox element.
     */
    error?: boolean;
    /**
     * The unique identifier of the combobox element.
     */
    id?: string;
    /**
     * The object containing the custom labels used inside this component.
     *
     * This is useful for internationalization. Defaults to English.
     */
    labels?: ComboboxLabels;
    /**
     * TODO(WB-1678): Add async support to the listbox.
     *
     * Whether to display the loading state to let the user know that the
     * results are being loaded asynchronously. Defaults to false.
     */
    loading?: boolean;
    /**
     * Can be used to programmatically control the opening of the listbox.
     */
    opened?: boolean;
    /**
     * In controlled mode, use this prop in case the parent needs to be notified
     * when the listbox opens/closes.
     */
    onToggle?: (opened: boolean) => void;
    /**
     * Text that provides context for the user when there are no items selected.
     */
    placeholder?: string;
    /**
     * Custom styles to add to the combobox element (input).
     */
    style?: StyleType;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * Indicates whether inputting text could trigger display of one or more
     * predictions of the user’s intended value.
     *
     * It’s internally mapped to aria-autocomplete set in the input field
     * (combobox).
     */
    autoComplete?: "none" | "list" | undefined;
    /**
     * An optional decorative icon to display at the start of the combobox.
     */
    startIcon?: React.ReactElement<React.ComponentProps<typeof PhosphorIcon>> | null;
};
/**
 * A `Combobox` is an input widget that has an associated `listbox`. This
 * listbox enables users to choose one or more values for the input from a
 * collection of option items.
 *
 * The `listbox` is hidden by default, so its default state is collapsed. The
 * conditions that trigger expanding the `listbox` are:
 *
 * - It is displayed when the `ArrowDown`, `ArrowUp` keys are pressed, or the
 *   Open button (🔽) is pressed.
 * - It is displayed when the combobox receives focus.
 */
export default function Combobox({ autoComplete, children, disabled, error, id, labels, onChange, onToggle, opened, placeholder, selectionType, startIcon, testId, value, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
