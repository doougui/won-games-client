if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/435-3d1c95c622390db9.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/556-de5e1465620f2405.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/558-6771fcf4cf9db74e.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/651.e7ad805f32a091cd.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/812-a883981705469f77.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/970-273e47e3855f2aec.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/977-d6256b2efffd2919.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/framework-b722cb43edd06f4c.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/main-b89e7c6359538933.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/pages/404-6e2438b9abc2b2c1.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/pages/_app-55377913eb93eec8.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/pages/_error-1f95674706ce531a.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/pages/cart-9caaa6fb4d4169a8.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/pages/game/%5Bslug%5D-f5df985ddd5e9c1e.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/pages/games-896098cec48cc888.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/pages/index-b620bce024427fa0.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/pages/profile/cards-4d959587f8c0cc89.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/pages/profile/me-8196107ec626ef91.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/pages/profile/orders-f8298ce79530966b.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/pages/sign-in-a9229f354e80b758.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/pages/sign-up-7184bece06eb765d.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/pages/wishlist-38b8049c0d2577e8.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/chunks/webpack-16f0e762c5fbd4a6.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/sCT6TY2F9Zm7qEhpYTSgM/_buildManifest.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/sCT6TY2F9Zm7qEhpYTSgM/_middlewareManifest.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/_next/static/sCT6TY2F9Zm7qEhpYTSgM/_ssgManifest.js",revision:"sCT6TY2F9Zm7qEhpYTSgM"},{url:"/fonts/poppins-v15-latin-300.woff2",revision:"9ddc04912d6e8f88d9de4045b8b89c59"},{url:"/fonts/poppins-v15-latin-600.woff2",revision:"087457026965f98466618a478c4b1b07"},{url:"/fonts/poppins-v15-latin-regular.woff2",revision:"9ed361bba8488aeb2797b82befda20f1"},{url:"/img/auth-bg.jpg",revision:"ec8b80494e82daf31e8eb45a901cc81a"},{url:"/img/dots.svg",revision:"cf36a46d8d3511767e9e09c00049d8a4"},{url:"/img/empty.svg",revision:"a9187a961da22235147658031f5c58ec"},{url:"/img/empty.svg:Zone.Identifier",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/img/games/cyberpunk-1.jpg",revision:"ebb79d50cc3f3093b8d5f02f208e4b75"},{url:"/img/games/cyberpunk-2.jpg",revision:"db003beca0cbd041f72169e7bbc15738"},{url:"/img/games/cyberpunk-3.jpg",revision:"0be8360d5c36625d525bfcb4dfa6c902"},{url:"/img/games/cyberpunk-4.jpg",revision:"cdd639ad5963b917a9a0452832b64d5d"},{url:"/img/games/cyberpunk-5.jpg",revision:"0a9b8e6c5073192b46ff66e77e12d280"},{url:"/img/games/cyberpunk-6.jpg",revision:"288eba96166f6032e47bb9bca59a2b68"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/img/master-card.png",revision:"946c8005c04b0b2925438166d9965275"},{url:"/img/red-dead-float.png",revision:"3a214fab27713e63b4858f1599b92b28"},{url:"/img/red-dead-img.jpg",revision:"333ff67868c12dfa9c8989df2cd8f383"},{url:"/img/visa.png",revision:"7e4d08a69de539a743c91a1f009f8b11"},{url:"/manifest.json",revision:"2b19621eb00c338ee252b1c8dda19b2a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
