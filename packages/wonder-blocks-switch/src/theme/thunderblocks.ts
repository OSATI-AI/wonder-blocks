import {mergeTheme} from "@osati-ai/wonder-blocks-theming";
import {border, sizing} from "@osati-ai/wonder-blocks-tokens";
import defaultTheme from "./default";

export default mergeTheme(defaultTheme, {
    root: {
        border: {
            radius: {
                default: border.radius.radius_240,
            },
        },
        sizing: {
            width: sizing.size_440,
        },
    },
    slider: {
        transform: {
            default: `translateX(${sizing.size_200})`,
        },
    },
    icon: {
        transform: {
            default: `translateX(${sizing.size_200})`,
        },
    },
});
