import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-ai-button` component represents a button used in AI-related scenarios.
 * It enables users to trigger actions by clicking or tapping the `ui5-ai-button`, or by pressing
 * certain keyboard keys, such as Enter.
 *
 * ### Usage
 *
 * For the `ui5-ai-button` UI, you can define one or more states of the button by placing `ai-button-state` components in its default slot.
 * Each state have a key that identifies it and can have text, icon, end icon, next state and hasPopup type defined (in any combination) depending on the state purpose.
 *
 * You can choose from a set of predefined designs that offer different styling to correspond to the triggered action.
 *
 * You can set the `ui5-ai-button` as enabled or disabled. An enabled `ui5-ai-button` can be pressed by clicking or tapping it. On press `ui5-ai-button` changes its state to the next one (if defined).
 * the mouse cursor. A disabled `ui5-ai-button` appears inactive and cannot be pressed.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents-ai/dist/Button.js";`
 *
 * @constructor
 * @extends UI5Element
 * @since 2.0
 * @public
 */
declare class Button extends UI5Element {
    /**
     * Defines whether the component is disabled.
     * A disabled component can't be pressed or
     * focused, and it is not in the tab chain.
     * @default false
     * @public
     */
    disabled: boolean;
    icon: string;
    endIcon: string;
}
export default Button;
