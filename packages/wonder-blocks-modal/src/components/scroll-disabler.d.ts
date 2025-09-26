/**
 * A UI-less component that lets `ModalLauncher` disable page scroll.
 *
 * The positioning of the modal requires some global page state changed
 * unfortunately, and this handles that in an encapsulated way.
 *
 * NOTE(mdr): This component was copied from webapp. Be wary of sync issues. It
 *     also doesn't have unit tests, and we haven't added any, since it's a
 *     relatively stable component that has now been stress-tested lots in prod.
 */
import * as React from "react";
type Props = Record<any, any>;
declare class ScrollDisabler extends React.Component<Props> {
    static oldOverflow: string;
    static oldPosition: string;
    static oldScrollY: number;
    static oldWidth: string;
    static oldTop: string;
    componentDidMount(): void;
    componentWillUnmount(): void;
    static numModalsOpened: number;
    render(): React.ReactElement | null;
}
export default ScrollDisabler;
