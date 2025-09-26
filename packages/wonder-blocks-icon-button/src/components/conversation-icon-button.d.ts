import * as React from "react";
import type { ActivityIconButtonActionType, BaseIconButtonProps, IconButtonRef } from "../util/icon-button.types";
type Props = BaseIconButtonProps & {
    /**
     * The action type of the button. This determines the visual style of the
     * button.
     *
     * - `progressive` is used for actions that move the user forward in a flow.
     * - `neutral` is used for buttons that indicate a neutral action.
     */
    actionType?: ActivityIconButtonActionType;
    /**
     * The alternative text for the icon button. Use `aria-label` for when
     * there's no visible label for the button, such as when the button only
     * contains an icon.
     */
    "aria-label": string;
};
/**
 * `ConversationIconButton` is an icon button that is used in the context of
 * conversations, such as sending a message or performing an action related to a
 * conversation. This is useful in chat widgets, like the one used in Khanmigo.
 *
 * ```tsx
 * import microphone from "@phosphor-icons/core/bold/microphone-bold.svg";
 * import {ConversationIconButton} from "@osati-ai/wonder-blocks-icon-button";
 *
 * <ConversationIconButton
 *     icon={microphone}
 *     aria-label="Start a conversation"
 *     onClick={(e) => console.log("Hello, world!")}
 * />
 * ```
 */
export declare const ConversationIconButton: React.ForwardRefExoticComponent<Props & React.RefAttributes<IconButtonRef>>;
export {};
