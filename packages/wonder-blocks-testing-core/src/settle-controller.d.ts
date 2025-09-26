import { SettleSignal } from "./settle-signal";
/**
 * A controller for the `RespondWith` API to control response settlement.
 */
export declare class SettleController {
    private _settleFn;
    private _signal;
    constructor();
    /**
     * The signal to pass to the `RespondWith` API.
     */
    get signal(): SettleSignal;
    /**
     * Settle the signal and therefore any associated responses.
     *
     * @throws {Error} if the signal has already been settled.
     */
    settle(): void;
}
