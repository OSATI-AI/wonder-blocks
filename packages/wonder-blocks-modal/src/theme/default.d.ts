declare const theme: {
    /**
     * Shared tokens
     */
    root: {
        border: {
            radius: string;
        };
    };
    /**
     * Building blocks
     */
    dialog: {
        layout: {
            padding: string;
        };
        shadow: {
            default: string;
        };
    };
    header: {
        layout: {
            padding: {
                block: string;
                inline: {
                    default: string;
                    small: string;
                };
            };
            gap: {
                default: string;
                title: {
                    default: string;
                    small: string;
                };
            };
        };
    };
    panel: {
        layout: {
            gap: {
                default: string;
                small: string;
            };
        };
    };
    footer: {
        layout: {
            padding: {
                inline: string;
                block: string;
            };
        };
    };
    closeButton: {
        layout: {
            gapRight: string;
            gapTop: string;
        };
    };
};
export default theme;
