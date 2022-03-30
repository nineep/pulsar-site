"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[35170],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},26123:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"transactions",title:"Transactions",sidebar_label:"Overview",original_id:"transactions"},c=void 0,l={unversionedId:"transactions",id:"version-2.9.1/transactions",title:"Transactions",description:"Transactional semantics enable event streaming applications to consume, process, and produce messages in one atomic operation. In Pulsar, a producer or consumer can work with messages across multiple topics and partitions and ensure those messages are processed as a single unit.",source:"@site/versioned_docs/version-2.9.1/concepts-transactions.md",sourceDirName:".",slug:"/transactions",permalink:"/ja/docs/transactions",editUrl:"https://github.com/apache/pulsar/edit/master/site2/versioned_docs/version-2.9.1/concepts-transactions.md",tags:[],version:"2.9.1",frontMatter:{id:"transactions",title:"Transactions",sidebar_label:"Overview",original_id:"transactions"}},d={},u=[{value:"Transaction coordinator and transaction log",id:"transaction-coordinator-and-transaction-log",level:2},{value:"Transaction ID",id:"transaction-id",level:2},{value:"Transaction buffer",id:"transaction-buffer",level:2},{value:"Pending acknowledge state",id:"pending-acknowledge-state",level:2}],p={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Transactional semantics enable event streaming applications to consume, process, and produce messages in one atomic operation. In Pulsar, a producer or consumer can work with messages across multiple topics and partitions and ensure those messages are processed as a single unit. "),(0,o.kt)("p",null,"The following concepts help you understand Pulsar transactions."),(0,o.kt)("h2",{id:"transaction-coordinator-and-transaction-log"},"Transaction coordinator and transaction log"),(0,o.kt)("p",null,"The transaction coordinator maintains the topics and subscriptions that interact in a transaction. When a transaction is committed, the transaction coordinator interacts with the topic owner broker to complete the transaction."),(0,o.kt)("p",null,"The transaction coordinator maintains the entire life cycle of transactions, and prevents a transaction from incorrect status."),(0,o.kt)("p",null,"The transaction coordinator handles transaction timeout, and ensures that the transaction is aborted after a transaction timeout."),(0,o.kt)("p",null,"All the transaction metadata is persisted in the transaction log. The transaction log is backed by a Pulsar topic. After the transaction coordinator crashes, it can restore the transaction metadata from the transaction log."),(0,o.kt)("h2",{id:"transaction-id"},"Transaction ID"),(0,o.kt)("p",null,"The transaction ID (TxnID) identifies a unique transaction in Pulsar. The transaction ID is 128-bit. The highest 16 bits are reserved for the ID of the transaction coordinator, and the remaining bits are used for monotonically increasing numbers in each transaction coordinator. It is easy to locate the transaction crash with the TxnID."),(0,o.kt)("h2",{id:"transaction-buffer"},"Transaction buffer"),(0,o.kt)("p",null,"Messages produced within a transaction are stored in the transaction buffer. The messages in transaction buffer are not materialized (visible) to consumers until the transactions are committed. The messages in the transaction buffer are discarded when the transactions are aborted. "),(0,o.kt)("h2",{id:"pending-acknowledge-state"},"Pending acknowledge state"),(0,o.kt)("p",null,"Message acknowledges within a transaction are maintained by the pending acknowledge state before the transaction completes. If a message is in the pending acknowledge state, the message cannot be acknowledged by other transactions until the message is removed from the pending acknowledge state."),(0,o.kt)("p",null,"The pending acknowledge state is persisted to the pending acknowledge log. The pending acknowledge log is backed by a Pulsar topic. A new broker can restore the state from the pending acknowledge log to ensure the acknowledgement is not lost."))}f.isMDXComponent=!0}}]);