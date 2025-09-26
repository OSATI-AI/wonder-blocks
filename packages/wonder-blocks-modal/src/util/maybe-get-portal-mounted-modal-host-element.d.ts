/**
 * From a given element, finds the next modal host that has been mounted in
 * a modal portal.
 * @param {?(Element | Text)} element The element whose ancestors are to be
 * walked.
 * @returns {?Element} The next portal-mounted modal host element.
 * TODO(kevinb): look into getting rid of this
 */
export default function maybeGetPortalMountedModalHostElement(element?: Element | Text | null): Element | null | undefined;
