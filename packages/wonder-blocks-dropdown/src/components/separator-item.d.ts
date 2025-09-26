import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
/**
 * A separator used in a dropdown menu.
 */
export default class SeparatorItem extends React.Component<{
    /**
     * In case we use react-window, this needs to be added in order to inject
     * styles to calculate the position
     * @ignore
     */
    style?: StyleType;
}> {
    static isClassOf(instance: React.ReactElement<any>): boolean;
    static __IS_SEPARATOR_ITEM__: boolean;
    render(): React.ReactNode;
}
