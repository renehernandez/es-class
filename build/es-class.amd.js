/*! (C) Andrea Giammarchi - MIT Style License */
define(function(){var e=e||function(e){"use strict";function v(e,t,n){for(var r,s=[],o=0;o<e.length;o++)r=e[o],l.call(r,i)&&s.push(r[i]),m(r,t,n,!1,!1);return s}function m(e,t,n,r,i){var s,o;for(s in e)if(y(s,i)&&l.call(e,s)){if(l.call(t,s))try{console.warn("duplicated: "+s)}catch(u){}b(n,t,s,e[s],r)}if(f)for(o=0;o<a.length;o++)s=a[o],l.call(e,s)&&b(n,t,s,e[s],r)}function g(e,t,n,r){return h(e,t,{enumerable:r,configurable:!r,writable:!r,value:n})}function y(e,u){return e!==t&&e!==n&&e!==r&&e!==o&&e!==s&&(u||e!==i)}function b(e,t,n,r,i){if(i){if(l.call(t,n))return t}else typeof r=="function"&&p.test(r)&&(r=w(e,t,n,r,i));return g(t,n,r,i)}function w(e,t,n,r,i){return function(){l.call(this,u)||g(this,u,null,i);var t=this[u],s=this[u]=e[n],o=r.apply(this,arguments);return this[u]=t,o}}var t="constructor",n="extends",r="with",i="init",s="prototype",o="static",u="super",a=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],f=!{valueOf:0}[a[2]](a[5]),l=e[a[0]],c=e.create||function(e){var t=this instanceof c;return c[s]=t?null:e,t?this:new c},h=e.defineProperty,p=/create/.test(function(){c()})?/\bsuper\b/:/.*/;try{h({},"{}",{})}catch(d){h=function(e,t,n){return e[t]=n.value,e}}return function(e){var i=l.call(e,t),u=i?e[t]:function(){},a=l.call(e,n),f=a&&e[n],h=a&&typeof f=="function"?f[s]:f,p=a?b(h,c(h),t,u,!1):u[s],d,g;return l.call(e,o)&&m(e[o],u,h,!0,!0),a&&(f!==h&&m(f,u,h,!0,!0),u[s]=p),l.call(e,r)&&(d=v([].concat(e[r]),p,h),g=d.length,g&&(u=function(e){return function(){var t=0;while(t<g)d[t++].call(this);return e.apply(this,arguments)}}(u),u[s]=p)),m(e,p,h,!1,!0),u}}(Object);return e});