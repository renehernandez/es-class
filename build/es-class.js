/*! (C) Andrea Giammarchi - MIT Style License */
var Class=Class||function(e){"use strict";function y(e,t,n){for(var r,s=[],o=0;o<e.length;o++)r=e[o],c.call(r,i)&&s.push(r[i]),b(r,t,n,!1,!1);return s}function b(e,t,n,r,i){var s,o;for(s in e)E(s,i)&&c.call(e,s)&&(c.call(t,s)&&T("duplicated: "+s),S(n,t,s,v(e,s),r));if(l)for(o=0;o<f.length;o++)s=f[o],c.call(e,s)&&S(n,t,s,v(e,s),r)}function w(e,t,n,r){d(e,t,{enumerable:r,configurable:!r,writable:!r,value:n})}function E(e,f){return e!==t&&e!==n&&e!==r&&e!==s&&e!==o&&e!==u&&e!==a&&(f||e!==i)}function S(e,t,n,r,i){var s=c.call(r,"value"),o;if(i){if(c.call(t,n))return}else s?(o=r.value,typeof o=="function"&&m.test(o)&&(r.value=N(e,n,o,i))):(C(e,n,r,"get"),C(e,n,r,"set"));r.enumerable=i,r.configurable=!i,s&&(r.writable=!i),d(t,n,r)}function x(e,t){for(var n,r,i=0;i<e.length;i++){n=e[i];for(r in n)c.call(n,r)&&!c.call(t,r)&&T(r+" is not implemented")}}function T(e){try{console.warn(e)}catch(t){}}function N(e,t,n,r){return function(){c.call(this,u)||w(this,u,null,r);var i=this[u],s=this[u]=e[t],o=n.apply(this,arguments);return this[u]=i,o}}function C(e,t,n,r,i){c.call(n,r)&&m.test(n[r])&&(n[r]=N(v(e,t),r,n[r],i))}var t="constructor",n="extends",r="implements",i="init",s="prototype",o="static",u="super",a="with",f=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],l=!{valueOf:0}[f[2]](f[5]),c=e[f[0]],h=e.create||function(e){var t=this instanceof h;return h[s]=t?p:e,t?this:new h},p=h[s],d=e.defineProperty,v=e.getOwnPropertyDescriptor||function(e,t){return{value:e[t]}},m=/\bsuper\b/.test(function(){this["super"]()})?/\bsuper\b/:/.*/;try{d({},"{}",{})}catch(g){d=function(e,t,n){return e[t]=n.value,e}}return function(e){var i=c.call(e,t),u=c.call(e,n),f=u&&e[n],l=u&&typeof f=="function",p=l?f[s]:f,d=i?e[t]:u&&l?function(){return f.apply(this,arguments)}:function(){},v=u&&i&&m.test(d),g=u?h(p):d[s],E,S;return v&&(d=N(p,t,d,!1)),c.call(e,a)&&(E=y([].concat(e[a]),g,p),S=E.length,S&&(d=function(e){return function(){var t=0;while(t<S)E[t++].call(this);return e.apply(this,arguments)}}(d),d[s]=g)),c.call(e,o)&&b(e[o],d,p,!0,!0),u&&(f!==p&&b(f,d,p,!0,!0),d[s]=g),g[t]!==d&&w(g,t,d,!1),b(e,g,p,!1,!0),c.call(e,r)&&x([].concat(e[r]),g),d}}(Object);