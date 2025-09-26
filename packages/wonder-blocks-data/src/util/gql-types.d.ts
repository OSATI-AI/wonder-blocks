/**
 * Operation types.
 */
export type GqlOperationType = "mutation" | "query";
/**
 * A GraphQL operation.
 */
export type GqlOperation<TData, // TVariables is not used to define a field on this type, but it is used
TVariables extends object = Empty> = {
    type: GqlOperationType;
    id: string;
    [key: string]: unknown;
};
export type GqlContext = {
    [key: string]: string;
};
/**
 * Functions that make fetches of GQL operations.
 */
export type GqlFetchFn<TData, TVariables extends Record<any, any>, TContext extends GqlContext> = (operation: GqlOperation<TData, TVariables>, variables: TVariables | null | undefined, context: TContext) => Promise<Response>;
/**
 * The configuration stored in the GqlRouterContext context.
 */
export type GqlRouterConfiguration<TContext extends GqlContext> = {
    fetch: GqlFetchFn<any, any, any>;
    defaultContext: TContext;
};
/**
 * Options for configuring a GQL fetch.
 */
export type GqlFetchOptions<TVariables extends Record<any, any>, TContext extends GqlContext> = {
    variables?: TVariables;
    context?: Partial<TContext>;
};
