import type { GqlOperation, GqlContext } from "./gql-types";
/**
 * Get an identifier for a given request.
 */
export declare const getGqlRequestId: <TData, TVariables extends Record<any, any>>(operation: GqlOperation<TData, TVariables>, variables: TVariables | null | undefined, context: GqlContext) => string;
