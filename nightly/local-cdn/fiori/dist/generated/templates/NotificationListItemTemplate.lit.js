/* eslint no-unused-vars: 0 */
import { html, repeat, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<li class="${ifDefined(this.itemClasses)}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" tabindex="${ifDefined(this.forcedTabIndex)}" aria-labelledby="${ifDefined(this.ariaLabelledBy)}" aria-level="2"><div class="${ifDefined(this.contentClasses)}">${this.hasImportance ? block1.call(this, context, tags, suffix) : undefined}<div class="ui5-nli-title-text-wrapper">${this.hasState ? block2.call(this, context, tags, suffix) : undefined}<div id="${ifDefined(this._id)}-title-text" class="ui5-nli-title-text" part="title-text"><span class="ui5-hidden-text">${ifDefined(this.stateText)}</span>${ifDefined(this.titleText)}</div></div>${this.isLoading ? block3.call(this, context, tags, suffix) : undefined}<span id="${ifDefined(this._id)}-read" class="ui5-hidden-text">${ifDefined(this.readText)}</span>${this.hasDesc ? block4.call(this, context, tags, suffix) : undefined}<div class="ui5-nli-footer"><div id="${ifDefined(this._id)}-footnotes" class="ui5-nli-footnotes">${repeat(this.footerItems, (item, index) => item._id || index, (item, index) => block5.call(this, context, tags, suffix, item, index))}</div><${scopeTag("ui5-link", tags, suffix)} class="ui5-nli-footer-showMore" ?hidden="${this.hideShowMore}" @ui5-click="${ifDefined(this._onShowMoreClick)}" wrapping-type="None" href="#"  showMore-btn accessible-name="${ifDefined(this.moreLinkAccessibleName)}" accessible-role="Button" .accessibilityAttributes=${ifDefined(this.accInfoLink.accessibilityAttributes)}>${ifDefined(this.showMoreText)}</${scopeTag("ui5-link", tags, suffix)}></div></div><div class="ui5-nli-actions">${this.showMenu ? block7.call(this, context, tags, suffix) : undefined}${this.showClose ? block8.call(this, context, tags, suffix) : undefined}</div><div class="ui5-nli-avatar" aria-hidden="true"><slot name="avatar"></slot></div><slot name="menu"></slot>${this.loading ? block9.call(this, context, tags, suffix) : undefined}</li>` : html `<li class="${ifDefined(this.itemClasses)}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" tabindex="${ifDefined(this.forcedTabIndex)}" aria-labelledby="${ifDefined(this.ariaLabelledBy)}" aria-level="2"><div class="${ifDefined(this.contentClasses)}">${this.hasImportance ? block1.call(this, context, tags, suffix) : undefined}<div class="ui5-nli-title-text-wrapper">${this.hasState ? block2.call(this, context, tags, suffix) : undefined}<div id="${ifDefined(this._id)}-title-text" class="ui5-nli-title-text" part="title-text"><span class="ui5-hidden-text">${ifDefined(this.stateText)}</span>${ifDefined(this.titleText)}</div></div>${this.isLoading ? block3.call(this, context, tags, suffix) : undefined}<span id="${ifDefined(this._id)}-read" class="ui5-hidden-text">${ifDefined(this.readText)}</span>${this.hasDesc ? block4.call(this, context, tags, suffix) : undefined}<div class="ui5-nli-footer"><div id="${ifDefined(this._id)}-footnotes" class="ui5-nli-footnotes">${repeat(this.footerItems, (item, index) => item._id || index, (item, index) => block5.call(this, context, tags, suffix, item, index))}</div><ui5-link class="ui5-nli-footer-showMore" ?hidden="${this.hideShowMore}" @ui5-click="${ifDefined(this._onShowMoreClick)}" wrapping-type="None" href="#"  showMore-btn accessible-name="${ifDefined(this.moreLinkAccessibleName)}" accessible-role="Button" .accessibilityAttributes=${ifDefined(this.accInfoLink.accessibilityAttributes)}>${ifDefined(this.showMoreText)}</ui5-link></div></div><div class="ui5-nli-actions">${this.showMenu ? block7.call(this, context, tags, suffix) : undefined}${this.showClose ? block8.call(this, context, tags, suffix) : undefined}</div><div class="ui5-nli-avatar" aria-hidden="true"><slot name="avatar"></slot></div><slot name="menu"></slot>${this.loading ? block9.call(this, context, tags, suffix) : undefined}</li>`; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-tag", tags, suffix)} id="${ifDefined(this._id)}-importance" class="ui5-nli-importance" design="Set2" color-scheme="2" wrapping-type="None"><${scopeTag("ui5-icon", tags, suffix)} name="high-priority" slot="icon"></${scopeTag("ui5-icon", tags, suffix)}>${ifDefined(this.importanceText)}</${scopeTag("ui5-tag", tags, suffix)}>` : html `<ui5-tag id="${ifDefined(this._id)}-importance" class="ui5-nli-importance" design="Set2" color-scheme="2" wrapping-type="None"><ui5-icon name="high-priority" slot="icon"></ui5-icon>${ifDefined(this.importanceText)}</ui5-tag>`; }
function block2(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-state-icon" name="${ifDefined(this.statusIconName)}" show-tooltip="true" accessible-name=${ifDefined(this.stateText)} design="${ifDefined(this.statusIconDesign)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-state-icon" name="${ifDefined(this.statusIconName)}" show-tooltip="true" accessible-name=${ifDefined(this.stateText)} design="${ifDefined(this.statusIconDesign)}"></ui5-icon>`; }
function block3(context, tags, suffix) { return html `<span id="${ifDefined(this._id)}-loading" class="ui5-hidden-text">${ifDefined(this.loadingText)}</span>`; }
function block4(context, tags, suffix) { return html `<div id="${ifDefined(this._id)}-description" class="ui5-nli-description"><slot></slot></div>`; }
function block5(context, tags, suffix, item, index) { return html `<slot name="${ifDefined(item.slotName)}"></slot>${item.showDivider ? block6.call(this, context, tags, suffix, item, index) : undefined}`; }
function block6(context, tags, suffix, item, index) { return html `<div class="ui5-nli-footer-divider" aria-hidden="true">·</div>`; }
function block7(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} icon="overflow" design="Transparent" @click="${this._onBtnMenuClick}" class="ui5-nli-menu-btn" tooltip="${ifDefined(this.menuBtnAccessibleName)}" .accessibilityAttributes=${ifDefined(this.accInfoButton.accessibilityAttributes)}></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button icon="overflow" design="Transparent" @click="${this._onBtnMenuClick}" class="ui5-nli-menu-btn" tooltip="${ifDefined(this.menuBtnAccessibleName)}" .accessibilityAttributes=${ifDefined(this.accInfoButton.accessibilityAttributes)}></ui5-button>`; }
function block8(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} icon="decline" class="ui5-nli-close-btn" design="Transparent" @click="${this._onBtnCloseClick}" tooltip="${ifDefined(this.closeBtnAccessibleName)}" accessible-name="${ifDefined(this.closeBtnAccessibleName)}" close-btn></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button icon="decline" class="ui5-nli-close-btn" design="Transparent" @click="${this._onBtnCloseClick}" tooltip="${ifDefined(this.closeBtnAccessibleName)}" accessible-name="${ifDefined(this.closeBtnAccessibleName)}" close-btn></ui5-button>`; }
function block9(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-busy-indicator", tags, suffix)} delay="${ifDefined(this.loadingDelay)}" active class="ui5-nli-loading" data-sap-focus-ref></${scopeTag("ui5-busy-indicator", tags, suffix)}>` : html `<ui5-busy-indicator delay="${ifDefined(this.loadingDelay)}" active class="ui5-nli-loading" data-sap-focus-ref></ui5-busy-indicator>`; }
export default block0;
//# sourceMappingURL=NotificationListItemTemplate.lit.js.map