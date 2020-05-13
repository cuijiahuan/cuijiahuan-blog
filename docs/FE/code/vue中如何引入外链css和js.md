---
title: Vue中外链css和js【不推荐引】
date: 2018-01-31 03:10:29
tags: 
- vue
---
初次使用vue，在这里我把我了解到的vue如何引入css和js方法给大家分享一下
1. 引入外链css

大家的文件夹格式基本都是
![](http://ozxb0em6i.bkt.clouddn.com/cuijiahuan.png)

这样的吧，在这里，我建议大家把css文件都放在**static**文件夹里面，可以直接放，也可以在里面新建文件夹放入，我也不知道为什么一定放在这里面，我放在比如**assets**里面死活就是不出来

放好之后，下面就可以直接在**&lt;style&gt;**里面引入格式如下：
> @import './static/common.css'

这是引入css
***
而对于js，我主要说一下如何引入jquery

首先我们输入命令行
> npm install jquery --save

安装好之后，我们在'**build/webpack.base.conf**文件中引入jquery

```
module.exports = {
    ...
    resolve: {
    extensions: ['.js','.vue','.json'],
    alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'jquery': path.resolve(__dirname, '../node_modules/jquery/src/jquery')
    }
    },
    ...
}
```
然后在你需要jquery的地方引入如下方法：
> import $ from 'jquery'

亲测是可以的
