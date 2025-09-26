import type { GqlContext, GqlOperation, GqlFetchOptions } from "../util/gql-types";
interface GqlFetchFn<TContext extends GqlContext> {
    <TData, TVariables extends Record<any, any>>(operation: GqlOperation<TData, TVariables>, options?: GqlFetchOptions<TVariables, TContext>): Promise<TData>;
}
/**
 * Hook to obtain a gqlFetch function for performing GraphQL requests.
 *
 * The fetch function will resolve null if the request was aborted, otherwise
 * it will resolve the data returned by the GraphQL server.
 *
 * Context is merged with the default context provided to the GqlRouter.
 * Values in the partial context given to the returned fetch function will
 * only be included if they have a value other than undefined.
 */
export declare const useGql: <TContext extends GqlContext>(context?: Partial<TContext>) => GqlFetchFn<TContext>;
export {};
