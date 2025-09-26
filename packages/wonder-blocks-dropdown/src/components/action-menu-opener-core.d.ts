import * as React from "react";
import type { AriaProps } from "@osati-ai/wonder-blocks-core";
import type { ClickableState } from "@osati-ai/wonder-blocks-clickable";
type Props = Partial<Omit<AriaProps, "aria-disabled">> & ClickableState & {
    /**
     * Display text for the opener.
     */
    children: string;
    /**
     * Whether the opener is disabled. If disabled, disallows interaction.
     */
    disabled?: boolean;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * Whether the dropdown is open.
     */
    opened: boolean;
};
/**
 * Although this component shares a lot with ButtonCore there are a couple
 * of differences:
 * - the down caret icon appears on the right instead of the left
 * - the down caret icon is smaller that the one that would be used by ButtonCore
 */
export default class ActionMenuOpenerCore extends React.Component<Props> {
    render(): React.ReactNode;
}
export {};
