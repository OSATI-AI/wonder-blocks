/**
 * Converts a rem value to a number (px).
 * @param value The rem value to convert (includes the unit).
 * @param baseline Optional number to configure the baseline for calculations. Defaults to 10.
 * @returns A string with the px value.
 */
export declare function remToPx(value: string, baseline?: number): string;
/**
 * Converts a number (px) to a rem value.
 */
export declare function pxToRem(value: number, baseline?: number): string;
