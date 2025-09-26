import * as React from "react";
import type { ModalElement } from "../util/types";
declare const _default: {
    (props: {
        readonly children?: ((arg1: {
            openModal: () => unknown;
        }) => React.ReactNode) | undefined;
        readonly testId?: string | undefined;
        readonly opened?: boolean | undefined;
        readonly initialFocusId?: string | undefined;
        readonly backdropDismissEnabled?: boolean | undefined;
        readonly modal: ModalElement | ((props: {
            closeModal: () => void;
        }) => ModalElement);
        readonly closedFocusId?: string | undefined;
        readonly onClose?: (() => unknown) | undefined;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default _default;
