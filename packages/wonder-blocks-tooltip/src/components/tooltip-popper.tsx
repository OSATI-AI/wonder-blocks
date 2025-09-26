/**
 * This component is a light wrapper for @floating-ui/react, allowing us to position
 * and control the tooltip bubble location and visibility as we need.
 */
import * as React from "react";
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    arrow,
    hide,
    limitShift,
    type Placement as FloatingPlacement,
} from "@floating-ui/react";

import {spacing} from "@osati-ai/wonder-blocks-tokens";
import type {
    Placement,
    FloatingElementProps,
} from "../util/types";
import RefTracker from "../util/ref-tracker";

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

type DefaultProps = {
    rootBoundary: Props["rootBoundary"];
    viewportPadding: Props["viewportPadding"];
};

const defaultProps: DefaultProps = {
    rootBoundary: "viewport",
    viewportPadding: spacing.small_12,
};

/**
 * A function component that wraps @floating-ui/react's useFloating hook to provide a
 * consistent interface for positioning floating elements.
 */
export default function TooltipPopper(props: Props): React.ReactNode {
    const {
        children,
        anchorElement,
        placement,
        autoUpdate: shouldAutoUpdate = false,
        rootBoundary = defaultProps.rootBoundary,
        viewportPadding = defaultProps.viewportPadding,
    } = props;

    console.log('[TooltipPopper] Component rendered with props:', {
        anchorElement,
        placement,
        shouldAutoUpdate,
        rootBoundary,
        viewportPadding,
        boundingRect: anchorElement?.getBoundingClientRect()
    });

    const [isReady, setIsReady] = React.useState(false);
    const arrowRef = React.useRef<HTMLElement | null>(null);

    // Create ref trackers to maintain compatibility with existing API
    const bubbleRefTracker = React.useRef(new RefTracker());
    const tailRefTracker = React.useRef(new RefTracker());

    const {
        refs,
        floatingStyles,
        placement: finalPlacement,
        middlewareData,
        update,
    } = useFloating({
        placement: placement as FloatingPlacement,
        elements: {
            reference: anchorElement,
        },
        whileElementsMounted: shouldAutoUpdate ? autoUpdate : undefined,
        middleware: [
            offset(8), // Space between anchor and tooltip
            // flip({
            //     boundary: rootBoundary === "viewport" ? "clippingAncestors" as const : "viewport" as const,
            //     padding: viewportPadding,
            // }),
            // shift({
            //     boundary: rootBoundary === "viewport" ? "clippingAncestors" as const : "viewport" as const,
            //     padding: viewportPadding,
            //     limiter: limitShift(),
            // }),
            arrow({element: arrowRef}),
            hide(),
            // Custom middleware to replace smallViewportModifier
            {
                name: "smallViewport",
                fn({elements, rects, middlewareData}) {
                    if (!elements.floating || !elements.reference) {
                        return {};
                    }

                    const popperHeight = rects.floating.height + rects.reference.height;
                    const viewportHeight = window.innerHeight;

                    if (viewportHeight < popperHeight && middlewareData.hide) {
                        return {
                            data: {
                                ...middlewareData.hide,
                                referenceHidden: false,
                            }
                        };
                    }
                    return {};
                }
            }
        ],
    });

    console.log('[TooltipPopper] useFloating result:', {
        floatingStyles,
        finalPlacement,
        middlewareData,
        refsReference: refs.reference.current,
        refsFloating: refs.floating.current,
        isReady
    });

    // Set floating element ref through the ref tracker
    React.useEffect(() => {
        console.log('[TooltipPopper] Setting up bubbleRefTracker callback with refs.setFloating');
        bubbleRefTracker.current.setCallback((node: HTMLElement | null) => {
            console.log('[TooltipPopper] bubbleRefTracker callback called with node:', node);
            refs.setFloating(node);
            console.log('[TooltipPopper] Called refs.setFloating with node:', node);
        });
    }, [refs.setFloating]);

    // Set arrow element ref through the ref tracker
    React.useEffect(() => {
        tailRefTracker.current.setCallback((node: HTMLElement | null) => {
            arrowRef.current = node;
        });
    }, []);

    // Set the reference element dynamically when anchorElement changes
    React.useEffect(() => {
        console.log('[TooltipPopper] anchorElement useEffect triggered:', {
            anchorElement,
            boundingRect: anchorElement?.getBoundingClientRect(),
            currentReference: refs.reference.current
        });
        if (anchorElement) {
            refs.setReference(anchorElement);
            console.log('[TooltipPopper] Set reference to:', anchorElement);
            // Force an update after setting the reference
            update();
            console.log('[TooltipPopper] Called update() after setting reference');
        } else {
            // Clear the reference if anchorElement becomes null
            console.log('[TooltipPopper] Clearing reference (anchorElement is null)');
            refs.setReference(null);
        }
    }, [anchorElement, refs, update]);

    // Set ready state on first position calculation
    React.useEffect(() => {
        console.log('[TooltipPopper] isReady useEffect triggered:', {
            isReady,
            refsFloating: refs.floating.current
        });
        if (!isReady && refs.floating.current) {
            console.log('[TooltipPopper] Setting isReady to true');
            setIsReady(true);
        }
    }, [isReady, refs.floating.current]);

    // Filter the placement to match the original component's behavior
    const filterPlacement = (floatingPlacement: string): Placement => {
        if (floatingPlacement.startsWith("top")) return "top";
        if (floatingPlacement.startsWith("bottom")) return "bottom";
        if (floatingPlacement.startsWith("right")) return "right";
        if (floatingPlacement.startsWith("left")) return "left";
        return placement; // fallback to original placement
    };

    const bubbleProps: FloatingElementProps = {
        placement: filterPlacement(finalPlacement),
        style: {
            top: floatingStyles.top,
            left: floatingStyles.left,
            bottom: floatingStyles.bottom,
            right: floatingStyles.right,
            position: floatingStyles.position,
            transform: floatingStyles.transform,
            // We hide the content if the popper isn't ready yet. This
            // makes it so users do not see the tooltip in the wrong place
            // while it re-positions itself
            visibility: !isReady ? "hidden" : undefined,
        },
        updateBubbleRef: bubbleRefTracker.current.updateRef,
        tailOffset: middlewareData.arrow || {},
        updateTailRef: tailRefTracker.current.updateRef,
        isReferenceHidden: middlewareData.hide?.referenceHidden ?? false,
    };

    console.log('[TooltipPopper] Final bubbleProps:', {
        placement: bubbleProps.placement,
        style: bubbleProps.style,
        isReady,
        isReferenceHidden: bubbleProps.isReferenceHidden
    });

    return children(bubbleProps);
}