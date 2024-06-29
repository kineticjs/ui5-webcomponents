import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "float";
const pathData = "M142 426q12 0 20.5 8t8.5 20-8.5 20.5T142 483H28q-11 0-19.5-8.5T0 454t8.5-20 19.5-8h29V84H28q-11 0-19.5-8T0 55q0-11 8.5-19.5T28 27h57q12 0 20.5 8.5T114 55v371h28zm256-143v143h85q12 0 20.5 8t8.5 20-8.5 20.5T483 483H370q-12 0-20.5-8.5T341 454V255q0-12 8.5-20.5T370 226h85V84h-85q-12 0-20.5-8T341 55q0-11 8.5-19.5T370 27h113q12 0 20.5 8.5T512 55v200q0 12-8.5 20t-20.5 8h-85zm-142 86q12 0 20 8t8 20v86q0 11-8 19.5t-20 8.5q-11 0-20-8.5t-9-19.5v-86q0-12 9-20t20-8z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/float";
export { pathData, ltr, accData };