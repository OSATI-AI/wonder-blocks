import type { CSSProperties } from "aphrodite";
import type { StyleType } from "./types";
type StyledExport = {
    style: CSSProperties;
    className: string;
};
export declare function processStyleList(style?: StyleType): StyledExport;
export {};
