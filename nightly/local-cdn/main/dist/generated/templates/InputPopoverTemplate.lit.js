/* eslint no-unused-vars: 0 */
import { html, classMap, styleMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `${this.showSuggestions ? block1.call(this, context, tags, suffix) : undefined}${this.hasValueStateMessage ? block13.call(this, context, tags, suffix) : undefined} `; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-responsive-popover", tags, suffix)} class="${classMap(this.classes.popover)}" hide-arrow prevent-focus-restore prevent-initial-focus placement="Bottom" horizontal-align="Start" tabindex="-1" style="${styleMap(this.styles.suggestionsPopover)}" @ui5-open="${ifDefined(this._afterOpenPicker)}" @ui5-close="${ifDefined(this._afterClosePicker)}" @ui5-scroll="${ifDefined(this._scroll)}" .open=${ifDefined(this.open)} .opener=${ifDefined(this)}>${this._isPhone ? block2.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block7.call(this, context, tags, suffix) : undefined}<${scopeTag("ui5-list", tags, suffix)} separators="${ifDefined(this.suggestionSeparators)}" selection-mode="Single" @mousedown="${this.onItemMouseDown}" @ui5-item-click="${ifDefined(this._handleSuggestionItemPress)}" @ui5-selection-change="${ifDefined(this._handleSelectionChange)}"><slot></slot></${scopeTag("ui5-list", tags, suffix)}>${this._isPhone ? block12.call(this, context, tags, suffix) : undefined}</${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html `<ui5-responsive-popover class="${classMap(this.classes.popover)}" hide-arrow prevent-focus-restore prevent-initial-focus placement="Bottom" horizontal-align="Start" tabindex="-1" style="${styleMap(this.styles.suggestionsPopover)}" @ui5-open="${ifDefined(this._afterOpenPicker)}" @ui5-close="${ifDefined(this._afterClosePicker)}" @ui5-scroll="${ifDefined(this._scroll)}" .open=${ifDefined(this.open)} .opener=${ifDefined(this)}>${this._isPhone ? block2.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block7.call(this, context, tags, suffix) : undefined}<ui5-list separators="${ifDefined(this.suggestionSeparators)}" selection-mode="Single" @mousedown="${this.onItemMouseDown}" @ui5-item-click="${ifDefined(this._handleSuggestionItemPress)}" @ui5-selection-change="${ifDefined(this._handleSelectionChange)}"><slot></slot></ui5-list>${this._isPhone ? block12.call(this, context, tags, suffix) : undefined}</ui5-responsive-popover>`; }
function block2(context, tags, suffix) { return suffix ? html `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closePicker}"></${scopeTag("ui5-button", tags, suffix)}></div><div class="row"><div class="input-root-phone native-input-wrapper"><${scopeTag("ui5-input", tags, suffix)} class="ui5-input-inner-phone" type="${ifDefined(this.inputType)}" .value="${ifDefined(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${ifDefined(this.placeholder)}" @ui5-input="${ifDefined(this._handleInput)}" @ui5-change="${ifDefined(this._handleChange)}"></${scopeTag("ui5-input", tags, suffix)}></div></div></div>${this.hasValueStateMessage ? block3.call(this, context, tags, suffix) : undefined}` : html `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closePicker}"></ui5-button></div><div class="row"><div class="input-root-phone native-input-wrapper"><ui5-input class="ui5-input-inner-phone" type="${ifDefined(this.inputType)}" .value="${ifDefined(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${ifDefined(this.placeholder)}" @ui5-input="${ifDefined(this._handleInput)}" @ui5-change="${ifDefined(this._handleChange)}"></ui5-input></div></div></div>${this.hasValueStateMessage ? block3.call(this, context, tags, suffix) : undefined}`; }
function block3(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.suggestionPopoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.open ? block4.call(this, context, tags, suffix) : undefined}</div>` : html `<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.suggestionPopoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.open ? block4.call(this, context, tags, suffix) : undefined}</div>`; }
function block4(context, tags, suffix) { return html `${this.shouldDisplayDefaultValueStateMessage ? block5.call(this, context, tags, suffix) : block6.call(this, context, tags, suffix)}`; }
function block5(context, tags, suffix) { return html `${ifDefined(this.valueStateText)}`; }
function block6(context, tags, suffix) { return html `<slot name="valueStateMessage"></slot>`; }
function block7(context, tags, suffix) { return html `${this.hasValueStateMessage ? block8.call(this, context, tags, suffix) : undefined}`; }
function block8(context, tags, suffix) { return suffix ? html `<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.suggestionPopoverHeader)}><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.open ? block9.call(this, context, tags, suffix) : undefined}</div>` : html `<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.suggestionPopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.open ? block9.call(this, context, tags, suffix) : undefined}</div>`; }
function block9(context, tags, suffix) { return html `${this.shouldDisplayDefaultValueStateMessage ? block10.call(this, context, tags, suffix) : block11.call(this, context, tags, suffix)}`; }
function block10(context, tags, suffix) { return html `${ifDefined(this.valueStateText)}`; }
function block11(context, tags, suffix) { return html `<slot name="valueStateMessage"></slot>`; }
function block12(context, tags, suffix) { return suffix ? html `<div slot="footer" class="ui5-responsive-popover-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this._closePicker}">OK</${scopeTag("ui5-button", tags, suffix)}></div>` : html `<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closePicker}">OK</ui5-button></div>`; }
function block13(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-popover", tags, suffix)} skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" tabindex="-1" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}" .opener=${ifDefined(this)} .open=${ifDefined(this.valueStateOpen)} @ui5-close="${ifDefined(this._handleValueStatePopoverAfterClose)}"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.valueStateOpen ? block14.call(this, context, tags, suffix) : undefined}</div></${scopeTag("ui5-popover", tags, suffix)}>` : html `<ui5-popover skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" tabindex="-1" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}" .opener=${ifDefined(this)} .open=${ifDefined(this.valueStateOpen)} @ui5-close="${ifDefined(this._handleValueStatePopoverAfterClose)}"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.valueStateOpen ? block14.call(this, context, tags, suffix) : undefined}</div></ui5-popover>`; }
function block14(context, tags, suffix) { return html `${this.shouldDisplayDefaultValueStateMessage ? block15.call(this, context, tags, suffix) : block16.call(this, context, tags, suffix)}`; }
function block15(context, tags, suffix) { return html `${ifDefined(this.valueStateText)}`; }
function block16(context, tags, suffix) { return html `<slot name="valueStateMessage"></slot>`; }
export default block0;
//# sourceMappingURL=InputPopoverTemplate.lit.js.map