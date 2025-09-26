import * as React from "react";
import type { FixtureFn } from "./types";
/**
 * Describe a group of fixtures for a given component.
 *
 * Only one `fixtures` call should be used per fixture file as it returns
 * the exports for that file.
 *
 * @param {React.ComponentType<any>} Component The component we want to create
 * stories for.
 * @returns {FixtureFn<TProps>} A function to create a CSF compatible story.
 *
 * @deprecated Use CSFv3 style stories instead. This API was for migration
 * from our old fixtures framework and will be removed in a future release.
 */
export declare const fixtures: <TComponent extends React.ComponentType<any>, TProps extends JSX.LibraryManagedAttributes<TComponent, React.ComponentProps<TComponent>>>(Component: TComponent) => FixtureFn<TProps>;
