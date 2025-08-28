import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    size,
} from "@floating-ui/react";

import {maybeGetPortalMountedModalHostElement} from "@khanacademy/wonder-blocks-modal";

import type {StyleType} from "@khanacademy/wonder-blocks-core";
import {DROPDOWN_ITEM_HEIGHT} from "../util/constants";

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
    onPopperElement?: (
        popperElement?: HTMLElement | null | undefined,
    ) => unknown;
    /**
     * Styles that will be applied to the children.
     */
    style?: StyleType;
};

/**
 * A wrapper for floating UI that renders the children inside a portal.
 */
const DropdownPopper = function ({
    children,
    alignment = "left",
    onPopperElement,
    referenceElement,
}: Props): React.ReactElement {
    const {refs, floatingStyles, placement, middlewareData} = useFloating({
        placement: alignment === "left" ? "bottom-start" : "bottom-end",
        elements: {
            reference: referenceElement,
        },
        strategy: 'fixed',
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(0),
            flip({
                altAxis: true,
                // Allows to overlap the popper in case there's no more vertical
                // room in the viewport.
                boundary: 'viewport' as const,
                // Also needed to make sure the Popper will be displayed correctly
                // in different contexts (e.g inside a Modal)
                crossAxis: false,
            }),
            shift(),
            // Replace maxHeightModifier with size middleware
            size({
                apply({availableHeight, elements}) {
                    const padding = DROPDOWN_ITEM_HEIGHT;
                    const maxHeight = availableHeight - padding;
                    
                    if (elements.floating) {
                        Object.assign(elements.floating.style, {
                            maxHeight: `${maxHeight}px`,
                            // Also propagate the maxHeight to its children via CSS variables.
                            // This is useful for adding scrollbars to the dropdown list.
                            '--popper-max-height': `${maxHeight}px`,
                        });
                    }
                },
            }),
        ],
    });
    
    React.useEffect(() => {
        if (refs.floating.current && onPopperElement) {
            onPopperElement(refs.floating.current);
        }
    }, [refs.floating.current, onPopperElement]);
    
    // If we are in a modal, we find where we should be portalling the menu by
    // using the helper function from the modal package on the opener element.
    // If we are not in a modal, we use body as the location to portal to.
    const modalHost =
        maybeGetPortalMountedModalHostElement(referenceElement) ||
        document.querySelector("body");

    if (!modalHost) {
        // @ts-expect-error [FEI-5019] - TS2322 - Type 'null' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
        return null;
    }

    const isReferenceHidden = middlewareData.hide?.referenceHidden ?? false;

    return ReactDOM.createPortal(
        <div
            ref={refs.setFloating}
            style={floatingStyles}
            data-testid="dropdown-popper"
            data-placement={placement}
        >
            {children(isReferenceHidden)}
        </div>,
        modalHost,
    );
};

export default DropdownPopper;