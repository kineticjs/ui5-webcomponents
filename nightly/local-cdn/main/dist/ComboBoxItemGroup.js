var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
/**
 * @class
 * The `ui5-cb-group-item` is type of suggestion item,
 * that can be used to split the `ui5-combobox` suggestions into groups.
 * @constructor
 * @extends UI5Element
 * @abstract
 * @public
 * @implements {IComboBoxItem}
 * @since 1.0.0-rc.15
 */
let ComboBoxItemGroup = class ComboBoxItemGroup extends UI5Element {
    constructor() {
        super(...arguments);
        /**
         * Defines the text of the component.
         * @default ""
         * @public
         */
        this.text = "";
        /**
         * Indicates whether the item is focused
         * @protected
         */
        this.focused = false;
    }
    /**
     * Used to avoid tag name checks
     * @protected
     */
    get isGroupItem() {
        return true;
    }
    get stableDomRef() {
        return this.getAttribute("stable-dom-ref") || `${this._id}-stable-dom-ref`;
    }
    get _isVisible() {
        return this.items.some(item => item._isVisible);
    }
};
__decorate([
    property()
], ComboBoxItemGroup.prototype, "text", void 0);
__decorate([
    property({ type: Boolean })
], ComboBoxItemGroup.prototype, "focused", void 0);
__decorate([
    slot({
        "default": true,
        invalidateOnChildChange: true,
        type: HTMLElement,
    })
], ComboBoxItemGroup.prototype, "items", void 0);
ComboBoxItemGroup = __decorate([
    customElement("ui5-cb-item-group")
], ComboBoxItemGroup);
ComboBoxItemGroup.define();
const isInstanceOfComboBoxItemGroup = (object) => {
    return "isGroupItem" in object;
};
export { isInstanceOfComboBoxItemGroup };
export default ComboBoxItemGroup;
//# sourceMappingURL=ComboBoxItemGroup.js.map