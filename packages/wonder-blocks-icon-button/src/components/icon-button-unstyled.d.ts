import * as React from "react";
import type { IconButtonProps, IconButtonRef } from "../util/icon-button.types";
type Props = Omit<IconButtonProps, "icon"> & {
    /**
     * The button content.
     */
    children: React.ReactNode;
    /**
     * URL to navigate to.
     *
     * Used to determine whether to render an `<a>` or `<button>` tag. Also
     * passed in as the `<a>` tag's `href` if present.
     */
    href?: string;
    /**
     * Listens for keydown events on the button. This is useful for preventing
     * default behavior when the user presses the spacebar or enter key.
     */
    onKeyDown?: (e: React.KeyboardEvent) => unknown;
    /**
     * Listens for keyup events on the button. This is useful for triggering
     * actions when the user presses the spacebar or enter key.
     */
    onKeyUp?: (e: React.KeyboardEvent) => unknown;
    /**
     * When the button is in a pressing state. This is useful for keyboard
     * interactions, so we can provide visual feedback to the user.
     */
    onPress?: (isPressing: boolean) => unknown;
};
export declare const IconButtonUnstyled: React.ForwardRefExoticComponent<Props & React.RefAttributes<IconButtonRef>>;
export {};
