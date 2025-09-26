import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
import type { ClickableRole } from "@osati-ai/wonder-blocks-clickable";
import type { Typography } from "@osati-ai/wonder-blocks-typography";
export type PillKind = "neutral" | "accent" | "info" | "success" | "warning" | "critical" | "transparent";
export type PillSize = "small" | "medium" | "large";
/**
 * A `Pill` component displays text in a rounded, colored container. This is
 * usually used to add label tags.
 *
 * **Note:** Before using the `Pill` component, please see if a component from the
 * [Badge Package](/?path=/docs/packages-badge-overview--docs&globals=theme:default)
 * can be used instead.
 *
 * For example, prefer using the `StatusBadge` component instead of a `Pill` to
 * indicate a status. Or, use the `Badge` component instead of a `Pill` with
 * `kind="neutral"`.
 *
 * ### Usage
 *
 * ```jsx
 * import Pill from "@osati-ai/wonder-blocks-pill";
 *
 * <Pill text="Hello, world!" />
 * ```
 */
declare const Pill: React.ForwardRefExoticComponent<Readonly<import("@osati-ai/wonder-blocks-core").AriaAttributes> & Readonly<{
    role?: import("@osati-ai/wonder-blocks-core").AriaRole;
}> & {
    /**
     * The unique identifier for the pill.
     */
    id?: string;
    /**
     * The text to display within the pill.
     */
    children: string | React.ReactElement<React.ComponentProps<Typography>>;
    /**
     * Determines the color of the pill. Defaults to "neutral".
     * Neutral pills are gray, accent pills are blue.
     */
    kind?: PillKind;
    /**
     * The size of the pill. Defaults to "small".
     * Size of pill. A small pill has more of a classic “badge”
     * look and fully fits within a line of body text inline,
     * whereas a large pill contains normal body font size.
     */
    size?: PillSize;
    /**
     * The role the pill should have depending on its behavior.
     * By default, it has none. If pill is Clickable, this is automatically
     * set to “button".
     *
     * Role should be set according to the pill's behavior. For example,
     * if the pill is used as a tab in a tabbed panel, set its role to "tab".
     * If pills are being selected or deselected from a list, they should
     * probably have a role of "checkbox".
     */
    role?: ClickableRole;
    /**
     * Called when the pill is clicked.
     */
    onClick?: () => unknown;
    /**
     * Custom styles to add to this pill component.
     */
    style?: StyleType;
    /**
     * The tab index of the pill (clickable only).
     */
    tabIndex?: number;
    /**
     * Optional test ID for e2e testing.
     */
    testId?: string;
} & React.RefAttributes<HTMLElement | HTMLButtonElement>>;
export default Pill;
