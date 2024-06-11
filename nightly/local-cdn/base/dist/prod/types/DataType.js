"use strict";class r{static isValid(t){return!1}static attributeToProperty(t){return t}static propertyToAttribute(t){return t===null?null:String(t)}static valuesAreEqual(t,e){return t===e}static generateTypeAccessors(t){Object.keys(t).forEach(e=>{Object.defineProperty(this,e,{get(){return t[e]}})})}static get isDataTypeClass(){return!0}}export default r;
//# sourceMappingURL=DataType.js.map
