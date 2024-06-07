"use strict";import a from"./isElementHidden.js";const r=e=>{if(!e)return!1;const n=e.nodeName.toLowerCase();if(e.hasAttribute("data-sap-no-tab-ref")||a(e))return!1;const t=e.getAttribute("tabindex");return t!=null?parseInt(t)>=0:n==="a"||/input|select|textarea|button|object/.test(n)?!e.disabled:!1};export default r;
//# sourceMappingURL=isElementTabbable.js.map
