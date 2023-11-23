"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[9358],{6041:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var s=a(1527),t=a(7279),i=a(370),r=a(1804);const c={},l="Signing & Verifying Messages",d={id:"wallet/guides/sign-message",title:"Signing & Verifying Messages",description:"Signing Messages",source:"@site/docs/03-wallet/04-guides/03-sign-message.mdx",sourceDirName:"03-wallet/04-guides",slug:"/wallet/guides/sign-message",permalink:"/wallet/guides/sign-message",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/04-guides/03-sign-message.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"Authenticate Users with Message Signature",permalink:"/wallet/guides/auth-address"},next:{title:"No-Wallet-Confirmation Signatures",permalink:"/wallet/guides/session-keys"}},o={},u=[{value:"Signing Messages",id:"signing-messages",level:2},{value:"Verifying Message Signatures",id:"verifying-message-signatures",level:2},{value:"Verifying Message Signatures (via Sequence API)",id:"verifying-message-signatures-via-sequence-api",level:2},{value:"Verifying message signature from any kind of wallet (ie. Metamask or Sequence)",id:"verifying-message-signature-from-any-kind-of-wallet-ie-metamask-or-sequence",level:3},{value:"Verifying ETHAuth proof upon connecting a Sequence Wallet",id:"verifying-ethauth-proof-upon-connecting-a-sequence-wallet",level:3},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Notes on Signature Validation with EIP1271 + EIP6492",id:"notes-on-signature-validation-with-eip1271--eip6492",level:3},{value:"Legacy non-EIP6492 Signing",id:"legacy-non-eip6492-signing",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"signing--verifying-messages",children:"Signing & Verifying Messages"}),"\n",(0,s.jsx)(n.h2,{id:"signing-messages",children:"Signing Messages"}),"\n",(0,s.jsx)(n.p,{children:"Sequence wallets are able to sign arbitrary messages."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To request a user's signature of a simple message:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const signer = wallet.getSigner()\nconst message = 'Hello World!'\n\nconst signature = await signer.signMessage(message)\nconsole.log(signature)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["To request a user's signature of a typed-data (",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"EIP712"}),") message:"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const typedData: sequence.utils.TypedData = {\n  domain: {\n    name: 'Ether Mail',\n    version: '1',\n    chainId: await wallet.getChainId(),\n    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'\n  },\n  types: {\n    Person: [\n      { name: 'name', type: 'string' },\n      { name: 'wallet', type: 'address' }\n    ]\n  },\n  message: {\n    name: 'Bob',\n    wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB'\n  }\n}\n\nconst signer = wallet.getSigner()\n\nconst signature = await signer.signTypedData(typedData.domain, typedData.types, typedData.message)\nconsole.log(signature)\n"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"verifying-message-signatures",children:"Verifying Message Signatures"}),"\n",(0,s.jsx)(n.p,{children:"Once you have a signature, you'll often want to verify the validity of the data\neither from your app or from your server. The Sequence SDKs make this easy to do\nfrom either your frontend or backend."}),"\n",(0,s.jsx)(n.p,{children:"Given a message and signature, you can check if a particular wallet signed that message:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Here we fetch the different parameters, but in practice you may have these values\n// encoded and passed separately.\nconst wallet = sequence.getWallet()\nconst provider = wallet.getProvider()\nconst walletAddress = wallet.getAddress()\nconst chainId = wallet.getChainId()\n\n// The sequence utils `isValidMessageSignature` method can validate signatures\n// from any kind of wallet (ie. EOA or Smart Wallet) which includes Metamask, Coinbase,\n// and Sequence.\nconst isValid = await wallet.utils.isValidMessageSignature(\n  walletAddress,\n  message,\n  signature,\n  chainId\n)\n\nconsole.log(isValid)\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:"Sequence is a Smart Contract based account",type:"info",children:[(0,s.jsxs)(n.p,{children:["These signatures are by default encoded using EIP-6492, see ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-6492",children:"https://eips.ethereum.org/EIPS/eip-6492"}),"."]}),(0,s.jsxs)(n.p,{children:["This means that the signatures can be verified using the standard process defined in the ",(0,s.jsx)(n.code,{children:"UniversalVerified"})," contract on EIP-6492."]}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"wallet.utils.isValidMessageSignature"})," implements EIP-6492 verification, it can be used to verify signatures from any kind of wallet."]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"verifying-message-signatures-via-sequence-api",children:"Verifying Message Signatures (via Sequence API)"}),"\n",(0,s.jsx)(n.p,{children:"The Sequence API also offers the convenience to verify any wallet message signature\nby making a simple remote API call."}),"\n",(0,s.jsxs)(n.p,{children:["The Sequence API (",(0,s.jsx)(n.a,{href:"https://api.sequence.app",children:"https://api.sequence.app"}),") supports the following RPC methods:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/rpc/API/IsValidMessageSignature"})," -- verifying a simple text message signature"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/rpc/API/IsValidTypedDataSignature"})," -- verifying a EIP712 typed data object"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/rpc/API/IsValidSignature"})," -- verifying an arbitrary message digest"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/rpc/API/IsValidETHAuthProof"})," -- verifying an ",(0,s.jsx)(n.a,{href:"https://github.com/0xsequence/ethauth.js",children:"ETHAuth"})," proof"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The most common methods are ",(0,s.jsx)(n.code,{children:"IsValidMessageSignature"})," and ",(0,s.jsx)(n.code,{children:"IsValidETHAuthProof"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"verifying-message-signature-from-any-kind-of-wallet-ie-metamask-or-sequence",children:"Verifying message signature from any kind of wallet (ie. Metamask or Sequence)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Sequence API ",(0,s.jsx)(n.code,{children:"IsValidMessageSignature"})," Method:"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Request: POST ",(0,s.jsx)(n.a,{href:"https://api.sequence.app/rpc/API/IsValidMessageSignature",children:"https://api.sequence.app/rpc/API/IsValidMessageSignature"})]}),"\n",(0,s.jsx)(n.li,{children:"Content-Type: application/json"}),"\n",(0,s.jsxs)(n.li,{children:["Body (in JSON):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chainId"}),' (string) -- the chain id of the signature, ie. "1" or "mainnet", or "137" or "polygon", etc']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"walletAddress"})," (string) -- the wallet address"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"message"})," (string) -- the message in utf8 text encoding"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"signature"})," (string) -- the signature in hex encoding"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"IsValidMessageSignature"})," example usage:"]})}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(r.Z,{value:"curl",label:"curl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"class=wrap",children:'curl -X POST -H "Content-Type: application/json" https://api.sequence.app/rpc/API/IsValidMessageSignature -d \'{ "chainId": "polygon", "walletAddress": "0x2fa0b551fdFa31a4471c1C52206fdb448ad997d1", "message": "Hi, please sign this message", "signature": "0x000501032a44625bec3b842df681db00a92a74dda5e42bcf0203596af90cecdbf9a768886e771178fd5561dd27ab005d0001000183d971056b1eca1bcc7289b9a6926677c5b07db4197925346367f61f2d09c732760719a91722acee0b24826f412cb69bd2125e48f231705a5be33d1f5523f9291c020101c50adeadb7fe15bee45dcb820610cdedcd314eb0030002f19915df00d669708608502d3011a09948b32674d6e443202a2ba884a4dcd26c2624ff33a8ee9836cc3ca2fbb8d3aa43382047b73d21646cb66cc2916076c1331c02" }\'\n'})})}),(0,s.jsx)(r.Z,{value:"js",label:"Javascript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Works in both a Webapp (browser) or Node.js:\nimport { sequence } from '0xsequence'\n\nconst chainId = 'polygon'\nconst walletAddress = '0x2fa0b551fdFa31a4471c1C52206fdb448ad997d1'\nconst message = 'Hi, please sign this message'\nconst signature = '0x000501032a44625bec3b842df681db00a92a74dda5e42bcf0203596af90cecdbf9a768886e771178fd5561dd27ab005d0001000183d971056b1eca1bcc7289b9a6926677c5b07db4197925346367f61f2d09c732760719a91722acee0b24826f412cb69bd2125e48f231705a5be33d1f5523f9291c020101c50adeadb7fe15bee45dcb820610cdedcd314eb0030002f19915df00d669708608502d3011a09948b32674d6e443202a2ba884a4dcd26c2624ff33a8ee9836cc3ca2fbb8d3aa43382047b73d21646cb66cc2916076c1331c02'\n\nconst api = new sequence.api.SequenceAPIClient('https://api.sequence.app')\nconst { isValid } = await api.isValidMessageSignature({\n  chainId, walletAddress, message, signature\n})\nconsole.log(isValid) // true\n"})})}),(0,s.jsx)(r.Z,{value:"golang",label:"Go",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import (\n\t"context"\n\t"fmt"\n\t"log"\n\t"net/http"\n\n\t"github.com/0xsequence/go-sequence/api"\n)\n\nfunc ValidateMessageSignature() {\n\tseqAPI := api.NewAPIClient("https://api.sequence.app", http.DefaultClient)\n\n\tchainID := "polygon"\n\twalletAddress := "0x2fa0b551fdFa31a4471c1C52206fdb448ad997d1"\n\n\t// NOTE: you can also pass the message in EIP191 format as well. If you do not pass\n\t// the EIP191 prefix, it will automatically be added at the time of validation.\n\t// message := fmt.Sprintf("\\x19Ethereum Signed Message:\\n%d%s", len(message), message)\n\tmessage := "Hi, please sign this message"\n\n\tsignature := "0x000501032a44625bec3b842df681db00a92a74dda5e42bcf0203596af90cecdbf9a768886e771178fd5561dd27ab005d0001000183d971056b1eca1bcc7289b9a6926677c5b07db4197925346367f61f2d09c732760719a91722acee0b24826f412cb69bd2125e48f231705a5be33d1f5523f9291c020101c50adeadb7fe15bee45dcb820610cdedcd314eb0030002f19915df00d669708608502d3011a09948b32674d6e443202a2ba884a4dcd26c2624ff33a8ee9836cc3ca2fbb8d3aa43382047b73d21646cb66cc2916076c1331c02"\n\n\tisValid, err := seqAPI.IsValidMessageSignature(context.Background(), chainID, walletAddress, message, signature)\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\tfmt.Println("isValid?", isValid)\n}\n'})})}),(0,s.jsx)(r.Z,{value:"other",label:"Other",children:(0,s.jsxs)(n.p,{children:["Please ",(0,s.jsx)(n.a,{href:"/support",children:"contact our team"})," for assistance with integrations to another target."]})})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"verifying-ethauth-proof-upon-connecting-a-sequence-wallet",children:"Verifying ETHAuth proof upon connecting a Sequence Wallet"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Sequence API ",(0,s.jsx)(n.code,{children:"IsValidETHAuthProof"})," Method:"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Request: POST ",(0,s.jsx)(n.a,{href:"https://api.sequence.app/rpc/API/IsValidETHAuthProof",children:"https://api.sequence.app/rpc/API/IsValidETHAuthProof"})]}),"\n",(0,s.jsx)(n.li,{children:"Content-Type: application/json"}),"\n",(0,s.jsxs)(n.li,{children:["Body (in JSON):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chainId"}),' (string) -- the chain id of the signature, ie. "1" or "mainnet", or "137" or "polygon", etc']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"walletAddress"})," (string) -- the wallet address"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ethAuthProofString"})," (string) -- the ETHAuth encoded signature"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"IsValidETHAuthProof"})," example usage:"]})}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(r.Z,{value:"curl",label:"curl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"class=wrap",children:'curl -X POST -H "Content-Type: application/json" https://api.sequence.app/rpc/API/IsValidETHAuthProof -d \'{"chainId":"polygon", "walletAddress":"0x2fa0b551fdFa31a4471c1C52206fdb448ad997d1","ethAuthProofString": "eth.0x2fa0b551fdfa31a4471c1c52206fdb448ad997d1.eyJhcHAiOiJEZW1vIERhcHAiLCJpYXQiOjAsImV4cCI6MTY2MDIzMTAyOCwidiI6IjEiLCJvZ24iOiJodHRwOi8vbG9jYWxob3N0OjQwMDAifQ.0x000501032a44625bec3b842df681db00a92a74dda5e42bcf0203596af90cecdbf9a768886e771178fd5561dd27ab005d00010001f7dad5ade840bb961cbab889d731bbc080bb4c36fc090435e82fe78e3c152b671505ad544adb562cc25a5933cd06c9108e239a52a82ba797c3d3522645c69cd81b020101c50adeadb7fe15bee45dcb820610cdedcd314eb003000274164fb33c93b4384582c54c30d9a1e2ef219063d03084005edc1da853af2f1f2e67275dbb6ef945d04600b6dd83cfd997cc9ae4173ea61b0c5cc0808fb196681b02"}\' \n'})})}),(0,s.jsx)(r.Z,{value:"js",label:"Javascript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Works in both a Webapp (browser) or Node.js:\nimport { sequence } from '0xsequence'\n\nconst chainId = 'polygon'\nconst walletAddress = '0x2fa0b551fdFa31a4471c1C52206fdb448ad997d1'\nconst ethAuthProofString = 'eth.0x2fa0b551fdfa31a4471c1c52206fdb448ad997d1.eyJhcHAiOiJEZW1vIERhcHAiLCJpYXQiOjAsImV4cCI6MTY2MDIzMTAyOCwidiI6IjEiLCJvZ24iOiJodHRwOi8vbG9jYWxob3N0OjQwMDAifQ.0x000501032a44625bec3b842df681db00a92a74dda5e42bcf0203596af90cecdbf9a768886e771178fd5561dd27ab005d00010001f7dad5ade840bb961cbab889d731bbc080bb4c36fc090435e82fe78e3c152b671505ad544adb562cc25a5933cd06c9108e239a52a82ba797c3d3522645c69cd81b020101c50adeadb7fe15bee45dcb820610cdedcd314eb003000274164fb33c93b4384582c54c30d9a1e2ef219063d03084005edc1da853af2f1f2e67275dbb6ef945d04600b6dd83cfd997cc9ae4173ea61b0c5cc0808fb196681b02'\n\nconst api = new sequence.api.SequenceAPIClient('https://api.sequence.app')\nconst { isValid } = await api.isValidETHAuthProof({\n  chainId: chainId, walletAddress: walletAddress, ethAuthProofString: ethAuthProofString\n})\nconsole.log(isValid) // true\n"})})}),(0,s.jsx)(r.Z,{value:"golang",label:"Go",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import (\n\t"context"\n\t"fmt"\n\t"log"\n\t"net/http"\n\n\t"github.com/0xsequence/go-sequence/api"\n)\n\nfunc ValidateETHAuth() {\n\tseqAPI := api.NewAPIClient("https://api.sequence.app", http.DefaultClient)\n\n\tchainID := "polygon"\n\twalletAddress := "0x2fa0b551fdFa31a4471c1C52206fdb448ad997d1"\n\tethAuthProofString := "eth.0x2fa0b551fdfa31a4471c1c52206fdb448ad997d1.eyJhcHAiOiJEZW1vIERhcHAiLCJpYXQiOjAsImV4cCI6MTY2MDIzMTAyOCwidiI6IjEiLCJvZ24iOiJodHRwOi8vbG9jYWxob3N0OjQwMDAifQ.0x000501032a44625bec3b842df681db00a92a74dda5e42bcf0203596af90cecdbf9a768886e771178fd5561dd27ab005d00010001f7dad5ade840bb961cbab889d731bbc080bb4c36fc090435e82fe78e3c152b671505ad544adb562cc25a5933cd06c9108e239a52a82ba797c3d3522645c69cd81b020101c50adeadb7fe15bee45dcb820610cdedcd314eb003000274164fb33c93b4384582c54c30d9a1e2ef219063d03084005edc1da853af2f1f2e67275dbb6ef945d04600b6dd83cfd997cc9ae4173ea61b0c5cc0808fb196681b02"\n\n\tisValid, err := seqAPI.IsValidETHAuthProof(context.Background(), chainID, walletAddress, ethAuthProofString)\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\tfmt.Println("isValid?", isValid)\n}\n'})})}),(0,s.jsx)(r.Z,{value:"other",label:"Other",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{})})})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,s.jsx)(n.h3,{id:"notes-on-signature-validation-with-eip1271--eip6492",children:"Notes on Signature Validation with EIP1271 + EIP6492"}),"\n",(0,s.jsxs)(n.p,{children:["Smart Wallets like Sequence rely on the ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1271",children:"EIP1271"})," standard for signature validation."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1271",children:"EIP1271"})," is a single function on a contract defined as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function isValidSignature(\n  bytes32 _hash, \n  bytes memory _signature\n) public view returns (bytes4 magicValue)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The first ",(0,s.jsx)(n.code,{children:"_hash"})," argument accepts the hash of the message digest, and the second argument ",(0,s.jsx)(n.code,{children:"_signature"}),"\nis the signed payload returned by the wallet upon signing."]}),"\n",(0,s.jsx)(n.p,{children:"Additionally, Smart Wallets don't always deploy a contract onchain every time a new wallet is created.\nInstead, they compute the wallet address deterministically, and the wallet is only deployed when a transaction needs to be made."}),"\n",(0,s.jsxs)(n.p,{children:["In this case, we can't use the ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1271",children:"EIP1271"})," function directly, because the wallet contract doesn't exist yet.\nInstead, we use the ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-6492",children:"EIP-6492"})," standard, which defined a method for bootstrapping the wallet\ncontract and calling the ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1271",children:"EIP1271"})," function, in a single operation."]}),"\n",(0,s.jsxs)(n.p,{children:["For Javascript/Typescript signature verification, you can use ",(0,s.jsx)(n.code,{children:"0xsequence"})," utility functions like so:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { 0xsequence } from '0xsequence'\n\nconst wallet = sequence.getWallet()\n\nconst isValid = await wallet.utils.isValidSignature(\n  walletAddress,\n  digest,\n  signature,\n  chainId\n)\n\nconsole.log(isValid) // returns true/false\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Additionally you can also use ",(0,s.jsx)(n.code,{children:"wallet.utils.isValidMessageSignature"})," or ",(0,s.jsx)(n.code,{children:"wallet.utils.isValidTypedDataSignature"}),"\nwhich are just syntactic sugar for ",(0,s.jsx)(n.code,{children:"wallet.utils.isValidSignature"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["As well, for convenience the signature validation functions above support verifying EOA or Smart Wallet signatures.\nThis allows you to use a single code path in your Dapp to verify any kind of signature and support multiple wallets at\nthe same time, like Metamask, Coinbase, Sequence, WalletConnect, Argent, Rainbow, etc. -- all Ethereum compatible wallets, EOA\nor Smart Wallets, will ",(0,s.jsx)(n.em,{children:"just work"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"legacy-non-eip6492-signing",children:"Legacy non-EIP6492 Signing"}),"\n",(0,s.jsxs)(n.p,{children:["By default, all the signing methods will generate ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-6492",children:"EIP-6492"})," encoded signatures.\nThis avoids the need to deploy the wallet onchain before being able to validate the signature, and is the recommended way to sign messages."]}),"\n",(0,s.jsxs)(n.p,{children:["However, if you need to generate legacy non-EIP6492 signatures, you can do so by setting the last argument of the signing methods to ",(0,s.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const signer = wallet.getSigner()\nconst message = 'Hello World!'\n\nconst signature = await signer.signMessage(message, { eip6492: false })\nconsole.log(signature)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["These legacy signatures can be validated using the ",(0,s.jsx)(n.code,{children:"wallet.utils.isValidSignature method"}),", but they can also be validated using\nthe isValidSignature method defined on the wallet contract, as specified by the ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1271",children:"EIP1271"})," standard."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Notice that signing non-EIP6492 signatures requires the wallet to be deployed onchain, and thus the user will be prompted\nto deploy the wallet onchain before being able to sign the message. If the network has fees (like Ethereum), the user will\nalso be prompted to pay the transaction fees."})})]})}function g(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1804:(e,n,a)=>{a.d(n,{Z:()=>r});a(959);var s=a(5924);const t={tabItem:"tabItem_l_5p"};var i=a(1527);function r(e){let{children:n,hidden:a,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,r),hidden:a,children:n})}},370:(e,n,a)=>{a.d(n,{Z:()=>I});var s=a(959),t=a(5924),i=a(74),r=a(8903),c=a(331),l=a(4053),d=a(3608),o=a(7979);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:s,default:t}}=e;return{value:n,label:a,attributes:s,default:t}}))}(a);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function g(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:a}=e;const t=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function p(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,i=h(e),[r,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[d,u]=f({queryString:a,groupId:t}),[p,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,o.Nk)(a);return[t,(0,s.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:t}),m=(()=>{const e=d??p;return g({value:e,tabValues:i})?e:null})();(0,c.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=a(9506);const m={tabList:"tabList_Pq82",tabItem:"tabItem_kpXA"};var x=a(1527);function j(e){let{className:n,block:a,selectedValue:s,selectValue:r,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),o=e=>{const n=e.currentTarget,a=l.indexOf(n),t=c[a].value;t!==s&&(d(n),r(t))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},n),children:c.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:o,...i,className:(0,t.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function y(e){let{lazy:n,children:a,selectedValue:t}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=p(e);return(0,x.jsxs)("div",{className:(0,t.Z)("tabs-container",m.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function I(e){const n=(0,b.Z)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(n))}},7279:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>r});var s=a(959);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);