import * as React from "react";
/**
 * Text is a building block for constructing other components. `Text` roughly
 * maps to `span`. You can override which tag is used to render the component
 * (for semantic purposes) by specifying the `tag` prop.
 *
 * These components can take styles (via the `style` prop) in a variety of
 * manners:
 *
 * - An inline style object
 * - An `aphrodite` StyleSheet style
 * - An array combining the above
 */
declare const Text: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    style?: import("..").StyleType;
    testId?: string;
    lang?: string;
    className?: string;
    dir?: "ltr" | "rtl" | "auto";
    htmlFor?: string;
    tabIndex?: number;
    id?: string;
    title?: string;
    "data-modal-launcher-portal"?: boolean;
    "data-placement"?: string;
} & Readonly<import("..").AriaAttributes> & Readonly<{
    role?: import("..").AriaRole;
}> & {
    onMouseDown?: (e: React.MouseEvent) => unknown;
    onMouseUp?: (e: React.MouseEvent) => unknown;
    onMouseMove?: (e: React.MouseEvent) => unknown;
    onClick?: (e: React.MouseEvent) => unknown;
    onDoubleClick?: (e: React.MouseEvent) => unknown;
    onMouseEnter?: (e: React.MouseEvent) => unknown;
    onMouseLeave?: (e: React.MouseEvent) => unknown;
    onMouseOut?: (e: React.MouseEvent) => unknown;
    onMouseOver?: (e: React.MouseEvent) => unknown;
    onDrag?: (e: React.MouseEvent) => unknown;
    onDragEnd?: (e: React.MouseEvent) => unknown;
    onDragEnter?: (e: React.MouseEvent) => unknown;
    onDragExit?: (e: React.MouseEvent) => unknown;
    onDragLeave?: (e: React.MouseEvent) => unknown;
    onDragOver?: (e: React.MouseEvent) => unknown;
    onDragStart?: (e: React.MouseEvent) => unknown;
    onDrop?: (e: React.MouseEvent) => unknown;
} & {
    onKeyDown?: (e: React.KeyboardEvent) => unknown;
    onKeyPress?: (e: React.KeyboardEvent) => unknown;
    onKeyUp?: (e: React.KeyboardEvent) => unknown;
} & {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
    onInput?: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
    onInvalid?: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
    onSubmit?: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
} & {
    onTouchCancel?: (e: React.TouchEvent) => unknown;
    onTouchEnd?: (e: React.TouchEvent) => unknown;
    onTouchMove?: (e: React.TouchEvent) => unknown;
    onTouchStart?: (e: React.TouchEvent) => unknown;
} & {
    onFocus?: (e: React.FocusEvent) => unknown;
    onBlur?: (e: React.FocusEvent) => unknown;
} & {
    tag?: string;
} & React.RefAttributes<unknown>>;
export default Text;
