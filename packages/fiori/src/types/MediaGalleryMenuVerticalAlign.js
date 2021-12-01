import DataType from "@ui5/webcomponents-base/dist/types/DataType.js";

/**
 * @lends sap.ui.webcomponents.fiori.types.MediaGalleryMenuVerticalAlign.prototype
 * @public
 */
const MediaGalleryMenuVerticalAligns = {
	/**
	 * The menu will be placed at the top of the reference control.
	 * @public
	 * @type {Top}
	 */
	Top: "Top",

	/**
	 * The menu will be placed at the bottom of the reference control.
	 * @public
	 * @type {Bottom}
	 */
	Bottom: "Bottom",
};

/**
 * @class
 * Types for the vertical alignment of the thumbnails menu of the MediaGallery component.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.fiori.types.MediaGalleryMenuVerticalAlign
 * @public
 * @enum {string}
 */
class MediaGalleryMenuVerticalAlign extends DataType {
	static isValid(value) {
		return !!MediaGalleryMenuVerticalAligns[value];
	}
}

MediaGalleryMenuVerticalAlign.generateTypeAccessors(MediaGalleryMenuVerticalAligns);

export default MediaGalleryMenuVerticalAlign;
