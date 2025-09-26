import * as React from "react";
import Link from "@osati-ai/wonder-blocks-link";
/**
 * The BreadcrumbsItem represents an individual item in the breadcrumbs list.
 */
declare const BreadcrumbsItem: React.ForwardRefExoticComponent<Readonly<import("@osati-ai/wonder-blocks-core").AriaAttributes> & Readonly<{
    role?: import("@osati-ai/wonder-blocks-core").AriaRole;
}> & {
    /**
     * This is the content for the collection of Breadcrumbs
     */
    children: string | React.ReactElement<React.ComponentProps<typeof Link>>;
    /**
     * When true, the separator is shown; otherwise, the separator is not shown.
     * Note: This is only for use by the Breadcrumbs component!!
     * @ignore
     */
    showSeparator?: boolean;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
} & React.RefAttributes<HTMLLIElement>>;
export default BreadcrumbsItem;
