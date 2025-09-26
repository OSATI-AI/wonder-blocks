import Announcer from "./announcer";
type InitAnnouncerProps = {
    debounceThreshold?: number;
    targetElement?: HTMLElement | null;
};
/**
 * Utility to inject Announcer on page load.
 * It can be called from useEffect or elsewhere to improve ARIA Live Region performance on the first announcement.
 * @returns {Announcer} The Announcer instance created.
 */
export declare function initAnnouncer(props?: InitAnnouncerProps): Announcer;
export {};
