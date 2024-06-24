"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[4821],{49323:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>o,default:()=>u,frontMatter:()=>h,metadata:()=>a,toc:()=>j});var s=t(31085),d=t(71184);const i='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<title>Sample</title>\n</head>\n\n\t<body style="background-color: var(--sapBackgroundColor)">\n\t\t\x3c!-- playground-fold-end --\x3e\n\n\t\t<div style="height: 120px;">\n\t\t\t<ui5-ai-prompt-input id="prompt-input" show-clear-icon placeholder="Ask me anything..." label="User prompt:" maxlength="10" show-exceeded-text></ui5-ai-prompt-input>\n\t\t</div>\n\n\t\t\x3c!-- playground-fold --\x3e\n\t\t<script type="module" src="main.js"><\/script>\n\t</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',r='import "@ui5/webcomponents-ai/dist/PromptInput.js"\n\nconst input = document.getElementById("prompt-input")\n\ninput.addEventListener("ui5-input", () => {\n\tinput.valueState = input.value.length > input.maxlength ? "Negative" : "None";\n});\n';function l(e){const{Editor:n}={...(0,d.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(n,{html:i,js:r})}function c(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}const h={sidebar_class_name:"newComponentBadge expComponentBadge"},o=void 0,a={id:"components/ai/PromptInput",title:"PromptInput",description:"The @ui5/webcomponents-ai package is under development and considered experimental - components' APIs are subject to change.",source:"@site/docs/components/ai/PromptInput.mdx",sourceDirName:"components/ai",slug:"/components/ai/PromptInput",permalink:"/ui5-webcomponents/nightly/components/ai/PromptInput",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_class_name:"newComponentBadge expComponentBadge"},sidebar:"componentsSidebar",previous:{title:"ButtonState",permalink:"/ui5-webcomponents/nightly/components/ai/ButtonState"},next:{title:"Enums",permalink:"/ui5-webcomponents/nightly/components/ai/enums/"}},x={},j=[{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"value",id:"value",level:3},{value:"placeholder",id:"placeholder",level:3},{value:"label",id:"label",level:3},{value:"showClearIcon",id:"showclearicon",level:3},{value:"showExceededText",id:"showexceededtext",level:3},{value:"disabled",id:"disabled",level:3},{value:"readonly",id:"readonly",level:3},{value:"maxlength",id:"maxlength",level:3},{value:"valueState",id:"valuestate",level:3},{value:"Slots",id:"slots",level:2},{value:"valueStateMessage",id:"valuestatemessage",level:3},{value:"Events",id:"events",level:2},{value:"submit",id:"submit",level:3},{value:"input",id:"input",level:3},{value:"change",id:"change",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function p(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"@ui5/webcomponents-ai"})," package is under development and considered experimental - components' APIs are subject to change."]})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ui5-ai-prompt-input"})," component allows the user to write custom instructions in natural language, so that AI is guided to generate content tailored to user needs."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The web component is in an experimental state"]}),"\n",(0,s.jsx)(n.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,s.jsx)(n.p,{children:'`import "@ui5/webcomponents-ai/dist/PromptInput.js'}),"\n",(0,s.jsx)(n.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"value",children:"value"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the value of the component."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:'""'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"placeholder",children:"placeholder"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines a short hint intended to aid the user with data entry when the component has no value."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string | undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"undefined"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"label",children:"label"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the label of the input field."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string | undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"undefined"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"showclearicon",children:"showClearIcon"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines whether the clear icon of the input will be shown."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"showexceededtext",children:"showExceededText"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["Determines whether the characters exceeding the maximum allowed character count are visible in the component.",(0,s.jsx)("br",{}),"If set to ",(0,s.jsx)(n.code,{children:"false"}),", the user is not allowed to enter more characters than what is set in the ",(0,s.jsx)(n.code,{children:"maxlength"})," property. If set to ",(0,s.jsx)(n.code,{children:"true"})," the characters exceeding the ",(0,s.jsx)(n.code,{children:"maxlength"})," value are selected on paste and the counter below the component displays their number."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"disabled",children:"disabled"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["Defines whether the component is in disabled state.",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"Note:"})," A disabled component is completely noninteractive."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"readonly",children:"readonly"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["Defines whether the component is read-only.",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"Note:"})," A read-only component is not editable, but still provides visual feedback upon user interaction."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"maxlength",children:"maxlength"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Sets the maximum number of characters available in the input field."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number | undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"undefined"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"valuestate",children:"valueState"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the value state of the component."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"None" | "Positive" | "Critical" | "Negative" | "Information"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:'"None"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(n.h3,{id:"valuestatemessage",children:"valueStateMessage"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["Defines the value state message that will be displayed as pop up under the component. The value state message slot should contain only one root element.",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"Note:"})," If not specified, a default text (in the respective language) will be displayed.",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"Note:"})," The ",(0,s.jsx)(n.code,{children:"valueStateMessage"})," would be displayed, when the component is in ",(0,s.jsx)(n.code,{children:"Information"}),", ",(0,s.jsx)(n.code,{children:"Critical"})," or ",(0,s.jsx)(n.code,{children:"Negative"})," value state."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Array<HTMLElement>"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,s.jsx)(n.h3,{id:"submit",children:"submit"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Fired when the input operation has finished by pressing Enter or AI button is clicked."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CustomEvent"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"input",children:"input"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Fired when the value of the component changes at each keystroke, and when a suggestion item has been selected."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CustomEvent"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"change",children:"change"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Fired when the input operation has finished by pressing Enter or on focusout."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CustomEvent"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.p,{children:"No methods available for this component."}),"\n",(0,s.jsx)(n.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,s.jsx)(n.p,{children:"No CSS parts available for this component."})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(14041);const d={},i=s.createContext(d);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);