import type { GqlRouterConfiguration, GqlContext } from "../util/gql-types";
/**
 * Construct a GqlRouterContext from the current one and partial context.
 */
export declare const useGqlRouterContext: <TContext extends GqlContext>(contextOverrides?: Partial<TContext>) => GqlRouterConfiguration<TContext>;
