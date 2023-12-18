"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[4465],{1828:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var n=i(1527),o=i(7279);const s={slug:"/guides/mint-collectibles-from-ERC721"},c="How to Mint Digital Collectibles in Builder",r={id:"guides/mint-collectibles-from-ERC721",title:"How to Mint Digital Collectibles in Builder",description:"Introduction",source:"@site/docs/075-guides/902-mint-collectibles-from-ERC721.mdx",sourceDirName:"075-guides",slug:"/guides/mint-collectibles-from-ERC721",permalink:"/guides/mint-collectibles-from-ERC721",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/075-guides/902-mint-collectibles-from-ERC721.mdx",tags:[],version:"current",sidebarPosition:902,frontMatter:{slug:"/guides/mint-collectibles-from-ERC721"},sidebar:"sidebar",previous:{title:"How to Mint in-game Items and Achievements in Builder",permalink:"/guides/mint-items-from-ERC1155"},next:{title:"How to Mint in-game Currency in Builder",permalink:"/guides/mint-currency-from-ERC20"}},l={},a=[{value:"Introduction",id:"introduction",level:2},{value:"ERC-721 vs. ERC-1155",id:"erc-721-vs-erc-1155",level:4},{value:"Choosing for Gaming",id:"choosing-for-gaming",level:4},{value:"Prerequisite: Create a Project and deploy a Smart Contract",id:"prerequisite-create-a-project-and-deploy-a-smart-contract",level:3},{value:"Step 1: Select the contract for your digital collectibles",id:"step-1-select-the-contract-for-your-digital-collectibles",level:2},{value:"Step 2: Navigate to Write Contract",id:"step-2-navigate-to-write-contract",level:2},{value:"Step 3: Provide details for the Mint method",id:"step-3-provide-details-for-the-mint-method",level:2},{value:"Step 4: Mint and sign your transaction",id:"step-4-mint-and-sign-your-transaction",level:2},{value:"Step 5: Confirm your minted collectibles",id:"step-5-confirm-your-minted-collectibles",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-mint-digital-collectibles-in-builder",children:"How to Mint Digital Collectibles in Builder"}),"\n",(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"This guide walks you through creating in-game assets by minting from an ERC-721 contract, commonly known as NFTs (Non-Fungible Tokens), often used for collectibles."}),"\n",(0,n.jsxs)(t.p,{children:["For more on creating in-game items from collections, ",(0,n.jsx)(t.a,{href:"/guides/mint-items-from-ERC1155",children:"check our guide on using ERC-1155"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"erc-721-vs-erc-1155",children:"ERC-721 vs. ERC-1155"}),"\n",(0,n.jsx)(t.p,{children:"Both contracts mint NFTs, but ERC-721, being the earlier standard, has gained widespread adoption, particularly in digital collectibles. Known for its simplicity and ease to audit for security, ERC-721 tokens are distinct, contributing to their recognition in various NFT marketplaces."}),"\n",(0,n.jsx)(t.p,{children:"In contrast, ERC-1155 offers versatility with efficient batch operations for both fungible and non-fungible tokens in a single contract, reducing gas costs. However, this flexibility introduces complexity, necessitating careful security attention."}),"\n",(0,n.jsx)(t.h4,{id:"choosing-for-gaming",children:"Choosing for Gaming"}),"\n",(0,n.jsx)(t.p,{children:"The choice depends on your needs. ERC-1155 is efficient for creating various unique in-game items. However, If you aim to provide tradable digital collectibles recognized across marketplaces, ERC-721 may be better suited."}),"\n",(0,n.jsx)(t.p,{children:"Which leads us to the point of this walkthrough - digital collectibles. As such, we will focus on using ERC-721 to create in-game digital collectibles to use in your game."}),"\n",(0,n.jsx)(t.p,{children:"Let's get started!"}),"\n",(0,n.jsx)(t.h3,{id:"prerequisite-create-a-project-and-deploy-a-smart-contract",children:"Prerequisite: Create a Project and deploy a Smart Contract"}),"\n",(0,n.jsxs)(t.p,{children:["This guide assumes that you have already ",(0,n.jsx)(t.a,{href:"/guides/signup-and-create-a-project",children:"signed up for Builder and created a Project"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Before you get started creating (minting) collectibles, you will need to first deploy the smart contract you wish to mint from. If you have not done so already, go back and do ",(0,n.jsx)(t.a,{href:"/guides/deploy-an-item-collection-contract",children:"how to load an item collection through deploying a smart contract"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"step-1-select-the-contract-for-your-digital-collectibles",children:"Step 1: Select the contract for your digital collectibles"}),"\n",(0,n.jsx)(t.p,{children:"Start by selecting the contract you would like to create a collectible from."}),"\n",(0,n.jsx)(t.p,{children:"Once in the contract dashboard, you should see the ERC-721 contract that you have deployed - select it."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sequence builder choose contract",src:i(7825).Z+"",width:"2926",height:"1174"})}),"\n",(0,n.jsx)(t.h2,{id:"step-2-navigate-to-write-contract",children:"Step 2: Navigate to Write Contract"}),"\n",(0,n.jsx)(t.p,{children:"When opening the contract, you will see several options. Everything from details like your contract address, type, the network its deployed on - to options for adding gas or help setting up an indexer. Below those details, you have more options to view contract details and interact with it."}),"\n",(0,n.jsxs)(t.p,{children:["Within that subset of options, select ",(0,n.jsx)(t.code,{children:"Write Contract"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sequence builder write contract",src:i(9384).Z+"",width:"2922",height:"1420"})}),"\n",(0,n.jsx)(t.p,{children:"Selecting this will reveal a variety of methods on the smart contract."}),"\n",(0,n.jsxs)(t.p,{children:["Select the ",(0,n.jsx)(t.code,{children:"mint"})," method."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sequence builder mint method",src:i(1119).Z+"",width:"2922",height:"2394"})}),"\n",(0,n.jsx)(t.h2,{id:"step-3-provide-details-for-the-mint-method",children:"Step 3: Provide details for the Mint method"}),"\n",(0,n.jsxs)(t.p,{children:["Selecting ",(0,n.jsx)(t.code,{children:"mint"})," will expand the method, providing inputs."]}),"\n",(0,n.jsx)(t.p,{children:"Enter the address you want these collectibles to be minted to, for this example put your own address in."}),"\n",(0,n.jsx)(t.p,{children:"Enter the amount of collectibles you want to create."}),"\n",(0,n.jsxs)(t.p,{children:["Then hit ",(0,n.jsx)(t.code,{children:"write"})," to send a transaction to mint."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sequence builder mint details",src:i(7094).Z+"",width:"2920",height:"1306"})}),"\n",(0,n.jsx)(t.h2,{id:"step-4-mint-and-sign-your-transaction",children:"Step 4: Mint and sign your transaction"}),"\n",(0,n.jsxs)(t.p,{children:["Once you hit ",(0,n.jsx)(t.code,{children:"write"}),", a modal with your wallet will pop-up. In order to create (mint) these collectibles, you will need to send a transaction."]}),"\n",(0,n.jsxs)(t.p,{children:["Read the transaction details and execute the transaction by hitting ",(0,n.jsx)(t.code,{children:"confirm"})," on the signature."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sequence builder sign transaction",src:i(6251).Z+"",width:"2928",height:"1684"})}),"\n",(0,n.jsx)(t.p,{children:"After you sign the transaction, the network will take a few seconds (maybe minutes depending on the network and other factors) to confirm your transaction."}),"\n",(0,n.jsx)(t.p,{children:"When the transaction is complete, you will have created your digital collectibles by minting them from the smart contract!"}),"\n",(0,n.jsx)(t.h2,{id:"step-5-confirm-your-minted-collectibles",children:"Step 5: Confirm your minted collectibles"}),"\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.code,{children:"Tokens"})," subsection to see the both of the collections that we created and minted from."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sequence builder confirm mint",src:i(285).Z+"",width:"2920",height:"1670"})}),"\n",(0,n.jsx)(t.p,{children:"In the example, you can see the 5 collectibles that we created."})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7825:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/builder_choose_contract_mint_collectibles-056af15b4488a86b8060324eabda01ef.png"},285:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/builder_confirm_mint_collectibles-fd73fff1c8a193198d517f12a87a2f25.png"},7094:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/builder_fill_mint_details_mint_collectibles-9fd51ccae1cb0c9117e8e1cdfbcdbb13.png"},1119:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/builder_select_mint_method_mint_collectibles-6678c6def690df2c96b64c16844bbd7a.png"},9384:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/builder_select_write_contract_mint_collectibles-cbbba4a8c34a9afda71d8b2063d9af71.png"},6251:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/builder_sign_transaction_mint_collectibles-ba0644b5139cde63ba33071c01b549dc.png"},7279:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>c});var n=i(959);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);