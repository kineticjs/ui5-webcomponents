/* eslint no-unused-vars: 0 */
import { html, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<div class="ui5-avatar-root" tabindex="${ifDefined(this.tabindex)}" data-sap-focus-ref @keyup=${this._onkeyup} @keydown=${this._onkeydown} @click=${this._onclick} role="${ifDefined(this._role)}" aria-haspopup="${ifDefined(this._ariaHasPopup)}" aria-label="${ifDefined(this.accessibleNameText)}" fallback-icon="${ifDefined(this.fallbackIcon)}">${this.hasImage ? block1.call(this, context, tags, suffix) : block2.call(this, context, tags, suffix)}<slot name="badge"></slot></div>`; }
function block1(context, tags, suffix) { return html `<slot></slot>`; }
function block2(context, tags, suffix) { return html `${this.icon ? block3.call(this, context, tags, suffix) : undefined}${this.initials ? block4.call(this, context, tags, suffix) : undefined}`; }
function block3(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-avatar-icon" name="${ifDefined(this.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-avatar-icon" name="${ifDefined(this.icon)}"></ui5-icon>`; }
function block4(context, tags, suffix) { return suffix ? html `<span class="ui5-avatar-initials ui5-avatar-initials-hidden">${ifDefined(this.validInitials)}</span><${scopeTag("ui5-icon", tags, suffix)} class="ui5-avatar-icon ui5-avatar-icon-fallback ui5-avatar-fallback-icon-hidden" name="${ifDefined(this.fallbackIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<span class="ui5-avatar-initials ui5-avatar-initials-hidden">${ifDefined(this.validInitials)}</span><ui5-icon class="ui5-avatar-icon ui5-avatar-icon-fallback ui5-avatar-fallback-icon-hidden" name="${ifDefined(this.fallbackIcon)}"></ui5-icon>`; }
export default block0;
//# sourceMappingURL=AvatarTemplate.lit.js.map