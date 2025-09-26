import type { FetchMockOperation } from "./types";
/**
 * Determines if a given fetch invocation matches the given mock.
 */
export declare const fetchRequestMatchesMock: (mock: FetchMockOperation, input: RequestInfo, init?: RequestInit | null) => boolean;
