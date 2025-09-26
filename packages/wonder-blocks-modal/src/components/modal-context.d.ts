import * as React from "react";
type ContextType = {
    closeModal?: () => unknown;
};
declare const ModalContext: React.Context<ContextType>;
export default ModalContext;
