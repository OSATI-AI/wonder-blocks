import * as React from "react";
import type { TestHarnessAdapter } from "./types";
type Props<TConfig = any> = {
    children: React.ReactNode;
    config: TConfig;
    adapter: TestHarnessAdapter<TConfig>;
};
/**
 * Get a component tagged with the given name for rendering an adapter.
 *
 * We can share these across invocations because only the name is used.
 * The rest is configured at render time. This way we don't recreate new
 * components on the fly and cause remounting to occur.
 */
export declare const getNamedAdapterComponent: (name: string) => React.FunctionComponent<Props<any>>;
export {};
