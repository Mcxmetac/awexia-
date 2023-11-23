"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[8022],{6599:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var c=t(1527),r=t(7279);const s={},a="ERC1155",o={id:"unity-sdk/wallet/ERC1155",title:"ERC1155",description:"An ERC1155 token contract manages multiple token types.",source:"@site/docs/09-unity-sdk/23-wallet/12-ERC1155.mdx",sourceDirName:"09-unity-sdk/23-wallet",slug:"/unity-sdk/wallet/ERC1155",permalink:"/unity-sdk/wallet/ERC1155",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/09-unity-sdk/23-wallet/12-ERC1155.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"sidebar",previous:{title:"ERC721",permalink:"/unity-sdk/wallet/ERC721"},next:{title:"ERC20",permalink:"/unity-sdk/wallet/ERC20"}},d={},l=[{value:"An ERC1155 token contract manages multiple token types.",id:"an-erc1155-token-contract-manages-multiple-token-types",level:3}];function i(e){const n={code:"code",em:"em",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"erc1155",children:"ERC1155"}),"\n",(0,c.jsx)(n.h3,{id:"an-erc1155-token-contract-manages-multiple-token-types",children:"An ERC1155 token contract manages multiple token types."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:["ERC1155 ",(0,c.jsx)(n.code,{children:"URI"})," Method:"]})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:"ERC20 erc1155 = new ERC1155(web3, contractAddress);\nvar URI = await erc1155.URI(tokenId);\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:["ERC1155 ",(0,c.jsx)(n.code,{children:"BalanceOf"})," Method:"]})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:"ERC20 erc1155 = new ERC1155(web3, contractAddress);\nvar balanceOf = await erc1155.BalanceOf(tokenId, account);\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:["ERC1155 ",(0,c.jsx)(n.code,{children:"BalanceOfBatch"})," Method:"]})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:"ERC20 erc1155 = new ERC1155(web3, contractAddress);\nvar balanceOfBatch = await erc1155.BalanceOfBatch(accounts, tokenIds);\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:["ERC1155 ",(0,c.jsx)(n.code,{children:"SetApprovalForAll"})," Method:"]})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:"ERC20 erc1155 = new ERC1155(web3, contractAddress);\nawait erc1155.SetApprovalForAll(operator, _approved);\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:["ERC1155 ",(0,c.jsx)(n.code,{children:"IsApprovedForAll"})," Method:"]})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:"ERC20 erc1155 = new ERC1155(web3, contractAddress);\nawait erc1155.IsApprovedForAll(account, operator);\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:["ERC1155 ",(0,c.jsx)(n.code,{children:"SafeTransferFrom"})," Method:"]})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:"ERC20 erc1155 = new ERC1155(web3, contractAddress);\nawait erc1155.SafeTransferFrom(from, to, id, amount, data);\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:["ERC1155 ",(0,c.jsx)(n.code,{children:"SafeBatchTransferFrom"})," Method:"]})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:"ERC20 erc1155 = new ERC1155(web3, contractAddress);\nawait erc1155.SafeBatchTransferFrom(from, to, ids, amounts, data);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},7279:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var c=t(959);const r={},s=c.createContext(r);function a(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);