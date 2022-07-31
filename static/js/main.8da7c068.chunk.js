(this["webpackJsonpgenerator-passwords"]=this["webpackJsonpgenerator-passwords"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(1),c=n(4),a=n.n(c),i=n(2),r=(n(10),n(11),n(0)),o=function(){return Object(r.jsx)("p",{className:"header",children:"Generate Password"})},l=n(5),u=n.n(l),d=(n(13),function(t){var e=Object(s.useState)("CLICK GENERATE"),n=Object(i.a)(e,2),c=n[0],a=n[1],o=Object(s.useRef)(null),l=Object(s.useRef)(null);return t.newPassword!==c&&(a(t.newPassword),o.current.classList.remove("info-copied-on"),l.current.classList.add("info-click-to-copy-on")),Object(r.jsxs)("div",{className:"password-container",onClick:function(){"CLICK GENERATE"!==c&&(new u.a(".password-container"),o.current.classList.add("info-copied-on"),l.current.classList.remove("info-click-to-copy-on"))},"data-clipboard-text":c,children:[Object(r.jsx)("span",{className:"info-copied",ref:o,children:"copied"}),Object(r.jsx)("p",{className:"password",children:c}),Object(r.jsx)("span",{className:"info-click-to-copy",ref:l,children:"click to copy"})]})}),b=(n(14),function(t){return Object(r.jsx)("p",{className:"title",children:t.text})}),j=(n(15),function(t){var e=Object(s.useState)({background:"linear-gradient(90deg, #47aadd 43%, #fff 43%)"}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.jsxs)("div",{className:"length-password-container",children:[Object(r.jsx)("p",{className:"value-range",children:"4"}),Object(r.jsx)("input",{onInput:function(e){var n=e.target.value,s=100*(n-4)/28;a({background:"linear-gradient(90deg, #47aadd "+s+"%, #fff "+s+"%)"}),t.updateLength(n)},style:c,className:"range-password",type:"range",min:"4",max:"32",defaultValue:"16"}),Object(r.jsx)("p",{className:"value-range",children:"32"})]})}),p=(n(16),function(t){var e="btn-switch",n="switch-slider";function s(e){if(!0===t.set&&1===t.activeSet)return!1;var n=void 0;e.target.classList.contains("setting-subtitle")?n=e.target.nextElementSibling:e.target.classList.contains("btn-switch")?n=e.target:e.target.classList.contains("switch-slider")&&(n=e.target.parentElement),n.classList.contains("btn-switch-on")?t.updateSetting(!1):t.updateSetting(!0)}return!0===t.set&&(e="btn-switch btn-switch-on",n="switch-slider switch-slider-on"),!0===t.set&&1===t.activeSet&&(e="btn-switch btn-switch-on btn-switch-block",n="switch-slider switch-slider-on switch-slider-block"),Object(r.jsxs)("div",{className:"setting-container",children:[Object(r.jsx)("p",{className:"setting-subtitle",onClick:s,children:t.subtitle}),Object(r.jsx)("div",{className:e,onClick:s,children:Object(r.jsx)("div",{className:n})})]})}),h=(n(17),function(t){var e=t.lengthPassword,n=t.includeUppercase,s=t.includeLowercase,c=t.includeNumbers,a=t.includeSymbols;function i(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return t[Math.floor(Math.random()*(t.length-1-0+1))+0]}function o(){var t="abcdefghijklmnopqrstuvwxyz";return t[Math.floor(Math.random()*(t.length-1-0+1))+0]}function l(){var t="0123456789";return t[Math.floor(Math.random()*(t.length-1-0+1))+0]}function u(){var t='`~!@"#\u2116$;%^:&?*()_-+={}[]|<>,./';return t[Math.floor(Math.random()*(t.length-1-0+1))+0]}return Object(r.jsx)("button",{className:"btn-generate",onClick:function(){for(var r="",d=0;d<e;d++){var b=Math.floor(4*Math.random())+1;n&&1===b?r+=i():s&&2===b?r+=o():c&&3===b?r+=l():a&&4===b?r+=u():d--}t.updatePass(r)},children:"GENERATE PASSWORD"})}),f=function(){var t=Object(s.useState)("CLICK GENERATE"),e=Object(i.a)(t,2),n=e[0],c=e[1],a=Object(s.useState)(16),l=Object(i.a)(a,2),u=l[0],f=l[1],O=Object(s.useState)(!0),g=Object(i.a)(O,2),w=g[0],m=g[1],x=Object(s.useState)(!1),v=Object(i.a)(x,2),N=v[0],S=v[1],E=Object(s.useState)(!1),L=Object(i.a)(E,2),k=L[0],y=L[1],C=Object(s.useState)(!1),I=Object(i.a)(C,2),M=I[0],P=I[1],G=w+N+k+M,R=[{id:1,subtitle:"Include Uppercase",updateSetting:function(t){return m(t)},set:w},{id:2,subtitle:"Include Lowercase",updateSetting:function(t){return S(t)},set:N},{id:3,subtitle:"Include Numbers",updateSetting:function(t){return y(t)},set:k},{id:4,subtitle:"Include Symbols",updateSetting:function(t){return P(t)},set:M}];return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)(o,{}),Object(r.jsx)("div",{className:"wrapper",children:Object(r.jsx)(d,{newPassword:n})}),Object(r.jsx)(b,{text:"LENGTH: "+u}),Object(r.jsx)("div",{className:"wrapper",children:Object(r.jsx)(j,{updateLength:function(t){return f(t)}})}),Object(r.jsx)(b,{text:"SETTINGS:"}),Object(r.jsxs)("div",{className:"wrapper",children:[R.map((function(t){return Object(r.jsx)(p,{subtitle:t.subtitle,updateSetting:t.updateSetting,set:t.set,activeSet:G},t.id)})),Object(r.jsx)(h,{lengthPassword:u,includeUppercase:w,includeLowercase:N,includeNumbers:k,includeSymbols:M,updatePass:function(t){return c(t)}})]})]})};a.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.8da7c068.chunk.js.map