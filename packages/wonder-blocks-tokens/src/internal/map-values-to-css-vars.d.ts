import { RecursivePartial } from "../util/types";
/**
 * From a given object, create a new object where each value is a CSS variable
 * reference to the original value.
 *
 * @param obj The source object containing the tokens.
 * @param prefix The prefix to use for the CSS variables.
 * @returns The same object structure as the input, but with the values replaced
 * with CSS variable references.
 *
 * @example
 * const obj = {
 *    color: {
 *      primary: "red",
 *     secondary: "blue",
 *  };
 *
 * const cssVars = mapValuesToCssVars(obj);
 * // cssVars = {
 * //    color: {
 * //      primary: "var(--wb-color-primary)",
 * //     secondary: "var(--wb-color-secondary)",
 * //    },
 * // };
 */
export declare function mapValuesToCssVars<T>(obj: T | RecursivePartial<T>, prefix?: string): T;
