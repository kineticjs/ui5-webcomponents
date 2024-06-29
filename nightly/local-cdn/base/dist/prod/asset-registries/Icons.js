"use strict";import y from"../getSharedResource.js";import{getIconCollectionByAlias as D}from"./util/IconCollectionsAlias.js";import{registerIconCollectionForTheme as h}from"./util/IconCollectionsByTheme.js";import m from"./util/getIconCollectionByTheme.js";import{getI18nBundle as C}from"../i18nBundle.js";const w="legacy",c=new Map,s=y("SVGIcons.registry",new Map),i=y("SVGIcons.promises",new Map),l="ICON_NOT_FOUND",T=(e,t)=>{c.set(e,t)},N=async e=>{if(!i.has(e)){if(!c.has(e))throw new Error(`No loader registered for the ${e} icons collection. Probably you forgot to import the "AllIcons.js" module for the respective package.`);const t=c.get(e);i.set(e,t(e))}return i.get(e)},I=e=>{Object.keys(e.data).forEach(t=>{const o=e.data[t];f(t,{pathData:o.path||o.paths,ltr:o.ltr,accData:o.acc,collection:e.collection,packageName:e.packageName})})},f=(e,t)=>{const o=`${t.collection}/${e}`;s.set(o,{pathData:t.pathData,ltr:t.ltr,accData:t.accData,packageName:t.packageName,customTemplate:t.customTemplate,viewBox:t.viewBox,collection:t.collection})},d=e=>{e.startsWith("sap-icon://")&&(e=e.replace("sap-icon://",""));let t;return[e,t]=e.split("/").reverse(),e=e.replace("icon-",""),t&&(t=D(t)),{name:e,collection:t}},u=e=>{const{name:t,collection:o}=d(e);return g(o,t)},n=async e=>{const{name:t,collection:o}=d(e);let r=l;try{r=await N(m(o))}catch(a){console.error(a.message)}if(r===l)return r;const p=g(o,t);return p||(Array.isArray(r)?r.forEach(a=>{I(a),h(o,{[a.themeFamily||w]:a.collection})}):I(r),g(o,t))},g=(e,t)=>{const o=`${m(e)}/${t}`;return s.get(o)},A=async e=>{if(!e)return;let t=u(e);if(t||(t=await n(e)),t&&t!==l&&t.accData)return(await C(t.packageName)).getText(t.accData)},k=async()=>(await n("edit"),await n("tnt/arrow"),await n("business-suite/3d"),Array.from(s.keys()));export{T as registerIconLoader,n as getIconData,u as getIconDataSync,A as getIconAccessibleName,f as registerIcon,k as _getRegisteredNames};
//# sourceMappingURL=Icons.js.map