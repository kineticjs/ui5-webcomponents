"use strict";import{camelToKebabCase as s,kebabToCamelCase as l}from"./util/StringHelper.js";import{getSlottedNodes as d}from"./util/SlotsHelper.js";import{getEffectiveScopingSuffixForTag as p}from"./CustomElementsScopeUtils.js";class u{constructor(t){this.metadata=t}getInitialState(){if(Object.prototype.hasOwnProperty.call(this,"_initialState"))return this._initialState;const t={};if(this.slotsAreManaged()){const r=this.getSlots();for(const[e,i]of Object.entries(r)){const n=i.propertyName||e;t[n]=[],t[l(n)]=t[n]}}return this._initialState=t,t}static validateSlotValue(t,a){return g(t,a)}getPureTag(){return this.metadata.tag||""}getTag(){const t=this.metadata.tag;if(!t)return"";const a=p(t);return a?`${t}-${a}`:t}hasAttribute(t){const a=this.getProperties()[t];return a.type!==Object&&a.type!==Array&&!a.noAttribute}getPropertiesList(){return Object.keys(this.getProperties())}getAttributesList(){return this.getPropertiesList().filter(this.hasAttribute.bind(this)).map(s)}canSlotText(){return this.getSlots().default?.type===Node}hasSlots(){return!!Object.entries(this.getSlots()).length}hasIndividualSlots(){return this.slotsAreManaged()&&Object.values(this.getSlots()).some(t=>t.individualSlots)}slotsAreManaged(){return!!this.metadata.managedSlots}supportsF6FastNavigation(){return!!this.metadata.fastNavigation}getProperties(){return this.metadata.properties||(this.metadata.properties={}),this.metadata.properties}getEvents(){return this.metadata.events||(this.metadata.events={}),this.metadata.events}getSlots(){return this.metadata.slots||(this.metadata.slots={}),this.metadata.slots}isLanguageAware(){return!!this.metadata.languageAware}isThemeAware(){return!!this.metadata.themeAware}getShadowRootOptions(){return this.metadata.shadowRootOptions||{}}isFormAssociated(){return!!this.metadata.formAssociated}shouldInvalidateOnChildChange(t,a,r){const e=this.getSlots()[t].invalidateOnChildChange;if(e===void 0)return!1;if(typeof e=="boolean")return e;if(typeof e=="object"){if(a==="property"){if(e.properties===void 0)return!1;if(typeof e.properties=="boolean")return e.properties;if(Array.isArray(e.properties))return e.properties.includes(r);throw new Error("Wrong format for invalidateOnChildChange.properties: boolean or array is expected")}if(a==="slot"){if(e.slots===void 0)return!1;if(typeof e.slots=="boolean")return e.slots;if(Array.isArray(e.slots))return e.slots.includes(r);throw new Error("Wrong format for invalidateOnChildChange.slots: boolean or array is expected")}}throw new Error("Wrong format for invalidateOnChildChange: boolean or object is expected")}}const g=(o,t)=>(o&&d(o).forEach(a=>{if(!(a instanceof t.type))throw new Error(`The element is not of type ${t.type.toString()}`)}),o);export default u;
//# sourceMappingURL=UI5ElementMetadata.js.map