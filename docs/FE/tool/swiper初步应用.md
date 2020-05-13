---
title: swiper初步应用
date: 2018-01-22 00:57:30
tags: 
- swiper框架
---
#### 什么是swiper？
swiper是一种用于移动端页面的前端特效插件，它是一种纯javascript的框架，主要用来做轮播图之类页面，在使用之前首先我们需要[下载swiper](http://www.swiper.com.cn/download/index.html)

> **注：**下载swiper-4.1.0.min.js和swiper-4.1.0.min.css即可

#### swiper使用方法
##### 1.首先加载插件

```
<!DOCTYPE html>
<html>
<head>
    ...
    <link rel="stylesheet" href="path/to/swiper.min.css">
</head>
<body>
    ...
    <script src="path/to/swiper.min.js"></script>
</body>
</html>
```
##### 2.HTML内容

```
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
导航等组件可以放在container之外
```
***注：***可以自行给swiper定义大小
##### 3.初始化swiper

```
<script>        
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        
  </script>
</body>
```
##### 4.如何利用swiper实现一个简单的轮播图效果
> 默认前三项都成功完成

首先先上代码：

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="swiper-4.1.0.min.css">
		<title>轮播图</title>
		<style type="text/css">
			.swiper-container {
    			width: 600px;
    			height: 300px;
			}
			.swiper-slide{
				font-size: 50px;
			}
			.swiper-slide:nth-of-type(1){
				background-color: cornflowerblue;
			}
			.swiper-slide:nth-of-type(2){
				background-color: coral;
			}
			.swiper-slide:nth-of-type(3){
				background-color: yellowgreen;
			}
			.swiper-slide:nth-of-type(4){
				background-color: coral;
			}
			.swiper-slide:nth-of-type(5){
				background-color: cornflowerblue;
			}
		</style>
	</head>
	<body>
		<div class="swiper-container">
    		<div class="swiper-wrapper">
        		<div class="swiper-slide">Slide 1</div>
        		<div class="swiper-slide">Slide 2</div>
        		<div class="swiper-slide">Slide 3</div>
        		<div class="swiper-slide">Slide 4</div>
        		<div class="swiper-slide">Slide 5</div>
    		</div>
		</div>
		<script src="swiper-4.1.0.min.js"></script>
		<script>        
  			var mySwiper = new Swiper ('.swiper-container', {
//              horizontal 水平  
//				vertical   垂直
    			direction: 'horizontal',
//				开始显示第几张
    			initialSlide: 0,
//				换页速度
				speed: 1500,
//				自动切换
    			autoplay: {
    				delay: 2000,
    			},
  			})        
  		</script>
	</body>
</html>
```

initialSlide参数：设定初始化时slide页面的索引，初始时为0，即默认为轮播图第一张图；如果设置为2时，swiper初始化时页面就是轮播图第三张图

direction参数：设置轮播图的滑动方向，水平方向为（horizontal），垂直方向为（vertical），默认为水平方向

speed参数：轮播图的切换速度

autoplay参数：设置为true时自动切换图片，默认为false

delay参数：自动切换的时间间隔，详情见上图代码

关于swiper的用法和初始化组件还有许多，[具体请查看swiperAPI文档](http://www.swiper.com.cn/api/index.html)


***
*分割线*

在vue中我们可以直接下载插件实现**swiper**的功能
> npm install vue-awesome-swiper

然后在**main.js**中引入
> import VueAwesomeSwiper from 'vue-awesome-swiper'
> Vue.use(VueAwesomeSwiper)

在对应的 **.vue** 比如(**slide.vue**)文件中，写入

```
template>
  <div id="slide">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- 幻灯内容 -->
      <swiper-slide><div class="fd_slide fd_slide1"><a href="#"><img src="1.jpg"></a></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide2"><a href="#"><img src="2.jpg"></a></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide3"><a href="#"><img src="3.jpg"></a></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide4"><a href="#"><img src="4.jpg"></a></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide5"><a href="#"><img src="5.jpg"></a></div></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import $ from 'jquery'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        initialSlide: 0,
        direction: 'horizontal',
        loop: true,
        loopAdditionalSlides: 2,
        speed: 1000,
        autoplay: {
          delay: 2000
        },
        autoplayDisableOnInteraction: false,
        observer: true,
        observeParents: true
      }
    }
  }
 }
</script>
```



