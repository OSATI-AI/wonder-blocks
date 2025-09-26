import * as React from "react";
type TrackDataProps = {
    children: React.ReactNode;
};
/**
 * Component to enable data request tracking when server-side rendering.
 */
export default class TrackData extends React.Component<TrackDataProps> {
    render(): React.ReactNode;
}
export {};
