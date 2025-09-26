import * as React from "react";
import type { ButtonRef } from "../util/button.types";
/**
 * The `Button` component is a reusable button that can be used in various
 * contexts. It can be used as a link or a button, and it supports various
 * props to customize its behavior and appearance.
 *
 * ### Usage
 *
 * ```tsx
 * import Button from "@osati-ai/wonder-blocks-button";
 *
 * <Button
 *     onClick={(e) => console.log("Hello, world!")}
 * >
 *     Hello, world!
 * </Button>
 * ```
 */
declare const Button: React.ForwardRefExoticComponent<Partial<Omit<import("@osati-ai/wonder-blocks-core").AriaProps, "aria-disabled">> & {
    children: string;
    startIcon?: import("@osati-ai/wonder-blocks-icon").PhosphorIconAsset;
    endIcon?: import("@osati-ai/wonder-blocks-icon").PhosphorIconAsset;
    kind?: import("../util/button.types").ButtonKind;
    disabled?: boolean;
    id?: string;
    testId?: string;
    rel?: string;
    target?: "_blank";
    tabIndex?: number;
    skipClientNav?: boolean;
    href?: string;
    type?: "submit";
    className?: string;
    onClick?: (e: React.SyntheticEvent) => unknown;
    beforeNav?: () => Promise<unknown>;
    safeWithNav?: () => Promise<unknown>;
} & {
    actionType?: import("../util/button.types").ButtonActionType;
    size?: import("../util/button.types").ButtonSize;
    spinner?: boolean;
    labelStyle?: import("@osati-ai/wonder-blocks-core").StyleType;
    style?: import("@osati-ai/wonder-blocks-core").StyleType;
} & React.RefAttributes<ButtonRef>>;
export default Button;
