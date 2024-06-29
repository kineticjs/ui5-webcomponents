/* eslint no-unused-vars: 0 */
import { html, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-notification-list-internal", tags, suffix)} .accessibleName="${ifDefined(this._accessibleName)}" .noDataText="${ifDefined(this.noDataText)}" @ui5-item-click="${ifDefined(this._onItemClick)}" @ui5-item-close="${ifDefined(this._onItemClose)}" @ui5-item-toggle="${ifDefined(this._onItemToggle)}" @ui5-load-more="${ifDefined(this._onLoadMore)}"><slot></slot></${scopeTag("ui5-notification-list-internal", tags, suffix)}>` : html `<ui5-notification-list-internal .accessibleName="${ifDefined(this._accessibleName)}" .noDataText="${ifDefined(this.noDataText)}" @ui5-item-click="${ifDefined(this._onItemClick)}" @ui5-item-close="${ifDefined(this._onItemClose)}" @ui5-item-toggle="${ifDefined(this._onItemToggle)}" @ui5-load-more="${ifDefined(this._onLoadMore)}"><slot></slot></ui5-notification-list-internal>`; }
export default block0;
//# sourceMappingURL=NotificationListTemplate.lit.js.map