import * as React from "react";
import type { Checked } from "../util/types";
/**
 * The internal stateless 🔘 Radio button
 */ declare const RadioCore: React.ForwardRefExoticComponent<Readonly<import("@osati-ai/wonder-blocks-core").AriaAttributes> & Readonly<{
    role?: import("@osati-ai/wonder-blocks-core").AriaRole;
}> & {
    checked: Checked;
    disabled: boolean;
    error: boolean;
    groupName?: string;
    id?: string;
    testId?: string;
    onClick: () => void;
} & React.RefAttributes<HTMLInputElement>>;
export default RadioCore;
