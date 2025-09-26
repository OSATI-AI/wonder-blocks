import type Announcer from "../announcer";
/**
 * Alternate index for cycling through elements
 * @param {number} index Previous element index (0 or 1)
 * @returns {number} New index
 */
export declare function alternateIndex(index: number, count: number): number;
/**
 * Keep announcements from happening too often by limiting callback execution by time.
 * Anytime the announcer is called repeatedly, this can slow down the results.
 * @param {Announcer} context Reference to the Announcer instance for maintaining correct scope
 * @param {Function} callback Callback announcer method to call with argments
 * @param {number} debounceThreshold Length of time to wait before calling callback again
 * @returns {Function & { updateWaitTime: (time: number) => void }} Promise resolving with idRef of targeted live region element, and a method to update wait duration
 */
export declare function createDebounceFunction(context: Announcer, callback: (...args: any[]) => string, debounceThreshold: number): {
    (...args: any[]): Promise<string>;
    updateWaitTime: (time: number) => void;
};
