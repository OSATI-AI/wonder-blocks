import * as React from "react";
import type { AriaProps, StyleType } from "@osati-ai/wonder-blocks-core";
type Props = AriaProps & {
    /**
     * Custom styles applied to the IconButton
     */
    style?: StyleType;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
};
type DefaultProps = {
    ["aria-label"]: Props["aria-label"];
};
/**
 * This is the visual component rendering the close button that is rendered
 * inside the PopoverContentCore. It’s rendered if closeButtonVisible is set
 * true.
 */
export default class CloseButton extends React.Component<Props> {
    static defaultProps: DefaultProps;
    render(): React.ReactNode;
}
export {};
