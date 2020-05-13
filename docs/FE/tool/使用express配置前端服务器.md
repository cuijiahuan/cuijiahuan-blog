---
title: 使用express配置前端服务器
date: 2018-05-05 21:39:41
tags: 
- node
---

使用webpack打包vue项目之后会生成dist文件夹，dist文件夹下面有html文件和其他的css,js和img等文件，如果你要查看打包之后的文件怎么办，这时候我们可以将生成的dist文件部署到express服务器上运行。

### 首先我们需要安装express-generator生成器
> npm install express-generator -g

### 创建express项目
> express expressname(项目名称)

### 进入项目目录，安装相关项目依赖
> cd expressname
> npm install

### 将dist文件夹下生成的文件复制到express项目下的piblic文件夹下，然后运行npm start，启动express项目

### 打开浏览器，输入localhost:3000查看效果