import * as React from "react";
import { BaseBadgeProps, ShowIconProps } from "../types";
type Props = BaseBadgeProps & ShowIconProps & {
    /**
     * The kind of due badge. Defaults to `due`.
     */
    kind?: "due" | "overdue";
};
/**
 * A badge that communicates when a task is due.
 *
 * `DueBadge` uses the `Badge` component and applies the appropriate styles
 * for the kinds.
 *
 * Note: The `iconAriaLabel` prop can be used to set an `aria-label` on the icon
 * if `showIcon` is `true`. This is helpful for providing context to screen
 * readers about what the badge is communicating.
 *
 * For more details, see the `Badge` docs.
 */
declare const DueBadge: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export { DueBadge };
