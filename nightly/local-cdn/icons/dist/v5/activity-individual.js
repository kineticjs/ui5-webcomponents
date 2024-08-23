import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "activity-individual";
const pathData = "M90 115q-7 0-7 7v332q0 7 7 7h76q11 0 18.5 7t7.5 18-7.5 18.5T166 512H90q-24 0-41-17t-17-41V122q0-24 17-41t41-17h38v-6q0-24 17-41t41-17h76q24 0 41 17t17 41v6h38q24 0 41 17t17 41v44q0 11-7.5 18.5T390 192t-18-7.5-7-18.5v-44q0-7-7-7h-39q-5 20-20.5 32.5T262 160h-76q-21 0-36.5-12.5T130 115H90zm89-13q0 7 7 7h76q7 0 7-7V58q0-7-7-7h-76q-7 0-7 7v44zm157 234q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm74 80q29 0 49.5 20t20.5 45q0 15-7.5 23t-18.5 8H314q-13 0-19.5-8.5T288 481q0-25 20.5-45t49.5-20h52z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/activity-individual";
export { pathData, ltr, accData };