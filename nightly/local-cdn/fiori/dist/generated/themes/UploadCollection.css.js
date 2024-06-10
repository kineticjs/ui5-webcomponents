import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/UploadCollection.css.ts", content: `:host(:not([hidden])){display:block}.ui5-uc-content{position:relative}.uc-no-files{background-color:var(--sapGroup_ContentBackground)}.uc-dnd-overlay{position:absolute;inset:.5rem;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--ui5-v2-0-0-rc-5_upload_collection_drag_overlay_border_radius)}.uc-drag-overlay{border:var(--ui5-v2-0-0-rc-5_upload_collection_drag_overlay_border)}.uc-drop-overlay{border:var(--ui5-v2-0-0-rc-5_upload_collection_drop_overlay_border)}.uc-dnd-overlay:before{content:"";position:absolute;inset:0;background-color:var(--sapGroup_ContentBackground);opacity:var(--ui5-v2-0-0-rc-5_upload_collection_drag_overlay_opacity);border-radius:var(--ui5-v2-0-0-rc-5_upload_collection_drag_overlay_border_radius)}.uc-drop-overlay:after{content:"";position:absolute;inset:0;background-color:var(--ui5-v2-0-0-rc-5_upload_collection_drop_overlay_background);opacity:.05;border-radius:var(--ui5-v2-0-0-rc-5_upload_collection_drag_overlay_border_radius)}.uc-dnd-overlay [ui5-icon]{width:4rem;height:4rem;margin-bottom:1rem;color:var(--ui5-v2-0-0-rc-5_upload_collection_drag_overlay_icon_color)}.uc-dnd-overlay .dnd-overlay-text{font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontHeader4Size);color:var(--ui5-v2-0-0-rc-5_upload_collection_drag_overlay_text_color)}.uc-dnd-overlay [ui5-icon],.uc-dnd-overlay .dnd-overlay-text{z-index:1;pointer-events:none}.uc-drop-overlay [ui5-icon],.uc-drop-overlay .dnd-overlay-text{color:var(--sapContent_DragAndDropActiveColor)}.uc-no-files-dnd-overlay{visibility:hidden}
` };
export default styleData;
//# sourceMappingURL=UploadCollection.css.js.map