import * as React from "react";
import type { IconButtonProps, IconButtonRef } from "../util/icon-button.types";
/**
 * An `IconButton` is a button whose contents are an SVG image.
 *
 * To use, supply an `onClick` function, a Phosphor icon asset (see the
 * `Icon>PhosphorIcon` section) and an `aria-label` to describe the button
 * functionality. Optionally specify href (URL), clientSideNav, color (Wonder
 * Blocks Blue or Red), kind ("primary", "secondary", or "tertiary"), light
 * (whether the IconButton will be rendered on a dark background), disabled ,
 * test ID, and custom styling.
 *
 * The size of an `IconButton` is based on how the `size` prop is defined (see
 * `Sizes` below for more details). The focus ring which is displayed on hover
 * and focus is much larger but does not affect its size. This matches the
 * behavior of Button.
 *
 * IconButtons require a certain amount of space between them to ensure the
 * focus rings don't overlap. The minimum amount of spacing is 16px, but you
 * should refer to the mocks provided by design.  Using a Strut in between
 * IconButtons is the preferred way to for adding this spacing.
 *
 * Many layouts require alignment of visual left (or right) side of an
 * `IconButton`. This requires a little bit of pixel nudging since each icon as
 * a different amount of internal padding.
 *
 * See the Toolbar documentation for examples of `IconButton` use that follow
 * the best practices described above.
 *
 * ```js
 * import magnifyingGlassIcon from "@phosphor-icons/core/regular/magnifying-glass.svg";
 * import IconButton from "@osati-ai/wonder-blocks-icon-button";
 *
 * <IconButton
 *     icon={magnifyingGlassIcon}
 *     aria-label="An Icon"
 *     onClick={(e) => console.log("Hello, world!")}
 *     size="medium"
 * />
 * ```
 */
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<IconButtonRef>>;
