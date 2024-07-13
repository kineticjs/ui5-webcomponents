import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/FormItem.css.ts", content: `:host([column-span="1"]){grid-column:span 1}:host([column-span="2"]){grid-column:span 2}:host([column-span="3"]){grid-column:span 3}:host([column-span="4"]){grid-column:span 4}:host([column-span="5"]){grid-column:span 5}:host([column-span="6"]){grid-column:span 6}.ui5-form-item-root{container-type:inline-size;background-color:inherit;color:inherit}.ui5-form-item-layout{display:grid;grid-template-columns:var(--ui5-v2-1-0-rc-0-form-item-layout);align-items:center}.ui5-form-item-label{padding:var(--ui5-v2-1-0-rc-0-form-item-label-padding);padding-inline-end:var(--ui5-v2-1-0-rc-0-form-item-label-padding-end);justify-self:var(--ui5-v2-1-0-rc-0-form-item-label-justify)}.ui5-form-item-content{display:flex;padding:0 .25rem}.ui5-form-item-content-child{padding-inline-end:.5rem;box-sizing:border-box;width:100%}:host([item-spacing="Large"]) .ui5-form-item-layout{min-height:var(--_ui5-v2-1-0-rc-0_form_item_min_height);padding-top:var(--_ui5-v2-1-0-rc-0_form_item_padding);padding-bottom:var(--_ui5-v2-1-0-rc-0_form_item_padding);box-sizing:border-box}::slotted([ui5-input]){width:100%}::slotted([ui5-select]){width:100%}
` };
export default styleData;
//# sourceMappingURL=FormItem.css.js.map