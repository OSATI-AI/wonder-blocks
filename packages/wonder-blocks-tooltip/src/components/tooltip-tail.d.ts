import * as React from "react";
import { color } from "@osati-ai/wonder-blocks-tokens";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
import type { getRefFn, Placement, Offset } from "../util/types";
export type Props = {
    /**
     * Whether we should use the default white background color or switch to a
     * different bg color.
     *
     * NOTE: Added to support custom popovers
     * @ignore
     */
    color: keyof typeof color;
    /** The offset of the tail indicating where it should be positioned. */
    offset?: Offset;
    /** The placement of the tail with respect to the tooltip anchor. */
    placement: Placement;
    /** A callback to update the ref of the tail element. */
    updateRef?: getRefFn;
    /** When true, the tail is shown; otherwise, it is not but it still takes
     * space in the layout. */
    show: boolean;
};
type DefaultProps = {
    color: Props["color"];
    show: Props["show"];
};
type Dimensions = {
    trimlinePoints: [string, string];
    points: [string, string, string];
    height: number;
    width: number;
};
type FilterPosition = {
    y: string;
    x: string;
    offsetShadowX: number;
};
export default class TooltipTail extends React.Component<Props> {
    static defaultProps: DefaultProps;
    _calculateDimensionsFromPlacement(): Dimensions;
    _getFilterPositioning(): FilterPosition | null | undefined;
    /**
     * Create an SVG filter that applies a blur to an element.
     * We'll apply it to a dark shape outlining the tooltip, which
     * will produce the overall effect of a drop-shadow.
     *
     * Also, scope its ID by side, so that tooltips with other
     * "side" values don't end up using the wrong filter from
     * elsewhere in the document. (The `height` value depends on
     * which way the arrow is turned!)
     */
    _maybeRenderDropshadow(points: [string, string, string]): React.ReactNode;
    _getFullTailWidth(): number;
    _getFullTailHeight(): number;
    _getContainerStyle(): StyleType;
    _getArrowStyle(): React.CSSProperties;
    _renderArrow(): React.ReactNode;
    render(): React.ReactNode;
}
export {};
