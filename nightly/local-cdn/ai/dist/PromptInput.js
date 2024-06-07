var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import Label from "@ui5/webcomponents/dist/Label.js";
import Input from "@ui5/webcomponents/dist/Input.js";
import Button from "@ui5/webcomponents/dist/Button.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
/**
 * @class
 *
 * ### Overview
 *
 * The PromptInput is an AI component.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents-ai/dist/PromptInput.js";`
 * @constructor
 * @extends UI5Element
 * @since 2.0
 * @public
 */
let PromptInput = class PromptInput extends UI5Element {
};
__decorate([
    property()
], PromptInput.prototype, "value", void 0);
PromptInput = __decorate([
    customElement({
        tag: "ui5-ai-prompt-input",
        renderer: litRender,
        dependencies: [
            Input,
            Label,
            Button,
        ],
    })
], PromptInput);
PromptInput.define();
export default PromptInput;
//# sourceMappingURL=PromptInput.js.map