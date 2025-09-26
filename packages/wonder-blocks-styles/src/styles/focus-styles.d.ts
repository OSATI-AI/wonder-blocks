/**
 * A global focus style that can be applied to interactive elements.
 *
 * This style injects a combination of `outline` and `box-shadow` to indicate
 * the element is focused. This is used for accessibility purposes as it allows
 * the element to present a focus state on Windows High Contrast mode.
 */
export declare const focus: {
    ":focus-visible": {
        boxShadow: string;
        outline: string;
        outlineOffset: string;
    };
};
