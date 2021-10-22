/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f1d382489278c3807b48fdc1b20a2ce2"
  },
  {
    "url": "assets/css/0.styles.a700039a.css",
    "revision": "8c87fad0d092a3446e25f7073efb1484"
  },
  {
    "url": "assets/img/01.0001bc95.jpg",
    "revision": "0001bc95eced78ff779b5343f4a6000b"
  },
  {
    "url": "assets/img/03.2108fbcf.jpg",
    "revision": "2108fbcfbef8672770cb358db540e044"
  },
  {
    "url": "assets/img/04.a428f20e.jpg",
    "revision": "a428f20e17f6fc53bd80ce4d8aabd498"
  },
  {
    "url": "assets/img/05.9e7a7edf.jpg",
    "revision": "9e7a7edf7f6598bcdfc250846903a2a2"
  },
  {
    "url": "assets/img/06.7e7e406d.jpg",
    "revision": "7e7e406d2a7d800030de5af554b89628"
  },
  {
    "url": "assets/img/07.e1081551.jpg",
    "revision": "e1081551998cd49041caf9a86632d4dc"
  },
  {
    "url": "assets/img/08.ee612bad.jpg",
    "revision": "ee612baddb3f2e09b926c9af6f277e42"
  },
  {
    "url": "assets/img/10.2304d9b6.jpg",
    "revision": "2304d9b61d01771f9d3dfe963853af93"
  },
  {
    "url": "assets/img/11.bdb17e44.jpg",
    "revision": "bdb17e44962fec103994601349007e03"
  },
  {
    "url": "assets/img/12.272f9034.gif",
    "revision": "272f90341f7ae9ed80c66342c04f50ee"
  },
  {
    "url": "assets/img/13.13f865cb.gif",
    "revision": "13f865cbaa34c13bbfb5513eb20f0cb8"
  },
  {
    "url": "assets/img/14.119a9c21.jpg",
    "revision": "119a9c210b294b3790604f0d6ed661be"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/http_method.24d683ae.jpg",
    "revision": "24d683ae3f7ad26118b37aa18e7812b8"
  },
  {
    "url": "assets/img/map_local_1.2dd19c45.jpg",
    "revision": "2dd19c45d69daf1c45508a5b6290d79a"
  },
  {
    "url": "assets/img/map_local_2.6bfd8dc6.jpg",
    "revision": "6bfd8dc62aff8ca0fce2b4844b0a6ef5"
  },
  {
    "url": "assets/img/map_local_3.b315380b.jpg",
    "revision": "b315380bed908eaeeeccc4eeede1b830"
  },
  {
    "url": "assets/img/map_local_4.8459030b.jpg",
    "revision": "8459030b0f070fe7ec5f69051f14e716"
  },
  {
    "url": "assets/img/map_local_5.a166c5b8.jpg",
    "revision": "a166c5b8cf7d77e8a478fe54748c0548"
  },
  {
    "url": "assets/img/map_local_6.266c4f19.jpg",
    "revision": "266c4f19566719854ddf20ede538d2c5"
  },
  {
    "url": "assets/img/map_local_7.e2c92a38.jpg",
    "revision": "e2c92a384a489620f132baad39ed3901"
  },
  {
    "url": "assets/img/map_local_8.72ba408e.jpg",
    "revision": "72ba408ed91ffb0e131662aa9972674c"
  },
  {
    "url": "assets/img/options.4926a7d2.jpg",
    "revision": "4926a7d2ae48187c53e4d55edfc1b9ca"
  },
  {
    "url": "assets/img/rewrite_1.d0989e0a.jpg",
    "revision": "d0989e0abe84b54a0afc79621880ca3d"
  },
  {
    "url": "assets/img/rewrite_2.b3946d2a.jpg",
    "revision": "b3946d2a31226182542db1da37410a0f"
  },
  {
    "url": "assets/img/rewrite_3.65967d42.jpg",
    "revision": "65967d42ec1fc034ee4fef16ef0376e2"
  },
  {
    "url": "assets/img/rewrite_4.229640c9.jpg",
    "revision": "229640c96946d866764ec68f8c8ad8d3"
  },
  {
    "url": "assets/img/rewrite_5.01dfc091.jpg",
    "revision": "01dfc0913002035f93e8f04f2648044b"
  },
  {
    "url": "assets/img/step_3_1.b9fbc8b7.jpg",
    "revision": "b9fbc8b7eb9e0e1a274250f7278da810"
  },
  {
    "url": "assets/img/step_3_2.16c488d5.jpg",
    "revision": "16c488d56e69faa00330c9a4eddcb0c0"
  },
  {
    "url": "assets/img/step_3_3.501c0f52.jpg",
    "revision": "501c0f52a29321636859bad29cfa1342"
  },
  {
    "url": "assets/img/step1.9da31456.png",
    "revision": "9da314562b3628be0daa76e39a708d9f"
  },
  {
    "url": "assets/img/step2.d038750d.jpg",
    "revision": "d038750dcac170cf619bbf8e018ac4a9"
  },
  {
    "url": "assets/js/1.c138208f.js",
    "revision": "604ffc957c0f81b7dcaaaab18a513426"
  },
  {
    "url": "assets/js/10.8cfe542e.js",
    "revision": "8270530270a3fa20219be4753ec169fc"
  },
  {
    "url": "assets/js/11.e7bb0776.js",
    "revision": "b8abb0bbadc73571e3e2edd13c5f86af"
  },
  {
    "url": "assets/js/12.d88cb6fb.js",
    "revision": "714e4153a17464bd0d90db512fce01e9"
  },
  {
    "url": "assets/js/13.3b6d2be0.js",
    "revision": "007ae940b26fb846e1bb3291df36158e"
  },
  {
    "url": "assets/js/14.67cc25f1.js",
    "revision": "c40304b1f9ff76d488801a63108f9a11"
  },
  {
    "url": "assets/js/15.c3c986e8.js",
    "revision": "fb9813c8f389ddee36aeb01da2443f2e"
  },
  {
    "url": "assets/js/16.e982f040.js",
    "revision": "8505bb54ebab3b1792b611d9fefb5b89"
  },
  {
    "url": "assets/js/17.278c72e0.js",
    "revision": "52d7316c55fad694c9c08add354c2778"
  },
  {
    "url": "assets/js/18.0ac68d3e.js",
    "revision": "d8f5dc49bb9b09287340faf53af6b567"
  },
  {
    "url": "assets/js/19.18128d39.js",
    "revision": "95b8e11f565b635c31cce02411e6aa9a"
  },
  {
    "url": "assets/js/20.05aba0ee.js",
    "revision": "30e5ac2b796e08b4e06f83a5cc884b21"
  },
  {
    "url": "assets/js/21.e46c6931.js",
    "revision": "6044cae0f8bda385dfc97aa948043e2b"
  },
  {
    "url": "assets/js/22.a1335d5a.js",
    "revision": "b5258311eaec7ec87eaf48f1e6be3cbc"
  },
  {
    "url": "assets/js/23.6479f48c.js",
    "revision": "2cf43d7b4c0b847a830de781c3e10f81"
  },
  {
    "url": "assets/js/24.df0db3e9.js",
    "revision": "22a932da6c16ab808f8e649e166008cb"
  },
  {
    "url": "assets/js/25.df8578d0.js",
    "revision": "5e9a4c57c8463533f300001a45bceb53"
  },
  {
    "url": "assets/js/26.6bb946b1.js",
    "revision": "b39b68e14f8c05078c5629900c4ce2f8"
  },
  {
    "url": "assets/js/27.6936ba24.js",
    "revision": "a5e73842ebbb10837b2ab75061e17fed"
  },
  {
    "url": "assets/js/28.b9809bfb.js",
    "revision": "254f413cfe2d831447ad590a964cd5d8"
  },
  {
    "url": "assets/js/29.c1c82585.js",
    "revision": "165575a59669a191239e7d2955b8bbe6"
  },
  {
    "url": "assets/js/3.7ff304d2.js",
    "revision": "d20ad67e01ab03726126bcd4085e40bc"
  },
  {
    "url": "assets/js/30.a30ae3db.js",
    "revision": "16837aff41031d206cbba1514c598bde"
  },
  {
    "url": "assets/js/31.4bb8e34b.js",
    "revision": "f048dcf3248dc887e51ee3bebf09d61a"
  },
  {
    "url": "assets/js/32.f1a33f14.js",
    "revision": "8bd7332af42e7d8cc08e0d48b43056c3"
  },
  {
    "url": "assets/js/33.f07c7a3c.js",
    "revision": "1ffdd2492bd105a82451df51d4b763ee"
  },
  {
    "url": "assets/js/34.61736b70.js",
    "revision": "26e6f85ee6bc7e4ab23750aa02f1d6b3"
  },
  {
    "url": "assets/js/35.3e9544ee.js",
    "revision": "827cf2a08b47b425279db82e6e29a81b"
  },
  {
    "url": "assets/js/4.7573dd47.js",
    "revision": "743a7a5f0ac5b9dd67d5d0bb6db1c7d6"
  },
  {
    "url": "assets/js/5.fd09501f.js",
    "revision": "d2165f0caa04efe44da37ee265ac5fba"
  },
  {
    "url": "assets/js/6.52965400.js",
    "revision": "eaac4cb541c9406ff64851b688036a25"
  },
  {
    "url": "assets/js/7.0183effd.js",
    "revision": "ff4db95cda809c968bb2e7a75016ea73"
  },
  {
    "url": "assets/js/8.bd9382c3.js",
    "revision": "7ed48d12583b84ce6f0388d481b2ac11"
  },
  {
    "url": "assets/js/9.2c2e0034.js",
    "revision": "e44898ad134571e9122cf3437f3961ec"
  },
  {
    "url": "assets/js/app.1a945e31.js",
    "revision": "121ba719856636a5faf865955bad3f79"
  },
  {
    "url": "banner.jpg",
    "revision": "135d68dee0086c66d01466c795e0ff3b"
  },
  {
    "url": "categories/Git命令/index.html",
    "revision": "0a24bfafffa190a380a929d9aa37203b"
  },
  {
    "url": "categories/index.html",
    "revision": "87c5aae32a65788850f988171b93b86a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "91bc38aaa0c61f97f728dc869ac9b25a"
  },
  {
    "url": "categories/微信小程序/index.html",
    "revision": "b00fda59b24f3b66d2f7f4f3ddbf6b72"
  },
  {
    "url": "categories/打包工具/index.html",
    "revision": "c96bbb59284858e886a982f74caa75cd"
  },
  {
    "url": "categories/日常生活/index.html",
    "revision": "4a0794106aac849156172855bfc88aa4"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "183707a19ac4464d04b58e2fd77b09dd"
  },
  {
    "url": "head.jpg",
    "revision": "a8876d2cfd547a58b3f0b1e1f0ae1b87"
  },
  {
    "url": "head.png",
    "revision": "a8876d2cfd547a58b3f0b1e1f0ae1b87"
  },
  {
    "url": "img/dailyLife/2020/090401/01.jpg",
    "revision": "0001bc95eced78ff779b5343f4a6000b"
  },
  {
    "url": "img/dailyLife/2020/090401/02.jpg",
    "revision": "9328f4559d6774c9b7740975610b9486"
  },
  {
    "url": "img/dailyLife/2020/090401/03.jpg",
    "revision": "2108fbcfbef8672770cb358db540e044"
  },
  {
    "url": "img/dailyLife/2020/090401/04.jpg",
    "revision": "a428f20e17f6fc53bd80ce4d8aabd498"
  },
  {
    "url": "img/dailyLife/2020/090401/05.jpg",
    "revision": "9e7a7edf7f6598bcdfc250846903a2a2"
  },
  {
    "url": "img/dailyLife/2020/090401/06.jpg",
    "revision": "7e7e406d2a7d800030de5af554b89628"
  },
  {
    "url": "img/dailyLife/2020/090401/07.jpg",
    "revision": "e1081551998cd49041caf9a86632d4dc"
  },
  {
    "url": "img/dailyLife/2020/090401/08.jpg",
    "revision": "ee612baddb3f2e09b926c9af6f277e42"
  },
  {
    "url": "img/dailyLife/2020/090401/09.jpg",
    "revision": "493869e4e8cec6ca9ad5290de7633f29"
  },
  {
    "url": "img/dailyLife/2020/090401/10.jpg",
    "revision": "2304d9b61d01771f9d3dfe963853af93"
  },
  {
    "url": "img/dailyLife/2020/090401/11.jpg",
    "revision": "bdb17e44962fec103994601349007e03"
  },
  {
    "url": "img/dailyLife/2020/090401/12.gif",
    "revision": "272f90341f7ae9ed80c66342c04f50ee"
  },
  {
    "url": "img/dailyLife/2020/090401/13.gif",
    "revision": "13f865cbaa34c13bbfb5513eb20f0cb8"
  },
  {
    "url": "img/dailyLife/2020/090401/14.jpg",
    "revision": "119a9c210b294b3790604f0d6ed661be"
  },
  {
    "url": "img/dailyLife/2020/110201/step_3_1.jpg",
    "revision": "b9fbc8b7eb9e0e1a274250f7278da810"
  },
  {
    "url": "img/dailyLife/2020/110201/step_3_2.jpg",
    "revision": "16c488d56e69faa00330c9a4eddcb0c0"
  },
  {
    "url": "img/dailyLife/2020/110201/step_3_3.jpg",
    "revision": "501c0f52a29321636859bad29cfa1342"
  },
  {
    "url": "img/dailyLife/2020/110201/step1.png",
    "revision": "9da314562b3628be0daa76e39a708d9f"
  },
  {
    "url": "img/dailyLife/2020/110201/step2.jpg",
    "revision": "d038750dcac170cf619bbf8e018ac4a9"
  },
  {
    "url": "img/frontEnd/2020/121601/http_method.jpg",
    "revision": "24d683ae3f7ad26118b37aa18e7812b8"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_1.jpg",
    "revision": "2dd19c45d69daf1c45508a5b6290d79a"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_2.jpg",
    "revision": "6bfd8dc62aff8ca0fce2b4844b0a6ef5"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_3.jpg",
    "revision": "b315380bed908eaeeeccc4eeede1b830"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_4.jpg",
    "revision": "8459030b0f070fe7ec5f69051f14e716"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_5.jpg",
    "revision": "a166c5b8cf7d77e8a478fe54748c0548"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_6.jpg",
    "revision": "266c4f19566719854ddf20ede538d2c5"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_7.jpg",
    "revision": "e2c92a384a489620f132baad39ed3901"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_8.jpg",
    "revision": "72ba408ed91ffb0e131662aa9972674c"
  },
  {
    "url": "img/frontEnd/2020/121601/options.jpg",
    "revision": "4926a7d2ae48187c53e4d55edfc1b9ca"
  },
  {
    "url": "img/frontEnd/2020/121601/rewrite_1.jpg",
    "revision": "d0989e0abe84b54a0afc79621880ca3d"
  },
  {
    "url": "img/frontEnd/2020/121601/rewrite_2.jpg",
    "revision": "b3946d2a31226182542db1da37410a0f"
  },
  {
    "url": "img/frontEnd/2020/121601/rewrite_3.jpg",
    "revision": "65967d42ec1fc034ee4fef16ef0376e2"
  },
  {
    "url": "img/frontEnd/2020/121601/rewrite_4.jpg",
    "revision": "229640c96946d866764ec68f8c8ad8d3"
  },
  {
    "url": "img/frontEnd/2020/121601/rewrite_5.jpg",
    "revision": "01dfc0913002035f93e8f04f2648044b"
  },
  {
    "url": "index.html",
    "revision": "b712e4711804e5fb7be0706c90bb0138"
  },
  {
    "url": "tag/GDP定位/index.html",
    "revision": "cae6ae6a6619a17c798e152e1f4a255c"
  },
  {
    "url": "tag/git stash/index.html",
    "revision": "fcb243d3c1259db3ec4cae74636b3b27"
  },
  {
    "url": "tag/git介绍/index.html",
    "revision": "9e9f9d0c4eeedeef3167b06f6f06b06e"
  },
  {
    "url": "tag/HTML Tip/index.html",
    "revision": "cb7e99c3dda416e7834a774a3b9cd361"
  },
  {
    "url": "tag/HTML编译/index.html",
    "revision": "6dcac52d1b74d06d5fc622d5b88f8089"
  },
  {
    "url": "tag/index.html",
    "revision": "81685d9e8a00bdcb3fed53b9ff04d78a"
  },
  {
    "url": "tag/webpack学习/index.html",
    "revision": "6d993787bd39cebe362cfdf646d33581"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "778d03ceb5a02e5e40e8bed470e9f574"
  },
  {
    "url": "tag/代码调试/index.html",
    "revision": "23cd42b4c608498ba58c379c611fb36c"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "d9d56739e1d31b449eb2279a1311d9c8"
  },
  {
    "url": "tag/微信小程序学习/index.html",
    "revision": "271ffb5434240e4cd48bf485eb3345aa"
  },
  {
    "url": "tag/手机预装软件/index.html",
    "revision": "c55aa09093603b9a9a9f85fd3096a9b4"
  },
  {
    "url": "tag/智能手环/index.html",
    "revision": "f9f061a18ae5e04e8f1f557cdc4636c8"
  },
  {
    "url": "tag/求最大数/index.html",
    "revision": "e5eabc3ba25239fe721fad83d4769946"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "8dd2eb1e4b7106e95d4407b71472bd56"
  },
  {
    "url": "tag/调试工具/index.html",
    "revision": "7460efef6674be7a3f7d73f7a78c7fe2"
  },
  {
    "url": "timeline/index.html",
    "revision": "38379ec830b5b5870019a89b46446619"
  },
  {
    "url": "views/coding/2021/030101.html",
    "revision": "a5ced7ba5f90493926a7a36d03cf8a9a"
  },
  {
    "url": "views/dailylife/2020/090401.html",
    "revision": "b03fd2f43170698d35f3d27222c9110e"
  },
  {
    "url": "views/dailylife/2020/090402.html",
    "revision": "410387d0981f2e1cdc3c44595e5bef4d"
  },
  {
    "url": "views/dailylife/2020/091101.html",
    "revision": "2a96a91a2287aefd42796eeb27fe4bbe"
  },
  {
    "url": "views/dailylife/2020/110201.html",
    "revision": "db070d0354e1a01148d6541684c029cc"
  },
  {
    "url": "views/frontend/2020/101301.html",
    "revision": "74250e69b3823275ff1d4bd434dafdaa"
  },
  {
    "url": "views/frontend/2020/102301.html",
    "revision": "df23919e51d7d8636ce49575c9002791"
  },
  {
    "url": "views/frontend/2020/121601.html",
    "revision": "5e957610fac185d580b6b3f23bac3b44"
  },
  {
    "url": "views/frontend/2021/011801.html",
    "revision": "3a578c24cb510a53f1744b2dd2c30196"
  },
  {
    "url": "views/frontend/2021/061801.html",
    "revision": "e3c3133bd06b2df41b30652fc3cce507"
  },
  {
    "url": "views/git/2020/091601.html",
    "revision": "4c20722e1b78620ebb4ef234cce8d9bf"
  },
  {
    "url": "views/git/2020/091701.html",
    "revision": "4a3ebc8e92b900fcb31ac932ce4c2fa3"
  },
  {
    "url": "views/index.html",
    "revision": "842fc4c03172feaa0b0c4a4663d8da1c"
  },
  {
    "url": "views/miniprogram/2020/122101.html",
    "revision": "c01b27b7561914a8cc48077172b995a3"
  },
  {
    "url": "views/personalinfo/index.html",
    "revision": "032d151657423d4b5bb2cfb8ea3bbc15"
  },
  {
    "url": "views/webpack/2020/090101.html",
    "revision": "d893bcf181c17e50ca0ab5258e2b3c35"
  },
  {
    "url": "views/webpack/2020/090201.html",
    "revision": "91bcb7508c0352f3498449b1cf4c79d8"
  },
  {
    "url": "views/webpack/2020/090301.html",
    "revision": "362dc06d1e2e67b7880756fa9fa1a201"
  },
  {
    "url": "views/webpack/2020/090701.html",
    "revision": "a43049e85c3ff161319ef6ade56603e7"
  },
  {
    "url": "views/webpack/2020/090702.html",
    "revision": "61a99b3f00b6a57d9557e6d8fae2e282"
  },
  {
    "url": "views/webpack/2020/090703.html",
    "revision": "baa819e77d0951f6cbb76d6cf7796b18"
  },
  {
    "url": "views/webpack/2020/091201.html",
    "revision": "d06571e88a51dd639ce45ec459f385de"
  },
  {
    "url": "views/webpack/2020/091202.html",
    "revision": "91101bb53d98fdb8188299ae08763653"
  },
  {
    "url": "views/webpack/2020/091501.html",
    "revision": "48407c2c4edd5d8c60b9104cbaeeba89"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
