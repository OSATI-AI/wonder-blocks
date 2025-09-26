import * as React from "react";
import { InterceptRequests } from "@osati-ai/wonder-blocks-data";
import type { TestHarnessAdapter } from "@osati-ai/wonder-blocks-testing-core";
type Interceptor = JSX.LibraryManagedAttributes<typeof InterceptRequests, React.ComponentProps<typeof InterceptRequests>>["interceptor"];
type Config = Interceptor | Array<Interceptor>;
/**
 * Default configuration for the Wonder Blocks Data adapter.
 */
export declare const defaultConfig: Array<Interceptor>;
/**
 * Test harness adapter to mock Wonder Blocks Data usage.
 *
 * NOTE: Consumers are responsible for properly defining their intercepts.
 * This component does not validate the configuration to ensure interceptors
 * are not overriding one another.
 */
export declare const adapter: TestHarnessAdapter<Config>;
export {};
