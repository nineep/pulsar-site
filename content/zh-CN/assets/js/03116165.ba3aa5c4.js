"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[79157],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15713:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"pulsar-client-node-1.2.0",title:"Pulsar Client Node",sidebar_label:"Pulsar Client Node"},c=void 0,u={unversionedId:"docs/pulsar-client-node-1.2.0",id:"docs/pulsar-client-node-1.2.0",title:"Pulsar Client Node",description:"1.2.0 &mdash; 2020-08-12",source:"@site/release-notes/docs/pulsar-client-node-1.2.0.md",sourceDirName:"docs",slug:"/docs/pulsar-client-node-1.2.0",permalink:"/zh-CN/release-notes/docs/pulsar-client-node-1.2.0",tags:[],version:"current",frontMatter:{id:"pulsar-client-node-1.2.0",title:"Pulsar Client Node",sidebar_label:"Pulsar Client Node"}},s={},p=[{value:'1.2.0 \u2014 2020-08-12 <a id="1.2.0"></a>',id:"120--2020-08-12-",level:3},{value:"Features",id:"features",level:4},{value:"Fixes",id:"fixes",level:4}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"120--2020-08-12-"},"1.2.0 ","\u2014"," 2020-08-12 ",(0,l.kt)("a",{id:"1.2.0"})),(0,l.kt)("p",null,"This is the third release of the Pulsar Node.js client.\n",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pulsar-client/v/1.2.0"},"https://www.npmjs.com/package/pulsar-client/v/1.2.0")),(0,l.kt)("h4",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added Key_Shared subscription type ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/71"},"#71")),(0,l.kt)("li",{parentName:"ul"},"Added read compacted option to consumer options ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/73"},"#73")),(0,l.kt)("li",{parentName:"ul"},"Enabled passing function for logging when creating client ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/82"},"#82")),(0,l.kt)("li",{parentName:"ul"},"Enabled getting redelivery count of message ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/101"},"#101"))),(0,l.kt)("h4",{id:"fixes"},"Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed issue where consumer with message listener dies ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/83"},"#83")),(0,l.kt)("li",{parentName:"ul"},"Fixed issue where client instance could be garbage collected ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/85"},"#85"))),(0,l.kt)("p",null,"For a complete list of issues fixed, see\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-node/milestone/4?closed=1"},"https://github.com/apache/pulsar-client-node/milestone/4?closed=1")))}f.isMDXComponent=!0}}]);