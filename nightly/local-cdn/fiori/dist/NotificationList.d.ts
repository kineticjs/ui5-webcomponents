import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type { ListItemClickEventDetail, ListItemToggleEventDetail, ListItemCloseEventDetail } from "@ui5/webcomponents/dist/List.js";
import type NotificationListItemBase from "./NotificationListItemBase.js";
import NotificationListInternal from "./NotificationListInternal.js";
type NotificationItemEventDetail = {
    item: NotificationListItemBase;
};
type NotificationItemClickEventDetail = NotificationItemEventDetail;
type NotificationItemToggleEventDetail = NotificationItemEventDetail;
type NotificationItemCloseEventDetail = NotificationItemEventDetail;
/**
 * @class
 * ### Overview
 * The `ui5-notification-list` web component represents
 * a container for `ui5-li-notification-group` and `ui5-li-notification`.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/NotificationList.js";``
 * @constructor
 * @extends UI5Element
 * @since 2.0
 * @public
 */
declare class NotificationList extends UI5Element {
    /**
     * Defines the items of the component.
     *
     * @public
     */
    items: Array<NotificationListItemBase>;
    /**
     * Defines the text that is displayed when the component contains no items.
     * @default ""
     * @public
     */
    noDataText: string;
    get _accessibleName(): string;
    static i18nFioriBundle: I18nBundle;
    getEnabledItems(): import("@ui5/webcomponents/dist/ListItemBase.js").default[];
    get innerList(): NotificationListInternal;
    _onItemClick(e: CustomEvent<ListItemClickEventDetail>): void;
    _onItemClose(e: CustomEvent<ListItemCloseEventDetail>): void;
    _onItemToggle(e: CustomEvent<ListItemToggleEventDetail>): void;
    _onLoadMore(): void;
    static onDefine(): Promise<void>;
}
export default NotificationList;
export type { NotificationItemClickEventDetail, NotificationItemToggleEventDetail, NotificationItemCloseEventDetail, };
