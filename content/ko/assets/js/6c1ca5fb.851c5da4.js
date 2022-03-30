"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[73706],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?s.createElement(h,o(o({ref:t},u),{},{components:n})):s.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var p=2;p<i;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85714:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var s=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],a={id:"sql-rest-api",title:"Pulsar SQL REST APIs",sidebar_label:"REST APIs",original_id:"sql-rest-api"},l=void 0,p={unversionedId:"sql-rest-api",id:"version-2.9.1/sql-rest-api",title:"Pulsar SQL REST APIs",description:"This section lists resources that make up the Presto REST API v1.",source:"@site/versioned_docs/version-2.9.1/sql-rest-api.md",sourceDirName:".",slug:"/sql-rest-api",permalink:"/ko/docs/sql-rest-api",editUrl:"https://github.com/apache/pulsar/edit/master/site2/versioned_docs/version-2.9.1/sql-rest-api.md",tags:[],version:"2.9.1",frontMatter:{id:"sql-rest-api",title:"Pulsar SQL REST APIs",sidebar_label:"REST APIs",original_id:"sql-rest-api"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Configuration and deployment",permalink:"/ko/docs/sql-deployment-configurations"},next:{title:"Overview",permalink:"/ko/docs/tiered-storage-overview"}},u={},c=[{value:"Request for Presto services",id:"request-for-presto-services",level:2},{value:"Schema",id:"schema",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section lists resources that make up the Presto REST API v1. "),(0,i.kt)("h2",{id:"request-for-presto-services"},"Request for Presto services"),(0,i.kt)("p",null,"All requests for Presto services should use Presto REST API v1 version. "),(0,i.kt)("p",null,"To request services, use explicit URL ",(0,i.kt)("inlineCode",{parentName:"p"},"http://presto.service:8081/v1"),". You need to update ",(0,i.kt)("inlineCode",{parentName:"p"},"presto.service:8081")," with your real Presto address before sending requests."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST")," requests require the ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Presto-User")," header. If you use authentication, you must use the same ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," that is specified in the authentication configuration. If you do not use authentication, you can specify anything for ",(0,i.kt)("inlineCode",{parentName:"p"},"username"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\nX-Presto-User: username\n\n")),(0,i.kt)("p",null,"For more information about headers, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/trinodb/trino"},"PrestoHeaders"),"."),(0,i.kt)("h2",{id:"schema"},"Schema"),(0,i.kt)("p",null,"You can use statement in the HTTP body. All data is received as JSON document that might contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"nextUri")," link. If the received JSON document contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"nextUri")," link, the request continues with the ",(0,i.kt)("inlineCode",{parentName:"p"},"nextUri")," link until the received data does not contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"nextUri")," link. If no error is returned, the query completes successfully. If an ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," field is displayed in ",(0,i.kt)("inlineCode",{parentName:"p"},"stats"),", it means the query fails."),(0,i.kt)("p",null,"The following is an example of ",(0,i.kt)("inlineCode",{parentName:"p"},"show catalogs"),". The query continues until the received JSON document does not contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"nextUri")," link. Since no ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," is displayed in ",(0,i.kt)("inlineCode",{parentName:"p"},"stats"),", it means that the query completes successfully."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'\n\u279c  ~ curl --header "X-Presto-User: test-user" --request POST --data \'show catalogs\' http://localhost:8081/v1/statement\n{\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "stats" : {\n      "queued" : true,\n      "nodes" : 0,\n      "userTimeMillis" : 0,\n      "cpuTimeMillis" : 0,\n      "wallTimeMillis" : 0,\n      "processedBytes" : 0,\n      "processedRows" : 0,\n      "runningSplits" : 0,\n      "queuedTimeMillis" : 0,\n      "queuedSplits" : 0,\n      "completedSplits" : 0,\n      "totalSplits" : 0,\n      "scheduled" : false,\n      "peakMemoryBytes" : 0,\n      "state" : "QUEUED",\n      "elapsedTimeMillis" : 0\n   },\n   "id" : "20191113_033653_00006_dg6hb",\n   "nextUri" : "http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/1"\n}\n\n\u279c  ~ curl http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/1\n{\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "nextUri" : "http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/2",\n   "id" : "20191113_033653_00006_dg6hb",\n   "stats" : {\n      "state" : "PLANNING",\n      "totalSplits" : 0,\n      "queued" : false,\n      "userTimeMillis" : 0,\n      "completedSplits" : 0,\n      "scheduled" : false,\n      "wallTimeMillis" : 0,\n      "runningSplits" : 0,\n      "queuedSplits" : 0,\n      "cpuTimeMillis" : 0,\n      "processedRows" : 0,\n      "processedBytes" : 0,\n      "nodes" : 0,\n      "queuedTimeMillis" : 1,\n      "elapsedTimeMillis" : 2,\n      "peakMemoryBytes" : 0\n   }\n}\n\n\u279c  ~ curl http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/2\n{\n   "id" : "20191113_033653_00006_dg6hb",\n   "data" : [\n      [\n         "pulsar"\n      ],\n      [\n         "system"\n      ]\n   ],\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "columns" : [\n      {\n         "typeSignature" : {\n            "rawType" : "varchar",\n            "arguments" : [\n               {\n                  "kind" : "LONG_LITERAL",\n                  "value" : 6\n               }\n            ],\n            "literalArguments" : [],\n            "typeArguments" : []\n         },\n         "name" : "Catalog",\n         "type" : "varchar(6)"\n      }\n   ],\n   "stats" : {\n      "wallTimeMillis" : 104,\n      "scheduled" : true,\n      "userTimeMillis" : 14,\n      "progressPercentage" : 100,\n      "totalSplits" : 19,\n      "nodes" : 1,\n      "cpuTimeMillis" : 16,\n      "queued" : false,\n      "queuedTimeMillis" : 1,\n      "state" : "FINISHED",\n      "peakMemoryBytes" : 0,\n      "elapsedTimeMillis" : 111,\n      "processedBytes" : 0,\n      "processedRows" : 0,\n      "queuedSplits" : 0,\n      "rootStage" : {\n         "cpuTimeMillis" : 1,\n         "runningSplits" : 0,\n         "state" : "FINISHED",\n         "completedSplits" : 1,\n         "subStages" : [\n            {\n               "cpuTimeMillis" : 14,\n               "runningSplits" : 0,\n               "state" : "FINISHED",\n               "completedSplits" : 17,\n               "subStages" : [\n                  {\n                     "wallTimeMillis" : 7,\n                     "subStages" : [],\n                     "stageId" : "2",\n                     "done" : true,\n                     "nodes" : 1,\n                     "totalSplits" : 1,\n                     "processedBytes" : 22,\n                     "processedRows" : 2,\n                     "queuedSplits" : 0,\n                     "userTimeMillis" : 1,\n                     "cpuTimeMillis" : 1,\n                     "runningSplits" : 0,\n                     "state" : "FINISHED",\n                     "completedSplits" : 1\n                  }\n               ],\n               "wallTimeMillis" : 92,\n               "nodes" : 1,\n               "done" : true,\n               "stageId" : "1",\n               "userTimeMillis" : 12,\n               "processedRows" : 2,\n               "processedBytes" : 51,\n               "queuedSplits" : 0,\n               "totalSplits" : 17\n            }\n         ],\n         "wallTimeMillis" : 5,\n         "done" : true,\n         "nodes" : 1,\n         "stageId" : "0",\n         "userTimeMillis" : 1,\n         "processedRows" : 2,\n         "processedBytes" : 22,\n         "totalSplits" : 1,\n         "queuedSplits" : 0\n      },\n      "runningSplits" : 0,\n      "completedSplits" : 19\n   }\n}\n\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Since the response data is not in sync with the query state from the perspective of clients, you cannot rely on the response data to determine whether the query completes."))),(0,i.kt)("p",null,"For more information about Presto REST API, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prestosql/presto/wiki/HTTP-Protocol"},"Presto HTTP Protocol"),"."))}m.isMDXComponent=!0}}]);