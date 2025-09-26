/**
 * NOTE: These tokens are going to be deprecated in favor of the new `sizing`
 * tokens.
 */
export declare const spacing: {
    readonly xxxxSmall_2: 2;
    readonly xxxSmall_4: 4;
    readonly xxSmall_6: 6;
    readonly xSmall_8: 8;
    readonly small_12: 12;
    readonly medium_16: 16;
    readonly large_24: 24;
    readonly xLarge_32: 32;
    readonly xxLarge_48: 48;
    readonly xxxLarge_64: 64;
};
export type VALID_PRIMARY_SPACING = 4 | 8 | 16 | 32 | 64;
export type VALID_SECONDARY_SPACING = 6 | 12 | 24 | 48;
export type VALID_SPACING = VALID_PRIMARY_SPACING | VALID_SECONDARY_SPACING;
