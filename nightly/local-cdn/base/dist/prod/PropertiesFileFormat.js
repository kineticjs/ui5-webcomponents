"use strict";const g=typeof window.chrome=="object"||typeof window.v8=="object"?(i,o)=>(o>2&&40*o>i.length&&Number(i),i):i=>i,u=/(?:\r\n|\r|\n|^)[ \t\f]*/,h=/(\\u[0-9a-fA-F]{0,4})|(\\.)|(\\$)|([ \t\f]*[ \t\f:=][ \t\f]*)/g,x=/(\\u[0-9a-fA-F]{0,4})|(\\.)|(\\$)/g,m={"\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},w=i=>{const o={},f=i.split(u);let n,r,c,t,l,e,s,p;const a=d=>{t?(t=`${t}${d}`,p++):(t=d,p=0)};for(l=0;l<f.length;l++)if(n=f[l],!(n===""||n.charAt(0)==="#"||n.charAt(0)==="!")){for(r=h,s=0,r.lastIndex=s,c=null,t="",e=r.exec(n);e!==null;){if(s<e.index&&a(n.slice(s,e.index)),s=r.lastIndex,e[1]){if(e[1].length!==6)throw new Error(`Incomplete Unicode Escape '${e[1]}'`);a(String.fromCharCode(parseInt(e[1].slice(2),16)))}else e[2]?a(m[e[2]]||e[2].slice(1)):e[3]?(n=f[++l],s=0,r.lastIndex=s):e[4]&&(c=t,t="",r=x,r.lastIndex=s);e=r.exec(n)}s<n.length&&a(n.slice(s)),c==null&&(c=t,t=""),o[c]=g(t,t?p:0)}return o};export default w;
//# sourceMappingURL=PropertiesFileFormat.js.map