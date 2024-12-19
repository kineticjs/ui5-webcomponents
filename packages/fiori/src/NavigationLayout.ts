import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import jsxRenderer from "@ui5/webcomponents-base/dist/renderer/JsxRenderer.js";
import browserScrollbarCSS from "@ui5/webcomponents/dist/generated/themes/BrowserScrollbar.css.js";
import {
	isPhone,
	isTablet,
	isCombi,
} from "@ui5/webcomponents-base/dist/Device.js";
import type SideNavigation from "./SideNavigation.js";

// Template
import NavigationLayoutTemplate from "./NavigationLayoutTemplate.js";

// Styles
import NavigationLayoutCss from "./generated/themes/NavigationLayout.css.js";

/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-navigation-layout` is a container component that can be used to
 * create a layout with a header, a side navigation and a content area.
 *
 * ### Usage
 *
 * Use the `ui5-navigation-layout` to create whole screen of an application with vertical navigation.
 *
 * ### Responsive Behavior
 *
 * On desktop and tablet devices, the side navigation remains visible and can
 * be expanded or collapsed using the `sideCollapsed` property. On phone devices, the side navigation
 * is hidden by default but can be displayed using the same `sideCollapsed` property.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents-fiori/dist/NavigationLayout.js";`
 * @constructor
 * @extends UI5Element
 * @since 2.4.0
 * @public
 */
@customElement({
	tag: "ui5-navigation-layout",
	languageAware: true,
	renderer: jsxRenderer,
	styles: [
		browserScrollbarCSS,
		NavigationLayoutCss,
	],
	template: NavigationLayoutTemplate,
})
class NavigationLayout extends UI5Element {
	_sideCollapsed = isPhone() || (isTablet() && !isCombi());

	/**
	 * @private
	 */
	@property({ type: Boolean })
	isPhone = isPhone();

	/**
	 * @private
	 */
	@property({ type: Boolean })
	isTablet = isTablet() && !isCombi();

	/**
	 * Indicates whether the side navigation is collapsed.
	 * @default false
	 * @public
	 */
	@property({ type: Boolean })
	set sideCollapsed(value: boolean) {
		this._sideCollapsed = value;

		if (isPhone()) {
			return;
		}

		const sideNavigation = this.sideContent[0];

		if (sideNavigation) {
			sideNavigation.collapsed = value;
		}
	}

	get sideCollapsed() : boolean {
		return this._sideCollapsed;
	}

	/**
	 * Defines the header.
	 * @public
	 */
	@slot()
	header!: Array<HTMLElement>;

	/**
	 * Defines the side content.
	 * @public
	 */
	@slot()
	sideContent!: Array<SideNavigation>;

	/**
	 * Defines the content.
	 * @public
	 */
	@slot({ type: HTMLElement, "default": true })
	content!: Array<HTMLElement>;

	onBeforeRendering() {
		if (isPhone()) {
			return;
		}

		const sideNavigation = this.sideContent[0];

		if (sideNavigation) {
			sideNavigation.collapsed = this.sideCollapsed;
		}
	}
}

NavigationLayout.define();

export default NavigationLayout;