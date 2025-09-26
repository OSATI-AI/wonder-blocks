import * as React from "react";
import type { MediaSize } from "@osati-ai/wonder-blocks-layout";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
type Props = {
    /** The number of columns this cell should span on a Small Grid. */
    smallCols: number;
    /** The number of columns this cell should span on a Medium Grid. */
    mediumCols: number;
    /** The number of columns this cell should span on a Large Grid. */
    largeCols: number;
    /** The number of columns this should should span by default. */
    cols: number | ((mediaSize: MediaSize) => number);
    /**
     * The child components to populate inside the cell. Can also accept a
     * function which receives the `mediaSize`, `totalColumns`, and cell
     * `width` and should return some React Nodes to render.
     */
    children: React.ReactNode | ((arg1: {
        mediaSize: MediaSize;
        totalColumns: number;
        cols: number;
    }) => React.ReactElement);
    /** The styling to apply to the cell. */
    style?: StyleType;
};
type DefaultProps = {
    smallCols: Props["smallCols"];
    mediumCols: Props["mediumCols"];
    largeCols: Props["largeCols"];
    cols: Props["cols"];
};
/**
 * A Cell is a container whose width is set based on the width of the
 * specified columns at the current grid size. You will specify the number
 * of columns that you want this component to span at each grid size.
 * This component should only be used as a child of a [Row](#row).
 *
 * This component renders a [View](#view) that
 * uses Flex Box and has a [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)
 * of the specified "width" and [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
 * of 0.
 *
 * By default (with no properties specified) it will display at all
 * grid sizes. If you specify the `smallCols`, `mediumCols`, `largeCols`, or
 * `cols` props then the component will only be shown at those grid sizes and
 * using the specified column width.
 */
export default class Cell extends React.Component<Props> {
    static isClassOf(instance: React.ReactElement<any>): boolean;
    static getCols(props: Props, mediaSize: MediaSize): number | null | undefined;
    static shouldDisplay(props: Props, mediaSize: MediaSize): boolean;
    static defaultProps: DefaultProps;
    static __IS_CELL__: boolean;
    render(): React.ReactElement | null;
}
export {};
