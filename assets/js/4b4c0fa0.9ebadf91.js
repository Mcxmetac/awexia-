"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[5494],{2207:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(1527),a=s(7279);const r={slug:"/relayer/building-relaying-server"},i="Building a Relaying Server",o={id:"relayer/building-relaying-server",title:"Building a Relaying Server",description:"With Sequence, you can create a smart contract wallet your server can use to dispatch transactions for your users",source:"@site/docs/300-relayer/02-building-relaying-server.mdx",sourceDirName:"300-relayer",slug:"/relayer/building-relaying-server",permalink:"/relayer/building-relaying-server",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/300-relayer/02-building-relaying-server.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/relayer/building-relaying-server"},sidebar:"sidebar",previous:{title:"Relayer",permalink:"/relayer"},next:{title:"Mint Collectibles Using a Gasless Serverless Relayer",permalink:"/relayer/mint-collectibles-serverless"}},c={},d=[{value:"Nodejs Server",id:"nodejs-server",level:2},{value:"Nodejs Server with Gas Sponsoring using Sequence Builder",id:"nodejs-server-with-gas-sponsoring-using-sequence-builder",level:2},{value:"A. Create Dapp",id:"a-create-dapp",level:3},{value:"B. New Dapp",id:"b-new-dapp",level:3},{value:"C.1 Gas Tank",id:"c1-gas-tank",level:3},{value:"C.2 Add Gas",id:"c2-add-gas",level:3},{value:"C.3 Add Sponsored Address",id:"c3-add-sponsored-address",level:3},{value:"Parallel Transactions",id:"parallel-transactions",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"building-a-relaying-server",children:"Building a Relaying Server"}),"\n",(0,t.jsx)(n.p,{children:"With Sequence, you can create a smart contract wallet your server can use to dispatch transactions for your users\nwithout you having to be worried about transaction speed, throughput and re-orgs."}),"\n",(0,t.jsx)(n.admonition,{title:"Sequentual Transactions",type:"info",children:(0,t.jsx)(n.p,{children:"By default, Sequence transactions will be executed sequentially."})}),"\n",(0,t.jsx)(n.h2,{id:"nodejs-server",children:"Nodejs Server"}),"\n",(0,t.jsx)(n.p,{children:"Your server will need an EOA wallet that will be able to sign messages. It will be the owner of your server-side Sequence\nwallet which will be used to dispatch transactions."}),"\n",(0,t.jsx)(n.p,{children:"This Sequence wallet should have the correct ownership at your contract level, not the EOA.\nAlso, the Sequence wallet should be sufficiently funded in order to pay fees needed by the relayer to dispatch your transactions."}),"\n",(0,t.jsx)(n.p,{children:"Using this approach - versus the next section (with sponsoring) - includes the ability to pay for gas in any available currency by our relayer (e.g. 'MATIC', 'DAI', 'USDC', 'WETH')."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { Session } from '@0xsequence/auth'\n\n// Create your server EOA\nconst walletEOA = new ethers.Wallet(serverPrivateKey, provider)\n\n// Open a Sequence session, this will find or create\n// a Sequence wallet controlled by your server EOA\nconst session = await Session.singleSigner({\n  signer: walletEOA,\n  projectAccessKey: '<access_key>'\n})\n\n// Get the Sequence wallet address\nconsole.log(session.account.address)\n\n// Get a signer for a specific network\n// - 1:     Ethereum Mainnet\n// - 137:   Polygon Mainnet\n// - 42161: Arbitrum One\n// See https://chainid.network/ for more\nconst signer = session.account.getSigner(137)\n\n// Craft your transaction\nconst erc721Interface = new ethers.utils.Interface([\n  'function safeTransferFrom(address _from, address _to, uint256 _tokenId)'\n])\n\nconst data = erc721Interface.encodeFunctionData(\n  'safeTransferFrom', [senderAddress, recipientAddress, id]\n)\n\nconst txn = {\n  to: erc721TokenAddress,\n  data\n}\n\n// Send the transaction\nconst txnResponse = await signer.sendTransaction(txn)\n\n// Wait for transaction to be mined\nconst txnReceipt = await txnResponse.wait()\n\n// Check if transaction was successful \nif (txnReceipt.status != 1) {\n  console.log(`Unexpected status: ${txnReceipt.status}`)\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also enforce a specific way to pay for gas fees, or the openning of a specific Sequence wallet."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { Session } from '@0xsequence/auth'\n\n// Create your server EOA\nconst walletEOA = new ethers.Wallet(serverPrivateKey, provider)\n\n// Open a Sequence session, this will find or create\n// a Sequence wallet controlled by your server EOA\nconst session = await Session.singleSigner({\n  signer: walletEOA,\n  projectAccessKey: '<access_key>'\n  // OPTIONAL: Multiple wallets could be found for the same EOA\n  // to enforce a specific wallet you can use the following callback\n  selectWallet: async (wallets: string[]) => {\n    const found = wallets.find(w => w === EXPECTED_WALLET_ADDRESS)\n    if (!found) throw Error('wallet not found')\n    // Returning the wallet address will make the session use it\n    // returning undefined will make the session create a new wallet\n    return found\n  }\n})\n\nconst signer = session.account.getSigner(137, {\n  // OPTIONAL: You can also enforce a specific way to pay for gas fees\n  // if not provided the sdk will select one for you\n  selectFee: async (\n    _txs: any,\n    options: FeeOption[]\n  ) => {\n    // Find the option to pay with native tokens\n    const found = options.find(o => !o.token.contractAddress)\n    if (!found) throw Error('fee option not found')\n    return found\n  }\n})\n\n// Initialize the contract\nconst usdc = new ethers.Contract(\n  '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC on Polygon\n  ERC_20_ABI,\n  signer\n)\n\n// Send the transaction\nconst txnResponse = await usdc.transfer(recipient, 1)\n\n// Wait for transaction to be mined\nconst txnReceipt = await txnResponse.wait()\n\n// Check if transaction was successful \nif (txnReceipt.status != 1) {\n  console.log(`Unexpected status: ${txnReceipt.status}`)\n}\n"})}),"\n",(0,t.jsxs)(n.admonition,{title:"Triggers migration",type:"caution",children:[(0,t.jsxs)(n.p,{children:["Openning a session may trigger a migration of your Sequence wallet to a new version, this could be ",(0,t.jsx)(n.code,{children:"v1"})," to ",(0,t.jsx)(n.code,{children:"v2"})," or ",(0,t.jsx)(n.code,{children:"v2"})," to future versions."]}),(0,t.jsx)(n.p,{children:"Migration is a one-way process, once your wallet is migrated it cannot be reverted to a previous version."}),(0,t.jsxs)(n.p,{children:["To catch any unwanted migration, you can use the ",(0,t.jsx)(n.code,{children:"onMigration"})," callback."]})]}),"\n",(0,t.jsx)(n.h2,{id:"nodejs-server-with-gas-sponsoring-using-sequence-builder",children:"Nodejs Server with Gas Sponsoring using Sequence Builder"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to have your transactions sponsored & paid for with a credit card, you can follow the below steps before beginning your code, at the following link: ",(0,t.jsx)(n.a,{href:"https://sequence.build/",children:"https://sequence.build/"})]}),"\n",(0,t.jsx)(n.p,{children:"By sponsoring your transaction, you can now just send the transaction without a fee object and not have to fund the smart contract wallet before relaying any transactions."}),"\n",(0,t.jsx)(n.admonition,{title:"Already Deployed Contract",type:"info",children:(0,t.jsx)(n.p,{children:"For this example, we assume you have a smart contract deployed with a contract address to include in the last step."})}),"\n",(0,t.jsx)(n.h3,{id:"a-create-dapp",children:"A. Create Dapp"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sequence builder create app",src:s(751).Z+"",width:"1344",height:"495"})}),"\n",(0,t.jsx)(n.h3,{id:"b-new-dapp",children:"B. New Dapp"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sequence builder new dapp",src:s(4241).Z+"",width:"929",height:"690"})}),"\n",(0,t.jsx)(n.h3,{id:"c1-gas-tank",children:"C.1 Gas Tank"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sequence builder gas tank",src:s(9581).Z+"",width:"1544",height:"518"})}),"\n",(0,t.jsx)(n.h3,{id:"c2-add-gas",children:"C.2 Add Gas"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sequence builder add gas",src:s(9163).Z+"",width:"1238",height:"763"})}),"\n",(0,t.jsx)(n.h3,{id:"c3-add-sponsored-address",children:"C.3 Add Sponsored Address"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sequence builder add sponsored address",src:s(7841).Z+"",width:"1238",height:"755"})}),"\n",(0,t.jsx)(n.p,{children:"The following is example code that implements a relayed transaction, same as the above example (i.e. Nodejs Server) but without fees, taken care of by the Sequence Builder."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { Session } from '@0xsequence/auth'\n\n// Create your server EOA\nconst walletEOA = new ethers.Wallet(serverPrivateKey, provider)\n\n// Open a Sequence session, this will find or create\n// a Sequence wallet controlled by your server EOA\nconst session = await Session.singleSigner({\n  signer: walletEOA,\n  projectAccessKey: '<access_key>'\n})\n\n// Get the Sequence wallet address\nconsole.log(session.account.address)\n\n// Get a signer for a specific network\n// - 1:     Ethereum Mainnet\n// - 137:   Polygon Mainnet\n// - 42161: Arbitrum One\n// See https://chainid.network/ for more\nconst signer = session.account.getSigner(137, {\n  // OPTIONAL: This ensures that the transaction is paid for by the gas tank\n  // but if not provided, the gas tank will be used anyway\n  selectFee: async (\n    _txs: any,\n    _options: FeeOption[]\n  ) => {\n    return undefined\n  }\n})\n\n// Craft your transaction\nconst erc721Interface = new ethers.utils.Interface([\n  'function safeTransferFrom(address _from, address _to, uint256 _tokenId)'\n])\n\nconst data = erc721Interface.encodeFunctionData(\n  'safeTransferFrom', [senderAddress, recipientAddress, id]\n)\n\nconst txn = {\n  to: erc721TokenAddress,\n  data\n}\n\n// Send the transaction\nconst txnResponse = await signer.sendTransaction(txn)\n\n// Wait for transaction to be mined\nconst txnReceipt = await txnResponse.wait()\n\n// Check if transaction was successful \nif (txnReceipt.status != 1) {\n  console.log(`Unexpected status: ${txnReceipt.status}`)\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parallel-transactions",children:"Parallel Transactions"}),"\n",(0,t.jsx)(n.p,{children:"If you want to send multiple independent transactions without needing to batch them, you can also send them in distinct nonce spaces.\nUsing distinct nonce spaces for your transactions signals to the relayer that there's no dependency between them and that\nthey can be executed on-chain in any order."}),"\n",(0,t.jsx)(n.p,{children:"This allows the transactions to be dispatched immediately in an unbuffered way without having to wait for a full batch.\nHere is an example of how to do that:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Generate random nonce spaces with ~0% probability of collision\nconst randomNonceSpace1 = ethers.BigNumber.from(ethers.utils.hexlify(ethers.utils.randomBytes(20)))\nconst randomNonceSpace2 = ethers.BigNumber.from(ethers.utils.hexlify(ethers.utils.randomBytes(20)))\n\n// Create signers for each nonce space\nconst signer1 = session.account.getSigner(137, {\n  nonceSpace: randomNonceSpace1\n})\n\nconst signer2 = session.account.getSigner(137, {\n  nonceSpace: randomNonceSpace2\n})\n\n// Generate transactions\nconst txn1 = {\n  to: tokenContract.address,\n  data: erc20Interface.encodeFunctionData(\n    'transfer', [recipient1, amount1]\n  )\n}\n\nconst txn2 = {\n  to: tokenContract.address,\n  data: erc20Interface.encodeFunctionData(\n    'transfer', [recipient2, amount2]\n  )\n}\n\n// Dispatch transactions, which can now be executed in parallel\nawait Promise.all([\n  signer1.sendTransaction(txn1),\n  signer2.sendTransaction(txn2)\n])\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If batching transactions is not a problem for your use-case, you can call ",(0,t.jsx)(n.code,{children:"await wallet.sendTransaction(txns)"}),".\nYou can read more about batch transactions in ",(0,t.jsx)(n.a,{href:"/wallet/guides/send-batch-transactions",children:"Sending Batched Transactions"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},9163:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/builder_add_gas-9fb8077270f7bdd3a697558287067c21.png"},7841:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/builder_add_sponsored_address-2af5f409ed008fb9b595bdb5a57b87b4.png"},751:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/builder_create_dapp-3fa3bd5fefdea0557229506da4b25e38.png"},9581:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/builder_gas_tank-9771dcf05b275102b0dd7d921e8c0365.png"},4241:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/builder_new_dapp-23c42a4f874bceec906e6aa7bca4b45b.png"},7279:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(959);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);