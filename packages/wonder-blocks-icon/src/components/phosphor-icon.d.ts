import * as React from "react";
import { AriaProps, StyleType } from "@osati-ai/wonder-blocks-core";
import { IconSize, PhosphorIconAsset } from "../types";
/**
 * A `PhosphorIcon` displays a small informational or decorative image as an
 * HTML element that renders a Phosphor Icon SVG available from the
 * `@phosphor-icons/core` package.
 *
 * For more information about the icons catalog, check the [Phosphor Icons
 * website](https://phosphoricons.com/).
 *
 * ## Usage
 *
 * ```tsx
 * import {PhosphorIcon} from "@osati-ai/wonder-blocks-icon";
 * import MagnifyingGlass from "@phosphor-icons/core/regular/magnifying-glass.svg";
 *
 * <PhosphorIcon
 *     icon={MagnifyingGlass}
 *     color={Color.blue}
 *     size="medium"
 *     style={{margin: Spacing.xxxxSmall_2}}
 * />
 * ```
 *
 * These icons should fit into a viewport of `16`, `24`, `48`, and `96` pixels,
 * respectively.
 */
export declare const PhosphorIcon: React.ForwardRefExoticComponent<Pick<AriaProps, "aria-hidden" | "aria-label" | "role"> & {
    /**
     * The color of the icon. Will default to `currentColor`, which means that
     * it will take on the CSS `color` value from the parent element.
     */
    color?: string;
    /**
     * Additional styles to apply to the icon.
     */
    style?: StyleType;
    /**
     * Adds CSS classes to the Icon.
     */
    className?: string;
    /**
     * The role of the icon. Will default to `img` if an `aria-label` is
     * provided.
     * @see https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24
     */
    role?: "img";
    /**
     * Size of the icon. One of `small` (16), `medium` (24), `large` (48), or
     * `xlarge` (96). Defaults to `small`.
     */
    size?: IconSize;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * The icon to display. This is a reference to the icon asset (imported as a
     * static SVG file).
     *
     * It supports the following types:
     * - `PhosphorIconAsset`: a reference to a Phosphor SVG asset.
     * - `string`: an import referencing an arbitrary SVG file.
     */
    icon: PhosphorIconAsset | string;
} & React.RefAttributes<HTMLSpanElement>>;
