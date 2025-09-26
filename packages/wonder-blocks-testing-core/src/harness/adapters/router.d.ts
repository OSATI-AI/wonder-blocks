import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import type { LocationDescriptor } from "history";
import type { TestHarnessAdapter } from "../types";
type MemoryRouterProps = JSX.LibraryManagedAttributes<typeof MemoryRouter, React.ComponentProps<typeof MemoryRouter>>;
/**
 * Configuration for the withLocation test harness adapter.
 */
type Config = Readonly<{
    /**
     * See MemoryRouter prop for initialEntries.
     */
    initialEntries: MemoryRouterProps["initialEntries"];
    /**
     * See MemoryRouter prop for initialIndex.
     */
    initialIndex?: MemoryRouterProps["initialIndex"];
    /**
     * A path match to use.
     *
     * When this is specified, the harnessed component will be
     * rendered inside a `Route` handler with this path.
     *
     * If the path matches the location, then the route will
     * render the component.
     *
     * If the path does not match the location, then the route
     * will not render the component.
     */
    path?: string;
} | {
    /**
     * The location to use.
     */
    location: LocationDescriptor;
    /**
     * Force the use of a StaticRouter, instead of MemoryRouter.
     */
    forceStatic: true;
    /**
     * If true, then we will not use a CompatRouter.
     *
     * NOTE(john): There are cases where we don't want a CompatRouter
     * here as it uses useLayoutEffect, which causes issues in our
     * test environment. Namely, that it generates a warning about
     * the use of useLayoutEffect, which causes an error.
     */
    disableCompatRouter?: boolean;
    /**
     * A path match to use.
     *
     * When this is specified, the harnessed component will be
     * rendered inside a `Route` handler with this path.
     *
     * If the path matches the location, then the route will
     * render the component.
     *
     * If the path does not match the location, then the route
     * will not render the component.
     */
    path?: string;
} | {
    /**
     * The initial location to use.
     */
    location: LocationDescriptor;
    /**
     * A path match to use.
     *
     * When this is specified, the harnessed component will be
     * rendered inside a `Route` handler with this path.
     *
     * If the path matches the location, then the route will
     * render the component.
     *
     * If the path does not match the location, then the route
     * will not render the component.
     */
    path?: string;
}> | string;
/**
 * The default configuration for this adapter.
 */
export declare const defaultConfig: {
    readonly location: "/";
};
/**
 * Adapter that sets up a router and AppShell location-specific contexts.
 *
 * This allows you to ensure that components are being tested in the
 * AppShell world.
 *
 * NOTE(somewhatabstract): The AppShell component itself already does
 * the work of setting up routing and the AppShellContext and so using this
 * adapter with the App component will have zero-effect since AppShell will
 * override it.
 */
export declare const adapter: TestHarnessAdapter<Config>;
export {};
