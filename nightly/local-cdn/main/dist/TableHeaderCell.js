var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import TableCellBase from "./TableCellBase.js";
import TableHeaderCellTemplate from "./generated/templates/TableHeaderCellTemplate.lit.js";
import TableHeaderCellStyles from "./generated/themes/TableHeaderCell.css.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-table-header-cell` component represents a column in the `ui5-table`.
 *
 * As it is tightly coupled to the `ui5-table`, it should only be used in the `ui5-table-header-row`
 * to ensure correct layout and design.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/TableHeaderCell.js";`
 *
 * @constructor
 * @extends TableCellBase
 * @since 2.0
 * @public
 */
let TableHeaderCell = class TableHeaderCell extends TableCellBase {
    constructor() {
        super(...arguments);
        this.ariaRole = "columnheader";
        this._popinWidth = 0;
    }
    onEnterDOM() {
        this.style.minWidth = this.minWidth;
        this.style.maxWidth = this.maxWidth;
        this.style.width = this.width;
    }
};
__decorate([
    property({ type: String, defaultValue: "auto" })
], TableHeaderCell.prototype, "width", void 0);
__decorate([
    property({ type: String, defaultValue: "auto" })
], TableHeaderCell.prototype, "minWidth", void 0);
__decorate([
    property({ type: String, defaultValue: "auto" })
], TableHeaderCell.prototype, "maxWidth", void 0);
__decorate([
    property({ validator: Integer, defaultValue: 0 })
], TableHeaderCell.prototype, "importance", void 0);
__decorate([
    property({ type: Boolean, noAttribute: true })
], TableHeaderCell.prototype, "_popin", void 0);
TableHeaderCell = __decorate([
    customElement({
        tag: "ui5-table-header-cell",
        styles: [TableCellBase.styles, TableHeaderCellStyles],
        template: TableHeaderCellTemplate,
    })
], TableHeaderCell);
TableHeaderCell.define();
export default TableHeaderCell;
//# sourceMappingURL=TableHeaderCell.js.map