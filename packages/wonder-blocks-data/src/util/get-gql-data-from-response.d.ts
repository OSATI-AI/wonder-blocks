/**
 * Validate a GQL operation response and extract the data.
 */
export declare const getGqlDataFromResponse: <TData>(response: Response) => Promise<TData>;
