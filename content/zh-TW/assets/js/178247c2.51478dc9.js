"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[30162],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(o,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65540:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],s={id:"client-libraries-rest",title:"Pulsar REST",sidebar_label:"REST"},o=void 0,p={unversionedId:"client-libraries-rest",id:"client-libraries-rest",title:"Pulsar REST",description:"Pulsar not only provides REST endpoints to manage resources in Pulsar clusters, but also provides methods to query the state for those resources. In addition, Pulsar REST provides a simple way to interact with Pulsar without using client libraries, which is convenient for applications to use HTTP to interact with Pulsar.",source:"@site/docs/client-libraries-rest.md",sourceDirName:".",slug:"/client-libraries-rest",permalink:"/zh-TW/docs/next/client-libraries-rest",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/client-libraries-rest.md",tags:[],version:"current",frontMatter:{id:"client-libraries-rest",title:"Pulsar REST",sidebar_label:"REST"},sidebar:"docsSidebar",previous:{title:"C#",permalink:"/zh-TW/docs/next/client-libraries-dotnet"},next:{title:"Overview",permalink:"/zh-TW/docs/next/admin-api-overview"}},m={},d=[{value:"Connection",id:"connection",level:2},{value:"Producer",id:"producer",level:2},{value:"Message",id:"message",level:3},{value:"Schema",id:"schema",level:3},{value:"Example",id:"example",level:3}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pulsar not only provides REST endpoints to manage resources in Pulsar clusters, but also provides methods to query the state for those resources. In addition, Pulsar REST provides a simple way to interact with Pulsar ",(0,l.kt)("strong",{parentName:"p"},"without using client libraries"),", which is convenient for applications to use HTTP to interact with Pulsar. "),(0,l.kt)("h2",{id:"connection"},"Connection"),(0,l.kt)("p",null,"To connect to Pulsar, you need to specify a URL."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Produce messages to non-partitioned or partitioned topics"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\nbrokerUrl:{8080/8081}/topics/{persistent/non-persistent}/{my-tenant}/{my-namespace}/{my-topic}\n\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Produce messages to specific partitions of partitioned topics"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\nbrokerUrl:{8080/8081}/topics/{persistent/non-persistent}/{my-tenant}/{my-namespace}/{my-topic}/partitions/{partition-number}\n\n")))),(0,l.kt)("h2",{id:"producer"},"Producer"),(0,l.kt)("p",null,"Currently, you can produce messages to the following destinations with tools like cURL or Postman via REST. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Non-partitioned or partitioned topics")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Specific partitions of partitioned topics"))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can only produce messages to ",(0,l.kt)("strong",{parentName:"p"},"topics that already exist")," in Pulsar via REST."))),(0,l.kt)("p",null,"Consuming and reading messages via REST will be supported in the future."),(0,l.kt)("h3",{id:"message"},"Message"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Below is the structure of a request payload."),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaVersion")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Schema version of existing schema used for this message ",(0,l.kt)("br",null),(0,l.kt)("br",null),"You need provide one of the following: ",(0,l.kt)("br",null),(0,l.kt)("br",null)," - ",(0,l.kt)("inlineCode",{parentName:"td"},"schemaVersion")," ",(0,l.kt)("br",null)," - ",(0,l.kt)("inlineCode",{parentName:"td"},"keySchema"),"/",(0,l.kt)("inlineCode",{parentName:"td"},"valueSchema"),(0,l.kt)("br",null),(0,l.kt)("br",null),"If both of them are provided, then ",(0,l.kt)("inlineCode",{parentName:"td"},"schemaVersion")," is used")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keySchema/valueSchema")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Key schema / Value schema used for this message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"producerName")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Producer name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Messages[] SingleMessage")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Messages to be sent"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Below is the structure of a message. "),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"payload")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Actual message payload ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Messages are sent in strings and encoded with given schemas on the server side")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"properties")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Map<String, String>")),(0,l.kt)("td",{parentName:"tr",align:null},"Custom properties")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"key")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Partition key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"replicationClusters")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<String>")),(0,l.kt)("td",{parentName:"tr",align:null},"Clusters to which messages replicate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"eventTime")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Message event time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sequenceId")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"long")),(0,l.kt)("td",{parentName:"tr",align:null},"Message sequence ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disableReplication")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to disable replication of messages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"deliverAt")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"long")),(0,l.kt)("td",{parentName:"tr",align:null},"Deliver messages only at or after specified absolute timestamp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"deliverAfterMs")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"long")),(0,l.kt)("td",{parentName:"tr",align:null},"Deliver messages only after specified relative delay (in milliseconds)")))))),(0,l.kt)("h3",{id:"schema"},"Schema"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Currently, Primitive, Avro, JSON, and KeyValue schemas are supported.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For Primitive, Avro and JSON schemas, schemas should be provided as the full schema encoded as a string.  ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If the schema is not set, messages are encoded with string schema."))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"Below is an example of sending messages to topics using JSON schema via REST."),(0,l.kt)("p",null,"Assume that you send messages representing the following class."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   class Seller {\n        public String state;\n        public String street;\n        public long zipCode;\n    }\n\n    class PC {\n        public String brand;\n        public String model;\n        public int year;\n        public GPU gpu;\n        public Seller seller;\n    }\n\n")),(0,l.kt)("p",null,"Send messages to topics with JSON schema using the command below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\ncurl --location --request POST \'brokerUrl:{8080/8081}/topics/{persistent/non-persistent}/{my-tenant}/{my-namespace}/{my-topic}\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "valueSchema": "{\\"name\\":\\"\\",\\"schema\\":\\"eyJ0eXBlIjoicmVjb3JkIiwibmFtZSI6IlBDIiwibmFtZXNwYWNlIjoib3JnLmFwYWNoZS5wdWxzYXIuYnJva2VyLmFkbWluLlRvcGljc1Rlc3QiLCJmaWVsZHMiOlt7Im5hbWUiOiJicmFuZCIsInR5cGUiOlsibnVsbCIsInN0cmluZyJdLCJkZWZhdWx0IjpudWxsfSx7Im5hbWUiOiJncHUiLCJ0eXBlIjpbIm51bGwiLHsidHlwZSI6ImVudW0iLCJuYW1lIjoiR1BVIiwic3ltYm9scyI6WyJBTUQiLCJOVklESUEiXX1dLCJkZWZhdWx0IjpudWxsfSx7Im5hbWUiOiJtb2RlbCIsInR5cGUiOlsibnVsbCIsInN0cmluZyJdLCJkZWZhdWx0IjpudWxsfSx7Im5hbWUiOiJzZWxsZXIiLCJ0eXBlIjpbIm51bGwiLHsidHlwZSI6InJlY29yZCIsIm5hbWUiOiJTZWxsZXIiLCJmaWVsZHMiOlt7Im5hbWUiOiJzdGF0ZSIsInR5cGUiOlsibnVsbCIsInN0cmluZyJdLCJkZWZhdWx0IjpudWxsfSx7Im5hbWUiOiJzdHJlZXQiLCJ0eXBlIjpbIm51bGwiLCJzdHJpbmciXSwiZGVmYXVsdCI6bnVsbH0seyJuYW1lIjoiemlwQ29kZSIsInR5cGUiOiJsb25nIn1dfV0sImRlZmF1bHQiOm51bGx9LHsibmFtZSI6InllYXIiLCJ0eXBlIjoiaW50In1dfQ==\\",\\"type\\":\\"JSON\\",\\"properties\\":{\\"__jsr310ConversionEnabled\\":\\"false\\",\\"__alwaysAllowNull\\":\\"true\\"},\\"schemaDefinition\\":\\"{\\\\\\"type\\\\\\":\\\\\\"record\\\\\\",\\\\\\"name\\\\\\":\\\\\\"PC\\\\\\",\\\\\\"namespace\\\\\\":\\\\\\"org.apache.pulsar.broker.admin.TopicsTest\\\\\\",\\\\\\"fields\\\\\\":[{\\\\\\"name\\\\\\":\\\\\\"brand\\\\\\",\\\\\\"type\\\\\\":[\\\\\\"null\\\\\\",\\\\\\"string\\\\\\"],\\\\\\"default\\\\\\":null},{\\\\\\"name\\\\\\":\\\\\\"gpu\\\\\\",\\\\\\"type\\\\\\":[\\\\\\"null\\\\\\",{\\\\\\"type\\\\\\":\\\\\\"enum\\\\\\",\\\\\\"name\\\\\\":\\\\\\"GPU\\\\\\",\\\\\\"symbols\\\\\\":[\\\\\\"AMD\\\\\\",\\\\\\"NVIDIA\\\\\\"]}],\\\\\\"default\\\\\\":null},{\\\\\\"name\\\\\\":\\\\\\"model\\\\\\",\\\\\\"type\\\\\\":[\\\\\\"null\\\\\\",\\\\\\"string\\\\\\"],\\\\\\"default\\\\\\":null},{\\\\\\"name\\\\\\":\\\\\\"seller\\\\\\",\\\\\\"type\\\\\\":[\\\\\\"null\\\\\\",{\\\\\\"type\\\\\\":\\\\\\"record\\\\\\",\\\\\\"name\\\\\\":\\\\\\"Seller\\\\\\",\\\\\\"fields\\\\\\":[{\\\\\\"name\\\\\\":\\\\\\"state\\\\\\",\\\\\\"type\\\\\\":[\\\\\\"null\\\\\\",\\\\\\"string\\\\\\"],\\\\\\"default\\\\\\":null},{\\\\\\"name\\\\\\":\\\\\\"street\\\\\\",\\\\\\"type\\\\\\":[\\\\\\"null\\\\\\",\\\\\\"string\\\\\\"],\\\\\\"default\\\\\\":null},{\\\\\\"name\\\\\\":\\\\\\"zipCode\\\\\\",\\\\\\"type\\\\\\":\\\\\\"long\\\\\\"}]}],\\\\\\"default\\\\\\":null},{\\\\\\"name\\\\\\":\\\\\\"year\\\\\\",\\\\\\"type\\\\\\":\\\\\\"int\\\\\\"}]}\\"}",\n\n// Schema data is just the base 64 encoded schemaDefinition.\n\n  "producerName": "rest-producer",\n  "messages": [\n    {\n      "key":"my-key",\n      "payload":"{\\"brand\\":\\"dell\\",\\"model\\":\\"alienware\\",\\"year\\":2021,\\"gpu\\":\\"AMD\\",\\"seller\\":{\\"state\\":\\"WA\\",\\"street\\":\\"main street\\",\\"zipCode\\":98004}}",\n      "eventTime":1603045262772,\n      "sequenceId":1\n    },\n    {\n      "key":"my-key",\n      "payload":"{\\"brand\\":\\"asus\\",\\"model\\":\\"rog\\",\\"year\\":2020,\\"gpu\\":\\"NVIDIA\\",\\"seller\\":{\\"state\\":\\"CA\\",\\"street\\":\\"back street\\",\\"zipCode\\":90232}}",\n      "eventTime":1603045262772,\n      "sequenceId":2\n    }\n  ]\n}\n`  \n// Sample message\n\n')))}c.isMDXComponent=!0}}]);