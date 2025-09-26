import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
import type { CellProps } from "../../util/types";
/**
 * CellCore is the base cell wrapper. It's used as the skeleton/layout that is
 * used by CompactCell and DetailCell (and any other variants).
 *
 * Both variants share how they render their accessories, and the main
 * responsibility of this component is to render the contents that are passed in
 * (using the `children` prop).
 */
declare const CellCore: React.ForwardRefExoticComponent<Partial<Omit<CellProps, "title">> & {
    /**
     * The content of the cell.
     */
    children: React.ReactNode;
    /**
     * The optional styles applied to the inner wrapper.
     *
     * Note: This is not intended to be used externally, only used directly
     * within the package scope.
     */
    innerStyle?: StyleType;
} & React.RefAttributes<HTMLDivElement>>;
export default CellCore;
