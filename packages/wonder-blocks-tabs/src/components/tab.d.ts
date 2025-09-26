import { StyleType } from "@osati-ai/wonder-blocks-core";
import * as React from "react";
/**
 * A component that has `role="tab"` and is used to represent a tab in a tabbed
 * interface.
 */
export declare const Tab: React.ForwardRefExoticComponent<Readonly<import("@osati-ai/wonder-blocks-core").AriaAttributes> & Readonly<{
    role?: import("@osati-ai/wonder-blocks-core").AriaRole;
}> & {
    /**
     * The contents of the tab label.
     */
    children: React.ReactNode;
    /**
     * Called when the tab is clicked.
     */
    onClick?: (event: React.MouseEvent) => unknown;
    /**
     * A unique id for the tab.
     */
    id: string;
    /**
     * Optional test ID for e2e testing.
     */
    testId?: string;
    /**
     * The id of the panel that the tab controls.
     */
    "aria-controls": string;
    /**
     * If the tab is currently selected.
     */
    selected?: boolean;
    /**
     * Called when a key is pressed on the tab.
     */
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    /**
     * Custom styles for the `Tab` component.
     */
    style?: StyleType;
} & React.RefAttributes<HTMLButtonElement>>;
export declare const styles: any;
