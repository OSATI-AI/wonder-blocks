import type { CSSProperties } from "aphrodite";
import type { TestHarnessAdapter } from "../types";
type Config = string | Array<string> | CSSProperties | {
    classes: Array<string>;
    style: CSSProperties;
};
export declare const defaultConfig: Config | null | undefined;
/**
 * Test harness adapter for adding CSS to the harnessed component wrapper.
 */
export declare const adapter: TestHarnessAdapter<Config>;
export {};
