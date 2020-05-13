---
title: webpack【更新】
date: 2018-01-08 10:14:35
tags: 
- webpack
---
### 什么是Webpack?
Webpack是一个前端资源加载/打包工具，它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源.

通俗地讲，Webpack可以看作是模块打包机：它做的事情是，分析你的项目结构，找到Javascript模块以及其他的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

### Webpack与Gulp区别
Webpack与之前学习的gulp相比较而言，两者的流程不大相同，而且Wwbpack的处理速度更快更直接，能打包更多不同类型的文件。

gulp是一种能够优化前端的开发流程的工具，它的工作方式是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，工具之后可以自动替你完成这些任务。

![](https://upload-images.jianshu.io/upload_images/1031000-d0693c06bb3a00e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700)

Webpack是一种模块化的解决方案，它的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的Javascript文件。

> 【注:loader用于对模块的源代码进行转换,比如Webpack只能处理js文件，因此对于css文件就需要安装对应loader模块：style-loader和css-loader等】

![](https://upload-images.jianshu.io/upload_images/1031000-160bc667d3b6093a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700)

从图中可以看出，Webpack可以将多种静态资源js,css,less转换成一个静态文件。

### 使用Webpack

##### 安装Webpack
在安装之前，需要检查本地环境是否支持node.js

使用npm安装Webpack

```
npm install webpack -g
```
##### 创建一个文件夹
在你的电脑随便一个盘里创建一个新的文件夹或者使用命令创建:

```
mkdir webpack-test
```
在文件夹中新建一个**run1.js**文件，代码如下：

```
document.write("Hello World");
```
再添加**index.html**文件，代码如下：

```
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <script type="text/javascript" src="bundle.js">
    </body>
</html>
```
接下来使用Webpack命令进行打包：

```
webpack run1.js bundle.js
```
执行以上命令会编译run1.js文件并生成bundle.js文件

在浏览器中打开**index.html**文件，会看到页面上有“Hello World”。

##### Loader
就像之前说的，如果想要处理除js之外的其他文件，对于css文件，首先需要执行命令来安装css-loader和style-loader

```
npm install css-loader style-loader
```
接下来创建一个style.css文件，代码如下：

```
body{
    background:red;
}
```
修改run1.js文件：

```
require("!style-loader!css-loader!./style.css");
document.write("Hello World");
```
继续使用Webpack命令打包：

```
webpack run1.js bundle.js
```
在浏览器访问index.html会发现背景变成红色。
##### 配置文件
可以将一些编译选项放在配置文件中，以便于统一管理。

创建webpack.config.js文件

```
module.exports = {
    entry: "./run1.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/,loader: "style.loader!css-loader"}
        ]
    }
};
```
接下来只需要执行**webpack**命令即可生成**bundle.js**文件

Webpack命令执行后，会默认载入当前目录的**webpack.config.js**文件。

**当你想要查看你添加的loaders模块时。可以在安装webpack之后再生成一个package.json文件,它里面会显示你当前所有的依赖模块**，代码如下：

```
npm init
```
*默认一直点回车就行*

##### 开发环境
如果不想每次修改模块之后还要重新编译，那么可以启用监听模式；开启之后，就不需要每次都重新编译，代码如下：

```
webpack --watch
```
当然还有一种方法是启用一个本地服务器，来实现热加载，可以使用webpack-dev-server服务，当然首先需要安装：

```
npm install webpack-dev-server -g
```
运行：

```
webpack-dev-server
```
运行之后一般会通过localhost:8080启用一个express静态资源web服务器，并且会以监听模式自动运行webpack；如果该端口被占用，可以通过“ -port 端口号 ” 来改变服务器端口。

当然webpack还有其他功能。