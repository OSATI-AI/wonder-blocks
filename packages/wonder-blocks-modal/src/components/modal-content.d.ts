import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
type Props = {
    /** Should the content scroll on overflow, or just expand. */
    scrollOverflow?: boolean;
    /** The contents of the ModalContent */
    children: React.ReactNode;
    /** Optional styling to apply to the contents. */
    style?: StyleType;
};
/**
 * The Modal content included after the header
 */
declare function ModalContent({ scrollOverflow, style, children }: Props): import("react/jsx-runtime").JSX.Element;
declare namespace ModalContent {
    var __IS_MODAL_CONTENT__: boolean;
    var isComponentOf: (instance: any) => boolean;
}
export default ModalContent;
