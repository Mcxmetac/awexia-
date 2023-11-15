"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[6521],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(t),m=s,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=m;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[p]="string"==typeof e?e:s,o[1]=r;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3870:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=t(7462),s=(t(7294),t(3905));const i={},o="Session Management",r={unversionedId:"waas/waas-auth/manage-sessions",id:"waas/waas-auth/manage-sessions",title:"Session Management",description:"Sequence Auth + WaaS handles the following aspects of your application:",source:"@site/docs/10-waas/04-waas-auth/03-manage-sessions.mdx",sourceDirName:"10-waas/04-waas-auth",slug:"/waas/waas-auth/manage-sessions",permalink:"/waas/waas-auth/manage-sessions",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/10-waas/04-waas-auth/03-manage-sessions.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/waas/waas-auth/getting-started"},next:{title:"Wallets and transactions",permalink:"/waas/waas-auth/use-wallets"}},l={},c=[{value:"Sign in / Sign Up",id:"sign-in--sign-up",level:2},{value:"Email Sign In / Sign Up",id:"email-sign-in--sign-up",level:3},{value:"Phone Sign In / Sign Up",id:"phone-sign-in--sign-up",level:3},{value:"List Sessions",id:"list-sessions",level:2},{value:"Close Session",id:"close-session",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"session-management"},"Session Management"),(0,s.kt)("p",null,"Sequence Auth + WaaS handles the following aspects of your application:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"User creation"),(0,s.kt)("li",{parentName:"ul"},"User authentication"),(0,s.kt)("li",{parentName:"ul"},"Session management")),(0,s.kt)("p",null,"This means you don't need to implement an account system yourself; instead, you interact with the Auth + WaaS SDK whenever you need to authenticate a user."),(0,s.kt)("h2",{id:"sign-in--sign-up"},"Sign in / Sign Up"),(0,s.kt)("p",null,"Signing in and signing up are the same operation; the account is automatically created if it doesn't already exist."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Sequence } from '@0xsequence/waas'\n\nconst waas = new Sequence({\n  key: `${process.env.SEQUENCE_API_KEY}`,\n})\n\n// Get an idToken using the social auth provider of your choice\n// (e.g., Google, Facebook, Twitter, etc.)\nawait waas.signIn({ idToken }, \"MacBook Pro - Chrome\")\n")),(0,s.kt)("h3",{id:"email-sign-in--sign-up"},"Email Sign In / Sign Up"),(0,s.kt)("p",null,"Email sign-in is directly supported by the SDK, as long as the used ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," has been generated with the ",(0,s.kt)("inlineCode",{parentName:"p"},"email")," scope. Email logins work similarly to social logins, except that the ",(0,s.kt)("inlineCode",{parentName:"p"},"idToken")," is generated by the SDK itself."),(0,s.kt)("p",null,"To open a session using an email, you will need to provide an email for the user. The WaaS Nitro API will then send an email to the user with a One-Time Password (OTP) that can be used to open a session. This OTP has to be provided to the SDK to obtain an ",(0,s.kt)("inlineCode",{parentName:"p"},"idToken"),"."),(0,s.kt)("p",null,"Once the ",(0,s.kt)("inlineCode",{parentName:"p"},"idToken")," is obtained, the session can be opened as usual."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { Sequence } from \'@0xsequence/waas\'\n\n// Define the user\'s email address\nconst email = "user@example.com"\n\nconst waas = new Sequence({\n  key: `${process.env.SEQUENCE_API_KEY}`,\n})\n\n// This will send an email to the user with an OTP\nconst { instance } = await waas.email.initiateAuth({ email })\n\n// Obtain the OTP from the user\nconst answer = "123456"\n\nconst { idToken } = await waas.email.finalizeAuth({ instance, answer, email })\n\n// Log in using the idToken, as usual\nawait waas.signIn({ idToken }, "Apple Vision Pro - Chrome")\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Sessions opened with an email OTP require a second step in order to be usable for sending transactions."),(0,s.kt)("p",{parentName:"admonition"},"See ",(0,s.kt)("a",{parentName:"p",href:"/waas/waas-auth/validation"},"Email validation"),".")),(0,s.kt)("h3",{id:"phone-sign-in--sign-up"},"Phone Sign In / Sign Up"),(0,s.kt)("p",null,"Phone sign-in is still in development. Stay tuned!\nContact us if you need this feature."),(0,s.kt)("h2",{id:"list-sessions"},"List Sessions"),(0,s.kt)("p",null,"This function returns a list of sessions for the current user and only includes sessions that are still valid."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Sequence } from '@0xsequence/waas'\n\nconst waas = new Sequence({\n  key: `${process.env.SEQUENCE_API_KEY}`,\n})\n\nawait waas.signIn({ idToken }, \"MacBook Pro - Chrome\")\n\nconst sessions = await waas.listSessions()\nconsole.log(sessions)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "0x574372ff1A0Eede68B5358Cce7bbb93155A9dfe0",\n    "address": "0x574372ff1a0eede68b5358cce7bbb93155a9dfe0",\n    "userId": "42#https://accounts.google.com#109234880945084120673",\n    "projectId": 42,\n    "issuer": "https://accounts.google.com",\n    "subject": "109234880945084120673",\n    "friendlyName": "Pixel 3 - Brave",\n    "createdAt": "2023-11-02T18:22:03.102950917Z",\n    "refreshedAt": "2023-11-02T18:22:03.109787921Z",\n    "expiresAt": "2123-10-09T18:22:03.102951017Z",\n    "isThis": false\n  },\n  {\n    "id": "0x3C4E11E4dbF23B87C14bd75d0Da9C75707392D21",\n    "address": "0x3c4e11e4dbf23b87c14bd75d0da9c75707392d21",\n    "userId": "42#https://accounts.google.com#109234880945084120673",\n    "projectId": 42,\n    "issuer": "https://accounts.google.com",\n    "subject": "109234880945084120673",\n    "friendlyName": "MacBook Pro - Chrome",\n    "createdAt": "2023-11-02T18:50:32.815189174Z",\n    "refreshedAt": "2023-11-02T18:50:32.819722082Z",\n    "expiresAt": "2123-10-09T18:50:32.815189234Z",\n    "isThis": true\n  }\n]\n')),(0,s.kt)("h2",{id:"close-session"},"Close Session"),(0,s.kt)("p",null,"A session can be closed using the ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," of the session. Any session can be closed from any device with an active session."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Sequence } from '@0xsequence/waas'\n\nconst waas = new Sequence({\n  key: `${process.env.SEQUENCE_API_KEY}`,\n})\n\nawait waas.signIn({ idToken }, \"MacBook Pro - Chrome\")\n\nconst sessions = await waas.listSessions()\nawait waas.dropSession({ sessionId: sessions[0].id })\n")))}p.isMDXComponent=!0}}]);