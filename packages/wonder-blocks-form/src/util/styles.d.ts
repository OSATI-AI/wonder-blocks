type InteractionState = {
    background?: string;
    border?: string;
};
type ComponentState = {
    rest: InteractionState;
    hover: InteractionState;
    press: InteractionState;
};
type ComponentStates = {
    default: ComponentState;
    disabled: ComponentState;
    error: ComponentState;
};
export interface StyleMap {
    [key: string]: {
        unchecked: ComponentStates;
        checked: ComponentStates;
    };
}
export declare const baseStyles: {
    choice: {
        sizing: {
            size: string;
        };
        checked: {
            border: string;
        };
        disabled: {
            border: string;
            background: string;
        };
        error: {
            border: string;
            background: string;
        };
        unchecked: {
            rest: {
                border: string;
                background: string;
            };
            hover: {
                border: string;
                background: string;
            };
            press: {
                border: string;
                background: string;
            };
        };
    };
    radio: {
        border: {
            radius: {
                default: string;
            };
            width: {
                default: string;
            };
        };
    };
    checkbox: {
        border: {
            radius: {
                default: string;
            };
            width: {
                default: string;
            };
        };
        sizing: {
            checkSize: string;
        };
        disabledChecked: {
            border: string;
            background: string;
        };
    };
    icon: {
        default: {
            foreground: string;
        };
        disabled: {
            foreground: string;
        };
    };
};
export declare const colorStates: StyleMap;
export {};
