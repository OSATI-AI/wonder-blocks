import * as React from "react";
import type { DrawerAlignment } from "./types";
/**
 * Centralized default values for the drawer system.
 *
 * These constants provide the default behavior for all drawer components
 * and can be imported by consumers who need to reference or override defaults.
 */
/** Default duration in milliseconds for drawer slide animations and focus timing. */
export declare const DEFAULT_DRAWER_TIMING_DURATION_MS = 400;
/** Default setting for whether drawer animations are enabled. */
export declare const DEFAULT_DRAWER_ANIMATED = true;
/** Default setting for whether clicking the backdrop dismisses the drawer. */
export declare const DEFAULT_DRAWER_BACKDROP_DISMISS_ENABLED = true;
/** Default value for internal exit animation state. */
export declare const DEFAULT_DRAWER_IS_EXITING = false;
export interface DrawerContextProps {
    alignment?: DrawerAlignment;
    animated?: boolean;
    isExiting?: boolean;
    timingDuration?: number;
}
export declare const DrawerContext: React.Context<DrawerContextProps>;
export declare const useDrawerContext: () => DrawerContextProps;
