import * as React from "react";
import {StyleSheet} from "aphrodite";

import {View} from "@osati-ai/wonder-blocks-core";
import type {StyleType} from "@osati-ai/wonder-blocks-core";

type Props = {
    style?: StyleType;
};

/**
 * Expands to fill space between sibling components.
 *
 * Assumes parent is a View.
 */
export default class Spring extends React.Component<Props> {
    render(): React.ReactNode {
        const {style} = this.props;
        return <View aria-hidden="true" style={[styles.grow, style]} />;
    }
}

const styles = StyleSheet.create({
    grow: {
        flexGrow: 1,
    },
});
