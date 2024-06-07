var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NotificationList_1;
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import "./NotificationListItemBase.js";
import NotificationListInternal from "./NotificationListInternal.js";
// Template
import NotificationListTemplate from "./generated/templates/NotificationListTemplate.lit.js";
// Texts
import { NOTIFICATION_LIST_ACCESSIBLE_NAME, } from "./generated/i18n/i18n-defaults.js";
/**
 * @class
 * ### Overview
 * The `ui5-notification-list` web component represents
 * a container for `ui5-li-notification-group` and `ui5-li-notification`.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/NotificationList.js";``
 * @constructor
 * @extends UI5Element
 * @since 2.0
 * @public
 */
let NotificationList = NotificationList_1 = class NotificationList extends UI5Element {
    get _accessibleName() {
        return NotificationList_1.i18nFioriBundle.getText(NOTIFICATION_LIST_ACCESSIBLE_NAME);
    }
    getEnabledItems() {
        return this.innerList?.getEnabledItems() || [];
    }
    get innerList() {
        return this.shadowRoot?.querySelector("[ui5-notification-list-internal]");
    }
    _onItemClick(e) {
        const item = e.detail.item;
        if (!this.fireEvent("item-click", { item }, true)) {
            e.preventDefault();
        }
    }
    _onItemClose(e) {
        const item = e.detail.item;
        if (!this.fireEvent("item-close", { item }, true)) {
            e.preventDefault();
        }
    }
    _onItemToggle(e) {
        const item = e.detail.item;
        if (!this.fireEvent("item-toggle", { item }, true)) {
            e.preventDefault();
        }
    }
    _onLoadMore() {
        this.fireEvent("load-more");
    }
    static async onDefine() {
        NotificationList_1.i18nFioriBundle = await getI18nBundle("@ui5/webcomponents-fiori");
    }
};
__decorate([
    slot({ type: HTMLElement, "default": true })
], NotificationList.prototype, "items", void 0);
__decorate([
    property()
], NotificationList.prototype, "noDataText", void 0);
NotificationList = NotificationList_1 = __decorate([
    customElement({
        tag: "ui5-notification-list",
        renderer: litRender,
        languageAware: true,
        styles: [],
        template: NotificationListTemplate,
        dependencies: [
            NotificationListInternal,
        ],
    })
    /**
     * Fired when an item is clicked.
     * @allowPreventDefault
     * @param {HTMLElement} item The clicked item.
     * @public
     */
    ,
    event("item-click", {
        detail: {
            /**
             * @public
             */
            item: { type: HTMLElement },
        },
    })
    /**
     * Fired when the `Close` button of any item is clicked.
     *
     * @param {HTMLElement} item the item about to be closed.
     * @public
     */
    ,
    event("item-close", {
        detail: {
            /**
             * @public
             */
            item: { type: HTMLElement },
        },
    })
    /**
     * Fired when an item is toggled.
     *
     * @param {HTMLElement} item the toggled item.
     * @public
     */
    ,
    event("item-toggle", {
        detail: {
            /**
             * @public
             */
            item: { type: HTMLElement },
        },
    })
], NotificationList);
NotificationList.define();
export default NotificationList;
//# sourceMappingURL=NotificationList.js.map