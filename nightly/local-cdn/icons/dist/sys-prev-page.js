import { isLegacyThemeFamilyAsync } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/sys-prev-page.js";
import { pathData as pathDatav5 } from "./v5/sys-prev-page.js";

const getPathData = async() => {
	return await isLegacyThemeFamilyAsync() ? pathDatav4 : pathDatav5;
};

export default "sys-prev-page";
export { getPathData, ltr, accData };