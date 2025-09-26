import type { PolitenessLevel } from "./util/announcer.types";
export type AnnounceMessageProps = {
    message: string;
    level?: PolitenessLevel;
    debounceThreshold?: number;
    initialTimeout?: number;
};
/**
 * Method to announce screen reader messages in ARIA Live Regions.
 * @param {string} message The message to announce.
 * @param {PolitenessLevel} level Polite or assertive announcements
 * @param {number} debounceThreshold Optional duration to wait before announcing another message. Defaults to 250ms.
 * @param {number} initialTimeout Optional duration to wait before the first announcement. Useful for Safari and automated testing.
 * @returns {Promise<string>} Promise that resolves with an IDREF for targeted live region element or an empty string
 */
export declare function announceMessage({ message, level, // TODO: decide whether to allow other roles, i.e. role=`timer`
debounceThreshold, initialTimeout, }: AnnounceMessageProps): Promise<string>;
