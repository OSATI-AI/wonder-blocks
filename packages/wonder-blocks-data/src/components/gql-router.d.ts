import * as React from "react";
import type { GqlContext, GqlFetchFn } from "../util/gql-types";
type Props<TContext extends GqlContext> = {
    /**
     * The default context to be used by operations when no context is provided.
     */
    defaultContext: TContext;
    /**
     * The function to use when fetching requests.
     */
    fetch: GqlFetchFn<any, any, TContext>;
    /**
     * The children to be rendered inside the router.
     */
    children: React.ReactNode;
};
/**
 * Configure GraphQL routing for GraphQL hooks and components.
 *
 * These can be nested. Components and hooks relying on the GraphQL routing
 * will use the configuration from their closest ancestral GqlRouter.
 */
export declare const GqlRouter: <TContext extends GqlContext>({ defaultContext: thisDefaultContext, fetch: thisFetch, children, }: Props<TContext>) => React.ReactElement;
export {};
