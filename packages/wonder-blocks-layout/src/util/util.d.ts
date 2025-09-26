import type { MediaQuery, MediaSize } from "./types";
/**
 * Return where a media size matches a media query.
 *
 * examples:
 * - `queryMatchesSize("all", "small")` returns `true`
 * - `queryMatchesSize("mdOrLarger", "small")` returns `false`
 *
 * @param {MediaQuery} mediaQuery
 * @param {MediaSize} mediaSize
 */
export declare const queryMatchesSize: (mediaQuery: MediaQuery, mediaSize: MediaSize) => boolean;
