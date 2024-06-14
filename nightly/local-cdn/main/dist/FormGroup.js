var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import FormItemSpacing from "./types/FormItemSpacing.js";
/**
 * @class
 *
 * ### Overview
 *
 * The FormGroup (ui5-form-group) represents a group inside the Form (ui5-form) component
 * and it consists of FormItem (ui5-form-item) components.
 *
 * The layout of the FormGroup is mostly defined and controlled by the overarching Form (ui5-form) component.
 * Still, one can influence the layout via the FormGroup's `columnSpan` property,
 * that defines how many columns the group should expand to.
 *
 * ### Usage
 *
 * Тhe FormGroup (ui5-form-group) allows to split a Form into groups,
 * e.g to group FormItems that logically belong together.
 *
 * ### ES6 Module Import
 *
 * - import @ui5/webcomponents/dist/FormGroup.js";
 *
 * @public
 * @implements {IFormItem}
 * @since 2.0.0
 * @extends UI5Element
 */
let FormGroup = class FormGroup extends UI5Element {
    onBeforeRendering() {
        this.processFormItems();
    }
    processFormItems() {
        this.items.forEach((item) => {
            item.labelSpan = this.labelSpan;
            item.itemSpacing = this.itemSpacing;
        });
    }
    get isGroup() {
        return true;
    }
};
__decorate([
    property()
], FormGroup.prototype, "headerText", void 0);
__decorate([
    property({ validator: Integer, defaultValue: undefined })
], FormGroup.prototype, "columnSpan", void 0);
__decorate([
    slot({
        type: HTMLElement,
        "default": true,
    })
], FormGroup.prototype, "items", void 0);
__decorate([
    property({ validator: Integer, defaultValue: 1 })
], FormGroup.prototype, "colsS", void 0);
__decorate([
    property({ validator: Integer, defaultValue: 1 })
], FormGroup.prototype, "colsM", void 0);
__decorate([
    property({ validator: Integer, defaultValue: 1 })
], FormGroup.prototype, "colsL", void 0);
__decorate([
    property({ validator: Integer, defaultValue: 1 })
], FormGroup.prototype, "colsXl", void 0);
__decorate([
    property({ type: FormItemSpacing, defaultValue: FormItemSpacing.Normal })
], FormGroup.prototype, "itemSpacing", void 0);
__decorate([
    property({ type: String, defaultValue: "S12 M4 L4 XL4" })
], FormGroup.prototype, "labelSpan", void 0);
FormGroup = __decorate([
    customElement("ui5-form-group")
], FormGroup);
FormGroup.define();
export default FormGroup;
//# sourceMappingURL=FormGroup.js.map