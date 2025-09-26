import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
type Props = {
    /**
     * The children that will be wrapped by floating UI.
     */
    children: (isReferenceHidden: boolean) => React.ReactNode;
    /**
     * The reference element used to position the popper.
     */
    referenceElement?: HTMLElement;
    /**
     * Whether this menu should be left-aligned or right-aligned with the
     * reference component. Defaults to left-aligned.
     */
    alignment?: "left" | "right";
    /**
     * The popper's reference.
     * Callback to get the floating element reference.
     */
    onPopperElement?: (popperElement?: HTMLElement | null | undefined) => unknown;
    /**
     * Styles that will be applied to the children.
     */
    style?: StyleType;
};
/**
 * A wrapper for floating UI that renders the children inside a portal.
 */
declare const DropdownPopper: ({ children, alignment, onPopperElement, referenceElement, }: Props) => React.ReactElement;
export default DropdownPopper;
