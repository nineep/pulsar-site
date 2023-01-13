"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},43012:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"version-policy",title:"Version policy"},o=void 0,l={unversionedId:"version-policy",id:"version-policy",title:"Version policy",description:"The Pulsar project adheres to Semantic Versioning. Existing releases can expect",source:"@site/contribute/version-policy.md",sourceDirName:".",slug:"/version-policy",permalink:"/contribute/version-policy",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/version-policy.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1673599217,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{id:"version-policy",title:"Version policy"},sidebar:"sidebarDevelopment",previous:{title:"Writing release notes",permalink:"/contribute/release-note-guide"},next:{title:"How to become a core developer",permalink:"/contribute/become-core-developer"}},s={},p=[{value:"Supported Versions",id:"supported-versions",level:2},{value:"Release Frequency",id:"release-frequency",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Pulsar project adheres to ",(0,a.kt)("a",{parentName:"p",href:"http://semver.org/spec/v2.0.0.html"},"Semantic Versioning"),". Existing releases can expect\npatches for bugs and security vulnerabilities. New features will target minor releases."),(0,a.kt)("p",null,"When upgrading an existing cluster, it is important to upgrade components linearly through each minor version. For\nexample, when upgrading from 2.8.x to 2.10.x, it is important to upgrade to 2.9.x before going to 2.10.x."),(0,a.kt)("h2",{id:"supported-versions"},"Supported Versions"),(0,a.kt)("p",null,"Feature release branches will be maintained with security-fix and bug-fix releases for at least 12 months after the\ninitial release. For example, branch 2.5.x is no longer considered maintained as of January 2021, 12 months after\nthe release of 2.5.0 in January 2020. No more 2.5.x releases should be expected at this point, even to fix security\nvulnerabilities."),(0,a.kt)("p",null,"Note that a minor version can be maintained past its 12-month initial support period. For example, version 2.7 is still\nactively maintained."),(0,a.kt)("p",null,"Security fixes will be given priority when it comes to back porting fixes to older versions that are within the\nsupported time window. It is challenging to decide which bug fixes to back port to old versions. As such, the latest\nversions will have the most bug fixes."),(0,a.kt)("p",null,'When 3.0.0 is released, the community will decide how to continue supporting 2.x. The last minor release within 2.x may\nbe maintained for longer as an "LTS" release, but it has not been officially decided.'),(0,a.kt)("p",null,"The following table shows version support timelines and will be updated with each release."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Supported"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Initial Release"),(0,a.kt)("th",{parentName:"tr",align:"center"},"At Least Until"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2.10.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"April 2022"),(0,a.kt)("td",{parentName:"tr",align:"center"},"April 2023")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2.9.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"November 2021"),(0,a.kt)("td",{parentName:"tr",align:"center"},"November 2022")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2.8.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"June 2021"),(0,a.kt)("td",{parentName:"tr",align:"center"},"June 2022")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2.7.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"November 2020"),(0,a.kt)("td",{parentName:"tr",align:"center"},"November 2021")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2.6.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},"June 2020"),(0,a.kt)("td",{parentName:"tr",align:"center"},"June 2021")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2.5.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},"January 2020"),(0,a.kt)("td",{parentName:"tr",align:"center"},"January 2021")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2.4.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},"July 2019"),(0,a.kt)("td",{parentName:"tr",align:"center"},"July 2020")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"< 2.3.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,a.kt)("p",null,"If there is ambiguity about which versions of Pulsar are actively supported, please ask on the ",(0,a.kt)("a",{parentName:"p",href:"mailto:users@pulsar.apache.org"},"users@pulsar.apache.org")," mailing list."),(0,a.kt)("h2",{id:"release-frequency"},"Release Frequency"),(0,a.kt)("p",null,"With the acceptance of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-47%3A-Time-Based-Release-Plan"},"PIP-47 - A Time-Based Release Plan"),", the Pulsar community aims to complete 4 minor releases each year. Patch releases are completed based on demand as well as need, in the event of security fixes."))}m.isMDXComponent=!0}}]);