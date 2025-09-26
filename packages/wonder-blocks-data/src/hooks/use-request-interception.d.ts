import type { ValidCacheData } from "../util/types";
/**
 * Allow request handling to be intercepted.
 *
 * Hook to take a uniquely identified request handler and return a
 * method that will support request interception from the InterceptRequest
 * component.
 *
 * If you want request interception to be supported with `useServerEffect` or
 * any client-side effect that uses the handler, call this first to generate
 * an intercepted handler, and then invoke `useServerEffect` (or other things)
 * with that intercepted handler.
 */
export declare const useRequestInterception: <TData extends ValidCacheData>(requestId: string, handler: () => Promise<TData>) => (() => Promise<TData>);
