import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/CalendarLegendItem.css.ts", content: `.ui5-calendar-legend-item-root{display:flex;flex-direction:row;flex-wrap:wrap;width:var(--_ui5-v2-0-0-rc-4-calendar-legend-item-root-width);white-space:pre-line;text-overflow:ellipsis;overflow:hidden;cursor:default;margin:.0625rem 0}.ui5-calendar-legend-item-box{display:inline-block;box-sizing:border-box;height:1rem;width:1rem;margin:var(--_ui5-v2-0-0-rc-4-calendar-legend-item-box-margin);margin-inline-end:var(--_ui5-v2-0-0-rc-4-calendar-legend-item-box-inner-margin);background:var(--sapLegend_WorkingBackground);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}.ui5-calendar-legend-item-text{display:flex;align-items:center;font-size:.875rem;line-height:1.25rem;color:var(--sapContent_LabelColor);font-weight:400;font-family:var(--sapFontFamily);font-size:var(--sapFontSmallSize);white-space:pre-line;text-overflow:ellipsis;overflow:hidden;cursor:default}:host([type="Today"]) .ui5-calendar-legend-item-box{border-color:var(--sapLegend_CurrentDateTime);border:.125rem solid var(--sapLegend_CurrentDateTime)}:host([type="Selected"]) .ui5-calendar-legend-item-box{background:var(--sapContent_Selected_Background);border:.0625rem solid var(--sapContent_FocusColor)}:host([type="NonWorking"]) .ui5-calendar-legend-item-box{background:var(--sapLegend_NonWorkingBackground);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type01"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor1);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type02"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor2);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type03"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor3);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type04"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor4);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type05"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor5);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type06"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor6);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type07"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor7);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type08"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor8);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type09"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor9);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type10"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor10);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type11"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor11);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type12"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor12);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type13"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor13);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type14"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor14);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type15"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor15);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type16"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor16);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type17"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor17);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type18"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor18);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type19"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor19);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type20"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor20);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}.ui5-calendar-legend-item-root:focus{outline:var(--_ui5-v2-0-0-rc-4-calendar-legend-item-root-focus-border);outline-offset:var(--_ui5-v2-0-0-rc-4-calendar-legend-item-root-focus-offset);border-radius:var(--_ui5-v2-0-0-rc-4-calendar-legend-item-root-focus-border-radius);margin:.0625rem 0}
` };
export default styleData;
//# sourceMappingURL=CalendarLegendItem.css.js.map