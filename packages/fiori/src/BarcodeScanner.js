import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { fetchI18nBundle, getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import { BrowserMultiFormatReader } from "@zxing/library";

// Templates
import BarcodeScannerTemplate from "./generated/templates/BarcodeScannerTemplate.lit.js";
import BarcodeScannerPopoverTemplate from "./generated/templates/BarcodeScannerPopoverTemplate.lit.js";


const metadata = {
	tag: "ui5-barcode-scanner",
	properties: {
	},
	slots: {
	},
	events: {
		/**
		 * Fired when the scan completed successfuuly.
		 *
		 * @event
		 * @param {String} result the scan result.
		 * @public
		 */
		 scanSuccess: {
			detail: {
				result: { type: String },
			},
		},

		/**
		 * Fired when the scan failed with error.
		 *
		 * @event
		 * @param {String} message the error message.
		 * @public
		 */
		 scanError: {
			detail: {
				message: { type: String },
			},
		},
	},
};

class BarcodeScanner extends UI5Element {

	constructor() {
		super();
		this.i18nBundle = getI18nBundle("my-ui5-web-components");
		this.codeReader = new BrowserMultiFormatReader();
	}

	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return BarcodeScannerTemplate;
	}

	static get staticAreaTemplate() {
		return BarcodeScannerPopoverTemplate;
	}

	static get styles() {
		return null;
	}

	static async onDefine() {
		await fetchI18nBundle("my-ui5-web-components");
	}

	onClick() {
		this.open();
	}

	/**
	 * Opens a scan session.
	 *
	 * A popover with the camera videosteam is displayed.
	 */
	async open() {
		let deviceId;
		const videoElement = await this._videoElement();

		this.codeReader.listVideoInputDevices().then((devices) => {
			devices.length && (deviceId = devices[0].deviceId);

			// TODO: more than one camera device may be found
			// => user should be prompted to choose which <code>deviceId</code>
			this.codeReader.decodeFromVideoDevice(deviceId, videoElement, (result, err) => {
				if (result) {
					this._closeRespPopover();
					this.fireEvent("scanSuccess", { result });
				}
				if (err) {
					this.fireEvent("scanError", { err });
				}


			});
		});

		this._openRespPopover();
	}

	/**
	 * Closes the scan session.
	 *
	 * The popover with the camera videosteam is closed.
	 */
	close() {
		this._closeRespPopover();
	}

	/**
	 *  PRIVATE METHODS
	 */

	async _respPopover() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		return staticAreaItem.querySelector("[ui5-responsive-popover]");
	}

	async _videoElement() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		return staticAreaItem.querySelector(".ui-barcode-scanner-video");
	}

	async _openRespPopover() {
		this.responsivePopover = await this._respPopover();
		this.responsivePopover.open(this);
	}

	_closeRespPopover() {
		this.codeReader.reset();
		this.responsivePopover.close();
	}
}

BarcodeScanner.define();

export default BarcodeScanner;