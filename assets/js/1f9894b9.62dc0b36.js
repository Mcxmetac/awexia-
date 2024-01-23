"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[787],{1880:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var a=s(1527),t=s(7279);const c={},i="Transaction receipts",r={id:"waas/waas-auth/transaction-receipts",title:"Transaction receipts",description:"Any methods that involve sending transactions will return either successful or failed transaction receipts. Failed transaction receipts are generated without executing the transaction.",source:"@site/docs/400-waas/02-waas-auth/06-transaction-receipts.mdx",sourceDirName:"400-waas/02-waas-auth",slug:"/waas/waas-auth/transaction-receipts",permalink:"/waas/waas-auth/transaction-receipts",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/400-waas/02-waas-auth/06-transaction-receipts.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"sidebar",previous:{title:"Validation",permalink:"/waas/waas-auth/validation"},next:{title:"Action payloads",permalink:"/waas/implementation/payloads"}},o={},d=[{value:"Successful transaction response",id:"successful-transaction-response",level:2},{value:"Failed transaction response",id:"failed-transaction-response",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"transaction-receipts",children:"Transaction receipts"}),"\n",(0,a.jsxs)(n.p,{children:["Any methods that involve sending transactions will return either ",(0,a.jsx)(n.em,{children:"successful"})," or ",(0,a.jsx)(n.em,{children:"failed"})," transaction receipts. Failed transaction receipts are generated without executing the transaction."]}),"\n",(0,a.jsx)(n.h2,{id:"successful-transaction-response",children:"Successful transaction response"}),"\n",(0,a.jsxs)(n.p,{children:["Any transaction that is successfully included in a block will return a ",(0,a.jsx)(n.code,{children:"SentTransactionResponse"})," object. This must be checked for before accessing the transaction hash, using the ",(0,a.jsx)(n.code,{children:"isSentTransactionResponse"})," type guard."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { Sequence, isSentTransactionResponse } from '@0xsequence/waas'\n\nconst waas = new Sequence({\n  projectAccessKey: `${process.env.PROJECT_ACCESS_KEY}`,\n  waasConfigKey: `${process.env.WAAS_CONFIG_KEY}`,\n  network: 'mumbai'\n}, defaults.TEST);\n\nawait waas.signIn({ idToken }, \"Session name\")\n\nconst tx = await waas.sendTransaction({\n  chainId: 42161,\n  transactions: [{\n    to: '0xD72C236Be524Ec24F72329317e2785E687105B69', value: '0'\n  }]\n})\n\nif (isSentTransactionResponse(tx)) {\n  console.log(tx)\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"The relevant fields are:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"txHash"}),": The transaction hash of the transaction that was sent to the network."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"receipt.logs"}),": Logs emitted by the transaction."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"receipt.status"}),": The status of the transaction. ",(0,a.jsx)(n.code,{children:"SUCCEEDED"})," or ",(0,a.jsx)(n.code,{children:"FAILED"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"receipt.revertReason"}),": If the transaction was executed but reverted, it includes the reason."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To view the full response object, see the ",(0,a.jsx)(n.a,{href:"/waas/implementation/responses#transaction-receipt-response",children:"Transaction Receipt Response"})," section."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "code": "transactionReceipt",\n  "data": {\n    "txHash": "0xf2e9f728abd65089f25efda5852e605ced377f4e2c89dbf143b124623ed09b2c",\n    "metaTxHash": "acc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0",\n    "nativeReceipt": { ... },\n    "receipt": {\n      "id": "acc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0",\n      "index": 0,\n      "logs": [\n        {\n          "address": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6",\n          "data": "0x0000000000000000000000001119e72b4af230becebd933d0e07f0eec51d8c2a0000000000000000000000000000000000000000000000000000000000000001",\n          "topics": [\n            "0x1f180c27086c7a39ea2a7b25239d1ab92348f07ca7bb59d1438fcf527568f881"\n          ]\n        },\n        {\n          "address": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6",\n          "data": "0x0000000000000000000000000000000000000000000000000000000000000000",\n          "topics": [\n            "0x5c4eeb02dabf8976016ab414d617f9a162936dcace3cdef8c69ef6e262ad5ae7",\n            "0xacc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0"\n          ]\n        }\n      ],\n      "receipts": [ ... ],\n      "revertReason": null,\n      "status": "SUCCEEDED"\n    },\n    "request": { ... },\n    "simulations": [ ... ]\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"failed-transaction-response",children:"Failed transaction response"}),"\n",(0,a.jsxs)(n.p,{children:["WaaS will try to catch any failing transactions before they are sent to the network. This is done by simulating the transaction on the network before sending it. If the simulation fails, the transaction will not be sent to the network and a ",(0,a.jsx)(n.code,{children:"FailedTransactionResponse"})," will be returned."]}),"\n",(0,a.jsxs)(n.p,{children:["To view the full response object, see the ",(0,a.jsx)(n.a,{href:"/waas/implementation/responses#failed-transaction-response",children:"Transaction Receipt Response"})," section."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { Sequence, isSentTransactionResponse } from '@0xsequence/waas'\n\nconst waas = new Sequence({\n  projectAccessKey: `${process.env.PROJECT_ACCESS_KEY}`,\n  waasConfigKey: `${process.env.WAAS_CONFIG_KEY}`,\n  network: 'mumbai'\n}, defaults.TEST);\n\nawait waas.signIn({ idToken }, \"Session name\")\n\nconst tx = await waas.sendTransaction({\n  chainId: 137,\n  transactions: [{\n    // This address always fails on Polygon, give it a try :D\n    to: '0x839eE023B21f4Ffe2294025DE0AC30Ba7278D6Fd', value: '0'\n  }]\n})\n\nif (isSentTransactionResponse(tx)) {\n  // ... This will never be executed\n} else {\n  // tx can only be `SentTransactionResponse` or `FailedTransactionResponse`\n  console.log(tx)\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "code": "transactionFailed",\n  "data": {\n    "error": "This is an error message",\n    "request": {\n      "code": "sendTransaction",\n      "expires": 1699443005,\n      "identifier": "ts-sdk-1699442705965-0x153824576D03629b264683B430bBF9AcEA1d0975",\n      "issued": 1699442705,\n      "network": "137",\n      "transactions": [\n        {\n          "data": "0x",\n          "to": "0x839eE023B21f4Ffe2294025DE0AC30Ba7278D6Fd",\n          "type": "transaction",\n          "value": "0x00"\n        }\n      ],\n      "wallet": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6"\n    },\n    "simulations": [\n      {\n        "executed": true,\n        "gasLimit": 7908,\n        "gasUsed": 5931,\n        "reason": "This is an error message :)",\n        "result": null,\n        "succeeded": false\n      }\n    ]\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},7279:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var a=s(959);const t={},c=a.createContext(t);function i(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);