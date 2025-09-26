import * as React from "react";
import { RenderStateInternal } from "./render-state-context";
/**
 * We use render functions so that we don't do any work unless we need to.
 * This avoids rendering but not mounting potentially complex component trees.
 */
type Props = {
    /**
     * The content that is client-only.  This is what is rendered when
     * not server-side rendering, or (when server-side rendering) after
     * the initial rehydration has finished.
     */
    children: () => React.ReactNode;
    /**
     * What to initially render, or null if nothing should be rendered.
     *
     * NOTE: Make sure the fallback will render the same for both
     * client and server -- that is, it does the same thing for both
     * the server-side renderer and the rehydration -- or it defeats
     * the purpose of using the InitialFallback component.
     */
    fallback: (() => React.ReactNode) | null;
};
type State = {
    mounted: boolean;
};
/**
 * Defer or change rendering until the component did mount.
 *
 * The purpose of this component is to disable or modify server-side rendering
 * of certain components. Disabling rendering on the server, by itself, would
 * not be sufficient, since the initial render of the component must match what
 * is rendered on the server. Therefore, this component also disables rendering
 * the first time around on the client.
 *
 * If `InitialFallback` components are nested within one another, the root
 * `InitialFallback` component will handle the initial render, but nested
 * `InitialFallback` components will delegate to the root one, meaning that
 * we don't cascade delayed rendering down the component tree. This will also be
 * the case across portal boundaries.
 *
 * ## Usage
 *
 * ```js
 * import {InitialFallback} from "@osati-ai/wonder-blocks-core";
 *
 * <InitialFallback fallback={() => <div>Renders on the server!</div>}>
 *   {() => (
 *      <div>This is rendered only by the client, for all renders after the rehydration render</div>
 *   )}
 * </InitialFallback>
 * ```
 */
export default class InitialFallback extends React.Component<Props, State> {
    state: State;
    componentDidMount(): void;
    _isTheRootComponent: boolean;
    _renderAsRootComponent(): React.ReactNode;
    _maybeRender(renderState: RenderStateInternal): React.ReactNode;
    render(): React.ReactNode;
}
export {};
