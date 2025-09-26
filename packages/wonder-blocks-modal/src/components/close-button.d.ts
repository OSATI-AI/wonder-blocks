import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
type Props = {
    /** Optional click handler */
    onClick?: () => unknown;
    /** Optional custom styles. */
    style?: StyleType;
    /**
     * Test ID used for e2e testing.
     *
     * In this case, this component is internal, so `testId` is composed with
     * the `testId` passed down from the Dialog variant + a suffix to scope it
     * to this component.
     *
     * @example
     * For testId="some-random-id"
     * The result will be: `some-random-id-modal-panel`
     */
    testId?: string;
};
export default class CloseButton extends React.Component<Props> {
    render(): React.ReactNode;
}
export {};
