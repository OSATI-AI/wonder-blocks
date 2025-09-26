import * as React from "react";
import type { AriaProps } from "@osati-ai/wonder-blocks-core";
type Props = AriaProps & {
    /**
     * Whether we should use the default light color scheme or switch to a
     * darker blue scheme.
     */
    color?: "dark" | "light";
    /**
     * An optional node to render on the left side of the toolbar. This will
     * often be empty, but may include a close button for modals.
     */
    leftContent?: React.ReactNode;
    /**
     * An optional node to render on the right side of the toolbar. This will
     * typically include buttons, links, or span elements with text.
     */
    rightContent?: React.ReactNode;
    /**
     * How much vertical space to use for the toolbar. If this prop is not
     * provided, the default is "medium".
     */
    size?: "small" | "medium";
    /**
     * An optional subtitle rendered in a lighter colour and smaller font size
     * below the title. Only visible on larger media sizes.
     */
    subtitle?: string;
    /**
     * The main title rendered in larger bold text. It also supports rendering
     * React nodes (use with caution).
     */
    title?: string | React.ReactNode;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
};
/**
 * The `Toolbar` component is a generic toolbar wrapper that exposes
 * customization options. An optional `title` and `subtitle` property can be
 * used along with left and right content passed as props.
 *
 * ### Usage
 *
 * ```jsx
 * import Toolbar from "@osati-ai/wonder-blocks-toolbar";
 *
 * <Toolbar
 *   size="small"
 *   leftContent={<IconButton icon={icons.dismiss} kind="tertiary" />}
 *   rightContent={<Button>Next Video</Button>}
 * />
 * ```
 */
export default function Toolbar({ color, leftContent, rightContent, size, subtitle, title, }: Props): React.ReactElement;
export {};
