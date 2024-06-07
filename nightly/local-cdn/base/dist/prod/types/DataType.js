"use strict";class e{static isValid(t){return!1}static attributeToProperty(t){return t}static propertyToAttribute(t){return t===null?null:String(t)}static valuesAreEqual(t,r){return t===r}static generateTypeAccessors(t){Object.keys(t).forEach(r=>{Object.defineProperty(this,r,{get(){return t[r]}})})}static get isDataTypeClass(){return!0}}export default e;
//# sourceMappingURL=DataType.js.map
