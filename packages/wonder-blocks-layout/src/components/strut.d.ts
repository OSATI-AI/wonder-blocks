import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
type Props = {
    size: number;
    style?: StyleType;
};
/**
 * A component for inserting fixed space between components.
 *
 * Assumes parent is a View.
 */
export default class Strut extends React.Component<Props> {
    render(): React.ReactNode;
}
export {};
