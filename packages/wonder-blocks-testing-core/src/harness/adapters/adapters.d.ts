import type { TestHarnessConfigs } from "../types";
/**
 * NOTE: We do not type `DefaultAdapters` with `Adapters` here because we want
 * the individual config types of each adapter to remain intact rather than
 * getting changed to `any`.
 */
/**
 * The default adapters provided by Wonder Blocks.
 */
export declare const DefaultAdapters: {
    readonly boundary: import("@osati-ai/wonder-blocks-testing").TestHarnessAdapter<(error: Error | null | undefined, errorInfo: {
        componentStack: string;
    }) => React.ReactNode>;
    readonly css: import("@osati-ai/wonder-blocks-testing").TestHarnessAdapter<any>;
    readonly portal: import("@osati-ai/wonder-blocks-testing").TestHarnessAdapter<string>;
    readonly router: import("@osati-ai/wonder-blocks-testing").TestHarnessAdapter<string | Readonly<{
        initialEntries: JSX.LibraryManagedAttributes<typeof import("react-router-dom").MemoryRouter, import("react-router-dom").MemoryRouterProps>;
        initialIndex?: JSX.LibraryManagedAttributes<typeof import("react-router-dom").MemoryRouter, import("react-router-dom").MemoryRouterProps>;
        path?: string;
    } | {
        location: import("history").LocationDescriptor;
        forceStatic: true;
        disableCompatRouter?: boolean;
        path?: string;
    } | {
        location: import("history").LocationDescriptor;
        path?: string;
    }>>;
};
/**
 * The default configurations to use with the `DefaultAdapters`.
 */
export declare const DefaultConfigs: TestHarnessConfigs<typeof DefaultAdapters>;
