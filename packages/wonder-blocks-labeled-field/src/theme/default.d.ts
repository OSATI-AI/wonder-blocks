declare const theme: {
    root: {
        layout: {
            paddingBlockEnd: {
                labelWithDescription: string;
                labelWithNoDescription: string;
            };
            spacingBetweenHelperText: string;
        };
    };
    label: {
        color: {
            error: {
                foreground: string;
            };
            disabled: {
                foreground: string;
            };
        };
    };
    contextLabel: {
        color: {
            error: {
                foreground: string;
            };
        };
    };
    error: {
        color: {
            foreground: string;
        };
        font: {
            weight: number;
        };
        layout: {
            marginBlockStart: string;
        };
    };
    helperText: {
        layout: {
            gap: string;
        };
        font: {
            size: string;
            lineHeight: string;
        };
        color: {
            default: {
                foreground: string;
            };
            disabled: {
                foreground: string;
            };
        };
    };
};
export default theme;
