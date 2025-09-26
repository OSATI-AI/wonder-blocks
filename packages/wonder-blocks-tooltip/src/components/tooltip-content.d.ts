import * as React from "react";
import type { Typography } from "@osati-ai/wonder-blocks-typography";
import { ContentStyle } from "../util/types";
type Props = {
    /**
     * The title for the tooltip content.
     * Optional.
     */
    title?: string | React.ReactElement<React.ComponentProps<Typography>>;
    /**
     * The main content for a tooltip.
     */
    children: string | React.ReactElement<React.ComponentProps<Typography>> | Array<React.ReactElement<React.ComponentProps<Typography>>>;
    /**
     * Optional custom styles for the tooltip which are a subset of valid CSS styles
     */
    contentStyle?: ContentStyle;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
};
/**
 * This component is used to provide the content that is to be rendered in the
 * tooltip bubble.
 *
 * ### Usage
 *
 * ```jsx
 * import {TooltipContent} from "@osati-ai/wonder-blocks-tooltip";
 *
 * <TooltipContent title="Title text!">
 *  Some content in my tooltip.
 * </TooltipContent>
 * ```
 */
export default class TooltipContent extends React.Component<Props> {
    _renderTitle(): React.ReactNode;
    _renderChildren(): React.ReactNode;
    render(): React.ReactNode;
}
export {};
