---
title: 了解Vue-router
date: 2018-02-07 01:30:11
tags: 
- vue-router
---
### Vue-router
通过Vue我们可以实现组件化开发，而各组件之间如何跳转呢，在我们第一次项目用gulp构建工具开发时，页面跳转是通过a标签的href属性实现的，不过在Vue中，页面跳转是通过路由实现的，路由的配置就成了一个需要学习的问题
***
#### 路由实现页面跳转
首先需要安装插件

> npm install vue-router --save

之后在 **main.js** 里面写入
> import VueRouter from 'vue-router'

> Vue.use(VueRouter)

通过它来引入 **vue-router** ，之后进入 **/router/index.js** 文件，同样先引入

> import Router from 'vue-router'

> Vue.use(Router)

然后将你需要进行跳转的组件引入这个文件中，比如我现在要进行首页(**index.vue**)与商品列表(**goodlist.vue**)的跳转,首先我们需要将这两个页面引进来

> import index from '@/components/index.vue'

> import goodlist from '@/components/goodlist/goodlist.vue'

然后进行页面的配置

```
export default new Router({
    routers: [
        {
            title: '首页'，
            path: '/',
            name: 'index',
            components: index
        },
        {
            title: '商品目录',
            path: '/goodlist',
            name: 'goodlist',
            components: goodlist
        }
    ]
})
```
然后在你的**index.vue**中商品元素的父元素中写入点击事件

> &lt;span @click="goodlist()"&gt;商品目录&lt;/span&gt;

然后在**script**中写入

```
export default {
    methods: {
        goodlist: function () {
            this.$router.push({path: '/goodlist'})
        }
    }
}
```
之后在页面点击首页的商品就可以跳转到商品列表页面

