"use strict";import l from"./generated/VersionInfo.js";let o,t={include:[/^ui5-/],exclude:[]};const s=new Map,u=e=>{if(!e.match(/^[a-zA-Z0-9_-]+$/))throw new Error("Only alphanumeric characters and dashes allowed for the scoping suffix");o=e},c=()=>o,a=e=>{if(!e||!e.include)throw new Error('"rules" must be an object with at least an "include" property');if(!Array.isArray(e.include)||e.include.some(r=>!(r instanceof RegExp)))throw new Error('"rules.include" must be an array of regular expressions');if(e.exclude&&(!Array.isArray(e.exclude)||e.exclude.some(r=>!(r instanceof RegExp))))throw new Error('"rules.exclude" must be an array of regular expressions');e.exclude=e.exclude||[],t=e,s.clear()},m=()=>t,i=e=>{if(!s.has(e)){const r=t.include.some(n=>e.match(n))&&!t.exclude.some(n=>e.match(n));s.set(e,r)}return s.get(e)},p=e=>{if(i(e))return c()},d=e=>{const r=`v${l.version.replaceAll(".","-")}`,n=/(--_?ui5)([^,:)\s]+)/g;return e.replaceAll(n,`$1-${r}$2`)};export{u as setCustomElementsScopingSuffix,c as getCustomElementsScopingSuffix,a as setCustomElementsScopingRules,m as getCustomElementsScopingRules,i as shouldScopeCustomElement,p as getEffectiveScopingSuffixForTag,d as getScopedVarName};
//# sourceMappingURL=CustomElementsScopeUtils.js.map