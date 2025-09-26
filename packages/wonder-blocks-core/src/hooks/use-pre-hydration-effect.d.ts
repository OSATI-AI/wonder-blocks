import * as React from "react";
/**
 * Hook that runs an effect before hydration completes.
 *
 * DO NOT use this effect to mutate the DOM - that will cause hydration errors.
 * This should solely be used for functionality like event handler setup that
 * does not affect the rendered HTML output.
 *
 * Effects from `useLayoutEffect` cause errors on the server because they could
 * include changes to the rendered output during the initial render cycle and
 * the server cannot codify that into the returned result.
 *
 * However, sometimes we just need to update event handlers or some other state
 * that won't affect the current render. In those cases, rather than erroring,
 * we want the server side to just silently no-op like `useEffect` calls do.
 * This hook allows that but should be used with extreme care.
 *
 * @param effect The effect to run.
 */
export declare const usePreHydrationEffect: (effect: React.EffectCallback) => void;
