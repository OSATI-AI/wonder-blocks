import { Temporal } from "temporal-polyfill";
import * as React from "react";
import { StyleType } from "@osati-ai/wonder-blocks-core";
export type Labels = {
    /**
     * Label for displaying a validation error.
     */
    readonly errorMessage: string;
    /**
     * Label for the month placeholder.
     */
    readonly month: string;
    /**
     * Label for the year placeholder.
     */
    readonly year: string;
    /**
     * Label for the day placeholder.
     */
    readonly day: string;
};
type Props = {
    /**
     * The default value to populate the birthdate with. Should be in the
     * format: YYYY-MM-DD (e.g. 2021-05-26). It's only used to populate the
     * initial value as this is an uncontrolled component.
     */
    defaultValue?: string;
    /**
     * Whether the birthdate fields are disabled.
     */
    disabled?: boolean;
    /**
     * The object containing the custom labels used inside this component.
     */
    labels?: Labels;
    /**
     * Whether we want to hide the day field.
     *
     * **NOTE:** We will set the day to the _last_ day of the _selected_ month
     * if the day field is hidden. Please make sure to modify the passed date
     * value to fit different needs (e.g. if you want to set the _last_ day of
     * the _following_ month instead).
     */
    monthYearOnly?: boolean;
    /**
     * Listen for changes to the birthdate. Could be a string in the YYYY-MM-DD
     * format or `null`.
     */
    onChange: (date?: string | null | undefined) => unknown;
    /**
     * Additional styles applied to the root element of the component.
     */
    style?: StyleType;
    /**
     * Additional styles applied to the dropdowns.
     */
    dropdownStyle?: StyleType;
    /**
     * The locale to use for the month names. If not provided, the browser's
     * `navigator.language` value will be used.
     */
    locale?: string;
};
type State = {
    /**
     * The currently selected month.
     */
    month: string | null;
    /**
     * The currently selected day.
     */
    day: string | null;
    /**
     * The currently selected year.
     */
    year: string | null;
    /**
     * The error message to display (in case there's an invalid date).
     */
    error: string | null;
};
export declare const defaultLabels: Labels;
export default class BirthdayPicker extends React.Component<Props, State> {
    /**
     * Strings used for placeholders and error message. These are used this way
     * to support i18n.
     * NOTE: This is a field rather than state to avoid re-rendering the entire
     * component. Also, we don't need to use state because these strings are
     * only needed on mount.
     */
    labels: Labels;
    constructor(props: Props);
    /**
     * Calculates the initial state values based on the default value.
     */
    getStateFromDefault(): State;
    /**
     * Determines whether a given date is in the future.
     *
     * @param date - The Temporal.PlainDate to check.
     * @returns True if the provided date comes after today's date, false otherwise.
     */
    isFutureDate(date: Temporal.PlainDate): boolean;
    lastChangeValue: string | null | undefined;
    /**
     * Report changes back to the calling component, but only if the value
     * has actually changed since the last time it was reported
     * (or initialized).
     *
     * @param value the value to report back to the calling component.
     */
    reportChange: (value?: string | null | undefined) => void;
    /**
     * Handle a change to any of the input fields, confirming if the input is
     * valid, and then reporting the result back to the calling component via
     * reportChange.
     */
    handleChange: () => void;
    handleMonthChange: (month: string) => void;
    handleDayChange: (day: string) => void;
    handleYearChange: (year: string) => void;
    maybeRenderError(): React.ReactNode | null | undefined;
    monthsShort(): string[];
    renderMonth(): React.ReactNode;
    maybeRenderDay(): React.ReactNode | null | undefined;
    getMonthYearWidth(monthYearOnly: boolean | undefined): number;
    renderYear(): React.ReactNode;
    render(): React.ReactNode;
}
export {};
