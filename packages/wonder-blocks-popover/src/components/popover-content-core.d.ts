import * as React from "react";
import type { AriaProps, StyleType } from "@osati-ai/wonder-blocks-core";
type Props = AriaProps & {
    /**
     * The content to render inside the popover.
     */
    children: React.ReactNode;
    /**
     * Close button color
     */
    closeButtonLight?: boolean;
    /**
     * Close button label for use in screen readers
     */
    closeButtonLabel?: string;
    /**
     * When true, the close button is shown; otherwise, the close button is not shown.
     */
    closeButtonVisible?: boolean;
    /**
     * Custom styles applied to the content container
     */
    style?: StyleType;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
};
type DefaultProps = {
    closeButtonLight: Props["closeButtonLight"];
    closeButtonVisible: Props["closeButtonVisible"];
};
/**
 * This is the base popover container. It’s used internally by all the variants.
 * Also, it can be used to create flexible popovers.
 *
 * ### Usage
 *
 * ```jsx
 * import {PopoverContentCore} from "@osati-ai/wonder-blocks-popover";
 *
 * <PopoverContentCore>
 *  <>
 *      Some custom layout
 *  </>
 * </PopoverContentCore>
 * ```
 */
export default class PopoverContentCore extends React.Component<Props> {
    static defaultProps: DefaultProps;
    render(): React.ReactNode;
}
export {};
