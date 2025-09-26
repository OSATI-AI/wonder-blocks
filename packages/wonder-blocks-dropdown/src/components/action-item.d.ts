import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
import type { CellProps } from "../util/types";
type ActionProps = {
    /**
     * Display text of the action item.
     */
    label: string | CellProps["title"];
    /**
     * Whether this action item is disabled.
     */
    disabled: boolean;
    /**
     * URL to navigate to.
     *
     * Note: Either href or onClick must be defined
     */
    href?: string;
    /**
     * Optional attribute to indicate to the Screen Reader which language the
     * item text is in.
     */
    lang?: string;
    /**
     * A target destination window for a link to open in.
     *
     * TODO(WB-1262): only allow this prop when `href` is also set.
     */
    target?: "_blank";
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * Function to call when button is clicked.
     *
     * This callback should be used for things like marking BigBingo
     * conversions. It should NOT be used to redirect to a different URL or to
     * prevent navigation via e.preventDefault(). The event passed to this
     * handler will have its preventDefault() and stopPropagation() methods
     * stubbed out.
     *
     * Note: onClick is optional if href is present, but must be defined if
     * href is not
     */
    onClick?: () => unknown;
    /**
     * Whether this item should be indented to have menu items left-align in
     * text when an ActionItem is used in the same menu as items that have
     * checks or checkboxes. Auto-populated by menu.
     * @ignore
     */
    indent: boolean;
    /**
     * Aria role to use, defaults to "menuitem".
     */
    role: "menuitem" | "option";
    /**
     * In case we use react-window, this needs to be added in order to inject
     * styles to calculate the position
     * @ignore
     */
    style?: StyleType;
    /**
     * Inherited from WB Cell.
     */
    /**
     * Adds a horizontal rule at the bottom of the cell that can be used to
     * separate items within ActionMenu instances. Defaults to `none`.
     */
    horizontalRule?: CellProps["horizontalRule"];
    /**
     * Optional left accessory to display in the `ActionItem` element.
     */
    leftAccessory?: CellProps["leftAccessory"];
    /**
     * Optional right accessory to display in the `ActionItem` element.
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
    /**
     * Optional; applies aria-current to the cell.
     */
    active?: CellProps["active"];
};
export type ActionItemProps = Omit<ActionProps, 'disabled' | 'horizontalRule' | 'indent' | 'role'> & {
    disabled?: boolean;
    horizontalRule?: CellProps["horizontalRule"];
    indent?: boolean;
    role?: "menuitem" | "option";
};
declare const ActionItem: React.ForwardRefExoticComponent<Omit<ActionProps, "role" | "disabled" | "horizontalRule" | "indent"> & {
    disabled?: boolean;
    horizontalRule?: CellProps["horizontalRule"];
    indent?: boolean;
    role?: "menuitem" | "option";
} & React.RefAttributes<HTMLDivElement>>;
export default ActionItem;
