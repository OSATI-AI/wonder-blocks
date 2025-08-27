import {useRef, useEffect, useCallback, MutableRefObject} from 'react';

/**
 * Hook to get DOM node reference with callback
 */
export function useDOMNodeRef<T extends HTMLElement>(): [
    MutableRefObject<T | null>,
    (node: T | null) => void
] {
    const ref = useRef<T | null>(null);
    const setRef = useCallback((node: T | null) => {
        ref.current = node;
    }, []);
    return [ref, setRef];
}

/**
 * Hook for focus management without findDOMNode
 */
export function useFocusManager(elementId?: string) {
    const elementRef = useRef<HTMLElement | null>(null);

    const focusElement = useCallback(() => {
        if (elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.focus();
                return;
            }
        }
        if (elementRef.current) {
            elementRef.current.focus();
        }
    }, [elementId]);

    const setFocusRef = useCallback((node: HTMLElement | null) => {
        elementRef.current = node;
    }, []);

    return {focusElement, setFocusRef, elementRef};
}

/**
 * Utility to track dynamic refs
 */
export class RefTracker<T extends HTMLElement> {
    private refs: Map<string, T> = new Map();

    setRef(key: string, element: T | null) {
        if (element) {
            this.refs.set(key, element);
        } else {
            this.refs.delete(key);
        }
    }

    getRef(key: string): T | undefined {
        return this.refs.get(key);
    }

    clear() {
        this.refs.clear();
    }
}