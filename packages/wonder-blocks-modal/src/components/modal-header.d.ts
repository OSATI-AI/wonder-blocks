import * as React from "react";
import { Breadcrumbs } from "@osati-ai/wonder-blocks-breadcrumbs";
type Common = {
    /**
     * The main title rendered in larger bold text.
     */
    title: string;
    /**
     * An id to provide a selector for the title element.
     */
    titleId: string;
    /**
     * Test ID used for e2e testing.
     *
     * In this case, this component is internal, so `testId` is composed with
     * the `testId` passed down from the Dialog variant + a suffix to scope it
     * to this component.
     *
     * @example
     * For testId="some-random-id"
     * The result will be: `some-random-id-modal-header`
     */
    testId?: string;
};
type WithSubtitle = Common & {
    /**
     * The dialog subtitle.
     */
    subtitle: string;
};
type WithBreadcrumbs = Common & {
    /**
     * Adds a breadcrumb-trail, appearing in the ModalHeader, above the title.
     */
    breadcrumbs: React.ReactElement<React.ComponentProps<typeof Breadcrumbs>>;
};
type Props = Common | WithSubtitle | WithBreadcrumbs;
/**
 * This is a helper component that is never rendered by itself. It is always
 * pinned to the top of the dialog, is responsive using the same behavior as its
 * parent dialog, and has the following properties:
 * - title
 * - breadcrumb OR subtitle, but not both.
 *
 * **Accessibility notes:**
 *
 * - By default (e.g. using [OnePaneDialog](/#onepanedialog)), `titleId` is
 *   populated automatically by the parent container.
 * - If there is a custom Dialog implementation (e.g. `TwoPaneDialog`), the
 *   ModalHeader doesn’t have to have the `titleId` prop however this is
 *   recommended. It should match the `aria-labelledby` prop of the
 *   [ModalDialog](/#modaldialog) component. If you want to see an example of
 *   how to generate this ID look at the `React.useId` hook documentation, o
 *   check [Id](/#id).
 *
 * **Implementation notes:**
 *
 * If you are creating a custom Dialog, make sure to follow these guidelines:
 * - Make sure to include it as part of [ModalPanel](/#modalpanel) by using the
 *   `header` prop.
 * - Add a title (required).
 * - Optionally add a subtitle or breadcrumbs.
 * - We encourage you to add `titleId` (see Accessibility notes).
 * - If you need to create e2e tests, make sure to pass a `testId` prop and
 *   add a sufix to scope the testId to this component: e.g.
 *   `some-random-id-ModalHeader`. This scope will also be passed to the title
 *   and subtitle elements: e.g. `some-random-id-ModalHeader-title`.
 *
 * Example:
 *
 * ```js
 * <ModalHeader
 *      title="Sidebar using ModalHeader"
 *      subtitle="subtitle"
 *      titleId="uniqueTitleId"
 *  />
 * ```
 */
export default function ModalHeader(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
