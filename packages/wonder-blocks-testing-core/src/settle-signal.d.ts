/**
 * A signal for controlling the `RespondWith` API responses.
 *
 * This provide finely-grained control over the promise lifecycle to support
 * complex test scenarios.
 */
export declare class SettleSignal extends EventTarget {
    private _settled;
    constructor(setSettleFn?: ((settleFn: () => void) => unknown) | null);
    /**
     * An already settled signal.
     */
    static settle(): SettleSignal;
    /**
     * Has this signal been settled yet?
     */
    get settled(): boolean;
}
