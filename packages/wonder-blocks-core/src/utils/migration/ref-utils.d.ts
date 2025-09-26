import { MutableRefObject } from 'react';
/**
 * Hook to get DOM node reference with callback
 */
export declare function useDOMNodeRef<T extends HTMLElement>(): [
    MutableRefObject<T | null>,
    (node: T | null) => void
];
/**
 * Hook for focus management without findDOMNode
 */
export declare function useFocusManager(elementId?: string): {
    focusElement: () => void;
    setFocusRef: (node: HTMLElement | null) => void;
    elementRef: import("react").RefObject<HTMLElement | null>;
};
/**
 * Utility to track dynamic refs
 */
export declare class RefTracker<T extends HTMLElement> {
    private refs;
    setRef(key: string, element: T | null): void;
    getRef(key: string): T | undefined;
    clear(): void;
}
