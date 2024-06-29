var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import Button from "./Button.js";
import ToolbarItem from "./ToolbarItem.js";
import ToolbarButtonTemplate from "./generated/templates/ToolbarButtonTemplate.lit.js";
import ToolbarPopoverButtonTemplate from "./generated/templates/ToolbarPopoverButtonTemplate.lit.js";
import ToolbarButtonPopoverCss from "./generated/themes/ToolbarButtonPopover.css.js";
import { registerToolbarItem } from "./ToolbarRegistry.js";
/**
 * @class
 *
 * ### Overview
 * The `ui5-toolbar-button` represents an abstract action,
 * used in the `ui5-toolbar`.
 *
 * ### ES6 Module Import
 * `import "@ui5/webcomponents/dist/ToolbarButton.js";`
 * @constructor
 * @abstract
 * @extends ToolbarItem
 * @public
 * @since 1.17.0
 */
let ToolbarButton = class ToolbarButton extends ToolbarItem {
    constructor() {
        super(...arguments);
        /**
         * Defines if the action is disabled.
         *
         * **Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.
         * @default false
         * @public
         */
        this.disabled = false;
        /**
         * Defines the action design.
         * @default "Default"
         * @public
         */
        this.design = "Default";
        /**
         * Defines the additional accessibility attributes that will be applied to the component.
         *
         * The following fields are supported:
         *
         * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
         * Accepts the following string values: `true` or `false`
         *
         * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
         * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
         *
         * - **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
         * Accepts a lowercase string value.
         *
         * @default {}
         * @public
         */
        this.accessibilityAttributes = {};
        /**
         * Button text
         * @public
         * @default ""
         */
        this.text = "";
    }
    get styles() {
        return {
            width: this.width,
            display: this.hidden ? "none" : "inline-block",
        };
    }
    get containsText() {
        return true;
    }
    static get toolbarTemplate() {
        return ToolbarButtonTemplate;
    }
    static get toolbarPopoverTemplate() {
        return ToolbarPopoverButtonTemplate;
    }
    get subscribedEvents() {
        const map = new Map();
        map.set("click", { preventClosing: false });
        return map;
    }
};
__decorate([
    property({ type: Boolean })
], ToolbarButton.prototype, "disabled", void 0);
__decorate([
    property()
], ToolbarButton.prototype, "design", void 0);
__decorate([
    property()
], ToolbarButton.prototype, "icon", void 0);
__decorate([
    property()
], ToolbarButton.prototype, "endIcon", void 0);
__decorate([
    property()
], ToolbarButton.prototype, "tooltip", void 0);
__decorate([
    property()
], ToolbarButton.prototype, "accessibleName", void 0);
__decorate([
    property()
], ToolbarButton.prototype, "accessibleNameRef", void 0);
__decorate([
    property({ type: Object })
], ToolbarButton.prototype, "accessibilityAttributes", void 0);
__decorate([
    property()
], ToolbarButton.prototype, "text", void 0);
__decorate([
    property()
], ToolbarButton.prototype, "width", void 0);
ToolbarButton = __decorate([
    customElement({
        tag: "ui5-toolbar-button",
        dependencies: [Button],
        styles: ToolbarButtonPopoverCss,
    })
    /**
     * Fired when the component is activated either with a
     * mouse/tap or by using the Enter or Space key.
     *
     * **Note:** The event will not be fired if the `disabled`
     * property is set to `true`.
     * @public
     */
    ,
    event("click")
], ToolbarButton);
registerToolbarItem(ToolbarButton);
ToolbarButton.define();
export default ToolbarButton;
//# sourceMappingURL=ToolbarButton.js.map