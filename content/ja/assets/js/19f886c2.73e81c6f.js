"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[14814],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"io-file-source",title:"File source connector",sidebar_label:"File source connector"},p=void 0,u={unversionedId:"io-file-source",id:"io-file-source",title:"File source connector",description:"The File source connector pulls messages from files in directories and persists the messages to Pulsar topics.",source:"@site/docs/io-file-source.md",sourceDirName:".",slug:"/io-file-source",permalink:"/ja/docs/next/io-file-source",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/io-file-source.md",tags:[],version:"current",frontMatter:{id:"io-file-source",title:"File source connector",sidebar_label:"File source connector"}},s={},m=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The File source connector pulls messages from files in directories and persists the messages to Pulsar topics."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The configuration of the File source connector has the following properties."),(0,l.kt)("h3",{id:"property"},"Property"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"inputDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"No default value"),(0,l.kt)("td",{parentName:"tr",align:null},"The input directory to pull files.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"recurse")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to pull files from subdirectory or not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keepFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to true, the file is not deleted after it is processed, which means the file can be picked up continually.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fileFilter")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("sup",{parentName:"td",id:"fnref-\\\\."},(0,l.kt)("a",{parentName:"sup",href:"#fn-\\\\.",className:"footnote-ref"},"\\\\.")),".*"),(0,l.kt)("td",{parentName:"tr",align:null},"The file whose name matches the given regular expression is picked up.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pathFilter")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"recurse")," is set to true, the subdirectory whose path matches the given regular expression is scanned.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minimumFileAge")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum age that a file can be processed. ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Any file younger than ",(0,l.kt)("inlineCode",{parentName:"td"},"minimumFileAge")," (according to the last modification date) is ignored.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maximumFileAge")),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Long.MAX_VALUE"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum age that a file can be processed. ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Any file older than ",(0,l.kt)("inlineCode",{parentName:"td"},"maximumFileAge")," (according to last modification date) is ignored.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minimumSize")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum size (in bytes) that a file can be processed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maximumSize")),(0,l.kt)("td",{parentName:"tr",align:null},"Double"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Double.MAX_VALUE"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum size (in bytes) that a file can be processed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ignoreHiddenFiles")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the hidden files should be ignored or not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pollingInterval")),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"10000L"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates how long to wait before performing a directory listing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"numWorkers")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of worker threads that process files.",(0,l.kt)("br",null),(0,l.kt)("br",null)," This allows you to process a larger number of files concurrently. ",(0,l.kt)("br",null),(0,l.kt)("br",null),"However, setting this to a value greater than 1 makes the data from multiple files mixed in the target topic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"processedFileSuffix")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"If set, do not delete but only rename file that has been processed. ",(0,l.kt)("br",null),(0,l.kt)("br",null),"  This config only work when 'keepFile' property is false.")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"Before using the File source connector, you need to create a configuration file through one of the following methods."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"JSON "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n   "configs": {\n      "inputDirectory": "/Users/david",\n      "recurse": true,\n      "keepFile": true,\n      "fileFilter": "[^\\\\.].*",\n      "pathFilter": "*",\n      "minimumFileAge": 0,\n      "maximumFileAge": 9999999999,\n      "minimumSize": 1,\n      "maximumSize": 5000000,\n      "ignoreHiddenFiles": true,\n      "pollingInterval": 5000,\n      "numWorkers": 1,\n      "processedFileSuffix": ".processed_done"\n   }\n}\n\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"YAML"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    inputDirectory: "/Users/david"\n    recurse: true\n    keepFile: true\n    fileFilter: "[^\\\\.].*"\n    pathFilter: "*"\n    minimumFileAge: 0\n    maximumFileAge: 9999999999\n    minimumSize: 1\n    maximumSize: 5000000\n    ignoreHiddenFiles: true\n    pollingInterval: 5000\n    numWorkers: 1\n    processedFileSuffix: ".processed_done"\n\n')))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Here is an example of using the File source connecter."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Pull a Pulsar image."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker pull apachepulsar/pulsar:{version}\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start Pulsar standalone."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker run -d -it -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-standalone apachepulsar/pulsar:{version} bin/pulsar standalone\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a configuration file ",(0,l.kt)("em",{parentName:"p"},"file-connector.yaml"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    inputDirectory: "/opt"\n\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy the configuration file ",(0,l.kt)("em",{parentName:"p"},"file-connector.yaml")," to the container."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker cp connectors/file-connector.yaml pulsar-standalone:/pulsar/\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download the File source connector."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ curl -O https://mirrors.tuna.tsinghua.edu.cn/apache/pulsar/pulsar-{version}/connectors/pulsar-io-file-{version}.nar\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy it to the ",(0,l.kt)("inlineCode",{parentName:"p"},"connectors")," folder, then restart the container."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker cp pulsar-io-file-{version}.nar pulsar-standalone:/pulsar/connectors/  \n$ docker restart pulsar-standalone\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start the File source connector."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker exec -it pulsar-standalone /bin/bash\n\n$ ./bin/pulsar-admin sources localrun \\\n--archive /pulsar/connectors/pulsar-io-file-{version}.nar \\\n--name file-test \\\n--destination-topic-name  pulsar-file-test \\\n--source-config-file /pulsar/file-connector.yaml\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start a consumer."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar-client consume -s file-test -n 0 pulsar-file-test\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Write the message to the file ",(0,l.kt)("em",{parentName:"p"},"test.txt"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\necho "hello world!" > /opt/test.txt\n\n')),(0,l.kt)("p",{parentName:"li"},"The following information appears on the consumer terminal window."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n----- got message -----\nhello world!\n\n")))))}d.isMDXComponent=!0}}]);