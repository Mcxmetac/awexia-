"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[2935],{5845:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var i=t(1527),o=t(7279);const c={sidebar_label:"Getting Started"},r="Getting Started with Sequence Kit",l={id:"wallet/connectors/kit/getting-started",title:"Getting Started with Sequence Kit",description:"In this guide, we will walk you through installing Sequence Kit, triggering the connection modal, and displaying the embedded wallet in your application.",source:"@site/docs/03-wallet/05-connectors/02-kit/02-getting-started.mdx",sourceDirName:"03-wallet/05-connectors/02-kit",slug:"/wallet/connectors/kit/getting-started",permalink:"/wallet/connectors/kit/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/05-connectors/02-kit/02-getting-started.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Getting Started"},sidebar:"sidebar",previous:{title:"Sequence Kit Documentation",permalink:"/wallet/connectors/kit/overview"},next:{title:"Configuration",permalink:"/wallet/connectors/kit/configuration"}},s={},a=[{value:"Installing Sequence Kit Packages",id:"installing-sequence-kit-packages",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getting-started-with-sequence-kit",children:"Getting Started with Sequence Kit"}),"\n",(0,i.jsx)(n.p,{children:"In this guide, we will walk you through installing Sequence Kit, triggering the connection modal, and displaying the embedded wallet in your application."}),"\n",(0,i.jsx)(n.h2,{id:"installing-sequence-kit-packages",children:"Installing Sequence Kit Packages"}),"\n",(0,i.jsxs)(n.p,{children:["Sequence Kit is modular, allowing you to install only the necessary packages. To get started, install the ",(0,i.jsx)(n.code,{children:"kit"})," core package, the ",(0,i.jsx)(n.code,{children:"connectors"})," package for interfacing with various wallet providers, and the ",(0,i.jsx)(n.code,{children:"wallet"})," for the embedded wallet. Additionally, install other dependencies such as wagmi, viem, and 0xsequence."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install @0xsequence/kit @0xsequence/kit-connectors @0xsequence/kit-wallet wagmi ethers@5.7.2 viem 0xsequence\n# or\npnpm install @0xsequence/kit @0xsequence/kit-connectors @0xsequence/kit-wallet wagmi ethers@5.7.2 viem 0xsequence\n# or\nyarn add @0xsequence/kit @0xsequence/kit-connectors @0xsequence/kit-wallet wagmi ethers@5.7.2 viem 0xsequence\n"})}),"\n",(0,i.jsx)(n.h1,{id:"setting-up-the-kit-wrapper",children:"Setting Up the Kit Wrapper"}),"\n",(0,i.jsx)(n.p,{children:"To utilize the core kit wrapper for connecting web3 wallets to your application, follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Configure wagmi for your app. Below is a basic wagmi configuration. For advanced configurations, please refer to the ",(0,i.jsx)(n.a,{href:"https://wagmi.sh/react/WagmiConfig",children:"wagmi documentation"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import MyPage from './components/MyPage'\nimport { KitProvider } from '@0xsequence/kit'\nimport { getDefaultConnectors } from '@0xsequence/kit-connectors'\nimport { configureChains, createConfig, WagmiConfig } from 'wagmi'\nimport { publicProvider } from 'wagmi/providers/public'\nimport { mainnet, polygon } from 'wagmi/chains'\n\nfunction App() {\n  const { chains, publicClient, webSocketPublicClient } = configureChains(\n    [polygon, mainnet],\n    [publicProvider()],\n  )\n\n  const connectors = getDefaultConnectors({\n    chains,\n    walletConnectProjectId: 'project_id',\n    defaultChainId: 137\n  })\n  \n  const config = createConfig({\n    autoConnect: true,\n    publicClient,\n    webSocketPublicClient,\n    connectors\n  })\n\n  return (\n    <WagmiConfig config={config}>\n      <KitProvider>\n        <MyPage />\n      </KitProvider>\n    </WagmiConfig>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Wrap your app with the ",(0,i.jsx)(n.code,{children:"KitProvider"})," within the ",(0,i.jsx)(n.code,{children:"WagmiConfig"})," wrapper."]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"setting-up-the-embedded-wallet-wrapper",children:"Setting Up the Embedded Wallet Wrapper"}),"\n",(0,i.jsxs)(n.p,{children:["To install the optional embedded wallet, add the ",(0,i.jsx)(n.code,{children:"KitWalletProvider"})," below the ",(0,i.jsx)(n.code,{children:"KitProvider"})," wrapper."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import { KitWalletProvider } from '@0xsequence/kit-wallet'\n\n// ...\n\nconst App = () => {\n  return (\n    <WagmiConfig config={config}>\n      <KitProvider>\n        <KitWalletProvider>\n          <Page />\n        </KitWalletProvider>\n      </KitProvider>\n    </WagmiConfig>\n  )\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The complete code will then look like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import MyPage from './components/MyPage'\nimport { KitProvider } from '@0xsequence/kit'\nimport { getDefaultConnectors } from '@0xsequence/kit-connectors'\nimport { KitWalletProvider } from '@0xsequence/kit-wallet'\nimport { configureChains, createConfig, WagmiConfig } from 'wagmi'\nimport { publicProvider } from 'wagmi/providers/public'\nimport { mainnet, polygon } from 'wagmi/chains'\n\nfunction App() {\n  const { chains, publicClient, webSocketPublicClient } = configureChains(\n    [polygon, mainnet],\n    [publicProvider()],\n  )\n\n  const connectors = getDefaultConnectors({\n    chains,\n    walletConnectProjectId: 'project_id',\n    defaultChainId: 137\n  })\n\n  \n  const config = createConfig({\n    autoConnect: true,\n    publicClient,\n    webSocketPublicClient,\n    connectors\n  })\n\n  return (\n    <WagmiConfig config={config}>\n      <KitProvider>\n        <KitWalletProvider>\n          <MyPage />\n        </KitWalletProvider>\n      </KitProvider>\n    </WagmiConfig>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h1,{id:"triggering-the-connect-modal",children:"Triggering the Connect Modal"}),"\n",(0,i.jsx)("div",{class:"text--center",children:(0,i.jsx)("img",{src:"/img/kit/sign-in-modal.png"})}),"\n",(0,i.jsxs)(n.p,{children:["Invoke the connect modal using the ",(0,i.jsx)(n.code,{children:"useOpenConnectModal"})," hook."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import { useOpenConnectModal } from '@0xsequence/kit'\nimport { useDisconnect, useAccount } from 'wagmi'\n\n\nconst MyReactComponent = () => {\n  const { setOpenConnectModal } = useOpenConnectModal()\n\n  const { isConnected } = useAccount()\n\n  const onClick = () => {\n    setOpenConnectModal(true)\n  }\n\n  return (\n    <>\n      {!isConnected && (\n        <button onClick={onClick}>\n          Sign in\n        </button>\n      )}\n    </>\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The modal will automatically close once the user signs in. You can utilize the ",(0,i.jsx)(n.code,{children:"useAccount"})," hook from wagmi to detect the user's connection status."]}),"\n",(0,i.jsx)(n.h1,{id:"invoking-the-embedded-wallet-modal",children:"Invoking the embedded wallet modal"}),"\n",(0,i.jsx)("div",{class:"text--center",children:(0,i.jsx)("img",{src:"/img/kit/embedded-wallet.png"})}),"\n",(0,i.jsxs)(n.p,{children:["Open the embedded wallet using the ",(0,i.jsx)(n.code,{children:"useOpenWalletModal"})," react hook."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import { useOpenWalletModal } from '@0xsequence/kit-wallet'\n\nconst MyComponent = () => {\n  const { setOpenWalletModal } = useOpenWalletModal()\n\n  const onClick = () => {\n    setOpenWalletModal(true)\n  }\n\n  return (\n    <button onClick={onClick}>open wallet</button>\n  )\n}\n"})}),"\n",(0,i.jsx)(n.h1,{id:"react-example",children:"React Example"}),"\n",(0,i.jsxs)(n.p,{children:["The Sequence Kit ",(0,i.jsx)(n.a,{href:"https://github.com/0xsequence/kit",children:"Github repository"})," contains an ",(0,i.jsx)(n.a,{href:"https://github.com/0xsequence/kit/tree/master/examples/react",children:"example app"})," that you can use for learning and testing."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7279:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(959);const o={},c=i.createContext(o);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);