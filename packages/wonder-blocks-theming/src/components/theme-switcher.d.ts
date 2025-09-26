import * as React from "react";
import { SupportedThemes } from "../types";
type Props = {
    /**
     * The theme to use.
     */
    theme: SupportedThemes;
    /**
     * The children where the theme will be applied.
     */
    children: React.ReactNode;
};
/**
 * ThemeSwitcher is a component that allows users to switch between themes.
 */
export declare function ThemeSwitcher({ theme, children }: Props): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element | null | undefined;
export {};
