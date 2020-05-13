(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{337:function(e,t,a){"use strict";a.r(t);var n=a(33),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("自适应布局的几种方法")]),e._v(" "),a("h3",{attrs:{id:"百分比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#百分比"}},[e._v("#")]),e._v(" 百分比")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="viewport" content="width-device-width,initial-scale=1"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("viewport是网页默认的宽度和高度，width=device-width即网页宽度默认等于屏幕宽度，initial-scale=1即原始缩放比例为1.0，网页初始大小占屏幕面积的100%。")]),e._v(" "),a("p",[e._v("由于网页会根据屏幕宽度调整布局，所以不能使用绝对宽度的布局，也不能使用绝对宽度的元素，如css不能指定像素宽度，只能指定百分比宽度，字体不能使用绝对大小px，而只能使用相对大小em。")]),e._v(" "),a("h3",{attrs:{id:"media规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#media规则"}},[e._v("#")]),e._v(" @media规则")]),e._v(" "),a("p",[e._v("css3的@media规则可以在不改变html内容情况下，根据终端媒体设备的不同选择不同的css样式")]),e._v(" "),a("p",[e._v("具体写法：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@media 设备类型 and (设备特性){\n\tcss样式代码\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("例如：\n"),a("pre",[e._v("//浏览器窗口大于900px\n@media screen and(min-width:900px){\nbody{\nfont-size:25px;\n}\n}\n//浏览器窗口大于500px小于900px\n@media screen and(min-width:500px)and(max-width:900px){\nbody{\nfont-size:20px;\n}\n}\n//浏览器窗口小于500px\n@media screen and(max-width:500px){\nbody{\nfont-size:15px;\n}\n}\n")])]),e._v(" "),a("h3",{attrs:{id:"rem自适应布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rem自适应布局"}},[e._v("#")]),e._v(" rem自适应布局")]),e._v(" "),a("p",[e._v("首先我们需要知道rem是相对于根元素的字体大小的单位，它是一个相对单位，同理em是相对于父元素的字体大小的单位；rem的计算规则依赖根元素，我们只需要在根元素确定一个px字号，就可以计算出元素的宽高。")]),e._v(" "),a("h3",{attrs:{id:"target-densitydpi属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-densitydpi属性"}},[e._v("#")]),e._v(" target-densitydpi属性")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="viewport" content="width=640,target-densitydpi=device-dpi,user-scalable=no">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("通过读取device-width的值来自动计算出target-densitydpi去实现自适应网页，不过缺点是目前只在android支持，具有兼容性问题。")]),e._v(" "),a("p",[e._v("target-densitydpi属性的取值范围：\n"),a("pre",[e._v("device-dpi\t--使用设备原本的dpi作为目标dpi，不会发生默认缩放。\nhigh-dpi\t--使用hdpi作为目标dpi，中等像素密度和低像素密度设备相应缩小。\nmedium-dpi\t--使用mdpi作为目标dpi，高像素密度设备相应放大，低像素密度设备相应缩小，这是默认的target density\nlow-dpi\t\t--使用ldpi作为目标dpi，中等像素密度和高像素密度设备相应放大\nvalue\t\t--指定一个具体的dpi，值作为target dpi，这个值得范围必须在70-400之间。\n")])])])}),[],!1,null,null,null);t.default=i.exports}}]);