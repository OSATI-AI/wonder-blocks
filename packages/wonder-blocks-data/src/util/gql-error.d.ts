import { KindError } from "@khanacademy/wonder-stuff-core";
import type { ErrorOptions } from "./types";
/**
 * Error kinds for GqlError.
 */
export declare const GqlErrors: Readonly<{
    /**
     * An internal framework error.
     */
    Internal: "Internal";
    /**
     * Response does not have the correct structure for a GraphQL response.
     */
    BadResponse: "BadResponse";
    /**
     * A valid GraphQL result with errors field in the payload.
     */
    ErrorResult: "ErrorResult";
}>;
/**
 * An error from the GQL API.
 *
 * Errors of this type will have names of the format:
 *     `${kind}GqlError`
 */
export declare class GqlError extends KindError {
    constructor(message: string, kind: (typeof GqlErrors)[keyof typeof GqlErrors], { metadata, cause }?: ErrorOptions);
}
