import type { PolitenessLevel, RegionFactory, RegionDictionary, RegionDef } from "./util/announcer.types";
export declare const REMOVAL_TIMEOUT_DELAY = 5000;
export declare const DEFAULT_WAIT_THRESHOLD = 250;
/**
 * Internal class to manage screen reader announcements.
 */
declare class Announcer {
    private static _instance;
    private targetElement;
    topLevelId: string;
    node: HTMLElement | null;
    regionFactory: RegionFactory;
    dictionary: RegionDictionary;
    waitThreshold: number;
    lastExecutionTime: number;
    private debounced;
    private constructor();
    /**
     * Singleton handler to ensure we only have one Announcer instance
     * @returns {Announcer}
     */
    static getInstance(targetElement?: HTMLElement | undefined): Announcer;
    /**
     * Internal initializer method to create live region elements
     * Prepends regions to document body
     * @param {string} id ID of the top level node (wbAnnounce)
     */
    init(id: string): void;
    /**
     * Recover in the event regions get lost
     * This happens in Storybook or other HMR environments when saving a file:
     * Announcer exists, but it loses the connection to DOM element Refs
     */
    reattachNodes(): void;
    /**
     * Announce a live region message for a given level
     * @param {string} message The message to be announced
     * @param {string} level Politeness level: should it interrupt?
     * @param {number} debounceThreshold Optional duration to wait before appending another message (defaults to 250ms)
     * @returns {Promise<string>} Promise that resolves with an IDREF for targeted element or empty string if it failed
     */
    announce(message: string, level: PolitenessLevel, debounceThreshold?: number): Promise<string>;
    /**
     * Override the default debounce wait threshold
     * @param {number} debounceThreshold Duration to wait before appending messages
     */
    updateWaitThreshold(debounceThreshold: number): void;
    /**
     * Callback for appending live region messages through debounce
     * @param {Announcer} context Pass the correct `this` arg to the callback
     * @param {sting} message The live region message to append
     * @param {string} level The politeness level for whether to interrupt
     */
    processAnnouncement(context: Announcer, message: string, level: PolitenessLevel): string;
    /**
     * Clear messages on demand.
     * This could be useful for clearing immediately, rather than waiting for the default removalDelay.
     * Defaults to clearing all live region elements
     * @param {string} id Optional IDREF of specific element to empty
     */
    clear(id?: string): void;
    /**
     * Append message to alternating element for a given level
     * @param {string} message The message to be appended
     * @param {string} level Which level to alternate
     * @param {RegionDef[]} regionList Filtered dictionary of regions for level
     * @returns {number} Index of targeted region for updating central register
     */
    appendMessage(message: string, level: PolitenessLevel, // level
    regionList: RegionDef[], // list of relevant elements
    debounceThreshold?: number): number;
    /**
     * Reset state to defaults.
     * Useful for testing.
     **/
    reset(): void;
    /**
     * Remove Announcer instance and all elements.
     * Useful for testing.
     **/
    destroy(): void;
}
export default Announcer;
/**
 * Styling for live region.
 * TODO: move to wonder-blocks-style package.
 * Note: This style is overridden in Storybook for testing.
 */
export declare const srOnly: {
    border: number;
    clip: string;
    height: number;
    margin: number;
    overflow: string;
    padding: number;
    position: string;
    width: number;
};
