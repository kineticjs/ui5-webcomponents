import { isLegacyThemeFamilyAsync } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/slim-arrow-down.js";
import { pathData as pathDatav5 } from "./v5/slim-arrow-down.js";

const getPathData = async() => {
	return await isLegacyThemeFamilyAsync() ? pathDatav4 : pathDatav5;
};

export default "slim-arrow-down";
export { getPathData, ltr, accData };