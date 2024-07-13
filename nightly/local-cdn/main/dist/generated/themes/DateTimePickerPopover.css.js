import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/DateTimePickerPopover.css.ts", content: `.ui5-dt-picker-content{display:flex;flex-direction:row;height:var(--_ui5-v2-1-0-rc-0_datetime_picker_height);min-width:var(--_ui5-v2-1-0-rc-0_datetime_picker_width);box-sizing:border-box;justify-content:center}.ui5-dt-picker-toggle-button{width:8rem}.ui5-dt-cal{width:auto;box-sizing:border-box}.ui5-dt-time{width:100%;min-width:var(--_ui5-v2-1-0-rc-0_datetime_timeview_width);box-sizing:border-box}.ui5-dt-cal.ui5-dt-cal--hidden,.ui5-dt-time.ui5-dt-time--hidden{display:none}.ui5-dt-picker-header{display:flex;justify-content:center;width:100%;margin-top:1rem;box-sizing:border-box}.ui5-dt-picker-separator{height:calc(100% - 2rem);width:0px;margin-top:1rem;margin-bottom:1rem;border-left:1px solid var(--sapGroup_ContentBorderColor);box-sizing:border-box}.ui5-dt-picker-footer{display:flex;justify-content:flex-end;align-items:center;height:2.75rem;width:100%}.ui5-dt-picker-footer.ui5-dt-picker-footer-time-hidden{padding:0}.ui5-dt-picker-action{margin:.25rem}#ok.ui5-dt-picker-action{width:4rem}.ui5-dt-picker-content--phone.ui5-dt-picker-content{min-width:20rem;height:calc(100% - 4rem)}.ui5-dt-picker-content--phone.ui5-dt-picker-content [ui5-time-selection-clocks]{height:var(--_ui5-v2-1-0-rc-0_datetime_timeview_phonemode_clocks_width);width:auto}.ui5-dt-picker-content--phone.ui5-dt-picker-content [ui5-calendar]{margin-bottom:var(--_ui5-v2-1-0-rc-0_datetime_dateview_phonemode_margin_bottom)}.ui5-dt-picker-content--phone .ui5-dt-cal{width:100%}.ui5-dt-picker-content--phone .ui5-dt-time{min-width:var(--_ui5-v2-1-0-rc-0_datetime_timeview_phonemode_width)}
` };
export default styleData;
//# sourceMappingURL=DateTimePickerPopover.css.js.map