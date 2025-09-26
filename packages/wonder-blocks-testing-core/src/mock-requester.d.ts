import type { OperationMatcher, MockFn } from "./types";
/**
 * A generic mock request function for using when mocking fetch or gqlFetch.
 */
export declare const mockRequester: <TOperationType, TResponseData>(operationMatcher: OperationMatcher<any>, operationToString: (...args: Array<any>) => string) => MockFn<TOperationType, TResponseData>;
