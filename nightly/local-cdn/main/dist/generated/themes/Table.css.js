import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Table.css.ts", content: `:host{display:block;color:var(--sapList_TextColor);font:var(--sapFontSize) var(--sapFontFamily)}:host([hidden]){display:none}#table{display:grid;grid-auto-rows:minmax(min-content,auto);background:var(--sapList_Background)}#nodata-cell{grid-column:1 / -1;justify-content:center}#footer{grid-column:1 / -1;grid-template-rows:subgrid;height:fit-content}#growing-cell{grid-column:1 / -1;justify-content:center;padding:0;border-top:1px solid var(--sapList_BorderColor);box-sizing:border-box}#busy-indicator{position:absolute;z-index:1;inset:0;height:100%}
` };
export default styleData;
//# sourceMappingURL=Table.css.js.map