---
title: npm学习
date: 2017-06-18 15:18:22
tags: 
- npm
---

### 什么是npm？它有什么作用？
> npm是和node.js一起的包管理工具，并且在安装node.js时已经安装好了npm,npm常见的使用场景有以下几个:

```
1.允许用户从npm服务器下载别人编写的第三方包到本地使用。
2.允许用户从npm服务器下载并安装别人编写的命令行程序到本地使用。
3.允许用户将自己编写的包或命令行程序上传到npm服务器供别人使用。
```
---
### 安装npm 
> npm本地安装的命令为:

```
npm install npm
```
> 全局安装的命令为:

```
npm install npm -g
```
> 如果要检查是否安装成功可以输入命令行:

```
npm -v
```
来测试是否安装成功。

### 使用package.json
package.json位于模块的目录下，用于定义包的属性。

#### 在当前目录下产生package.json文件
```
npm init
```
#### 安装当前package,json中定义的模块

```
npm install
```
#### 注册与提交

##### 注册用户

```
npm adduser
Username:输入用户名
Password:输入密码
Email:输入邮箱

```

##### 编写完模块后输入命令行:

```
npm publish  #发表模块
```
##### 更新模块

> 尽管node.js自带pm，但是如果想要更新npm的话。可以输入命令:

```
npm update npm -g
```
##### 搜索模块

```
npm search "Module Name"
```
