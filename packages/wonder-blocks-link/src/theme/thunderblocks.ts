import {mergeTheme} from "@osati-ai/wonder-blocks-theming";

import {font} from "@osati-ai/wonder-blocks-tokens";
import defaultTheme from "./default";

export default mergeTheme(defaultTheme, {
    root: {
        font: {
            family: font.family.sans,
            weight: font.weight.bold,
        },
    },
});
