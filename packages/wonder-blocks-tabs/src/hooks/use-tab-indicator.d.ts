import { AriaRole } from "@osati-ai/wonder-blocks-core";
import * as React from "react";
type IndicatorProps = {
    /**
     * Inline styles for the indicator.
     */
    style: React.CSSProperties;
    role: AriaRole;
};
type Props = {
    /**
     * Whether to include animation.
     */
    animated: boolean;
    /**
     * Ref for the container of the tabs so we can observe when the size of the
     * children changes. This is necessary to update the underline position.
     */
    tabsContainerRef: React.RefObject<HTMLElement>;
    /**
     * Function that determines if a tab is active. The `childElement` argument
     * is the child element of the `tabsContainerRef` prop
     */
    isTabActive(childElement: Element): boolean;
};
/**
 * A hook that is used to manage the underline current indicator for tabs.
 * It returns:
 * - `indicatorProps`: The props to apply to the underline current indicator
 * - `updateUnderlineStyle`: A function that updates the underline style. Use
 * this function when the component detects a change in the tabs
 */
export declare const useTabIndicator: (props: Props) => {
    indicatorProps: IndicatorProps;
    updateUnderlineStyle: () => void;
};
export {};
