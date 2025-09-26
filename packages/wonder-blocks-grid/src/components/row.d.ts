import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
import type { MediaQuery, MediaSize } from "@osati-ai/wonder-blocks-layout";
type Props = {
    /**
     * Which media should this cell be renderer on.  Defaults to all.
     */
    mediaQuery: MediaQuery;
    /**
     * The child components to populate inside the row. Typically this will be
     * a [Cell](#cell), but it can also include any elements
     * that could fit in a [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox).
     * Can also accept a function which receives the `mediaSize` and
     * `totalColumns` and should return some React Nodes to render.
     */
    children: React.ReactNode | ((arg1: {
        mediaSize: MediaSize;
        totalColumns: number;
    }) => React.ReactElement);
    /** The styling to apply to the row. */
    style?: StyleType;
};
type DefaultProps = {
    mediaQuery: Props["mediaQuery"];
};
/**
 * A Row holds all of the Cells that make up the contents of the grid. A row
 * also provides the margins on the sides and inserts the gutter spacing
 * in-between the cells. Typically this component will hold a [Cell](#cell),
 * but it can also include any elements that could fit in a
 * [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox).
 *
 * This component will automatically attempt to insert [Gutters](#gutter)
 * in-between all child elements. Additionally, it'll perform some basic checks
 * to ensure that no impossible layouts are accidentally generated.
 *
 * Typically this component will be used as a child of a [Grid](#grid-1),
 * but it's not a requirement, you can use it as a descendant, as well.
 *
 * By default (with no properties specified) it will display at all
 * grid sizes. If you specify the `small`, `medium`, or `large`
 * props then the component will only be shown at those grid sizes.
 */
export default class Row extends React.Component<Props> {
    static defaultProps: DefaultProps;
    render(): React.ReactElement | null;
}
export {};
