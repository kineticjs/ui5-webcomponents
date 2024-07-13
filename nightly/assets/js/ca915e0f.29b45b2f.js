"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[8817],{90059:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>j,frontMatter:()=>d,metadata:()=>a,toc:()=>u});var o=t(31085),s=t(71184);const r='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-color-picker value="rgba(220, 208, 255, 1)">Picker</ui5-color-picker>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',i='import "@ui5/webcomponents/dist/ColorPicker.js";';function l(e){const{Editor:n}={...(0,s.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,o.jsx)(n,{html:r,js:i})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}const d={slug:"../ColorPicker"},h=void 0,a={id:"components/main/ColorPicker",title:"ColorPicker",description:"The ui5-color-picker allows users to choose any color and provides different input options for selecting colors.",source:"@site/docs/components/main/ColorPicker.mdx",sourceDirName:"components/main",slug:"/components/ColorPicker",permalink:"/ui5-webcomponents/nightly/components/ColorPicker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../ColorPicker"},sidebar:"componentsSidebar",previous:{title:"ColorPalettePopover",permalink:"/ui5-webcomponents/nightly/components/ColorPalettePopover"},next:{title:"ComboBox",permalink:"/ui5-webcomponents/nightly/components/ComboBox"}},p={},u=[{value:"Usage",id:"usage",level:3},{value:"When to use",id:"when-to-use",level:4},{value:"When not to use",id:"when-not-to-use",level:4},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"value",id:"value",level:3},{value:"name",id:"name",level:3},{value:"Slots",id:"slots",level:2},{value:"Events",id:"events",level:2},{value:"change",id:"change",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function x(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ui5-color-picker"})," allows users to choose any color and provides different input options for selecting colors."]}),"\n",(0,o.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.h4,{id:"when-to-use",children:"When to use"}),"\n",(0,o.jsx)(n.p,{children:"Use the color picker if:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"users need to select any color freely."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Users need to select one color from a predefined set of colors. Use the ColorPalette component instead."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'import "@ui5/webcomponents/dist/ColorPicker.js";'})}),"\n",(0,o.jsx)(n.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,o.jsx)(c,{}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(n.h3,{id:"value",children:"value"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Description"}),(0,o.jsxs)(n.td,{children:["Defines the currently selected color of the component.",(0,o.jsx)("br",{}),(0,o.jsx)(n.strong,{children:"Note"}),": use HEX, RGB, RGBA, HSV formats or a CSS color name when modifying this property."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Type"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Default"}),(0,o.jsx)(n.td,{children:'"rgba(255,255,255,1)"'})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Description"}),(0,o.jsxs)(n.td,{children:["Determines the name by which the component will be identified upon submission in an HTML form.",(0,o.jsx)("br",{}),(0,o.jsx)(n.strong,{children:"Note:"})," This property is only applicable within the context of an HTML Form element."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Type"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string | undefined"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Default"}),(0,o.jsx)(n.td,{children:"undefined"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Since"}),(0,o.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,o.jsx)(n.p,{children:"No slots available for this component."}),"\n",(0,o.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,o.jsx)(n.h3,{id:"change",children:"change"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Description"}),(0,o.jsx)(n.td,{children:"Fired when the the selected color is changed"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Type"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,o.jsx)(n.p,{children:"No methods available for this component."}),"\n",(0,o.jsx)(n.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,o.jsx)(n.p,{children:"No CSS parts available for this component."})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(14041);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);