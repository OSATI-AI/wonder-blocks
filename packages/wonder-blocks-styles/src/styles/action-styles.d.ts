/**
 * The inverse styles for an interactive control.
 *
 * This is used for special cases where the element is on a dark background.
 *
 * NOTE: This will be deprecated in the future.
 */
export declare const inverse: {
    ":active:not([aria-disabled=true])": {
        borderRadius: string;
        borderColor: string;
        background: string;
    };
    ":focus-visible": {
        boxShadow: string;
        outline: string;
        outlineOffset: string;
    };
    ":not([aria-disabled=true])": {
        borderColor: string;
        color: string;
    };
    ":hover:not([aria-disabled=true])": {
        color: string;
        borderColor: string;
    };
};
