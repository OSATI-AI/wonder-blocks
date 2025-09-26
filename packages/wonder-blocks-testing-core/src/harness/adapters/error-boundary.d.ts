import * as React from "react";
import { TestHarnessAdapter } from "../types";
type ErrorInfo = {
    componentStack: string;
};
type Config = (error: Error | null | undefined, errorInfo: ErrorInfo) => React.ReactNode;
/**
 * Default configuration is to not use this adapter.
 */
export declare const defaultConfig: Config | null;
/**
 * Test harness adapter to add error boundary to capture errors during render.
 */
export declare const adapter: TestHarnessAdapter<Config>;
export {};
