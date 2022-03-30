"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[37637],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(u,".").concat(d)]||f[d]||c[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59470:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={author:"Matteo Merli",title:"Log4j2 Zero Day vulnerability (CVE-2021-44228)"},u=void 0,s={permalink:"/ko/blog/2021/12/11/Log4j-CVE",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2021-12-11-Log4j-CVE.md",source:"@site/blog/2021-12-11-Log4j-CVE.md",title:"Log4j2 Zero Day vulnerability (CVE-2021-44228)",description:"Yesterday, a new serious vulnerability was reported regarding Log4j that can",date:"2021-12-11T00:00:00.000Z",formattedDate:"2021\ub144 12\uc6d4 11\uc77c",tags:[],readingTime:1.155,truncated:!0,authors:[{name:"Matteo Merli"}],frontMatter:{author:"Matteo Merli",title:"Log4j2 Zero Day vulnerability (CVE-2021-44228)"},prevItem:{title:"What\u2019s New in Apache Pulsar 2.7.4",permalink:"/ko/blog/2021/12/14/Apache-Pulsar-2-7-4"},nextItem:{title:"Apache Pulsar 2.8.1",permalink:"/ko/blog/2021/09/23/Apache-Pulsar-2-8-1"}},p={authorsImageUrls:[void 0]},c=[],f={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Yesterday, a new serious vulnerability was reported regarding Log4j that can\nallow remote execution for attackers."),(0,o.kt)("p",null,"The vulnerability issue is described and tracked under ",(0,o.kt)("a",{parentName:"p",href:"https://nvd.nist.gov/vuln/detail/CVE-2021-44228"},"CVE-2021-44228"),"."),(0,o.kt)("p",null,"Current releases of Apache Pulsar are bundling Log4j2 versions that are affected by this vulnerability.\nDefault configuration, combined with JVM version and other factors, can render it exploitable.\nWe strongly recommend to follow the advisory of the Apache Log4j community and patch your systems\nas soon as possible, as well as looking for unexpected behavior in your Pulsar logs."),(0,o.kt)("p",null,"There are 2 workarounds to patch a Pulsar deployments. You can set either of:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Java property: ",(0,o.kt)("inlineCode",{parentName:"li"},"-Dlog4j2.formatMsgNoLookups=true")),(0,o.kt)("li",{parentName:"ol"},"Environment variable: ",(0,o.kt)("inlineCode",{parentName:"li"},"LOG4J_FORMAT_MSG_NO_LOOKUPS=true"))),(0,o.kt)("p",null,"Both approaches are effective in mitigating the vulnerability for Pulsar\nservices."),(0,o.kt)("p",null,"Additionally, when running Pulsar Functions with Kubernetes runtime, you should update\nyour Docker images, following the example described ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lhotari/pulsar-docker-images-patch-CVE-2021-44228"},"here"),"."),(0,o.kt)("p",null,"If you are using the Pulsar Helm Chart for deploying in Kubernetes, a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-helm-chart/releases/tag/pulsar-2.7.6"},"new\nversion of the chart")," is already available and it applies the above mentioned workaround.\nIf upgrading is not an option, you may also mitigate by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"-Dlog4j2.formatMsgNoLookups=true")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PULSAR_EXTRA_OPTS")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"configData")," section for proxy, broker, bookkeeper, zookeeper, auto-recovery, and relative components in the helm values file."),(0,o.kt)("p",null,"We are already preparing new patch releases, 2.7.4, 2.8.2 and 2.9.1. These\nreleases will be ready in the next few days and will bundle the Log4j2 2.15.0,\nwhich contains the vulnerability fix."))}d.isMDXComponent=!0}}]);