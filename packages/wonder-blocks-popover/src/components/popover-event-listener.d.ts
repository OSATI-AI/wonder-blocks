import * as React from "react";
import PopoverContent from "./popover-content";
import PopoverContentCore from "./popover-content-core";
type Props = {
    /**
     * Called when `esc` is pressed
     */
    onClose: (shouldReturnFocus: boolean) => unknown;
    /**
     * Popover Content ref.
     * Will close the popover when clicking outside this element.
     */
    contentRef?: React.RefObject<PopoverContentCore | PopoverContent>;
};
type State = {
    /**
     * Tracks the first click triggered by the click event listener.
     */
    isFirstClick: boolean;
};
/**
 * A component that, when mounted, calls `onClose` when certain events occur.
 * This includes when pressing Escape or clicking outside the Popover.
 * @see @osati-ai/wonder-blocks-modal/components/modal-launcher.js
 */
export default class PopoverEventListener extends React.Component<Props, State> {
    state: State;
    componentDidMount(): void;
    componentWillUnmount(): void;
    _handleKeyup: (e: KeyboardEvent) => void;
    _handleClick: (e: MouseEvent) => void;
    render(): React.ReactElement | null;
}
export {};
