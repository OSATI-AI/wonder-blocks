import * as React from "react";
import type { StyleDeclaration } from "aphrodite";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
import type { MediaSize, MediaSpec } from "../util/types";
export type MockStyleSheet = Record<string, StyleType>;
type Props = {
    /**
     * The contents to display. Alternatively, a function can be specified
     * that takes three arguments and should return some nodes to display.
     *
     *   - mediaSize: The current size of the viewport (small/medium/large)
     *   - mediaSpec: The current spec being used to manage the selection of
     *                the mediaSize.
     *   - styles: An Aphrodite stylesheet representing the current
     *                  stylesheet for this mediaSize (as specified in the
     *                  styleSheets prop).
     */
    children: (arg1: {
        mediaSize: MediaSize;
        mediaSpec: MediaSpec;
        styles: MockStyleSheet;
    }) => React.ReactNode;
    /**
     * Aphrodite stylesheets to pass through to the styles prop. The
     * stylesheets to render is based on the media size. "all" is always
     * rendered.
     */
    styleSheets?: {
        all?: StyleDeclaration;
        mdOrLarger?: StyleDeclaration;
        mdOrSmaller?: StyleDeclaration;
        small?: StyleDeclaration;
        medium?: StyleDeclaration;
        large?: StyleDeclaration;
    };
};
/**
 * ***NOTE: The MediaLayout component is being deprecated. Do not use this!!***
 *
 * MediaLayout is a container component that accepts a `styleSheets` object,
 * whose keys are media sizes. It listens for changes to the current media
 * size and passes the current `mediaSize`, `mediaSpec`, and `styles` to
 * `children`, which is a render function taking those three values as an
 * object.
 *
 * Valid keys for the `styleSheets` object are (in order of precedence):
 * - `small`, `medium`, `large`
 * - `mdOrSmaller`, `mdOrLarger`
 * - `all`
 *
 * `MediaLayout` will merge style rules from multiple styles that match the
 * current media query, e.g. `"(min-width: 1024px)"`.
 *
 * The `mediaSpec` is an object with one or more of the following keys:
 * `small`, `medium`, or `large`. Each value contains the following data:
 * - `query: string` e.g. "(min-width: 1024px)"
 * - `totalColumns: number`
 * - `gutterWidth: number`
 * - `marginWidth: number`
 * - `maxWidth: number`
 */
export default class MediaLayout extends React.Component<Props> {
    render(): React.ReactNode;
}
export {};
