import * as React from "react";
import type { CellProps, TypographyText } from "../util/types";
/**
 * This is a variant of CompactCell that allows adding subtitles, before and
 * after the cell title. They typically represent an item that can be
 * clicked/tapped to view more complex details. They vary in height depending on
 * the presence or absence of subtitles, and they allow for a wide range of
 * functionality depending on which accessories are active.
 *
 * ### Usage
 *
 * ```jsx
 * import {DetailCell} from "@osati-ai/wonder-blocks-cell";
 * import {PhosphorIcon} from "@osati-ai/wonder-blocks-icon";
 *
 * <DetailCell
 *  leftAccessory={<PhosphorIcon icon={contentVideo} size="medium" />}
 *  subtitle1="Subtitle 1"
 *  title="Detail cell"
 *  subtitle1="Subtitle 2"
 *  rightAccessory={<PhosphorIcon icon={caretRight} size="medium" />}
 * />
 * ```
 */
declare const DetailCell: React.ForwardRefExoticComponent<CellProps & {
    /**
     * You can either provide a string or a custom node Typography element (or
     * nothing at all). Both a string or a custom node Typography element will
     * occupy the “Subtitle1” area of the Cell.
     */
    subtitle1?: TypographyText;
    /**
     * You can either provide a string or a custom node Typography element (or
     * nothing at all). Both a string or a custom node Typography element will
     * occupy the “Subtitle2” area of the Cell.
     */
    subtitle2?: TypographyText;
} & React.RefAttributes<HTMLDivElement>>;
export default DetailCell;
