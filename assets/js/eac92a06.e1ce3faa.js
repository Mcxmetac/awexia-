"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[9928],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>f});var t=a(7294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=t.createContext({}),l=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=l(a),m=s,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return a?t.createElement(f,o(o({ref:n},d),{},{components:a})):t.createElement(f,o({ref:n},d))}));function f(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=m;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[u]="string"==typeof e?e:s,o[1]=r;for(var l=2;l<i;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},425:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=a(7462),s=(a(7294),a(3905));const i={},o="Wallets and transactions",r={unversionedId:"waas/waas-auth/use-wallets",id:"waas/waas-auth/use-wallets",title:"Wallets and transactions",description:"Once the SDK is initialized and the user has been authenticated, you can access the wallet corresponding to that user's account. The wallet is the entry point to all the operations that can be performed on the user's account.",source:"@site/docs/10-waas/04-waas-auth/04-use-wallets.mdx",sourceDirName:"10-waas/04-waas-auth",slug:"/waas/waas-auth/use-wallets",permalink:"/waas/waas-auth/use-wallets",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/10-waas/04-waas-auth/04-use-wallets.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"sidebar",previous:{title:"Session Management",permalink:"/waas/waas-auth/manage-sessions"},next:{title:"Validation",permalink:"/waas/waas-auth/validation"}},c={},l=[{value:"Wallet address",id:"wallet-address",level:2},{value:"Sign messages",id:"sign-messages",level:2},{value:"Send transactions",id:"send-transactions",level:2},{value:"Raw transaction",id:"raw-transaction",level:3},{value:"Send ERC20 tokens",id:"send-erc20-tokens",level:3},{value:"Send ERC721 tokens",id:"send-erc721-tokens",level:3},{value:"Send ERC1155 tokens",id:"send-erc1155-tokens",level:3},{value:"Call any contract",id:"call-any-contract",level:3},{value:"Function signature",id:"function-signature",level:4},{value:"Named arguments",id:"named-arguments",level:5},{value:"Positional arguments",id:"positional-arguments",level:5},{value:"ABI",id:"abi",level:4}],d={toc:l};function u(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"wallets-and-transactions"},"Wallets and transactions"),(0,s.kt)("p",null,"Once the SDK is initialized and the user has been authenticated, you can access the wallet corresponding to that user's account. The wallet is the entry point to all the operations that can be performed on the user's account."),(0,s.kt)("h2",{id:"wallet-address"},"Wallet address"),(0,s.kt)("p",null,"The wallet address is unique to each user, can't be changed, and is used to identify the user's account. It is a string of 42 characters starting with ",(0,s.kt)("inlineCode",{parentName:"p"},"0x"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Sequence } from '@0xsequence/waas'\n\nconst waas = new Sequence({\n  key: '${process.env.SEQUENCE_API_KEY}',\n})\n\nawait waas.signIn({ idToken }, \"Session name\")\n\nconst address = await waas.getAddress()\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-stdout"},"0xE4b10c53aa75E19E088cfDD0cff7D46a0E4206F0\n")),(0,s.kt)("h2",{id:"sign-messages"},"Sign messages"),(0,s.kt)("p",null,"The wallet can be used to sign messages. The signatures can later be validated onchain or offchain."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Sequence } from '@0xsequence/waas'\n\nconst waas = new Sequence({\n  key: '${process.env.SEQUENCE_API_KEY}',\n})\n\nawait waas.signIn({ idToken }, \"Session name\")\n\nconst signature = await waas.signMessage({\n  chainId: 137,\n  message: 'Hello world',\n});\n\nconsole.log(signature)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "signedMessage",\n  "data": {\n    "message": "0x48656c6c6f20776f726c64",\n    "signature": "0x0100010000000002012128ff2dd168dc250dc3da93db3131f737e6961a0000fe0100030000000006010001000074000197013331090a763fc7ef2216502cfbff5d855530f977a0ee6db3615722ed9bad498781d8ed72d52b5c9717708ac757f7789c9567e5468566179bd03f72d1fc7b1c010400002c01011111b16c6268897233eddea98a041b326b0faef2010122229ce37ccfee1cbab2b743b22c314b5667cf1a06020001000074000100deb9091f5beb1ebd8d91a1b81e562a70cdb3a1cdafc5e61087b18d1c221c570754ecbe056bdef5f82c388a9bf53f074521aeaf5afdeed3a2ba70adb89362631b010400002c0101444444444444444444444444444444444444444401015555555555555555555555555555555555555555030100a5a91b133336e5ef1c7e23c13974535018fab1c0"\n  }\n}\n')),(0,s.kt)("h2",{id:"send-transactions"},"Send transactions"),(0,s.kt)("p",null,"All wallets can send transactions right after creation. No extra steps are required to create the wallet, as all users have a wallet by default."),(0,s.kt)("h3",{id:"raw-transaction"},"Raw transaction"),(0,s.kt)("p",null,"Raw transactions specify all the parameters of the transaction, including the ",(0,s.kt)("inlineCode",{parentName:"p"},"to")," address, the ",(0,s.kt)("inlineCode",{parentName:"p"},"value")," to send, and the ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," to include."),(0,s.kt)("p",null,"Gas limits, prices, and nonce are always handled automatically by WaaS."),(0,s.kt)("p",null,"A network must be specified when sending a transaction. The network must be specified as the ",(0,s.kt)("inlineCode",{parentName:"p"},"chainId")," of the network, for example ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," for Ethereum mainnet, ",(0,s.kt)("inlineCode",{parentName:"p"},"42161")," for Arbitrum, etc."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Notice that all ",(0,s.kt)("strong",{parentName:"p"},"send transaction")," responses need to be checked using ",(0,s.kt)("inlineCode",{parentName:"p"},"isSentTransactionResponse"),". This is required since WaaS will validate that a given transaction does not fail ",(0,s.kt)("em",{parentName:"p"},"before")," executing the transaction, and in case of failure, the response will be an error receipt instead of a transaction receipt."),(0,s.kt)("p",{parentName:"admonition"},"See more in ",(0,s.kt)("a",{parentName:"p",href:"#transaction-receipts"},"transaction receipts"),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Sequence, isSentTransactionResponse } from '@0xsequence/waas'\n\nconst waas = new Sequence({\n  key: '${process.env.SEQUENCE_API_KEY}',\n});\n\nawait waas.signIn({ idToken }, \"Session name\")\n\nconst tx = await waas.sendTransaction({\n  chainId: 42161,\n  transactions: [{\n    to: '0x27CabC9700EE6Db2797b6AC1e1eCe81C72A2cD8D',\n    value: '200000000000000000000', // 200 ETH\n    data: '0x9fa2b3c4',\n  }]\n})\n\nif (isSentTransactionResponse(tx)) {\n  console.log(tx)\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "transactionReceipt",\n  "data": {\n    "txHash": "0xf2e9f728abd65089f25efda5852e605ced377f4e2c89dbf143b124623ed09b2c",\n    "metaTxHash": "acc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0",\n    "nativeReceipt": { ... },\n    "receipt": { ... },\n    "request": { ... },\n    "simulations": [ ... ],\n  }\n}\n')),(0,s.kt)("h3",{id:"send-erc20-tokens"},"Send ERC20 tokens"),(0,s.kt)("p",null,"Helper methods are available for common operations, such as sending ERC20 tokens. This automatically handles the ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," field of the transaction."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Sequence, isSentTransactionResponse } from '@0xsequence/waas'\n\nconst waas = new Sequence({\n  key: '${process.env.SEQUENCE_API_KEY}',\n})\n\nawait waas.signIn({ idToken }, \"Session name\");\n\nconst tx = await waas.sendERC20({\n  chainId: 42161,\n  token: '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI\n  to: '0x27CabC9700EE6Db2797b6AC1e1eCe81C72A2cD8D',    // Recipient\n  value: '200000000000000000000',                      // 200 DAI\n})\n\nif (isSentTransactionResponse(tx)) {\n  console.log(tx)\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "transactionReceipt",\n  "data": {\n    "txHash": "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3",\n    "metaTxHash": "01a087979dccbbc49a45b72d987e5651d65bd97349ccbfdd601b0b7beee9ddc4",\n    "nativeReceipt": { ... },\n    "receipt": { ... },\n    "request": { ... },\n    "simulations": [ ... ],\n  }\n}\n')),(0,s.kt)("h3",{id:"send-erc721-tokens"},"Send ERC721 tokens"),(0,s.kt)("p",null,"Sending ERC721 tokens also has a helper method. This automatically handles the ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," field of the transaction."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Sequence, isSentTransactionResponse } from '@0xsequence/waas'\n\nconst waas = new Sequence({\n  key: '${process.env.SEQUENCE_API_KEY}',\n})\n\nawait waas.signIn({ idToken });\n\nconst tx = await waas.sendERC721({\n  chainId: 42161,\n  token: '0xF87E31492Faf9A91B02Ee0dEAAd50d51d56D5d4d', // Decentraland LAND\n  to: '0x27CabC9700EE6Db2797b6AC1e1eCe81C72A2cD8D',    // Recipient\n  id: '33347671958251969419410711528313284722562',     // Asset ID\n})\n\nif (isSentTransactionResponse(tx)) {\n  console.log(tx)\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "transactionReceipt",\n  "data": {\n    "txHash": "0x4936962d9972a70bffc27f376f55d9c60c12e762819fa6384fdb466664122b6e",\n    "metaTxHash": "e6513a60b63359a365f0d3f05744d89823278ec829fc5cb4d275bb815d0f5887",\n    "nativeReceipt": { ... },\n    "receipt": { ... },\n    "request": { ... },\n    "simulations": [ ... ],\n  }\n}\n')),(0,s.kt)("h3",{id:"send-erc1155-tokens"},"Send ERC1155 tokens"),(0,s.kt)("p",null,"Sending ERC1155 tokens is also supported."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Sequence, isSentTransactionResponse } from '@0xsequence/waas'\n\nconst waas = new Sequence({\n  key: '${process.env.SEQUENCE_API_KEY}',\n})\n\nawait waas.signIn({ idToken })\n\nconst tx = await waas.sendERC1155({\n  chainId: 137,\n  token: '0x631998e91476da5b870d741192fc5cbc55f5a52e', // Skyweaver assets\n  values: [{\n    id: '66547',                                       // Asset ID\n    value: '200',                                      // Amount for this asset\n  }, {\n    id: '68572',\n    value: '1000',\n  }]\n})\n")),(0,s.kt)("h3",{id:"call-any-contract"},"Call any contract"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"callContract")," method can be used to call any contract method. This is useful for calling methods that are not supported by the helper methods. To call a contract an ABI or function signature must be provided."),(0,s.kt)("h4",{id:"function-signature"},"Function signature"),(0,s.kt)("p",null,"Providing a function signature is the easiest way to call a contract method, as it doesn't require an ABI. The function signature can be provided with named parameters or positional parameters."),(0,s.kt)("h5",{id:"named-arguments"},"Named arguments"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const tx = await sequence.callContract({\n  to: '0x503388C73Ca663eA34e103c11C9F47C9433af471',  // Contract address\n  abi: 'mint(address to, uint256 tokenId)',          // Function signature\n  func: 'mint',                                      // Function name\n  args: {\n    to: '0xf439e432d54c2Bf5518A1901D3791070d4192986',\n    tokenId: '1',\n  },\n  value: 0                                           // Value to send\n})\n")),(0,s.kt)("h5",{id:"positional-arguments"},"Positional arguments"),(0,s.kt)("p",null,"Notice that passing a named function signature with positional arguments is allowed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const tx = await sequence.callContract({\n  to: '0x503388C73Ca663eA34e103c11C9F47C9433af471',  // Contract address\n  abi: 'mint(address,uint256)',                      // Function signature\n  func: 'mint',                                      // Function name\n  args: [\n    '0xf439e432d54c2Bf5518A1901D3791070d4192986',\n    '1',\n  ],\n  value: 0                                           // Value to send\n})\n")),(0,s.kt)("h4",{id:"abi"},"ABI"),(0,s.kt)("p",null,"Providing an ABI is more verbose, but allows for more flexibility, as a single ABI can be used to call multiple methods. ABIs support named arguments and positional arguments."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const abi = `[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]`\n\nconst tx = await sequence.callContract({\n  to: \'0x6b175474e89094c44da98b954eedeac495271d0f\',  // Contract address\n  abi: abi,                                          // ABI\n  func: \'transfer\',                                  // Function name\n  args: {\n    _to: \'0xf439e432d54c2Bf5518A1901D3791070d4192986\',\n    _value: \'1\',\n  },\n  value: 0                                           // Value to send\n})\n')),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Email accounts can only send transactions after the current session has been confirmed by the Sequence guard. This is done by clicking an email link sent to the user's email address or phone number."),(0,s.kt)("p",{parentName:"admonition"},"Social login accounts (like Google and Facebook) can send transactions immediately after signing in."),(0,s.kt)("p",{parentName:"admonition"},"For more details, see ",(0,s.kt)("a",{parentName:"p",href:"/waas/waas-auth/validation"},"validation"),".")))}u.isMDXComponent=!0}}]);