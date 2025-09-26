export declare const semanticColor: {
    /**
     * Our core colors are used for the most common elements in our UI. They
     * are the most important colors in our system and should be used
     * consistently across all components.
     */
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
        /**
         * Used for text and icons.
         */
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
    /**
     * Learning tokens are used for elements that are related to learning
     * experiences, such as practice and mastery, among others.
     */
    learning: {
        /**
         * These colors are used for MathJax elements, which are used to
         * render mathematical expressions in Khan Academy.
         *
         * NOTE: These colors are extracted from the Khan/mathjax-renderer repo.
         * @see https://github.com/Khan/mathjax-renderer/blob/main/src/ts/tex-input-config.ts#L26-L35
         */
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
    /**
     * For buttons, links, and controls to communicate the presence and meaning
     * of interaction.
     */
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
    /**
     * For activity and conversation buttons.
     */
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
    /**
     * For inputs, form elements, and other elements that require user input.
     */
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
    /**
     * For labels, icons, filters, alerts, and other elements where color can
     * add meaning to the state of the system or an item in the system.
     */
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
    /**
     * For background colors. Overlays act as supplementary surfaces that mask
     * areas of the UI.
     */
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
    /**
     * Colors to be used exclusively for Khanmigo or to communicate a
     * relationship to it.
     */
    khanmigo: {
        primary: string;
        secondary: string;
    };
    /**
     * Standalone colors used only for communicating mastery.
     */
    mastery: {
        primary: string;
    };
    /**
     * Colors related to feedback.
     */
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
