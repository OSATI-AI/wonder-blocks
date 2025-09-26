import * as React from "react";
import { AriaProps, PropsFor, StyleType } from "@osati-ai/wonder-blocks-core";
import { Tab } from "./tab";
export type TabRenderProps = Omit<PropsFor<typeof Tab>, "children">;
export type TabItem = AriaProps & {
    /**
     * A unique id for the tab.
     *
     * Here is how the id is used for the different elements in the component:
     * - The tab will have an id formatted as `${id}-tab`
     * - The associated tab panel will have an id formatted as `${id}-panel`
     *
     * It is also used to communicate the id of the selected tab via the
     * `selectedTabId` and `onTabSelected` props.
     */
    id: string;
    /**
     * The contents of the tab label.
     *
     * For specific use cases where the underlying tab element is wrapped
     * by another component (like a `Tooltip` or `Popover`), a render function
     * can be used with the `Tab` component instead. The render function
     * provides the tab props that should be applied to the `Tab` component.
     */
    label: React.ReactNode | ((tabProps: TabRenderProps) => React.ReactElement);
    /**
     * The contents of the panel associated with the tab.
     */
    panel: React.ReactNode;
    /**
     * Optional test ID for e2e testing.
     *
     * Here is how the test id is used for the different elements in the component:
     * - The tab will have a testId formatted as `${testId}-tab`
     * - The associated tab panel will have a testId formatted as `${testId}-panel`
     */
    testId?: string;
};
/**
 * Type to help ensure aria-label or aria-labelledby is set.
 */
type AriaLabelOrAriaLabelledby = {
    /**
     * If there is no visible label for the tabs, set aria-label to a
     * label describing the tabs.
     */
    "aria-label": string;
    "aria-labelledby"?: never;
} | {
    /**
     * If the tabs have a visible label, set aria-labelledby to a value
     * that refers to the labelling element.
     */
    "aria-labelledby": string;
    "aria-label"?: never;
};
type Props = {
    /**
     * A unique id to use as the base of the ids for the elements within the
     * component. If the `id` prop is not provided, a base unique id will be
     * auto-generated.
     *
     * Here is how the id is used for the different elements in the component:
     * - The root will have an id of `${id}`
     * - The tablist will have an id formatted as ${id}-tablist
     *
     * If you need to apply an id to a specific tab or tab panel, the `id` for
     * the tab item in the `tabs` prop will be used:
     * - The tab will have an id formatted as `${id}-tab`
     * - The associated tab panel will have an id formatted as `${id}-panel`
     */
    id?: string;
    /**
     * Optional test ID for e2e testing. Here is how the test id is used for the
     * different elements in the component:
     * - The root will have a testId formatted as `${testId}`
     * - The tablist will have a testId formatted as `${testId}-tablist`
     *
     * If you need to apply a testId to a specific tab or tab panel, add the
     * test id to the tab item in the `tabs` prop:
     * - The tab will have a testId formatted as `${testId}-tab`
     * - The associated tab panel will have a testId formatted as `${testId}-panel`
     */
    testId?: string;
    /**
     * The tabs to render. The Tabs component will wire up the tab and panel
     * attributes for accessibility.
     */
    tabs: Array<TabItem>;
    /**
     * The id of the tab that is selected.
     */
    selectedTabId: string;
    /**
     * Called when a tab is selected.
     */
    onTabSelected: (id: string) => unknown;
    /**
     * The mode of activation for the tabs for keyboard navigation. Defaults to
     * `manual`.
     *
     * - If `manual`, the tab will only be activated when a tab receives focus
     * and is selected by pressing `Space` or `Enter`.
     * - If `automatic`, the tab will be activated once a tab receives focus.
     */
    activationMode?: "manual" | "automatic";
    /**
     * Whether to include animation in the `Tabs` component. This should be
     * false if the user has `prefers-reduced-motion` opted in. Defaults to
     * `false`.
     */
    animated?: boolean;
    /**
     * Custom styles for the `Tabs` component.
     * - `root`: Styles the root `div` element.
     * - `tablist`: Styles the `tablist` element.
     * - `tab`: Styles all `tab` elements.
     * - `tabPanel`: Styles all the `tabpanel` elements.
     *
     * If styles need to be applied to specific tab or tab panel elements,
     * consider setting the styles on the `label` and `panel` content for the
     * `tabs` prop.
     */
    styles?: {
        root?: StyleType;
        tablist?: StyleType;
        tab?: StyleType;
        tabPanel?: StyleType;
    };
    /**
     * Whether to mount all tab panels when the component mounts.
     *
     * - When enabled, all tab panels are in the DOM. This is useful if the
     * tab contents should be crawlable for SEO purposes.
     * - When disabled, tab panels are only in the DOM if they've been visited.
     * This is useful for performance so that unvisited panels are not mounted.
     *
     * Defaults to `false`.
     */
    mountAllPanels?: boolean;
} & AriaLabelOrAriaLabelledby;
/**
 * A component that uses a tabbed interface to control a specific view. The
 * tabs have `role=”tab”` and keyboard users can change tabs using arrow keys.
 * For a tabbed interface where the tabs are links, see the NavigationTabs
 * component.
 */
export declare const Tabs: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
