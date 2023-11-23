"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[8565],{4815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(1527),a=n(7279),o=n(370),s=n(1804);const c={sidebar_label:"Token contract transaction history"},i="Contract token history",l={id:"indexer/transation-history-token-contract",title:"Contract token history",description:"Fetch / listen to the transaction history for any ERC20, ERC721, ERC1155 contract.",source:"@site/docs/04-indexer/06-transation-history-token-contract.mdx",sourceDirName:"04-indexer",slug:"/indexer/transation-history-token-contract",permalink:"/indexer/transation-history-token-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/04-indexer/06-transation-history-token-contract.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Token contract transaction history"},sidebar:"sidebar",previous:{title:"All unique tokens in a contract",permalink:"/indexer/unique-tokens"},next:{title:"Native network balance",permalink:"/indexer/native-network-balance"}},u={},d=[{value:"Fetch / listen to the transaction history for any ERC20, ERC721, ERC1155 contract.",id:"fetch--listen-to-the-transaction-history-for-any-erc20-erc721-erc1155-contract",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"contract-token-history",children:"Contract token history"}),"\n",(0,r.jsx)(t.h3,{id:"fetch--listen-to-the-transaction-history-for-any-erc20-erc721-erc1155-contract",children:"Fetch / listen to the transaction history for any ERC20, ERC721, ERC1155 contract."}),"\n",(0,r.jsx)(t.p,{children:"This query is helpful to track transaction history of a particular token contract.\nIn this example, we use the Skyweaver token contract address 0x631998e91476DA5B870D741192fc5Cbc55F5a52E\non the Polygon network. You may query any contract address on any of the supported networks (but make\nsure to query the indexer of the corresponding network)."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["Sequence Indexer ",(0,r.jsx)(t.code,{children:"GetTransactionHistory"})," Method:"]})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Request: POST /rpc/Indexer/GetTransactionHistory"}),"\n",(0,r.jsx)(t.li,{children:"Content-Type: application/json"}),"\n",(0,r.jsxs)(t.li,{children:["Body (in JSON):","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"filter"})," (object)","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"contractAddress"})," (string) -- a ERC20 / ERC721 / ERC1155 contract address"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["Example: ",(0,r.jsx)(t.code,{children:"GetTransactionHistory"})," of Skyweaver contract on Polygon"]})}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(s.Z,{value:"curl",label:"curl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:"class=wrap",children:'curl -X POST -H "Content-Type: application/json" https://polygon-indexer.sequence.app/rpc/Indexer/GetTransactionHistory -d \'{ "filter": { "accountAddress": "0x631998e91476DA5B870D741192fc5Cbc55F5a52E" }, "includeMetadata": true }\'\n'})})}),(0,r.jsx)(s.Z,{value:"js",label:"Javascript / Typescript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceIndexer } from '@0xsequence/indexer'\n\nconst indexer = new SequenceIndexer('https://polygon-indexer.sequence.app')\n\n// here we query the Skyweaver contract address, but you can use any\nconst contractAddress = '0x631998e91476DA5B870D741192fc5Cbc55F5a52E'\n\n// query Sequence Indexer for all token details / supplies\n// try any contract address you'd like :)\nconst filter = {\n\tcontractAddress: contractAddress\n}\n\n// query Sequence Indexer for all token transaction history on Polygon\nconst transactionHistory = await indexer.getTransactionHistory({\n\tfilter: filter\n})\n\t\nconsole.log('transaction history of contract:', transactionHistory)\n"})})}),(0,r.jsx)(s.Z,{value:"golang",label:"Go",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'import (\n\t"context"\n\t"fmt"\n\t"log"\n\t"net/http"\n\n\t"github.com/0xsequence/go-sequence/indexer"\n)\n\nfunc GetTransactionHistory(accountAddress string) {\n\tseqIndexer := indexer.NewIndexerClient("https://polygon-indexer.sequence.app", http.DefaultClient)\n\n\tfilter := &indexer.TransactionHistoryFilter{\n\t\tContractAddress: &contractAddress,\n\t}\n\tincludeMetadata := true\n\n\t_, history, err := seqIndexer.GetTransactionHistory(context.Background(), filter, nil, &includeMetadata)\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\tfmt.Println("transaction history:", history)\n}\n'})})}),(0,r.jsx)(s.Z,{value:"other",label:"Other",children:(0,r.jsxs)(t.p,{children:["Please ",(0,r.jsx)(t.a,{href:"/support",children:"contact our team"})," for assistance with integrations to another target."]})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1804:(e,t,n)=>{n.d(t,{Z:()=>s});n(959);var r=n(5924);const a={tabItem:"tabItem_l_5p"};var o=n(1527);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},370:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(959),a=n(5924),o=n(74),s=n(8903),c=n(331),i=n(4053),l=n(3608),u=n(7979);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,d]=f({queryString:n,groupId:a}),[x,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=l??x;return p({value:e,tabValues:o})?e:null})();(0,c.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),y(e)}),[d,y,o]),tabValues:o}}var y=n(9506);const b={tabList:"tabList_Pq82",tabItem:"tabItem_kpXA"};var m=n(1527);function g(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),a=c[n].value;a!==r&&(l(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=x(e);return(0,m.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,m.jsx)(g,{...e,...t}),(0,m.jsx)(v,{...e,...t})]})}function k(e){const t=(0,y.Z)();return(0,m.jsx)(j,{...e,children:d(e.children)},String(t))}},7279:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(959);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);