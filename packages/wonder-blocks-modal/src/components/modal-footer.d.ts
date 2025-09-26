import * as React from "react";
type Props = {
    children: React.ReactNode;
};
/**
 * Modal footer included after the content.
 *
 * **Implementation notes**:
 *
 * If you are creating a custom Dialog, make sure to follow these guidelines:
 * - Make sure to include it as part of [ModalPanel](/#modalpanel) by using the `footer` prop.
 * - The footer is completely flexible. Meaning the developer needs to add its own custom layout to match design specs.
 *
 * **Usage**
 *
 * ```js
 * <ModalFooter>
 *     <Button onClick={() => {}}>Submit</Button>
 * </ModalFooter>
 * ```
 */
declare function ModalFooter({ children }: Props): import("react/jsx-runtime").JSX.Element;
declare namespace ModalFooter {
    var __IS_MODAL_FOOTER__: boolean;
    var isComponentOf: (instance: any) => boolean;
}
export default ModalFooter;
