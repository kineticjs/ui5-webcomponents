const isInstanceOfTable = (obj) => {
    return "isTable" in obj && !!obj.isTable;
};
const isInstanceOfTableCellBase = (obj) => {
    return "isTableCellBase" in obj && !!obj.isTableCellBase;
};
const isInstanceOfTableRowBase = (obj) => {
    return "isTableRowBase" in obj && !!obj.isTableRowBase;
};
export { isInstanceOfTable, isInstanceOfTableCellBase, isInstanceOfTableRowBase, };
//# sourceMappingURL=TableUtils.js.map