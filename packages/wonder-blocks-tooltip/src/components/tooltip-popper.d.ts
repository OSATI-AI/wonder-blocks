/**
 * This component is a light wrapper for @floating-ui/react, allowing us to position
 * and control the tooltip bubble location and visibility as we need.
 */
import * as React from "react";
import type { Placement, FloatingElementProps } from "../util/types";
type Props = {
    /**
     * This uses the children-as-a-function approach, mirroring the original
     * react-popper implementation.
     *
     * TODO(WB-624): figure out to only allow TooltipBubble and PopoverDialog
     */
    children: (arg1: FloatingElementProps) => React.ReactNode;
    /**
     * The element that anchors the tooltip bubble.
     * This is used to position the bubble.
     */
    anchorElement?: HTMLElement;
    /** Where should the bubble try to go with respect to its anchor. */
    placement: Placement;
    /**
     * Whether the tooltip should automatically update its position when the
     * anchor element changes.
     */
    autoUpdate?: boolean;
    /**
     * Optional property to set what the root boundary is for the popper behavior.
     * This is set to "viewport" by default, causing the popper to be positioned based
     * on the user's viewport. If set to "document", it will position itself based
     * on where there is available room within the document body.
     */
    rootBoundary?: "viewport" | "document";
    /**
     * If `rootBoundary` is `viewport`, this padding value is used to provide
     * spacing between the popper and the viewport. If not provided, default
     * spacing of 12px is applied.
     */
    viewportPadding?: number;
};
/**
 * A function component that wraps @floating-ui/react's useFloating hook to provide a
 * consistent interface for positioning floating elements.
 */
export default function TooltipPopper(props: Props): React.ReactNode;
export {};
