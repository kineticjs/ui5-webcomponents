import { registerIllustration } from "@ui5/webcomponents-base/dist/asset-registries/Illustrations.js";
import dialogSvg from "./tnt-Dialog-MissionFailed.js";
import sceneSvg from "./tnt-Scene-MissionFailed.js";
import spotSvg from "./tnt-Spot-MissionFailed.js";
import dotSvg from "./tnt-Dot-MissionFailed.js";

const name = "MissionFailed";
const set = "tnt";
const collection = "V4";

registerIllustration(name, {
	dialogSvg,
	sceneSvg,
	spotSvg,
	dotSvg,
	set,
	collection,
});

export default "tnt/MissionFailed";
export {
	dialogSvg,
	sceneSvg,
	spotSvg,
	dotSvg,
};