import type { DropdownItem } from "./types";
/**
 * The list height that is automatically calculated depending on the
 * component's type of each item (e.g. Separator, Option, Search, etc)
 *
 * @param {Array<DropdownItem>} items - The list of items to calculate the height
 * @param {number} initialHeight - The initial height of the list
 *
 * @returns {number} The list height
 */
export declare function getDropdownMenuHeight(items: Array<DropdownItem>, initialHeight?: number): number;
