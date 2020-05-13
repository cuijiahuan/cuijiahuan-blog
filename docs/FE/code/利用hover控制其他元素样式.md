---
title: 利用hover控制其他元素样式
date: 2018-08-21 21:05:29
tags: 
- css
---

> 之前在项目中有一个需求是鼠标移入元素上时该元素改变样式的同时另外元素样式也要改变，刚开始想利用js来实现，不过有点麻烦，之后发现可以通过css直接来实现这个功能，本着人无我有，人有我优的原则，在这里记录一下具体过程。


**首先我经过尝试以及网上查找之后，发现利用hover来实现这个功能是有一定局限性的，如果你要改变其他元素的样式，那么它们必须是相邻同级元素或者是同一父元素的子元素，不然效果是出不来的（呜~）**

#### 相邻同级元素
HTML

<pre>
&lt;div class="div1"&gt;
	&lt;div class="son1"&gt;son1 &lt;/div&gt;
	&lt;div class="son2"&gt;son2 &lt;/div&gt;
&lt;/div&gt;
</pre>

CSS

<pre>
.son1 , .son2{
	width:100px;
	height:100px;
	border:1px solid #000;
}
.son1:hover + .son2{
	background:#000;
}
</pre>

鼠标移入son1元素，son2元素背景色变黑

#### 父级元素
HTML

<pre>
&lt;div class="div1"&gt;
	&lt;div class="son"&gt;son1 &lt;/div&gt;
&lt;/div&gt;
</pre>

CSS

<pre>
.div1{
	width:200px;
	height:200px;
	border:1px solid #000;
}
.son{
	margin:0 auto;
	width:100px;
	height:100px;
	border:1px solid #000;
}
.div1:hover .son{
	background:#000;
}
</pre>

鼠标移入父级.div1元素，子元素son背景变黑