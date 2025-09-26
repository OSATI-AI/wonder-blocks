import * as React from "react";
import { AriaProps, StyleType } from "@osati-ai/wonder-blocks-core";
import { CellProps, OptionLabel } from "../util/types";
type OptionProps = AriaProps & {
    /**
     * Display text of the option item.
     */
    label: OptionLabel;
    /**
     * Optional text to use as the label. If not provided, label will be used.
     * This is useful for cases where the label is a complex component and you
     * want to display a simpler string in the menu.
     */
    labelAsText?: string;
    /**
     * Value of the item, used as a key of sorts for the parent to manage its
     * items, because label/display text may be identical for some selects. This
     * is the value passed back when the item is selected.
     */
    value: string;
    /**
     * Whether this option item is disabled.
     */
    disabled: boolean;
    /**
     * Optional user-supplied callback when this item is called.
     */
    onClick?: () => unknown;
    /**
     * Callback for when this item is pressed to change its selection state.
     * Passes value of the item. Auto-populated by menu or select.
     * @ignore
     */
    onToggle: (value: string) => unknown;
    /**
     * Whether this item is selected. Auto-populated by menu or select.
     * @ignore
     */
    selected: boolean;
    /**
     * Whether this item is focused. Auto-populated by listbox in combination of
     * aria-activedescendant.
     * @ignore
     */
    focused: boolean;
    /**
     * Aria role to use, defaults to "option".
     */
    role: "menuitem" | "option" | "menuitemcheckbox";
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * Whether the item should show a check or checkbox to indicate selection
     * state. Auto-populated by menu or select.
     * @ignore
     */
    variant?: "check" | "checkbox";
    /**
     * In case we use react-window, this needs to be added in order to inject
     * styles to calculate the position
     * @ignore
     */
    style?: StyleType;
    /**
     * Injected by the parent component to determine how we are going to handle
     * the component states (hovered, focused, selected, etc.)
     * Defaults to "dropdown".
     * @ignore
     */
    parentComponent?: "dropdown" | "listbox";
    /**
     * The unique identifier of the option item.
     *
     * This is used to identify the option item in the listbox so that it can be
     * focused programmatically (e.g. when the user presses the arrow keys).
     */
    id?: string;
    /**
     * Inherited from WB Cell.
     */
    /**
     * Adds a horizontal rule at the bottom of the cell that can be used to
     * separate items within ActionMenu instances. Defaults to `none`.
     */
    horizontalRule: CellProps["horizontalRule"];
    /**
     * Optional left accessory to display in the `OptionItem` element.
     */
    leftAccessory?: CellProps["leftAccessory"];
    /**
     * Optional right accessory to display in the `OptionItem` element.
     */
    rightAccessory?: CellProps["rightAccessory"];
    /**
     * Optional subtitle to display before the label.
     */
    subtitle1?: CellProps["subtitle1"];
    /**
     * Optional subtitle to display after the label.
     */
    subtitle2?: CellProps["subtitle2"];
};
export type OptionItemProps = Omit<OptionProps, 'disabled' | 'focused' | 'horizontalRule' | 'onToggle' | 'role' | 'selected'> & {
    disabled?: boolean;
    focused?: boolean;
    horizontalRule?: CellProps["horizontalRule"];
    onToggle?: (value: string) => unknown;
    role?: "menuitem" | "option" | "menuitemcheckbox";
    selected?: boolean;
};
declare const OptionItem: React.ForwardRefExoticComponent<Omit<OptionProps, "role" | "disabled" | "focused" | "onToggle" | "horizontalRule" | "selected"> & {
    disabled?: boolean;
    focused?: boolean;
    horizontalRule?: CellProps["horizontalRule"];
    onToggle?: (value: string) => unknown;
    role?: "menuitem" | "option" | "menuitemcheckbox";
    selected?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
export default OptionItem;
