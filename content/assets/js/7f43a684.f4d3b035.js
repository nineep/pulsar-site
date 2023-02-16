"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8255,84719],{62911:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(67294);const r=e=>a.createElement("a",{className:`pill-btn ${e.variant}`,href:e.href,target:e.target},e.children)},427:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(87462),r=s(67294),i=s(62911);const n="DiscussionPlatform_RJwQ",l="Logo_c7Ev",c=e=>{let t;switch(e.type,e.type){case"primary":t="primary";break;case"normal":t="grey"}return r.createElement(i.Z,{variant:t,target:e.isExternal?"_blank":void 0,href:e.href},e.text)},o=e=>r.createElement("div",{className:n},r.createElement("img",{className:l,src:e.logoSrc}),r.createElement("div",null,r.createElement("h3",null,e.name),r.createElement("p",null,e.description),r.createElement("div",null,(e.actions||[]).map((e=>r.createElement(c,(0,a.Z)({key:e.id},e)))))))},42545:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var a=s(67294),r=s(44996),i=s(427);const n={DiscussionPlatforms:"DiscussionPlatforms_S5GB"},l=()=>{const e=[{name:"User Mailing List",description:a.createElement("div",null,"General mailing list for user-related discussions.",a.createElement("br",null),a.createElement("a",{href:"https://lists.apache.org/list.html?users@pulsar.apache.org",target:"_blank"},"Access the archives")),actions:[{id:"subscribe",text:"Subscribe",href:"users-subscribe@pulsar.apache.org",type:"primary"},{id:"unsubscribe",text:"Unsubscribe",href:"users-unsubscribe@pulsar.apache.org",type:"normal"}],logoSrc:(0,r.Z)("/img/mailing-list.svg")},{name:"Developer Mailing List",description:a.createElement("div",null,"Questions and discussions related to Pulsar development.",a.createElement("br",null),a.createElement("a",{href:"https://lists.apache.org/list.html?users@pulsar.apache.org",target:"_blank"},"Access the archives")),actions:[{id:"subscribe",text:"Subscribe",href:"dev-subscribe@pulsar.apache.org",type:"primary"},{id:"unsubscribe",text:"Unsubscribe",href:"dev-unsubscribe@pulsar.apache.org",type:"normal"}],logoSrc:(0,r.Z)("/img/mailing-list.svg")},{name:"Discussions at GitHub",description:a.createElement("div",null,"A good place to ask any question, bring an idea or get support. Especially if you are not friends with mailing lists."),actions:[{id:"new-discussion",text:"New discussion",href:"https://github.com/apache/pulsar/discussions/new",type:"primary",isExternal:!0},{id:"open",text:"Browse",href:"https://github.com/apache/pulsar/discussions",type:"normal",isExternal:!0}],logoSrc:(0,r.Z)("/img/github-mark.svg")},{name:"Stack Overflow",description:a.createElement("span",null,"For technical questions, we ask that you post them to Stack Overflow using the tag"," ",a.createElement("code",{style:{whiteSpace:"nowrap"}},"apache-pulsar"),"."),actions:[{id:"as",text:"Ask question",href:"https://stackoverflow.com/questions/ask?tags=apache-pulsar",type:"primary",isExternal:!0},{id:"browse",text:"Browse",href:"https://stackoverflow.com/questions/tagged/apache-pulsar",type:"normal",isExternal:!0}],logoSrc:(0,r.Z)("/img/stackoverflow-logo.svg")},{name:"Slack",description:a.createElement(a.Fragment,null,"Use it for instant messaging and real-time discussions.",a.createElement("br",null),a.createElement("br",null),"Keep in mind that asking questions in Slack makes it harder to find the answers later, due to Slack history isn't indexable by search engines like Google."),actions:[{id:"open",text:"Open",href:"https://apache-pulsar.slack.com/",type:"primary",isExternal:!0},{id:"sign-up",text:"Sign-up",href:"https://communityinviter.com/apps/apache-pulsar/apache-pulsar",type:"normal",isExternal:!0}],logoSrc:(0,r.Z)("/img/Slack_Mark.svg")},{name:"WeChat",description:a.createElement("span",null,"Welcome to the Apache Pulsar Official Account at WeChat! The account ID is ",a.createElement("code",null,"ApachePulsar"),"."),logoSrc:(0,r.Z)("/img/wechat-logo.svg")},{name:"Community Meetings",description:a.createElement("span",null,"The community meeting occurs biweekly on Tuesdays and Thursdays to discuss new proposals, open pull requests, and host open discussions."),logoSrc:(0,r.Z)("/img/community-meetings.svg"),actions:[{id:"see-details",text:"See details",href:"https://github.com/apache/pulsar/wiki/Community-Meetings",type:"primary",isExternal:!0}]}];return a.createElement("div",{className:n.DiscussionPlatforms},e.map((e=>a.createElement("div",{key:e.name,className:n.DiscussionPlatform},a.createElement(i.default,e)))))}}}]);