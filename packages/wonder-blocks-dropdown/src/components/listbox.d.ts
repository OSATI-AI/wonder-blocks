import { StyleType } from "@osati-ai/wonder-blocks-core";
import { MaybeValueOrValues, OptionItemComponent } from "../util/types";
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
    value?: MaybeValueOrValues;
    /**
     * Callback for when the selection changes. The value passed as an argument
     * is an updated array of the selected value(s).
     */
    onChange?: (value: MaybeValueOrValues) => void;
    /**
     * Provides a label for the listbox.
     */
    "aria-label"?: string;
    /**
     * A reference to the element that describes the listbox.
     */
    "aria-labelledby"?: string;
    /**
     * Whether the listbox is disabled.
     *
     * A disabled combobox does not support interaction, but it supports focus
     * for a11y reasons. It internally maps to`aria-disabled`. Defaults to
     * false.
     */
    disabled?: boolean;
    /**
     * The unique identifier of the listbox element.
     */
    id?: string;
    /**
     * TODO(WB-1678): Add async support to the listbox.
     *
     * Whether to display the loading state to let the user know that the
     * results are being loaded asynchronously. Defaults to false.
     */
    loading?: boolean;
    /**
     * Optional custom styles applied to the listbox container.
     */
    style?: StyleType;
    /**
     * Includes the listbox in the page tab sequence.
     */
    tabIndex?: number;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
};
/**
 * A `Listbox` component presents a list of options and allows a user to select
 * one or more of them. A listbox that allows a single option to be chosen is a
 * single-select listbox; one that allows multiple options to be selected is a
 * multi-select listbox.
 *
 * ### Usage
 *
 * ```tsx
 * import {Listbox} from "@osati-ai/wonder-blocks-dropdown";
 *
 * <Listbox>
 *  <OptionItem label="Apple" value="apple" />
 *  <OptionItem disabled label="Strawberry" value="strawberry" />
 *  <OptionItem label="Pear" value="pear" />
 * </Listbox>
 * ```
 */
export default function Listbox(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
