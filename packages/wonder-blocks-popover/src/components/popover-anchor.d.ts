import * as React from "react";
import type { AriaProps } from "@osati-ai/wonder-blocks-core";
type Props = AriaProps & {
    /**
     * Callback to be invoked when the anchored content is mounted.
     * This provides a reference to the anchored content, which can then be
     * used for calculating popover content positioning.
     */
    anchorRef: (arg1?: HTMLElement) => unknown;
    /**
     * The element that triggers the popover. This element will be used to
     * position the popover. It can be either a Node or a function using the
     * children-as-function pattern to pass an open function for use anywhere
     * within children. The latter provides a lot of flexibility in terms of
     * what actions may trigger the `Popover` to launch the
     * [PopoverDialog](#PopoverDialog).
     */
    children: React.ReactElement<any> | ((arg1: {
        open: () => void;
    }) => React.ReactElement<any>);
    /**
     * The unique identifier to give to the anchor.
     */
    id?: string;
    /**
     * Called when the anchor is clicked
     */
    onClick: () => void;
};
/**
 * The element that triggers the popover dialog. This is also used as reference
 * to position the dialog itself.
 */
export default class PopoverAnchor extends React.Component<Props> {
    private anchorRef;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private updateAnchorRef;
    render(): React.ReactNode;
}
export {};
