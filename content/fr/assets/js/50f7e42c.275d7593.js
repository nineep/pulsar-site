"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[53563],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(r),m=a,f=h["".concat(u,".").concat(m)]||h[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9840:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={author:"Enrico Olivelli",authorURL:"https://twitter.com/eolivelli",title:"Apache Pulsar 2.7.2"},u=void 0,s={permalink:"/fr/blog/2021/05/13/Apache-Pulsar-2-7-2",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2021-05-13-Apache-Pulsar-2-7-2.md",source:"@site/blog/2021-05-13-Apache-Pulsar-2-7-2.md",title:"Apache Pulsar 2.7.2",description:"We are very glad to see the Apache Pulsar community has successfully released the 2.7.2 version.",date:"2021-05-13T00:00:00.000Z",formattedDate:"13 mai 2021",tags:[],readingTime:1.305,truncated:!0,authors:[{name:"Enrico Olivelli",url:"https://twitter.com/eolivelli"}],frontMatter:{author:"Enrico Olivelli",authorURL:"https://twitter.com/eolivelli",title:"Apache Pulsar 2.7.2"},prevItem:{title:"Apache Pulsar 2.8.0",permalink:"/fr/blog/2021/06/12/Apache-Pulsar-2-8-0"},nextItem:{title:"Apache Pulsar 2.7.0",permalink:"/fr/blog/2020/12/24/Apache-Pulsar-2-7-0"}},c={authorsImageUrls:[void 0]},p=[{value:"News and noteworthy",id:"news-and-noteworthy",level:3},{value:"Contributors for 2.7.2 release",id:"contributors-for-272-release",level:3}],h={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are very glad to see the Apache Pulsar community has successfully released the 2.7.2 version.\nThis is a minor release that introduces stability fixes and a few new features without breaking changes."),(0,o.kt)("h3",{id:"news-and-noteworthy"},"News and noteworthy"),(0,o.kt)("p",null,"Here is a selection of the most awesome and major enhancements added to Pulsar 2.7.2."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improvement in stability in the Kinesis connector ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10420"},"#10420"),"."),(0,o.kt)("li",{parentName:"ul"},"Improvement in passing ENV variables to the bookie (PULSAR_EXTRA_OPTS) ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10397"},"#10397"),"."),(0,o.kt)("li",{parentName:"ul"},"Allow the C++ client to be built in Windows and add CI for verification ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10387"},"#10387"),"."),(0,o.kt)("li",{parentName:"ul"},"Allow activating every BookKeeper client features in the broker ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9232"},"#9232"),"."),(0,o.kt)("li",{parentName:"ul"},"Improvement in Pulsar proxy."),(0,o.kt)("li",{parentName:"ul"},"Upgrade core networking libraries: Jetty and Netty.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pulls?page=1&q=is%3Apr+label%3Arelease%2F2.7.2%5D"},"Here")," you can find the list of all the improvements and bug fixes."),(0,o.kt)("h3",{id:"contributors-for-272-release"},"Contributors for 2.7.2 release"),(0,o.kt)("p",null,"We would like to thank all the contributors for this release.\nSame to other sustainable open source projects, Apache Pulsar is great because it is supported by a vibrant community."),(0,o.kt)("p",null,"Code contributors (names taken from GitHub API):\nAli Ahmed, Andrey Yegorov, Binbin Guo, David Kjerrumgaard, Deon van der Vyver, Devin Bost, Enrico Olivelli, Guangning E, Kevin Wilson,\nLari Hotari, Marvin Cai, Masahiro Sakamoto, Matteo Merli, Michael Marshall, Rajan Dhabalia, Shen Liu, Ting Yuan, Vincent Royer,\nYong Zhang, Yunze Xu, Zhanpeng Wu, Zike Yang, baomingyu, CongBo, dockerzhang, feynmanlin, hangc0276, li jinquan, limingnihao,\nlinlinnn, mlyahmed, PengHui Li, Ran."),(0,o.kt)("p",null,"Documentation contributors:\nAnonymitaet (Yu Liu), Jennifer Huang"),(0,o.kt)("p",null,"Also, we want to thank everyone who spent his time reporting issues and sharing the story about using Pulsar."),(0,o.kt)("p",null,"Looking forward to your contributions to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar"},"Apache Pulsar"),"."))}m.isMDXComponent=!0}}]);