(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),a=n(17),r=n.n(a),o=(n(24),n(1)),l=function(){return Object(o.jsx)("div",{className:"header-container",children:Object(o.jsx)("h1",{className:"header",children:"Freedom Wall"})})},i=n(4),j=(n(26),n(27),n(18)),u=function(e){var t=e.post,n=e.name,s=e.color;return Object(o.jsxs)("div",{className:"notes-container",style:{backgroundColor:"".concat(s)},children:[Object(o.jsx)("div",{className:"top",style:{backgroundColor:"".concat(s)}}),Object(o.jsx)("div",{className:"notes",children:Object(o.jsx)("span",{children:t})}),Object(o.jsxs)("h4",{className:"name",children:[Object(o.jsx)(j.a,{className:"hero"}),n]})]})},h=(n(28),n(7)),b=n.n(h),d=function(e){var t=e.handlePost,n=e.handleUser,s=e.post,c=e.user,a=e.status,r=["rgb(255, 187, 0)","#ff4d00","rgb(0, 234, 255)","rgb(255, 0, 43)","rgb(255, 0, 212)","rgb(123, 255, 0)","white","lightgray","rgb(238, 255, 0)"];return Object(o.jsxs)("div",{className:"main-notes",children:[Object(o.jsx)("textarea",{row:"8",cols:"10",placeholder:"What's on your mind?",className:"textarea",onChange:function(e){t(e.target.value)}}),Object(o.jsxs)("div",{className:"bottom-input",children:[Object(o.jsx)("input",{type:"text",className:"myname",placeholder:"Enter Pseudonym",onChange:function(e){n(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){var e=Math.floor(Math.random()*r.length);s.length<=0&&c.length<=0?a(!0):(b.a.post("https://mythoughtswall.herokuapp.com/",{datacolor:r[e],postmessage:s,username:c}),a(!1))},className:"post",children:"Post"})]})]})},m=n(19),O=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),r=Object(i.a)(a,2),l=r[0],j=r[1],h=Object(s.useState)(!1),O=Object(i.a)(h,2),p=O[0],x=O[1],f=Object(s.useState)([]),g=Object(i.a)(f,2),v=g[0],N=g[1];return Object(s.useEffect)((function(){b.a.get("https://mythoughtswall.herokuapp.com/post").then((function(e){N((function(t){return e.data}))}))})),Object(o.jsxs)(o.Fragment,{children:[p&&Object(o.jsxs)("div",{className:"container-error",children:[Object(o.jsx)(m.a,{className:"error-icon"}),Object(o.jsx)("span",{className:"error",children:"Please enter some text!"})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(d,{status:x,handlePost:c,handleUser:j,user:l,post:n}),v.map((function(e){return Object(o.jsx)(u,{post:e.post,name:e.name,color:e.color},e.id)}))]})]})},p=(n(47),function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(O,{})]})});r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.670cc775.chunk.js.map