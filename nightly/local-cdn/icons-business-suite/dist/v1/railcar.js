import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "railcar";
const pathData = "M48 16h416c17 0 32 13 32 32v160h-48v48c0 17-15 32-32 32H96c-19 0-32-15-32-32v-48H16V48c0-19 13-32 32-32zm416 32H48v128h48v80h320v-80h48V48zM0 384h48c8-36 40-64 79-64s71 28 78 64h86c8-36 40-64 79-64s71 28 78 64h64v64h-32v-32h-32c-7 37-39 64-78 64s-71-27-79-64h-86c-7 37-39 64-78 64s-71-27-79-64H32c-19 0-32-13-32-32zm325 32c7 19 24 32 45 32s38-13 45-32c2-5 3-11 3-16 0-6-1-11-3-16-7-19-24-32-45-32s-38 13-45 32c-2 5-3 10-3 16 0 5 1 11 3 16zM82 384c-2 5-3 10-3 16 0 5 1 11 3 16 7 19 24 32 45 32s38-13 45-32c2-5 3-11 3-16 0-6-1-11-3-16-7-19-24-32-45-32s-38 13-45 32z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/railcar";
export { pathData, ltr, accData };