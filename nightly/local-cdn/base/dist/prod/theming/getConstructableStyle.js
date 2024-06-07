"use strict";import r from"./getEffectiveStyle.js";import{attachCustomCSSChange as l}from"./CustomStyle.js";const e=new Map;l(t=>{e.delete(`${t}_normal`)});const S=t=>{const n=`${t.getMetadata().getTag()}_normal`;if(!e.has(n)){const a=r(t),o=new CSSStyleSheet;o.replaceSync(a),e.set(n,[o])}return e.get(n)};export default S;
//# sourceMappingURL=getConstructableStyle.js.map
