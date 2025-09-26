import * as React from "react";
import { StyleType } from "@osati-ai/wonder-blocks-core";
type Props = {
    /**
     * The contents of the tab panel.
     */
    children: React.ReactNode;
    /**
     * A unique id for the tab panel.
     */
    id: string;
    /**
     * Optional test ID for e2e testing.
     */
    testId?: string;
    /**
     * The id of the associated element with role="tab".
     */
    "aria-labelledby": string;
    /**
     * Whether the tab panel is active.
     */
    active?: boolean;
    /**
     * Custom styles for the `TabPanel` component.
     */
    style?: StyleType;
};
/**
 * A component that has `role="tabpanel"` and is used to represent a tab panel
 * in a tabbed interface.
 */
export declare const TabPanel: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
