import * as React from "react";
import { NavigateFunction } from "react-router-dom-v5-compat";
export type ClickableRole = "button" | "checkbox" | "link" | "listbox" | "menu" | "menuitem" | "menuitemcheckbox" | "option" | "radio" | "switch" | "tab";
type CommonProps = Readonly<{
    /**
     * A function that returns the a React `Element`.
     *
     * The React `Element` returned should take in this component's state
     * (`{hovered, focused, pressed}`) as props.
     */
    children: (state: ClickableState, childrenProps: ChildrenProps) => React.ReactNode;
    /**
     * Whether the component is disabled.
     *
     * If the component is disabled, this component will return handlers
     * that do nothing.
     */
    disabled: boolean;
    /**
     * A URL.
     *
     * If specified, clicking on the component will navigate to the location
     * provided.
     * For keyboard navigation, the default is that both an enter and space
     * press would also navigate to this location. See the triggerOnEnter and
     * triggerOnSpace props for more details.
     */
    href?: string;
    /**
     * This should only be used by button.js.
     */
    type?: "submit";
    /**
     * Specifies the type of relationship between the current document and the
     * linked document. Should only be used when `href` is specified. This
     * defaults to "noopener noreferrer" when `target="_blank"`, but can be
     * overridden by setting this prop to something else.
     */
    rel?: string;
    skipClientNav?: boolean;
    /**
     * Used to indicate the tab order of an element.
     * Use 0 to make an element focusable, and use -1 to make an
     * element non-focusable via keyboard navigation.
     */
    tabIndex?: number;
    /**
     * A function to be executed `onclick`.
     */
    onClick?: (e: React.SyntheticEvent) => unknown;
    /**
     * Run async code in the background while client-side navigating. If the
     * browser does a full page load navigation, the callback promise must be
     * settled before the navigation will occur. Errors are ignored so that
     * navigation is guaranteed to succeed.
     */
    safeWithNav?: () => Promise<unknown>;
    /**
     * Passed in by an HOC in get-clickable-behavior.tsx.
     * @ignore
     */
    navigate?: NavigateFunction;
    /**
     * A role that encapsulates how the clickable component should behave, which
     * affects which keyboard actions trigger the component. For example, a
     * component with role="button" should be able to be clicked with both the
     * enter and space keys.
     */
    role?: ClickableRole;
    /**
     * Respond to raw "onfocus" event.
     */
    onFocus?: (e: React.FocusEvent) => unknown;
    /**
     * Respond to raw "keydown" event.
     */
    onKeyDown?: (e: React.KeyboardEvent) => unknown;
    /**
     * Respond to raw "keyup" event.
     */
    onKeyUp?: (e: React.KeyboardEvent) => unknown;
    /**
     * Respond to a raw "mousedown" event.
     */
    onMouseDown?: (e: React.MouseEvent) => unknown;
    /**
     * Respond to a raw "mouseup" event.
     */
    onMouseUp?: (e: React.MouseEvent) => unknown;
    /**
     * An optional prop that enables a
     * [https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API](View
     * Transition) for this navigation by wrapping the final state update in
     * `document.startViewTransition()`.
     *
     * @see https://reactrouter.com/6.30.0/components/link#viewtransition
     */
    viewTransition?: boolean;
}>;
type Props = (CommonProps & Readonly<{
    /**
     * A target destination window for a link to open in. Should only be used
     * when `href` is specified.
     */
    target?: "_blank";
    beforeNav?: never;
}>) | (CommonProps & Readonly<{
    /**
     * Run async code before navigating to the URL passed to `href`. If the
     * promise returned rejects then navigation will not occur.
     *
     * If both safeWithNav and beforeNav are provided, beforeNav will be run
     * first and safeWithNav will only be run if beforeNav does not reject.
     *
     * WARNING: Using this with `target="_blank"` will trigger built-in popup
     * blockers in Firefox and Safari.  This is because we do navigation
     * programmatically and `beforeNav` causes a delay which means that the
     * browser can't make a directly link between a user action and the
     * navigation.
     */
    beforeNav?: () => Promise<unknown>;
    target?: never;
}>);
export type ClickableState = Readonly<{
    /**
     * Whether the component is hovered.
     *
     * See component documentation for more details.
     */
    hovered: boolean;
    /**
     * Whether the component is hovered.
     *
     * See component documentation for more details.
     */
    focused: boolean;
    /**
     * Whether the component is hovered.
     *
     * See component documentation for more details.
     */
    pressed: boolean;
    /**
     * When we're waiting for beforeNav or safeWithNav to complete an async
     * action, this will be true.
     *
     * NOTE: We only wait for safeWithNav to complete when doing a full page
     * load navigation.
     */
    waiting: boolean;
}>;
type DefaultProps = Readonly<{
    disabled: Props["disabled"];
}>;
export type ChildrenProps = Readonly<{
    onClick: (e: React.SyntheticEvent) => unknown;
    onMouseEnter: (e: React.MouseEvent) => unknown;
    onMouseLeave: () => unknown;
    onMouseDown: (e: React.MouseEvent) => unknown;
    onMouseUp: (e: React.MouseEvent) => unknown;
    onTouchStart: () => unknown;
    onTouchEnd: () => unknown;
    onTouchCancel: () => unknown;
    onKeyDown: (e: React.KeyboardEvent) => unknown;
    onKeyUp: (e: React.KeyboardEvent) => unknown;
    onFocus: (e: React.FocusEvent) => unknown;
    onBlur: (e: React.FocusEvent) => unknown;
    tabIndex?: number;
    rel?: string;
}>;
/**
 * Add hover, focus, and active status updates to a clickable component.
 *
 * Via mouse:
 *
 * 1. Hover over button -> hover state
 * 2. Mouse down -> active state
 * 3. Mouse up -> default state
 * 4. Press tab -> focus state
 *
 * Via touch:
 *
 * 1. Touch down -> press state
 * 2. Touch up -> default state
 *
 * Via keyboard:
 *
 * 1. Tab to focus -> focus state
 * 2. Keydown (spacebar/enter) -> active state
 * 3. Keyup (spacebar/enter) -> focus state
 *
 * Warning: The event handlers returned (onClick, onMouseEnter, onMouseLeave,
 * onMouseDown, onMouseUp, onTouchStart, onTouchEnd, onTouchCancel,
 * onKeyDown, onKeyUp, onFocus, onBlur, tabIndex) should be passed on to the
 * component that has the ClickableBehavior. You cannot override these handlers
 * without potentially breaking the functionality of ClickableBehavior.
 *
 * There are internal props triggerOnEnter and triggerOnSpace that can be set to
 * false if one of those keys shouldn't count as a click on this component. Be
 * careful about setting those to false -- make certain that the component
 * shouldn't process that key.
 *
 * See [this
   document](https://docs.google.com/document/d/1DG5Rg2f0cawIL5R8UqnPQpd7pbdObk8OyjO5ryYQmBM/edit#)
   for a more thorough explanation of expected behaviors and potential cavaets.
 *
 * `ClickableBehavior` accepts a function as `children` which is passed state
 * and an object containing event handlers and some other props. The `children`
 * function should return a clickable React Element of some sort.
 *
 * Example:
 *
 * ```jsx
 * function MyClickableComponent(props: Props) {
 *   const ClickableBehavior = getClickableBehavior();
 *
 *   return (
 *       <ClickableBehavior
 *           disabled={props.disabled}
 *           onClick={props.onClick}
 *           tabIndex={0}
 *        >
 *           {({hovered}, childrenProps) => (
 *               <RoundRect
 *                   textcolor="white"
 *                   backgroundColor={hovered ? "red" : "blue"}
 *                   {...childrenProps}
 *               >
 *                   {props.children}
 *               </RoundRect>
 *           )}
 *      </ClickableBehavior>
 *   );
 * }
 * ```
 *
 * This follows a pattern called [Function as Child
 * Components](https://medium.com/merrickchristensen/function-as-child-components-5f3920a9ace9).
 *
 * **WARNING:** Do not use this component directly, use getClickableBehavior
 * instead. getClickableBehavior takes three arguments (href, directtNav, and
 * router) and returns either the default ClickableBehavior or a react-router
 * aware version.
 *
 * The react-router aware version is returned if `router` is a react-router-dom
 * router, `skipClientNav` is not `true`, and `href` is an internal URL.
 *
 * The `router` can be accessed via __RouterContext (imported from
   'react-router') from a component rendered as a descendant of a BrowserRouter.
   See https://reacttraining.com/react-router/web/guides/basic-components.
 */
export default class ClickableBehavior extends React.Component<Props, ClickableState> {
    waitingForClick: boolean;
    enterClick: boolean;
    static defaultProps: DefaultProps;
    static getDerivedStateFromProps(props: Props, state: ClickableState): Partial<ClickableState> | null | undefined;
    constructor(props: Props);
    navigateOrReset(shouldNavigate: boolean): void;
    handleSafeWithNav(safeWithNav: () => Promise<unknown>, shouldNavigate: boolean): Promise<void>;
    runCallbackAndMaybeNavigate(e: React.SyntheticEvent): Promise<undefined> | null | undefined;
    handleClick: (e: React.SyntheticEvent) => void;
    handleMouseEnter: (e: React.MouseEvent) => void;
    handleMouseLeave: () => void;
    handleMouseDown: (e: React.MouseEvent) => void;
    handleMouseUp: (e: React.MouseEvent) => void;
    handleTouchStart: () => void;
    handleTouchEnd: () => void;
    handleTouchCancel: () => void;
    handleKeyDown: (e: React.KeyboardEvent) => void;
    handleKeyUp: (e: React.KeyboardEvent) => void;
    handleFocus: (e: React.FocusEvent) => void;
    handleBlur: (e: React.FocusEvent) => void;
    render(): React.ReactNode;
}
export {};
