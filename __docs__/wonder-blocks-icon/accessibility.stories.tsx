import * as React from "react";
import {View} from "@osati-ai/wonder-blocks-core";
import {PhosphorIcon} from "@osati-ai/wonder-blocks-icon";
import {color, spacing} from "@osati-ai/wonder-blocks-tokens";
import {LabelMedium} from "@osati-ai/wonder-blocks-typography";

import {IconMappings} from "./phosphor-icon.argtypes";

export default {
    title: "Packages / Icon / Accessibility",
    component: PhosphorIcon,

    // Disables chromatic testing for these stories.
    parameters: {
        previewTabs: {
            canvas: {
                hidden: true,
            },
        },

        viewMode: "docs",

        chromatic: {
            disableSnapshot: true,
        },
    },
};

export const IconContrast = {
    render: () => (
        <View
            style={{
                flexDirection: "row",
                marginBottom: spacing.xSmall_8,
            }}
        >
            <LabelMedium>High contrast icon (GOOD):</LabelMedium>
            <PhosphorIcon
                icon={IconMappings.checkCircle}
                style={{
                    color: color.blue,
                    marginInlineStart: spacing.xSmall_8,
                }}
            />
        </View>
    ),
};

export const RightToLeftIcons = {
    render: () => (
        <View
            style={{
                flexDirection: "row",
                direction: "ltr",
            }}
        >
            <PhosphorIcon icon={IconMappings.caretRight} />
            <LabelMedium
                style={{
                    marginInlineStart: spacing.xSmall_8,
                }}
            >
                {"Left to right"}
            </LabelMedium>
        </View>
    ),
    name: "Right to left icons",
};
