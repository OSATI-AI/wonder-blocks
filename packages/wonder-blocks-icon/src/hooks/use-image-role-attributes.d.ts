/**
 * Determines what attributes should be applied to an icon based on if there is
 * an accessible label for the icon.
 *
 * @returns The attributes to apply to an svg element.
 */
export declare function useImageRoleAttributes(props: {
    "aria-label"?: string;
    "aria-labelledby"?: string;
}): {
    "aria-hidden": boolean;
} | {
    "aria-label": string | undefined;
    "aria-labelledby": string | undefined;
    role: string;
};
