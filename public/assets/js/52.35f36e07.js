(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{560:function(n,s,a){"use strict";a.r(s);var t=a(20),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[n._v("#")]),n._v(" 原理")]),n._v(" "),a("p",[n._v("首先要明白浏览器在加载页面的时候是按顺序来加载的，这样以来就很清楚了，js动态添加dom以后，这些dom并没有绑定事件，这个时候最简单的一个办法就是：将绑定事件的方法封装到一个函数A中，在动态添加完dom以后立即执行一次函数A即可。")]),n._v(" "),a("h2",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[n._v("#")]),n._v(" 注意")]),n._v(" "),a("p",[n._v("其次需要注意的是，在你可能同时需要添加许多的dom，不要添加一个就执行一次函数A，这样会增加浏览器的负载，你需要在所有dom添加完以后在执行函数A，例如你用一个for循环遍历dom组合并拼接成一个字符串，然后添加到某个父级dom里面，这个时候你需要在循环外添加一次就可以了。")]),n._v(" "),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[n._v("#")]),n._v(" 代码")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n    <meta charset=\"UTF-8\">\n    <title>添加div并绑定点击事件</title>\n    <style>\n        div.btn{\n            width: 200px;\n            height: 50px;\n            line-height: 50px;\n            text-align: center;\n            border: solid 1px #000;\n            cursor: pointer;\n        }\n        div.innerDiv{\n            width: 50px;\n            height: 50px;\n            background-color: black;\n            margin: 10px;\n            cursor: pointer;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"aa\">\n        <div class=\"btn\">添加div并绑定点击事件</div>\n        <div class=\"outerDiv\"></div>\n    </div>\n    <script>\n        function getClass(classname) {\n            return document.getElementsByClassName(classname);\n        }\n        getClass('btn')[0].onclick=function () {\n            addDom();\n        }\n        //    将点击事件封装为函数\n        function funA() {\n            for(var i=0;i<getClass('innerDiv').length;i++){\n                getClass('innerDiv')[i].onclick=function () {\n                    alert(this.innerText);\n                }\n            }\n        }\n        //    将添加dom封装为函数\n        function addDom() {\n            var oldHtml='';\n            for(var j=0;j<6;j++){\n                oldHtml+='<div class=\"innerDiv\">'+j+'</div>'\n            }\n            getClass('outerDiv')[0].innerHTML=oldHtml;\n            funA();\n        }\n        //    如果将函数A放在这里就不会起作用的\n        //    funA();\n    <\/script>\n</body>\n</html>\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br")])]),a("p",[n._v("个人博客："),a("a",{attrs:{href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[n._v("午后南杂")]),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);