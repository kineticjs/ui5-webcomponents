import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import { isMobile } from "@ui5/webcomponents-base/dist/Device.js";
import { fetchI18nBundle, getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import { BrowserMultiFormatReader, BrowserCodeReader } from "@zxing/browser";
import { NotFoundException } from "@zxing/library";


// Template
import BarcodeScannerDialogTemplate from "./generated/templates/BarcodeScannerDialogTemplate.lit.js";

// Styles
import barcodeScannerDialogCss from "./generated/themes/BarcodeScannerDialog.css.js";

const metadata = {
	tag: "ui5-barcode-scanner-v2",
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

class BarcodeScannerV2 extends UI5Element {

	constructor() {
		super();
		this.i18nBundle = getI18nBundle("my-ui5-web-components"); // TODO: needed?
		this._codeReader = new BrowserMultiFormatReader();
		this._onResizeHandler = this._onResize.bind(this);
		this._shouldMonitorOrientationChange = isMobile();
		this._hasHorizontalLayout = false;
		this._selectedCameraId = null;
		this._cameras = null;

		this._initCamerasList();
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
		return BarcodeScannerDialogTemplate;
	}

	static get styles() {
		return null;
	}

	static get staticAreaStyles() {
		return [barcodeScannerDialogCss];
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
		this._openRespPopover(opener || this);
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

	async _initCamerasList() {
		this._cameras = await BrowserCodeReader.listVideoInputDevices();
		// TODO if no cameras.length
		this._cameras.push({
			label: "Mock second camera"
		});
		this._selectedCameraId = this._cameras[0].deviceId;
	}

	async _respPopover() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		return staticAreaItem.querySelector(".ui-barcode-scanner-popover");
	}

	async _videoElement() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		return staticAreaItem.querySelector(".ui-barcode-scanner-popover-video");
	}

	async _contentElement() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		return staticAreaItem.querySelector(".ui-barcode-scanner-popover-content");
	}

	async _openRespPopover(opener) {
		this.responsivePopover = await this._respPopover();
		this.responsivePopover.open(opener);
		if (this._shouldMonitorOrientationChange) {
			ResizeHandler.register(window.document.documentElement, this._onResizeHandler);
		}
	}

	_closeRespPopover() {
		this.responsivePopover.close();
		if (this._shouldMonitorOrientationChange) {
			ResizeHandler.deregister(window.document.documentElement, this._onResizeHandler);
		}
	}

	_startReader() {
		this._decodeFromCamera(this._selectedCameraId);
	}

	_resetReader() {
		//codeReader.stopAsyncDecode?
		//this._codeReader.reset();
		this._cameraConnector && this._cameraConnector.stop();
	}

	_closeDialog() {
		this._closeRespPopover();
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
		this._selectedCameraId = event.detail.selectedOption.value;
		this._cameraConnector && this._cameraConnector.stop();//this._codeReader.reset();
		this._decodeFromCamera(this._selectedCameraId);
	}

	async _decodeFromCamera(cameraId) {
		const videoElement = await this._videoElement();
		// TODO: It's possible for the returned promise to neither resolve nor reject, as the user is not required to make a choice at all and may ignore the request.
		this._cameraConnector = await this._codeReader.decodeFromVideoDevice(cameraId, videoElement, (result, err) => {
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

	get shouldRenderCamerasList() {
		return this._cameras.length > 1;
	}

	get camerasList() {
		return this._cameras;
	}

}

BarcodeScannerV2.define();

export default BarcodeScannerV2;