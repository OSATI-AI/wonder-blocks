import * as React from "react";
import { BaseBadgeProps, IconLabelProps } from "../types";
type Props = IconLabelProps & BaseBadgeProps;
/**
 * Badges are visual indicators used to display concise information, such as
 * a status, label, or count.
 */
declare const Badge: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export { Badge };
