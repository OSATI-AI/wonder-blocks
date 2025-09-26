import * as React from "react";
import type { TestHarnessAdapters, TestHarnessConfigs } from "./types";
/**
 * Create a test harness method for use with React components.
 *
 * This returns a test harness method that applies the default configurations
 * to the given adapters, wrapping a given component.
 *
 * @param {TAdapters} adapters All the adapters to be supported by the returned
 * test harness.
 * @param {Configs<TAdapters>} defaultConfigs Default configuration values for
 * the adapters.
 * @returns A test harness.
 */
export declare const makeTestHarness: <TAdapters extends TestHarnessAdapters>(adapters: TAdapters, defaultConfigs: TestHarnessConfigs<TAdapters>) => (<TProps extends object>(Component: React.ComponentType<TProps>, configs?: Partial<TestHarnessConfigs<TAdapters>>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<TProps> & React.RefAttributes<unknown>>);
