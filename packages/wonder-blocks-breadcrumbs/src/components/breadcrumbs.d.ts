import * as React from "react";
import BreadcrumbsItem from "./breadcrumbs-item";
/**
 * A breadcrumb trail consists of a list of links to the parent pages
 * of the current page in hierarchical order. It helps users find their
 * place within a website or web application.
 * Breadcrumbs are often placed horizontally before a page's main content.
 *
 * The Breadcrumbs component will have the following structure:
 *
 * 1. Breadcrumbs Item: Represents a section within the page.
 * 2. Separator: Adds a separator between each item.
 *
 * NOTE: `<BreadcrumbsItem />` only accepts two element types:
 *
 * 1. `string`
 * 2. `<Link />`
 *
 * ## Usage
 *
 * ```jsx
 * import {
 *     Breadcrumbs,
 *     BreadcrumbsItem
 * } from "@osati-ai/wonder-blocks-breadcrumbs";
 *
 * <Breadcrumbs>
 *     <BreadcrumbsItem>
 *         <Link href="">Course</Link>
 *     </BreadcrumbsItem>
 *     <BreadcrumbsItem>
 *         <Link href="">Unit</Link>
 *     </BreadcrumbsItem>
 *     <BreadcrumbsItem>
 *         Lesson
 *     </BreadcrumbsItem>
 * </Breadcrumbs>
 * ```
 */
declare const Breadcrumbs: React.ForwardRefExoticComponent<Readonly<import("@osati-ai/wonder-blocks-core").AriaAttributes> & Readonly<{
    role?: import("@osati-ai/wonder-blocks-core").AriaRole;
}> & {
    /**
     * This is the content for the collection of Breadcrumbs
     */
    children: Array<React.ReactElement<React.ComponentProps<typeof BreadcrumbsItem>>> | React.ReactElement<React.ComponentProps<typeof BreadcrumbsItem>>;
    /**
     * Accessible label for the breadcrumbs.
     */
    "aria-label"?: string;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
} & React.RefAttributes<HTMLElement>>;
export default Breadcrumbs;
