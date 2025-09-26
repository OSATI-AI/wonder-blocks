import { SettleSignal } from "./settle-signal";
import type { GraphQLJson } from "./types";
/**
 * This symbol is used so we can create an opaque type, using a custom field
 * that cannot be directly referenced since folks won't have access to the
 * symbol.
 *
 * See https://stackoverflow.com/a/56749647/23234
 */
declare const opaque: unique symbol;
/**
 * Describes a mock response to a fetch request.
 */
export type MockResponse<TData> = {
    /**
     * This is used to enforce the use of the TData type parameter. We won't
     * actually attach anything to this field. Doing this makes sure that
     * TData is relevant to the response. Without it, it will get ignored
     * and a value of type MockResponse<string> will be considered the same
     * type as a value of type MockResponse<number> (or any other type
     * constraint).
     */
    [opaque]: TData;
    /**
     * Create a promise from the mocked response.
     *
     * If a signal was provided when the mock response was created, the promise
     * will only settle to resolution or rejection if the signal is raised.
     */
    readonly toPromise: () => Promise<Response>;
};
/**
 * Helpers to define mock responses for mocked requests.
 */
export declare const RespondWith: Readonly<{
    /**
     * Response with text body and status code.
     * Status code defaults to 200.
     */
    text: <TData = string>(text: string, statusCode?: number, signal?: SettleSignal | null) => MockResponse<TData>;
    /**
     * Response with JSON body and status code 200.
     */
    json: <TJson extends Record<any, any>>(json: TJson, signal?: SettleSignal | null) => MockResponse<TJson>;
    /**
     * Response with GraphQL data JSON body and status code 200.
     */
    graphQLData: <TData extends Record<any, any>>(data: TData, signal?: SettleSignal | null) => MockResponse<GraphQLJson<TData>>;
    /**
     * Response with body that will not parse as JSON and status code 200.
     */
    unparseableBody: (signal?: SettleSignal | null) => MockResponse<any>;
    /**
     * Rejects with an AbortError to simulate an aborted request.
     */
    abortedRequest: (signal?: SettleSignal | null) => MockResponse<any>;
    /**
     * Rejects with the given error.
     */
    reject: (error: Error, signal?: SettleSignal | null) => MockResponse<any>;
    /**
     * A non-200 status code with empty text body.
     * Equivalent to calling `ResponseWith.text("", statusCode)`.
     */
    errorStatusCode: (statusCode: number, signal?: SettleSignal | null) => MockResponse<any>;
    /**
     * Response body that is valid JSON but not a valid GraphQL response.
     */
    nonGraphQLBody: (signal?: SettleSignal | null) => MockResponse<any>;
    /**
     * Response that is a GraphQL errors response with status code 200.
     */
    graphQLErrors: (errorMessages: ReadonlyArray<string>, signal?: SettleSignal | null) => MockResponse<GraphQLJson<any>>;
}>;
export {};
