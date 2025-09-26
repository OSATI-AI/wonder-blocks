import * as React from "react";
import { BaseBadgeProps, IconLabelProps } from "../types";
type Props = {
    /**
     * The kind of badge to display. Defaults to `info`.
     */
    kind?: "info" | "success" | "warning" | "critical";
} & BaseBadgeProps & IconLabelProps;
/**
 * A badge that represents a status.
 *
 * `StatusBadge` uses the `Badge` component and applies the appropriate styles
 * for the status kinds. For more details, see the `Badge` docs.
 */
declare const StatusBadge: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export { StatusBadge };
