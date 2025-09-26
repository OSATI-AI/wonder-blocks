import * as React from "react";
import type { ButtonKind, ButtonRef } from "../util/button.types";
/**
 * `ActivityButton` is a button that is used for actions in the context of
 * learner activities. It uses a "chonky" design, which is a more playful and
 * engaging design that is suitable for learner activities.
 *
 * ```tsx
 * import magnifyingGlassIcon from
 * "@phosphor-icons/core/regular/magnifying-glass.svg";
 * import {ActivityButton} from "@osati-ai/wonder-blocks-button";
 *
 * <ActivityButton
 *     startIcon={magnifyingGlassIcon}
 *     onClick={(e) => console.log("Hello, world!")}
 * >
 *  Hello, world!
 * </ActivityButton>
 * ```
 */
export declare const ActivityButton: React.ForwardRefExoticComponent<Partial<Omit<import("@osati-ai/wonder-blocks-core").AriaProps, "aria-disabled">> & {
    children: string;
    startIcon?: import("@osati-ai/wonder-blocks-icon").PhosphorIconAsset;
    endIcon?: import("@osati-ai/wonder-blocks-icon").PhosphorIconAsset;
    kind?: ButtonKind;
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
    styles?: {
        root?: import("@osati-ai/wonder-blocks-core").StyleType;
        box?: import("@osati-ai/wonder-blocks-core").StyleType;
        startIcon?: import("@osati-ai/wonder-blocks-core").StyleType;
        endIcon?: import("@osati-ai/wonder-blocks-core").StyleType;
        label?: import("@osati-ai/wonder-blocks-core").StyleType;
    };
} & React.RefAttributes<ButtonRef>>;
