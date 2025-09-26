import type { PolitenessLevel, RegionDictionary } from "./announcer.types";
/**
 * Create a wrapper element to group regions for a given level
 * @param {string} level Politeness level for grouping
 * @returns {HTMLElement} Wrapper DOM element reference
 */
export declare function createRegionWrapper(level: PolitenessLevel): HTMLDivElement;
/**
 * Create multiple live regions for a given level
 * @param {HTMLElement} wrapper Parent DOM element reference to append into
 * @param {string} level Politeness level for grouping
 * @param {number} regionCount Number of regions to create
 * @param {RegionDictionary} dictionary Reference to Announcer dictionary
 * @returns {HTMLElement[]} Array of region elements
 */
export declare function createDuplicateRegions(wrapper: HTMLElement, level: PolitenessLevel, regionCount: number, dictionary: RegionDictionary): HTMLElement[];
/**
 * Create live region element for a given level
 * @param {string} level Politeness level for grouping
 * @param {number} index Incrementor for duplicate regions
 * @param {RegionDef} dictionary Reference to Announcer dictionary to update
 * @param {string} role Role attribute for live regions, defaults to log
 * @returns {HTMLElement} DOM element reference for live region
 */
export declare function createRegion(level: PolitenessLevel, index: number, dictionary: RegionDictionary, role?: string): HTMLDivElement;
/**
 * Remove message element from the DOM
 * @param {HTMLElement} messageElement Dynamically created message element
 * @param {number} removalDelay How long to wait before removing the message
 */
export declare function removeMessage(messageElement: HTMLElement, removalDelay: number): void;
