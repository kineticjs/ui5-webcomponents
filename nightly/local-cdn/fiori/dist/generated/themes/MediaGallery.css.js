import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/MediaGallery.css.ts", content: `:host{height:100%}:host,.ui5-media-gallery-display-wrapper,.ui5-media-gallery-display{width:100%}.ui5-media-gallery-root{width:inherit;height:inherit;background:var(--sapBaseColor);display:flex;flex-direction:column;position:relative}:host([menu-vertical-align="Top"]) .ui5-media-gallery-root{flex-direction:column-reverse}:host([effective-layout="Horizontal"]) .ui5-media-gallery-root{flex-direction:row-reverse}:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-root{flex-direction:row}.ui5-media-gallery-display-wrapper{display:flex;justify-content:center;position:relative}:host([effective-layout="Horizontal"][show-all-thumbnails]) .ui5-media-gallery-display-wrapper{flex-grow:3;flex-basis:0}.ui5-media-gallery-display{position:relative;margin:1rem;display:flex;justify-content:center}.ui5-media-gallery-display [ui5-media-gallery-item]{z-index:1}[ui5-carousel]{width:calc(100% - 2rem)}[ui5-carousel]::part(item){padding:0;overflow:hidden}.ui5-media-gallery-thumbnails-wrapper{margin-block:1rem 0}:host([menu-vertical-align="Top"]) .ui5-media-gallery-thumbnails-wrapper{margin-block:0 1rem}:host([effective-layout="Horizontal"]) .ui5-media-gallery-thumbnails-wrapper{margin-inline:0 1rem}:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-thumbnails-wrapper{margin-inline:1rem 0}:host([show-all-thumbnails]) .ui5-media-gallery-thumbnails-wrapper{overflow-x:auto;overflow-y:hidden}:host([effective-layout="Horizontal"][show-all-thumbnails]) .ui5-media-gallery-thumbnails-wrapper{overflow-y:auto;overflow-x:hidden;flex-grow:1;flex-basis:0}.ui5-media-gallery-thumbnails-wrapper ul{height:5rem;display:flex;flex-wrap:nowrap;padding-left:0;margin-top:0;margin-bottom:0;list-style-type:none;padding-inline-start:0}:host([effective-layout="Horizontal"]) ul{width:5rem;flex-wrap:wrap}:host([effective-layout="Horizontal"][show-all-thumbnails][media-range="M"]) ul{width:10rem}:host([effective-layout="Horizontal"][show-all-thumbnails][media-range="L"]) ul{width:15rem}:host([effective-layout="Horizontal"][show-all-thumbnails][media-range="XL"]) ul{width:20rem}.ui5-media-gallery-thumbnail,.ui5-media-gallery-overflow [ui5-button]{width:4rem;height:4rem;flex-shrink:0}.ui5-media-gallery-overflow [ui5-button]{background:var(--_ui5-v2-1-0-rc-0_media_gallery_overflow_btn_background);color:var(--_ui5-v2-1-0-rc-0_media_gallery_overflow_btn_color);border:var(--_ui5-v2-1-0-rc-0_media_gallery_overflow_btn_border)}.ui5-media-gallery-thumbnail,.ui5-media-gallery-overflow{margin:0 0 0 1rem}:host([menu-vertical-align="Top"]) .ui5-media-gallery-thumbnail,:host([menu-vertical-align="Top"]) .ui5-media-gallery-overflow{margin:1rem 0 0 1rem}:host([effective-layout="Horizontal"]) .ui5-media-gallery-thumbnail,:host([effective-layout="Horizontal"]) .ui5-media-gallery-overflow{margin:1rem 0 0 1rem}:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-thumbnail,:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-overflow{margin:1rem 1rem 0 0}
` };
export default styleData;
//# sourceMappingURL=MediaGallery.css.js.map