"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6058],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},75165:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"client-cpp-2.5.2",title:"Client CPP 2.5.2",sidebar_label:"Client CPP 2.5.2"},p=void 0,l={unversionedId:"docs/client-cpp-2.5.2",id:"docs/client-cpp-2.5.2",title:"Client CPP 2.5.2",description:"C++] Fix message id error if messages were sent to a partitioned topic [#6938",source:"@site/release-notes/docs/client-cpp-2.5.2.md",sourceDirName:"docs",slug:"/docs/client-cpp-2.5.2",permalink:"/ja/release-notes/docs/client-cpp-2.5.2",tags:[],version:"current",frontMatter:{id:"client-cpp-2.5.2",title:"Client CPP 2.5.2",sidebar_label:"Client CPP 2.5.2"}},u={},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[C++]"," Fix message id error if messages were sent to a partitioned topic ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6938"},"#6938"),(0,a.kt)("br",{parentName:"p"}),"\n","[C++]"," Fix message id is always the default value in send callback ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6812"},"#6812"),(0,a.kt)("br",{parentName:"p"}),"\n","[C++]"," Subscription InitialPosition is not correctly set on regex consumers ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6810"},"#6810"),(0,a.kt)("br",{parentName:"p"}),"\n","[C++]"," Auto update topic partitions ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6732"},"#6732")))}m.isMDXComponent=!0}}]);