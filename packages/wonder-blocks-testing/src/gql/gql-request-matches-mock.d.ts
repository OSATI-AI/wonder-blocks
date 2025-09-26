import type { GqlOperation, GqlContext } from "@osati-ai/wonder-blocks-data";
import type { GqlMockOperation } from "./types";
export declare const gqlRequestMatchesMock: (mock: GqlMockOperation<any, any, any>, operation: GqlOperation<any, any>, variables: Record<any, any> | null | undefined, context: GqlContext) => boolean;
