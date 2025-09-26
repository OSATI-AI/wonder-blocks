import * as React from "react";
import { Link } from "react-router-dom-v5-compat";
import { ButtonProps } from "../util/button.types";
type Props = Omit<ButtonProps, "children"> & {
    /**
     * The button content.
     */
    children: React.ReactNode;
};
declare const ButtonUnstyled: React.ForwardRefExoticComponent<Props & React.RefAttributes<typeof Link | HTMLButtonElement | HTMLAnchorElement>>;
export { ButtonUnstyled };
