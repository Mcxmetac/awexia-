"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[401],{5325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(1527),a=t(7279);t(370),t(1804);const s={sidebar_label:"Installation"},o="Indexer Installation",i={id:"indexer/installation",title:"Indexer Installation",description:"Sequence Indexer is a simple API to query any blockchain token and NFT data. Below are instructions",source:"@site/docs/04-indexer/02-installation.mdx",sourceDirName:"04-indexer",slug:"/indexer/installation",permalink:"/indexer/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/04-indexer/02-installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Installation"},sidebar:"sidebar",previous:{title:"Indexer",permalink:"/indexer"},next:{title:"Tokens API",permalink:"/indexer/fetch-tokens"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Web / node.js Installation",id:"web--nodejs-installation",level:3},{value:"Go Installation",id:"go-installation",level:3},{value:"Unity or Unreal Installation",id:"unity-or-unreal-installation",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"indexer-installation",children:"Indexer Installation"}),"\n",(0,r.jsxs)(n.p,{children:["Sequence Indexer is a simple API to query any blockchain token and NFT data. Below are instructions\non how to integrate the Sequence Indexer API into your Webapps, Games, and backends. In case you missed\nit, please also see the ",(0,r.jsx)(n.a,{href:"/indexer",children:"Indexer Overview"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"The Sequence Indexer is built as a HTTP API with RPC endpoints that you may call directly\nfrom your Webapp, Game or server backend. Below you'll find information on the RPC endpoint\nschema with sample curl commands, along with examples in both Javascript/Typescript and Go."}),"\n",(0,r.jsxs)(n.p,{children:["We provide SDKs for ",(0,r.jsx)(n.a,{href:"https://github.com/0xsequence/sequence.js",children:"Web / node.js"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/0xsequence/go-sequence",children:"Go"}),".\nOr if you'd like to integrate the Indexer with another language target, simply follow the API reference below\nto implement the HTTP requests. Additionally, read the Typescript client source code as ",(0,r.jsx)(n.a,{href:"https://github.com/0xsequence/sequence.js/blob/master/packages/indexer/src/indexer.gen.ts",children:"reference\nimplementation of the Indexer API client"})," as well."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Sequence Indexer endpoints",type:"info",children:[(0,r.jsxs)(n.p,{children:["Sequence Indexer offers the same API across a variety of EVM networks. Make sure to check the Indexer endpoints\nand use the corresponding host for your dapp/game. For example, on Ethereum mainnet the Sequence Indexer endpoint is\n",(0,r.jsx)(n.a,{href:"https://mainnet-indexer.sequence.app",children:"https://mainnet-indexer.sequence.app"})," and Polygon is ",(0,r.jsx)(n.a,{href:"https://polygon-indexer.sequence.app",children:"https://polygon-indexer.sequence.app"}),"."]}),(0,r.jsxs)(n.p,{children:["\ud83c\udf04 ",(0,r.jsx)(n.a,{href:"/indexer#supported-networks--endpoints",children:"View the full list of supported networks and Indexer endpoints here"})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h3,{id:"web--nodejs-installation",children:"Web / node.js Installation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm install 0xsequence ethers\n"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"pnpm install 0xsequence ethers\n"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn add 0xsequence ethers\n"})}),"\n",(0,r.jsx)(n.p,{children:"then in your app,"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { SequenceIndexer } from '@0xsequence/indexer'\n\n// see https://docs.sequence.xyz/indexer#supported-networks--endpoints for list of\n// indexer hosts for the chain you'd like to query\nconst indexer = new SequenceIndexer('https://mainnet-indexer.sequence.app')\n\n// see examples below for the kinds of queries you can make\nconst tokenBalances = await indexer.getTokenBalances(...)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE:"})," if you're using ",(0,r.jsx)(n.code,{children:"@0xsequence/indexer"})," from node.js, we recommend using node v18.x or newer."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h3,{id:"go-installation",children:"Go Installation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go get -u github.com/0xsequence/go-sequence@latest\n"})}),"\n",(0,r.jsx)(n.p,{children:"then in your app,"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import (\n\t"github.com/0xsequence/go-sequence/indexer"\n)\n\n// see https://docs.sequence.xyz/indexer#supported-networks--endpoints for list of\n// indexer hosts for the chain you\'d like to query\nseqIndexer := indexer.NewIndexerClient("https://mainnet-indexer.sequence.app", http.DefaultClient)\n\n// see examples below for the kinds of queries you can make\ntokenBalances, err := seqIndexer.GetTokenBalances(...)\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h3,{id:"unity-or-unreal-installation",children:"Unity or Unreal Installation"}),"\n",(0,r.jsxs)(n.p,{children:["The Sequence Indexer is integrated directly inside of the respective ",(0,r.jsx)(n.a,{href:"/games-sdk",children:"Sequence Web3 Unity"})," and ",(0,r.jsx)(n.a,{href:"/games-sdk",children:"Sequence Web3 Unreal"})," SDKs."]}),"\n",(0,r.jsx)("br",{})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1804:(e,n,t)=>{t.d(n,{Z:()=>o});t(959);var r=t(5924);const a={tabItem:"tabItem_l_5p"};var s=t(1527);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},370:(e,n,t)=>{t.d(n,{Z:()=>I});var r=t(959),a=t(5924),s=t(74),o=t(8903),i=t(331),l=t(4053),c=t(3608),u=t(7979);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=x({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(9506);const b={tabList:"tabList_Pq82",tabItem:"tabItem_kpXA"};var g=t(1527);function j(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...e,...n}),(0,g.jsx)(y,{...e,...n})]})}function I(e){const n=(0,f.Z)();return(0,g.jsx)(v,{...e,children:d(e.children)},String(n))}},7279:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(959);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);