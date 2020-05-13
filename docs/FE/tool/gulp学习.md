---
title: gulp学习
date: 2017-06-15 19:05:28
tags: 
- gulp
---

gulp作为前端开发过程中对代码进行构建的工具，对它进行了解学习是必要的，它可以提高我们的学习和工作效率
- - -
### 要使用gulp，首先要明白它是基于node.js下运行的，所以我们需要先安装node.js，安装完成后再安装gulp，这里分为全局安装gulp与本地安装gulp：

对于全局安装，它的目的是为了通过它执行gulp任务;安装的命令提示符是：

```
npm install gulp -g
```

安装好之后，可以使用

```
gulp -v
```
来进行验证，如果出现版本号即为正确安装

而本地安装只需要将"-g"去掉

```
npm install gulp
```
- - -
### 安装完成之后我们需要新建一个package,json文件
> 说明：package.json是基于node.js项目必不可少的配置文件，它是存放在项目根目录的json文件(在之后的gulpfile.js编写中也可以当做检查gulp插件是否调入的判断)
>安装的命令提示符

```
npm init
```

这里需要说明一下package.json文件里的内容

```
1.name:项目名称
2.version:版本号
3.description:项目描述
4.homepage:项目网站
5.author:作者姓名
6.contributors:其他相关人姓名
7.dependencies:包(插件)列表，默认在node_modules目录下
8.repository:包(插件)存放地方的类型，可以是git或svn,git可在GitHub上
9.main:main字段指定了程序的主入口文件，require('moduleName')就会加载这个文件。这个字段的默认值是模块根目录下面的index.js
10.keywords:关键字
```
- - -
### 在gulp里面的主要知识点我个人认为是在于写gulpfile.js文件

举例说明

```
var sass = require('gulp-sass');  //将插件导入文件中并命名
gulp.task('sass',function(){   //定义一个匿名函数
return gulp.src('stylesheets/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});
```
gulp.src() --找出需要处理的文件

.pipe() --指定需要执行的功能

gulp.desk() --将处理好的文件放到指定的位置

像例子中的sass就是一个插件，它的功能是将文件变为.css格式的文件,安装方式是

```
npm install gulp-sass --save-dev
```
其他插件的安装方式与用法基本类似,不多描述

### 下面是我对gulp中的几个API的理解

#### 1.gulp.src()
利用这个方法可以读取你需要的文件，语法为:
```
gulp.src(globs[,optios])
```
> globs参数是文件匹配模式，用来匹配文件路径；当有多个模式时，该参数为一个数组；options为可选参数，通常用不到

#### 2.gulp.dest()
用来写文件，其语法为:
```
gulp.dest(path[,optios])
```
> path为写入文件的路径；options为可选参数，通常用不到

#### 3.gulp.task()

用来定义任务，语法为:
```
gulp.task(name[,deps],fn)
```
> name为任务名；deps是当前定义的任务需要依赖其他任务；fn为任务函数，任务要执行的代码写在里面

#### 4.gulp.watch()

用来监视文件的变化，当文件发生变化后，可以利用它来执行相应的任务,语法为:
```
gulp.watch(glob[,opta],tasks)
```
> glob为要监视的文件匹配模式；opts为一个可选的配置对象，通常不用
；tasks为文件变化后要执行的任务，为一个数组

