type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]> | string | number | boolean;
};
/**
 * Allows us to create a new copy of the target theme by overriding some of its
 * tokens with a new theme.
 *
 * This is useful when defining another theme for a given component.
 *
 * @param target The original theme object.
 * @param source The theme object to merge into the original.
 * @returns A new theme object with the target tokens overriding the source.
 */
export declare function mergeTheme<T>(source: T | RecursivePartial<T>, target: RecursivePartial<T>): T;
export {};
