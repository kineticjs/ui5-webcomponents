import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "switch";
const pathData = "M461 302q0-11-7.5-18.5T435 276t-18.5 7.5T409 302v101q0 11 7.5 18.5T435 429t18.5-7.5T461 403V302zm-90 0q0-11-7.5-18.5T345 276t-18 7.5-7 18.5v101q0 11 7 18.5t18 7.5 18.5-7.5T371 403V302zm-90 0q0-11-7-18.5t-18-7.5-18.5 7.5T230 302v101q0 11 7.5 18.5T256 429t18-7.5 7-18.5V302zm-89 0q0-11-7.5-18.5T167 276q-11 0-18.5 7.5T141 302v101q0 11 7.5 18.5T167 429q10 0 17.5-7.5T192 403V302zm-89 0q0-11-7.5-18.5T77 276t-18.5 7.5T51 302v101q0 11 7.5 18.5T77 429t18.5-7.5T103 403V302zm306-77q44 0 73.5 25t29.5 62v82q0 18-8 33.5T482 455t-32.5 18.5T409 480H103q-22 0-40.5-6.5T30 455 8 427.5 0 394v-82q0-25 14-45t37-31v-50q0-11 7.5-18t18.5-7 18.5 7 7.5 18v39h51V117H77q-11 0-18.5-7T51 92t7.5-18.5T77 66h101q9 0 16 6t9 14q2 6 2 11v128h102V97q0-11 6.5-21T333 66h101q11 0 18.5 7.5T460 92t-7.5 18-18.5 7h-76v108h51z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/switch";
export { pathData, ltr, accData };