"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[7158],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=s(a),p=n,m=d["".concat(u,".").concat(p)]||d[p]||f[p]||o;return a?r.createElement(m,c(c({ref:t},i),{},{components:a})):r.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function c(e){let{children:t,hidden:a,className:c}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,c),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>C});var r=a(7462),n=a(7294),o=a(6010),c=a(2466),l=a(6550),u=a(1980),s=a(7392),i=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function f(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=f(e),[c,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=m({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),h=(()=>{const e=u??d;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:c,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var h=a(2389);const y="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:l,selectValue:u,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,c.o5)(),f=e=>{const t=e.currentTarget,a=i.indexOf(t),r=s[a].value;r!==l&&(d(t),u(r))},p=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:c}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>i.push(e),onKeyDown:p,onClick:f},c,{className:(0,o.Z)("tabs__item",g,c?.className,{"tabs__item--active":l===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function C(e){const t=(0,h.Z)();return n.createElement(x,(0,r.Z)({key:String(t)},e))}},3130:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),o=a(4866),c=a(5162);const l={sidebar_label:"Contract metadata"},u="Fetch contract metadata of any ERC20, ERC721 or ERC1155 contract address",s={unversionedId:"metadata/guides/contract-metadata",id:"metadata/guides/contract-metadata",title:"Fetch contract metadata of any ERC20, ERC721 or ERC1155 contract address",description:"Sequence Metadata GetContractInfoBatch Method:",source:"@site/docs/05-metadata/04-guides/03-contract-metadata.mdx",sourceDirName:"05-metadata/04-guides",slug:"/metadata/guides/contract-metadata",permalink:"/metadata/guides/contract-metadata",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/05-metadata/04-guides/03-contract-metadata.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Contract metadata"},sidebar:"sidebar",previous:{title:"Token metadata",permalink:"/metadata/guides/token-metadata"},next:{title:"Relayer",permalink:"/relayer"}},i={},d=[],f={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fetch-contract-metadata-of-any-erc20-erc721-or-erc1155-contract-address"},"Fetch contract metadata of any ERC20, ERC721 or ERC1155 contract address"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Sequence Metadata ",(0,n.kt)("inlineCode",{parentName:"em"},"GetContractInfoBatch")," Method:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Request: POST /rpc/Metadata/GetContractInfoBatch"),(0,n.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,n.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"chainID"),' (string) -- the chain id, as a name or number (ie. "1" or "mainnet", "137" or "polygon", etc.)'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"contractAddresses")," (string of strings) -- array of contract addresses")))),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example: ",(0,n.kt)("inlineCode",{parentName:"strong"},"GetContractInfoBatch")," of some contracts on Polygon")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H "Content-Type: application/json" https://metadata.sequence.app/rpc/Metadata/GetContractInfoBatch -d \'{ "chainID": "polygon", "contractAddresses": ["0x631998e91476DA5B870D741192fc5Cbc55F5a52E", "0x17b66009af459dc8ebf37acf8a8b355379be2fe5", "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", "0x2953399124f0cbb46d2cbacd8a89cf0599974963", "0x7227e371540cf7b8e512544ba6871472031f3335", "0x7c0ebabfc394ec6d926e801fe0e69a1f15a7fe4d", "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063", "0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4"] }\'\n'))),(0,n.kt)(c.Z,{value:"js",label:"Javascript / Typescript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceMetadataClient } from '@0xsequence/metadata'\n\nconst metadataClient = new SequenceMetadataClient()\n\nconst contractMetadata = await metadataClient.getContractInfoBatch({\n  chainID: 'polygon',\n  contractAddresses: [\n    '0x631998e91476DA5B870D741192fc5Cbc55F5a52E',\n    '0x17b66009af459dc8ebf37acf8a8b355379be2fe5',\n    '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',\n    '0x2953399124f0cbb46d2cbacd8a89cf0599974963',\n    '0x7227e371540cf7b8e512544ba6871472031f3335',\n    '0x7c0ebabfc394ec6d926e801fe0e69a1f15a7fe4d',\n    '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',\n    '0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4'\n  ]\n})\n\nconsole.log('Contract info for above addresses:', contractMetadata)\n"))),(0,n.kt)(c.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,n.kt)("p",null,"Please ",(0,n.kt)("a",{parentName:"p",href:"/support"},"contact our team")," for assistance with integrations to another target."))),(0,n.kt)("br",null))}p.isMDXComponent=!0}}]);