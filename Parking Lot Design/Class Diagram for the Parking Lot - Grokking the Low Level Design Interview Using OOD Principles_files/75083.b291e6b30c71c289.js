"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75083],{75083:function(a,b,c){c.r(b);var d=c(20348),e=c(89703),f=c(60958),g=c(64977),h=c(83318),i=c(48745),j=c(75920),k=c(17093),l=c(131),m=c(29183),n=c(20098),o=c(9914),p=c(70649),q=c(55606);function r(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var s=function(a){var b,c=a.contextValue,m=a.isTempEnterpriseNavigation,r=a.isHeaderTransparent,s=void 0!==r&&r,t=a.transparentHeaderSearchColor,u=a.transparentHeaderDividerColor,v=a.loggedIn,w=a.setContextValue,x=(0,f.useRouter)(),y=(0,n.ix)(function(a){var b;return null===(b=a.userConfig.data)|| void 0===b?void 0:b.constants}),z=(0,n.ix)(function(a){return a.userConfig.loaded}),A=(0,n.ix)(function(a){return a.user.info.data}),B=(0,n.ix)(function(a){return a.user.info.loaded}),C=(0,n.ix)(function(a){return a.user.info.loggedOut}),D=C||B,E=(null==y?void 0:y[l.zj2.B2C_SEARCH_EXPERIENCE])||l.P7E.DEFAULT,F=(null===(b=(0,p.mg)(A,"b2b_search_experience"))|| void 0===b?void 0:b.b2b_search_experience)||l.P7E.DEFAULT,G=v&&A.enterprise.enable_new_nav_b2b,H=(null==y?void 0:y[l.zj2.SEARCH_EXPERIENCE])||l.P7E.DEFAULT,I=(null==y?void 0:y[l.zj2.SEARCH_REDIRECT_URL])||"/search",J=s?void 0===t?"":t:G||m?"text-white dark:text-gray-200":"dark:text-dark-contrastText",K="".concat(J," fill-current"),L=function(){return H===l.ZG_.REDIRECT||H===l.ZG_.B2C&&((0,p.s0)(A)?F===l.P7E.REDIRECT:E===l.P7E.REDIRECT)?x.push(I):N()},M=function(a){return a.metaKey&&"k"===a.key&&L()},N=function(){return w(function(a){return{animationDropping:!a.animationDropping,animationInProgress:!0,showSearch:!0}})};return e.useEffect(function(){return(0,g.eE)()&&D&&z&&k.YB.add(k.ge.KEYDOWN,M),function(){return k.YB.remove(k.ge.KEYDOWN,M)}},[c,z]),e.useEffect(function(){return c.showSearch?document.documentElement.classList.add("overflow-hidden"):document.documentElement.classList.remove("overflow-hidden")},[c.showSearch]),e.useEffect(function(){return function(){return document.documentElement.classList.remove("overflow-hidden")}},[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(h.Z,{backgroundColor:"bg-black dark:bg-gray-A200",element:"button",padding:"p-1",parentClasses:"tailwind-hidden lg:flex text-default gap-x-2.5",position:l.xRW,onClick:function(){return!c.showSearch&&D&&z&&L()},overlay:(0,g.eE)()&&!c.showSearch&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:"block mb-1",children:"Search Educative"}),(0,d.jsxs)("span",{children:[(0,d.jsx)("kbd",{className:"dark:bg-gray-900 dark:text-white",children:"⌘"})," ",(0,d.jsx)("kbd",{className:"dark:bg-gray-900 dark:text-white",children:"K"})]})]}),overlayParentClasses:"mb-0",overlayParentTextClasses:"text-center text-sm",overlayParentTextColorClasses:"dark:text-white text-white",showPointer:!1,children:[(0,d.jsx)(i.Z,{style:{minWidth:"24px"},className:K}),(0,d.jsx)("span",{className:J,children:"Search"})]}),(0,d.jsx)("button",{"aria-label":"search",className:"icon-default lg:hidden rounded-none",disabled:!(D&&z),id:q.env.REACT_APP_STANDALONE?"selenium-search-icon":null,name:"search-icon",onClick:function(){return!c.showSearch&&L()},children:c.animationDropping?(0,d.jsx)(j.Z,{fontSize:"large",className:K}):(0,d.jsx)(i.Z,{fontSize:"large",className:K})}),(0,d.jsx)(o.Z,{isVertical:!0,height:"h-8",className:"tailwind-hidden lg:block mx-4",color:s?void 0===u?"":u:G||m?"border-gray-A200":"border-gray-200 dark:border-dark-70"})]})},t=function(a){return(0,d.jsx)(m.fZ.Consumer,{children:function(b){var c,e,f=b.value,g=b.setValue;return(0,d.jsx)(s,(c=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){r(a,b,c[b])})}return a}({},a),e=(e={contextValue:f,setContextValue:g},!0,e),Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(e)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(e,a))}),c))}})};b.default=t},75920:function(a,b,c){var d,e,f=c(89703);function g(){return(g=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var h=function(a){return f.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24},a),d||(d=f.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),e||(e=f.createElement("path",{d:"M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"})))};b.Z=h}}])
//# sourceMappingURL=75083.b291e6b30c71c289.js.map