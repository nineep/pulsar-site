"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[895],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86976:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={id:"helm-prepare",title:"Prepare Kubernetes resources",sidebar_label:"Prepare",original_id:"helm-prepare"},s=void 0,u={unversionedId:"helm-prepare",id:"version-2.9.1/helm-prepare",title:"Prepare Kubernetes resources",description:"For a fully functional Pulsar cluster, you need a few resources before deploying the Apache Pulsar Helm chart. The following provides instructions to prepare the Kubernetes cluster before deploying the Pulsar Helm chart.",source:"@site/versioned_docs/version-2.9.1/helm-prepare.md",sourceDirName:".",slug:"/helm-prepare",permalink:"/zh-CN/docs/helm-prepare",editUrl:"https://github.com/apache/pulsar/edit/master/site2/versioned_docs/version-2.9.1/helm-prepare.md",tags:[],version:"2.9.1",frontMatter:{id:"helm-prepare",title:"Prepare Kubernetes resources",sidebar_label:"Prepare",original_id:"helm-prepare"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Overview",permalink:"/zh-CN/docs/helm-overview"},next:{title:"Install",permalink:"/zh-CN/docs/helm-install"}},p={},c=[{value:"Google Kubernetes Engine",id:"google-kubernetes-engine",level:2},{value:"Manual cluster creation",id:"manual-cluster-creation",level:3},{value:"Scripted cluster creation",id:"scripted-cluster-creation",level:3},{value:"Create cluster with local SSDs",id:"create-cluster-with-local-ssds",level:4}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"For a fully functional Pulsar cluster, you need a few resources before deploying the Apache Pulsar Helm chart. The following provides instructions to prepare the Kubernetes cluster before deploying the Pulsar Helm chart."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#google-kubernetes-engine"},"Google Kubernetes Engine"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#manual-cluster-creation"},"Manual cluster creation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#scripted-cluster-creation"},"Scripted cluster creation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-cluster-with-local-ssds"},"Create cluster with local SSDs"))))),(0,l.kt)("h2",{id:"google-kubernetes-engine"},"Google Kubernetes Engine"),(0,l.kt)("p",null,"To get started easier, a script is provided to create the cluster automatically. Alternatively, a cluster can be created manually as well."),(0,l.kt)("h3",{id:"manual-cluster-creation"},"Manual cluster creation"),(0,l.kt)("p",null,"To provision a Kubernetes cluster manually, follow the ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-cluster"},"GKE instructions"),"."),(0,l.kt)("h3",{id:"scripted-cluster-creation"},"Scripted cluster creation"),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/streamnative/charts/tree/master/scripts/pulsar/gke_bootstrap_script.sh"},"bootstrap script")," has been created to automate much of the setup process for users on GCP/GKE."),(0,l.kt)("p",null,"The script can:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a new GKE cluster."),(0,l.kt)("li",{parentName:"ol"},"Allow the cluster to modify DNS (Domain Name Server) records."),(0,l.kt)("li",{parentName:"ol"},"Setup ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl"),", and connect it to the cluster.")),(0,l.kt)("p",null,"Google Cloud SDK is a dependency of this script, so ensure it is ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/helm-tools#connect-to-a-gke-cluster"},"set up correctly")," for the script to work."),(0,l.kt)("p",null,"The script reads various parameters from environment variables and an argument ",(0,l.kt)("inlineCode",{parentName:"p"},"up")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"down")," for bootstrap and clean-up respectively."),(0,l.kt)("p",null,"The following table describes all variables."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Variable")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Default value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PROJECT"),(0,l.kt)("td",{parentName:"tr",align:null},"ID of your GCP project"),(0,l.kt)("td",{parentName:"tr",align:null},"No default value. It requires to be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CLUSTER_NAME"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the GKE cluster"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pulsar-dev"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONFDIR"),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration directory to store Kubernetes configuration"),(0,l.kt)("td",{parentName:"tr",align:null},"${HOME}/.config/streamnative")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT_NETWORK"),(0,l.kt)("td",{parentName:"tr",align:null},"IP space to use within this cluster"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOCAL_SSD_COUNT"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of local SSD counts"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MACHINE_TYPE"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of machine to use for nodes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"n1-standard-4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUM_NODES"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of nodes to be created in each of the cluster's zones"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PREEMPTIBLE"),(0,l.kt)("td",{parentName:"tr",align:null},"Create nodes using preemptible VM instances in the new cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REGION"),(0,l.kt)("td",{parentName:"tr",align:null},"Compute region for the cluster"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"us-east1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USE_LOCAL_SSD"),(0,l.kt)("td",{parentName:"tr",align:null},"Flag to create a cluster with local SSDs"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ZONE"),(0,l.kt)("td",{parentName:"tr",align:null},"Compute zone for the cluster"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"us-east1-b"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ZONE_EXTENSION"),(0,l.kt)("td",{parentName:"tr",align:null},"The extension (",(0,l.kt)("inlineCode",{parentName:"td"},"a"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"b"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"c"),") of the zone name of the cluster"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EXTRA_CREATE_ARGS"),(0,l.kt)("td",{parentName:"tr",align:null},"Extra arguments passed to create command"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Run the script, by passing in your desired parameters. It can work with the default parameters except for ",(0,l.kt)("inlineCode",{parentName:"p"},"PROJECT")," which is required:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nPROJECT=<gcloud project id> scripts/pulsar/gke_bootstrap_script.sh up\n\n")),(0,l.kt)("p",null,"The script can also be used to clean up the created GKE resources."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nPROJECT=<gcloud project id> scripts/pulsar/gke_bootstrap_script.sh down\n\n")),(0,l.kt)("h4",{id:"create-cluster-with-local-ssds"},"Create cluster with local SSDs"),(0,l.kt)("p",null,"To install a Pulsar Helm chart using local persistent volumes, you need to create a GKE cluster with local SSDs. You can do so Specifying the ",(0,l.kt)("inlineCode",{parentName:"p"},"USE_LOCAL_SSD")," to be ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," in the following command to create a Pulsar cluster with local SSDs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nPROJECT=<gcloud project id> USE_LOCAL_SSD=true LOCAL_SSD_COUNT=<local-ssd-count> scripts/pulsar/gke_bootstrap_script.sh up\n\n")))}m.isMDXComponent=!0}}]);