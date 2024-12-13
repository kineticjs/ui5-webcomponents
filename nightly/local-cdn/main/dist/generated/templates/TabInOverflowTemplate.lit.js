/* eslint no-unused-vars: 0 */
import { html, styleMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-li-custom", tags, suffix)} id="${ifDefined(this._id)}-li" class="${ifDefined(this.overflowClasses)}" style="${styleMap(this._forcedStyleInOverflow)}" type="${ifDefined(this.overflowState)}" disabled="${ifDefined(this.effectiveDisabled)}" ?selected="${this.selected}" ?movable="${this.movable}" .realTabReference="${ifDefined(this)}"><div class="ui5-tab-overflow-itemContent-wrapper"><div class="ui5-tab-overflow-itemContent">${this.semanticIconName ? block1.call(this, context, tags, suffix) : undefined}${this.icon ? block2.call(this, context, tags, suffix) : undefined}${ifDefined(this.text)}${this.additionalText ? block3.call(this, context, tags, suffix) : undefined}${this._designDescription ? block4.call(this, context, tags, suffix) : undefined}</div></div></${scopeTag("ui5-li-custom", tags, suffix)}>` : html `<ui5-li-custom id="${ifDefined(this._id)}-li" class="${ifDefined(this.overflowClasses)}" style="${styleMap(this._forcedStyleInOverflow)}" type="${ifDefined(this.overflowState)}" disabled="${ifDefined(this.effectiveDisabled)}" ?selected="${this.selected}" ?movable="${this.movable}" .realTabReference="${ifDefined(this)}"><div class="ui5-tab-overflow-itemContent-wrapper"><div class="ui5-tab-overflow-itemContent">${this.semanticIconName ? block1.call(this, context, tags, suffix) : undefined}${this.icon ? block2.call(this, context, tags, suffix) : undefined}${ifDefined(this.text)}${this.additionalText ? block3.call(this, context, tags, suffix) : undefined}${this._designDescription ? block4.call(this, context, tags, suffix) : undefined}</div></div></ui5-li-custom>`; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="${ifDefined(this.semanticIconClasses)}" name="${ifDefined(this.semanticIconName)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="${ifDefined(this.semanticIconClasses)}" name="${ifDefined(this.semanticIconName)}"></ui5-icon>`; }
function block2(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} name="${ifDefined(this.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon name="${ifDefined(this.icon)}"></ui5-icon>`; }
function block3(context, tags, suffix) { return html ` (${ifDefined(this.additionalText)}) `; }
function block4(context, tags, suffix) { return html `<div id="${ifDefined(this._id)}-designDescription" class="ui5-hidden-text">${ifDefined(this._designDescription)}</div>`; }
export default block0;
//# sourceMappingURL=TabInOverflowTemplate.lit.js.map