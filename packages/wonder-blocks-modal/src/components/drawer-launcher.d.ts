import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
import type { DrawerAlignment, ModalElement } from "../util/types";
import { DEFAULT_DRAWER_TIMING_DURATION_MS, DEFAULT_DRAWER_ANIMATED, DEFAULT_DRAWER_BACKDROP_DISMISS_ENABLED, DEFAULT_DRAWER_IS_EXITING } from "../util/drawer-context";
import type { DrawerDialogStyles } from "./drawer-dialog";
/**
 * Re-exported centralized default values for the drawer system.
 *
 * These constants provide the default behavior for all drawer components
 * and can be imported by consumers who need to reference or override defaults.
 */
export { DEFAULT_DRAWER_TIMING_DURATION_MS, DEFAULT_DRAWER_ANIMATED, DEFAULT_DRAWER_BACKDROP_DISMISS_ENABLED, DEFAULT_DRAWER_IS_EXITING, };
/** @deprecated Use DEFAULT_DRAWER_TIMING_DURATION_MS instead. */
export declare const DEFAULT_TIMING_DURATION_MS = 400;
/**
 * A more restrictive type for DrawerLauncher that encourages the use of DrawerDialog.
 */
type DrawerModalElement = ModalElement;
/**
 * Function type that should return a DrawerDialog for proper drawer functionality
 */
type DrawerModalFunction = (props: {
    closeModal: () => void;
    styles?: DrawerDialogStyles;
}) => DrawerModalElement;
declare const _default: {
    (props: {
        children?: ((arg1: {
            openModal: () => unknown;
        }) => React.ReactNode) | undefined;
        readonly testId?: string | undefined;
        readonly animated?: boolean | undefined;
        readonly styles?: {
            container?: StyleType;
        } | undefined;
        opened?: boolean | undefined;
        readonly initialFocusId?: string | undefined;
        readonly backdropDismissEnabled?: boolean | undefined;
        readonly modal: DrawerModalElement | DrawerModalFunction;
        readonly closedFocusId?: string | undefined;
        onClose?: (() => unknown) | (() => unknown) | undefined;
        readonly alignment: DrawerAlignment;
        readonly timingDuration?: number | undefined;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default _default;
