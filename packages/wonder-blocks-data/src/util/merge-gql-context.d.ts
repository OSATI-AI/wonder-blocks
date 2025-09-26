import type { GqlContext } from "./gql-types";
/**
 * Construct a complete GqlContext from current defaults and a partial context.
 *
 * Values in the partial context that are `undefined` will be ignored.
 * Values in the partial context that are `null` will be deleted.
 */
export declare const mergeGqlContext: <TContext extends GqlContext>(defaultContext: TContext, overrides: Partial<TContext>) => TContext;
