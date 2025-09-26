import type { TestHarnessAdapter } from "@osati-ai/wonder-blocks-testing-core";
type Config = true;
export declare const defaultConfig: Config | null;
/**
 * Test harness adapter for supporting render state-based hooks and components.
 *
 * Some components and hooks utilize the render state context to manage what
 * they render and when. In order for this to work, a `RenderStateRoot`
 * component must be present to track the current render state.
 *
 * This adapter wraps the children in a `RenderStateRoot` component to enable
 * the render state context. This adapter should be used when testing components
 * that rely on the render state.
 */
export declare const adapter: TestHarnessAdapter<Config>;
export {};
