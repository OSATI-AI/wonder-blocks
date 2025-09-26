import * as React from "react";
import { SsrCache } from "./ssr-cache";
import { RequestFulfillment } from "./request-fulfillment";
import type { ResponseCache, ValidCacheData } from "./types";
type TrackerFn = <TData extends ValidCacheData>(id: string, handler: () => Promise<TData>, hydrate: boolean) => void;
type RequestCache = {
    [id: string]: {
        hydrate: boolean;
        handler: () => Promise<any>;
    };
};
/**
 * Used to inject our tracking function into the render framework.
 *
 * INTERNAL USE ONLY
 */
declare const TrackerContext: React.Context<TrackerFn | null | undefined>;
export { TrackerContext };
/**
 * Implements request tracking and fulfillment.
 *
 * INTERNAL USE ONLY
 */
export declare class RequestTracker {
    static get Default(): RequestTracker;
    /**
     * These are the caches for tracked requests, their handlers, and responses.
     */
    _trackedRequests: RequestCache;
    _responseCache: SsrCache;
    _requestFulfillment: RequestFulfillment;
    constructor(responseCache?: SsrCache | null);
    /**
     * Track a request.
     *
     * This method caches a request and its handler for use during server-side
     * rendering to allow us to fulfill requests before producing a final render.
     */
    trackDataRequest: <TData extends ValidCacheData>(id: string, handler: () => Promise<TData>, hydrate: boolean) => void;
    /**
     * Reset our tracking info.
     */
    reset: () => void;
    /**
     * Indicates if we have requests waiting to be fulfilled.
     */
    get hasUnfulfilledRequests(): boolean;
    /**
     * Initiate fulfillment of all tracked requests.
     *
     * This loops over the requests that were tracked using TrackData, and asks
     * the respective handlers to fulfill those requests in the order they were
     * tracked.
     *
     * Calling this method marks tracked requests as fulfilled; requests are
     * removed from the list of tracked requests by calling this method.
     *
     * @returns {Promise<ResponseCache>} The promise of the data that was
     * cached as a result of fulfilling the tracked requests.
     */
    fulfillTrackedRequests: () => Promise<ResponseCache>;
}
