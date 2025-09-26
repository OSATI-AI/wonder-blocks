import type { TestHarnessAdapter } from "../types";
type Config = string;
export declare const defaultConfig: Config | null | undefined;
/**
 * Test harness adapter for supporting portals.
 *
 * Some components rely on rendering with a React Portal. This adapter ensures
 * that the DOM contains a mounting point for the portal with the expected
 * identifier.
 */
export declare const adapter: TestHarnessAdapter<Config>;
export {};
