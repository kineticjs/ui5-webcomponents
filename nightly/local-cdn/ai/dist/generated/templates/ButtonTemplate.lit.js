/* eslint no-unused-vars: 0 */
import { html, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} icon="${ifDefined(this.icon)}" end-icon="${ifDefined(this.endIcon)}"><slot></slot></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button icon="${ifDefined(this.icon)}" end-icon="${ifDefined(this.endIcon)}"><slot></slot></ui5-button>`; }
export default block0;
//# sourceMappingURL=ButtonTemplate.lit.js.map