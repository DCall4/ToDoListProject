(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,":root {\n    --em50: #ecfdf5;\n    --em100: #d1fae5;\n    --em200: #a7f3d0;\n    --em300: #6ee7b7;\n    --em400: #34d399;\n    --em500: #10b981;\n    --em600: #059669;\n    --em700: #047857;\n    --em800: #065f46;\n    --em900: #064e3b;\n}\n\nbody {\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n}\n\n.mainContentDiv {\n    display: flex;\n    width: 100vw;\n}\n\n.header {\n    width: 100vw;\n    height: 5vh;\n    display: flex;\n    background-color: var(--em600);\n}\n\n.leftPanel {\n    width: 25vw;\n    height: 90vh;\n    background-color: var(--em500);\n}\n\n.rightPanel {\n    width: 75vw;\n    height: 90vh;\n    background-color: var(--em200);\n}\n\n.footer {\n    width: 100vw;\n    height: 5vh;\n    text-align: center;\n    background-color: var(--em600);\n}\n\n.taskListDiv {\n    height: 75vh;\n}\n\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),u=n.n(d),l=n(589),p=n.n(l),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;document.querySelector("taskForm"),document.querySelector("taskTitle");const v=document.querySelector("#content"),h=document.createElement("div");h.classList.add("taskContent"),v.appendChild(h),function(e,t){const n=document.querySelector("#content"),r=document.querySelector(".taskContent"),o=document.createElement("form");o.classList.add("taskForm"),n.appendChild(o);const a=document.createElement("input");a.classList.add("input","taskTitle"),a.setAttribute("type","text"),a.setAttribute("placeholder","Add New Task"),o.appendChild(a);const i=document.createElement("input");i.classList.add("input","taskDueDate"),i.setAttribute("type","date"),o.appendChild(i);const c=document.createElement("select");c.classList.add("input","taskProject"),t.forEach((e=>{c.add(new Option(e.text,e.text))})),o.appendChild(c);const s=document.createElement("input");s.classList.add("inputBtn"),s.setAttribute("type","submit"),o.appendChild(s),o.addEventListener("submit",(t=>{t.preventDefault();const n=i.value.trim(),o=a.value.trim();if(""!==o){!function(e,t,n){document.querySelector(".taskListDiv");const r={name:e,date:t,id:Date.now()};n.push(r),console.log(n)}(o,n,e);const t=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div");t.appendChild(c),t.appendChild(i),t.classList.add("task"),i.textContent=o,c.textContent=n,console.log(1),r.appendChild(t),console.log(2),a.value="",a.focus()}}))}([],[])})()})();