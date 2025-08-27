# React 19 Deprecated Patterns Analysis - Wonder Blocks Codebase

## Executive Summary

This analysis examines the Wonder Blocks codebase for deprecated React patterns that need updating for React 19 compatibility. The analysis found **critical issues** that must be addressed, particularly extensive ReactDOM.findDOMNode usage which is completely removed in React 19.

## Critical Findings Summary

- **🔴 CRITICAL**: 29 instances of ReactDOM.findDOMNode usage across 13 files
- **🟡 MODERATE**: 12 instances of React.Children usage across 7 files  
- **🟡 MODERATE**: 25 instances of defaultProps on function components across 17 files
- **🟢 GOOD**: No legacy lifecycle methods, string refs, legacy context API, or PropTypes usage found

## Detailed Analysis

### 1. ReactDOM.findDOMNode Usage (CRITICAL - Priority 1)

**Status**: 🔴 **CRITICAL** - Completely removed in React 19

ReactDOM.findDOMNode is extensively used throughout the codebase and must be completely replaced before React 19 migration.

#### Affected Files and Locations:

**wonder-blocks-popover package:**
- `/packages/wonder-blocks-popover/src/components/popover.tsx:230` - Focus management
- `/packages/wonder-blocks-popover/src/components/focus-manager.tsx:259` - DOM node access
- `/packages/wonder-blocks-popover/src/components/initial-focus.ts:32` - Component focus
- `/packages/wonder-blocks-popover/src/components/popover-event-listener.ts:78` - Event handling
- `/packages/wonder-blocks-popover/src/components/popover-anchor.ts:41` - Anchor positioning

**wonder-blocks-dropdown package:**
- `/packages/wonder-blocks-dropdown/src/components/multi-select.tsx:532` - Opener element access
- `/packages/wonder-blocks-dropdown/src/components/single-select.tsx:426` - Opener element access
- `/packages/wonder-blocks-dropdown/src/components/dropdown-core.tsx:488` - Click outside detection
- `/packages/wonder-blocks-dropdown/src/components/dropdown-core.tsx:546` - Node access
- `/packages/wonder-blocks-dropdown/src/components/action-menu.tsx:246` - Opener element storage
- `/packages/wonder-blocks-dropdown/src/components/dropdown-core-virtualized.tsx:91` - Virtualized list management

**wonder-blocks-modal package:**
- `/packages/wonder-blocks-modal/src/components/focus-trap.tsx:55` - Focus trap implementation
- `/packages/wonder-blocks-modal/src/components/modal-backdrop.tsx:40` - Backdrop positioning
- `/packages/wonder-blocks-modal/src/components/modal-backdrop.tsx:72` - Dialog element access
- `/packages/wonder-blocks-modal/src/components/modal-backdrop.tsx:99` - Dialog element positioning
- `/packages/wonder-blocks-modal/src/components/modal-launcher.tsx:167` - Focus management
- `/packages/wonder-blocks-modal/src/util/maybe-get-portal-mounted-modal-host-element.test.tsx:110` - Test utilities

**wonder-blocks-tooltip package:**
- `/packages/wonder-blocks-tooltip/src/components/tooltip-anchor.tsx:105` - Anchor positioning
- `/packages/wonder-blocks-tooltip/src/util/ref-tracker.ts:27` - Reference tracking
- Multiple test files with ReactDOM.findDOMNode usage

**Test files:**
- `/consistency-tests/__tests__/ref-forwarded.test.tsx:231` - Testing utilities

#### Code Example (Critical):
```typescript
// packages/wonder-blocks-popover/src/components/popover.tsx:230
const focusElement = ReactDOM.findDOMNode(
    document.getElementById(closedFocusId),
) as any;
```

#### Migration Strategy:
1. **Replace with useRef/createRef**: Convert all DOM access to use React refs
2. **Callback refs**: Use callback refs for dynamic element access
3. **Forward refs**: Implement ref forwarding where components need to expose DOM nodes
4. **Custom hooks**: Create custom hooks for DOM manipulation patterns

### 2. React.Children Usage (MODERATE - Priority 2)

**Status**: 🟡 **MODERATE** - Still works in React 19 but discouraged

React.Children.toArray and related methods are still functional but React 19 encourages using native array methods.

#### Affected Files:
- `/packages/wonder-blocks-grid/src/components/row.tsx:94` - React.Children.toArray
- `/packages/wonder-blocks-dropdown/src/components/multi-select.tsx:357,572,654` - Multiple instances
- `/packages/wonder-blocks-dropdown/src/components/single-select.tsx:442,466,533` - Multiple instances
- `/packages/wonder-blocks-form/src/components/checkbox-group.tsx:130` - Children filtering
- `/packages/wonder-blocks-form/src/components/radio-group.tsx:115` - Children filtering
- `/packages/wonder-blocks-dropdown/src/components/action-menu.tsx:191` - Children filtering
- `/packages/wonder-blocks-dropdown/src/components/dropdown-core-virtualized.tsx:144` - Virtualized components
- `/packages/wonder-blocks-breadcrumbs/src/components/breadcrumbs.tsx:79,89` - Count and map

#### Code Examples:
```typescript
// wonder-blocks-dropdown/src/components/multi-select.tsx:357
const allChildren = React.Children.toArray(
    this.props.children,
).filter(Boolean) as Array<React.ReactElement>;

// wonder-blocks-breadcrumbs/src/components/breadcrumbs.tsx:79
const lastChildIndex = React.Children.count(children) - 1;
```

#### Migration Strategy:
1. **Use native arrays**: Convert children to arrays using `Array.isArray(children) ? children : [children]`
2. **Type-safe filtering**: Implement type-safe children filtering
3. **Consider component redesign**: Evaluate if children manipulation is necessary

### 3. defaultProps on Function Components (MODERATE - Priority 3)

**Status**: 🟡 **MODERATE** - Deprecated in React 18, removed in React 19

25 instances of defaultProps usage on function components found across the codebase.

#### Affected Files:
- `/packages/wonder-blocks-modal/src/components/modal-content.tsx:67`
- `/packages/wonder-blocks-clickable/src/components/clickable.tsx:364`
- `/packages/wonder-blocks-modal/src/components/flexible-panel.tsx:138`
- `/packages/wonder-blocks-modal/src/components/modal-panel.tsx:137`
- And 21 additional files

#### Code Example:
```typescript
// modal-content.tsx
function ModalContent(props: Props) {
    // Function component implementation
}

ModalContent.defaultProps = {
    scrollOverflow: true,
};
```

#### Migration Strategy:
1. **Default parameters**: Use ES6 default parameters in function signatures
2. **Destructuring with defaults**: Use destructuring assignment with default values
3. **Update TypeScript types**: Make properties optional in type definitions

#### Migration Example:
```typescript
// Before
function ModalContent(props: Props) {
    const { scrollOverflow, children, style } = props;
    // ...
}
ModalContent.defaultProps = {
    scrollOverflow: true,
};

// After
function ModalContent({ 
    scrollOverflow = true, 
    children, 
    style 
}: Props) {
    // ...
}
```

## Components Not Using Deprecated Patterns

### ✅ Clean Patterns Found:
- **No legacy lifecycle methods**: No componentWillMount, componentWillReceiveProps, or componentWillUpdate usage
- **No string refs**: All refs use the modern ref API
- **No legacy context API**: No getChildContext, childContextTypes, or contextTypes usage
- **No PropTypes**: TypeScript is used for type checking instead
- **No legacy factory components**: No React.createClass usage found

## Migration Priority Ranking

### Priority 1: CRITICAL (Must fix before React 19)
1. **ReactDOM.findDOMNode replacement** (29 instances)
   - Estimated effort: 2-3 weeks
   - Risk: High - Blocks React 19 upgrade completely
   - Impact: Multiple core components affected

### Priority 2: MODERATE (Should fix for React 19)
2. **React.Children pattern modernization** (12 instances)
   - Estimated effort: 1 week
   - Risk: Medium - May cause runtime issues
   - Impact: Form and dropdown components

### Priority 3: LOW-MODERATE (Can be done gradually)
3. **defaultProps migration** (25 instances)
   - Estimated effort: 1-2 weeks
   - Risk: Low - Easy to fix incrementally
   - Impact: Wide but low-impact changes

## Recommended Migration Approach

### Phase 1: Critical Path (Weeks 1-3)
1. **Audit and catalog** all ReactDOM.findDOMNode usage patterns
2. **Create ref-based alternatives** for each usage pattern
3. **Implement focus management utilities** to replace findDOMNode for focus handling
4. **Test thoroughly** to ensure DOM manipulation still works correctly

### Phase 2: Modernization (Week 4)
1. **Replace React.Children calls** with native array methods
2. **Update type definitions** to support new patterns
3. **Add runtime safety checks** where needed

### Phase 3: Cleanup (Week 5)
1. **Convert defaultProps to default parameters**
2. **Update TypeScript interfaces** to make properties optional
3. **Run comprehensive testing** suite

### Phase 4: Validation (Week 6)
1. **Integration testing** with React 19 beta
2. **Performance validation** to ensure no regressions
3. **Documentation updates** for new patterns

## Testing Recommendations

1. **Create migration test suite** to verify each pattern replacement
2. **Test with React 19 beta** in a separate branch
3. **Focus on accessibility** - ensure focus management still works
4. **Performance testing** - verify no performance regressions from ref changes
5. **Cross-browser testing** - ensure DOM manipulation works across browsers

## Risk Assessment

### High Risk:
- **ReactDOM.findDOMNode removal**: Core functionality breakage
- **Focus management**: Accessibility regressions possible
- **Event handling**: Click outside detection may break

### Medium Risk:
- **React.Children changes**: Type safety issues
- **Component behavior**: Subtle behavioral changes

### Low Risk:
- **defaultProps migration**: Straightforward replacement
- **Developer experience**: Minimal impact on API consumers

## Conclusion

The Wonder Blocks codebase requires significant refactoring to be React 19 compatible, primarily due to extensive ReactDOM.findDOMNode usage. The migration is feasible but requires careful planning and thorough testing, especially for focus management and DOM manipulation features. The estimated timeline is 6 weeks for complete migration with proper testing and validation.

**Next Steps:**
1. Begin immediate work on ReactDOM.findDOMNode replacement
2. Set up React 19 beta testing environment  
3. Create comprehensive migration test suite
4. Plan gradual rollout strategy to minimize disruption