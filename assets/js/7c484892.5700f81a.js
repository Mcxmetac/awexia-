"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6728],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>g});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),c=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},o=function(e){var a=c(e.components);return n.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,s=e.originalType,d=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=i,b=p["".concat(d,".").concat(g)]||p[g]||u[g]||s;return t?n.createElement(b,r(r({ref:a},o),{},{components:t})):n.createElement(b,r({ref:a},o))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=p;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<s;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7294),i=t(6010);const s="tabItem_Ymn6";function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(s,r),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>g});var n=t(7462),i=t(7294),s=t(6010),r=t(2389),l=t(7392),d=t(7094),c=t(2466);const o="tabList__CuJ",u="tabItem_LNqP";function p(e){var a,t;const{lazy:r,block:p,defaultValue:g,values:b,groupId:f,className:m}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=b?b:h.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),y=(0,l.l)(k,((e,a)=>e.value===a.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===g?g:null!=(a=null!=g?g:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?a:h[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:I}=(0,d.U)(),[N,C]=(0,i.useState)(v),A=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=f){const e=w[f];null!=e&&e!==N&&k.some((a=>a.value===e))&&C(e)}const S=e=>{const a=e.currentTarget,t=A.indexOf(a),n=k[t].value;n!==N&&(T(a),C(n),null!=f&&I(f,String(n)))},P=e=>{var a;let t=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{var n;const a=A.indexOf(e.currentTarget)+1;t=null!=(n=A[a])?n:A[0];break}case"ArrowLeft":{var i;const a=A.indexOf(e.currentTarget)-1;t=null!=(i=A[a])?i:A[A.length-1];break}}null==(a=t)||a.focus()};return i.createElement("div",{className:(0,s.Z)("tabs-container",o)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},m)},k.map((e=>{let{value:a,label:t,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>A.push(e),onKeyDown:P,onClick:S},r,{className:(0,s.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":N===a})}),null!=t?t:a)}))),r?(0,i.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function g(e){const a=(0,r.Z)();return i.createElement(p,(0,n.Z)({key:String(a)},e))}},2158:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=t(7462),i=(t(7294),t(3905)),s=t(5488),r=t(5162);const l={},d="Signing & Verifying Messages",c={unversionedId:"wallet/guides/sign-message",id:"wallet/guides/sign-message",title:"Signing & Verifying Messages",description:"Signing Messages",source:"@site/docs/03-wallet/04-guides/05-sign-message.mdx",sourceDirName:"03-wallet/04-guides",slug:"/wallet/guides/sign-message",permalink:"/wallet/guides/sign-message",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/04-guides/05-sign-message.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"sidebar",previous:{title:"Authenticate Users with Message Signature",permalink:"/wallet/guides/auth-address"},next:{title:"Sending Transactions",permalink:"/wallet/guides/send-transaction"}},o={},u=[{value:"Signing Messages",id:"signing-messages",level:2},{value:"Verifying Message Signatures",id:"verifying-message-signatures",level:2},{value:"Verifying Message Signatures (via Sequence API)",id:"verifying-message-signatures-via-sequence-api",level:2},{value:"Verifying message signature from any kind of wallet (ie. Metamask or Sequence)",id:"verifying-message-signature-from-any-kind-of-wallet-ie-metamask-or-sequence",level:3},{value:"Verifying ETHAuth proof upon connecting a Sequence Wallet",id:"verifying-ethauth-proof-upon-connecting-a-sequence-wallet",level:3},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Notes on Signature Validation with EIP1271",id:"notes-on-signature-validation-with-eip1271",level:3}],p={toc:u};function g(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"signing--verifying-messages"},"Signing & Verifying Messages"),(0,i.kt)("h2",{id:"signing-messages"},"Signing Messages"),(0,i.kt)("p",null,"Sequence wallets are able to sign arbitrary messages. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To request a user's signature of a simple message:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const signer = wallet.getSigner()\nconst message = 'Hello World!'\n\nconst signature = await signer.signMessage(message)\nconsole.log(signature)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To request a user's signature of a typed-data (",(0,i.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP712"),") message:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const typedData: sequence.utils.TypedData = {\n  domain: {\n    name: 'Ether Mail',\n    version: '1',\n    chainId: await wallet.getChainId(),\n    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'\n  },\n  types: {\n    Person: [\n      { name: 'name', type: 'string' },\n      { name: 'wallet', type: 'address' }\n    ]\n  },\n  message: {\n    name: 'Bob',\n    wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB'\n  }\n}\n\nconst signer = wallet.getSigner()\n\nconst signature = await signer.signTypedData(typedData.domain, typedData.types, typedData.message)\nconsole.log(signature)\n")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"verifying-message-signatures"},"Verifying Message Signatures"),(0,i.kt)("p",null,"Once you have a signature, you'll often want to verify the validity of the data\neither from your app or from your server. The Sequence SDKs make this easy to do\nfrom either your frontend or backend."),(0,i.kt)("p",null,"Given a message and signature, you can check if a particular wallet signed that message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Here we fetch the different parameters, but in practice you may have these values\n// encoded and passed separately.\nconst wallet = sequence.getWallet()\nconst provider = wallet.getProvider()\nconst walletAddress = await wallet.getAddress()\nconst chainId = await wallet.getChainId()\n\n// The sequence utils `isValidMessageSignature` method can validate signatures\n// from any kind of wallet (ie. EOA or Smart Wallet) which includes Metamask, Coinbase,\n// and Sequence.\nconst isValid = await sequence.utils.isValidMessageSignature(\n  walletAddress,\n  message,\n  signature,\n  provider,\n  chainId // optional, as it will use the chain id from the provider\n)\n\nconsole.log(isValid)\n")),(0,i.kt)("admonition",{title:"Sequence is a Smart Contract based account",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"As a Smart Contract-based account, Sequence signatures must be validated with the standard\nEIP1271 method, see ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1271"},"https://eips.ethereum.org/EIPS/eip-1271"),"."),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sequence.utils.isValidMessageSignature"),"\nutility function is an easy way to validate any kind of message signature from any wallet.")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"verifying-message-signatures-via-sequence-api"},"Verifying Message Signatures (via Sequence API)"),(0,i.kt)("p",null,"The Sequence API also offers the convenience to verify any wallet message signature\nby making a simple remote API call."),(0,i.kt)("p",null,"The Sequence API (",(0,i.kt)("a",{parentName:"p",href:"https://api.sequence.app"},"https://api.sequence.app"),") supports the following RPC methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/rpc/API/IsValidMessageSignature")," -- verifying a simple text message signature"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/rpc/API/IsValidTypedDataSignature")," -- verifying a EIP712 typed data object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/rpc/API/IsValidSignature")," -- verifying an arbitrary message digest"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/rpc/API/IsValidETHAuthProof")," -- verifying an ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/0xsequence/ethauth.js"},"ETHAuth")," proof")),(0,i.kt)("p",null,"The most common methods are ",(0,i.kt)("inlineCode",{parentName:"p"},"IsValidMessageSignature")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"IsValidETHAuthProof"),". "),(0,i.kt)("h3",{id:"verifying-message-signature-from-any-kind-of-wallet-ie-metamask-or-sequence"},"Verifying message signature from any kind of wallet (ie. Metamask or Sequence)"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Sequence API ",(0,i.kt)("inlineCode",{parentName:"em"},"IsValidMessageSignature")," Method:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request: POST ",(0,i.kt)("a",{parentName:"li",href:"https://api.sequence.app/rpc/API/IsValidMessageSignature"},"https://api.sequence.app/rpc/API/IsValidMessageSignature")),(0,i.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,i.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chainId"),' (string) -- the chain id of the signature, ie. "1" or "mainnet", or "137" or "polygon", etc'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"walletAddress")," (string) -- the wallet address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message")," (string) -- the message in utf8 text encoding"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signature")," (string) -- the signature in hex encoding")))),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"IsValidMessageSignature")," example usage:")),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H"Content-Type: application/json" https://api.sequence.app/rpc/API/IsValidMessageSignature -d \'{ "chainId": "polygon", "walletAddress": "0x2fa0b551fdFa31a4471c1C52206fdb448ad997d1", "message": "Hi, please sign this message", "signature": "0x000501032a44625bec3b842df681db00a92a74dda5e42bcf0203596af90cecdbf9a768886e771178fd5561dd27ab005d0001000183d971056b1eca1bcc7289b9a6926677c5b07db4197925346367f61f2d09c732760719a91722acee0b24826f412cb69bd2125e48f231705a5be33d1f5523f9291c020101c50adeadb7fe15bee45dcb820610cdedcd314eb0030002f19915df00d669708608502d3011a09948b32674d6e443202a2ba884a4dcd26c2624ff33a8ee9836cc3ca2fbb8d3aa43382047b73d21646cb66cc2916076c1331c02" }\'\n'))),(0,i.kt)(r.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { sequence } from '0xsequence'\n\nconst chainId = 'polygon'\nconst walletAddress = '0x2fa0b551fdFa31a4471c1C52206fdb448ad997d1'\nconst message = 'Hi, please sign this message'\nconst signature = '0x000501032a44625bec3b842df681db00a92a74dda5e42bcf0203596af90cecdbf9a768886e771178fd5561dd27ab005d0001000183d971056b1eca1bcc7289b9a6926677c5b07db4197925346367f61f2d09c732760719a91722acee0b24826f412cb69bd2125e48f231705a5be33d1f5523f9291c020101c50adeadb7fe15bee45dcb820610cdedcd314eb0030002f19915df00d669708608502d3011a09948b32674d6e443202a2ba884a4dcd26c2624ff33a8ee9836cc3ca2fbb8d3aa43382047b73d21646cb66cc2916076c1331c02'\n\nconst api = new sequence.api.SequenceAPIClient('https://api.sequence.app')\nconst { isValid } = await api.isValidMessageSignature({\n  chainId, walletAddress, message, signature\n})\nconsole.log(isValid) // true\n"))),(0,i.kt)(r.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "log"\n    "net/http"\n\n    "github.com/0xsequence/go-sequence/api"\n)\n\nfunc ValidateMessageSignature() {\n    seqAPI := api.NewAPIClient("https://api.sequence.app", http.DefaultClient)\n\n    chainID := "polygon"\n    walletAddress := "0x2fa0b551fdFa31a4471c1C52206fdb448ad997d1"\n\n    // NOTE: you can also pass the message in EIP191 format as well. If you do not pass\n    // the EIP191 prefix, it will automatically be added at the time of validation.\n    // message := fmt.Sprintf("\\x19Ethereum Signed Message:\\n%d%s", len(message), message)\n    message := "Hi, please sign this message"\n\n    signature := "0x000501032a44625bec3b842df681db00a92a74dda5e42bcf0203596af90cecdbf9a768886e771178fd5561dd27ab005d0001000183d971056b1eca1bcc7289b9a6926677c5b07db4197925346367f61f2d09c732760719a91722acee0b24826f412cb69bd2125e48f231705a5be33d1f5523f9291c020101c50adeadb7fe15bee45dcb820610cdedcd314eb0030002f19915df00d669708608502d3011a09948b32674d6e443202a2ba884a4dcd26c2624ff33a8ee9836cc3ca2fbb8d3aa43382047b73d21646cb66cc2916076c1331c02"\n\n    isValid, err := seqAPI.IsValidMessageSignature(context.Background(), chainID, walletAddress, message, signature)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println("isValid?", isValid)\n}\n'))),(0,i.kt)(r.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,i.kt)("p",null,"Please ",(0,i.kt)("a",{parentName:"p",href:"/support"},"contact our team")," for assistance with integrations to another target."))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"verifying-ethauth-proof-upon-connecting-a-sequence-wallet"},"Verifying ETHAuth proof upon connecting a Sequence Wallet"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Sequence API ",(0,i.kt)("inlineCode",{parentName:"em"},"IsValidETHAuthProof")," Method:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request: POST ",(0,i.kt)("a",{parentName:"li",href:"https://api.sequence.app/rpc/API/IsValidETHAuthProof"},"https://api.sequence.app/rpc/API/IsValidETHAuthProof")),(0,i.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,i.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chainId"),' (string) -- the chain id of the signature, ie. "1" or "mainnet", or "137" or "polygon", etc'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"walletAddress")," (string) -- the wallet address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ethAuthProof")," (string) -- the ETHAuth encoded signature")))),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"IsValidETHAuthProof")," example usage:")),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H"Content-Type: application/json" https://api.sequence.app/rpc/API/IsValidETHAuthProof -d \'{"chainId":"polygon", "walletAddress":"0x2fa0b551fdFa31a4471c1C52206fdb448ad997d1","ethAuthProof": "eth.0x2fa0b551fdfa31a4471c1c52206fdb448ad997d1.eyJhcHAiOiJEZW1vIERhcHAiLCJpYXQiOjAsImV4cCI6MTY2MDIzMTAyOCwidiI6IjEiLCJvZ24iOiJodHRwOi8vbG9jYWxob3N0OjQwMDAifQ.0x000501032a44625bec3b842df681db00a92a74dda5e42bcf0203596af90cecdbf9a768886e771178fd5561dd27ab005d00010001f7dad5ade840bb961cbab889d731bbc080bb4c36fc090435e82fe78e3c152b671505ad544adb562cc25a5933cd06c9108e239a52a82ba797c3d3522645c69cd81b020101c50adeadb7fe15bee45dcb820610cdedcd314eb003000274164fb33c93b4384582c54c30d9a1e2ef219063d03084005edc1da853af2f1f2e67275dbb6ef945d04600b6dd83cfd997cc9ae4173ea61b0c5cc0808fb196681b02"}\' \n'))),(0,i.kt)(r.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { sequence } from '0xsequence'\n\nconst chainId = 'polygon'\nconst walletAddress = '0x2fa0b551fdFa31a4471c1C52206fdb448ad997d1'\nconst ethAuthProof = 'eth.0x2fa0b551fdfa31a4471c1c52206fdb448ad997d1.eyJhcHAiOiJEZW1vIERhcHAiLCJpYXQiOjAsImV4cCI6MTY2MDIzMTAyOCwidiI6IjEiLCJvZ24iOiJodHRwOi8vbG9jYWxob3N0OjQwMDAifQ.0x000501032a44625bec3b842df681db00a92a74dda5e42bcf0203596af90cecdbf9a768886e771178fd5561dd27ab005d00010001f7dad5ade840bb961cbab889d731bbc080bb4c36fc090435e82fe78e3c152b671505ad544adb562cc25a5933cd06c9108e239a52a82ba797c3d3522645c69cd81b020101c50adeadb7fe15bee45dcb820610cdedcd314eb003000274164fb33c93b4384582c54c30d9a1e2ef219063d03084005edc1da853af2f1f2e67275dbb6ef945d04600b6dd83cfd997cc9ae4173ea61b0c5cc0808fb196681b02'\n\nconst api = new sequence.api.SequenceAPIClient('https://api.sequence.app')\nconst { isValid } = await api.isValidETHAuthProof({\n  chainId, walletAddress, ethAuthProof\n})\nconsole.log(isValid) // true\n"))),(0,i.kt)(r.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "log"\n    "net/http"\n\n    "github.com/0xsequence/go-sequence/api"\n)\n\nfunc ValidateETHAuth() {\n    seqAPI := api.NewAPIClient("https://api.sequence.app", http.DefaultClient)\n\n    chainID := "polygon"\n    walletAddress := "0x2fa0b551fdFa31a4471c1C52206fdb448ad997d1"\n    ethAuthProofString := "eth.0x2fa0b551fdfa31a4471c1c52206fdb448ad997d1.eyJhcHAiOiJEZW1vIERhcHAiLCJpYXQiOjAsImV4cCI6MTY2MDIzMTAyOCwidiI6IjEiLCJvZ24iOiJodHRwOi8vbG9jYWxob3N0OjQwMDAifQ.0x000501032a44625bec3b842df681db00a92a74dda5e42bcf0203596af90cecdbf9a768886e771178fd5561dd27ab005d00010001f7dad5ade840bb961cbab889d731bbc080bb4c36fc090435e82fe78e3c152b671505ad544adb562cc25a5933cd06c9108e239a52a82ba797c3d3522645c69cd81b020101c50adeadb7fe15bee45dcb820610cdedcd314eb003000274164fb33c93b4384582c54c30d9a1e2ef219063d03084005edc1da853af2f1f2e67275dbb6ef945d04600b6dd83cfd997cc9ae4173ea61b0c5cc0808fb196681b02"\n\n    isValid, err := seqAPI.IsValidETHAuthProof(context.Background(), chainID, walletAddress, ethAuthProofString)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println("isValid?", isValid)\n}\n'))),(0,i.kt)(r.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"")))),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("h3",{id:"notes-on-signature-validation-with-eip1271"},"Notes on Signature Validation with EIP1271"),(0,i.kt)("p",null,"Smart Wallets like Sequence rely on the ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1271"},"EIP1271")," standard for signature validation."),(0,i.kt)("p",null,"The EIP1271 is a single function on a contract defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function isValidSignature(\n  bytes32 _hash, \n  bytes memory _signature\n) public view returns (bytes4 magicValue)\n")),(0,i.kt)("p",null,"The first ",(0,i.kt)("inlineCode",{parentName:"p"},"_hash")," argument accepts the hash of the message digest, and the second argument ",(0,i.kt)("inlineCode",{parentName:"p"},"_signature"),"\nis the signed payload returned by the wallet upon signing. "),(0,i.kt)("p",null,"For Javascript/Typescript signature verification, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"0xsequence")," utility functions like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { 0xsequence } from '0xsequence'\n\nconst isValid = await sequence.utils.isValidSignature(\n  walletAddress,\n  digest,\n  signature,\n  provider,\n  chainId\n)\n\nconsole.log(isValid) // returns true/false\n")),(0,i.kt)("p",null,"Additionally you can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"sequence.utils.isValidMessageSignature")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"sequence.utils.isValidTypedDataSignature"),"\nwhich are just syntactic sugar for ",(0,i.kt)("inlineCode",{parentName:"p"},"sequence.utils.isValidSignature"),"."),(0,i.kt)("p",null,"As well, for convenience the signature validation fucntions above support verifying EOA or Smart Wallet signatures.\nThis allows you to use a single code path in your Dapp to verify any kind of signature and support multiple wallets at\nthe same time, like Metamask, Coinbase, Sequence, WalletConnect, Argent, Rainbow, etc. -- all Ethereum compatible wallets, EOA\nor Smart Wallets, will ",(0,i.kt)("em",{parentName:"p"},"just work"),"."))}g.isMDXComponent=!0}}]);