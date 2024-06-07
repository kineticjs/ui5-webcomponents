var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
// Deps
import MainButton from "@ui5/webcomponents/dist/Button.js";
// Template
import template from "./generated/templates/ButtonTemplate.lit.js";
// Styles
import styles from "./generated/themes/Button.css.js";
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
let Button = class Button extends UI5Element {
};
__decorate([
    property({ type: Boolean })
], Button.prototype, "disabled", void 0);
__decorate([
    property()
], Button.prototype, "icon", void 0);
__decorate([
    property()
], Button.prototype, "endIcon", void 0);
Button = __decorate([
    customElement({
        tag: "ui5-ai-button",
        renderer: litRender,
        template,
        styles,
        dependencies: [MainButton],
    })
], Button);
Button.define();
export default Button;
//# sourceMappingURL=Button.js.map