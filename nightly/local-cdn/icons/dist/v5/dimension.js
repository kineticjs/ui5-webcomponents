import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "dimension";
const pathData = "M218 512q-11 0-18.5-7.5T192 486V271q0-9 6-16t15-9l268-54h5q11 0 18.5 7.5T512 218v215q0 9-6 16t-15 9l-268 54h-5zm25-220v163l218-43V249zM122 416q-11 0-18.5-7.5T96 390V175q0-9 6-16t15-9l268-54h5q11 0 18.5 7.5T416 122q0 20-21 25l-248 49v194q0 11-7 18.5t-18 7.5zm-96-96q-11 0-18.5-7.5T0 294V79q0-9 6-16t15-9L289 0h5q11 0 18.5 7.5T320 26q0 20-21 25L51 100v194q0 11-7 18.5T26 320z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/dimension";
export { pathData, ltr, accData };