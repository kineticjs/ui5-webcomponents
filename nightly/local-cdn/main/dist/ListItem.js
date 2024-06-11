var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ListItem_1;
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import { getEventMark } from "@ui5/webcomponents-base/dist/MarkedEvents.js";
import { isSpace, isEnter, isDelete, isF2, } from "@ui5/webcomponents-base/dist/Keys.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import { isDesktop } from "@ui5/webcomponents-base/dist/Device.js";
import getActiveElement from "@ui5/webcomponents-base/dist/util/getActiveElement.js";
import { getFirstFocusableElement } from "@ui5/webcomponents-base/dist/util/FocusableElements.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import "@ui5/webcomponents-icons/dist/decline.js";
import "@ui5/webcomponents-icons/dist/edit.js";
import Highlight from "./types/Highlight.js";
import ListItemType from "./types/ListItemType.js";
import ListSelectionMode from "./types/ListSelectionMode.js";
import ListItemBase from "./ListItemBase.js";
import RadioButton from "./RadioButton.js";
import CheckBox from "./CheckBox.js";
import Button from "./Button.js";
import { DELETE, ARIA_LABEL_LIST_ITEM_CHECKBOX, ARIA_LABEL_LIST_ITEM_RADIO_BUTTON, LIST_ITEM_SELECTED, LIST_ITEM_NOT_SELECTED, } from "./generated/i18n/i18n-defaults.js";
import ListItemAccessibleRole from "./types/ListItemAccessibleRole.js";
// Styles
import styles from "./generated/themes/ListItem.css.js";
import listItemAdditionalTextCss from "./generated/themes/ListItemAdditionalText.css.js";
// Icons
import "@ui5/webcomponents-icons/dist/slim-arrow-right.js";
/**
 * @class
 * A class to serve as a base
 * for the `ListItemStandard` and `ListItemCustom` classes.
 * @constructor
 * @abstract
 * @extends ListItemBase
 * @public
 */
let ListItem = ListItem_1 = class ListItem extends ListItemBase {
    constructor() {
        super();
        this.deactivateByKey = (e) => {
            if (isEnter(e)) {
                this.deactivate();
            }
        };
        this.deactivate = () => {
            if (this.active) {
                this.active = false;
            }
        };
        const handleTouchStartEvent = (e) => {
            this._onmousedown(e);
        };
        this._ontouchstart = {
            handleEvent: handleTouchStartEvent,
            passive: true,
        };
    }
    onBeforeRendering() {
        super.onBeforeRendering();
        this.actionable = (this.type === ListItemType.Active || this.type === ListItemType.Navigation) && (this._selectionMode !== ListSelectionMode.Delete);
    }
    onEnterDOM() {
        document.addEventListener("mouseup", this.deactivate);
        document.addEventListener("touchend", this.deactivate);
        document.addEventListener("keyup", this.deactivateByKey);
        if (isDesktop()) {
            this.setAttribute("desktop", "");
        }
    }
    onExitDOM() {
        document.removeEventListener("mouseup", this.deactivate);
        document.removeEventListener("keyup", this.deactivateByKey);
        document.removeEventListener("touchend", this.deactivate);
    }
    async _onkeydown(e) {
        super._onkeydown(e);
        const itemActive = this.type === ListItemType.Active, itemNavigated = this.typeNavigation;
        if ((isSpace(e) || isEnter(e)) && (itemActive || itemNavigated)) {
            this.activate();
        }
        if (isF2(e)) {
            const activeElement = getActiveElement();
            const focusDomRef = this.getFocusDomRef();
            if (activeElement === focusDomRef) {
                const firstFocusable = await getFirstFocusableElement(focusDomRef);
                firstFocusable?.focus();
            }
            else {
                focusDomRef.focus();
            }
        }
    }
    _onkeyup(e) {
        super._onkeyup(e);
        if (isSpace(e) || isEnter(e)) {
            this.deactivate();
        }
        if (this.modeDelete && isDelete(e)) {
            this.onDelete();
        }
    }
    _onmousedown(e) {
        if (getEventMark(e) === "button") {
            return;
        }
        this.activate();
    }
    _onmouseup(e) {
        if (getEventMark(e) === "button") {
            return;
        }
        this.deactivate();
    }
    _ontouchend(e) {
        this._onmouseup(e);
    }
    _onfocusout() {
        this.deactivate();
    }
    _ondragstart(e) {
        if (!e.dataTransfer) {
            return;
        }
        if (e.target === this._listItem) {
            this.setAttribute("data-moving", "");
            e.dataTransfer.dropEffect = "move";
            e.dataTransfer.effectAllowed = "move";
        }
    }
    _ondragend(e) {
        if (e.target === this._listItem) {
            this.removeAttribute("data-moving");
        }
    }
    /**
     * Called when selection components in Single (ui5-radio-button)
     * and Multi (ui5-checkbox) selection modes are used.
     */
    onMultiSelectionComponentPress(e) {
        if (this.isInactive) {
            return;
        }
        this.fireEvent("_selection-requested", { item: this, selected: e.target.checked, selectionComponentPressed: true });
    }
    onSingleSelectionComponentPress(e) {
        if (this.isInactive) {
            return;
        }
        this.fireEvent("_selection-requested", { item: this, selected: !e.target.checked, selectionComponentPressed: true });
    }
    activate() {
        if (this.type === ListItemType.Active || this.type === ListItemType.Navigation) {
            this.active = true;
        }
    }
    onDelete() {
        this.fireEvent("_selection-requested", { item: this, selectionComponentPressed: false });
    }
    onDetailClick() {
        this.fireEvent("detail-click", { item: this, selected: this.selected });
    }
    fireItemPress(e) {
        if (this.isInactive) {
            return;
        }
        super.fireItemPress(e);
    }
    get isInactive() {
        return this.type === ListItemType.Inactive || this.type === ListItemType.Detail;
    }
    get placeSelectionElementBefore() {
        return this._selectionMode === ListSelectionMode.Multiple
            || this._selectionMode === ListSelectionMode.SingleStart;
    }
    get placeSelectionElementAfter() {
        return !this.placeSelectionElementBefore
            && (this._selectionMode === ListSelectionMode.SingleEnd || this._selectionMode === ListSelectionMode.Delete);
    }
    get modeSingleSelect() {
        return [
            ListSelectionMode.SingleStart,
            ListSelectionMode.SingleEnd,
            ListSelectionMode.Single,
        ].includes(this._selectionMode);
    }
    get modeMultiple() {
        return this._selectionMode === ListSelectionMode.Multiple;
    }
    get modeDelete() {
        return this._selectionMode === ListSelectionMode.Delete;
    }
    /**
     * Used in UploadCollectionItem
     */
    get renderDeleteButton() {
        return this.modeDelete;
    }
    /**
     * End
     */
    get typeDetail() {
        return this.type === ListItemType.Detail;
    }
    get typeNavigation() {
        return this.type === ListItemType.Navigation;
    }
    get typeActive() {
        return this.type === ListItemType.Active;
    }
    get _ariaSelected() {
        if (this.modeMultiple || this.modeSingleSelect) {
            return this.selected;
        }
        return undefined;
    }
    get listItemAccessibleRole() {
        return this.accessibleRole.toLowerCase();
    }
    get ariaSelectedText() {
        let ariaSelectedText;
        // Selected state needs to be supported separately since now the role mapping is list -> listitem[]
        // to avoid the issue of nesting interactive elements, ex. (option -> radio/checkbox);
        // The text is added to aria-describedby because as part of the aria-labelledby
        // the whole content of the item is readout when the aria-labelledby value is changed.
        if (this._ariaSelected !== undefined) {
            ariaSelectedText = this._ariaSelected ? ListItem_1.i18nBundle.getText(LIST_ITEM_SELECTED) : ListItem_1.i18nBundle.getText(LIST_ITEM_NOT_SELECTED);
        }
        return ariaSelectedText;
    }
    get deleteText() {
        return ListItem_1.i18nBundle.getText(DELETE);
    }
    get hasDeleteButtonSlot() {
        return !!this.deleteButton.length;
    }
    get _accessibleNameRef() {
        if (this.accessibleName) {
            // accessibleName is set - return labels excluding content
            return `${this._id}-invisibleText`;
        }
        // accessibleName is not set - return _accInfo.listItemAriaLabel including content
        return `${this._id}-content ${this._id}-invisibleText`;
    }
    get _accInfo() {
        return {
            role: this.listItemAccessibleRole,
            ariaExpanded: undefined,
            ariaLevel: undefined,
            ariaLabel: ListItem_1.i18nBundle.getText(ARIA_LABEL_LIST_ITEM_CHECKBOX),
            ariaLabelRadioButton: ListItem_1.i18nBundle.getText(ARIA_LABEL_LIST_ITEM_RADIO_BUTTON),
            ariaSelectedText: this.ariaSelectedText,
            ariaHaspopup: this.accessibilityAttributes.hasPopup,
            setsize: this.accessibilityAttributes.ariaSetsize,
            posinset: this.accessibilityAttributes.ariaPosinset,
            tooltip: this.tooltip,
        };
    }
    get _hasHighlightColor() {
        return this.highlight !== Highlight.None;
    }
    get hasConfigurableMode() {
        return true;
    }
    get _listItem() {
        return this.shadowRoot.querySelector("li");
    }
    static async onDefine() {
        ListItem_1.i18nBundle = await getI18nBundle("@ui5/webcomponents");
    }
};
__decorate([
    property({ type: ListItemType, defaultValue: ListItemType.Active })
], ListItem.prototype, "type", void 0);
__decorate([
    property({ type: Object })
], ListItem.prototype, "accessibilityAttributes", void 0);
__decorate([
    property({ type: Boolean })
], ListItem.prototype, "navigated", void 0);
__decorate([
    property({ type: String, defaultValue: "" })
], ListItem.prototype, "tooltip", void 0);
__decorate([
    property({ type: Boolean })
], ListItem.prototype, "active", void 0);
__decorate([
    property({ type: Highlight, defaultValue: Highlight.None })
], ListItem.prototype, "highlight", void 0);
__decorate([
    property({ type: ListItemAccessibleRole, defaultValue: ListItemAccessibleRole.ListItem })
], ListItem.prototype, "accessibleRole", void 0);
__decorate([
    property({ type: ListSelectionMode, defaultValue: ListSelectionMode.None })
], ListItem.prototype, "_selectionMode", void 0);
__decorate([
    slot()
], ListItem.prototype, "deleteButton", void 0);
ListItem = ListItem_1 = __decorate([
    customElement({
        languageAware: true,
        styles: [
            ListItemBase.styles,
            listItemAdditionalTextCss,
            styles,
        ],
        dependencies: [
            Button,
            RadioButton,
            CheckBox,
        ],
    })
    /**
     * Fired when the user clicks on the detail button when type is `Detail`.
     * @public
     */
    ,
    event("detail-click"),
    event("_focused"),
    event("_selection-requested")
], ListItem);
export default ListItem;
//# sourceMappingURL=ListItem.js.map