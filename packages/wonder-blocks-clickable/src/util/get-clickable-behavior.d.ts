import ClickableBehavior from "../components/clickable-behavior";
export default function getClickableBehavior(
/**
 * The URL to navigate to.
 */
href?: string, 
/**
 * Should we skip using the react router and go to the page directly.
 */
skipClientNav?: boolean, 
/**
 * Whether we're in a react-router context.
 */
inRouterContext?: boolean): typeof ClickableBehavior;
