import * as React from "react";
type Props = {
    children: React.ReactNode;
    /**
     * Whether the component should throw when nested.  Defaults to `true`.
     */
    throwIfNested?: boolean;
};
declare const RenderStateRoot: ({ children, throwIfNested, }: Props) => React.ReactElement;
export { RenderStateRoot };
