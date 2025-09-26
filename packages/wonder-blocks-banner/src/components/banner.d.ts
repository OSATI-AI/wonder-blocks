import * as React from "react";
import { StyleType } from "@osati-ai/wonder-blocks-core";
import { PhosphorIconAsset } from "@osati-ai/wonder-blocks-icon";
type ActionTriggerBase = {
    title: string;
    ariaLabel?: string;
};
type ActionTriggerWithButton = ActionTriggerBase & {
    type: "button";
    onClick: () => void;
};
type ActionTriggerWithLink = ActionTriggerBase & {
    type: "link";
    href: string;
    onClick?: () => void;
};
type ActionTriggerCustom = {
    type: "custom";
    node: React.ReactNode;
};
type ActionTrigger = ActionTriggerWithButton | ActionTriggerWithLink | ActionTriggerCustom;
type BannerKind =
/**
 * Color blue, circle 'i' icon. This is the default.
 */
"info"
/**
 * Color green, smiley icon
 */
 | "success"
/**
 * Color gold, triangle exclamation-point icon
 */
 | "warning"
/**
 * Color red, circle exclamation-point icon
 */
 | "critical";
type BannerLayout =
/**
 * Renders a rounded rectangle, usually for when banner is used as an inset
 * element on a screen (e.g., the SOT card) that appears to be floating.
 */
"floating"
/**
 * Renders a full-width banner, with no rounded corners.
 */
 | "full-width";
type Props = {
    /**
     * Accessible label for the banner.
     * This is read out before the other contents of the banner.
     */
    "aria-label"?: string;
    /**
     * Determines the color and icon of the banner.
     */
    kind?: BannerKind;
    /**
     * (DEPRECATED) Determines the edge style of the Banner.
     *
     * This prop is deprecated and will be removed in a future release.
     * Currently, it has no effect on the component.
     *
     * @deprecated
     */
    layout: BannerLayout;
    /**
     * Text on the banner or a node if you want something different. For the
     * best results, use the default styles provided by the Banner component and
     * avoid using typography components for the `text` prop.
     */
    text: string | React.ReactNode;
    /**
     * Links or tertiary Buttons that appear to the right of the text.
     *
     * The ActionTrigger must have either an onClick or an href field, or both.
     */
    actions?: ReadonlyArray<ActionTrigger>;
    /**
     * If present, dismiss button is on right side. If not, no button appears.
     */
    onDismiss?: () => void | null | undefined;
    /**
     * The accessible label for the dismiss button.
     * Please pass in a translated string.
     */
    dismissAriaLabel?: string;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * An optional icon to display. This is a reference to the icon asset (imported as a
     * static SVG file). If not provided, a default icon will be used based on
     * the "kind" prop.
     *
     * It supports the following types:
     * - `PhosphorIconAsset`: a reference to a Phosphor SVG asset.
     * - `string`: an import referencing an arbitrary SVG file.
     * - `"none"`: no icon is displayed.
     *
     * Note: When using `icon="none"`, make sure important information is
     * conveyed in the text of the banner, since color should not be the only
     * way to convey status information.
     */
    icon?: PhosphorIconAsset | string | "none";
    /**
     * Custom styles for the elements in the Banner component.
     * - `root`: Styles the root element
     */
    styles?: {
        root?: StyleType;
    };
};
/**
 * Banner. A banner displays a prominent message and related optional actions.
 * It can be used as a way of informing the user of important changes.
 * Typically, it is displayed toward the top of the screen.
 *
 * There are two possible layouts for banners - floating and full-width.
 * The `floating` layout is intended to be used when there is whitespace
 * around the banner. The `full-width` layout is intended to be used when
 * the banner needs to be flush with surrounding elements.
 *
 * ### Usage
 * ```jsx
 * import Banner from "@osati-ai/wonder-blocks-banner";
 *
 * <Banner
 *     text="Here is some example text."
 *     kind="success"
 *     layout="floating"
 *     actions={[
 *         {title: "Button 1", onClick: () => {}},
 *         {title: "Button 2", onClick: () => {}},
 *     ]}
 *     onDismiss={() => {console.log("Has been dismissed.")}}
 * />
 * ```
 */
declare const Banner: (props: Props) => React.ReactElement;
export default Banner;
