var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
/**
 * @class
 *
 * ### Overview
 *
 * `ui5-ai-button-state` is the item to use for defining states of `ui5-ai-button` components.
 *
 * ### Usage
 *
 * `ui5-si-button-state` is an abstract element, representing a state of `ui5-ai-button`. It is meant to be used in the `states` slot
 * of `ui5-ai-button` and should be used as standalone component.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/AiButtonState.js";`
 * @constructor
 * @extends UI5Element
 * @abstract
 * @since 2.0
 * @public
 */
let ButtonState = 
/**
 * @experimental
 */
class ButtonState extends UI5Element {
};
__decorate([
    property()
], ButtonState.prototype, "name", void 0);
__decorate([
    property()
], ButtonState.prototype, "text", void 0);
__decorate([
    property()
], ButtonState.prototype, "icon", void 0);
__decorate([
    property()
], ButtonState.prototype, "endIcon", void 0);
ButtonState = __decorate([
    customElement("ui5-ai-button-state")
    /**
     * @experimental
     */
], ButtonState);
ButtonState.define();
export default ButtonState;
//# sourceMappingURL=ButtonState.js.map