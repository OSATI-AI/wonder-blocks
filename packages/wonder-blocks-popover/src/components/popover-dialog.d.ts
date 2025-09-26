import * as React from "react";
import type { AriaProps } from "@osati-ai/wonder-blocks-core";
import type { Placement, FloatingElementProps } from "@osati-ai/wonder-blocks-tooltip";
import PopoverContent from "./popover-content";
import PopoverContentCore from "./popover-content-core";
type Props = AriaProps &
/**
 * Required to correctly position the elements inside the dialog
 * @ignore
 */ FloatingElementProps & {
    /**
     * The content to render inside the dialog.
     */
    children: React.ReactElement<React.ComponentProps<typeof PopoverContent>> | React.ReactElement<React.ComponentProps<typeof PopoverContentCore>>;
    /**
     * The unique identifier to give to the popover content.
     */
    id?: string;
    /**
     * Called when popper changes its placement
     */
    onUpdate: (placement: Placement) => unknown;
    /**
     * Whether to show the popover tail or not.
     */
    showTail: boolean;
};
/**
 * This is an internal component that we use to render the stuff that appears
 * when a popover shows. It's composed by two elements: The popover content,
 * that can be of type [PopoverContent](#PopoverContent) or
 * [PopoverContentCore](#PopoverContentCore), and the
 * [TooltipTail](#TooltipTail).
 *
 * The main difference with [TooltipBubble](#TooltipBubble) is that bubble
 * handles hover states and PopoverDialog doesn't need to handle any states at
 * all (for now). Also, PopoverDialog needs to coordinate different background
 * colors for the content and tail components.
 *
 * Note that without explicit positioning, the tail will not be centered.
 */
export default class PopoverDialog extends React.Component<Props> {
    componentDidUpdate(prevProps: Props): void;
    render(): React.ReactNode;
}
export {};
