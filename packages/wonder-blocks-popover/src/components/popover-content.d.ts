import * as React from "react";
import type { AriaProps, StyleType } from "@osati-ai/wonder-blocks-core";
import type { PopoverContextType } from "./popover-context";
type CommonProps = AriaProps & {
    /**
     * The content to render inside the popover.
     */
    content: string;
    /**
     * The popover title
     */
    title: string;
    /**
     * User-defined actions.
     *
     * It can be either a Node or a function using the children-as-function
     * pattern to pass a close function for use anywhere within the actions.
     * This provides a lot of flexibility in terms of what actions may trigger
     * the Popover to close the popover dialog.
     */
    actions?: React.ReactNode | ((arg1: {
        close: () => unknown;
    }) => React.ReactElement);
    /**
     * Close button label for use in screen readers
     */
    closeButtonLabel?: string;
    /**
     * When true, the close button is shown; otherwise, the close button is not shown.
     */
    closeButtonVisible?: boolean;
    /**
     * Custom styles to be injected to the popover content container
     */
    style?: StyleType;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * Unique ID for the popover. This is used as a prefix to the IDs of the
     * popover's elements.
     * @ignore
     */
    uniqueId?: string;
};
type Props = CommonProps & {
    /**
     * Decorate the popover with an illustrated icon. It cannot be used at the
     * same time with image.
     */
    icon?: string | React.ReactElement<React.ComponentProps<"img">> | React.ReactElement<React.ComponentProps<"svg">>;
    /**
     * Alt text for the icon. This prop is only used if the `icon` prop
     * is passed a url (instead of a svg or img element).
     */
    iconAlt?: string;
    /**
     * Decorate the popover with a full-bleed illustration. It cannot be used at
     * the same time with icon.
     */
    image?: React.ReactElement<React.ComponentProps<"img">> | React.ReactElement<React.ComponentProps<"svg">>;
};
type DefaultProps = {
    closeButtonVisible: Props["closeButtonVisible"];
};
/**
 * This is the container that is consumed by all the predefined variations. Its
 * main responsibility is populate the contents depending on the variation used.
 *
 * ### Usage
 *
 * ```jsx
 * import {PopoverContent} from "@osati-ai/wonder-blocks-popover";
 *
 * <PopoverContent
 *  closeButtonVisible
 *  content="Some content for the popover"
 *  title="Popover with text only"
 * />
 * ```
 */
export default class PopoverContent extends React.Component<Props> {
    static defaultProps: DefaultProps;
    componentDidMount(): void;
    /**
     * Runtime validation in case we try to use an invalid shape
     */
    validateProps({ placement }: PopoverContextType): void;
    maybeRenderImage: (context: PopoverContextType) => React.ReactElement;
    maybeRenderIcon: () => React.ReactElement;
    maybeRenderActions: (close: () => unknown) => React.ReactElement;
    render(): React.ReactNode;
}
export {};
