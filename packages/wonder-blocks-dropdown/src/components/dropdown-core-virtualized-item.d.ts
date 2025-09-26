import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
import type { DropdownItem } from "../util/types";
type Props = {
    /**
     * The complete list of items that will be virtualized.
     */
    data: Array<DropdownItem>;
    /**
     * The current item index.
     */
    index: number;
    /**
     * Whether the item is scrolling or not.
     */
    isScrolling?: boolean;
    /**
     * Custom styles passed from react-window
     */
    style: StyleType;
};
/**
 * A virtualized list item - It's created by decorating the DropdownItem
 * (ActionItem, OptionItem, SeparatorItem) with custom styles to let
 * react-window make its own calculations.
 */
declare class DropdownVirtualizedItem extends React.Component<Props> {
    render(): React.ReactNode;
}
export default DropdownVirtualizedItem;
