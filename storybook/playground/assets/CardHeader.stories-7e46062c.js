import{x as o}from"./lit-element-c5a2b594.js";import{o as i}from"./unsafe-html-0ddd83da.js";import{l as t}from"./if-defined-c29cffe1.js";const l={avatar:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},action:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}}},v={package:"@ui5/webcomponents",since:"1.0.0-rc.15",tagName:"ui5-card-header",showDefaultStoryOnly:!0},c={title:"Main/Card/Card Header",component:"CardHeader",argTypes:l},d=a=>o`
<ui5-card style="width: 22rem">
    <ui5-card-header
    slot="header"
    title-text="${t(a.titleText)}"
    subtitle-text="${t(a.subtitleText)}"
    additional-text="${t(a.additionalText)}"
    ?interactive="${t(a.interactive)}"
    >
    ${i(a.avatar)}
    ${i(a.action)}
    </ui5-card-header>
        <ui5-list separators="None" style="margin-block-end: 0.75rem;">
        <ui5-li image="../assets/images/avatars/man_avatar_2.png" description="Software Architect">Richard Wilson</ui5-li>
        <ui5-li image="../assets/images/avatars/woman_avatar_3.png" description="Visual Designer">Elena Petrova</ui5-li>
        <ui5-li image="../assets/images/avatars/man_avatar_3.png" description="Quality Specialist">John Miller</ui5-li>
    </ui5-list>
</ui5-card>
    `,e=d.bind({});e.tags=["_hidden_"];e.args={titleText:"Team Space",subtitleText:"Direct Reports",additionalText:"3 of 10",action:'<ui5-button design="Transparent" slot="action">View All</ui5-button>',avatar:'<ui5-icon name="group" slot="avatar"></ui5-icon>',interactive:!0};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  return html\`
<ui5-card style="width: 22rem">
    <ui5-card-header
    slot="header"
    title-text="\${ifDefined(args.titleText)}"
    subtitle-text="\${ifDefined(args.subtitleText)}"
    additional-text="\${ifDefined(args.additionalText)}"
    ?interactive="\${ifDefined(args.interactive)}"
    >
    \${unsafeHTML(args.avatar)}
    \${unsafeHTML(args.action)}
    </ui5-card-header>
        <ui5-list separators="None" style="margin-block-end: 0.75rem;">
        <ui5-li image="../assets/images/avatars/man_avatar_2.png" description="Software Architect">Richard Wilson</ui5-li>
        <ui5-li image="../assets/images/avatars/woman_avatar_3.png" description="Visual Designer">Elena Petrova</ui5-li>
        <ui5-li image="../assets/images/avatars/man_avatar_3.png" description="Quality Specialist">John Miller</ui5-li>
    </ui5-list>
</ui5-card>
    \`;
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const u=["Basic"],f=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,__namedExportsOrder:u,default:c},Symbol.toStringTag,{value:"Module"}));export{f as C,v as c};