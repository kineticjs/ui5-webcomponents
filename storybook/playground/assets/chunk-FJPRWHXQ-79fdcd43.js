import{d as p}from"./index-356e4a49.js";import{j as u,D as c}from"./lit-element-c5a2b594.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:a}=u,m=(e,r)=>r===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===r,f=()=>document.createComment(""),T=(e,r,t)=>{var i;const d=e._$AA.parentNode,l=r===void 0?e._$AB:r._$AA;if(t===void 0){const n=d.insertBefore(f(),l),o=d.insertBefore(f(),l);t=new a(n,o,e,e.options)}else{const n=t._$AB.nextSibling,o=t._$AM,_=o!==e;if(_){let s;(i=t._$AQ)===null||i===void 0||i.call(t,e),t._$AM=e,t._$AP!==void 0&&(s=e._$AU)!==o._$AU&&t._$AP(s)}if(n!==l||_){let s=t._$AA;for(;s!==n;){const A=s.nextSibling;d.insertBefore(s,l),s=A}}}return t},v=(e,r,t=e)=>(e._$AI(r,t),e),O={},B=(e,r=O)=>e._$AH=r,b=e=>e._$AH,S=e=>{var r;(r=e._$AP)===null||r===void 0||r.call(e,!1,!0);let t=e._$AA;const i=e._$AB.nextSibling;for(;t!==i;){const d=t.nextSibling;t.remove(),t=d}},{global:g}=__STORYBOOK_MODULE_GLOBAL__,{simulatePageLoad:$,simulateDOMContentLoaded:h}=__STORYBOOK_MODULE_PREVIEW_API__;var{Node:y}=g,x=(e,r)=>{let{id:t,component:i}=r;if(!i)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);let d=document.createElement(i);return Object.entries(e).forEach(([l,n])=>{d[l]=n}),d};function H({storyFn:e,kind:r,name:t,showMain:i,showError:d,forceRemount:l},n){let o=e();if(i(),m(o)){(l||!n.querySelector('[id="root-inner"]'))&&(n.innerHTML='<div id="root-inner"></div>');let _=n.querySelector('[id="root-inner"]');c(o,_),$(n)}else if(typeof o=="string")n.innerHTML=o,$(n);else if(o instanceof y){if(n.firstChild===o&&!l)return;n.innerHTML="",n.appendChild(o),h()}else d({title:`Expecting an HTML snippet or DOM node from the story: "${t}" of "${r}".`,description:p`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}export{H as a,T as b,b as m,S as p,x as r,B as s,v as u};