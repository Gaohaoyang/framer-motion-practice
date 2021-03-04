(()=>{"use strict";var e={5459:(e,n,t)=>{var r=t(5851),i=t(3034),o=t(444),a=t(1848),c=t.n(a),s=t(3630),l=t(645),d=t(7574),p=t.n(d),m=t(384);p()(m.Z,{insert:"head",singleton:!1}),m.Z.locals;var u=["Spring","FadeInOut","Orchestration","ShakingCards","Fireworks","RedEnvelope","FlipCard","DragBall","DraggableFloatBtn"],f={visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.1}},hidden:{opacity:0}},v={visible:{opacity:1,x:0},hidden:{opacity:0,x:100}};const g=function(){return r.createElement("div",null,r.createElement(l.E.h1,{initial:{scale:.8},animate:{scale:1,transition:{}}},"hello framer-motion"),r.createElement(l.E.ul,{initial:"hidden",animate:"visible",variants:f},u.map((function(e){return r.createElement(l.E.li,{key:e,variants:v},r.createElement(o.rU,{to:"/".concat(e)},e))}))))};var _=t(4844);const h={rockStars:[{profile:"https://gw.alicdn.com/tfs/TB1EGxuQYr1gK0jSZFDXXb9yVXa-600-900.png"},{profile:"https://gw.alicdn.com/tfs/TB1qvBhQ7L0gK0jSZFtXXXQCXXa-995-935.png"},{profile:"https://gw.alicdn.com/tfs/TB1ibVhQ4z1gK0jSZSgXXavwpXa-640-520.png"},{profile:"https://gw.alicdn.com/tfs/TB1LI4Miz39YK4jSZPcXXXrUFXa-650-488.png"},{profile:"https://gw.alicdn.com/tfs/TB175OrhnM11u4jSZPxXXahcXXa-275-183.png"},{profile:"https://gw.alicdn.com/tfs/TB1JT0EQVP7gK0jSZFjXXc5aXXa-720-480.png"},{profile:"https://gw.alicdn.com/tfs/TB1UZprQWL7gK0jSZFBXXXZZpXa-610-610.png"},{profile:"https://gw.alicdn.com/tfs/TB1wW4rQVT7gK0jSZFpXXaTkpXa-225-225.png"},{profile:"https://gw.alicdn.com/tfs/TB1Qs8qQ.H1gK0jSZSyXXXtlpXa-602-570.png"}]};var b=t(1216);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){E(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}p()(b.Z,{insert:"head",singleton:!1}),b.Z.locals;var y={start:function(e){return{rotate:e%2==0?[-1,1.3,0]:[1,-1.4,0],transition:{delay:-(.7*Math.random()+.05),repeat:1/0,repeatType:"mirror",duration:.07*Math.random()+.23}}},reset:{rotate:0}};const k=function(){var e=(0,_._)();return r.createElement("div",null,r.createElement(l.E.h2,{initial:{y:-20},animate:{x:10,y:0}},"AnimationElements"),r.createElement("button",{type:"button",onClick:function(){e.start("start")}},"start shaking"),r.createElement("span",null," "),r.createElement("button",{type:"button",onClick:function(){e.stop(),e.set("reset")}},"stop shaking"),r.createElement("br",null),r.createElement("br",null),r.createElement("div",{class:"src-components-shakingCards-_index_nine-wrap"},h.rockStars.slice(0,9).map((function(n,t){return r.createElement(l.E.div,{class:"src-components-shakingCards-_index_nine-card",key:"".concat(n.profile),style:x(x({},{originX:(16+40*Math.random())/100,originY:(15+36*Math.random())/100}),{},{backgroundImage:"url(".concat(n.profile,")")}),custom:t,variants:y,animate:e})}))))};var L=t(1405);p()(L.Z,{insert:"head",singleton:!1}),L.Z.locals;var j={hidden:{scale:.1,opacity:0},visible:{scale:[.1,1.34],opacity:[0,1,1,0],transition:{times:[0,.2,.8,1],duration:2.2,repeat:1/0}}},O={hidden:{scale:.1,opacity:0},visible:{scale:[.1,1.34],opacity:[0,1,1,0],transition:{delay:.9,times:[0,.2,.7,1],duration:2.4,repeat:1/0}}};const C=function(){return r.createElement("div",{class:"src-components-fireworks-_index_container"},r.createElement("h1",{class:"src-components-fireworks-_index_title"},"fireworks"),r.createElement(l.E.div,{class:"src-components-fireworks-_index_fireworks src-components-fireworks-_index_f1",variants:j,initial:"hidden",animate:"visible"}),r.createElement(l.E.div,{class:"src-components-fireworks-_index_fireworks src-components-fireworks-_index_f2",variants:O,initial:"hidden",animate:"visible"}))};var S=t(8e3),B={fadeIn:{scale:1,transition:{type:"spring",stiffness:500}},whileTap:{scale:[1,.988,1],transition:{duration:.2}},fadeOut:{opacity:0,transition:{duration:.3}}},I={initial:{z:800},start:{rotateY:360,transition:{repeat:1/0,duration:1.5}}},P=t(4469);p()(P.Z,{insert:"head",singleton:!1}),P.Z.locals;const F=function(){return r.createElement("div",{class:"src-components-redEnvelope-detailList-detailListItem-_index_container"},r.createElement("div",{class:"src-components-redEnvelope-detailList-detailListItem-_index_left"},r.createElement("div",{class:"src-components-redEnvelope-detailList-detailListItem-_index_profile",style:{backgroundImage:"url(https://gw.alicdn.com/tfs/TB1ubmmRHr1gK0jSZFDXXb9yVXa-500-500.png)"}}),r.createElement("div",{class:"src-components-redEnvelope-detailList-detailListItem-_index_nickWrap"},r.createElement("div",{class:"src-components-redEnvelope-detailList-detailListItem-_index_nick"},"及时雨"),r.createElement("div",{class:"src-components-redEnvelope-detailList-detailListItem-_index_inviteText"},"邀请了19位好友"))),r.createElement("div",{class:"src-components-redEnvelope-detailList-detailListItem-_index_right"},r.createElement("div",null,"提现了"),r.createElement("div",{class:"src-components-redEnvelope-detailList-detailListItem-_index_red"},"12.6"),r.createElement("div",null,"元")))};var X=t(5503);p()(X.Z,{insert:"head",singleton:!1}),X.Z.locals;const Z=function(e){var n=e.setShowPop;return r.createElement(l.E.div,{class:"src-components-redEnvelope-detailList-_index_container",initial:{scale:.8},animate:{opacity:1,scale:1,transition:{duration:.3}}},r.createElement("div",{class:"src-components-redEnvelope-detailList-_index_head"},r.createElement("div",{class:"src-components-redEnvelope-detailList-_index_headBg",style:{height:140}},r.createElement("div",{class:"src-components-redEnvelope-detailList-_index_caishenProfile"})),r.createElement("div",{class:"src-components-redEnvelope-detailList-_index_textBelowProfile",style:{fontSize:28,height:40}},"祝你 牛年大吉"),r.createElement("div",{class:"src-components-redEnvelope-detailList-_index_title"},"送你现金红包"),r.createElement("div",{class:"src-components-redEnvelope-detailList-_index_moneyWrap"},r.createElement("div",{class:"src-components-redEnvelope-detailList-_index_money"},"6.6"),r.createElement("div",{class:"src-components-redEnvelope-detailList-_index_unit"},"元")),r.createElement("div",{class:"src-components-redEnvelope-detailList-_index_info"},"找好友拿更多现金即可提现"),r.createElement(l.E.div,{class:"src-components-redEnvelope-detailList-_index_btnWrap",whileTap:{scale:.99},onTap:function(){setTimeout((function(){n(!1)}),60)}},r.createElement("div",null,"立即提现"))),r.createElement("div",{class:"src-components-redEnvelope-detailList-_index_list"},r.createElement("div",{class:"src-components-redEnvelope-detailList-_index_listTitle"},"提现记录"),[1,1,1,1,1,1,1,1,1,1,1].map((function(){return r.createElement(F,null)}))))};var A=t(1959);function T(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}}(e,n)||function(e,n){if(e){if("string"==typeof e)return z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?z(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}p()(A.Z,{insert:"head",singleton:!1}),A.Z.locals;const W=function(){var e=T((0,r.useState)(!1),2),n=e[0],t=e[1],i=T((0,r.useState)(!0),2),o=i[0],a=i[1],c=(0,_._)(),s=(0,_._)();return(0,r.useEffect)((function(){c.start("fadeIn")}),[]),r.createElement(S.M,null,o&&r.createElement(l.E.div,{class:"src-components-redEnvelope-_index_container",exit:{opacity:0,scale:.8,transition:{duration:.22}}},r.createElement(l.E.div,{class:"src-components-redEnvelope-_index_redEnvelopeContainer",initial:{scale:.8},variants:B,animate:c,onTap:function(){c.start("whileTap")}},r.createElement("div",{class:"src-components-redEnvelope-_index_godProfile"}),r.createElement("div",{class:"src-components-redEnvelope-_index_text"},"特价版财神爷"),r.createElement("div",{class:"src-components-redEnvelope-_index_title"},"祝您 牛年大吉"),r.createElement(l.E.div,{class:"src-components-redEnvelope-_index_kaiCoin",initial:"initial",variants:I,animate:s,onTap:function(){s.start("start"),setTimeout((function(){s.stop(),c.start("fadeOut"),t(!0)}),1200)}})),n&&r.createElement(Z,{setShowPop:a})))};function D(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const M=function(){var e,n,t=(e=(0,r.useState)(!0),n=2,function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}}(e,n)||function(e,n){if(e){if("string"==typeof e)return D(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?D(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=t[0],o=t[1];return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement("br",null),r.createElement("button",{onClick:function(){o((function(e){return!e}))},type:"button"},"toggleShow"),r.createElement("br",null),r.createElement("br",null),r.createElement(S.M,null,i&&r.createElement(l.E.div,{style:{backgroundColor:"#ddd",width:"50vw",height:"80vw"},key:"modal",initial:{opacity:0},animate:{opacity:1,x:100},exit:{opacity:0,x:0}},"fadeInOut animation")))};var K=t(4262);function Q(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function U(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?U(Object(t),!0).forEach((function(n){R(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function R(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}p()(K.Z,{insert:"head",singleton:!1}),K.Z.locals;var q={z:0,transformPerspective:1e3,transition:{type:"spring",stiffness:200,damping:16}},N={front:Y(Y({},q),{},{opacity:1,rotateY:0}),back:Y(Y({},q),{},{opacity:0,rotateY:-180})},V={front:Y(Y({},q),{},{opacity:1,rotateY:0}),back:Y(Y({},q),{},{opacity:0,rotateY:180})};const $=function(){var e,n,t=(e=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}}(e,n)||function(e,n){if(e){if("string"==typeof e)return Q(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Q(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=t[0],o=t[1],a=(0,_._)(),c=(0,_._)();return(0,r.useEffect)((function(){a.start(i?"back":"front"),c.start(i?"front":"back")}),[i]),r.createElement("div",{class:"src-components-flipCard-_index_wrap",onClick:function(){o((function(e){return!e}))}},r.createElement(l.E.div,{class:"src-components-flipCard-_index_card src-components-flipCard-_index_front",initial:"front",variants:N,animate:a}),r.createElement(l.E.div,{class:"src-components-flipCard-_index_card src-components-flipCard-_index_back",initial:"back",variants:V,animate:c}))};var H=t(9575);p()(H.Z,{insert:"head",singleton:!1}),H.Z.locals;const J=function(){return r.createElement("div",{class:"src-components-dragBall-_index_container"},r.createElement("div",{class:"src-components-dragBall-_index_box",style:{width:"300px",height:"500px"}},r.createElement(l.E.div,{style:{width:"44px",height:"44px"},class:"src-components-dragBall-_index_ball",drag:!0,dragConstraints:{top:-228,bottom:228,left:-128,right:128},dragElastic:.2})))};var G=t(8508);p()(G.Z,{insert:"head",singleton:!1}),G.Z.locals;const ee=function(){return r.createElement(r.Fragment,null,r.createElement("div",{class:"src-components-spring-_index_wrap"},r.createElement("div",{class:"src-components-spring-_index_title"},"零阻尼"),r.createElement(l.E.div,{class:"src-components-spring-_index_ball",animate:{x:150,transition:{type:"spring",damping:0}}})),r.createElement("div",{class:"src-components-spring-_index_wrap"},r.createElement("div",{class:"src-components-spring-_index_title"},"欠阻尼"),r.createElement(l.E.div,{class:"src-components-spring-_index_ball",animate:{x:150,transition:{type:"spring",damping:2}}})),r.createElement("div",{class:"src-components-spring-_index_wrap"},r.createElement("div",{class:"src-components-spring-_index_title"},"过阻尼"),r.createElement(l.E.div,{class:"src-components-spring-_index_ball",animate:{x:150,transition:{type:"spring",damping:100}}})),r.createElement("div",{class:"src-components-spring-_index_wrap"},r.createElement("div",{class:"src-components-spring-_index_title"},"临界阻尼"),r.createElement(l.E.div,{class:"src-components-spring-_index_ball",animate:{x:150,transition:{type:"spring",damping:17}}})),r.createElement("br",null),r.createElement("br",null),r.createElement("br",null),r.createElement("button",{type:"button",onClick:function(){window.location.reload()}},"reload this page"))};function ne(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var te={visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.1}},hidden:{opacity:0,transition:{when:"afterChildren",staggerChildren:.1,staggerDirection:-1}}},re={visible:{opacity:1,x:0},hidden:{opacity:0,x:60}},ie=[1,2,3,4,5,6,7,8,9,10];const oe=function(){var e,n,t=(0,_._)(),i=(e=(0,r.useState)(!0),n=2,function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}}(e,n)||function(e,n){if(e){if("string"==typeof e)return ne(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ne(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],a=i[1];return(0,r.useEffect)((function(){o?t.start("visible"):t.start("hidden")}),[o]),r.createElement(r.Fragment,null,r.createElement(l.E.ul,{initial:"hidden",animate:t,variants:te,style:{backgroundColor:"#ddd"}},ie.map((function(e){return r.createElement(l.E.li,{variants:re,key:e},e)}))),r.createElement("button",{type:"button",onClick:function(){a((function(e){return!e}))}},"show or hide"))};var ae=t(7688);function ce(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function se(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ce(Object(t),!0).forEach((function(n){le(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function le(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function de(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var pe={zIndex:1e3,position:"fixed",top:"70%"};const me=function(e){var n,t,i=e.children,o=e.style,a=void 0===o?{}:o,c=e.initBoundary,s=void 0===c?"left":c,d=e.delay,p=void 0===d?.3:d,m=(n=(0,ae.Z)({liveMeasure:!1}),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}}(n,t)||function(e,n){if(e){if("string"==typeof e)return de(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?de(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=m[0],f=m[1],v=f.width,g=f.height,h=f.y,b=(0,_._)();console.log(v,g,h);var w={transition:{delay:p}},x="left"===s?{attachLeft:se({x:0},w),attachRight:se({x:window.screen.width-v},w)}:{attachLeft:se({x:-(window.screen.width-v)},w),attachRight:se({x:0},w)},E="left"===s?{left:0,right:window.screen.width-v,top:-h,bottom:window.screen.height-h-g}:{left:-(window.screen.width-v),right:0,top:-h,bottom:window.screen.height-h-g};return r.createElement(l.E.div,{ref:u,style:se(se(se({},pe),a),{},{right:"right"===s?0:"auto",left:"left"===s?0:"auto"}),drag:!0,dragMomentum:!1,dragConstraints:E,dragElastic:.2,onDragEnd:function(e,n){n.point.x>window.screen.width/2?b.start("attachRight"):b.start("attachLeft")},variants:x,animate:b,whileTap:{scale:.95}},i)};var ue=t(3874);p()(ue.Z,{insert:"head",singleton:!1}),ue.Z.locals;const fe=function(){return r.createElement(r.Fragment,null,r.createElement(me,null,r.createElement("button",{class:"src-components-draggableFloatBtn-_index_btn",type:"button"},"drag and click")),r.createElement(me,{initBoundary:"right",style:{top:"50%"}},r.createElement("div",{class:"src-components-draggableFloatBtn-_index_btn2"},"hello")),r.createElement("div",{class:"src-components-draggableFloatBtn-_index_box"},"box"),r.createElement("div",{class:"src-components-draggableFloatBtn-_index_box"},"box"),r.createElement("div",{class:"src-components-draggableFloatBtn-_index_box"},"box"),r.createElement("div",{class:"src-components-draggableFloatBtn-_index_box"},"box"),r.createElement("div",{class:"src-components-draggableFloatBtn-_index_box"},"box"),r.createElement("div",{class:"src-components-draggableFloatBtn-_index_box"},"box"),r.createElement("div",{class:"src-components-draggableFloatBtn-_index_box"},"box"),r.createElement("div",{class:"src-components-draggableFloatBtn-_index_box"},"box"),r.createElement("div",{class:"src-components-draggableFloatBtn-_index_box"},"box"),r.createElement("div",{class:"src-components-draggableFloatBtn-_index_box"},"box"))},ve=function(){var e=(0,s.TH)();return r.createElement(r.Fragment,null,"/"!==(null==e?void 0:e.pathname)&&r.createElement(o.rU,{to:"/"},"back to home"),r.createElement(s.rs,null,r.createElement(s.AW,{path:"/Fireworks"},r.createElement(C,null)),r.createElement(s.AW,{path:"/ShakingCards"},r.createElement(k,null)),r.createElement(s.AW,{path:"/RedEnvelope"},r.createElement(W,null)),r.createElement(s.AW,{path:"/FadeInOut"},r.createElement(M,null)),r.createElement(s.AW,{path:"/FlipCard"},r.createElement($,null)),r.createElement(s.AW,{path:"/DragBall"},r.createElement(J,null)),r.createElement(s.AW,{path:"/Spring"},r.createElement(ee,null)),r.createElement(s.AW,{path:"/Orchestration"},r.createElement(oe,null)),r.createElement(s.AW,{path:"/DraggableFloatBtn"},r.createElement(fe,null)),r.createElement(s.AW,{path:"/"},r.createElement(g,null))))};var ge=function(){return(0,r.useEffect)((function(){var e=new(c());e.showPanel(0),document.createElement("div"),e.dom.style.cssText="position:fixed;bottom:0;right:0;cursor:pointer;opacity:0.8;z-index:999",document.body.appendChild(e.dom),requestAnimationFrame((function n(){e.update(),requestAnimationFrame(n)}))}),[]),r.createElement(r.Fragment,null,r.createElement(o.UT,null,r.createElement(ve,null)))};(0,i.render)(r.createElement(ge,null),document.getElementById("root"))},9575:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(833),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".src-components-dragBall-_index_container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.src-components-dragBall-_index_box{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #aaa;\n}\n\n.src-components-dragBall-_index_ball {\n  border-radius: 133.2vw;\n  background-color: #999;\n  box-shadow: 0 0 2.13333vw 0.26667vw rgba(0, 0, 0, 0.3);\n}\n",""]),i.locals={container:"src-components-dragBall-_index_container",box:"src-components-dragBall-_index_box",ball:"src-components-dragBall-_index_ball"};const o=i},3874:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(833),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".src-components-draggableFloatBtn-_index_btn {\n  width: 13.33333vw;\n  height: 13.33333vw;\n  border-radius: 3.2vw;\n  border: none;\n  background-color: #ddd;\n  box-shadow: 0px 0px 1.6vw 0px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  outline: none;\n}\n\n.src-components-draggableFloatBtn-_index_btn2{\n  width: 26.66667vw;\n  height: 26.66667vw;\n  background-color: #FFCCBC;\n}\n\n.src-components-draggableFloatBtn-_index_box{\n  width: 100vw;\n  height: 40vw;\n  background-color: #aaa;\n  margin-bottom: 6.4vw;\n}\n",""]),i.locals={btn:"src-components-draggableFloatBtn-_index_btn",btn2:"src-components-draggableFloatBtn-_index_btn2",box:"src-components-draggableFloatBtn-_index_box"};const o=i},1405:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(833),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".src-components-fireworks-_index_container {\n  background-color: #000;\n  min-height: 100vh;\n  position: relative;\n}\n\n.src-components-fireworks-_index_title {\n  color: #ccc;\n}\n\n.src-components-fireworks-_index_fireworks {\n  width: 26.66667vw;\n  height: 26.66667vw;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-image: url(https://gw.alicdn.com/imgextra/i2/O1CN01MDwVNE1TADqfXH4sI_!!6000000002341-2-tps-200-200.png);\n  position: absolute;\n}\n\n.src-components-fireworks-_index_f1{\n  left: 10.66667vw;\n  top: 26.66667vw;\n}\n.src-components-fireworks-_index_f2 {\n  right: 9.33333vw;\n  top: 21.33333vw;\n}\n",""]),i.locals={container:"src-components-fireworks-_index_container",title:"src-components-fireworks-_index_title",fireworks:"src-components-fireworks-_index_fireworks",f1:"src-components-fireworks-_index_f1",f2:"src-components-fireworks-_index_f2"};const o=i},4262:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(833),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".src-components-flipCard-_index_wrap {\n  position: relative;\n  width: 45.33333vw;\n  height: 64vw;\n  margin-left: 12vw;\n  margin-top: 12vw;\n}\n\n.src-components-flipCard-_index_card {\n  width: 45.33333vw;\n  height: 64vw;\n  border-radius: 3.2vw;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n  position: absolute;\n}\n\n.src-components-flipCard-_index_front {\n  z-index: 10;\n  background-image: url(https://gw.alicdn.com/tfs/TB1v1EygQ9l0K4jSZFKXXXFjpXa-564-792.png);\n}\n\n.src-components-flipCard-_index_back {\n  transform: rotateY(180deg);\n  background-image: url(https://gw.alicdn.com/tfs/TB1KAShQhv1gK0jSZFFXXb0sXXa-341-480.png);\n}\n",""]),i.locals={wrap:"src-components-flipCard-_index_wrap",card:"src-components-flipCard-_index_card",front:"src-components-flipCard-_index_front",back:"src-components-flipCard-_index_back"};const o=i},384:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(833),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  padding: 3.2vw;\n  font-size: 6.4vw;\n}\n\nul {\n  margin: 0;\n  font-size: 4.8vw;\n  padding: 3.2vw;\n  padding-left: 10.66667vw;\n}\n\nli {\n  line-height: 1.8;\n}\n\nbutton {\n  padding: 1.6vw 3.2vw;\n  margin: 1.6vw;\n}\n",""]);const o=i},4469:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(833),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".src-components-redEnvelope-detailList-detailListItem-_index_container {\n  width: 100vw;\n  height: 17.33333vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.src-components-redEnvelope-detailList-detailListItem-_index_left {\n  display: flex;\n  align-items: center;\n\n}\n\n.src-components-redEnvelope-detailList-detailListItem-_index_profile {\n  width: 12vw;\n  height: 12vw;\n  border-radius: 1.6vw;\n  background-size: cover;\n  margin-left: 3.06667vw;\n}\n\n.src-components-redEnvelope-detailList-detailListItem-_index_nickWrap {\n  margin-left: 2.53333vw;\n  font-size: 3.73333vw;\n\n}\n\n.src-components-redEnvelope-detailList-detailListItem-_index_nick {\n  color: #666;\n}\n\n.src-components-redEnvelope-detailList-detailListItem-_index_inviteText {\n  font-size: 3.73333vw;\n  color: #999;\n}\n\n.src-components-redEnvelope-detailList-detailListItem-_index_right {\n  display: flex;\n  align-items: center;\n  font-size: 4.26667vw;\n  color: #333;\n  margin-right: 3.2vw;\n}\n\n\n.src-components-redEnvelope-detailList-detailListItem-_index_red {\n  color: #f35d4d;\n}\n",""]),i.locals={container:"src-components-redEnvelope-detailList-detailListItem-_index_container",left:"src-components-redEnvelope-detailList-detailListItem-_index_left",profile:"src-components-redEnvelope-detailList-detailListItem-_index_profile",nickWrap:"src-components-redEnvelope-detailList-detailListItem-_index_nickWrap",nick:"src-components-redEnvelope-detailList-detailListItem-_index_nick",inviteText:"src-components-redEnvelope-detailList-detailListItem-_index_inviteText",right:"src-components-redEnvelope-detailList-detailListItem-_index_right",red:"src-components-redEnvelope-detailList-detailListItem-_index_red"};const o=i},5503:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(833),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".src-components-redEnvelope-detailList-_index_container {\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  background-color: #f5f5f5;\n  opacity: 0;\n  transform: scale(0.8);\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.src-components-redEnvelope-detailList-_index_head {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);\n}\n\n.src-components-redEnvelope-detailList-_index_list {\n  box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);\n  background-color: #fff;\n  margin-top: 2.66667vw;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 3.2vw;\n}\n\n.src-components-redEnvelope-detailList-_index_listTitle {\n  font-size: 3.73333vw;\n  color: #b3b3b3;\n  height: 11.2vw;\n  margin-left: 3.86667vw;\n  border-bottom: 1px solid #eee;\n  width: 99.86667vw;\n  display: flex;\n  align-items: center;\n}\n\n\n.src-components-redEnvelope-detailList-_index_headBg {\n  background-image: url(https://gw.alicdn.com/imgextra/i1/O1CN01CYaap31RNqOfjqErw_!!6000000002100-2-tps-750-228.png);\n  width: 100vw;\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  background-position: left bottom;\n  background-color: #f35d4d;\n  position: relative;\n}\n\n.src-components-redEnvelope-detailList-_index_caishenProfile {\n  position: absolute;\n  left: 50%;\n  bottom: -8.53333vw;\n  margin-left: -8.53333vw;\n  width: 17.06667vw;\n  height: 17.06667vw;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-image: url(https://gw.alicdn.com/imgextra/i2/O1CN01gzoKcu1ImGyqD7fjt_!!6000000000935-2-tps-128-128.png);\n}\n\n.src-components-redEnvelope-detailList-_index_profileWrap {\n  position: absolute;\n  left: 50%;\n  bottom: -8.53333vw;\n  margin-left: -8.53333vw;\n  width: 17.06667vw;\n  height: 17.06667vw;\n  border-radius: 133.2vw;\n  border: 0.4vw solid #ffeecb;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\n.src-components-redEnvelope-detailList-_index_profile {\n  width: 17.06667vw;\n  height: 17.06667vw;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.src-components-redEnvelope-detailList-_index_textBelowProfile {\n  margin-top: 9.33333vw;\n  height: 5.33333vw;\n  font-size: 3.73333vw;\n  color: #999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.src-components-redEnvelope-detailList-_index_title {\n  margin-top: 2.66667vw;\n  font-size: 4.8vw;\n  color: #333;\n  height: 7.2vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.src-components-redEnvelope-detailList-_index_moneyWrap {\n  margin-top: 1.33333vw;\n  display: flex;\n  align-items: baseline;\n  color: #d9b06c;\n}\n\n.src-components-redEnvelope-detailList-_index_money {\n  font-size: 16vw;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.src-components-redEnvelope-detailList-_index_unit {\n  font-size: 4.8vw;\n}\n\n.src-components-redEnvelope-detailList-_index_info {\n  margin-top: 1.33333vw;\n  font-size: 3.73333vw;\n  color: #d0a358;\n}\n\n.src-components-redEnvelope-detailList-_index_btnWrap {\n  margin-top: 1.6vw;\n  width: 64vw;\n  height: 12.8vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.06667vw;\n  background-color: #f35d4d;\n  color: #fff;\n  font-size: 4.8vw;\n  margin-bottom: 7.86667vw;\n}\n",""]),i.locals={container:"src-components-redEnvelope-detailList-_index_container",head:"src-components-redEnvelope-detailList-_index_head",list:"src-components-redEnvelope-detailList-_index_list",listTitle:"src-components-redEnvelope-detailList-_index_listTitle",headBg:"src-components-redEnvelope-detailList-_index_headBg",caishenProfile:"src-components-redEnvelope-detailList-_index_caishenProfile",profileWrap:"src-components-redEnvelope-detailList-_index_profileWrap",profile:"src-components-redEnvelope-detailList-_index_profile",textBelowProfile:"src-components-redEnvelope-detailList-_index_textBelowProfile",title:"src-components-redEnvelope-detailList-_index_title",moneyWrap:"src-components-redEnvelope-detailList-_index_moneyWrap",money:"src-components-redEnvelope-detailList-_index_money",unit:"src-components-redEnvelope-detailList-_index_unit",info:"src-components-redEnvelope-detailList-_index_info",btnWrap:"src-components-redEnvelope-detailList-_index_btnWrap"};const o=i},1959:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(833),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".src-components-redEnvelope-_index_container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #666;\n}\n\n.src-components-redEnvelope-_index_redEnvelopeContainer {\n  width: 76.53333vw;\n  height: 99.33333vw;\n  background-image: url(https://gw.alicdn.com/imgextra/i4/O1CN01kXfCrt1J5Vc9Mhtmt_!!6000000000977-2-tps-574-745.png);\n  background-size: contain;\n  background-repeat: no-repeat;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.src-components-redEnvelope-_index_godProfile {\n  margin-top: 7.6vw;\n  width: 13.6vw;\n  height: 13.6vw;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-image: url(https://gw.alicdn.com/imgextra/i3/O1CN01tjkKha1wJx7RoClIO_!!6000000006288-2-tps-204-204.png);\n}\n\n.src-components-redEnvelope-_index_text {\n  height: 6.4vw;\n  font-size: 3.73333vw;\n  color: #ffeecb;\n  margin-top: 2vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.src-components-redEnvelope-_index_title {\n  margin-top: 8vw;\n  font-size: 5.6vw;\n  color: #ffeecb;\n  height: 9.06667vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n}\n\n.src-components-redEnvelope-_index_kaiCoin {\n  background-image: url(https://gw.alicdn.com/imgextra/i1/O1CN01PFaUcs1owPRrtrXz0_!!6000000005289-2-tps-164-166.png);\n  width: 21.86667vw;\n  height: 22.13333vw;\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin-top: 13.86667vw;\n}\n",""]),i.locals={container:"src-components-redEnvelope-_index_container",redEnvelopeContainer:"src-components-redEnvelope-_index_redEnvelopeContainer",godProfile:"src-components-redEnvelope-_index_godProfile",text:"src-components-redEnvelope-_index_text",title:"src-components-redEnvelope-_index_title",kaiCoin:"src-components-redEnvelope-_index_kaiCoin"};const o=i},1216:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(833),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".src-components-shakingCards-_index_nine-wrap {\n  width: 100vw;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.src-components-shakingCards-_index_nine-card {\n  width: 29.33333vw;\n  height: 37.33333vw;\n  margin-bottom: 3.2vw;\n  background-color: #ccc;\n  background-size: cover;\n  background-position: center;\n  border-radius: 2.13333vw;\n  box-shadow: 0 1px 1.33333vw 1px rgba(0, 0, 0, 0.4);\n}\n",""]),i.locals={"nine-wrap":"src-components-shakingCards-_index_nine-wrap","nine-card":"src-components-shakingCards-_index_nine-card"};const o=i},8508:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(833),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".src-components-spring-_index_wrap {\n  margin-top: 6.4vw;\n  margin-left: 6.4vw;\n}\n\n.src-components-spring-_index_title {\n  font-size: 5.33333vw;\n\n}\n\n.src-components-spring-_index_ball {\n  width: 11.73333vw;\n  height: 11.73333vw;\n  border-radius: 133.2vw;\n  background-color: #999;\n  box-shadow: 0 0 2.13333vw 0.26667vw rgba(0, 0, 0, 0.3);\n}\n",""]),i.locals={wrap:"src-components-spring-_index_wrap",title:"src-components-spring-_index_title",ball:"src-components-spring-_index_ball"};const o=i}},n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,t.x=e=>{},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={179:0},n=[[5459,127]],r=e=>{},i=(i,o)=>{for(var a,c,[s,l,d,p]=o,m=0,u=[];m<s.length;m++)c=s[m],t.o(e,c)&&e[c]&&u.push(e[c][0]),e[c]=0;for(a in l)t.o(l,a)&&(t.m[a]=l[a]);for(d&&d(t),i&&i(o);u.length;)u.shift()();return p&&n.push.apply(n,p),r()},o=self.webpackChunkframer_motion_practice=self.webpackChunkframer_motion_practice||[];function a(){for(var r,i=0;i<n.length;i++){for(var o=n[i],a=!0,c=1;c<o.length;c++){var s=o[c];0!==e[s]&&(a=!1)}a&&(n.splice(i--,1),r=t(t.s=o[0]))}return 0===n.length&&(t.x(),t.x=e=>{}),r}o.forEach(i.bind(null,0)),o.push=i.bind(null,o.push.bind(o));var c=t.x;t.x=()=>(t.x=c||(e=>{}),(r=a)())})(),t.x()})();