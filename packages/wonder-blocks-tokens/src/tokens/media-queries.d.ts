/**
 * A default set of media queries to use for different screen sizes.
 *
 * Breakpoint documentation: https://khanacademy.atlassian.net/wiki/spaces/WB/pages/2099970518/Layout+Breakpoints
 *
 */
export declare const breakpoint: {
    width: {
        readonly xsMax: 567;
        readonly smMin: 568;
        readonly smMax: 681;
        readonly mdMin: 682;
        readonly mdMax: 1023;
        readonly lgMin: 1024;
    };
    mediaQuery: {
        readonly xs: "@media screen and (max-width: 567px) /* breakpoint.mediaQuery.xs */";
        readonly sm: "@media screen and (min-width: 568px) and (max-width: 681px) /* breakpoint.mediaQuery.sm */";
        readonly md: "@media screen and (min-width: 682px) and (max-width: 1023px) /* breakpoint.mediaQuery.md */";
        readonly lg: "@media screen and (min-width: 682px) and (max-width: 1024px) /* breakpoint.mediaQuery.lg */";
        readonly xl: "@media screen and (min-width: 1024px) /* breakpoint.mediaQuery.xl */";
        readonly xsOrSmaller: "@media screen and (max-width: 567px) /* breakpoint.mediaQuery.xsOrSmaller */";
        readonly smOrSmaller: "@media screen and (max-width: 681px) /* breakpoint.mediaQuery.smOrSmaller */";
        readonly mdOrSmaller: "@media screen and (max-width: 1023px) /* breakpoint.mediaQuery.mdOrSmaller */";
        readonly lgOrSmaller: "@media screen and (max-width: 1024px) /* breakpoint.mediaQuery.lgOrSmaller */";
        readonly smOrLarger: "@media screen and (min-width: 568px) /* breakpoint.mediaQuery.smOrLarger */";
        readonly mdOrLarger: "@media screen and (min-width: 682px) /* breakpoint.mediaQuery.mdOrLarger */";
        readonly lgOrLarger: "@media screen and (min-width: 1024px) /* breakpoint.mediaQuery.lgOrLarger */";
    };
};
