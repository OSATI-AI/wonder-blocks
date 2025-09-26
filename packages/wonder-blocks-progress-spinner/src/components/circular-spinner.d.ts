import * as React from "react";
import type { AriaProps, StyleType } from "@osati-ai/wonder-blocks-core";
type Props = AriaProps & {
    /**
     * The size of the spinner. (large = 96px, medium = 48px, small = 24px,
     * xsmall = 16px)
     */
    size: "xsmall" | "small" | "medium" | "large";
    /** Should a light version of the spinner be shown?
     * (To be used on a dark background.)
     */
    light: boolean;
    /** Any (optional) styling to apply to the spinner container. */
    style?: StyleType;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
};
type DefaultProps = {
    light: Props["light"];
    size: Props["size"];
};
/**
 * A circular progress spinner. Used for indicating loading progress. Should
 * be used by default in most places where a loading indicator is needed.
 *
 * ### Usage
 *
 * ```js
 * import {CircularSpinner} from "@osati-ai/wonder-blocks-progress-spinner";
 *
 * <CircularSpinner />
 * ```
 */
export default class CircularSpinner extends React.Component<Props> {
    static defaultProps: DefaultProps;
    render(): React.ReactNode;
}
export {};
