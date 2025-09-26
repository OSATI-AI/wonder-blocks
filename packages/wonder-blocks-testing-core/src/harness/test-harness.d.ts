/**
 * Wrap a component with a test harness using Wonder Blocks default adapters.
 *
 * This is primarily useful for tests within Wonder Blocks.
 *
 * If you want to expand the range of adapters or change the default
 * configurations, use `makeTestHarness` to create a new `testHarness`
 * function.
 */
export declare const testHarness: <TProps extends object>(Component: import("react").ComponentType<TProps>, configs?: Partial<import("@osati-ai/wonder-blocks-testing").TestHarnessConfigs<{
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
}>> | undefined) => import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<TProps> & import("react").RefAttributes<unknown>>;
