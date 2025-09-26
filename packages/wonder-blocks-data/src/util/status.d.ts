import type { Result, ValidCacheData } from "./types";
/**
 * Create Result<TData> instances with specific statuses.
 */
export declare const Status: Readonly<{
    loading: <TData extends ValidCacheData = ValidCacheData>() => Result<TData>;
    noData: <TData extends ValidCacheData = ValidCacheData>() => Result<TData>;
    aborted: <TData extends ValidCacheData = ValidCacheData>() => Result<TData>;
    success: <TData extends ValidCacheData>(data: TData) => Result<TData>;
    error: <TData extends ValidCacheData = ValidCacheData>(error: Error) => Result<TData>;
}>;
