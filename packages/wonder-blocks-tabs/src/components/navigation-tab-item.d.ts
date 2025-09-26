import { StyleType } from "@osati-ai/wonder-blocks-core";
import * as React from "react";
type NavigationTabItemLinkProps = {
    style: StyleType;
    "aria-current"?: "page";
};
/**
 * A component for a tab item in NavigationTabs. It is used with a Link
 * component.
 *
 * ## Usage
 *
 * ```jsx
 * import {NavigationTab, NavigationTabItem} from "@osati-ai/wonder-blocks-tabs";
 * import Link from "@osati-ai/wonder-blocks-link";
 *
 * <NavigationTabs>
 *  <NavigationTabItem>
 *    <Link href="/link-1">Link 1</Link>
 *  </NavigationTabItem>
 *  <NavigationTabItem>
 *    <Link href="/link-2">Link 2</Link>
 *  </NavigationTabItem>
 * </NavigationTabs>
 * ```
 */
export declare const NavigationTabItem: React.ForwardRefExoticComponent<Readonly<import("@osati-ai/wonder-blocks-core").AriaAttributes> & Readonly<{
    role?: import("@osati-ai/wonder-blocks-core").AriaRole;
}> & {
    /**
     * The `Link` to render for the navigation tab item.
     *
     * When a `Link` component is passed in for the `children` prop,
     * `NavigationTabItem` will inject props for the `Link`. For specific use
     * cases where the `Link` component is wrapped by another component (like a
     * `Tooltip` or `Popover`), a render function can be used instead. The
     * render function provides the Link props that should be applied to the
     * Link component.
     */
    children: React.ReactElement | ((linkProps: NavigationTabItemLinkProps) => React.ReactElement);
    /**
     * An id for the root element.
     */
    id?: string;
    /**
     * Optional test ID for e2e testing.
     */
    testId?: string;
    /**
     * If the `NavigationTabItem` is the current page. If `true`, current
     * styling and aria-current=page will be applied to the Link.
     *
     * Note: NavigationTabs provides the styling for the current tab item.
     */
    current?: boolean;
    /**
     * Custom styles for overriding default styles. For custom link styling,
     * prefer applying the styles to the `Link` component. Note: The
     * `NavigationTabItem` will also set styles to the `Link` child component.
     */
    style?: StyleType;
} & React.RefAttributes<HTMLLIElement>>;
export {};
