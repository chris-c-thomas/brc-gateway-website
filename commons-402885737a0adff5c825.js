(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1Aod":function(e,t,n){e.exports=n.p+"static/brc-logo-min-e150cc7dbffbff43553c37c4e9dc27fb.png"},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},"8cbR":function(e,t,n){e.exports=n.p+"static/jcvi-logo-643ed585f7cd37740aae7ceab009c7e4.png"},"8oxB":function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l,s=[],u=!1,f=-1;function m(){u&&l&&(u=!1,l.length?s=l.concat(s):f=-1,s.length&&d())}function d(){if(!u){var e=c(m);u=!0;for(var t=s.length;t;){for(l=s,s=[];++f<t;)l&&l[f].run();f=-1,t=s.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||u||c(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"8rOj":function(e,t,n){e.exports=n.p+"static/uc-logo-65540533e3d252d37bbef3ed7a002233.gif"},"9HZ2":function(e,t,n){e.exports=n.p+"static/brc-logo-white-d02c6a9578e0f6ff42b32a4ca81b1fd6.png"},AK4J:function(e,t,n){e.exports=n.p+"static/brc-logo-black-01c2c22a1b9cfd2240caf3dd92e1d17d.png"},GTgn:function(e,t,n){e.exports=n.p+"static/upenn-logo-8ddd25d363643d632b0414bffbf7b3b1.png"},"Iu+6":function(e,t,n){},JwsL:function(e,t,n){"use strict";n("Wbzz");var r=n("q1tI"),a=n.n(r),i=n("AK4J"),o=n.n(i),c=n("8rOj"),l=n.n(c),s=n("8cbR"),u=n.n(s),f=n("GTgn"),m=n.n(f),d=n("u09z"),p=n.n(d),h=n("jrTw"),b=n.n(h),g=n("tkc1"),y=n.n(g),v=n("raL5"),T=n.n(v);t.a=function(e){e.siteTitle;return a.a.createElement("footer",{class:"footer mt-auto py-4"},a.a.createElement("div",{class:"container-fluid"},a.a.createElement("div",{class:"row align-items-center"},a.a.createElement("div",{class:"col-md-3 col-xl-2 mb-3 mb-md-0"},a.a.createElement("img",{class:"img-fluid brand",src:o.a})),a.a.createElement("div",{class:"col-md-6 col-xl-8 mb-2 mb-md-0"},a.a.createElement("div",{class:"partner-line"},a.a.createElement("img",{class:"align-middle mb-2 mt-4 mt-md-2",src:l.a}),a.a.createElement("img",{class:"align-middle mb-2 mt-4 mt-md-2",src:u.a}),a.a.createElement("img",{class:"align-middle mb-2 mt-4 mt-md-2",src:m.a}),a.a.createElement("img",{class:"align-middle mb-2 mt-4 mt-md-2",src:p.a}),a.a.createElement("img",{class:"align-middle mb-2 mt-4 mt-md-2",src:b.a}),a.a.createElement("img",{class:"align-middle mb-2 mt-4 mt-md-2",src:y.a}),a.a.createElement("img",{class:"align-middle mb-2 mt-4 mt-md-2",src:T.a}))),a.a.createElement("div",{class:"col-md-3 col-xl-2"},a.a.createElement("div",{class:"tw-text-right pr-3"},"© 2020 The BRC Project Team")))))}},MHGr:function(e,t,n){},URgk:function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,a=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(a.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(a.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},VsrT:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h5",null,"Twitter List by"," ",a.a.createElement("a",{href:"https://twitter.com/i/lists/1319290212527165440",target:"_blank"},"BRCGateway")),a.a.createElement("a",{class:"twitter-timeline","data-height":"600","data-chrome":"noheader nofooter",href:"https://twitter.com/BrcGateway/lists/brc-gateway?ref_src=twsrc%5Etfw"},"A Twitter List by BRCGateway")," ",a.a.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}))}},YBdB:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,a,i,o,c,l=1,s={},u=!1,f=e.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(e);m=m&&m.setTimeout?m:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){p(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){p(e.data)},r=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(a=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):r=function(e){setTimeout(p,0,e)}:(o="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&p(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),r=function(t){e.postMessage(o+t,"*")}),m.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return s[l]=a,r(l),l++},m.clearImmediate=d}function d(e){delete s[e]}function p(e){if(u)setTimeout(p,0,e);else{var t=s[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{d(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var c,l,s,u;if(Array.isArray(t)){if((c=t.length)!=o.length)return!1;for(l=c;0!=l--;)if(!e(t[l],o[l]))return!1;return!0}if(r&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],o.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((c=t.length)!=o.length)return!1;for(l=c;0!=l--;)if(t[l]!==o[l])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,s[l]))return!1;if(n&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],o[s[l]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},jrTw:function(e,t,n){e.exports=n.p+"static/nd-logo-631500ae488f6bbbaaabfb6d21c5b424.png"},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));var r,a,i,o,c=n("17x9"),l=n.n(c),s=n("8+s/"),u=n.n(s),f=n("ZhWT"),m=n.n(f),d=n("q1tI"),p=n.n(d),h=n("YVoz"),b=n.n(h),g="bodyAttributes",y="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",A="href",O="http-equiv",k="innerHTML",C="itemprop",S="name",L="property",j="rel",x="src",I="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",M="defer",_="encodeSpecialCharacters",R="onChangeClientState",D="titleTemplate",B=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),q=[T.NOSCRIPT,T.SCRIPT,T.STYLE],z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Q(e,T.TITLE),n=Q(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,P);return t||r||void 0},V=function(e){return Q(e,R)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],l=c.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==k&&c!==E&&c!==C||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],l=b()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;le(T.BODY,r),le(T.HTML,a),ce(f,m);var d={baseTag:se(T.BASE,n),linkTags:se(T.LINK,i),metaTags:se(T.META,o),noscriptTags:se(T.NOSCRIPT,c),scriptTags:se(T.SCRIPT,s),styleTags:se(T.STYLE,u)},p={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,p,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),le(T.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},se=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[p.a.createElement(T.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case y:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===k||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===k||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(T.BASE,t,r),bodyAttributes:me(g,n,r),htmlAttributes:me(y,a,r),link:me(T.LINK,i,r),meta:me(T.META,o,r),noscript:me(T.NOSCRIPT,c,r),script:me(T.SCRIPT,l,r),style:me(T.STYLE,s,r),title:me(T.TITLE,{title:f,titleAttributes:m},r)}},pe=u()((function(e){return{baseTag:Z([A,I],e),bodyAttributes:J(g,e),defer:Q(e,M),encode:Q(e,_),htmlAttributes:J(y,e),linkTags:$(T.LINK,[j,A],e),metaTags:$(T.META,[S,w,O,L,C],e),noscriptTags:$(T.NOSCRIPT,[k],e),onChangeClientState:V(e),scriptTags:$(T.SCRIPT,[x,k],e),styleTags:$(T.STYLE,[E],e),title:G(e),titleAttributes:J(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),de)((function(){return null})),he=(a=pe,o=i=function(e){function t(){return H(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case T.TITLE:return Y({},a,((t={})[r.type]=o,t.titleAttributes=Y({},i),t));case T.BODY:return Y({},a,{bodyAttributes:Y({},i)});case T.HTML:return Y({},a,{htmlAttributes:Y({},i)})}return Y({},a,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(U(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.a.createElement(a,r)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.a.Component),i.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind}).call(this,n("yLpj"))},"rL/g":function(e,t,n){},rMck:function(e,t,n){},rY4l:function(e,t,n){"use strict";var r=n("Wbzz"),a=n("q1tI"),i=n.n(a),o=n("9HZ2"),c=n.n(o),l=n("1Aod"),s=n.n(l),u=function(e){e.siteTitle;return i.a.createElement("header",null,i.a.createElement("nav",{id:"navbar",className:"navbar navbar-expand-md navbar-dark bg-dark bg-brc align-items-end"},i.a.createElement(r.Link,{className:"navbar-brand",to:"/"},i.a.createElement("img",{id:"logo",src:c.a})),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},i.a.createElement("ul",{className:"navbar-nav mr-auto"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.Link,{className:"nav-link",to:"/about"},"About")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.Link,{className:"nav-link",to:"/taxa"},"Taxa")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.Link,{className:"nav-link",to:"/tools"},"Tools")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.Link,{className:"nav-link",to:"/outreach"},"Outreach")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.Link,{className:"nav-link",to:"/publications"},"Publications"))))),i.a.createElement("nav",{id:"navbar-small",class:"navbar navbar-expand-md navbar-dark bg-dark fixed-top bg-brc"},i.a.createElement(r.Link,{className:"navbar-brand",to:"/"},i.a.createElement("img",{id:"logo",src:s.a})),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},i.a.createElement("ul",{className:"navbar-nav mr-auto"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.Link,{className:"nav-link",to:"/about"},"About")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.Link,{className:"nav-link",to:"/taxa"},"Taxa")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.Link,{className:"nav-link",to:"/tools"},"Tools")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.Link,{className:"nav-link",to:"/outreach"},"Outreach")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.Link,{className:"nav-link",to:"/publications"},"Publications"))))))};u.defaultProps={siteTitle:""},t.a=u},raL5:function(e,t,n){e.exports=n.p+"static/uva-logo-c2e7509bce924caad143cabd43023ab3.png"},tkc1:function(e,t,n){e.exports=n.p+"static/fig-logo-22e25a5f4e144e8555290f2db9dc30aa.png"},u09z:function(e,t,n){e.exports=n.p+"static/uga-logo-822b90c9718edd9bc14ec857e10a3d6e.png"},uP3y:function(e,t,n){"use strict";var r=n("KQm4"),a=n("Wbzz"),i=n("q1tI"),o=n.n(i),c={month:"short",year:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"};t.a=function(){var e=Object(i.useState)(null),t=e[0],n=e[1],l=Object(i.useState)(null),s=l[0],u=l[1];Object(i.useEffect)((function(){Promise.all([f("bvbrc1@gmail.com"),f("c_qlogpapbubfhu3g7rh3ek289ac@group.calendar.google.com")]).then((function(e){var t=e[0],a=e[1],i=[].concat(Object(r.a)(t),Object(r.a)(a)).sort((function(e,t){return new Date(e.start.dateTime||e.start.date)-new Date(t.start.dateTime||t.start.date)})).slice(0,3);n(i)})).catch((function(e){return u(e)}))}),[]);var f=function(e){var t=(new Date).toISOString();return fetch(function(e){return"https://www.googleapis.com/calendar/v3/calendars/"+e+"/events?key=AIzaSyCiCvVI748zL5OQANeAO-iGpAQemdXfhug&singleEvents=true&calendarID=primary"}(e)+"&timeMin="+t+"&maxResults=3&orderBy=startTime").then((function(e){return e.json()})).then((function(e){return e.items}))};return o.a.createElement("div",{className:"p-2"},o.a.createElement("h5",null,"Upcoming Events"),t&&o.a.createElement("ul",null,t.map((function(e,t){var n=e.description,r=void 0===n?"":n,a=e.summary,i=e.start,l=e.end,s=e.htmlLink;return o.a.createElement("li",{key:t},o.a.createElement("h6",{className:"mb-1"},o.a.createElement("a",{href:s,target:"_blank"},a,o.a.createElement("i",{class:"fas fa-external-link-alt",style:{position:"absolute",marginLeft:"5px"}}))),o.a.createElement("b",{style:{fontSize:"0.9em"}},function(e,t){var n=Object.assign({},c),r=e.dateTime,a=e.date;!r&&a&&((a=new Date(a)).setDate(a.getDate()+1),delete n.hour,delete n.minute);var i=""+new Date(r||a).toLocaleString("en-US",n),o=new Date(a).getDate(),l=new Date(t.date).getDate()>o?""+new Date(t.dateTime||t.date).toLocaleString("en-US",n):null;return i+" "+(l?" - "+l:"")}(i,l)),o.a.createElement("p",{style:{fontSize:"0.9em"}},r.slice(0,100)+(r.length>100?"... ":" "),o.a.createElement("a",{href:s,target:"_blank"},"read more",o.a.createElement("i",{class:"fas fa-external-link-alt"}))))}))),s&&"There was an issue fetching the calendar summary.",o.a.createElement(a.Link,{to:"/outreach#calendar",className:"btn btn-outline-dark rounded-pill"},"All Events »"))}}}]);
//# sourceMappingURL=commons-402885737a0adff5c825.js.map