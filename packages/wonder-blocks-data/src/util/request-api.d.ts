import type { ResponseCache } from "./types";
/**
 * Fetches all tracked data requests.
 *
 * This is for use with the `TrackData` component during server-side rendering.
 *
 * @throws {Error} If executed outside of server-side rendering.
 * @returns {Promise<void>} A promise that resolves when all tracked requests
 * have been fetched.
 */
export declare const fetchTrackedRequests: () => Promise<ResponseCache>;
/**
 * Indicate if there are tracked requests waiting to be fetched.
 *
 * This is used in conjunction with `TrackData`.
 *
 * @throws {Error} If executed outside of server-side rendering.
 * @returns {boolean} `true` if there are unfetched tracked requests;
 * otherwise, `false`.
 */
export declare const hasTrackedRequestsToBeFetched: () => boolean;
/**
 * Abort all in-flight requests.
 *
 * This aborts all requests currently inflight via our default request
 * fulfillment.
 */
export declare const abortInflightRequests: () => void;
