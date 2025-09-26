import * as React from "react";
import { AriaProps } from "@osati-ai/wonder-blocks-core";
import { PhosphorIcon } from "@osati-ai/wonder-blocks-icon";
declare const Switch: React.ForwardRefExoticComponent<Pick<AriaProps, "aria-describedby" | "aria-label" | "aria-labelledby"> & {
    /**
     * Whether this component is checked.
     */
    checked: boolean;
    /**
     * Whether the switch is disabled. Defaults to `false`.
     */
    disabled?: boolean;
    /**
     * Optional icon to display on the slider.
     */
    icon?: React.ReactElement<React.ComponentProps<typeof PhosphorIcon>>;
    /**
     * The unique identifier for the switch.
     */
    id?: string;
    /**
     * Function to call when the switch is clicked.
     * @param newCheckedValue
     * @returns {unknown}
     */
    onChange?: (newCheckedState: boolean) => unknown;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * Adds CSS classes to the component.
     */
    className?: string;
} & React.RefAttributes<HTMLInputElement>>;
export default Switch;
