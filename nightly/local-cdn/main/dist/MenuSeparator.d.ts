import type { ClassMap } from "@ui5/webcomponents-base/dist/types.js";
import ListItemBase from "./ListItemBase.js";
import type { IMenuItem } from "./Menu.js";
/**
 * @class
 * The `ui5-menu-separator` represents a horizontal line to separate menu items inside a `ui5-menu`.
 * @constructor
 * @extends ListItemBase
 * @implements {IMenuItem}
 * @public
 * @since 2.0
 */
declare class MenuSeparator extends ListItemBase implements IMenuItem {
    /**
     * **Note:** This property is inherited and not supported. If set, it won't take any effect.
     * @default false
     * @public
     */
    selected: boolean;
    get isSeparator(): boolean;
    get classes(): ClassMap;
    /**
     * @override
     */
    get _focusable(): boolean;
    /**
     * @override
     */
    get _pressable(): boolean;
}
export default MenuSeparator;