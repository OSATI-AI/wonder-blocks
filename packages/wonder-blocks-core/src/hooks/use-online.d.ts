/**
 * Track the online status of the browser.
 *
 * This hook monitors the offline and online events, forcing the consuming
 * component to re-render when they fire.
 *
 * @returns {boolean} The current value of `navigator.onLine`.
 */
export declare const useOnline: () => boolean;
