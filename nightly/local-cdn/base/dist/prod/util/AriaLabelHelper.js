"use strict";const r=new WeakMap,o=new WeakMap,u={attributes:!0,childList:!0,characterData:!0,subtree:!0},v=e=>{const t=e;return t.accessibleNameRef?m(e):t.accessibleName?t.accessibleName:void 0},m=e=>{const t=e.accessibleNameRef?.split(" ")??[],s=e.getRootNode();let l="";return t.forEach((a,c)=>{const n=s.querySelector(`[id='${a}']`),d=`${n&&n.textContent?n.textContent:""}`;d&&(l+=d,c<t.length-1&&(l+=" "))}),l},E=e=>{const t=new Set;return b(e).forEach(c=>{t.add(c)}),(e.accessibleNameRef?.split(" ")??[]).forEach(c=>{const n=g(e,c);n&&t.add(n)}),Array.from(t)},b=e=>{const t=e.getRootNode().querySelectorAll(`[for="${e.id}"]`);return Array.from(t)},g=(e,t)=>e.getRootNode().querySelector(`[id='${t}']`),M=e=>{const t=[];if(b(e).forEach(l=>{const a=l.textContent;a&&t.push(a)}),t.length)return t.join(" ")},k=e=>s=>{if(!(s&&s.type==="property"&&s.name==="accessibleNameRef"))return;const l=o.get(e);if(!l)return;const a=l.observedElements,c=E(e);a.forEach(n=>{c.includes(n)||i(l,n)}),c.forEach(n=>{a.includes(n)||(f(l,n),l.observedElements.push(n))}),l?.callback()},A=(e,t)=>{if(o.has(e))return;const s=E(e),l=k(e),a={host:e,observedElements:s,callback:t,invalidationCallback:l};o.set(e,a),e.attachInvalidate(l),s.forEach(c=>{f(a,c)}),t()},f=(e,t)=>{let s=r.get(t);if(!s){s={observer:null,callbacks:[]};const l=new MutationObserver(()=>{s.callbacks.forEach(n=>{n()});const c=document.getElementById(t.id);e.host.id===t.getAttribute("for")||c||i(e,t)});s.observer=l,l.observe(t,u),r.set(t,s)}s.callbacks.includes(e.callback)||s.callbacks.push(e.callback)},i=(e,t)=>{const s=r.get(t);s&&(s.callbacks=s.callbacks.filter(l=>l!==e.callback),s.callbacks.length||(s.observer?.disconnect(),r.delete(t))),e.observedElements=e.observedElements.filter(l=>l!==t)},T=e=>{const t=o.get(e);if(!t)return;[...t.observedElements].forEach(l=>{i(t,l)}),e.detachInvalidate(t.invalidationCallback),o.delete(e)};export{v as getEffectiveAriaLabelText,M as getAssociatedLabelForTexts,A as registerUI5Element,T as deregisterUI5Element,m as getAllAccessibleNameRefTexts};
//# sourceMappingURL=AriaLabelHelper.js.map
