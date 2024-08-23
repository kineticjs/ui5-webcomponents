import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "local-process-call";
const pathData = "M96 32h384c17 0 32 13 32 32v384c0 19-13 32-32 32H256v-32h224V160H96v128H64V64c0-15 13-32 32-32zm59 293l67 64c3 3 4 6 4 11s-1 8-4 11l-67 64c-3 3-7 5-11 5-8 0-16-8-16-16 0-5 2-8 5-11l39-37H16c-11 0-16-5-16-16s5-16 16-16h156l-39-37c-3-3-5-6-5-11 0-8 8-16 16-16 4 0 8 2 11 5z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/local-process-call";
export { pathData, ltr, accData };