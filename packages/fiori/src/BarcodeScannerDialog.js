import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { fetchI18nBundle, getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import Dialog from "@ui5/webcomponents/dist/Dialog.js";
import Button from "@ui5/webcomponents/dist/Button.js";
import BusyIndicator from "@ui5/webcomponents/dist/BusyIndicator.js";
import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library";

// Template
import BarcodeScannerDialogTemplate from "./generated/templates/BarcodeScannerDialogTemplate.lit.js";

// Styles
import barcodeScannerDialogCss from "./generated/themes/BarcodeScannerDialog.css.js";

// Texts
import {
	BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT,
	BARCODE_SCANNER_DIALOG_LOADING_TXT,
} from "./generated/i18n/i18n-defaults.js";

const defaultMediaConstraints = {
	audio: false,
	video: {
		height: {
			min: 480,
			ideal: 960,
			max: 1440,
		},
		aspectRatio: 1.333333333,
		facingMode: "environment",
	},
};

/**
 * @public
 */
const metadata = {
	tag: "ui5-barcode-scanner-dialog",
	languageAware: true,
	slots: /** @lends  sap.ui.webcomponents.fiori.BarcodeScannerDialog.prototype */ {
	},
	properties: /** @lends  sap.ui.webcomponents.fiori.BarcodeScannerDialog.prototype */ {
		/**
		 * Indicates whether a loading indicator should be shown in the dialog.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @private
		 */
		loading: {
			type: Boolean,
		},
	},
	events: /** @lends  sap.ui.webcomponents.fiori.BarcodeScannerDialog.prototype */ {
		/**
		 * Fired when the scan completed successfuuly.
		 *
		 * @event sap.ui.webcomponents.fiori.BarcodeScannerDialog#scan-success
		 * @param {String} text the scan result as string.
		 * @param {Object} rawBytes the scan result as a Uint8Array.
		 * @public
		 */
		 "scan-success": {
			detail: {
				text: { type: String },
				rawBytes: { type: Object },
			},
		},

		/**
		 * Fired when the scan failed with error.
		 *
		 * @event sap.ui.webcomponents.fiori.BarcodeScannerDialog#scan-error
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

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>BarcodeScannerDialog</code> provides barcode scanning functionality for all devices that support the <code>MediaDevices.getUserMedia()</code> native API.
 * Opening the dialog launches the device camera and scans for known barcode formats.
 * <br>
 * <br>
 * Fires a <code>scanSuccess</code> event whenever a barcode is identified
 * and a <code>scanError</code> event when the scan failed (e.g. due to missing permisions).
 * <br>
 * <br>
 * The component internally uses the <ui5-link target="_blank" href="https://github.com/zxing-js/library">zxing-js/library</ui5-link> third party OSS.
 * Check the zxing-js/library documentation for the list of supported barcode formats.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.fiori.BarcodeScannerDialog
 * @extends UI5Element
 * @tagname ui5-barcode-scanner-dialog
 * @public
 * @since 1.0.0-rc.16
 */
class BarcodeScannerDialog extends UI5Element {
	constructor() {
		super();
		this.i18nBundle = getI18nBundle("@ui5/webcomponents-fiori");
		this._codeReader = new BrowserMultiFormatReader();
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
		await fetchI18nBundle("@ui5/webcomponents-fiori");
	}

	/**
	 * Opens a dialog with the camera videostream. Starts a scan session.
	 * @param {HTMLElement} opener the element relative to which the dialog is positioned
	 * @public
	 */
	open(opener) {
		if (!this._hasGetUserMedia()) {
			this.fireEvent("scan-error", { message: "getUserMedia() is not supported by your browser" });
			return;
		}

		this.loading = true;

		this._getUserPermission()
			.then(() => this._openDialog(opener || this))
			.catch(err => {
				this.fireEvent("scan-error", { message: err });
				this.loading = false;
			});
	}

	/**
	 * Closes the dialog and the scan session.
	 * @public
	 */
	close() {
		this._closeDialog();
		this.loading = false;
	}

	/**
	 *  PRIVATE METHODS
	 */

	_hasGetUserMedia() {
		return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
	}

	_getUserPermission() {
		return navigator.mediaDevices.getUserMedia(defaultMediaConstraints);
	}

	async _getDialog() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		return staticAreaItem.querySelector("[ui5-dialog]");
	}

	async _getVideoElement() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		return staticAreaItem.querySelector(".ui5-barcode-scanner-dialog-video");
	}

	async _openDialog(opener) {
		this.dialog = await this._getDialog();
		this.dialog.open(opener);
	}

	_closeDialog() {
		if (this._isOpen) {
			this.dialog.close();
		}
	}

	_startReader() {
		this._decodeFromCamera(null);
	}

	async _resetReader() {
		const videoElement = await this._getVideoElement();
		videoElement.pause();
		this._codeReader.reset();
	}

	async _decodeFromCamera(cameraId) {
		const videoElement = await this._getVideoElement();

		this._codeReader.decodeFromVideoDevice(cameraId, videoElement, (result, err) => {
			this.loading = false;
			if (result) {
				this.fireEvent("scan-success",
					{
						text: result.getText(),
						rawBytes: result.getRawBytes(),
					});
			}
			if (err && !(err instanceof NotFoundException)) {
				this.fireEvent("scan-error", { message: err });
			}
		}).catch(err => this.fireEvent("scan-error", { message: err }));
	}

	get _isOpen() {
		return !!this.dialog && this.dialog.opened;
	}

	get _cancelButtonText() {
		return this.i18nBundle.getText(BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT);
	}

	get _busyIndicatorText() {
		return this.i18nBundle.getText(BARCODE_SCANNER_DIALOG_LOADING_TXT);
	}

	static get dependencies() {
		return [
			Dialog,
			BusyIndicator,
			Button,
		];
	}
}

BarcodeScannerDialog.define();

export default BarcodeScannerDialog;
