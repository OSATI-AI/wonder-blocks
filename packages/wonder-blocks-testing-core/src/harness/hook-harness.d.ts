import * as React from "react";
import { DefaultAdapters } from "./adapters/adapters";
import type { TestHarnessConfigs } from "./types";
/**
 * Create test wrapper for hook testing with Wonder Blocks default adapters.
 *
 * This is primarily useful for tests within Wonder Blocks.
 *
 * If you want to expand the range of adapters or change the default
 * configurations, use `makeHookHarness` to create a new `hookHarness`
 * function.
 */
export declare const hookHarness: (configs?: Partial<TestHarnessConfigs<typeof DefaultAdapters>>) => React.ForwardRefExoticComponent<any>;
