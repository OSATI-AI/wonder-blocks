/**
 * Returns:
 * - false for hrefs staring with http://, https://, //.
 * - false for '#', 'javascript:...', 'mailto:...', 'tel:...', etc.
 * - true for all other values, e.g. /foo/bar
 */
export declare const isClientSideUrl: (href: string) => boolean;
