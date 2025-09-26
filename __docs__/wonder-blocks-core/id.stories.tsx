import * as React from "react";

import {Meta} from "@storybook/react";
import {View, Id} from "@osati-ai/wonder-blocks-core";
import {Body, BodyMonospace} from "@osati-ai/wonder-blocks-typography";
import {Strut} from "@osati-ai/wonder-blocks-layout";
import {spacing} from "@osati-ai/wonder-blocks-tokens";

export default {
    title: "Packages / Core / Id",

    parameters: {
        chromatic: {
            // We don't need a snapshot for this.
            disableSnapshot: true,
        },
    },
} as Meta;

export const GeneratedIdExample = () => (
    <View>
        <Id>
            {(id) => (
                <View style={{flexDirection: "row"}}>
                    <Body>Generated identifier: </Body>
                    <Strut size={spacing.xSmall_8} />
                    <BodyMonospace>{id}</BodyMonospace>
                </View>
            )}
        </Id>
    </View>
);

export const PassedThroughIdExample = () => (
    <View>
        <Id id="my-identifier">
            {(id) => (
                <View style={{flexDirection: "row"}}>
                    <Body>Passed through identifier: </Body>
                    <Strut size={spacing.xSmall_8} />
                    <BodyMonospace>{id}</BodyMonospace>
                </View>
            )}
        </Id>
    </View>
);
