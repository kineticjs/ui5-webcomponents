import type Table from "./Table";
import type TableCellBase from "./TableCellBase";
import type TableRowBase from "./TableRowBase";
declare const isInstanceOfTable: (obj: any) => obj is Table;
declare const isInstanceOfTableCellBase: (obj: any) => obj is TableCellBase;
declare const isInstanceOfTableRowBase: (obj: any) => obj is TableRowBase;
export { isInstanceOfTable, isInstanceOfTableCellBase, isInstanceOfTableRowBase, };
