import * as React from "react";
import { color } from "@osati-ai/wonder-blocks-tokens";
import TooltipContent from "./tooltip-content";
import { FloatingElementProps } from "../util/types";
export type Props = {
    /** The unique identifier for this component. */
    id: string;
    /** The `TooltipContent` element that will be rendered in the bubble. */
    children: React.ReactElement<React.ComponentProps<typeof TooltipContent>>;
    onActiveChanged: (active: boolean) => unknown;
    /** Optional background color. */
    backgroundColor?: keyof typeof color;
} & FloatingElementProps;
type State = {
    active: boolean;
};
export default class TooltipBubble extends React.Component<Props, State> {
    state: State;
    _setActiveState(active: boolean): void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    render(): React.ReactNode;
}
export {};
