if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const s=e=>n(e,t),f={module:{uri:t},exports:c,require:s};i[t]=Promise.all(o.map((e=>f[e]||s(e)))).then((e=>(r(...e),c)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"908ca1ca26bc32f56d8f.main.bundle.js",revision:null},{url:"908ca1ca26bc32f56d8f.main.bundle.js.LICENSE.txt",revision:"b114cc85da504a772f040e3f40f8e46a"},{url:"favicon.ico",revision:"c67ac1f10eabb886118535f705b026b3"},{url:"index.html",revision:"15f6ed802adaa2f9bf783bbfae96640b"}],{})}));
//# sourceMappingURL=service-worker.js.map
