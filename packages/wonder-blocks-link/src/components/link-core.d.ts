import * as React from "react";
import type { ChildrenProps, ClickableState } from "@osati-ai/wonder-blocks-clickable";
import type { SharedProps } from "./link";
type Props = SharedProps & ChildrenProps & ClickableState & {
    href: string;
};
declare const LinkCore: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLAnchorElement | React.ForwardRefExoticComponent<import("react-router-dom-v5-compat").LinkProps & React.RefAttributes<HTMLAnchorElement>>>>;
export default LinkCore;
