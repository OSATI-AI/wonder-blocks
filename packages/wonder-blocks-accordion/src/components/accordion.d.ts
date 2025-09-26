import * as React from "react";
import type { StyleType } from "@osati-ai/wonder-blocks-core";
import AccordionSection from "./accordion-section";
export type AccordionCornerKindType = "square" | "rounded" | "rounded-per-section";
/**
 * An accordion displays a vertically stacked list of sections, each of which
 * contains content that can be shown or hidden by clicking its header.
 *
 * The Wonder Blocks Accordion component is a styled wrapper for a list of
 * AccordionSection components. It also wraps the AccordionSection
 * components in list items.
 *
 * ### Usage
 *
 * ```jsx
 * import {
 *      Accordion,
 *      AccordionSection
 * } from "@osati-ai/wonder-blocks-accordion";
 *
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
 * ```
 */
declare const Accordion: React.ForwardRefExoticComponent<Readonly<import("@osati-ai/wonder-blocks-core").AriaAttributes> & Readonly<{
    role?: import("@osati-ai/wonder-blocks-core").AriaRole;
}> & {
    /**
     * The unique identifier for the accordion.
     */
    id?: string;
    /**
     * The AccordionSection components to display within this Accordion.
     */
    children: Array<React.ReactElement<React.ComponentProps<typeof AccordionSection>>>;
    /**
     * The index of the AccordionSection that should be expanded when the
     * Accordion is first rendered. If not specified, no AccordionSections
     * will be expanded when the Accordion is first rendered.
     */
    initialExpandedIndex?: number;
    /**
     * Whether multiple AccordionSections can be expanded at the same time.
     * If not specified, multiple AccordionSections can be expanded at a time.
     */
    allowMultipleExpanded?: boolean;
    /**
     * Whether to put the caret at the start or end of the header block
     * in this section. "start" means it’s on the left of a left-to-right
     * language (and on the right of a right-to-left language), and "end"
     * means it’s on the right of a left-to-right language
     * (and on the left of a right-to-left language).
     * Defaults to "end".
     *
     * If this prop is specified both here in the Accordion and within
     * a child AccordionSection component, the AccordionSection’s caretPosition
     * value is prioritized.
     */
    caretPosition?: "start" | "end";
    /**
     * The preset styles for the corners of this accordion.
     * `square` - corners have no border radius.
     * `rounded` - the overall container's corners are rounded.
     * `rounded-per-section` - each section's corners are rounded,
     * and there is vertical white space between each section.
     *
     * If this prop is specified both here in the Accordion and within
     * a child AccordionSection component, the AccordionSection’s cornerKind
     * value is prioritized.
     */
    cornerKind?: AccordionCornerKindType;
    /**
     * Whether to include animation on the header. This should be false
     * if the user has `prefers-reduced-motion` opted in. Defaults to false.
     *
     * If this prop is specified both here in the Accordion and within
     * a child AccordionSection component, the AccordionSection’s animated
     * value is prioritized.
     */
    animated?: boolean;
    /**
     * Custom styles for the overall accordion container.
     */
    style?: StyleType;
} & React.RefAttributes<HTMLUListElement>>;
export default Accordion;
