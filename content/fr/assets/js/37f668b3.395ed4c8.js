"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[49401],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),i=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=i(a),m=n,d=h["".concat(u,".").concat(m)]||h[m]||c[m]||p;return a?r.createElement(d,l(l({ref:t},s),{},{components:a})):r.createElement(d,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<p;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},17755:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var r=a(87462),n=a(63366),p=(a(67294),a(3905)),l=["components"],o={id:"pulsar-2.5.2",title:"Apache Pulsar 2.5.2",sidebar_label:"Apache Pulsar 2.5.2"},u=void 0,i={unversionedId:"docs/pulsar-2.5.2",id:"docs/pulsar-2.5.2",title:"Apache Pulsar 2.5.2",description:"function",source:"@site/release-notes/docs/pulsar-2.5.2.md",sourceDirName:"docs",slug:"/docs/pulsar-2.5.2",permalink:"/fr/release-notes/docs/pulsar-2.5.2",tags:[],version:"current",frontMatter:{id:"pulsar-2.5.2",title:"Apache Pulsar 2.5.2",sidebar_label:"Apache Pulsar 2.5.2"}},s={},c=[{value:"function",id:"function",level:2},{value:"admin",id:"admin",level:2},{value:"sql",id:"sql",level:2},{value:"security",id:"security",level:2},{value:"metrics",id:"metrics",level:2},{value:"broker",id:"broker",level:2},{value:"build",id:"build",level:2},{value:"connect",id:"connect",level:2},{value:"schemaregistry",id:"schemaregistry",level:2},{value:"tieredstorage",id:"tieredstorage",level:2},{value:"test",id:"test",level:2},{value:"storage",id:"storage",level:2}],h={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"function"},"function"),(0,p.kt)("p",null,"[Issue 5520][Function Doc]"," Add window function context docs for repo ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7741"},"#7741"),(0,p.kt)("br",{parentName:"p"}),"\n","[functions]"," Fix typos in exceptions related to functions ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6910"},"#6910"),(0,p.kt)("br",{parentName:"p"}),"\n","[functions]"," Fix validation of function's update ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6888"},"#6888"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix localrunner netty dependency issue and add default log4j2 config file ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6779"},"#6779"),(0,p.kt)("br",{parentName:"p"}),"\n","Ensure that all dangling consumers are cleaned up during failures ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6778"},"#6778"),(0,p.kt)("br",{parentName:"p"}),"\n","Support function with format: Function",(0,p.kt)("inlineCode",{parentName:"p"},"<I, CompletableFuture<O>>")," ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6684"},"#6684"),"  "),(0,p.kt)("h2",{id:"admin"},"admin"),(0,p.kt)("p",null,"Fix pulsar admin thread number explode bug ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6940"},"#6940"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue 6887][pulsar-broker]"," ttlDurationDefaultInSeconds not applying ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6920"},"#6920"),(0,p.kt)("br",{parentName:"p"}),"\n","[function]"," Function endpoint admin/v3/functions/{tenant}/{namespace} always returns 404 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6767"},"#6767"),(0,p.kt)("br",{parentName:"p"}),"\n","fix_admin_getIndividualMsgsFromBatch_bug ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6715"},"#6715"),(0,p.kt)("br",{parentName:"p"}),"\n","Retention policy should be respected when there is no traffic ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6676"},"#6676"),"  "),(0,p.kt)("h2",{id:"sql"},"sql"),(0,p.kt)("p",null,"Pulsar SQL Support Avro Schema ",(0,p.kt)("inlineCode",{parentName:"p"},"ByteBuffer")," Type ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6925"},"#6925"),(0,p.kt)("br",{parentName:"p"}),"\n","Add a note for bookkeeper explicit LAC ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6908"},"#6908"),"  "),(0,p.kt)("h2",{id:"security"},"security"),(0,p.kt)("p",null,"add keystore tls config doc ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6922"},"#6922"),(0,p.kt)("br",{parentName:"p"}),"\n","use originalAuthMethod on originalAuthChecker ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6870"},"#6870"),(0,p.kt)("br",{parentName:"p"}),"\n","Add Tls with keystore type config support ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6853"},"#6853"),"  "),(0,p.kt)("h2",{id:"metrics"},"metrics"),(0,p.kt)("p",null,"Expose pulsar_out_bytes_total and pulsar_out_messages_total for namespace/subscription/consumer. ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6918"},"#6918"),"  "),(0,p.kt)("h2",{id:"broker"},"broker"),(0,p.kt)("p",null,"[Broker]"," Handle all exceptions from ",(0,p.kt)("inlineCode",{parentName:"p"},"topic.addProducer")," ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6881"},"#6881"),(0,p.kt)("br",{parentName:"p"}),"\n","[broker]"," register loadbalance znode should attempt to wait until session expired ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6788"},"#6788"),(0,p.kt)("br",{parentName:"p"}),"\n","change nondurable cursor to active ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6769"},"#6769"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix check backlogged cursors without consumer ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6766"},"#6766"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," avoid backpressure by skipping dispatching if consumer channel is not writable ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6740"},"#6740"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," Fix Deadlock by Consumer and Reader ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6728"},"#6728"),(0,p.kt)("br",{parentName:"p"}),"\n","[ISSUE 6563][Broker]"," Invalidate managed ledgers zookeeper cache instead of reloading on watcher triggered ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6659"},"#6659"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue #5395][broker]"," Implement AutoTopicCreation by namespace override ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6471"},"#6471"),"  "),(0,p.kt)("h2",{id:"build"},"build"),(0,p.kt)("p",null,"[Dashboard]","Fixed dashboard start failed ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6857"},"#6857"),(0,p.kt)("br",{parentName:"p"}),"\n","[build]"," Bump netty version to 4.1.48.Final ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6746"},"#6746"),"  "),(0,p.kt)("h2",{id:"connect"},"connect"),(0,p.kt)("p",null,"[JDBC Sink]"," JDBC sink does not handle null in schema ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6848"},"#6848"),"  "),(0,p.kt)("h2",{id:"schemaregistry"},"schemaregistry"),(0,p.kt)("p",null,"fix Get schema by version can get the deleted schema info #6754 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6764"},"#6764"),(0,p.kt)("br",{parentName:"p"}),"\n","[issue 6694][AVRO ENCODE]"," Reset cursor if message encode fails. ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6695"},"#6695"),(0,p.kt)("br",{parentName:"p"}),"\n","ISSUE-6612 FIX: parse long field in GenricJsonRecord (#6612) ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6622"},"#6622"),(0,p.kt)("br",{parentName:"p"}),"\n","Make SchemaStorage accessible in Offloader ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6567"},"#6567"),"  "),(0,p.kt)("h2",{id:"tieredstorage"},"tieredstorage"),(0,p.kt)("p",null,"Avoid prefetch too much data when offloading data to HDFS ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6717"},"#6717"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue 6283][tiered-storage]"," Offload policies per namespace ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6422"},"#6422"),"  "),(0,p.kt)("h2",{id:"test"},"test"),(0,p.kt)("p",null,"[hotfix]","Python function protobuf missing field and broker test failed ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6641"},"#6641"),"  "),(0,p.kt)("h2",{id:"storage"},"storage"),(0,p.kt)("p",null,"[2nd Storage]","Extract common method in tiered storage to managed-ledger module ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6533"},"#6533")))}m.isMDXComponent=!0}}]);