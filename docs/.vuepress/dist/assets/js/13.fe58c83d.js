(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{333:function(s,t,e){"use strict";e.r(t);var n=e(33),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"vue-router"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[s._v("#")]),s._v(" Vue-router")]),s._v(" "),e("p",[s._v("通过Vue我们可以实现组件化开发，而各组件之间如何跳转呢，在我们第一次项目用gulp构建工具开发时，页面跳转是通过a标签的href属性实现的，不过在Vue中，页面跳转是通过路由实现的，路由的配置就成了一个需要学习的问题")]),s._v(" "),e("hr"),s._v(" "),e("h4",{attrs:{id:"路由实现页面跳转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由实现页面跳转"}},[s._v("#")]),s._v(" 路由实现页面跳转")]),s._v(" "),e("p",[s._v("首先需要安装插件")]),s._v(" "),e("blockquote",[e("p",[s._v("npm install vue-router --save")])]),s._v(" "),e("p",[s._v("之后在 "),e("strong",[s._v("main.js")]),s._v(" 里面写入")]),s._v(" "),e("blockquote",[e("p",[s._v("import VueRouter from 'vue-router'")])]),s._v(" "),e("blockquote",[e("p",[s._v("Vue.use(VueRouter)")])]),s._v(" "),e("p",[s._v("通过它来引入 "),e("strong",[s._v("vue-router")]),s._v(" ，之后进入 "),e("strong",[s._v("/router/index.js")]),s._v(" 文件，同样先引入")]),s._v(" "),e("blockquote",[e("p",[s._v("import Router from 'vue-router'")])]),s._v(" "),e("blockquote",[e("p",[s._v("Vue.use(Router)")])]),s._v(" "),e("p",[s._v("然后将你需要进行跳转的组件引入这个文件中，比如我现在要进行首页("),e("strong",[s._v("index.vue")]),s._v(")与商品列表("),e("strong",[s._v("goodlist.vue")]),s._v(")的跳转,首先我们需要将这两个页面引进来")]),s._v(" "),e("blockquote",[e("p",[s._v("import index from '@/components/index.vue'")])]),s._v(" "),e("blockquote",[e("p",[s._v("import goodlist from '@/components/goodlist/goodlist.vue'")])]),s._v(" "),e("p",[s._v("然后进行页面的配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("export default new Router({\n    routers: [\n        {\n            title: '首页'，\n            path: '/',\n            name: 'index',\n            components: index\n        },\n        {\n            title: '商品目录',\n            path: '/goodlist',\n            name: 'goodlist',\n            components: goodlist\n        }\n    ]\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("然后在你的"),e("strong",[s._v("index.vue")]),s._v("中商品元素的父元素中写入点击事件")]),s._v(" "),e("blockquote",[e("p",[s._v('<span @click="goodlist()">商品目录</span>')])]),s._v(" "),e("p",[s._v("然后在"),e("strong",[s._v("script")]),s._v("中写入")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("export default {\n    methods: {\n        goodlist: function () {\n            this.$router.push({path: '/goodlist'})\n        }\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("之后在页面点击首页的商品就可以跳转到商品列表页面")])])}),[],!1,null,null,null);t.default=a.exports}}]);