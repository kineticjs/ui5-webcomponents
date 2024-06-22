import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/FlexibleColumnLayout.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;background:var(--_ui5-v2-0-0-rc-6_fcl_solid_bg)}.ui5-fcl-root{height:100%;display:flex;flex-direction:row}.ui5-fcl-column{background:inherit;box-sizing:border-box;will-change:width;overflow-y:auto}.ui5-fcl-column-animation{transition:width .56s cubic-bezier(.1,0,.05,1),visibility .56s ease-in}.ui5-fcl-column--hidden{display:none}.ui5-fcl-separator{display:flex;align-items:center;justify-content:center;width:1rem;background-color:var(--sapShell_Background);border-inline-start:var(--_ui5-v2-0-0-rc-6_fcl_column_border);border-inline-end:var(--_ui5-v2-0-0-rc-6_fcl_column_border);position:relative}.ui5-fcl-separator:focus{border:var(--_ui5-v2-0-0-rc-6_fcl_separator_focus_border);outline:none}.ui5-fcl-grip{cursor:col-resize;overflow:visible;z-index:1;color:var(--sapButton_TextColor);padding-top:.3125rem;padding-bottom:.3125rem}.ui5-fcl-grip:before{background-image:var(--_ui5-v2-0-0-rc-6_fcl_decoration_top);bottom:calc(50% + 1rem)}.ui5-fcl-grip:after{background-image:var(--_ui5-v2-0-0-rc-6_fcl_decoration_bottom);top:calc(50% + 1rem)}.ui5-fcl-grip:before,.ui5-fcl-grip:after{content:"";position:absolute;left:0;height:4rem;width:100%;transition:all .1s ease-in;background-repeat:no-repeat;background-size:.0625rem 100%;background-position-x:calc(50% - .03125rem)}.ui5-fcl-separator:hover .ui5-fcl-grip:before,.ui5-fcl-separator:hover .ui5-fcl-grip:after{height:50%}[aria-hidden] ::slotted([slot="startColumn"]),[aria-hidden] ::slotted([slot="midColumn"]),[aria-hidden] ::slotted([slot="endColumn"]){visibility:hidden}
` };
export default styleData;
//# sourceMappingURL=FlexibleColumnLayout.css.js.map