!function(){"use strict";var e,t,r,n,c={},o={};function a(e){if(o[e])return o[e].exports;var t=o[e]={exports:{}};return c[e].call(t.exports,t,t.exports,a),t.exports}a.m=c,a.x=function(){},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var c=Object.create(null);a.r(c);var o={};e=e||[null,t({}),t([]),t(t)];for(var u=2&n&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){o[e]=function(){return r[e]}}));return o.default=function(){return r},a.d(c,o),c},a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,r){return a.f[r](e,t),t}),[]))},a.u=function(e){return"voucher/"+e+"."+{23:"c7df4f59c60e6ce5f9a3",31:"ba227a9c2c0f6d56d61b",175:"709cedb13aea735e920a",181:"db1e038dadd4bc7f6034",253:"66f4c91b01631cf0cd32",273:"626c51803d8fe171f868",372:"704cc0cb68f96c062f47",453:"c1bdeb8b16f32e3c81a5",480:"f15f6508ede8c9ce954e",550:"587f8b1ea2f40013b07a",552:"316b0770785a456779fa",710:"464bf0145ff012ab7fa3",746:"5e44bf37417ac0b5f80a",792:"3d10678e5b830ddc3441",941:"a449198ac6583a8630a8"}[e]+".legacy.js"},a.miniCssF=function(e){return"voucher/"+({80:"pcmall-voucherwallet",323:"pcmall-recommendcartvoucherspc",455:"pcmall-sellervoucher",518:"pcmall-pcpagevoucherdetail",556:"pcmall-productshopvouchers",607:"pcmall-voucherwalletmodalpc",614:"pcmall-sellervoucherlist",673:"pcmall-recommendshopvoucherlistpc",732:"pcmall-voucherproductfocusedui",951:"pcmall-productshopvoucher",978:"pcmall-voucherwalletvoucherpreview"}[e]||e)+"."+{80:"fe485ecabded116298b4",185:"a3bfd8f50e57fc9d4eac",323:"e9c007ceda09ccf92423",455:"a10ada51e560c18e2f56",518:"9582823b41644b78edc4",556:"e9e4e963c08c41c08d52",607:"e3e81bb8db38f0ac7ff1",614:"b9ffe17d9bcdb1c83378",673:"87b0ff346bf5722d7111",732:"025b5a895c7081928ae4",951:"d6121fcaaa102d2a6eed",978:"f42adb1d7e84e7ab1b81"}[e]+".legacy.css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},n="@shopee/voucher-pc:",a.l=function(e,t,c,o){if(r[e])r[e].push(t);else{var u,f;if(void 0!==c)for(var l=document.getElementsByTagName("script"),i=0;i<l.length;i++){var p=l[i];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+c){u=p;break}}u||(f=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",n+c),u.src=e),r[e]=[t];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(s);var c=r[e];if(delete r[e],u.parentNode&&u.parentNode.removeChild(u),c&&c.forEach((function(e){return e(n)})),t)return t(n)},s=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),f&&document.head.appendChild(u)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},self["mfeStartuppcmall-pcpagevoucherdetail"]=function(){var e=a.x;a.x=function(){var t=self.mfeModules=self.mfeModules||[];(t.s=t.s||[]).push(["pcmall-pcpagevoucherdetail",a]),e&&e(),a.x=function(){}}},a.p="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/",function(){var e={666:0},t=[];a.f.j=function(t,r){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var c=new Promise((function(r,c){n=e[t]=[r,c]}));r.push(n[2]=c);var o=a.p+a.u(t),u=new Error;a.l(o,(function(r){if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var c=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+c+": "+o+")",u.name="ChunkLoadError",u.type=c,u.request=o,n[1](u)}}),"chunk-"+t,t)}};var r=function(){},n=function(n,c){for(var o,u,f=c[0],l=c[1],i=c[2],p=c[3],d=0,s=[];d<f.length;d++)u=f[d],a.o(e,u)&&e[u]&&s.push(e[u][0]),e[u]=0;for(o in l)a.o(l,o)&&(a.m[o]=l[o]);for(i&&i(a),n&&n(c);s.length;)s.shift()();return p&&t.push.apply(t,p),r()},c=self.wpJsonpPcmallPcpagevoucherdetail=self.wpJsonpPcmallPcpagevoucherdetail||[];function o(){for(var r,n=0;n<t.length;n++){for(var c=t[n],o=!0,u=1;u<c.length;u++){var f=c[u];0!==e[f]&&(o=!1)}o&&(t.splice(n--,1),r=a(a.s=c[0]))}return 0===t.length&&(a.x(),a.x=function(){}),r}c.forEach(n.bind(null,0)),c.push=n.bind(null,c.push.bind(c));var u=a.x;a.x=function(){return a.x=u||function(){},(r=o)()}}(),a.x()}();