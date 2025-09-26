import * as React from "react";
/**
 * A custom icon component that renders a streak icon using an inline svg. Use
 * with the `Icon` component to display the icon.
 *
 * The icon uses semantic color tokens for the different parts of the icon so
 * it will respond to the current theme.
 */
declare const StreakIcon: React.ForwardRefExoticComponent<Readonly<import("@osati-ai/wonder-blocks-core").AriaAttributes> & Readonly<{
    role?: import("@osati-ai/wonder-blocks-core").AriaRole;
}> & {
    "aria-label"?: string;
    "aria-labelledby"?: string;
    id?: string;
    testId?: string;
    style?: import("@osati-ai/wonder-blocks-core").StyleType;
} & React.RefAttributes<SVGSVGElement>>;
export { StreakIcon };
