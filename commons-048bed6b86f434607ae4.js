(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1Aod":function(e,t,n){e.exports=n.p+"static/brc-logo-min-e150cc7dbffbff43553c37c4e9dc27fb.png"},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),m.canUseDOM?t(l):n&&(l=n(l))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(m,"canUseDOM",c),m}}},"8cbR":function(e,t,n){e.exports=n.p+"static/jcvi-logo-643ed585f7cd37740aae7ceab009c7e4.png"},"8oxB":function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,s=[],u=!1,m=-1;function f(){u&&l&&(u=!1,l.length?s=l.concat(s):m=-1,s.length&&d())}function d(){if(!u){var e=c(f);u=!0;for(var t=s.length;t;){for(l=s,s=[];++m<t;)l&&l[m].run();m=-1,t=s.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function b(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||u||c(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"8rOj":function(e,t,n){e.exports=n.p+"static/uc-logo-65540533e3d252d37bbef3ed7a002233.gif"},"9HZ2":function(e,t,n){e.exports=n.p+"static/brc-logo-white-d02c6a9578e0f6ff42b32a4ca81b1fd6.png"},AK4J:function(e,t,n){e.exports=n.p+"static/brc-logo-black-01c2c22a1b9cfd2240caf3dd92e1d17d.png"},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=(n("Iu+6"),n("rL/g"),n("MHGr"),n("rMck"),n("+YBn"),n("9HZ2")),c=n.n(i),l=n("1Aod"),s=n.n(l),u=function(e){e.siteTitle;return a.a.createElement("header",null,a.a.createElement("nav",{id:"navbar",className:"navbar navbar-expand-md navbar-dark bg-dark bg-brc align-items-end"},a.a.createElement(o.Link,{className:"navbar-brand",to:"/"},a.a.createElement("img",{id:"logo",src:c.a})),a.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},a.a.createElement("ul",{className:"navbar-nav mr-auto"},a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.Link,{className:"nav-link",to:"/organisms"},"Organisms")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.Link,{className:"nav-link",to:"/tools"},"Tools")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.Link,{className:"nav-link",to:"/calendar"},"Calendar")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.Link,{className:"nav-link",to:"/publications"},"Publications")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.Link,{className:"nav-link",to:"/metrics"},"Usage Metrics")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.Link,{className:"nav-link",to:"/about"},"About")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.Link,{className:"nav-link",to:"/contact"},"Contact"))),a.a.createElement("ul",{className:"navbar-nav"},a.a.createElement("li",{className:"nav-item dropdown"},a.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},a.a.createElement("i",{className:"fas fa-user-circle"})),a.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdown"},a.a.createElement("a",{className:"dropdown-item",href:"#"},"Login"),a.a.createElement("a",{className:"dropdown-item",href:"#"},"Register"),a.a.createElement("div",{className:"dropdown-divider"}),a.a.createElement("a",{className:"dropdown-item",href:"#"},"Help")))))),a.a.createElement("nav",{id:"navbar-small",class:"navbar navbar-expand-md navbar-dark bg-dark fixed-top bg-brc"},a.a.createElement(o.Link,{className:"navbar-brand",to:"/"},a.a.createElement("img",{id:"logo",src:s.a})),a.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},a.a.createElement("ul",{className:"navbar-nav mr-auto"},a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.Link,{className:"nav-link",to:"/organisms"},"Organisms")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.Link,{className:"nav-link",to:"/tools"},"Tools")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.Link,{className:"nav-link",to:"/calendar"},"Calendar")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.Link,{className:"nav-link",to:"/publications"},"Publications")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.Link,{className:"nav-link",to:"/metrics"},"Usage Metrics")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.Link,{className:"nav-link",to:"/about"},"About")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.Link,{className:"nav-link",to:"/contact"},"Contact"))),a.a.createElement("ul",{className:"navbar-nav"},a.a.createElement("li",{className:"nav-item dropdown"},a.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},a.a.createElement("i",{className:"fas fa-user-circle"})),a.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdown"},a.a.createElement("a",{className:"dropdown-item",href:"#"},"Login"),a.a.createElement("a",{className:"dropdown-item",href:"#"},"Register"),a.a.createElement("div",{className:"dropdown-divider"}),a.a.createElement("a",{className:"dropdown-item",href:"#"},"Help")))))))};u.defaultProps={siteTitle:""};var m=u,f=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h5",null,"Event Calendar"),a.a.createElement("iframe",{src:"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=YnJjZ2F0ZXdheUBnbWFpbC5jb20&src=Y19xbG9ncGFwYnViZmh1M2c3cmgzZWsyODlhY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YnZicmMxQGdtYWlsLmNvbQ&color=%23039BE5&color=%2333B679&color=%230B8043&mode=AGENDA",width:"300",height:"325",frameborder:"0",scrolling:"no"}))},d=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("a",{class:"twitter-timeline","data-height":"600",href:"https://twitter.com/BrcGateway/lists/brc-gateway?ref_src=twsrc%5Etfw"},"A Twitter List by BrcGateway")," ",a.a.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}))},p=n("AK4J"),b=n.n(p),h=n("8rOj"),v=n.n(h),g=n("8cbR"),y=n.n(g),T=n("GTgn"),E=n.n(T),w=n("u09z"),A=n.n(w),k=n("jrTw"),C=n.n(k),O=function(e){e.siteTitle;return a.a.createElement("footer",{class:"footer mt-auto py-4"},a.a.createElement("div",{class:"container-fluid"},a.a.createElement("div",{class:"row align-items-center"},a.a.createElement("div",{class:"col-md-3 col-xl-2 mb-3 mb-md-0"},a.a.createElement("img",{class:"img-fluid brand",src:b.a})),a.a.createElement("div",{class:"col-md-6 col-xl-8 mb-2 mb-md-0"},a.a.createElement("div",{class:"partner-line"},a.a.createElement("img",{class:"align-middle mb-2 mt-4 mt-md-2",src:v.a}),a.a.createElement("img",{class:"align-middle mb-2 mt-4 mt-md-2",src:y.a}),a.a.createElement("img",{class:"align-middle mb-2 mt-4 mt-md-2",src:E.a}),a.a.createElement("img",{class:"align-middle mb-2 mt-4 mt-md-2",src:A.a}),a.a.createElement("img",{class:"align-middle mb-2 mt-4 mt-md-2",src:C.a}))),a.a.createElement("div",{class:"col-md-3 col-xl-2"},a.a.createElement("div",{class:"tw-text-right pr-3"},"© 2020 The BRC Project Team")))))};t.a=function(e){var t,n=e.children,r=Object(o.useStaticQuery)("3649515864");return a.a.createElement(a.a.Fragment,null,a.a.createElement(m,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.a.createElement("div",null,a.a.createElement("main",{role:"main"},a.a.createElement("div",{class:"container-fluid max-1600"},a.a.createElement("div",{class:"row"},a.a.createElement("div",{class:"col-md-8 col-lg-9 px-5 pt-3"},n),a.a.createElement("div",{class:"col-md-4 col-lg-3 news-col mt-4"},a.a.createElement(f,null),a.a.createElement("hr",null),a.a.createElement(d,null)))))),a.a.createElement(O,null))}},GTgn:function(e,t,n){e.exports=n.p+"static/upenn-logo-8ddd25d363643d632b0414bffbf7b3b1.png"},"Iu+6":function(e,t,n){},MHGr:function(e,t,n){},URgk:function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,a=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(a.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new o(a.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},YBdB:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,a,o,i,c,l=1,s={},u=!1,m=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){p(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){p(e.data)},r=function(e){o.port2.postMessage(e)}):m&&"onreadystatechange"in m.createElement("script")?(a=m.documentElement,r=function(e){var t=m.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):r=function(e){setTimeout(p,0,e)}:(i="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(i)&&p(+t.data.slice(i.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),r=function(t){e.postMessage(i+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return s[l]=a,r(l),l++},f.clearImmediate=d}function d(e){delete s[e]}function p(e){if(u)setTimeout(p,0,e);else{var t=s[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{d(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(n&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],i[s[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},jrTw:function(e,t,n){e.exports=n.p+"static/nd-logo-631500ae488f6bbbaaabfb6d21c5b424.png"},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return be}));var r,a,o,i,c=n("17x9"),l=n.n(c),s=n("8+s/"),u=n.n(s),m=n("ZhWT"),f=n.n(m),d=n("q1tI"),p=n.n(d),b=n("YVoz"),h=n.n(b),v="bodyAttributes",g="htmlAttributes",y="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(T).map((function(e){return T[e]})),"charset"),w="cssText",A="href",k="http-equiv",C="innerHTML",O="itemprop",N="name",S="property",L="rel",j="src",x="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",M="defer",_="encodeSpecialCharacters",B="onChangeClientState",R="titleTemplate",Y=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),F=[T.NOSCRIPT,T.SCRIPT,T.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=$(e,T.TITLE),n=$(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,P);return t||r||void 0},K=function(e){return $(e,B)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===L&&"canonical"===e[n].toLowerCase()||l===L&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==w&&c!==O||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=h()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,f=e.titleAttributes;le(T.BODY,r),le(T.HTML,a),ce(m,f);var d={baseTag:se(T.BASE,n),linkTags:se(T.LINK,o),metaTags:se(T.META,i),noscriptTags:se(T.NOSCRIPT,c),scriptTags:se(T.SCRIPT,s),styleTags:se(T.STYLE,u)},p={},b={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(b[e]=d[e].oldTags)})),t&&t(),l(e,p,b)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(T.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var m=o.length-1;m>=0;m--)n.removeAttribute(o[m]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=me(n,r),[p.a.createElement(T.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case g:return{toComponent:function(){return me(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===C||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,f=e.titleAttributes;return{base:fe(T.BASE,t,r),bodyAttributes:fe(v,n,r),htmlAttributes:fe(g,a,r),link:fe(T.LINK,o,r),meta:fe(T.META,i,r),noscript:fe(T.NOSCRIPT,c,r),script:fe(T.SCRIPT,l,r),style:fe(T.STYLE,s,r),title:fe(T.TITLE,{title:m,titleAttributes:f},r)}},pe=u()((function(e){return{baseTag:V([A,x],e),bodyAttributes:J(v,e),defer:$(e,M),encode:$(e,_),htmlAttributes:J(g,e),linkTags:Q(T.LINK,[L,A],e),metaTags:Q(T.META,[N,E,k,S,O],e),noscriptTags:Q(T.NOSCRIPT,[C],e),onChangeClientState:K(e),scriptTags:Q(T.SCRIPT,[j,C],e),styleTags:Q(T.STYLE,[w],e),title:Z(e),titleAttributes:J(y,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),be=(a=pe,i=o=function(e){function t(){return H(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return z({},a,((t={})[r.type]=i,t.titleAttributes=z({},o),t));case T.BODY:return z({},a,{bodyAttributes:z({},o)});case T.HTML:return z({},a,{htmlAttributes:z({},o)})}return z({},a,((n={})[r.type]=z({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Y[n]||n]=e[n],t}),t)}(U(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.a.createElement(a,r)},q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);be.renderStatic=be.rewind}).call(this,n("yLpj"))},"rL/g":function(e,t,n){},rMck:function(e,t,n){},u09z:function(e,t,n){e.exports=n.p+"static/uga-logo-7a89a1d16f0c5c0bdc130ab5055dc235.png"},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("Wbzz");function c(e){var t,n,r=e.description,c=e.lang,l=e.meta,s=e.title,u=Object(i.useStaticQuery)("63159454").site,m=r||u.siteMetadata.description,f=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return a.a.createElement(o.a,{htmlAttributes:{lang:c},title:s,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=u.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(l)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c}}]);
//# sourceMappingURL=commons-048bed6b86f434607ae4.js.map