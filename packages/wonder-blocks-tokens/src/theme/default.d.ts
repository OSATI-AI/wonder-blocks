/**
 * NOTE: All the tokens included in this `theme` file will be automatically
 * mapped to CSS vars and included in
 * @osati-ai/wonder-blocks-tokens/styles.css.
 *
 * The css vars transformation is done in the `generate-css-variables.ts`
 * script. Used by `pnpm run dev` in the `@osati-ai/wonder-blocks-tokens`
 * package.
 */
declare const _default: {
    border: {
        radius: {
            radius_0: string;
            radius_010: string;
            radius_040: string;
            radius_080: string;
            radius_120: string;
            radius_240: string;
            radius_full: string;
        };
        width: {
            none: string;
            thin: string;
            medium: string;
            thick: string;
        };
    };
    font: {
        family: {
            sans: string;
            serif: string;
            mono: string;
        };
        size: {
            xxxLarge: string;
            xxLarge: string;
            xLarge: string;
            large: string;
            medium: string;
            small: string;
            xSmall: string;
        };
        lineHeight: {
            xxxLarge: string;
            xxLarge: string;
            xLarge: string;
            large: string;
            xMedium: string;
            medium: string;
            small: string;
            xSmall: string;
        };
        weight: {
            light: number;
            regular: number;
            medium: number;
            semi: number;
            bold: number;
            black: number;
        };
        body: {
            size: {
                xsmall: string;
                small: string;
                medium: string;
            };
            lineHeight: {
                xsmall: string;
                small: string;
                medium: string;
                large: string;
            };
        };
        heading: {
            size: {
                small: string;
                medium: string;
                large: string;
                xlarge: string;
                xxlarge: string;
            };
            lineHeight: {
                small: string;
                medium: string;
                large: string;
                xlarge: string;
                xxlarge: string;
            };
        };
        textDecoration: {
            underlineOffset: string;
            thickness: string;
        };
    };
    semanticColor: {
        core: {
            transparent: string;
            border: {
                instructive: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                neutral: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                critical: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                success: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                warning: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                disabled: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                inverse: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                knockout: {
                    default: string;
                };
            };
            background: {
                base: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                instructive: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                neutral: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                critical: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                success: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                warning: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                disabled: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                overlay: {
                    default: string;
                };
            };
            foreground: {
                instructive: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                neutral: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                critical: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                success: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                warning: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                disabled: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                inverse: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                knockout: {
                    default: string;
                };
            };
            shadow: {
                transparent: string;
                chonky: {
                    progressive: {
                        subtle: string;
                        default: string;
                    };
                    neutral: {
                        subtle: string;
                        default: string;
                        strong: string;
                    };
                };
            };
        };
        learning: {
            math: {
                foreground: {
                    blue: string;
                    gold: string;
                    green: string;
                    gray: string;
                    grayH: string;
                    grayI: string;
                    purple: string;
                    purpleD: string;
                    pink: string;
                    red: string;
                };
            };
            background: {
                gems: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                due: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                streaks: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                progress: {
                    notStarted: {
                        default: string;
                    };
                    attempted: {
                        default: string;
                    };
                    complete: {
                        default: string;
                    };
                };
            };
            border: {
                gems: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                streaks: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                due: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
            };
            foreground: {
                gems: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                streaks: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                due: {
                    subtle: string;
                    default: string;
                    strong: string;
                };
                progress: {
                    notStarted: {
                        subtle: string;
                        strong: string;
                    };
                    attempted: {
                        subtle: string;
                        strong: string;
                    };
                    complete: {
                        strong: string;
                    };
                };
            };
            shadow: {
                progress: {
                    notStarted: {
                        default: string;
                    };
                    attempted: {
                        default: string;
                    };
                    complete: {
                        default: string;
                    };
                };
            };
        };
        action: {
            primary: {
                progressive: {
                    default: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    hover: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    press: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                };
                destructive: {
                    default: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    hover: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    press: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                };
                neutral: {
                    default: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    hover: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    press: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                };
                disabled: {
                    border: string;
                    background: string;
                    foreground: string;
                };
            };
            secondary: {
                progressive: {
                    default: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    hover: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    press: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                };
                destructive: {
                    default: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    hover: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    press: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                };
                neutral: {
                    default: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    hover: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    press: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                };
                disabled: {
                    border: string;
                    background: string;
                    foreground: string;
                };
            };
            tertiary: {
                progressive: {
                    default: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    hover: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    press: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                };
                destructive: {
                    default: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    hover: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    press: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                };
                neutral: {
                    default: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    hover: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                    press: {
                        border: string;
                        background: string;
                        foreground: string;
                    };
                };
                disabled: {
                    border: string;
                    background: string;
                    foreground: string;
                };
            };
        };
        chonky: {
            progressive: {
                background: {
                    primary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    secondary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    tertiary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                };
                border: {
                    primary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    secondary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    tertiary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                };
                foreground: {
                    primary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    secondary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    tertiary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                };
                shadow: {
                    primary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    secondary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    tertiary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                };
            };
            neutral: {
                background: {
                    primary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    secondary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    tertiary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                };
                border: {
                    primary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    secondary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    tertiary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                };
                foreground: {
                    primary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    secondary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    tertiary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                };
                shadow: {
                    primary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    secondary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                    tertiary: {
                        rest: string;
                        hover: string;
                        press: string;
                        selected: string;
                    };
                };
            };
            disabled: {
                background: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                };
                border: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                };
                foreground: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                };
                shadow: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                };
            };
        };
        input: {
            default: {
                border: string;
                background: string;
                foreground: string;
                placeholder: string;
            };
            checked: {
                border: string;
                background: string;
                foreground: string;
            };
            disabled: {
                border: string;
                background: string;
                foreground: string;
                placeholder: string;
            };
            error: {
                border: string;
                background: string;
                foreground: string;
            };
            readOnly: {
                background: string;
                text: string;
                icon: string;
            };
        };
        status: {
            critical: {
                background: string;
                foreground: string;
            };
            warning: {
                background: string;
                foreground: string;
            };
            success: {
                background: string;
                foreground: string;
            };
            notice: {
                background: string;
                foreground: string;
            };
            neutral: {
                background: string;
                foreground: string;
            };
        };
        surface: {
            primary: string;
            secondary: string;
            emphasis: string;
            inverse: string;
            overlay: string;
        };
        focus: {
            outer: string;
            inner: string;
        };
        link: {
            rest: string;
            hover: string;
            press: string;
            disabled: string;
        };
        khanmigo: {
            primary: string;
            secondary: string;
        };
        mastery: {
            primary: string;
        };
        feedback: {
            info: {
                subtle: {
                    background: string;
                    border: string;
                    icon: string;
                    text: string;
                };
                strong: {
                    icon: string;
                    background: string;
                    border: string;
                    text: string;
                };
            };
            success: {
                subtle: {
                    background: string;
                    border: string;
                    icon: string;
                    text: string;
                };
                strong: {
                    icon: string;
                    background: string;
                    border: string;
                    text: string;
                };
            };
            warning: {
                subtle: {
                    background: string;
                    border: string;
                    icon: string;
                    text: string;
                };
                strong: {
                    icon: string;
                    background: string;
                    border: string;
                    text: string;
                };
            };
            critical: {
                subtle: {
                    background: string;
                    border: string;
                    icon: string;
                    text: string;
                };
                strong: {
                    icon: string;
                    background: string;
                    border: string;
                    text: string;
                };
            };
        };
    };
    sizing: {
        readonly size_0: string;
        readonly size_010: string;
        readonly size_020: string;
        readonly size_040: string;
        readonly size_060: string;
        readonly size_080: string;
        readonly size_100: string;
        readonly size_120: string;
        readonly size_140: string;
        readonly size_160: string;
        readonly size_180: string;
        readonly size_200: string;
        readonly size_220: string;
        readonly size_240: string;
        readonly size_260: string;
        readonly size_280: string;
        readonly size_320: string;
        readonly size_360: string;
        readonly size_400: string;
        readonly size_440: string;
        readonly size_480: string;
        readonly size_560: string;
        readonly size_640: string;
        readonly size_720: string;
        readonly size_800: string;
        readonly size_880: string;
        readonly size_960: string;
    };
};
export default _default;
