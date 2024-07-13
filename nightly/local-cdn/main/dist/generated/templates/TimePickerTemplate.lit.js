/* eslint no-unused-vars: 0 */
import { html, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<div id="${ifDefined(this._id)}" class="ui5-time-picker-root"><${scopeTag("ui5-input", tags, suffix)} id="${ifDefined(this._id)}-inner" value="${ifDefined(this.value)}" placeholder="${ifDefined(this._placeholder)}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" ?required="${this.required}" value-state="${ifDefined(this.valueState)}" ._inputAccInfo="${ifDefined(this.accInfo)}" data-sap-focus-ref @click="${this._handleInputClick}" @ui5-change="${ifDefined(this._handleInputChange)}" @ui5-input="${ifDefined(this._handleInputLiveChange)}" @focusin="${this._onfocusin}" @input="${this._oninput}" class="ui5-time-picker-input" @keydown="${this._onkeydown}">${this.valueStateMessage.length ? block1.call(this, context, tags, suffix) : undefined}${!this.readonly ? block2.call(this, context, tags, suffix) : undefined}</${scopeTag("ui5-input", tags, suffix)}></div><${scopeTag("ui5-responsive-popover", tags, suffix)} id="${ifDefined(this._id)}-responsive-popover" class="ui5-time-picker-popover" placement="Bottom" horizontal-align="Start" .opener=${ifDefined(this)} ?open="${this.open}" allow-target-overlap _hide-header hide-arrow accessible-name="${ifDefined(this.pickerAccessibleName)}" @ui5-close="${ifDefined(this.onResponsivePopoverAfterClose)}" @ui5-open="${ifDefined(this.onResponsivePopoverAfterOpen)}" @wheel="${this._handleWheel}" @keydown="${this._onkeydown}"><${scopeTag("ui5-time-selection-clocks", tags, suffix)} id="${ifDefined(this._id)}-time-sel" value="${ifDefined(this._timeSelectionValue)}" format-pattern="${ifDefined(this._formatPattern)}" @ui5-change="${ifDefined(this.onTimeSelectionChange)}" @close-picker="${this.submitPickers}"></${scopeTag("ui5-time-selection-clocks", tags, suffix)}><div slot="footer" class="ui5-time-picker-footer"><${scopeTag("ui5-button", tags, suffix)} id="submit" design="Emphasized" @click="${this.submitPickers}">${ifDefined(this.submitButtonLabel)}</${scopeTag("ui5-button", tags, suffix)}><${scopeTag("ui5-button", tags, suffix)} id="close" design="Transparent" @click="${this._togglePicker}">${ifDefined(this.cancelButtonLabel)}</${scopeTag("ui5-button", tags, suffix)}></div></${scopeTag("ui5-responsive-popover", tags, suffix)}>${this._isPhone ? block3.call(this, context, tags, suffix) : undefined} ` : html `<div id="${ifDefined(this._id)}" class="ui5-time-picker-root"><ui5-input id="${ifDefined(this._id)}-inner" value="${ifDefined(this.value)}" placeholder="${ifDefined(this._placeholder)}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" ?required="${this.required}" value-state="${ifDefined(this.valueState)}" ._inputAccInfo="${ifDefined(this.accInfo)}" data-sap-focus-ref @click="${this._handleInputClick}" @ui5-change="${ifDefined(this._handleInputChange)}" @ui5-input="${ifDefined(this._handleInputLiveChange)}" @focusin="${this._onfocusin}" @input="${this._oninput}" class="ui5-time-picker-input" @keydown="${this._onkeydown}">${this.valueStateMessage.length ? block1.call(this, context, tags, suffix) : undefined}${!this.readonly ? block2.call(this, context, tags, suffix) : undefined}</ui5-input></div><ui5-responsive-popover id="${ifDefined(this._id)}-responsive-popover" class="ui5-time-picker-popover" placement="Bottom" horizontal-align="Start" .opener=${ifDefined(this)} ?open="${this.open}" allow-target-overlap _hide-header hide-arrow accessible-name="${ifDefined(this.pickerAccessibleName)}" @ui5-close="${ifDefined(this.onResponsivePopoverAfterClose)}" @ui5-open="${ifDefined(this.onResponsivePopoverAfterOpen)}" @wheel="${this._handleWheel}" @keydown="${this._onkeydown}"><ui5-time-selection-clocks id="${ifDefined(this._id)}-time-sel" value="${ifDefined(this._timeSelectionValue)}" format-pattern="${ifDefined(this._formatPattern)}" @ui5-change="${ifDefined(this.onTimeSelectionChange)}" @close-picker="${this.submitPickers}"></ui5-time-selection-clocks><div slot="footer" class="ui5-time-picker-footer"><ui5-button id="submit" design="Emphasized" @click="${this.submitPickers}">${ifDefined(this.submitButtonLabel)}</ui5-button><ui5-button id="close" design="Transparent" @click="${this._togglePicker}">${ifDefined(this.cancelButtonLabel)}</ui5-button></div></ui5-responsive-popover>${this._isPhone ? block3.call(this, context, tags, suffix) : undefined} `; }
function block1(context, tags, suffix) { return html `<slot name="valueStateMessage" slot="valueStateMessage"></slot>`; }
function block2(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} slot="icon" name="${ifDefined(this.openIconName)}" tabindex="-1" show-tooltip @click="${this._togglePicker}" ?pressed="${this.open}" class="ui5-time-picker-input-icon-button inputIcon"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon slot="icon" name="${ifDefined(this.openIconName)}" tabindex="-1" show-tooltip @click="${this._togglePicker}" ?pressed="${this.open}" class="ui5-time-picker-input-icon-button inputIcon"></ui5-icon>`; }
function block3(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-popover", tags, suffix)} id="${ifDefined(this._id)}-popover" class="ui5-time-picker-inputs-popover" placement="Bottom" horizontal-align="Start" allow-target-overlap _hide-header hide-arrow @ui5-open="${ifDefined(this.onInputsPopoverAfterOpen)}" @ui5-close="${ifDefined(this.onInputsPopoverAfterClose)}" @wheel="${this._handleWheel}" @keydown="${this._onkeydown}"><div class="popover-content"><${scopeTag("ui5-time-selection-inputs", tags, suffix)} id="${ifDefined(this._id)}-time-sel-inputs" value="${ifDefined(this._timeSelectionValue)}" format-pattern="${ifDefined(this._formatPattern)}" @ui5-change="${ifDefined(this.onTimeSelectionChange)}" @close-inputs="${this.submitInputsPopover}"></${scopeTag("ui5-time-selection-inputs", tags, suffix)}></div><div slot="footer" class="ui5-time-picker-footer"><${scopeTag("ui5-button", tags, suffix)} id="submitInputs" design="Emphasized" @click="${this.submitInputsPopover}">${ifDefined(this.submitButtonLabel)}</${scopeTag("ui5-button", tags, suffix)}><${scopeTag("ui5-button", tags, suffix)} id="closeInputs" design="Transparent" @click="${this.closeInputsPopover}">${ifDefined(this.cancelButtonLabel)}</${scopeTag("ui5-button", tags, suffix)}></div></${scopeTag("ui5-popover", tags, suffix)}>` : html `<ui5-popover id="${ifDefined(this._id)}-popover" class="ui5-time-picker-inputs-popover" placement="Bottom" horizontal-align="Start" allow-target-overlap _hide-header hide-arrow @ui5-open="${ifDefined(this.onInputsPopoverAfterOpen)}" @ui5-close="${ifDefined(this.onInputsPopoverAfterClose)}" @wheel="${this._handleWheel}" @keydown="${this._onkeydown}"><div class="popover-content"><ui5-time-selection-inputs id="${ifDefined(this._id)}-time-sel-inputs" value="${ifDefined(this._timeSelectionValue)}" format-pattern="${ifDefined(this._formatPattern)}" @ui5-change="${ifDefined(this.onTimeSelectionChange)}" @close-inputs="${this.submitInputsPopover}"></ui5-time-selection-inputs></div><div slot="footer" class="ui5-time-picker-footer"><ui5-button id="submitInputs" design="Emphasized" @click="${this.submitInputsPopover}">${ifDefined(this.submitButtonLabel)}</ui5-button><ui5-button id="closeInputs" design="Transparent" @click="${this.closeInputsPopover}">${ifDefined(this.cancelButtonLabel)}</ui5-button></div></ui5-popover>`; }
export default block0;
//# sourceMappingURL=TimePickerTemplate.lit.js.map