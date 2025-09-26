import * as React from "react";
import type { AriaProps } from "@osati-ai/wonder-blocks-core";
import type { OpenerProps, OptionLabel } from "../util/types";
declare const DropdownOpener: React.ForwardRefExoticComponent<Partial<Omit<AriaProps, "aria-disabled">> & {
    /**
     * The child function that returns the anchor the Dropdown will be activated
     * by. This function takes two arguments:
     *
     * - `eventState`: allows the opener element to access pointer event state.
     * - `text`: Passes the menu's text/label defined in the parent component.
     */
    children: (openerProps: OpenerProps) => React.ReactElement<any>;
    /**
     * Whether the opener is disabled. If disabled, disallows interaction.
     */
    disabled: boolean;
    /**
     * Callback for when the opener is pressed.
     */
    onClick: (e: React.SyntheticEvent) => unknown;
    /**
     * Callback for when the opener is blurred.
     */
    onBlur?: (e: React.SyntheticEvent) => unknown;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * Content for the opener that can be passed to the child as an argument.
     */
    text: OptionLabel;
    /**
     * Whether the dropdown is opened.
     */
    opened: boolean;
    /**
     * The unique identifier for the opener.
     */
    id?: string;
    /**
     * If the dropdown has an error.
     */
    error?: boolean;
    /**
     * The role of the opener.
     */
    role: "combobox" | "button";
} & React.RefAttributes<HTMLElement>>;
export default DropdownOpener;
