"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[68523],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),c=u(r),d=s,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=d;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[c]="string"==typeof e?e:s,i[1]=n;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42040:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>n,toc:()=>u});var a=r(87462),s=(r(67294),r(3905));const o={title:"What\u2019s New in Apache Pulsar 2.10.1",date:new Date("2022-07-12T00:00:00.000Z"),author:"codelipenghui, momo-jun"},i=void 0,n={permalink:"/blog/2022/07/12/Apache-Pulsar-2-10-1",editUrl:"https://github.com/apache/pulsar-site/edit/main/blog/2022-07-12-Apache-Pulsar-2-10-1.md",source:"@site/blog/2022-07-12-Apache-Pulsar-2-10-1.md",title:"What\u2019s New in Apache Pulsar 2.10.1",description:"The Apache Pulsar community releases version 2.10.1! 50 contributors provided improvements and bug fixes that delivered 200+ commits. Thanks for all your contributions.",date:"2022-07-12T00:00:00.000Z",formattedDate:"July 12, 2022",tags:[],readingTime:3.06,hasTruncateMarker:!0,authors:[{name:"codelipenghui, momo-jun"}],frontMatter:{title:"What\u2019s New in Apache Pulsar 2.10.1",date:"2022-07-12T00:00:00.000Z",author:"codelipenghui, momo-jun"},prevItem:{title:"Speakers and Sponsorship Prospectus Announced for Pulsar Summit San Francisco 2022",permalink:"/blog/2022/07/15/pulsar-summit-san-francisco"},nextItem:{title:"What\u2019s New in Apache Pulsar 2.10",permalink:"/blog/2022/05/11/Apache-Pulsar-2-10-0"}},l={authorsImageUrls:[void 0]},u=[{value:"Fixed ineffective load manager due to broker\u2019s zero resource usage. PR-15314",id:"fixed-ineffective-load-manager-due-to-brokers-zero-resource-usage-pr-15314",level:3},{value:"Issue",id:"issue",level:4},{value:"Allow users with produce/consume privileges to get topic schema. PR-15956",id:"allow-users-with-produceconsume-privileges-to-get-topic-schema-pr-15956",level:3},{value:"Issue",id:"issue-1",level:4},{value:"Resolution",id:"resolution",level:4},{value:"Fixed the consumption performance regression. PR-15162",id:"fixed-the-consumption-performance-regression-pr-15162",level:3},{value:"Issue",id:"issue-2",level:4},{value:"Resolution",id:"resolution-1",level:4},{value:"Fixed a deadlock issue of topic creation. PR-15570",id:"fixed-a-deadlock-issue-of-topic-creation-pr-15570",level:3},{value:"Issue",id:"issue-3",level:4},{value:"Fixed key-shared delivery of messages with interleaved delays. PR-15409",id:"fixed-key-shared-delivery-of-messages-with-interleaved-delays-pr-15409",level:3},{value:"Issue",id:"issue-4",level:4},{value:"Optimized the memory usage of brokers.",id:"optimized-the-memory-usage-of-brokers",level:3},{value:"Issue",id:"issue-5",level:4},{value:"Resolution",id:"resolution-2",level:4}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Apache Pulsar community releases version 2.10.1! 50 contributors provided improvements and bug fixes that delivered 200+ commits. Thanks for all your contributions."),(0,s.kt)("p",null,"The highlight of the 2.10.1 release is introducing 30+ transaction fixes and improvements. Earlier-adoption users of Pulsar transactions have documented long-term use in their production environments and reported valuable findings in real applications. This provides the Pulsar community with the opportunity to make a difference. "),(0,s.kt)("p",null,"This blog walks through the most noteworthy changes. For the complete list including all feature enhancements and bug fixes, check out the ",(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/release-notes/versioned/pulsar-2.10.1/"},"Pulsar 2.10.1 Release Notes"),"."),(0,s.kt)("h3",{id:"fixed-ineffective-load-manager-due-to-brokers-zero-resource-usage-pr-15314"},"Fixed ineffective load manager due to broker\u2019s zero resource usage. ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/15314"},"PR-15314")),(0,s.kt)("h4",{id:"issue"},"Issue"),(0,s.kt)("p",null,"Introduced in 2.10.0, the leader broker\u2019s resource usage (CPU, memory, direct memory\u2026) was always 0 when performing load balance. The root cause is that deserializing the JSON data to ResourceUsage POJO didn\u2019t use the constructor ",(0,s.kt)("inlineCode",{parentName:"p"},"ResourceUsage (double usage, double limit)"),", so the percentage was always 0."),(0,s.kt)("h3",{id:"allow-users-with-produceconsume-privileges-to-get-topic-schema-pr-15956"},"Allow users with produce/consume privileges to get topic schema. ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/15956"},"PR-15956")),(0,s.kt)("h4",{id:"issue-1"},"Issue"),(0,s.kt)("p",null,"In earlier versions, only users with admin privileges were able to get topic schema, which made schema inconvenient to use. "),(0,s.kt)("h4",{id:"resolution"},"Resolution"),(0,s.kt)("p",null,"Allow users who have metadata access privileges to get topic schema. Subscribers can be from different teams, and the producers and subscribers should be able to get the topic schema instead of asking tenant admin to do so before publishing and consuming messages."),(0,s.kt)("h3",{id:"fixed-the-consumption-performance-regression-pr-15162"},"Fixed the consumption performance regression. ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/15162"},"PR-15162")),(0,s.kt)("h4",{id:"issue-2"},"Issue"),(0,s.kt)("p",null,"This performance regression was introduced in 2.10.0, 2.9.1, and 2.8.3. You may find a significant performance drop with message listeners while using Java Client. The root cause is each message will introduce the thread switching from the external thread pool to the internal thread poll, and then to the external thread pool."),(0,s.kt)("h4",{id:"resolution-1"},"Resolution"),(0,s.kt)("p",null,"2.10.1 is the first version to have this issue fixed by avoiding the thread switching for each message to improve consumption throughput."),(0,s.kt)("h3",{id:"fixed-a-deadlock-issue-of-topic-creation-pr-15570"},"Fixed a deadlock issue of topic creation. ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/15570"},"PR-15570")),(0,s.kt)("h4",{id:"issue-3"},"Issue"),(0,s.kt)("p",null,"This deadlock issue occurred during topic creation by trying to re-acquire the same ",(0,s.kt)("inlineCode",{parentName:"p"},"StampedLock")," from the same thread when removing it. This will cause the topic to stop service for a long time, and ultimately with a failure in the deduplication or geo-replication check. The workaround is restarting the broker."),(0,s.kt)("h3",{id:"fixed-key-shared-delivery-of-messages-with-interleaved-delays-pr-15409"},"Fixed key-shared delivery of messages with interleaved delays. ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/15409"},"PR-15409")),(0,s.kt)("h4",{id:"issue-4"},"Issue"),(0,s.kt)("p",null,"This is a regression issue introduced in 2.10.0. When delayed messages with interleaved delays occurred on a shared/key-shared subscription, many of the messages were not delivered but stayed in the backlog. The reason was that when peeking into ",(0,s.kt)("inlineCode",{parentName:"p"},"getMessagesToReplayNow()"),", we could not discard the returned set due to untracked message IDs in the delayed message controller."),(0,s.kt)("h3",{id:"optimized-the-memory-usage-of-brokers"},"Optimized the memory usage of brokers."),(0,s.kt)("h4",{id:"issue-5"},"Issue"),(0,s.kt)("p",null,"Pulsar has some internal data structures, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"ConcurrentLongLongPairHashMap"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"ConcurrentLongPairHashMap"),", which can reduce the memory usage rather than using the Boxing type. However, in earlier versions, the data structures were not supported for shrinking even if the data was removed, which wasted a certain amount of memory in certain situations."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Pull requests")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15354"},"https://github.com/apache/pulsar/pull/15354")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15342"},"https://github.com/apache/pulsar/pull/15342")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14663"},"https://github.com/apache/pulsar/pull/14663")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14515"},"https://github.com/apache/pulsar/pull/14515")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14497"},"https://github.com/apache/pulsar/pull/14497"))),(0,s.kt)("h4",{id:"resolution-2"},"Resolution"),(0,s.kt)("p",null,"Support the shrinking of the internal data structures, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"ConcurrentSortedLongPairSet"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ConcurrentOpenHashMap"),", and so on."),(0,s.kt)("h1",{id:"whats-next"},"What\u2019s Next?"),(0,s.kt)("p",null,"If you are interested in learning more about Pulsar 2.10.1, you can ",(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/en/versions/"},"download")," and try it out now! "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Pulsar Summit San Francisco 2022")," will take place on August 18th, 2022. ",(0,s.kt)("a",{parentName:"p",href:"https://pulsar-summit.org/"},"Register now")," and help us make it an even bigger success by spreading the word on social media!"),(0,s.kt)("p",null,"For more information about the Apache Pulsar project and current progress, visit\nthe ",(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org"},"Pulsar website"),", follow the project on Twitter\n",(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/apache_pulsar"},"@apache_pulsar"),", and join ",(0,s.kt)("a",{parentName:"p",href:"https://apache-pulsar.herokuapp.com/"},"Pulsar Slack"),"!"))}c.isMDXComponent=!0}}]);