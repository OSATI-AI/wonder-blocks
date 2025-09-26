import * as React from "react";
import type { ChildrenProps, ClickableState } from "@osati-ai/wonder-blocks-clickable";
import type { ButtonActionType, ButtonKind, ButtonSize, ButtonProps, ButtonRef } from "../util/button.types";
type Props = ButtonProps & ChildrenProps & ClickableState;
declare const ButtonCore: React.ForwardRefExoticComponent<Props & React.RefAttributes<ButtonRef>>;
export default ButtonCore;
type ButtonStylesKey = "default" | "pressed" | "disabled";
export declare const _generateStyles: (actionType: ButtonActionType | undefined, kind: ButtonKind, size: ButtonSize) => Record<ButtonStylesKey, object>;
