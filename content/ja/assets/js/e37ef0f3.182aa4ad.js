"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[43701],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,p=function(e,t){if(null==e)return{};var a,r,p={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,p=e.mdxType,n=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(a),m=p,d=h["".concat(o,".").concat(m)]||h[m]||s[m]||n;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function m(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=a.length,i=new Array(n);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},89827:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=a(87462),p=a(63366),n=(a(67294),a(3905)),i=["components"],l={id:"pulsar-2.7.4",title:"Apache Pulsar 2.7.4",sidebar_label:"Apache Pulsar 2.7.4"},o=void 0,c={unversionedId:"docs/pulsar-2.7.4",id:"docs/pulsar-2.7.4",title:"Apache Pulsar 2.7.4",description:"security",source:"@site/release-notes/docs/pulsar-2.7.4.md",sourceDirName:"docs",slug:"/docs/pulsar-2.7.4",permalink:"/ja/release-notes/docs/pulsar-2.7.4",tags:[],version:"current",frontMatter:{id:"pulsar-2.7.4",title:"Apache Pulsar 2.7.4",sidebar_label:"Apache Pulsar 2.7.4"}},u={},s=[{value:"security",id:"security",level:2},{value:"broker",id:"broker",level:2},{value:"function",id:"function",level:2},{value:"dashboard",id:"dashboard",level:2},{value:"build",id:"build",level:2},{value:"tieredstorage",id:"tieredstorage",level:2},{value:"connect",id:"connect",level:2},{value:"topic-policy",id:"topic-policy",level:2},{value:"storage",id:"storage",level:2},{value:"admin",id:"admin",level:2},{value:"compaction",id:"compaction",level:2},{value:"test",id:"test",level:2}],h={toc:s};function m(e){var t=e.components,a=(0,p.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"security"},"security"),(0,n.kt)("p",null,"Bump log4j to 2.15.0 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13226"},"#13226"),(0,n.kt)("br",{parentName:"p"}),"\n","[security]"," Upgrade netty to 4.1.68.Final ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12218"},"#12218"),(0,n.kt)("br",{parentName:"p"}),"\n","[Branch-2.7]","Forbid to read other topic's data in managedLedger layer ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11913"},"#11913"),(0,n.kt)("br",{parentName:"p"}),"\n","Forbid to read other topic's data in managedLedger layer ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11912"},"#11912"),(0,n.kt)("br",{parentName:"p"}),"\n","[Broker]"," Support disabling non-TLS service ports ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11681"},"#11681"),(0,n.kt)("br",{parentName:"p"}),"\n","[Security]"," Upgrade Jetty to 9.4.43.v20210629 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11660"},"#11660"),(0,n.kt)("br",{parentName:"p"}),"\n","[Security]"," Upgrade commons-compress to 1.21 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11345"},"#11345"),(0,n.kt)("br",{parentName:"p"}),"\n","[broker]"," fix ",(0,n.kt)("inlineCode",{parentName:"p"},"GetTopicsOfNamespace")," with binary lookup service not check auth ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11172"},"#11172"),"  "),(0,n.kt)("h2",{id:"broker"},"broker"),(0,n.kt)("p",null,"[Broker]"," Optimize ManagedLedger Ledger Ownership Check ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13222"},"#13222"),(0,n.kt)("br",{parentName:"p"}),"\n","Do not reuse the Failed OpAddEntry object which lead bundle unloading timeout. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12993"},"#12993"),(0,n.kt)("br",{parentName:"p"}),"\n","Allow to configure schema compatibility policy for system topics ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12598"},"#12598"),(0,n.kt)("br",{parentName:"p"}),"\n","[ML]"," Add OpAddEntry to pendingAddEntries after the state check ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12570"},"#12570"),(0,n.kt)("br",{parentName:"p"}),"\n","[broker]"," Cancel scheduled tasks when deleting ManagedLedgerImpl ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12565"},"#12565"),(0,n.kt)("br",{parentName:"p"}),"\n","[managedledger]"," NPE on OpAddEntry while ManagedLedger is closing ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12364"},"#12364"),(0,n.kt)("br",{parentName:"p"}),"\n","Optimize the memory usage of Cache Eviction ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12045"},"#12045"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix update ledger list to znode version mismatch failed, ledger not delete ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12015"},"#12015"),(0,n.kt)("br",{parentName:"p"}),"\n","[Broker]"," Refine topic level backlog quota policies warning log ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11863"},"#11863"),(0,n.kt)("br",{parentName:"p"}),"\n","[Broker]"," Remove RateLimiter constructors and replace with builder usage ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11599"},"#11599"),(0,n.kt)("br",{parentName:"p"}),"\n","[issue #13351]"," Solving precise rate limiting does not takes effect ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11446"},"#11446"),(0,n.kt)("br",{parentName:"p"}),"\n","[Broker]"," Fix replicated subscriptions direct memory leak ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11396"},"#11396"),(0,n.kt)("br",{parentName:"p"}),"\n","[Broker]"," Fix set-publish-rate when using preciseTopicPublishRateLimiterEnable=true ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10384"},"#10384"),(0,n.kt)("br",{parentName:"p"}),"\n","[Issue 8599]"," Fix DispatchRateLimiter does not take effect ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8611"},"#8611"),"  "),(0,n.kt)("h2",{id:"function"},"function"),(0,n.kt)("p",null,"Issue 12645: Pulsar Functions: detect .nar files and prevent spammy logs on functions boot ","[branch-2.7][#12665]","(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12665"},"https://github.com/apache/pulsar/pull/12665"),")",(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-io]"," fix source stats exposing empty exceptions list ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11478"},"#11478"),(0,n.kt)("br",{parentName:"p"}),"\n","[Branch-2.7]"," Fixes function api can not use authdata to check superuser ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11418"},"#11418"),"  "),(0,n.kt)("h2",{id:"dashboard"},"dashboard"),(0,n.kt)("p",null,"[Branch-2.7]","Remove pulsar-dashboard from the publish process of images ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12534"},"#12534"),"  "),(0,n.kt)("h2",{id:"build"},"build"),(0,n.kt)("p",null,"[Branch-2-7]"," Roll back to using Java 8 for docker images ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12357"},"#12357"),(0,n.kt)("br",{parentName:"p"}),"\n","[Branch-2.7][Build]"," Fix docker image install python3.7-dev problem ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11943"},"#11943"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix expired tls certs for cpp tests ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9607"},"#9607"),"  "),(0,n.kt)("h2",{id:"tieredstorage"},"tieredstorage"),(0,n.kt)("p",null,"Fix the potential race condition in the BlobStore readhandler ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12123"},"#12123"),"  "),(0,n.kt)("h2",{id:"connect"},"connect"),(0,n.kt)("p",null,"Remove the deprecated api usage in hdfs ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12080"},"#12080"),"  "),(0,n.kt)("h2",{id:"topic-policy"},"topic-policy"),(0,n.kt)("p",null,"[Branch-2.7][Broker]"," Fix using partitioned topic name to get topic policies ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11897"},"#11897"),(0,n.kt)("br",{parentName:"p"}),"\n","Avoid redundant calls for getting the offload policies from the offloader ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11629"},"#11629"),(0,n.kt)("br",{parentName:"p"}),"\n","[Cherry-pick]"," Add backoff for setting for getting topic policies to branch-2.7 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11574"},"#11574"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix some topic policy operation without backoff ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11560"},"#11560"),(0,n.kt)("br",{parentName:"p"}),"\n","Add backoff for setting for getting topic policies. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11487"},"#11487"),(0,n.kt)("br",{parentName:"p"}),"\n","Disable replicate system topic across clusters. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11376"},"#11376"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix using partitioned topic name to get Policy ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11294"},"#11294"),(0,n.kt)("br",{parentName:"p"}),"\n","fix retention policy in topic policy not work ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11021"},"#11021"),"  "),(0,n.kt)("h2",{id:"storage"},"storage"),(0,n.kt)("p",null,"[ManagedLedger]"," Compress managed ledger info ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11490"},"#11490"),"  "),(0,n.kt)("h2",{id:"admin"},"admin"),(0,n.kt)("p",null,"[Issue 11339]"," Pulsar Admin List Subscription lists only subscriptions created for Partition-0 when partition specific subscriptions are created ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11355"},"#11355"),"  "),(0,n.kt)("h2",{id:"compaction"},"compaction"),(0,n.kt)("p",null,"Fixed retention of keys in compaction ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11287"},"#11287"),"  "),(0,n.kt)("h2",{id:"test"},"test"),(0,n.kt)("p",null,"fix flaky test in AdminApiOffloadTest ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11028"},"#11028"),(0,n.kt)("br",{parentName:"p"}),"\n","[Test]"," Upgrade Testcontainers version to 1.15.3 and use bom ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10321"},"#10321"),(0,n.kt)("br",{parentName:"p"}),"\n","Upgrade TestContainers to 1.15.1 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9120"},"#9120")))}m.isMDXComponent=!0}}]);