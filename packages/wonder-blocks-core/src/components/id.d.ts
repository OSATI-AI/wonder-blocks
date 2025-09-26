import * as React from "react";
type Props = {
    /**
     * An identifier to use.
     *
     * If this is omitted, an identifier is generated.
     */
    id?: string | undefined;
    /**
     * A function that to render children with the given identifier.
     */
    children: (id: string) => React.ReactNode;
};
/**
 * `Id` is a component that provides an identifier to its children.
 *
 * It is useful for situations where the `useId` hook cannot be easily used,
 * such as in class-based components.
 *
 * If an `id` prop is provided, that is passed through to the children;
 * otherwise, a unique identifier is generated.
 */
export declare const Id: ({ id, children }: Props) => React.ReactNode;
export {};
