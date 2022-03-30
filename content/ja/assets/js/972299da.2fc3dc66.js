"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[73571],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return y}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),u=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return o.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),y=n,h=d["".concat(l,".").concat(y)]||d[y]||c[y]||a;return t?o.createElement(h,i(i({ref:r},p),{},{components:t})):o.createElement(h,i({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90789:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=t(87462),n=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"administration-proxy",title:"Pulsar proxy",sidebar_label:"Pulsar proxy"},l=void 0,u={unversionedId:"administration-proxy",id:"administration-proxy",title:"Pulsar proxy",description:"Pulsar proxy is an optional gateway. Pulsar proxy is used when direct connections between clients and Pulsar brokers are either infeasible or undesirable. For example, when you run Pulsar in a cloud environment or on Kubernetes or an analogous platform, you can run Pulsar proxy.",source:"@site/docs/administration-proxy.md",sourceDirName:".",slug:"/administration-proxy",permalink:"/ja/docs/next/administration-proxy",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/administration-proxy.md",tags:[],version:"current",frontMatter:{id:"administration-proxy",title:"Pulsar proxy",sidebar_label:"Pulsar proxy"},sidebar:"docsSidebar",previous:{title:"Load balance",permalink:"/ja/docs/next/administration-load-balance"},next:{title:"Upgrade",permalink:"/ja/docs/next/administration-upgrade"}},p={},c=[{value:"Configure the proxy",id:"configure-the-proxy",level:2},{value:"Use broker URLs",id:"use-broker-urls",level:3},{value:"Use service discovery",id:"use-service-discovery",level:3},{value:"Start the proxy",id:"start-the-proxy",level:2},{value:"Stop the proxy",id:"stop-the-proxy",level:2},{value:"Proxy frontends",id:"proxy-frontends",level:2},{value:"Use Pulsar clients with the proxy",id:"use-pulsar-clients-with-the-proxy",level:2}],d={toc:c};function y(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pulsar proxy is an optional gateway. Pulsar proxy is used when direct connections between clients and Pulsar brokers are either infeasible or undesirable. For example, when you run Pulsar in a cloud environment or on ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes")," or an analogous platform, you can run Pulsar proxy."),(0,a.kt)("h2",{id:"configure-the-proxy"},"Configure the proxy"),(0,a.kt)("p",null,"Before using the proxy, you need to configure it with the brokers addresses in the cluster. You can configure the broker URL in the proxy configuration, or the proxy to connect directly using service discovery."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In a production environment service discovery is not recommended.")),(0,a.kt)("h3",{id:"use-broker-urls"},"Use broker URLs"),(0,a.kt)("p",null,"It is more secure to specify a URL to connect to the brokers."),(0,a.kt)("p",null,"Proxy authorization requires access to ZooKeeper, so if you use these broker URLs to connect to the brokers, you need to disable authorization at the Proxy level. Brokers still authorize requests after the proxy forwards them."),(0,a.kt)("p",null,"You can configure the broker URLs in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf")," as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"\nbrokerServiceURL=pulsar://brokers.example.com:6650\nbrokerWebServiceURL=http://brokers.example.com:8080\nfunctionWorkerWebServiceURL=http://function-workers.example.com:8080\n\n")),(0,a.kt)("p",null,"If you use TLS, configure the broker URLs in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"\nbrokerServiceURLTLS=pulsar+ssl://brokers.example.com:6651\nbrokerWebServiceURLTLS=https://brokers.example.com:8443\nfunctionWorkerWebServiceURL=https://function-workers.example.com:8443\n\n")),(0,a.kt)("p",null,"The hostname in the URLs provided should be a DNS entry which points to multiple brokers or a virtual IP address, which is backed by multiple broker IP addresses, so that the proxy does not lose connectivity to Pulsar cluster if a single broker becomes unavailable."),(0,a.kt)("p",null,"The ports to connect to the brokers (6650 and 8080, or in the case of TLS, 6651 and 8443) should be open in the network ACLs."),(0,a.kt)("p",null,"Note that if you do not use functions, you do not need to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"functionWorkerWebServiceURL"),"."),(0,a.kt)("h3",{id:"use-service-discovery"},"Use service discovery"),(0,a.kt)("p",null,"Pulsar uses ",(0,a.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org"},"ZooKeeper")," for service discovery. To connect the proxy to ZooKeeper, specify the following in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"\nmetadataStoreUrl=my-zk-0:2181,my-zk-1:2181,my-zk-2:2181\nconfigurationMetadataStoreUrl=my-zk-0:2184,my-zk-remote:2184\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To use service discovery, you need to open the network ACLs, so the proxy can connects to the ZooKeeper nodes through the ZooKeeper client port (port ",(0,a.kt)("inlineCode",{parentName:"p"},"2181"),") and the configuration store client port (port ",(0,a.kt)("inlineCode",{parentName:"p"},"2184"),").")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"However, it is not secure to use service discovery. Because if the network ACL is open, when someone compromises a proxy, they have full access to ZooKeeper. ")),(0,a.kt)("h2",{id:"start-the-proxy"},"Start the proxy"),(0,a.kt)("p",null,"To start the proxy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ cd /path/to/pulsar/directory\n$ bin/pulsar proxy \\\n  --metadata-store zk:my-zk-1:2181,my-zk-2:2181,my-zk-3:2181 \\\n  --configuration-metadata-store zk:my-zk-1:2181,my-zk-2:2181,my-zk-3:2181\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can run multiple instances of the Pulsar proxy in a cluster.")),(0,a.kt)("h2",{id:"stop-the-proxy"},"Stop the proxy"),(0,a.kt)("p",null,"Pulsar proxy runs in the foreground by default. To stop the proxy, simply stop the process in which the proxy is running."),(0,a.kt)("h2",{id:"proxy-frontends"},"Proxy frontends"),(0,a.kt)("p",null,"You can run Pulsar proxy behind some kind of load-distributing frontend, such as an ",(0,a.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-load-balancing-concepts"},"HAProxy")," load balancer."),(0,a.kt)("h2",{id:"use-pulsar-clients-with-the-proxy"},"Use Pulsar clients with the proxy"),(0,a.kt)("p",null,"Once your Pulsar proxy is up and running, preferably behind a load-distributing ",(0,a.kt)("a",{parentName:"p",href:"#proxy-frontends"},"frontend"),", clients can connect to the proxy via whichever address that the frontend uses. If the address is the DNS address ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar.cluster.default"),", for example, the connection URL for clients is ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar://pulsar.cluster.default:6650"),"."),(0,a.kt)("p",null,"For more information on Proxy configuration, refer to ",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/next/reference-configuration#pulsar-proxy"},"Pulsar proxy"),"."))}y.isMDXComponent=!0}}]);