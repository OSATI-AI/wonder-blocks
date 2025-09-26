import type { Result, ValidCacheData } from "./types";
type RequestCache = {
    [id: string]: Promise<Result<any>>;
};
type FulfillOptions<TData extends ValidCacheData> = {
    handler: () => Promise<TData>;
    hydrate?: boolean;
};
/**
 * This fulfills a request, making sure that in-flight requests are shared.
 */
export declare class RequestFulfillment {
    static get Default(): RequestFulfillment;
    _requests: RequestCache;
    /**
     * Get a promise of a request for a given handler and options.
     *
     * This will return an inflight request if one exists, otherwise it will
     * make a new request. Inflight requests are deleted once they resolve.
     */
    fulfill: <TData extends ValidCacheData>(id: string, options: FulfillOptions<TData>) => Promise<Result<TData>>;
    /**
     * Abort an inflight request.
     *
     * NOTE: Currently, this does not perform an actual abort. It merely
     * removes the request from being tracked.
     */
    abort: (id: string) => void;
    /**
     * Abort all inflight requests.
     *
     * NOTE: Currently, this does not perform actual aborts. It merely
     * removes the requests from our tracking.
     */
    abortAll: () => void;
}
export {};
