import{x as p}from"./lit-element-c5a2b594.js";import{l as a}from"./if-defined-c29cffe1.js";import{o as u}from"./unsafe-html-0ddd83da.js";import{V as m}from"./ValueState-a555c094.js";const f={valueState:{control:"select",options:["None","Positive","Critical","Negative","Information"]},dateValue:{control:{type:!1}},valueStateMessage:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},openPicker:{description:"Opens the picker.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"},description:"Resolves when the picker is open"}}},closePicker:{description:"Closes the picker",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"},description:"Resolves when the picker is closed"}}},isOpen:{description:"Checks if the picker is open",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"boolean"}}}},formatValue:{description:"Formats a Java Script date object into a string representing a locale date and time\naccording to the `formatPattern` property of the TimePicker instance",table:{category:"methods"},UI5CustomData:{parameters:[{name:"date",type:{text:"Date"},description:"A Java Script date object to be formatted as string",_ui5privacy:"public"}],returnValue:{type:{text:"string"},description:"formatted value"}}},isValid:{description:"Checks if a value is valid against the current `formatPattern` value.\n\n**Note:** an empty string is considered as valid value.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"value",type:{text:"string | undefined"},description:"The value to be tested against the current date format",_ui5privacy:"public"}],returnValue:{type:{text:"boolean"}}}},change:{description:`Fired when the input operation has finished by clicking the "OK" button or
when the text in the input field has changed and the focus leaves the input field.`,control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The submitted value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}]}},input:{description:"Fired when the value of the `ui5-time-picker` is changed at each key stroke.",control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The current value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}]}}},S={package:"@ui5/webcomponents",since:"1.0.0-rc.6",tagName:"ui5-time-picker"},v={title:"Main/TimePicker",component:"TimePicker",argTypes:f},d=e=>p`<ui5-time-picker
    value="${a(e.value)}"
    value-state="${a(e.valueState)}"
    ?disabled="${a(e.disabled)}"
    ?readonly="${a(e.readonly)}"
    placeholder="${a(e.placeholder)}"
    format-pattern="${a(e.formatPattern)}"
>
    ${u(e.valueStateMessage)}
</ui5-time-picker>`,i=d.bind({}),t=d.bind({});t.storyName="Value State and Message";t.args={formatPattern:"hh:mm:ss a",valueState:m.Negative,valueStateMessage:'<div slot="valueStateMessage">Please provide valid value</div>'};var r,n,o;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:'args => html`<ui5-time-picker\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-time-picker>`',...(o=(n=i.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var s,l,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:'args => html`<ui5-time-picker\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-time-picker>`',...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const h=["Basic","WithValueState"],$=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,WithValueState:t,__namedExportsOrder:h,default:v},Symbol.toStringTag,{value:"Module"}));export{$ as C,S as c};
