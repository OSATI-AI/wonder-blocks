import * as React from "react";
import type { TestHarnessConfigs, TestHarnessAdapters } from "./types";
type Props<TAdapters extends TestHarnessAdapters> = {
    children: React.ReactNode;
    adapters: TAdapters;
    configs: TestHarnessConfigs<TAdapters>;
};
/**
 * Render a set of adapters around the given children.
 *
 * Adapters are rendered with the last adapter being the outermost and the first
 * adapter being the innermost, with children being the innermost of all. This
 * ensures that we are backwards compatible with previous releases of the
 * test harness.
 */
export declare const Adapt: <TAdapters extends TestHarnessAdapters>({ children, adapters, configs, }: Props<TAdapters>) => React.ReactElement;
export {};
