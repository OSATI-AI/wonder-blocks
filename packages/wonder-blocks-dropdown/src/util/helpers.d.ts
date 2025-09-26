import { PropsFor } from "@osati-ai/wonder-blocks-core";
import OptionItem from "../components/option-item";
/**
 * Checks if a given key is a valid ASCII value.
 *
 * @param {string} key The key that is being typed in.
 * @returns A valid string representation of the given key.
 */
export declare function getStringForKey(key: string): string;
/**
 *
 * @param {fn} callback The function that will be executed after the debounce is resolved.
 * @param {number} wait The period of time that will be executed the debounced
 * function.
 * @returns The function that will be executed after the wait period is
 * fulfilled.
 */
export declare function debounce(callback: (...args: any) => void, wait: number): (...args: any) => void;
type OptionItemProps = PropsFor<typeof OptionItem>;
/**
 * Returns a valid label for the given props.
 */
export declare function getLabel(props: OptionItemProps): string;
/**
 * Returns the label for the SelectOpener in SingleSelect.
 * If the label is a Node, and `labelAsText` is undefined, returns the label.
 */
export declare function getSelectOpenerLabel(showOpenerLabelAsText: boolean, props: OptionItemProps): string | JSX.Element;
export {};
