import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
type Props = {
    style?: StyleType;
};
/**
 * Expands to fill space between sibling components.
 *
 * Assumes parent is a View.
 */
export default class Spring extends React.Component<Props> {
    render(): React.ReactNode;
}
export {};
