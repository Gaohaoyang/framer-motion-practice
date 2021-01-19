(()=>{"use strict";var e={237:(e,t,n)=>{var r=n(851),a=n(34),o=n(444),l=n(630);const c=function(){return r.createElement(r.Fragment,null,r.createElement("h1",null,"hello framer-motion"),r.createElement("ul",null,r.createElement("li",null,r.createElement(o.rU,{to:"/AnimationElements"},"AnimationElements")),r.createElement("li",null,r.createElement(o.rU,{to:"/Variants"},"Variants"))))};var i=n(906);const s={rockStars:[{profile:"https://gw.alicdn.com/tfs/TB1EGxuQYr1gK0jSZFDXXb9yVXa-600-900.png"},{profile:"https://gw.alicdn.com/tfs/TB1qvBhQ7L0gK0jSZFtXXXQCXXa-995-935.png"},{profile:"https://gw.alicdn.com/tfs/TB1ibVhQ4z1gK0jSZSgXXavwpXa-640-520.png"},{profile:"https://gw.alicdn.com/tfs/TB1LI4Miz39YK4jSZPcXXXrUFXa-650-488.png"},{profile:"https://gw.alicdn.com/tfs/TB175OrhnM11u4jSZPxXXahcXXa-275-183.png"},{profile:"https://gw.alicdn.com/tfs/TB1JT0EQVP7gK0jSZFjXXc5aXXa-720-480.png"},{profile:"https://gw.alicdn.com/tfs/TB1UZprQWL7gK0jSZFBXXXZZpXa-610-610.png"},{profile:"https://gw.alicdn.com/tfs/TB1wW4rQVT7gK0jSZFpXXaTkpXa-225-225.png"},{profile:"https://gw.alicdn.com/tfs/TB1Qs8qQ.H1gK0jSZSyXXXtlpXa-602-570.png"}]};var p=n(574),u=n.n(p),m=n(82);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}u()(m.Z,{insert:"head",singleton:!1}),m.Z.locals;var d={start:function(e){return{rotate:e%2==0?[-1,1.3,0]:[1,-1.4,0],transition:{delay:-(.7*Math.random()+.05),repeat:1/0,duration:.07*Math.random()+.23}}},reset:{rotate:0}};const b=function(){var e=(0,i._7)();return r.createElement("div",null,r.createElement(i.ww.h2,{initial:{y:-20},animate:{x:50,y:10,scale:1.2}},"AnimationElements"),r.createElement("button",{type:"button",onClick:function(){e.start("start")}},"start shaking"),r.createElement("span",null," "),r.createElement("button",{type:"button",onClick:function(){e.stop(),e.set("reset")}},"stop shaking"),r.createElement("br",null),r.createElement("br",null),r.createElement("div",{className:"nine-wrap"},s.rockStars.slice(0,9).map((function(t,n){return r.createElement(i.ww.div,{className:"nine-card",key:"".concat(t.profile),style:g(g({},{originX:(16+40*Math.random())/100,originY:(15+36*Math.random())/100}),{},{backgroundImage:"url(".concat(t.profile,")")}),custom:n,variants:d,animate:e})}))))},w=function(){return r.createElement("div",null,"Variants")};var v=function(){return r.createElement(o.UT,null,r.createElement(l.rs,null,r.createElement(l.AW,{path:"/Variants"},r.createElement(w,null)),r.createElement(l.AW,{path:"/AnimationElements"},r.createElement(b,null)),r.createElement(l.AW,{path:"/"},r.createElement(c,null))))};(0,a.render)(r.createElement(v,null),document.getElementById("root"))},82:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(154),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".nine-wrap {\n  width: 100vw;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.nine-card {\n  width: 29.33333vw;\n  height: 37.33333vw;\n  margin-bottom: 3.2vw;\n  background-color: #cc6060;\n  background-size: cover;\n  background-position: center;\n  border-radius: 2.13333vw;\n  box-shadow: 0 1px 1.33333vw 1px rgba(0, 0, 0, 0.4);\n}\n",""]);const o=a}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.x=e=>{},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[237,527]],r=e=>{},a=(a,o)=>{for(var l,c,[i,s,p,u]=o,m=0,f=[];m<i.length;m++)c=i[m],n.o(e,c)&&e[c]&&f.push(e[c][0]),e[c]=0;for(l in s)n.o(s,l)&&(n.m[l]=s[l]);for(p&&p(n),a&&a(o);f.length;)f.shift()();return u&&t.push.apply(t,u),r()},o=self.webpackChunkframer_motion_practice=self.webpackChunkframer_motion_practice||[];function l(){for(var r,a=0;a<t.length;a++){for(var o=t[a],l=!0,c=1;c<o.length;c++){var i=o[c];0!==e[i]&&(l=!1)}l&&(t.splice(a--,1),r=n(n.s=o[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),r}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var c=n.x;n.x=()=>(n.x=c||(e=>{}),(r=l)())})(),n.x()})();