declare const theme: {
    root: {
        border: {
            width: {
                primary: {
                    default: string;
                    hover: string;
                    press: string;
                };
                secondary: {
                    default: string;
                    hover: string;
                    press: string;
                };
                tertiary: {
                    default: string;
                    hover: string;
                    press: string;
                };
            };
            offset: {
                primary: string;
                secondary: number;
                tertiary: number;
            };
            radius: {
                default: string;
                hover: string;
                press: string;
            };
        };
        sizing: {
            height: {
                small: string;
                medium: string;
                large: string;
            };
            underline: {
                hover: string;
                press: string;
            };
        };
        layout: {
            padding: {
                inline: {
                    primary: {
                        small: string;
                        medium: string;
                        large: string;
                    };
                    secondary: {
                        small: string;
                        medium: string;
                        large: string;
                    };
                    tertiary: {
                        small: string;
                        medium: string;
                        large: string;
                    };
                };
            };
        };
        font: {
            size: {
                large: string;
            };
            lineHeight: {
                small: string;
                default: string;
                large: string;
            };
            weight: {
                default: number;
            };
            decoration: {
                hover: string;
                press: string;
            };
            offset: {
                default: string;
            };
        };
    };
    icon: {
        margin: {
            inline: {
                inner: string;
                outer: string;
            };
        };
        padding: string;
        sizing: {
            small: string;
            medium: string;
            large: string;
        };
    };
};
export default theme;
