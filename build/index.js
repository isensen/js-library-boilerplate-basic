/*!
 * 
 *   @hodgef/js-library-boilerplate-basic v1.5.79
 *   https://github.com/hodgef/js-library-boilerplate-basic
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.MyLibrary=n():e.MyLibrary=n()}(self,(function(){return(()=>{"use strict";var e={424:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(15),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),u=t(204),f=i()(o()),A=s()(u.Z);f.push([e.id,"html,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  height: 100%;\n}\n\nh1 {\n  margin: 0;\n  font-weight: 300;\n}\n\n#root {\n  background: url("+A+") no-repeat 98% 2%;\n  padding: 20px;\n  height: 100%;\n  box-sizing: border-box;\n}\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;;EAEE,SAAS;EACT,UAAU;EACV,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,oEAA6C;EAC7C,aAAa;EACb,YAAY;EACZ,sBAAsB;AACxB",sourcesContent:['html,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  height: 100%;\n}\n\nh1 {\n  margin: 0;\n  font-weight: 300;\n}\n\n#root {\n  background: url("image.png") no-repeat 98% 2%;\n  padding: 20px;\n  height: 100%;\n  box-sizing: border-box;\n}\n'],sourceRoot:""}]);const l=f},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},15:e=>{function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==t)return;var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var t=n(e,4),r=t[1],o=t[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),c="/*# ".concat(i," */"),s=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[r].concat(s).concat([c]).join("\n")}return[r].join("\n")}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},695:e=>{var n={};e.exports=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],f=a[u]||0,A="".concat(u," ").concat(f);a[u]=f+1;var l=t(A),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==l?(n[l].references++,n[l].updater(d)):n.push({identifier:A,updater:o(d,r),references:1}),i.push(A)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var f=t(a[u]);0===n[f].references&&(n[f].updater(),n.splice(f,1))}a=s}}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},204:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{t.r(r),t.d(r,{default:()=>l});var e=t(379),n=t.n(e),o=t(795),a=t.n(o),i=t(695),c=t.n(i),s=t(216),u=t.n(s),f=t(424),A={styleTagTransform:function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}},setAttributes:function(e){var n=t.nc;n&&e.setAttribute("nonce",n)},insert:function(e){var n=c()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}};A.domAPI=a(),A.insertStyleElement=u();n()(f.Z,A);f.Z&&f.Z.locals&&f.Z.locals;const l=function e(){var n,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(){console.log("Library method fired")},(t="myMethod")in(n=this)?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,console.log("Library constructor loaded")}})(),r})()}));
//# sourceMappingURL=index.js.map