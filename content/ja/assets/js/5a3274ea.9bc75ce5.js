"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3571],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),h=n,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||l;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},41912:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=["components"],i={id:"helm-overview",title:"Apache Pulsar Helm Chart",sidebar_label:"Overview"},s=void 0,u={unversionedId:"helm-overview",id:"helm-overview",title:"Apache Pulsar Helm Chart",description:"Helm chart supports you to install Apache Pulsar in a cloud-native environment.",source:"@site/docs/helm-overview.md",sourceDirName:".",slug:"/helm-overview",permalink:"/ja/docs/next/helm-overview",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/helm-overview.md",tags:[],version:"current",frontMatter:{id:"helm-overview",title:"Apache Pulsar Helm Chart",sidebar_label:"Overview"},sidebar:"docsSidebar",previous:{title:"How to monitor transactions?",permalink:"/ja/docs/next/txn-monitor"},next:{title:"Prepare",permalink:"/ja/docs/next/helm-prepare"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Installation",id:"installation",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Uninstallation",id:"uninstallation",level:2}],m={toc:c};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-helm-chart"},"Helm chart")," supports you to install Apache Pulsar in a cloud-native environment."),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"The Apache Pulsar Helm chart provides one of the most convenient ways to operate Pulsar on Kubernetes. With all the required components, Helm chart is scalable and thus being suitable for large-scale deployments."),(0,l.kt)("p",null,"The Apache Pulsar Helm chart contains all components to support the features and functions that Pulsar delivers. You can install and configure these components separately."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pulsar core components:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ZooKeeper"),(0,l.kt)("li",{parentName:"ul"},"Bookies"),(0,l.kt)("li",{parentName:"ul"},"Brokers"),(0,l.kt)("li",{parentName:"ul"},"Function workers"),(0,l.kt)("li",{parentName:"ul"},"Proxies"))),(0,l.kt)("li",{parentName:"ul"},"Control center:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Pulsar Manager"),(0,l.kt)("li",{parentName:"ul"},"Prometheus"),(0,l.kt)("li",{parentName:"ul"},"Grafana")))),(0,l.kt)("p",null,"Moreover, Helm chart supports:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Security",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Automatically provisioned TLS certificates, using ",(0,l.kt)("a",{parentName:"li",href:"https://www.jetstack.io/"},"Jetstack"),"'s ",(0,l.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/"},"cert-manager"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"self-signed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://letsencrypt.org/"},"Let's Encrypt")))),(0,l.kt)("li",{parentName:"ul"},"TLS Encryption",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Proxy"),(0,l.kt)("li",{parentName:"ul"},"Broker"),(0,l.kt)("li",{parentName:"ul"},"Toolset"),(0,l.kt)("li",{parentName:"ul"},"Bookie"),(0,l.kt)("li",{parentName:"ul"},"ZooKeeper"))),(0,l.kt)("li",{parentName:"ul"},"Authentication",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JWT"))),(0,l.kt)("li",{parentName:"ul"},"Authorization"))),(0,l.kt)("li",{parentName:"ul"},"Storage",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Non-persistence storage"),(0,l.kt)("li",{parentName:"ul"},"Persistent volume"),(0,l.kt)("li",{parentName:"ul"},"Local persistent volumes"))),(0,l.kt)("li",{parentName:"ul"},"Functions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Kubernetes Runtime"),(0,l.kt)("li",{parentName:"ul"},"Process Runtime"),(0,l.kt)("li",{parentName:"ul"},"Thread Runtime"))),(0,l.kt)("li",{parentName:"ul"},"Operations",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Independent image versions for all components, enabling controlled upgrades")))),(0,l.kt)("h2",{id:"quick-start"},"Quick start"),(0,l.kt)("p",null,"To run with Apache Pulsar Helm chart as fast as possible in a ",(0,l.kt)("strong",{parentName:"p"},"non-production")," use case, we provide a ",(0,l.kt)("a",{parentName:"p",href:"getting-started-helm"},"quick start guide")," for Proof of Concept (PoC) deployments."),(0,l.kt)("p",null,"This guide walks you through deploying Apache Pulsar Helm chart with default values and features, but it is ",(0,l.kt)("em",{parentName:"p"},"not")," suitable for deployments in production-ready environments. To deploy the charts in production under sustained load, you can follow the complete ",(0,l.kt)("a",{parentName:"p",href:"helm-install"},"Installation Guide"),"."),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"Although we have done our best to make these charts as seamless as possible, troubles do go out of our control occasionally. We have been collecting tips and tricks for troubleshooting common issues. Please check it first before raising an ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/new/choose"},"issue"),", and feel free to add your solutions by creating a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/compare"},"Pull Request"),"."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"The Apache Pulsar Helm chart contains all required dependencies."),(0,l.kt)("p",null,"If you deploy a PoC for testing, we strongly suggest you follow this ",(0,l.kt)("a",{parentName:"p",href:"getting-started-helm"},"Quick Start Guide")," for your first iteration."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"helm-prepare"},"Preparation")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"helm-deploy"},"Deployment"))),(0,l.kt)("h2",{id:"upgrading"},"Upgrading"),(0,l.kt)("p",null,"Once the Apache Pulsar Helm chart is installed, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"helm upgrade")," command to configure and update it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm repo add apache https://pulsar.apache.org/charts\nhelm repo update\nhelm get values <pulsar-release-name> > pulsar.yaml\nhelm upgrade <pulsar-release-name> apache/pulsar -f pulsar.yaml\n\n")),(0,l.kt)("p",null,"For more detailed information, see ",(0,l.kt)("a",{parentName:"p",href:"helm-upgrade"},"Upgrading"),"."),(0,l.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,l.kt)("p",null,"To uninstall the Apache Pulsar Helm chart, run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm delete <pulsar-release-name>\n\n")),(0,l.kt)("p",null,"For the purposes of continuity, some Kubernetes objects in these charts cannot be removed by ",(0,l.kt)("inlineCode",{parentName:"p"},"helm delete")," command. It is recommended to ",(0,l.kt)("em",{parentName:"p"},"consciously")," remove these items, as they affect re-deployment."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PVCs for stateful data: remove these items.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ZooKeeper: This is your metadata."),(0,l.kt)("li",{parentName:"ul"},"BookKeeper: This is your data."),(0,l.kt)("li",{parentName:"ul"},"Prometheus: This is your metrics data, which can be safely removed."))),(0,l.kt)("li",{parentName:"ul"},"Secrets: if the secrets are generated by the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/prepare_helm_release.sh"},"prepare release script"),", they contain secret keys and tokens. You can use the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/cleanup_helm_release.sh"},"cleanup release script")," to remove these secrets and tokens as needed.")))}h.isMDXComponent=!0}}]);