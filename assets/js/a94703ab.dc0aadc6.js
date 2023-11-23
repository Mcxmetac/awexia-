"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[4368],{9415:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var a=n(959),o=n(5924),s=n(4039),i=n(2117),l=n(5638),c=n(174),r=n(3204),d=n(74),u=n(3130);const m={backToTopButton:"backToTopButton_egPQ",backToTopButtonShow:"backToTopButtonShow_RulC"};var h=n(1527);function b(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),s=(0,a.useRef)(!1),{startScroll:i,cancelScroll:l}=(0,d.Ct)();return(0,d.RF)(((e,n)=>{let{scrollY:a}=e;const i=n?.scrollY;i&&(s.current?s.current=!1:a>=i?(l(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.S)((e=>{e.location.hash&&(s.current=!0,o(!1))})),{shown:n,scrollToTop:()=>i(0)}}({threshold:300});return(0,h.jsx)("button",{"aria-label":(0,r.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",i.k.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(3791),x=n(8903),g=n(6754),j=n(1626),f=n(2991),k=n(8634),_=n(8722),C=n(7730),v=n(2674);function N(e){let{logo:t,alt:n,imageClassName:a}=e;const o={light:(0,_.Z)(t.src),dark:(0,_.Z)(t.srcDark||t.src)},s=(0,h.jsx)(v.Z,{className:t.className,sources:o,height:t.height,width:t.width,alt:n,style:t.style});return a?(0,h.jsx)("div",{className:a,children:s}):s}function S(e){const{siteConfig:{title:t}}=(0,C.Z)(),{navbar:{title:n,logo:a}}=(0,f.L)(),{imageClassName:o,titleClassName:s,...i}=e,l=(0,_.Z)(a?.href||"/"),c=n?"":t,r=a?.alt??c;return(0,h.jsxs)(k.Z,{to:l,...i,...a?.target&&{target:a.target},children:[a&&(0,h.jsx)(N,{logo:a,alt:r,imageClassName:o}),null!=n&&(0,h.jsx)("b",{className:s,children:n})]})}function I(e){return(0,h.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,h.jsxs)("g",{fill:"#7a7a7a",children:[(0,h.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,h.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const Z={collapseSidebarButton:"collapseSidebarButton_rhFK",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_i4CN"};function T(e){let{onClick:t}=e;return(0,h.jsx)("button",{type:"button",title:(0,r.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,r.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",Z.collapseSidebarButton),onClick:t,children:(0,h.jsx)(I,{className:Z.collapseSidebarButtonIcon})})}var B=n(3308),L=n(3406);const w=Symbol("EmptyContext"),y=a.createContext(w);function A(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),s=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,h.jsx)(y.Provider,{value:s,children:t})}var E=n(455),H=n(3999),M=n(9506);const F=e=>{let{icon:t}=e;return t?.dark&&t?.light?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{src:t.light,className:"dark:hidden block mr-1"}),(0,h.jsx)("img",{src:t.dark,className:"dark:block hidden mr-1"})]}):null};function P(e){let{categoryLabel:t,onClick:n}=e;return(0,h.jsx)("button",{"aria-label":(0,r.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function R(e){let{item:t,onItemClick:n,activePath:o,level:s,index:c,...r}=e;const{items:d,label:u,collapsible:m,className:b,href:p,customProps:x={}}=t,{docs:{sidebar:{autoCollapseCategories:g}}}=(0,f.L)(),_=function(e){const t=(0,M.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,l.LM)(e):void 0),[e,t])}(t),C=(0,l._F)(t,o),v=(0,H.Mg)(p,o),{collapsed:N,setCollapsed:S}=(0,E.u)({initialState:()=>!!m&&(!C&&t.collapsed)}),{expandedItem:I,setExpandedItem:Z}=function(){const e=(0,a.useContext)(y);if(e===w)throw new L.i6("DocSidebarItemsExpandedStateProvider");return e}(),T=function(e){void 0===e&&(e=!N),Z(e?null:c),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const s=(0,L.D9)(t);(0,a.useEffect)((()=>{t&&!s&&n&&o(!1)}),[t,s,n,o])}({isActive:C,collapsed:N,updateCollapsed:T}),(0,a.useEffect)((()=>{m&&null!=I&&I!==c&&g&&S(!0)}),[m,I,c,S,g]),(0,h.jsx)(h.Fragment,{children:"WaaS"!=u?(0,h.jsxs)("li",{className:(0,j.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(s),"menu__list-item",{"menu__list-item--collapsed":N},b),children:[(0,h.jsxs)("div",{className:(0,j.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v}),children:[(0,h.jsxs)(k.Z,{className:(0,j.Z)("menu__link",{"menu__link--sublist":m,"menu__link--sublist-caret":!p&&m,"menu__link--active":C}),onClick:m?e=>{n?.(t),p?T(!1):(e.preventDefault(),T())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":m?!N:void 0,href:m?_??"#":_,...r,children:[(0,h.jsx)(F,{icon:x.icon}),u]}),p&&m&&(0,h.jsx)(P,{categoryLabel:u,onClick:e=>{e.preventDefault(),T()}})]}),(0,h.jsx)(E.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:N,children:(0,h.jsx)(q,{items:d,tabIndex:N?-1:0,onItemClick:n,activePath:o,level:s+1})})]}):null})}var W=n(5095),D=n(6020);const V={menuExternalLink:"menuExternalLink_NnFM"};function z(e){let{item:t,onItemClick:n,activePath:a,level:o,index:s,...c}=e;const{href:r,label:d,className:u,autoAddBaseUrl:m,customProps:b={}}=t,p=(0,l._F)(t,a),x=(0,W.Z)(r);return console.log(d),(0,h.jsx)("li",{className:(0,j.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),children:(0,h.jsxs)(k.Z,{className:(0,j.Z)("menu__link",!x&&V.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:m,"aria-current":p?"page":void 0,to:r,...x&&{onClick:n?()=>n(t):void 0},...c,children:[(0,h.jsx)(F,{icon:b.icon}),d,!x&&(0,h.jsx)(D.Z,{})]})},d)}const U={menuHtmlItem:"menuHtmlItem_I192"};function Y(e){let{item:t,level:n,index:a}=e;const{value:s,defaultStyle:l,className:c}=t;return(0,h.jsx)("li",{className:(0,o.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(n),l&&[U.menuHtmlItem,"menu__list-item"],c),dangerouslySetInnerHTML:{__html:s}},a)}function K(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,h.jsx)(R,{item:t,...n});case"html":return(0,h.jsx)(Y,{item:t,...n});default:return(0,h.jsx)(z,{item:t,...n})}}function O(e){let{items:t,...n}=e;const a=(0,l.f)(t,n.activePath);return(0,h.jsx)(A,{children:a.map(((e,t)=>(0,h.jsx)(K,{item:e,index:t,...n},t)))})}const q=(0,a.memo)(O),G={menu:"menu_Y1UP",menuWithAnnouncementBar:"menuWithAnnouncementBar_fPny"};function Q(e){let{path:t,sidebar:n,className:o}=e;const s=function(){const{isActive:e}=(0,B.nT)(),[t,n]=(0,a.useState)(e);return(0,d.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,h.jsx)("nav",{className:(0,j.Z)("overflow-x-hidden text-sm font-normal thin-scrollbar p-2",G.menu,s&&G.menuWithAnnouncementBar,o),children:(0,h.jsx)("ul",{className:(0,j.Z)(i.k.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(q,{items:n,activePath:t,level:1})})})}const J="sidebar_mhZE",X="sidebarWithHideableNavbar__6UL",$="sidebarHidden__LRd",ee="sidebarLogo_F_0z";function te(e){let{path:t,sidebar:n,onCollapse:a,isHidden:o}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:i}}}=(0,f.L)();return(0,h.jsxs)("div",{className:(0,j.Z)(J,s&&X,o&&$),children:[s&&(0,h.jsx)(S,{tabIndex:-1,className:ee}),(0,h.jsx)(Q,{path:t,sidebar:n}),i&&(0,h.jsx)(T,{onClick:a})]})}const ne=a.memo(te);var ae=n(1053),oe=n(5519);const se=e=>{let{sidebar:t,path:n}=e;const a=(0,oe.e)();return(0,h.jsx)("ul",{className:(0,o.Z)(i.k.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(q,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ie(e){return(0,h.jsx)(ae.Zo,{component:se,props:e})}const le=a.memo(ie);function ce(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)(ne,{...e}),a&&(0,h.jsx)(le,{...e})]})}const re={expandButton:"expandButton_O4O5",expandButtonIcon:"expandButtonIcon_CCAu"};function de(e){let{toggleSidebar:t}=e;return(0,h.jsx)("div",{className:re.expandButton,title:(0,r.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,r.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,h.jsx)(I,{className:re.expandButtonIcon})})}const ue={docSidebarContainer:"docSidebarContainer_LRYZ",docSidebarContainerHidden:"docSidebarContainerHidden_xoI5",sidebarViewport:"sidebarViewport__zUH"};function me(e){let{children:t}=e;const n=(0,c.V)();return(0,h.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function he(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:s}=e;const{pathname:l}=(0,x.TH)(),[c,r]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&r(!1),!c&&(0,p.n)()&&r(!0),s((e=>!e))}),[s,c]);return(0,h.jsx)("aside",{className:(0,o.Z)(i.k.docs.docSidebarContainer,ue.docSidebarContainer,n&&ue.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ue.docSidebarContainer)&&n&&r(!0)},children:(0,h.jsx)(me,{children:(0,h.jsxs)("div",{className:(0,o.Z)(ue.sidebarViewport,c&&ue.sidebarViewportHidden),children:[(0,h.jsx)(ce,{sidebar:t,path:l,onCollapse:d,isHidden:c}),c&&(0,h.jsx)(de,{toggleSidebar:d})]})})})}const be={docMainContainer:"docMainContainer_ZV8W",docMainContainerEnhanced:"docMainContainerEnhanced_Co2N",docItemWrapperEnhanced:"docItemWrapperEnhanced_Thma"};function pe(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.V)();return(0,h.jsx)("main",{className:(0,o.Z)(be.docMainContainer,(t||!a)&&be.docMainContainerEnhanced),children:(0,h.jsx)("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",be.docItemWrapper,t&&be.docItemWrapperEnhanced),children:n})})}const xe={docRoot:"docRoot_Khfw",docsWrapper:"docsWrapper_dz2M"};function ge(e){let{children:t}=e;const n=(0,c.V)(),[o,s]=(0,a.useState)(!1);return(0,h.jsxs)("div",{className:xe.docsWrapper,children:[(0,h.jsx)(b,{}),(0,h.jsxs)("div",{className:xe.docRoot,children:[n&&(0,h.jsx)(he,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:s}),(0,h.jsx)(pe,{hiddenSidebarContainer:o,children:t})]})]})}var je=n(3058);function fe(e){const t=(0,l.SN)(e);if(!t)return(0,h.jsx)(je.Z,{});const{docElement:n,sidebarName:a,sidebarItems:r}=t;return(0,h.jsx)(s.FG,{className:(0,o.Z)(i.k.page.docsDocPage),children:(0,h.jsx)(c.b,{name:a,items:r,children:(0,h.jsx)(ge,{children:n})})})}},3058:(e,t,n)=>{n.d(t,{Z:()=>l});n(959);var a=n(5924),o=n(3204),s=n(7780),i=n(1527);function l(e){let{className:t}=e;return(0,i.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",t),children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,i.jsx)(s.Z,{as:"h1",className:"hero__title",children:(0,i.jsx)(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,i.jsx)("p",{children:(0,i.jsx)(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,i.jsx)("p",{children:(0,i.jsx)(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);