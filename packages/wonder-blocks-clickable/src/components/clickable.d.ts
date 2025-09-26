import * as React from "react";
import type { AriaProps, StyleType } from "@osati-ai/wonder-blocks-core";
import type { ClickableRole, ClickableState } from "./clickable-behavior";
type CommonProps =
/**
 * aria-label should be used when `spinner={true}` to let people using screen
 * readers that the action taken by clicking the button will take some
 * time to complete.
 */
Partial<Omit<AriaProps, "aria-disabled">> & {
    /**
     * The child of Clickable must be a function which returns the component
     * which should be made Clickable.  The function is passed an object with
     * three boolean properties: hovered, focused, and pressed.
     */
    children: (clickableState: ClickableState) => React.ReactNode;
    /**
     * An onClick function which Clickable can execute when clicked
     */
    onClick?: (e: React.SyntheticEvent) => unknown;
    /**
     * An onFocus function which Clickable can execute when focused
     */
    onFocus?: (e: React.FocusEvent) => unknown;
    /**
     * Optional href which Clickable should direct to, uses client-side routing
     * by default if react-router is present
     */
    href?: string;
    /**
     * Styles to apply to the Clickable component
     */
    style?: StyleType;
    /**
     * Adds CSS classes to the Clickable.
     */
    className?: string;
    /**
     * Whether the Clickable is on a dark colored background.
     * Sets the default focus ring color to white, instead of blue.
     * Defaults to false.
     */
    light?: boolean;
    /**
     * Disables or enables the child; defaults to false
     */
    disabled?: boolean;
    /**
     * An optional id attribute.
     */
    id?: string;
    /**
     * Specifies the type of relationship between the current document and the
     * linked document. Should only be used when `href` is specified. This
     * defaults to "noopener noreferrer" when `target="_blank"`, but can be
     * overridden by setting this prop to something else.
     */
    rel?: string;
    /**
     * The role of the component, can be a role of type ClickableRole
     */
    role?: ClickableRole;
    /**
     * Avoids client-side routing in the presence of the href prop
     */
    skipClientNav?: boolean;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * Respond to raw "keydown" event.
     */
    onKeyDown?: (e: React.KeyboardEvent) => unknown;
    /**
     * Respond to raw "keyup" event.
     */
    onKeyUp?: (e: React.KeyboardEvent) => unknown;
    /**
     * Respond to raw "mousedown" event.
     */
    onMouseDown?: (e: React.MouseEvent) => unknown;
    /**
     * Respond to raw "mouseup" event.
     */
    onMouseUp?: (e: React.MouseEvent) => unknown;
    /**
     * Don't show the default focus ring.  This should be used when implementing
     * a custom focus ring within your own component that uses Clickable.
     */
    hideDefaultFocusRing?: boolean;
    /**
     * Set the tabindex attribute on the rendered element.
     */
    tabIndex?: number;
    /**
     * An optional title attribute.
     */
    title?: string;
    /**
     * Run async code before navigating. If the promise returned rejects then
     * navigation will not occur.
     *
     * If both safeWithNav and beforeNav are provided, beforeNav will be run
     * first and safeWithNav will only be run if beforeNav does not reject.
     *
     * WARNING: This prop must be used with `href` and should not be used with
     * `target="blank"`.
     */
    beforeNav?: () => Promise<unknown>;
    /**
     * Run async code in the background while client-side navigating. If the
     * browser does a full page load navigation, the callback promise must be
     * settled before the navigation will occur. Errors are ignored so that
     * navigation is guaranteed to succeed.
     */
    safeWithNav?: () => Promise<unknown>;
};
type Props = (CommonProps & {
    href: string;
    /**
     * Run async code in the background while client-side navigating. If the
     * browser does a full page load navigation, the callback promise must be
     * settled before the navigation will occur. Errors are ignored so that
     * navigation is guaranteed to succeed.
     */
    safeWithNav?: () => Promise<unknown>;
    /**
     * A target destination window for a link to open in.
     */
    target?: "_blank";
    beforeNav?: never;
}) | (CommonProps & {
    href?: string;
    /**
     * Run async code before navigating. If the promise returned rejects then
     * navigation will not occur.
     *
     * If both safeWithNav and beforeNav are provided, beforeNav will be run
     * first and safeWithNav will only be run if beforeNav does not reject.
     */
    beforeNav?: () => Promise<unknown>;
    /**
     * Run async code in the background while client-side navigating. If the
     * browser does a full page load navigation, the callback promise must be
     * settled before the navigation will occur. Errors are ignored so that
     * navigation is guaranteed to succeed.
     */
    safeWithNav?: () => Promise<unknown>;
    target?: never;
});
/**
 * A component to turn any custom component into a clickable one.
 *
 * Works by wrapping `ClickableBehavior` around the child element and styling
 * the child appropriately and encapsulates routing logic which can be
 * customized. Expects a function which returns an element as its child.
 *
 * Clickable allows your components to:
 *
 * - Handle mouse / touch / keyboard events
 * - Match the standard behavior of the given role
 * - Apply custom styles based on pressed / focused / hovered state
 * - Perform Client Side Navigation when href is passed and the component is a
 *   descendent of a react-router Router.
 *
 * ### Usage
 *
 * ```jsx
 * <Clickable onClick={() => alert("You clicked me!")}>
 *     {({hovered, focused, pressed}) =>
 *         <div
 *             style={[
 *                 hovered && styles.hovered,
 *                 focused && styles.focused,
 *                 pressed && styles.pressed,
 *             ]}
 *         >
 *             Click Me!
 *         </div>
 *     }
 * </Clickable>
 * ```
 */
declare const Clickable: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement | React.ForwardRefExoticComponent<import("react-router-dom-v5-compat").LinkProps & React.RefAttributes<HTMLAnchorElement>>>>;
export default Clickable;
