import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/NotificationListGroupItem.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;max-width:100%;min-height:var(--_ui5-v2-0-0-rc-5_list_item_base_height);background:var(--ui5-v2-0-0-rc-5-listitem-background-color);cursor:pointer}.ui5-nli-focusable:focus{outline:none}:host([desktop]) .ui5-nli-focusable:focus:not(.ui5-nli-group-root):after,.ui5-nli-focusable:focus-visible:not(.ui5-nli-group-root):after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:0;pointer-events:none}:host([loading]){opacity:.6;pointer-events:none}:host([loading]) .ui5-nli-loading{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.ui5-state-icon{min-width:1rem;min-height:1rem;padding-inline-end:var(--_ui5-v2-0-0-rc-5-notification_item-state-icon-padding)}:host([collapsed]) .ui5-nli-group-items{display:none}:host([read]) .ui5-nli-group-title-text{font-weight:400}.ui5-nli-group-root{display:flex;flex-direction:column;position:relative;width:100%;box-sizing:border-box}.ui5-nli-group-header{height:2.75rem;position:relative;background:var(--sapList_GroupHeaderBackground);display:flex;align-items:center;margin-block:var(--_ui5-v2-0-0-rc-5-notification_group_header-margin);padding-inline:var(--_ui5-v2-0-0-rc-5-notification_group_header-padding);width:100%;border-bottom:var(--_ui5-v2-0-0-rc-5-notification_group_header-border-bottom-width) solid var(--sapList_GroupHeaderBorderColor);box-sizing:border-box;cursor:pointer}:host([desktop]) .ui5-nli-focusable.ui5-nli-group-root:focus .ui5-nli-group-header:before,.ui5-nli-focusable.ui5-nli-group-root:focus-visible .ui5-nli-group-header:before{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:0;pointer-events:none}.ui5-nli-group-toggle-icon{min-width:1rem;min-height:1rem;margin-inline:.5rem;color:var(--sapContent_IconColor)}.ui5-nli-group-title-text{color:var(--sapGroup_TitleTextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontHeader5Size);font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:2rem;margin-inline-start:.75rem}.ui5-nli-group-divider{flex:1}:host([ui5-li-notification-group]){-webkit-tap-highlight-color:transparent}
` };
export default styleData;
//# sourceMappingURL=NotificationListGroupItem.css.js.map