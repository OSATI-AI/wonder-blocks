import * as React from "react";
import { type AriaProps, type StyleType } from "@osati-ai/wonder-blocks-core";
import DropdownOpener from "./dropdown-opener";
import type { Item, DropdownItem, OpenerProps } from "../util/types";
type Props = AriaProps & Readonly<{
    /**
     * The items in this dropdown.
     */
    children?: Array<Item> | Item;
    /**
     * Text for the opener of this menu.
     */
    menuText: string;
    /**
     * Can be used to override the state of the ActionMenu by parent elements
     */
    opened?: boolean;
    /**
     * In controlled mode, use this prop in case the parent needs to be notified
     * when the menu opens/closes.
     */
    onToggle?: (opened: boolean) => unknown;
    /**
     * A callback that returns items that are newly selected. Use only if this
     * menu contains select items (and make sure selectedValues is defined).
     */
    onChange?: (selectedItems: Array<string>) => unknown;
    /**
     * The values of the items that are currently selected. Use only if this
     * menu contains select items (and make sure onChange is defined).
     */
    selectedValues?: Array<string>;
    /**
     * Whether this menu should be left-aligned or right-aligned with the
     * opener component. Defaults to left-aligned.
     */
    alignment: "left" | "right";
    /**
     * Whether this component is disabled. A disabled dropdown may not be opened
     * and does not support interaction. Defaults to false.
     */
    disabled: boolean;
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * Styling specific to the dropdown component that isn't part of the opener,
     * passed by the specific implementation of the dropdown menu,
     */
    dropdownStyle?: StyleType;
    /**
     * Optional styling for the entire dropdown component.
     */
    style?: StyleType;
    /**
     * Optional CSS classes for the entire dropdown component.
     */
    className?: string;
    /**
     * The child function that returns the anchor the ActionMenu will be
     * activated by. This function takes eventState, which allows the opener
     * element to access pointer event state.
     */
    opener?: (openerProps: OpenerProps) => React.ReactElement<any>;
    /**
     * Unique identifier attached to the menu dropdown. If used, we need to
     * guarantee that the ID is unique within everything rendered on a page.
     * If one is not provided, one is auto-generated. It is used for the
     * opener's `aria-controls` attribute for screenreaders.
     */
    dropdownId?: string;
    /**
     * Unique identifier attached to the field control. If used, we need to
     * guarantee that the ID is unique within everything rendered on a page.
     * If one is not provided, one is auto-generated.
     */
    id?: string;
}>;
type State = Readonly<{
    /**
     * Whether or not the dropdown is open.
     */
    opened: boolean;
}>;
type DefaultProps = Readonly<{
    alignment: Props["alignment"];
    disabled: Props["disabled"];
}>;
/**
 * A menu that consists of various types of items.
 *
 * ## Usage
 *
 * ```jsx
 * import {ActionMenu, ActionItem} from "@osati-ai/wonder-blocks-dropdown";
 *
 * <ActionMenu menuText="Menu">
 *  <ActionItem href="/profile" label="Profile" />
 *  <ActionItem label="Settings" onClick={() => {}} />
 * </ActionMenu>
 * ```
 */
export default class ActionMenu extends React.Component<Props, State> {
    openerElement?: HTMLElement;
    static defaultProps: DefaultProps;
    state: State;
    /**
     * Used to sync the `opened` state when this component acts as a controlled
     * component
     */
    static getDerivedStateFromProps(props: Props, state: State): Partial<State> | null;
    handleItemSelected: () => void;
    handleOpenChanged: (opened: boolean) => void;
    handleOptionSelected: (selectedValue: string) => void;
    getMenuItems(): Array<DropdownItem>;
    handleOpenerRef: (node: HTMLElement | null) => void;
    handleClick: (e: React.SyntheticEvent) => void;
    renderOpener(numItems: number, dropdownId: string): React.ReactElement<React.ComponentProps<typeof DropdownOpener>>;
    render(): React.ReactNode;
}
export {};
