(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{332:function(o,t,e){"use strict";e.r(t);var c=e(33),v=Object(c.a)({},(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("p",[o._v("1、今天在公司修改样式的时候发现引入Element-UI的tooltip组件之后，想对tootip的样式进行自定义修改，结果发现无论怎么设置选择器的优先级，都渲染不到页面上，后来经过一系列的尝试之后发现是由于给style设置scoped造成的，本身设置scoped是为了防止全局样式冲突，结果没想到会造成自定义的样式渲染不上，后来经过思考测试，其实是可以将组件内修改tooltp的样式放到全局css中，不过需要给对应的元素设置类型，比如tooltip可以通过"),e("code",[o._v('popper-class="tooltip"')]),o._v("设置类名，然后给这个类名添加样式。")]),o._v(" "),e("p",[o._v("2、在进行vue页面编写时经常会用到数据绑定，在渲染页面的时候其实会出现页面闪烁会看到变量的问题，比如通过"),e("code",[o._v("<p>"+o._s(o.currentYear)+"<p>")]),o._v("进行数据绑定，页面刷新时可能会看到"),e("code",[o._v(o._s(o.currentYear))]),o._v("，这对于用户体验来说是很差的，因此我们可以使用"),e("strong",[o._v("v-clock")]),o._v("来解决这个问题，基本上我们只需要把它添加到el挂载的标签就可以，一般来说就是最外层的div，如"),e("code",[o._v('<div class="#app" v-clock>')])]),o._v(" "),e("blockquote",[e("p",[o._v("在某些情况下"),e("code",[o._v("v-clock")]),o._v("并不起作用")]),o._v(" "),e("p",[o._v("①、挂载v-clock的元素的display属性被更高层级的覆盖掉了，如"),e("code",[o._v("!important")]),o._v("属性，这就需要我们提高层级")])]),o._v(" "),e("blockquote",[e("p",[o._v("②、当样式放到@import引入的css文件中时"),e("code",[o._v("v-clock")]),o._v("是不起作用的，可以用link引入样式或者写入内联样式。")])]),o._v(" "),e("p",[o._v("3、在搭建个人博客时我曾经换过页面标题旁边的图标，因此在利用vue编写个人项目时也考虑过这个问题，它的实现思路和博客其实差不多，只需要在最外层index.html的head标签里面加上"),e("code",[o._v('<link rel="shortcut icon" type="image/x-icon" href="static/favicon.ico">')]),o._v("，个人建议图标和logo之类的图片放在static文件夹中比较好。")]),o._v(" "),e("center",[o._v("to be continue...")])],1)}),[],!1,null,null,null);t.default=v.exports}}]);