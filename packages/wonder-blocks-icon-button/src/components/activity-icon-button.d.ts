import * as React from "react";
import { Link } from "react-router-dom-v5-compat";
import { PhosphorIconAsset } from "@osati-ai/wonder-blocks-icon";
import type { ActivityIconButtonActionType, BaseIconButtonProps } from "../util/icon-button.types";
type AriaLabelOnly = {
    /**
     * The alternative text for the icon button. Use `aria-label` for when
     * there's no visible label for the button, such as when the button only
     * contains an icon.
     */
    "aria-label": string;
    label?: never;
};
type LabelOnly = {
    "aria-label"?: never;
    /**
     * A label for the button that describes its action.
     *
     * NOTE: If `label` is set, then `aria-label` will be ignored.
     */
    label: string;
};
type Props = Omit<BaseIconButtonProps, "icon"> & (AriaLabelOnly | LabelOnly) & {
    /**
     * The action type of the button. This determines the visual style of the
     * button.
     *
     * - `progressive` is used for actions that move the user forward in a flow.
     * - `neutral` is used for buttons that indicate a neutral action.
     */
    actionType?: ActivityIconButtonActionType;
    /**
     * A Phosphor icon asset (imported as a static SVG file), or an element.
     */
    icon: PhosphorIconAsset | React.ReactElement;
};
/**
 * `ActivityIconButton` is an icon button that is used for actions in the
 * context of learner activities. It uses a "chonky" design, which is a more
 * playful and engaging design that is suitable for learner activities
 *
 * ```tsx
 * import magnifyingGlassIcon from
 * "@phosphor-icons/core/regular/magnifying-glass.svg";
 * import {ActivityIconButton} from "@osati-ai/wonder-blocks-icon-button";
 *
 * <ActivityIconButton
 *     icon={magnifyingGlassIcon}
 *     aria-label="An Icon"
 *     onClick={(e) => console.log("Hello, world!")}
 * />
 * ```
 */
export declare const ActivityIconButton: React.ForwardRefExoticComponent<Props & React.RefAttributes<typeof Link | HTMLButtonElement | HTMLAnchorElement>>;
export {};
