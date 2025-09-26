import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
import type { AccordionCornerKindType } from "./accordion";
export type TagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
/**
 * An AccordionSection displays a section of content that can be shown or
 * hidden by clicking its header. This is generally used within the Accordion
 * component, but it can also be used on its own if you need only one
 * collapsible section.
 *
 * ### Usage
 *
 * ```jsx
 * import {
 *      Accordion,
 *      AccordionSection
 * } from "@osati-ai/wonder-blocks-accordion";
 *
 * // Within an Accordion
 * <Accordion>
 *   <AccordionSection header="First section">
 *       This is the information present in the first section
 *   </AccordionSection>
 *   <AccordionSection header="Second section">
 *       This is the information present in the second section
 *   </AccordionSection>
 *   <AccordionSection header="Third section">
 *       This is the information present in the third section
 *   </AccordionSection>
 * </Accordion>
 *
 * // On its own, controlled
 * const [expanded, setExpanded] = React.useState(false);
 * <AccordionSection
 *     header="A standalone section"
 *     expanded={expanded}
 *     onToggle={setExpanded}
 * >
 *    This is the information present in the standalone section
 * </AccordionSection>
 *
 * // On its own, uncontrolled
 * <AccordionSection header="A standalone section">
 *   This is the information present in the standalone section
 * </AccordionSection>
 * ```
 */
declare const AccordionSection: React.ForwardRefExoticComponent<Readonly<import("@osati-ai/wonder-blocks-core").AriaAttributes> & Readonly<{
    role?: import("@osati-ai/wonder-blocks-core").AriaRole;
}> & {
    /**
     * The unique identifier for the accordion section.
     */
    id?: string;
    /**
     * The content to display when this section is shown. If a string is
     * passed in, it will automatically be given Body typography from
     * Wonder Blocks Typography.
     */
    children: string | React.ReactElement;
    /**
     * The header for this section. If a string is passed in, it will
     * automatically be given Body typography from Wonder Blocks Typography.
     */
    header: string | React.ReactElement;
    /**
     * Whether to put the caret at the start or end of the header block
     * in this section. "start" means it’s on the left of a left-to-right
     * language (and on the right of a right-to-left language), and "end"
     * means it’s on the right of a left-to-right language
     * (and on the left of a right-to-left language).
     * Defaults to "end".
     *
     * If this prop is specified both here in the AccordionSection and
     * within a parent Accordion component, the AccordionSection’s caretPosition
     * value is prioritized.
     */
    caretPosition?: "start" | "end";
    /**
     * The preset styles for the corners of this accordion.
     * `square` - corners have no border radius.
     * `rounded` - the overall container's corners are rounded.
     * `rounded-per-section` - each section's corners are rounded, and there
     * is white space between each section.
     *
     * If this prop is specified both here in the AccordionSection and
     * within a parent Accordion component, the AccordionSection’s cornerKind
     * value is prioritized.
     */
    cornerKind?: AccordionCornerKindType;
    /**
     * Whether this section is collapsible. If false, the header will not be
     * clickable, and the section will stay expanded at all times.
     */
    collapsible?: boolean;
    /**
     * Whether this section is expanded or closed.
     *
     * NOTE: This prop is NOT used when this AccordionSection is rendered
     * within an Accordion component. In that case, the Accordion component
     * manages the expanded state of the AccordionSection.
     */
    expanded?: boolean;
    /**
     * Whether to include animation on the header. This should be false
     * if the user has `prefers-reduced-motion` opted in. Defaults to false.
     *
     * If this prop is specified both here in the AccordionSection and
     * within a parent Accordion component, the AccordionSection’s animated
     * value is prioritized.
     */
    animated?: boolean;
    /**
     * Called when the header is clicked.
     * Takes the new expanded state as an argument. This way, the function
     * returned from React.useState can be passed in directly.
     */
    onToggle?: (newExpandedState: boolean) => unknown;
    /**
     * Custom styles for the overall accordion section container.
     */
    style?: StyleType;
    /**
     * Custom styles for the header.
     */
    headerStyle?: StyleType;
    /**
     * The semantic tag for this clickable header (e.g. "h1", "h2", etc).
     * Please use this to ensure that the header is hierarchically correct.
     * Defaults to "h2".
     * */
    tag?: TagType;
    /**
     * The test ID used to locate this component in automated tests.
     */
    testId?: string;
    /**
     * Whether this section is the first section in the accordion.
     * For internal use only.
     * @ignore
     */
    isFirstSection?: boolean;
    /**
     * Whether this section is the last section in the accordion.
     * For internal use only.
     * @ignore
     */
    isLastSection?: boolean;
    /**
     * Whether this section should have role="region". True by default.
     * According to W3, the panel container should have role region except
     * when there are more than six panels in an accordion, in which case
     * we should set this prop to false.
     * For internal use only.
     * @ignore
     */
    isRegion?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;
export default AccordionSection;
