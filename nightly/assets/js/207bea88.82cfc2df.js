"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[8656],{20129:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>n,metadata:()=>r,toc:()=>h});var d=i(31085),s=i(71184);const n={slug:"../../MenuItem"},l=void 0,r={id:"components/main/Menu/MenuItem",title:"MenuItem",description:"ui5-menu-item is the item to use inside a ui5-menu.",source:"@site/docs/components/main/Menu/MenuItem.mdx",sourceDirName:"components/main/Menu",slug:"/components/MenuItem",permalink:"/ui5-webcomponents/nightly/components/MenuItem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../../MenuItem"},sidebar:"componentsSidebar",previous:{title:"Menu",permalink:"/ui5-webcomponents/nightly/components/Menu"},next:{title:"MenuSeparator",permalink:"/ui5-webcomponents/nightly/components/MenuSeparator"}},c={},h=[{value:"Usage",id:"usage",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Properties",id:"properties",level:2},{value:"text",id:"text",level:3},{value:"additionalText",id:"additionaltext",level:3},{value:"icon",id:"icon",level:3},{value:"disabled",id:"disabled",level:3},{value:"loading",id:"loading",level:3},{value:"loadingDelay",id:"loadingdelay",level:3},{value:"accessibleName",id:"accessiblename",level:3},{value:"tooltip",id:"tooltip",level:3},{value:"accessibilityAttributes",id:"accessibilityattributes",level:3},{value:"type",id:"type",level:3},{value:"navigated",id:"navigated",level:3},{value:"highlight",id:"highlight",level:3},{value:"selected",id:"selected",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"endContent",id:"endcontent",level:3},{value:"deleteButton",id:"deletebutton",level:3},{value:"Events",id:"events",level:2},{value:"detail-click",id:"detail-click",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"ui5-menu-item"})," is the item to use inside a ",(0,d.jsx)(t.code,{children:"ui5-menu"}),".\nAn arbitrary hierarchy structure can be represented by recursively nesting menu items."]}),"\n",(0,d.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"ui5-menu-item"})," represents a node in a ",(0,d.jsx)(t.code,{children:"ui5-menu"}),". The menu itself is rendered as a list,\nand each ",(0,d.jsx)(t.code,{children:"ui5-menu-item"})," is represented by a list item in that list. Therefore, you should only use\n",(0,d.jsx)(t.code,{children:"ui5-menu-item"})," directly in your apps. The ",(0,d.jsx)(t.code,{children:"ui5-li"})," list item is internal for the list, and not intended for public use."]}),"\n",(0,d.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/MenuItem.js";'})}),"\n",(0,d.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(t.h3,{id:"text",children:"text"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsx)(t.td,{children:"Defines the text of the tree item."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string | undefined"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Default"}),(0,d.jsx)(t.td,{children:"undefined"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"additionaltext",children:"additionalText"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsxs)(t.td,{children:["Defines the ",(0,d.jsx)(t.code,{children:"additionalText"}),", displayed in the end of the menu item.",(0,d.jsx)("br",{}),(0,d.jsx)(t.strong,{children:"Note:"})," The additional text will not be displayed if there are items added in ",(0,d.jsx)(t.code,{children:"items"})," slot or there are components added to ",(0,d.jsx)(t.code,{children:"endContent"})," slot.",(0,d.jsx)("br",{}),"The priority of what will be displayed at the end of the menu item is as follows: sub-menu arrow (if there are items added in ",(0,d.jsx)(t.code,{children:"items"})," slot) -> components added in ",(0,d.jsx)(t.code,{children:"endContent"})," -> text set to ",(0,d.jsx)(t.code,{children:"additionalText"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string | undefined"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Default"}),(0,d.jsx)(t.td,{children:"undefined"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Since"}),(0,d.jsx)(t.td,{children:"1.8.0"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"icon",children:"icon"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsxs)(t.td,{children:["Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.",(0,d.jsx)("br",{}),(0,d.jsx)(t.strong,{children:"Example:"}),(0,d.jsx)("br",{}),"See all the available icons in the ",(0,d.jsx)(t.a,{href:"https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html",children:"Icon Explorer"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string | undefined"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Default"}),(0,d.jsx)(t.td,{children:"undefined"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"disabled",children:"disabled"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsxs)(t.td,{children:["Defines whether ",(0,d.jsx)(t.code,{children:"ui5-menu-item"})," is in disabled state.",(0,d.jsx)("br",{}),(0,d.jsx)(t.strong,{children:"Note:"})," A disabled ",(0,d.jsx)(t.code,{children:"ui5-menu-item"})," is noninteractive."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boolean"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Default"}),(0,d.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"loading",children:"loading"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsxs)(t.td,{children:["Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover.",(0,d.jsx)("br",{}),(0,d.jsx)(t.strong,{children:"Note:"})," If set to ",(0,d.jsx)(t.code,{children:"true"})," a ",(0,d.jsx)(t.code,{children:"ui5-busy-indicator"})," component will be displayed into the related one to the current ",(0,d.jsx)(t.code,{children:"ui5-menu-item"})," sub-menu popover."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boolean"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Default"}),(0,d.jsx)(t.td,{children:"false"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Since"}),(0,d.jsx)(t.td,{children:"1.13.0"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"loadingdelay",children:"loadingDelay"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsx)(t.td,{children:"Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"number"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Default"}),(0,d.jsx)(t.td,{children:"1000"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Since"}),(0,d.jsx)(t.td,{children:"1.13.0"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"accessiblename",children:"accessibleName"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsx)(t.td,{children:"Defines the accessible ARIA name of the component."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string | undefined"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Default"}),(0,d.jsx)(t.td,{children:"undefined"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Since"}),(0,d.jsx)(t.td,{children:"1.7.0"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"tooltip",children:"tooltip"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsx)(t.td,{children:"Defines the text of the tooltip for the menu item."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string | undefined"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Default"}),(0,d.jsx)(t.td,{children:"undefined"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Since"}),(0,d.jsx)(t.td,{children:"1.23.0"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"accessibilityattributes",children:"accessibilityAttributes"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsxs)(t.td,{children:["Defines the additional accessibility attributes that will be applied to the component. The following fields are supported:",(0,d.jsx)("br",{}),"- ",(0,d.jsx)(t.strong,{children:"ariaKeyShortcuts"}),": Indicated the availability of a keyboard shortcuts defined for the menu item.",(0,d.jsx)("br",{}),"- ",(0,d.jsx)(t.strong,{children:"role"}),': Defines the role of the menu item. If not set, menu item will have default role="menuitem".']})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ListItemAccessibilityAttributes"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Default"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Since"}),(0,d.jsx)(t.td,{children:"2.1.0"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"type",children:"type"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsxs)(t.td,{children:["Defines the visual indication and behavior of the list items. Available options are ",(0,d.jsx)(t.code,{children:"Active"})," (by default), ",(0,d.jsx)(t.code,{children:"Inactive"}),", ",(0,d.jsx)(t.code,{children:"Detail"})," and ",(0,d.jsx)(t.code,{children:"Navigation"}),".",(0,d.jsx)("br",{}),(0,d.jsx)(t.strong,{children:"Note:"})," When set to ",(0,d.jsx)(t.code,{children:"Active"})," or ",(0,d.jsx)(t.code,{children:"Navigation"}),", the item will provide visual response upon press and hover, while with type ",(0,d.jsx)(t.code,{children:"Inactive"})," and ",(0,d.jsx)(t.code,{children:"Detail"})," - will not."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:'"Inactive" | "Active" | "Detail" | "Navigation"'})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Default"}),(0,d.jsx)(t.td,{children:'"Active"'})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"navigated",children:"navigated"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsxs)(t.td,{children:["The navigated state of the list item. If set to ",(0,d.jsx)(t.code,{children:"true"}),", a navigation indicator is displayed at the end of the list item."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boolean"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Default"}),(0,d.jsx)(t.td,{children:"false"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Since"}),(0,d.jsx)(t.td,{children:"1.10.0"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"highlight",children:"highlight"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsxs)(t.td,{children:["Defines the highlight state of the list items. Available options are: ",(0,d.jsx)(t.code,{children:'"None"'})," (by default), ",(0,d.jsx)(t.code,{children:'"Positive"'}),", ",(0,d.jsx)(t.code,{children:'"Critical"'}),", ",(0,d.jsx)(t.code,{children:'"Information"'})," and ",(0,d.jsx)(t.code,{children:'"Negative"'}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:'"None" | "Positive" | "Critical" | "Negative" | "Information"'})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Default"}),(0,d.jsx)(t.td,{children:'"None"'})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Since"}),(0,d.jsx)(t.td,{children:"1.24"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"selected",children:"selected"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsx)(t.td,{children:"Defines the selected state of the component."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boolean"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Default"}),(0,d.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,d.jsx)(t.h3,{id:"default",children:"default"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsxs)(t.td,{children:["Defines the items of this component.",(0,d.jsx)("br",{}),(0,d.jsx)(t.strong,{children:"Note:"})," The slot can hold ",(0,d.jsx)(t.code,{children:"ui5-menu-item"})," and ",(0,d.jsx)(t.code,{children:"ui5-menu-separator"})," items.",(0,d.jsx)("br",{}),"If there are items added to this slot, an arrow will be displayed at the end of the item in order to indicate that there are items added. In that case components added to ",(0,d.jsx)(t.code,{children:"endContent"})," slot or ",(0,d.jsx)(t.code,{children:"additionalText"})," content will not be displayed.",(0,d.jsx)("br",{}),"The priority of what will be displayed at the end of the menu item is as follows: sub-menu arrow (if there are items added in ",(0,d.jsx)(t.code,{children:"items"})," slot) -> components added in ",(0,d.jsx)(t.code,{children:"endContent"})," -> text set to ",(0,d.jsx)(t.code,{children:"additionalText"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Array<IMenuItem>"})})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"endcontent",children:"endContent"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsxs)(t.td,{children:["Defines the components that should be displayed at the end of the menu item.",(0,d.jsx)("br",{}),(0,d.jsx)(t.strong,{children:"Note:"})," It is highly recommended to slot only components of type ",(0,d.jsx)(t.code,{children:"ui5-button"}),",",(0,d.jsx)(t.code,{children:"ui5-link"})," or ",(0,d.jsx)(t.code,{children:"ui5-icon"})," in order to preserve the intended design. If there are components added to this slot, and there is text set in ",(0,d.jsx)(t.code,{children:"additionalText"}),", it will not be displayed. If there are items added to ",(0,d.jsx)(t.code,{children:"items"})," slot, nether ",(0,d.jsx)(t.code,{children:"additionalText"})," nor components added to this slot would be displayed.",(0,d.jsx)("br",{}),"The priority of what will be displayed at the end of the menu item is as follows: sub-menu arrow (if there are items added in ",(0,d.jsx)(t.code,{children:"items"})," slot) -> components added in ",(0,d.jsx)(t.code,{children:"endContent"})," -> text set to ",(0,d.jsx)(t.code,{children:"additionalText"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Array<HTMLElement>"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Since"}),(0,d.jsx)(t.td,{children:"2.0.0"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"deletebutton",children:"deleteButton"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsxs)(t.td,{children:['Defines the delete button, displayed in "Delete" mode. ',(0,d.jsx)(t.strong,{children:"Note:"})," While the slot allows custom buttons, to match design guidelines, please use the ",(0,d.jsx)(t.code,{children:"ui5-button"})," component. ",(0,d.jsx)(t.strong,{children:"Note:"})," When the slot is not present, a built-in delete button will be displayed."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Array<IButton>"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Since"}),(0,d.jsx)(t.td,{children:"1.9.0"})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,d.jsx)(t.h3,{id:"detail-click",children:"detail-click"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Description"}),(0,d.jsxs)(t.td,{children:["Fired when the user clicks on the detail button when type is ",(0,d.jsx)(t.code,{children:"Detail"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,d.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,d.jsx)(t.p,{children:"No CSS parts available for this component."})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},71184:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>r});var d=i(14041);const s={},n=d.createContext(s);function l(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),d.createElement(n.Provider,{value:t},e.children)}}}]);