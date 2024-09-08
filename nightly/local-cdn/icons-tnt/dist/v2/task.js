import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "task";
const pathData = "M52.897 355.306h405.208V92.819H52.897v262.487zm431.158 52.897H25.949q-10.978 0-18.464-7.486T0 382.253V65.871q0-10.978 7.485-18.464t18.464-7.485h458.106q10.978 0 19.462 7.485T512 65.871v316.382q0 10.979-8.483 18.464t-19.462 7.486z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/task";
export { pathData, ltr, accData };