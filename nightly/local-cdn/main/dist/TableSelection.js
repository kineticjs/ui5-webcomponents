var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import TableSelectionMode from "./types/TableSelectionMode.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-table-selection` component is used inside the `ui5-table` ti add key-based selection capabilities to the `ui5-table`.
 *
 * The component offers three selection modes:
 * * Single - select a single row.
 * * Multiple - select multiple rows.
 * * None - no selection active.
 *
 * As the selection is key-based, `ui5-table-row` components need to define a unique `key` property.
 *
 * ### Usage
 *
 * The `ui5-table-selection` component is only used inside the `ui5-table` component as a feature.
 * It has to be slotted inside the `ui5-table` in the `features` slot.
 * The component is not intended to be used as a standalone component.
 *
 * ```html
 * <ui5-table>
 * 	<ui5-table-selection mode="Multiple" slot="features"></ui5-table-selection>
 * </ui5-table>
 * ```
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/TableSelection.js";`
 *
 * @constructor
 * @extends UI5Element
 * @since 2.0
 * @public
 */
let TableSelection = class TableSelection extends UI5Element {
    onTableActivate(table) {
        this._table = table;
        this._invalidateTableAndRows();
    }
    onExitDOM() {
        this.mode = TableSelectionMode.None;
        this._invalidateTableAndRows();
        this._table = undefined;
    }
    onBeforeRendering() {
        this._invalidateTableAndRows();
    }
    isSelectable() {
        return this.mode !== TableSelectionMode.None;
    }
    isMultiSelect() {
        return this.mode === TableSelectionMode.Multiple;
    }
    hasRowSelector() {
        return this.mode !== TableSelectionMode.None;
    }
    getRowIdentifier(row) {
        return row.key;
    }
    isSelected(row) {
        if (!this._table || !this.isSelectable()) {
            return false;
        }
        if (row.isHeaderRow()) {
            return this.areAllRowsSelected();
        }
        const rowIdentifier = this.getRowIdentifier(row);
        return this.selectedAsArray.includes(rowIdentifier);
    }
    hasSelectedRow() {
        if (!this._table || !this.isSelectable()) {
            return false;
        }
        const selectedArray = this.selectedAsArray;
        return this._table.rows.some(row => {
            const rowIdentifier = this.getRowIdentifier(row);
            return selectedArray.includes(rowIdentifier);
        });
    }
    areAllRowsSelected() {
        if (!this._table || !this._table.rows.length || this.mode !== TableSelectionMode.Multiple) {
            return false;
        }
        const selectedArray = this.selectedAsArray;
        return this._table.rows.every(row => {
            const rowIdentifier = this.getRowIdentifier(row);
            return selectedArray.includes(rowIdentifier);
        });
    }
    informSelectionChange(row) {
        if (row.isHeaderRow()) {
            this._informHeaderRowSelectionChange();
        }
        else {
            this._informRowSelectionChange(row);
        }
    }
    get selectedAsArray() {
        return this.selected.split(" ").filter(String);
    }
    set selectedAsArray(selectedArray) {
        this.selected = selectedArray.filter(String).join(" ");
    }
    get selectedAsSet() {
        return new Set(this.selectedAsArray);
    }
    set selectedAsSet(selectedSet) {
        this.selectedAsArray = [...selectedSet];
    }
    _informRowSelectionChange(row) {
        const isRowSelected = this.isMultiSelect() ? this.isSelected(row) : true;
        const rowIdentifier = this.getRowIdentifier(row);
        if (this.selected && this.mode === TableSelectionMode.Multiple) {
            const selectedSet = this.selectedAsSet;
            selectedSet[isRowSelected ? "delete" : "add"](rowIdentifier);
            this.selectedAsSet = selectedSet;
        }
        else {
            this.selected = rowIdentifier;
        }
        this.fireEvent("change");
    }
    _informHeaderRowSelectionChange() {
        const isRowSelected = this.areAllRowsSelected();
        const selectedSet = this.selectedAsSet;
        this._table.rows.forEach(row => {
            const rowIdentifier = this.getRowIdentifier(row);
            selectedSet[isRowSelected ? "delete" : "add"](rowIdentifier);
        });
        this.selectedAsSet = selectedSet;
        this.fireEvent("change");
    }
    _invalidateTableAndRows() {
        if (!this._table) {
            return;
        }
        if (!this.isSelectable()) {
            this.selected = "";
        }
        else if (!this.isMultiSelect()) {
            this.selected = this.selectedAsArray.shift() || "";
        }
        this._table._invalidate++;
        this._table.headerRow[0]._invalidate++;
        this._table.rows.forEach(row => row._invalidate++);
    }
};
__decorate([
    property({ type: TableSelectionMode, defaultValue: TableSelectionMode.Multiple })
], TableSelection.prototype, "mode", void 0);
__decorate([
    property()
], TableSelection.prototype, "selected", void 0);
TableSelection = __decorate([
    customElement({ tag: "ui5-table-selection" })
    /**
     * Fired when selection is changed by user interaction.
     *
     * @public
     */
    ,
    event("change")
], TableSelection);
TableSelection.define();
export default TableSelection;
//# sourceMappingURL=TableSelection.js.map