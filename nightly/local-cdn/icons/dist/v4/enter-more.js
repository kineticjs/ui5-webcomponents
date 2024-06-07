import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "enter-more";
const pathData = "M288 224q13 0 22.5 9t9.5 23v224q0 13-9.5 22.5T288 512H32q-14 0-23-9.5T0 480V256q0-14 9-23t23-9h256zm0 32H32v224h256V256zM503 88q9 10 9 23t-9 23l-92 86q-5 5-11 5t-11-5-5-11.5 5-11.5l75-69H273q-16 0-16-16t16-16h191l-75-68q-5-5-5-11.5T389 5t11-5 11 5z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/enter-more";
export { pathData, ltr, accData };