import * as React from "react";
import { BaseBadgeProps, ShowIconProps } from "../types";
type Props = BaseBadgeProps & ShowIconProps;
/**
 * A badge that represents streaks.
 *
 * `StreakBadge` uses the `Badge` component and applies the appropriate styles
 * and icon. For more details, see the `Badge` docs.
 */
declare const StreakBadge: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export { StreakBadge };
