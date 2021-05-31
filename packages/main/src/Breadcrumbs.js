import ItemNavigation from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import {
	isSpace,
	isShow,
} from "@ui5/webcomponents-base/dist/Keys.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import NavigationMode from "@ui5/webcomponents-base/dist/types/NavigationMode.js";
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import BreadcrumbsSeparatorStyle from "./types/BreadcrumbsSeparatorStyle.js";

// Template
import BreadcrumbsTemplate from "./generated/templates/BreadcrumbsTemplate.lit.js";
import BreadcrumbsPopoverTemplate from "./generated/templates/BreadcrumbsPopoverTemplate.lit.js";

import {
	BREADCRUMBS_ARIA_LABEL,
	BREADCRUMBS_OVERFLOW_ARIA_LABEL,
	BREADCRUMBS_CANCEL_BUTTON,
} from "./generated/i18n/i18n-defaults.js";

// Styles
import breadcrumbsCss from "./generated/themes/Breadcrumbs.css.js";
import breadcrumbsPopoverCss from "./generated/themes/BreadcrumbsPopover.css.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-breadcrumbs",
	managedSlots: true,
	languageAware: true,
	slots: /** @lends sap.ui.webcomponents.main.Breadcrumbs.prototype */ {

		/**
		 * Defines the links of the <code>ui5-breadcrumbs</code>.
		 * <br><br>
		 * <b>Note:</b> Use <code>ui5-link</code> component to define the required anchors.
		 *
		 * @type {HTMLElement[]}
		 * @slot
		 * @public
		 */
		"default": {
			propertyName: "links",
			type: HTMLElement,
			individualSlots: true,
		},
	},
	properties: /** @lends  sap.ui.webcomponents.main.Breadcrumbs.prototype */ {

		/**
		 * Defines the <code>ui5-breadcrumbs</code> current location text.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		currentLocation: {
			type: String,
		},

		/**
		 * Determines the visual style of the separator between the Breadcrumbs elements.
		 *
		 * @type {BreadcrumbsSeparatorStyle}
		 * @defaultvalue "Slash"
		 * @public
		 */
		separatorStyle: {
			type: BreadcrumbsSeparatorStyle,
			defaultValue: BreadcrumbsSeparatorStyle.Slash,
		},

		/**
		 * Holds the number of link-items in the overflow
		 *
		 * @type {string}
		 * @defaultvalue "0"
		 * @private
		 */
		_countLinksInOverflow: {
			type: Integer,
			noAttribute: true,
			defaultValue: 0,
		},

	},
	events: /** @lends  sap.ui.webcomponents.main.Breadcrumbs.prototype */ {

		/**
		 * Fired when a link is activated.
		 *
		 * @event sap.ui.webcomponents.main.Breadcrumbs#item-click
		 * @param {HTMLElement} item The clicked item.
		 * @public
		 */
		"link-click": {
			detail: {
				link: { type: HTMLElement },
			},
		},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Breadcrumbs
 * @extends UI5Element
 * @tagname ui5-breadcrumbs
 * @public
 */
class Breadcrumbs extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return BreadcrumbsTemplate;
	}

	static get staticAreaTemplate() {
		return BreadcrumbsPopoverTemplate;
	}

	static get styles() {
		return breadcrumbsCss;
	}

	static get staticAreaStyles() {
		return breadcrumbsPopoverCss;
	}

	constructor() {
		super();
		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
		this.initItemNavigation();

		this._onContainerResizeHandler = this._onContainerResize.bind(this);
		this._onContentResizeHandler = this._onContentResize.bind(this);

		// maps links to their widths
		this._linkWidths = new WeakMap();
		// the width of the interactive element that opens the overflow
		this._overflowBtnWidth = 0;
		// a list of the two elements that wrap the breadcrumps content
		// and allow to monitor content-resize
		this._contentWrappers = null;
	}

	onAfterRendering() {
		this._cacheWidths();
		this._updateOverflow();
		this._contentWrappers = this.shadowRoot.querySelectorAll(".ui5-breadcrumbs-root > ol");
	}

	onEnterDOM() {
		ResizeHandler.register(this, this._onContainerResizeHandler);
		this._contentWrappers.forEach(el => ResizeHandler.register(el, this._onContentResizeHandler));
	}

	onExitDOM() {
		ResizeHandler.deregister(this, this._onContainerResizeHandler);
		if (this._contentWrappers) {
			this._contentWrappers.forEach(el => ResizeHandler.deregister(el, this._onContentResizeHandler));
		}
	}

	initItemNavigation() {
		if (!this._itemNavigation) {
			this._itemNavigation = new ItemNavigation(this, {
				navigationMode: NavigationMode.Horizontal,
				getItemsCallback: () => this._getFocusableItems(),
			});
		}
	}

	/**
	 * Obtains the items for navigation via keyboard
	 * @private
	 */
	_getFocusableItems() {
		const items = this._nonOverflowingLinks;
		let currentLocationLabel;

		if (this._hasLinksInOverflow) {
			items.unshift(this._overflowBtn);
		}
		if (this.currentLocation) {
			currentLocationLabel = this.shadowRoot.querySelector(".ui5-breadcrumbs-current-location ui5-label");
			currentLocationLabel && items.push(currentLocationLabel);
		}
		return items;
	}

	_onfocusin(event) {
		this._itemNavigation.setCurrentItem(event.target);
	}

	_onkeydown(event) {
		if (isShow(event)) {
			event.preventDefault();
			this._toggleRespPopover();
		}
		if (isSpace(event) && !this._isPickerOpen) {
			event.preventDefault();
		}
	}

	_onkeyup(event) {
		if (isSpace(event) && !this._isPickerOpen) {
			this._toggleRespPopover();
		}
	}

	_onContainerResize() {
		this._updateOverflow();
	}

	_onContentResize() {
		this._cacheWidths();
		this._updateOverflow();
	}

	/**
	 * Caches the space required to render the content
	 * @private
	 */
	_cacheWidths() {
		const map = this._linkWidths,
			linkItems = this.shadowRoot.querySelectorAll(".ui5-breadcrumbs-link-wrapper");

		for (let i = 0; i < linkItems.length; i++) {
			const link = linkItems[i].querySelector("slot").assignedElements()[0];
			map.set(link, this._getElementWidth(linkItems[i]));
		}

		if (this._hasLinksInOverflow) {
			const overflow = this.shadowRoot.querySelector(".ui5-breadcrumbs-overflow-opener");
			this._overflowBtnWidth = this._getElementWidth(overflow);
		}
	}

	_getElementWidth(element) {
		return Math.ceil(element.getBoundingClientRect().width);
	}

	_updateOverflow() {
		const links = this.getSlottedNodes("links").filter(link => !link.hidden),
			iAvailableWidth = this.shadowRoot.querySelector(".ui5-breadcrumbs-root").offsetWidth;
		let iRequiredWidth = this._getTotalContentWidth(),
			countLinksInOverflow = 0;

		if (iRequiredWidth > iAvailableWidth) {
			// need to show the overflow button as well
			iRequiredWidth += this._overflowBtnWidth;
		}

		while ((iRequiredWidth > iAvailableWidth)
			&& (countLinksInOverflow < links.length)) {
			const linkToOverflow = links[countLinksInOverflow],
				linkWidth = this._linkWidths.get(linkToOverflow) || 0;

			// move the link to the overflow
			iRequiredWidth -= linkWidth;
			countLinksInOverflow++;
		}

		this._countLinksInOverflow = countLinksInOverflow;

		// if overflow was emptied while picker was open => close redundant view
		if (this._countLinksInOverflow === 0 && this._isPickerOpen) {
			this._toggleRespPopover();
		}

		// if the last focused link has done into the overflow =>
		// ensure the first visible link is focusable
		const focusableItems = this._getFocusableItems();
		if (!focusableItems.some(x => x._tabIndex === "0")) {
			this._itemNavigation.setCurrentItem(focusableItems[0]);
		}

		links.forEach(link => link.classList.toggle("ui5-breadcrumbs-empty-link", !link.innerHTML));
	}

	_getTotalContentWidth() {
		const links = this.getSlottedNodes("links"),
			map = this._linkWidths,
			totalLinksWidth = links.reduce((sum, link) => sum + map.get(link), 0),
			currentLocationWidth = this._getElementWidth(this.shadowRoot.querySelector(".ui5-breadcrumbs-current-location"));

		return totalLinksWidth + currentLocationWidth;
	}

	async _respPopover() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		return staticAreaItem.querySelector("[ui5-responsive-popover]");
	}

	async _toggleRespPopover() {
		this.responsivePopover = await this._respPopover();

		if (this._isPickerOpen) {
			this.responsivePopover.close();
		} else {
			this.responsivePopover.open(this);
		}
	}

	_onLinkClick(event) {
		const link = event.target;
		this.fireEvent("link-click", { link });
	}

	_getSelectedItemIndex(item) {
		return [].indexOf.call(item.parentElement.children, item);
	}

	_onOverflowListItemSelect(event) {
		const item = event.detail.item,
			selectedItemIndex = this._getSelectedItemIndex(item),
			selectedLink = this._overflowingLinks[selectedItemIndex],
			selectedLinkTarget = selectedLink.target || "_self",
			windowFeatures = (selectedLinkTarget !== "_self") ? "noopener,noreferrer" : "";

		window.open(selectedLink.href, selectedLinkTarget, windowFeatures);
		this._toggleRespPopover();
		this.fireEvent("link-click", { link: selectedLink });
	}

	/**
	 * Getter for the interactive element that opens the overflow
	 * @private
	 */
	get _overflowBtn() {
		return this.shadowRoot.querySelector(".ui5-breadcrumbs-overflow-opener ui5-link");
	}

	/**
	 * Getter for the list of links to be renedered outside the overflow
	 */
	 get _nonOverflowingLinks() {
		return this.getSlottedNodes("links")
			.filter(link => !link.hidden)
			.slice(this._countLinksInOverflow);
	}

	/**
	 * Getter for the list of links to be renedered inside the overflow
	 */
	get _overflowingLinks() {
		return this.getSlottedNodes("links")
			.filter(link => !link.hidden)
			.slice(0, this._countLinksInOverflow)
			.reverse();
	}

	get _ariaHasPopup() {
		if (this._hasLinksInOverflow) {
			return "listbox";
		}
		return undefined;
	}

	get _isPickerOpen() {
		return !!this.responsivePopover && this.responsivePopover.opened;
	}

	get _hasLinksInOverflow() {
		return this._countLinksInOverflow > 0;
	}

	get _isOverflowEmpty() {
		return !this._countLinksInOverflow;
	}

	get _accessibleNameText() {
		return this.i18nBundle.getText(BREADCRUMBS_ARIA_LABEL) || undefined;
	}

	get _overflowAccessibleNameText() {
		return this.i18nBundle.getText(BREADCRUMBS_OVERFLOW_ARIA_LABEL) || undefined;
	}

	get _cancelButtonText() {
		return this.i18nBundle.getText(BREADCRUMBS_CANCEL_BUTTON) || undefined;
	}

	static get dependencies() {
		return [];
	}
}

Breadcrumbs.define();

export default Breadcrumbs;
