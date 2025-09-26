/**
 * Hook for forcing a component to update on demand.
 *
 * This is for use inside other hooks that do some advanced
 * trickery with storing state outside of React's own state
 * mechanisms. As such this should never be called directly
 * outside of a hook, and more often than not, is the wrong
 * choice for whatever you are trying to do. If in doubt,
 * don't use it.
 *
 * @returns {() => void} A function that forces the component to update.
 */
export declare const useForceUpdate: () => (() => void);
