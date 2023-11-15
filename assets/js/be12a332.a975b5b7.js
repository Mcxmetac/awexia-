"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[4451],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={slug:"/migrate-sequence-js-1-1-0"},o="Migrate to sequence.js v1.1.0",l={unversionedId:"support/migrate-1-1-0",id:"support/migrate-1-1-0",title:"Migrate to sequence.js v1.1.0",description:"This document explains how to migrate to sequence.js v1.1.0 from earlier versions.",source:"@site/docs/30-support/02-migrate-1-1-0.mdx",sourceDirName:"30-support",slug:"/migrate-sequence-js-1-1-0",permalink:"/migrate-sequence-js-1-1-0",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/30-support/02-migrate-1-1-0.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/migrate-sequence-js-1-1-0"},sidebar:"sidebar",previous:{title:"Community & Support",permalink:"/support"},next:{title:"Sequence - Wallet as a service",permalink:"/waas/intro/"}},s={},p=[{value:"Changes",id:"changes",level:2},{value:"Init library",id:"init-library",level:3},{value:"Wallet class instance",id:"wallet-class-instance",level:3},{value:"Custom network provider and signer",id:"custom-network-provider-and-signer",level:4},{value:"Connect wallet",id:"connect-wallet",level:3},{value:"Sign EIP-6492 messages",id:"sign-eip-6492-messages",level:3},{value:"Operate on a specific network",id:"operate-on-a-specific-network",level:3},{value:"Send batch transactions",id:"send-batch-transactions",level:3},{value:"Removal of internal state methods",id:"removal-of-internal-state-methods",level:3},{value:"Rainbowkit Connector",id:"rainbowkit-connector",level:3},{value:"Wagmi Connector",id:"wagmi-connector",level:4},{value:"Rainbowkit &amp; Wagmi Connector - EIP-6492 Signatures",id:"rainbowkit--wagmi-connector---eip-6492-signatures",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrate-to-sequencejs-v110"},"Migrate to sequence.js v1.1.0"),(0,r.kt)("p",null,"This document explains how to migrate to sequence.js v1.1.0 from earlier versions."),(0,r.kt)("h2",{id:"changes"},"Changes"),(0,r.kt)("h3",{id:"init-library"},"Init library"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"initWallet")," function's ",(0,r.kt)("inlineCode",{parentName:"p"},"network")," parameter has been replaced. Now, it accepts a configuration object that ",(0,r.kt)("em",{parentName:"p"},"may")," include a ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultNetwork")," parameter."),(0,r.kt)("p",null,"Before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const wallet = sequence.initWallet('mainnet')\n")),(0,r.kt)("p",null,"After:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const wallet = sequence.initWallet({ defaultNetwork: 'mainnet' })\n")),(0,r.kt)("p",null,"The parameter remains optional. If not provided, the default network will be ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet"),"."),(0,r.kt)("h3",{id:"wallet-class-instance"},"Wallet class instance"),(0,r.kt)("p",null,"Previously, both ",(0,r.kt)("inlineCode",{parentName:"p"},"initWallet")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getWallet")," returned a ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet")," instance, which could be used to access both a provider and a signer. Now, they return a ",(0,r.kt)("inlineCode",{parentName:"p"},"SequenceProvider"),", which already functions as the provider while offering sequence-specific methods."),(0,r.kt)("p",null,"Methods such as ",(0,r.kt)("inlineCode",{parentName:"p"},"getSigner")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getProvider")," are still available in ",(0,r.kt)("inlineCode",{parentName:"p"},"SequenceProvider"),". Note that calling ",(0,r.kt)("inlineCode",{parentName:"p"},"getProvider()")," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,r.kt)("p",null,"Before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const wallet = sequence.initWallet('mainnet')\nconst provider = wallet.getProvider()\nconst signer = wallet.getSigner()\n")),(0,r.kt)("p",null,"After:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const provider = sequence.initWallet({ defaultNetwork: 'mainnet' })\nconst signer = provider.getSigner()\n")),(0,r.kt)("h4",{id:"custom-network-provider-and-signer"},"Custom network provider and signer"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getProvider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getSigner")," methods now accept an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"network")," parameter. This is handy when you wish to use a custom provider or signer for a specific network. In such cases, a tailored network provider/signer is created, and the method does ",(0,r.kt)("strong",{parentName:"p"},"not")," return ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,r.kt)("h3",{id:"connect-wallet"},"Connect wallet"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," function now mandates an ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," parameter, representing the app name requesting the connection. This name will be displayed to the user."),(0,r.kt)("p",null,"Before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const connectDetails = await wallet.connect()\n")),(0,r.kt)("p",null,"After:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const connectDetails = await wallet.connect({ app: 'Your app name' })\n")),(0,r.kt)("h3",{id:"sign-eip-6492-messages"},"Sign EIP-6492 messages"),(0,r.kt)("p",null,"EIP-6492 allows the wallet to sign messages without first executing a transaction. This feature should be utilized only when the signature will be validated by software supporting EIP-6492, such as the sequence.js library. All ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," methods of the signer use EIP-6492 by default."),(0,r.kt)("p",null,"To opt out of EIP-6492, previously you could append a ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," value at the end of each sign method; now you can pass an ",(0,r.kt)("inlineCode",{parentName:"p"},"eip6492")," named argument."),(0,r.kt)("p",null,"Before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const signature = await signer.signMessage(message, undefined, false)\n")),(0,r.kt)("p",null,"After:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const signature = await signer.signMessage(message, { eip6492: false })\n")),(0,r.kt)("h3",{id:"operate-on-a-specific-network"},"Operate on a specific network"),(0,r.kt)("p",null,"Earlier, most methods of the signer and provider would target the default network. You could alter this by adding a positional ",(0,r.kt)("inlineCode",{parentName:"p"},"network")," argument at the end of each method. This has been swapped with a named ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId")," argument, which can be combined with other named arguments, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"eip6492"),"."),(0,r.kt)("p",null,"Before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const balance = await provider.sendTransaction(transaction, 'rinkeby')\n")),(0,r.kt)("p",null,"After:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const balance = await provider.sendTransaction(transaction, { chainId: 'rinkeby' })\n")),(0,r.kt)("h3",{id:"send-batch-transactions"},"Send batch transactions"),(0,r.kt)("p",null,"Previously, separate methods (",(0,r.kt)("inlineCode",{parentName:"p"},"sendTransactionBatch")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sendTransaction"),") were provided for batch transactions. Now, there's just ",(0,r.kt)("inlineCode",{parentName:"p"},"sendTransaction")," that can receive either an array of transactions or a singular transaction."),(0,r.kt)("p",null,"Before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const receipt1 = await provider.sendTransactionBatch([transaction1, transaction2])\n")),(0,r.kt)("p",null,"After:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const receipt1 = await provider.sendTransaction([transaction1, transaction2])\n")),(0,r.kt)("h3",{id:"removal-of-internal-state-methods"},"Removal of internal state methods"),(0,r.kt)("p",null,"Some internal state methods have been either removed or deprecated. This encompasses methods for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Determining if the wallet is deployed"),(0,r.kt)("li",{parentName:"ul"},'Retrieving the wallet\'s "sequence context"'),(0,r.kt)("li",{parentName:"ul"},'Accessing the "inner configuration" of the wallet (i.e., its comprising signers)')),(0,r.kt)("p",null,"Should you require any of these methods, please reach out to ",(0,r.kt)("a",{parentName:"p",href:"./support"},"support"),"."),(0,r.kt)("h3",{id:"rainbowkit-connector"},"Rainbowkit Connector"),(0,r.kt)("p",null,"Compatibility with the Rainbowkit connector has been largely retained. However, the configuration for ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultNetwork")," has been relocated. Previously, it was set under ",(0,r.kt)("inlineCode",{parentName:"p"},"connect.networkId"),". Now, it has been elevated to a top-level property named ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultNetwork"),"."),(0,r.kt)("p",null,"Before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"sequenceWallet({\n  chains,\n  connect: {\n    app: 'Demo app',\n    networkId: 1,\n  },\n})\n")),(0,r.kt)("p",null,"After:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"sequenceWallet({\n  chains,\n  defaultNetwork: 1,\n  connect: {\n    app: 'Demo app',\n  },\n})\n")),(0,r.kt)("h4",{id:"wagmi-connector"},"Wagmi Connector"),(0,r.kt)("p",null,"The Wagmi connector has undergone the same modifications as the Rainbowkit connector."),(0,r.kt)("p",null,"Before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new SequenceConnector({\n  chains,\n  connect: {\n    app: 'Demo app',\n    networkId: 1,\n  },\n})\n")),(0,r.kt)("p",null,"After:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new SequenceConnector({\n  chains,\n  defaultNetwork: 1,\n  connect: {\n    app: 'Demo app',\n  },\n})\n")),(0,r.kt)("h3",{id:"rainbowkit--wagmi-connector---eip-6492-signatures"},"Rainbowkit & Wagmi Connector - EIP-6492 Signatures"),(0,r.kt)("p",null,"In earlier versions, EIP-6492 signatures were activated globally either through the ",(0,r.kt)("inlineCode",{parentName:"p"},"useEIP6492")," configuration property or the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSequenceEIP6492")," method. Both methods have now been deprecated. Attempting to initialize with ",(0,r.kt)("inlineCode",{parentName:"p"},"useEIP6492")," will result in a runtime error."),(0,r.kt)("p",null,"For utilizing EIP-6492 in the updated version, you'll need to explicitly invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence_sign")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence_signTypedData_v4")," on the connector."),(0,r.kt)("p",null,"Before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new SequenceConnector({\n  chains,\n  connect: {\n    app: 'Demo app',\n    networkId: 1,\n    useEIP6492: true,\n  },\n})\n")),(0,r.kt)("p",null,"After:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// NOTE: The connector is now initialized without the useEIP6492 property.\n// ...\nconst sig = await walletClient.request({\n  method: 'sequence_sign',\n  params: [message, account]\n}) as string;\n")),(0,r.kt)("admonition",{title:"Ensure Correct Peer Dependency",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"@0xsequence/wagmi-connector")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@0xsequence/rainbowkit-plugin")," versions ",(0,r.kt)("inlineCode",{parentName:"p"},"2.1.0")," require ",(0,r.kt)("inlineCode",{parentName:"p"},"0xsequence")," as a peer dependency. Ensure that you are using version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.1.0")," or higher of ",(0,r.kt)("inlineCode",{parentName:"p"},"0xsequence"),". Utilizing older versions may lead to instability in your application."),(0,r.kt)("p",{parentName:"admonition"},"This is essential to maintain compatibility and ensure the stable operation of your connectors and plugins.")))}u.isMDXComponent=!0}}]);