(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{330:function(s,e,n){"use strict";n.r(e);var t=n(33),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("初次使用vue，在这里我把我了解到的vue如何引入css和js方法给大家分享一下")]),s._v(" "),n("ol",[n("li",[s._v("引入外链css")])]),s._v(" "),n("p",[s._v("大家的文件夹格式基本都是\n"),n("img",{attrs:{src:"http://ozxb0em6i.bkt.clouddn.com/cuijiahuan.png",alt:""}})]),s._v(" "),n("p",[s._v("这样的吧，在这里，我建议大家把css文件都放在"),n("strong",[s._v("static")]),s._v("文件夹里面，可以直接放，也可以在里面新建文件夹放入，我也不知道为什么一定放在这里面，我放在比如"),n("strong",[s._v("assets")]),s._v("里面死活就是不出来")]),s._v(" "),n("p",[s._v("放好之后，下面就可以直接在**<style>**里面引入格式如下：")]),s._v(" "),n("blockquote",[n("p",[s._v("@import './static/common.css'")])]),s._v(" "),n("p",[s._v("这是引入css")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("而对于js，我主要说一下如何引入jquery")]),s._v(" "),n("p",[s._v("首先我们输入命令行")]),s._v(" "),n("blockquote",[n("p",[s._v("npm install jquery --save")])]),s._v(" "),n("p",[s._v("安装好之后，我们在'"),n("strong",[s._v("build/webpack.base.conf")]),s._v("文件中引入jquery")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module.exports = {\n    ...\n    resolve: {\n    extensions: ['.js','.vue','.json'],\n    alias: {\n        'vue$': 'vue/dist/vue.esm.js',\n        '@': resolve('src'),\n        'jquery': path.resolve(__dirname, '../node_modules/jquery/src/jquery')\n    }\n    },\n    ...\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("然后在你需要jquery的地方引入如下方法：")]),s._v(" "),n("blockquote",[n("p",[s._v("import $ from 'jquery'")])]),s._v(" "),n("p",[s._v("亲测是可以的")])])}),[],!1,null,null,null);e.default=a.exports}}]);