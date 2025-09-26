import { StyleType } from "@osati-ai/wonder-blocks-core";
import { PhosphorIconAsset } from "@osati-ai/wonder-blocks-icon";
/**
 * Returns the phosphor icon component based on the size. This is necessary
 * so we can cast the icon to the correct type.
 */
export declare function ButtonIcon({ icon, size, style, testId, }: {
    icon: PhosphorIconAsset;
    size: "small" | "medium";
    style?: StyleType;
    testId?: string;
}): import("react/jsx-runtime").JSX.Element;
