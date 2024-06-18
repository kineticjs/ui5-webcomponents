var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ComboBox_1;
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";
import { isPhone, isAndroid } from "@ui5/webcomponents-base/dist/Device.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import InvisibleMessageMode from "@ui5/webcomponents-base/dist/types/InvisibleMessageMode.js";
import { getEffectiveAriaLabelText } from "@ui5/webcomponents-base/dist/util/AriaLabelHelper.js";
import announce from "@ui5/webcomponents-base/dist/util/InvisibleMessage.js";
import { getScopedVarName } from "@ui5/webcomponents-base/dist/CustomElementsScope.js";
import "@ui5/webcomponents-icons/dist/slim-arrow-down.js";
import "@ui5/webcomponents-icons/dist/decline.js";
import "@ui5/webcomponents-icons/dist/not-editable.js";
import "@ui5/webcomponents-icons/dist/error.js";
import "@ui5/webcomponents-icons/dist/alert.js";
import "@ui5/webcomponents-icons/dist/sys-enter-2.js";
import "@ui5/webcomponents-icons/dist/information.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import { submitForm } from "@ui5/webcomponents-base/dist/features/InputElementsFormSupport.js";
import { isBackSpace, isDelete, isShow, isUp, isDown, isEnter, isEscape, isTabNext, isTabPrevious, isPageUp, isPageDown, isHome, isEnd, } from "@ui5/webcomponents-base/dist/Keys.js";
import * as Filters from "./Filters.js";
import { VALUE_STATE_SUCCESS, VALUE_STATE_ERROR, VALUE_STATE_WARNING, VALUE_STATE_INFORMATION, VALUE_STATE_TYPE_SUCCESS, VALUE_STATE_TYPE_INFORMATION, VALUE_STATE_TYPE_ERROR, VALUE_STATE_TYPE_WARNING, INPUT_SUGGESTIONS_TITLE, SELECT_OPTIONS, LIST_ITEM_POSITION, LIST_ITEM_GROUP_HEADER, INPUT_CLEAR_ICON_ACC_NAME, FORM_TEXTFIELD_REQUIRED, } from "./generated/i18n/i18n-defaults.js";
// Templates
import ComboBoxTemplate from "./generated/templates/ComboBoxTemplate.lit.js";
// Styles
import ComboBoxCss from "./generated/themes/ComboBox.css.js";
import ComboBoxPopoverCss from "./generated/themes/ComboBoxPopover.css.js";
import ResponsivePopoverCommonCss from "./generated/themes/ResponsivePopoverCommon.css.js";
import ValueStateMessageCss from "./generated/themes/ValueStateMessage.css.js";
import SuggestionsCss from "./generated/themes/Suggestions.css.js";
import ComboBoxItem from "./ComboBoxItem.js";
import Icon from "./Icon.js";
import Popover from "./Popover.js";
import ResponsivePopover from "./ResponsivePopover.js";
import List from "./List.js";
import BusyIndicator from "./BusyIndicator.js";
import Button from "./Button.js";
import ListItemStandard from "./ListItemStandard.js";
import ComboBoxItemGroup, { isInstanceOfComboBoxItemGroup } from "./ComboBoxItemGroup.js";
import ListItemGroup from "./ListItemGroup.js";
import ListItemGroupHeader from "./ListItemGroupHeader.js";
import ComboBoxFilter from "./types/ComboBoxFilter.js";
import PopoverHorizontalAlign from "./types/PopoverHorizontalAlign.js";
import Input from "./Input.js";
import SuggestionItem from "./SuggestionItem.js";
const SKIP_ITEMS_SIZE = 10;
var ValueStateIconMapping;
(function (ValueStateIconMapping) {
    ValueStateIconMapping["Negative"] = "error";
    ValueStateIconMapping["Critical"] = "alert";
    ValueStateIconMapping["Positive"] = "sys-enter-2";
    ValueStateIconMapping["Information"] = "information";
})(ValueStateIconMapping || (ValueStateIconMapping = {}));
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-combobox` component represents a drop-down menu with a list of the available options and a text input field to narrow down the options.
 *
 * It is commonly used to enable users to select an option from a predefined list.
 *
 * ### Structure
 * The `ui5-combobox` consists of the following elements:
 *
 * -  Input field - displays the selected option or a custom user entry. Users can type to narrow down the list or enter their own value.
 * -  Drop-down arrow - expands\collapses the option list.
 * -  Option list - the list of available options.
 *
 * ### Keyboard Handling
 *
 * The `ui5-combobox` provides advanced keyboard handling.
 *
 * - [F4], [Alt]+[Up], or [Alt]+[Down] - Toggles the picker.
 * - [Escape] - Closes the picker, if open. If closed, cancels changes and reverts the typed in value.
 * - [Enter] or [Return] - If picker is open, takes over the currently selected item and closes it.
 * - [Down] - Selects the next matching item in the picker.
 * - [Up] - Selects the previous matching item in the picker.
 * - [Page Down] - Moves selection down by page size (10 items by default).
 * - [Page Up] - Moves selection up by page size (10 items by default).
 * - [Home] - If focus is in the ComboBox, moves cursor at the beginning of text. If focus is in the picker, selects the first item.
 * - [End] - If focus is in the ComboBox, moves cursor at the end of text. If focus is in the picker, selects the last item.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/ComboBox.js";`
 * @constructor
 * @extends UI5Element
 * @public
 * @since 1.0.0-rc.6
 */
let ComboBox = ComboBox_1 = class ComboBox extends UI5Element {
    get formValidityMessage() {
        return ComboBox_1.i18nBundle.getText(FORM_TEXTFIELD_REQUIRED);
    }
    get formValidity() {
        return { valueMissing: this.required && !this.value };
    }
    async formElementAnchor() {
        return this.getFocusDomRefAsync();
    }
    get formFormattedValue() {
        return this.value;
    }
    constructor() {
        super();
        this._filteredItems = [];
        this._initialRendering = true;
        this._itemFocused = false;
        this._autocomplete = false;
        this._isKeyNavigation = false;
        // when an initial value is set it should be considered as a _lastValue
        this._lastValue = this.getAttribute("value") || "";
        this._selectionPerformed = false;
        this._selectedItemText = "";
        this._userTypedValue = "";
    }
    onBeforeRendering() {
        this._effectiveShowClearIcon = (this.showClearIcon && !!this.value && !this.readonly && !this.disabled);
        if (this._initialRendering || this.filter === "None") {
            this._filteredItems = this.items;
        }
        if (this.open && !this._isKeyNavigation) {
            const items = this._filterItems(this.filterValue);
            this._filteredItems = (items.length && items) || [];
        }
        const hasNoVisibleItems = !this._filteredItems.length || !this._filteredItems.some(i => i._isVisible);
        // If there is no filtered items matching the value, show all items when the arrow is pressed
        if (((hasNoVisibleItems && !isPhone()) && this.value)) {
            this.items.forEach(this._makeAllVisible.bind(this));
            this._filteredItems = this.items;
        }
        if (this.shouldOpenValueStateMessagePopover) {
            this.valueStateOpen = true;
        }
        else {
            this.valueStateOpen = false;
        }
        this._selectMatchingItem();
        this._initialRendering = false;
        this.style.setProperty(getScopedVarName("--_ui5-input-icons-count"), `${this.iconsCount}`);
    }
    get iconsCount() {
        const slottedIconsCount = this.icon?.length || 0;
        const clearIconCount = Number(this._effectiveShowClearIcon) ?? 0;
        const arrowDownIconsCount = this.readonly ? 0 : 1;
        return slottedIconsCount + clearIconCount + arrowDownIconsCount;
    }
    onAfterRendering() {
        if (this.inner && this.value !== this.inner.value) {
            this.value = this.inner.value;
        }
        this.storeResponsivePopoverWidth();
        this.items.forEach(item => {
            item._getRealDomRef = () => this._getPicker().querySelector(`*[data-ui5-stable=${item.stableDomRef}]`);
        });
    }
    _focusin(e) {
        this.focused = true;
        this._autocomplete = false;
        !isPhone() && e.target.setSelectionRange(0, this.value.length);
    }
    _focusout(e) {
        const toBeFocused = e.relatedTarget;
        const clearIconWrapper = this.shadowRoot.querySelector(".ui5-input-clear-icon-wrapper");
        const focusedOutToClearIcon = clearIconWrapper === toBeFocused || clearIconWrapper?.contains(toBeFocused);
        if (this._effectiveShowClearIcon && focusedOutToClearIcon) {
            return;
        }
        this._fireChangeEvent();
        const focusedOutToItemsPicker = this.open && this._getPicker().contains(toBeFocused);
        const focusedOutToValueState = this.valueStateOpen && this._getValueStatePopover().contains(toBeFocused);
        if (focusedOutToItemsPicker || focusedOutToValueState) {
            e.stopImmediatePropagation();
            return;
        }
        if (!(this.getDomRef().contains(toBeFocused)) && (this._getPicker() !== e.relatedTarget)) {
            this.focused = false;
        }
    }
    _beforeOpenPopover() {
        if (isPhone()) {
            this._getPickerInput().value = this.value;
        }
    }
    _afterOpenPopover() {
        this._iconPressed = true;
        this.inner.focus();
    }
    _afterClosePopover() {
        this._iconPressed = false;
        this._filteredItems = this.items;
        this.filterValue = "";
        this._selectedItemText = "";
        // close device's keyboard and prevent further typing
        if (isPhone()) {
            this.blur();
        }
        if (this._selectionPerformed) {
            this._lastValue = this.value;
            this._selectionPerformed = false;
        }
        this.open = false;
    }
    _toggleRespPopover() {
        if (this.open) {
            this._closeRespPopover();
        }
        else {
            this._openRespPopover();
        }
    }
    storeResponsivePopoverWidth() {
        if (this.open && !this._listWidth) {
            this._listWidth = this._getPicker().offsetWidth;
        }
    }
    _handleValueStatePopoverFocusout() {
        this.focused = false;
    }
    _handleValueStatePopoverAfterClose() {
        this.valueStateOpen = false;
    }
    _getValueStatePopover() {
        return this.shadowRoot.querySelector(".ui5-valuestatemessage-popover");
    }
    _getItemsList() {
        return this._getPicker().querySelector(".ui5-combobox-items-list");
    }
    _resetFilter() {
        this._userTypedValue = "";
        this.inner.setSelectionRange(0, this.value.length);
        this._filteredItems = this._filterItems("");
        this._selectMatchingItem();
    }
    _resetItemVisibility() {
        this.items.forEach(item => {
            if (isInstanceOfComboBoxItemGroup(item)) {
                item.items?.forEach(i => {
                    i._isVisible = false;
                });
                return;
            }
            item._isVisible = false;
        });
    }
    _arrowClick() {
        this.inner.focus();
        this._resetFilter();
        if (isPhone() && this.value && !this._lastValue) {
            this._lastValue = this.value;
        }
        this._toggleRespPopover();
    }
    _handleMobileKeydown(e) {
        if (isEscape(e)) {
            this.value = this._lastValue || "";
            this.filterValue = this._lastValue || "";
            this._closeRespPopover();
        }
    }
    _handleMobileInput(e) {
        const { target } = e;
        this.filterValue = target.value;
        this.value = target.value;
        this.fireEvent("input");
    }
    _input(e) {
        const { value } = e.target;
        const shouldAutocomplete = this.shouldAutocomplete(e);
        if (e.target === this.inner) {
            // stop the native event, as the semantic "input" would be fired.
            e.stopImmediatePropagation();
            this.focused = true;
            this._isValueStateFocused = false;
        }
        this._filteredItems = this._filterItems(value);
        this.value = value;
        this.filterValue = value;
        this._clearFocus();
        // autocomplete
        if (shouldAutocomplete && !isAndroid()) {
            this._handleTypeAhead(value, value, true);
        }
        this.fireEvent("input");
        if (isPhone()) {
            return;
        }
        if (!this._filteredItems.length || value === "") {
            this._closeRespPopover();
        }
        else {
            this._openRespPopover();
        }
    }
    shouldAutocomplete(e) {
        const eventType = e.inputType;
        const allowedEventTypes = [
            "deleteWordBackward",
            "deleteWordForward",
            "deleteSoftLineBackward",
            "deleteSoftLineForward",
            "deleteEntireSoftLine",
            "deleteHardLineBackward",
            "deleteHardLineForward",
            "deleteByDrag",
            "deleteByCut",
            "deleteContent",
            "deleteContentBackward",
            "deleteContentForward",
            "historyUndo",
        ];
        return !this.noTypeahead && !allowedEventTypes.includes(eventType);
    }
    _startsWithMatchingItems(str) {
        const allItems = this._getItems();
        return Filters.StartsWith(str, allItems, "text");
    }
    _clearFocus() {
        const allItems = this._getItems();
        allItems.map(item => {
            item.focused = false;
            return item;
        });
    }
    // Get groups and items as a flat array for filtering
    _getItems() {
        const allItems = [];
        this._filteredItems.forEach(item => {
            if (isInstanceOfComboBoxItemGroup(item)) {
                const groupedItems = [item, ...item.items];
                allItems.push(...groupedItems);
                return;
            }
            allItems.push(item);
        });
        return allItems;
    }
    handleNavKeyPress(e) {
        const allItems = this._getItems();
        if (this.focused && (isHome(e) || isEnd(e)) && this.value) {
            return;
        }
        const isOpen = this.open;
        const currentItem = allItems.find(item => {
            return isOpen ? item.focused : item.selected;
        });
        const indexOfItem = currentItem ? allItems.indexOf(currentItem) : -1;
        e.preventDefault();
        if (this.focused && isOpen && (isUp(e) || isPageUp(e) || isPageDown(e))) {
            return;
        }
        if (allItems.length - 1 === indexOfItem && isDown(e)) {
            return;
        }
        this._isKeyNavigation = true;
        if (e.key === "ArrowDown"
            || e.key === "ArrowUp"
            || e.key === "PageUp"
            || e.key === "PageDown"
            || e.key === "Home"
            || e.key === "End") {
            this[`_handle${e.key}`](e, indexOfItem);
        }
    }
    _handleItemNavigation(e, indexOfItem, isForward) {
        const allItems = this._getItems();
        const currentItem = allItems[indexOfItem];
        const isGroupItem = currentItem && currentItem.isGroupItem;
        const nextItem = isForward ? allItems[indexOfItem + 1] : allItems[indexOfItem - 1];
        if ((!this.open) && ((isGroupItem && !nextItem) || (!isGroupItem && !currentItem))) {
            return;
        }
        this._clearFocus();
        if (this.open) {
            this._itemFocused = true;
            this.value = isGroupItem ? "" : currentItem.text;
            this.focused = false;
            currentItem.focused = true;
        }
        else {
            this.focused = true;
            this.value = isGroupItem ? nextItem.text : currentItem.text;
            currentItem.focused = false;
        }
        this._isValueStateFocused = false;
        this._announceSelectedItem(indexOfItem);
        this._scrollToItem(indexOfItem, isForward);
        if (isGroupItem && this.open) {
            return;
        }
        // autocomplete
        this._handleTypeAhead(this.value, this.open ? this._userTypedValue : "", false);
        this.fireEvent("input");
    }
    _handleTypeAhead(value, filterValue, checkForGroupItem) {
        const item = this._getFirstMatchingItem(value);
        if (!item) {
            return;
        }
        this._applyAtomicValueAndSelection(item, filterValue);
        if (value !== "" && !item.selected && (!checkForGroupItem || !item.isGroupItem)) {
            this.fireEvent("selection-change", {
                item: item,
            });
        }
    }
    _handleArrowDown(e, indexOfItem) {
        const isOpen = this.open;
        if (this.focused && indexOfItem === -1 && this.hasValueStateText && isOpen) {
            this._isValueStateFocused = true;
            this._announceValueStateText();
            this.focused = false;
            return;
        }
        indexOfItem = !isOpen && this.hasValueState && indexOfItem === -1 ? 0 : indexOfItem;
        this._handleItemNavigation(e, ++indexOfItem, true /* isForward */);
    }
    _handleArrowUp(e, indexOfItem) {
        const isOpen = this.open;
        if (indexOfItem === 0 && !this.hasValueStateText) {
            this._clearFocus();
            this.focused = true;
            this._itemFocused = false;
            return;
        }
        if (indexOfItem === 0 && this.hasValueStateText && isOpen) {
            this._clearFocus();
            this._itemFocused = false;
            this._isValueStateFocused = true;
            this._announceValueStateText();
            this._filteredItems[0].selected = false;
            return;
        }
        if (this._isValueStateFocused) {
            this.focused = true;
            this._isValueStateFocused = false;
            return;
        }
        indexOfItem = !isOpen && this.hasValueState && indexOfItem === -1 ? 0 : indexOfItem;
        this._handleItemNavigation(e, --indexOfItem, false /* isForward */);
    }
    _handlePageUp(e, indexOfItem) {
        const allItems = this._getItems();
        const isProposedIndexValid = indexOfItem - SKIP_ITEMS_SIZE > -1;
        indexOfItem = isProposedIndexValid ? indexOfItem - SKIP_ITEMS_SIZE : 0;
        const shouldMoveForward = isInstanceOfComboBoxItemGroup(allItems[indexOfItem]) && !this.open;
        if (!isProposedIndexValid && this.hasValueStateText && this.open) {
            this._clearFocus();
            this._itemFocused = false;
            this._isValueStateFocused = true;
            this._announceValueStateText();
            return;
        }
        this._handleItemNavigation(e, indexOfItem, shouldMoveForward);
    }
    _handlePageDown(e, indexOfItem) {
        const allItems = this._getItems();
        const itemsLength = allItems.length;
        const isProposedIndexValid = indexOfItem + SKIP_ITEMS_SIZE < itemsLength;
        indexOfItem = isProposedIndexValid ? indexOfItem + SKIP_ITEMS_SIZE : itemsLength - 1;
        const shouldMoveForward = isInstanceOfComboBoxItemGroup(allItems[indexOfItem]) && !this.open;
        this._handleItemNavigation(e, indexOfItem, shouldMoveForward);
    }
    _handleHome(e) {
        const shouldMoveForward = isInstanceOfComboBoxItemGroup(this._filteredItems[0]) && !this.open;
        if (this.hasValueStateText && this.open) {
            this._clearFocus();
            this._itemFocused = false;
            this._isValueStateFocused = true;
            this._announceValueStateText();
            return;
        }
        this._handleItemNavigation(e, 0, shouldMoveForward);
    }
    _handleEnd(e) {
        this._handleItemNavigation(e, this._getItems().length - 1, true /* isForward */);
    }
    _keyup() {
        this._userTypedValue = this.value.substring(0, this.inner.selectionStart || 0);
    }
    _keydown(e) {
        const isNavKey = isDown(e) || isUp(e) || isPageUp(e) || isPageDown(e) || isHome(e) || isEnd(e);
        const allItems = this._getItems();
        this._autocomplete = !(isBackSpace(e) || isDelete(e));
        this._isKeyNavigation = false;
        if (isNavKey && !this.readonly && this._filteredItems.length) {
            this.handleNavKeyPress(e);
        }
        if (isEnter(e)) {
            let focusedItem;
            this._filteredItems.forEach(item => {
                if (isInstanceOfComboBoxItemGroup(item) && !focusedItem) {
                    focusedItem = item.items.find(groupItem => groupItem.focused);
                }
                if (item.focused) {
                    focusedItem = item;
                }
            });
            this._fireChangeEvent();
            if (this.open && !focusedItem?.isGroupItem) {
                this._closeRespPopover();
                this.focused = true;
                this.inner.setSelectionRange(this.value.length, this.value.length);
            }
            else if (this._internals?.form) {
                submitForm(this);
            }
        }
        if (isEscape(e)) {
            this.focused = true;
            this.value = !this.open ? this._lastValue : this.value;
            this._isValueStateFocused = false;
        }
        if ((isTabNext(e) || isTabPrevious(e)) && this.open) {
            this._closeRespPopover();
        }
        if (isShow(e) && !this.readonly && !this.disabled) {
            e.preventDefault();
            this._resetFilter();
            this._toggleRespPopover();
            const selectedItem = allItems.find(item => {
                return item.selected;
            });
            if (selectedItem && this.open) {
                this._itemFocused = true;
                selectedItem.focused = true;
                this.focused = false;
            }
            else if (this.open && this._filteredItems.length && !this.value.length) {
                // If no item is selected, select the first non-group item on "Show" (F4, Alt+Up/Down)
                const firstNonGroupItem = this._getItems().findIndex(item => item._isVisible && !item.isGroupItem);
                this._handleItemNavigation(e, firstNonGroupItem, true /* isForward */);
            }
            else {
                this.focused = true;
            }
        }
    }
    _handlePopoverKeydown(e) {
        if (isTabNext(e)) {
            this._closeRespPopover();
        }
    }
    _handlePopoverFocusout() {
        this.focused = false;
    }
    _click() {
        if (isPhone() && !this.readonly) {
            this._openRespPopover();
        }
    }
    _closeRespPopover(e) {
        if ((e && e.target.classList.contains("ui5-responsive-popover-close-btn"))) {
            if (this._selectedItemText) {
                this.value = this._selectedItemText;
                this.filterValue = this._selectedItemText;
            }
            else {
                this.value = this._lastValue || "";
                this.filterValue = this._lastValue || "";
            }
        }
        if (isPhone()) {
            this._fireChangeEvent();
        }
        this._isValueStateFocused = false;
        this._clearFocus();
        this.open = false;
        this.valueStateOpen = false;
    }
    _openRespPopover() {
        this.open = true;
    }
    _filterItems(str) {
        let filteredItem;
        let filteredGroupItems = [];
        const filteredItems = [];
        const filteredItemGroups = [];
        this._resetItemVisibility();
        this.items.forEach(item => {
            if (isInstanceOfComboBoxItemGroup(item)) {
                filteredGroupItems = (Filters[this.filter] || Filters.StartsWithPerTerm)(str, item.items, "text");
                filteredGroupItems.forEach(i => {
                    i._isVisible = true;
                });
                if (filteredGroupItems.length) {
                    filteredItemGroups.push(item);
                }
                return;
            }
            [filteredItem] = (Filters[this.filter] || Filters.StartsWithPerTerm)(str, [item], "text");
            if (filteredItem) {
                filteredItem._isVisible = true;
                filteredItems.push(filteredItem);
            }
        });
        return [...filteredItemGroups, ...filteredItems];
    }
    _getFirstMatchingItem(current) {
        const allItems = this._getItems();
        const currentlyFocusedItem = allItems.find(item => item.focused === true);
        if (currentlyFocusedItem?.isGroupItem) {
            this.value = this.filterValue;
            return;
        }
        const matchingItems = (this._startsWithMatchingItems(current).filter(item => !isInstanceOfComboBoxItemGroup(item)));
        if (matchingItems.length) {
            return matchingItems[0];
        }
    }
    _applyAtomicValueAndSelection(item, filterValue) {
        const value = (item && item.text) || "";
        this.inner.value = value;
        this.inner.setSelectionRange(filterValue.length, value.length);
        this.value = value;
    }
    _selectMatchingItem() {
        const currentlyFocusedItem = this.items.find(item => item.focused);
        const shouldSelectionBeCleared = currentlyFocusedItem && currentlyFocusedItem.isGroupItem;
        let itemToBeSelected;
        this._filteredItems.forEach(item => {
            if (!shouldSelectionBeCleared && !itemToBeSelected) {
                itemToBeSelected = ((!item.isGroupItem && (item.text === this.value)) ? item : item?.items?.find(i => i.text === this.value));
            }
        });
        this._filteredItems = this._filteredItems.map(item => {
            if (!isInstanceOfComboBoxItemGroup(item)) {
                item.selected = item === itemToBeSelected;
                return item;
            }
            item.items?.forEach(groupItem => {
                groupItem.selected = itemToBeSelected === groupItem;
            });
            return item;
        });
    }
    _fireChangeEvent() {
        if (this.value !== this._lastValue) {
            this.fireEvent("change");
            this._lastValue = this.value;
        }
    }
    _inputChange(e) {
        e.preventDefault();
    }
    _itemMousedown(e) {
        e.preventDefault();
    }
    _selectItem(e) {
        const listItem = e.detail.item;
        this._selectedItemText = listItem.mappedItem.text;
        this._selectionPerformed = true;
        const sameItemSelected = this.value === this._selectedItemText;
        const sameSelectionPerformed = this.value.toLowerCase() === this.filterValue.toLowerCase();
        if (sameItemSelected && sameSelectionPerformed) {
            this._fireChangeEvent(); // Click on an already typed, but not memoized value shouold also trigger the change event
            return this._closeRespPopover();
        }
        this.value = this._selectedItemText;
        if (!listItem.mappedItem.selected) {
            this.fireEvent("selection-change", {
                item: listItem.mappedItem,
            });
        }
        this._filteredItems.map(item => {
            item.selected = (item === listItem.mappedItem && !item.isGroupItem);
            return item;
        });
        this._fireChangeEvent();
        this._closeRespPopover();
        // reset selection
        this.inner.setSelectionRange(this.value.length, this.value.length);
    }
    _onItemFocus() {
        this._itemFocused = true;
    }
    _announceSelectedItem(indexOfItem) {
        const allItems = this._getItems();
        const currentItem = allItems[indexOfItem];
        const nonGroupItems = allItems.filter(item => !item.isGroupItem);
        const currentItemAdditionalText = currentItem?.additionalText || "";
        const isGroupItem = currentItem?.isGroupItem;
        const itemPositionText = ComboBox_1.i18nBundle.getText(LIST_ITEM_POSITION, nonGroupItems.indexOf(currentItem) + 1, nonGroupItems.length);
        const groupHeaderText = ComboBox_1.i18nBundle.getText(LIST_ITEM_GROUP_HEADER);
        if (isGroupItem) {
            announce(`${groupHeaderText} ${currentItem.text}`, InvisibleMessageMode.Polite);
        }
        else {
            announce(`${currentItemAdditionalText} ${itemPositionText}`.trim(), InvisibleMessageMode.Polite);
        }
    }
    _clear() {
        const selectedItem = this.items.find(item => item.selected);
        if (selectedItem?.text === this.value) {
            this.fireEvent("change");
        }
        this.value = "";
        this.fireEvent("input");
        if (this._isPhone) {
            this._lastValue = "";
            this.fireEvent("change");
        }
        else {
            this.focus();
        }
    }
    _makeAllVisible(item) {
        if (isInstanceOfComboBoxItemGroup(item)) {
            item.items.forEach(groupItem => {
                groupItem._isVisible = true;
            });
            return;
        }
        item._isVisible = true;
    }
    _scrollToItem(indexOfItem, forward) {
        const picker = this._getPicker();
        const list = this._getItemsList();
        const listItem = list?.listItems[indexOfItem];
        if (listItem) {
            const pickerRect = picker.getBoundingClientRect();
            const listItemRect = listItem.getBoundingClientRect();
            const isListItemInVisibleArea = listItemRect.top >= pickerRect.top && listItemRect.bottom <= pickerRect.bottom;
            if (!isListItemInVisibleArea) {
                listItem.scrollIntoView({ behavior: "instant", block: forward ? "end" : "start", inline: "nearest" });
            }
        }
    }
    _announceValueStateText() {
        const valueStateText = this.shouldDisplayDefaultValueStateMessage ? this.valueStateDefaultText : this.valueStateMessageText.map(el => el.textContent).join(" ");
        if (valueStateText) {
            announce(valueStateText, InvisibleMessageMode.Polite);
        }
    }
    get _headerTitleText() {
        return ComboBox_1.i18nBundle.getText(INPUT_SUGGESTIONS_TITLE);
    }
    get _iconAccessibleNameText() {
        return ComboBox_1.i18nBundle.getText(SELECT_OPTIONS);
    }
    get inner() {
        return (isPhone() && this.open)
            ? this._getPickerInput().shadowRoot.querySelector("input")
            : this.shadowRoot.querySelector("[inner-input]");
    }
    _getPicker() {
        return this.shadowRoot.querySelector("[ui5-responsive-popover]");
    }
    _getPickerInput() {
        return this._getPicker().querySelector("[ui5-input]");
    }
    get openOnMobile() {
        return this._isPhone && this.open;
    }
    get hasValueState() {
        return this.valueState !== ValueState.None;
    }
    get hasValueStateText() {
        return this.hasValueState && this.valueState !== ValueState.Positive;
    }
    get ariaValueStateHiddenText() {
        if (!this.hasValueState) {
            return "";
        }
        let text = "";
        if (this.valueState !== ValueState.None) {
            text = this.valueStateTypeMappings[this.valueState];
        }
        if (this.shouldDisplayDefaultValueStateMessage) {
            return `${text} ${this.valueStateDefaultText || ""}`;
        }
        return `${text}`.concat(" ", this.valueStateMessageText.map(el => el.textContent).join(" "));
    }
    get valueStateDefaultText() {
        if (this.valueState === ValueState.None) {
            return;
        }
        return this.valueStateTextMappings[this.valueState];
    }
    get valueStateMessageText() {
        return this.getSlottedNodes("valueStateMessage").map(el => el.cloneNode(true));
    }
    get valueStateTextMappings() {
        return {
            [ValueState.Positive]: ComboBox_1.i18nBundle.getText(VALUE_STATE_SUCCESS),
            [ValueState.Negative]: ComboBox_1.i18nBundle.getText(VALUE_STATE_ERROR),
            [ValueState.Critical]: ComboBox_1.i18nBundle.getText(VALUE_STATE_WARNING),
            [ValueState.Information]: ComboBox_1.i18nBundle.getText(VALUE_STATE_INFORMATION),
        };
    }
    get valueStateTypeMappings() {
        return {
            [ValueState.Positive]: ComboBox_1.i18nBundle.getText(VALUE_STATE_TYPE_SUCCESS),
            [ValueState.Information]: ComboBox_1.i18nBundle.getText(VALUE_STATE_TYPE_INFORMATION),
            [ValueState.Negative]: ComboBox_1.i18nBundle.getText(VALUE_STATE_TYPE_ERROR),
            [ValueState.Critical]: ComboBox_1.i18nBundle.getText(VALUE_STATE_TYPE_WARNING),
        };
    }
    get shouldOpenValueStateMessagePopover() {
        return this.focused && !this.readonly && this.hasValueStateText && !this._iconPressed
            && !this.open && !this._isPhone;
    }
    get shouldDisplayDefaultValueStateMessage() {
        return !this.valueStateMessage.length && this.hasValueStateText;
    }
    get _valueStatePopoverHorizontalAlign() {
        return this.effectiveDir !== "rtl" ? PopoverHorizontalAlign.Start : PopoverHorizontalAlign.End;
    }
    /**
     * This method is relevant for sap_horizon theme only
     */
    get _valueStateMessageIcon() {
        return this.valueState !== ValueState.None ? ValueStateIconMapping[this.valueState] : "";
    }
    get _isPhone() {
        return isPhone();
    }
    get itemTabIndex() {
        return undefined;
    }
    get ariaLabelText() {
        return getEffectiveAriaLabelText(this);
    }
    get clearIconAccessibleName() {
        return ComboBox_1.i18nBundle.getText(INPUT_CLEAR_ICON_ACC_NAME);
    }
    static async onDefine() {
        ComboBox_1.i18nBundle = await getI18nBundle("@ui5/webcomponents");
    }
    get styles() {
        const remSizeInPx = parseInt(getComputedStyle(document.documentElement).fontSize);
        return {
            popoverHeader: {
                "width": `${this.offsetWidth}px`,
            },
            suggestionPopoverHeader: {
                "display": this._listWidth === 0 ? "none" : "inline-block",
                "width": `${this._listWidth || ""}px`,
            },
            suggestionsPopover: {
                "min-width": `${this.offsetWidth || 0}px`,
                "max-width": (this.offsetWidth / remSizeInPx) > 40 ? `${this.offsetWidth}px` : "40rem",
            },
            popoverValueStateMessage: {},
        };
    }
    get classes() {
        return {
            popover: {
                "ui5-suggestions-popover": true,
                "ui5-popover-with-value-state-header-phone": this._isPhone && this.hasValueStateText,
                "ui5-popover-with-value-state-header": !this._isPhone && this.hasValueStateText,
            },
            popoverValueState: {
                "ui5-valuestatemessage-header": true,
                "ui5-valuestatemessage-root": true,
                "ui5-valuestatemessage--success": this.valueState === ValueState.Positive,
                "ui5-valuestatemessage--error": this.valueState === ValueState.Negative,
                "ui5-valuestatemessage--warning": this.valueState === ValueState.Critical,
                "ui5-valuestatemessage--information": this.valueState === ValueState.Information,
            },
        };
    }
};
__decorate([
    property()
], ComboBox.prototype, "value", void 0);
__decorate([
    property()
], ComboBox.prototype, "name", void 0);
__decorate([
    property({ type: Boolean })
], ComboBox.prototype, "noTypeahead", void 0);
__decorate([
    property()
], ComboBox.prototype, "filterValue", void 0);
__decorate([
    property()
], ComboBox.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean })
], ComboBox.prototype, "disabled", void 0);
__decorate([
    property({ type: ValueState, defaultValue: ValueState.None })
], ComboBox.prototype, "valueState", void 0);
__decorate([
    property({ type: Boolean })
], ComboBox.prototype, "readonly", void 0);
__decorate([
    property({ type: Boolean })
], ComboBox.prototype, "required", void 0);
__decorate([
    property({ type: Boolean })
], ComboBox.prototype, "loading", void 0);
__decorate([
    property({ type: ComboBoxFilter, defaultValue: ComboBoxFilter.StartsWithPerTerm })
], ComboBox.prototype, "filter", void 0);
__decorate([
    property({ type: Boolean })
], ComboBox.prototype, "showClearIcon", void 0);
__decorate([
    property({ type: Boolean })
], ComboBox.prototype, "focused", void 0);
__decorate([
    property({ type: Boolean })
], ComboBox.prototype, "_isValueStateFocused", void 0);
__decorate([
    property()
], ComboBox.prototype, "accessibleName", void 0);
__decorate([
    property()
], ComboBox.prototype, "accessibleNameRef", void 0);
__decorate([
    property({ type: Boolean, noAttribute: true })
], ComboBox.prototype, "_iconPressed", void 0);
__decorate([
    property({ type: Object, noAttribute: true, multiple: true })
], ComboBox.prototype, "_filteredItems", void 0);
__decorate([
    property({ validator: Integer, noAttribute: true })
], ComboBox.prototype, "_listWidth", void 0);
__decorate([
    property({ type: Boolean, noAttribute: true })
], ComboBox.prototype, "_effectiveShowClearIcon", void 0);
__decorate([
    property({ type: Boolean, noAttribute: true })
], ComboBox.prototype, "valueStateOpen", void 0);
__decorate([
    property({ type: Boolean, noAttribute: true })
], ComboBox.prototype, "open", void 0);
__decorate([
    slot({ type: HTMLElement, "default": true, invalidateOnChildChange: true })
], ComboBox.prototype, "items", void 0);
__decorate([
    slot()
], ComboBox.prototype, "valueStateMessage", void 0);
__decorate([
    slot()
], ComboBox.prototype, "icon", void 0);
ComboBox = ComboBox_1 = __decorate([
    customElement({
        tag: "ui5-combobox",
        languageAware: true,
        formAssociated: true,
        renderer: litRender,
        styles: [
            ComboBoxCss,
            ResponsivePopoverCommonCss,
            ValueStateMessageCss,
            ComboBoxPopoverCss,
            SuggestionsCss,
        ],
        template: ComboBoxTemplate,
        dependencies: [
            ComboBoxItem,
            Icon,
            ResponsivePopover,
            List,
            BusyIndicator,
            Button,
            ListItemStandard,
            ListItemGroup,
            ListItemGroupHeader,
            Popover,
            ComboBoxItemGroup,
            Input,
            SuggestionItem,
        ],
    })
    /**
     * Fired when the input operation has finished by pressing Enter, focusout or an item is selected.
     * @public
     */
    ,
    event("change")
    /**
     * Fired when typing in input or clear icon is pressed.
     *
     * **Note:** filterValue property is updated, input is changed.
     * @public
     */
    ,
    event("input")
    /**
     * Fired when selection is changed by user interaction
     * @param {IComboBoxItem} item item to be selected.
     * @public
     */
    ,
    event("selection-change", {
        detail: {
            /**
            * @public
            */
            item: { type: HTMLElement },
        },
    })
], ComboBox);
ComboBox.define();
export default ComboBox;
//# sourceMappingURL=ComboBox.js.map