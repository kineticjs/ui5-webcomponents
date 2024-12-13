import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "meal";
const pathData = "M422 32q11 0 18.5 7.5T448 58v396q0 11-7.5 18.5T422 480t-18-7.5-7-18.5V314h-19q-11 0-18.5-8.5T352 281q0-6 1-26.5t4.5-48T366 148t12.5-56.5T397 49t25-17zm-192 0q11 0 18.5 7.5T256 58v70q0 33-20 58.5T186 220v234q0 11-7.5 18.5T160 480t-18.5-7.5T134 454V220q-30-8-50-33.5T64 128V58q0-11 7.5-18.5T90 32t18 7.5 7 18.5v70q0 11 5.5 21t13.5 16V58q0-11 7.5-18.5T160 32t18.5 7.5T186 58v107q8-6 13.5-16t5.5-21V58q0-11 7-18.5t18-7.5z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/meal";
export { pathData, ltr, accData };