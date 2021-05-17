import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import { isMobile } from "@ui5/webcomponents-base/dist/Device.js";
import { fetchI18nBundle, getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library";


// Template
import BarcodeScannerPopoverTemplate from "./generated/templates/BarcodeScannerPopoverTemplate.lit.js";

// Styles
import barcodeScannerPopoverCss from "./generated/themes/BarcodeScannerPopover.css.js";

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
		 "scan-success": {
			detail: {
				text: { type: String },
				rawBytes: { type: Object }, // TODO Uint8Array
			},
		},

		/**
		 * Fired when the scan failed with error.
		 *
		 * @event
		 * @param {String} message the error message.
		 * @public
		 */
		 "scan-error": {
			detail: {
				message: { type: String },
			},
		},
	},
};

class BarcodeScanner extends UI5Element {

	constructor() {
		super();
		this.i18nBundle = getI18nBundle("my-ui5-web-components"); // TODO: needed?
		this._codeReader = new BrowserMultiFormatReader();
		this._onResizeHandler = this._onResize.bind(this);
		this._hasFullscreenPopover = isMobile();
		this._hasHorizontalLayout = false;
	}

	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return null;
	}

	static get staticAreaTemplate() {
		return BarcodeScannerPopoverTemplate;
	}

	static get styles() {
		return null;
	}

	static get staticAreaStyles() {
		return [barcodeScannerPopoverCss];
	}

	static async onDefine() {
		await fetchI18nBundle("my-ui5-web-components");
	}

	/**
	 * Opens a scan session.
	 *
	 * A popover with the camera videosteam is displayed.
	 */
	open(opener) {

		this._codeReader.listVideoInputDevices().then((cameras) => {
			if (!cameras.length) {
				// TODO:
				return;
			}

			cameras.push({
				label: "Mock second camera"
			});

			this._cameras = cameras;
			this._decodeFromCamera(cameras[0].deviceId);
			this._openRespPopover(opener || this);
		});

		
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
		return staticAreaItem.querySelector(".ui-barcode-scanner-popover");
	}

	async _videoElement() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		return staticAreaItem.querySelector(".ui-barcode-scanner-video");
	}

	async _contentElement() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		return staticAreaItem.querySelector(".ui-barcode-scanner-popover-content");
	}

	async _openRespPopover(opener) {
		this.responsivePopover = await this._respPopover();
		this.responsivePopover.open(opener);
		if (this._hasFullscreenPopover) {
			ResizeHandler.register(window.document.documentElement, this._onResizeHandler);
		}
	}

	_closeRespPopover() {
		this.responsivePopover.close();
		if (this._hasFullscreenPopover) {
			ResizeHandler.deregister(window.document.documentElement, this._onResizeHandler);
		}
	}

	_resetReader() {
		//codeReader.stopAsyncDecode?
		this._codeReader.reset();
	}

	async _onResize(event) {
		let contentElement = await this._contentElement(),
			parentElement = contentElement.assignedSlot.parentElement,
			isHorizontal = parentElement.offsetWidth > parentElement.offsetHeight,
			hasLayoutChanged = (isHorizontal !== this._hasHorizontalLayout);

		if (!hasLayoutChanged) {
			return;
		}
		contentElement.classList.toggle("horizontal", isHorizontal);
		this._hasHorizontalLayout = isHorizontal;
	}

	_onCameraChange(event) {
		let cameraId = event.detail.selectedOption.value;
		this._codeReader.reset();
		this._decodeFromCamera(cameraId);
	}

	async _decodeFromCamera(cameraId) {
		const videoElement = await this._videoElement();

		this._codeReader.decodeFromVideoDevice(cameraId, videoElement, (result, err) => {
			if (result) {
				this.fireEvent("scan-success",
					{
						text: result.getText(),
						rawBytes: result.getRawBytes()
					});
			}
			if (err && !(err instanceof NotFoundException)) {
				this.fireEvent("scan-error", { err });
			}
		});
	}

	get showCamerasList() {
		return this._cameras.length > 1;
	}

	get camerasList() {
		return this._cameras;
	}

	get popoverClassList() {
		return "";
	}

}

BarcodeScanner.define();

export default BarcodeScanner;