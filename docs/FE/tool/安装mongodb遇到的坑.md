### mongodb是一个基于分布式文件存储的开源数据库系统，它主要为WEB应用提供可扩展的高性能数据存储解决方案。下面我说说具体的安装过程

---
我在官网上下载最新3.6版本并在windows下安装会出现进度条长时间不动的情况，这是因为3.6版本在windows
下有不适配的问题，需要我们下载3.4版本安装

（我的安装路径是C:\Program Files\MongoDB）

下载安装完成之后，需要添加安装路径到path环境变量：C:\Program Files\MongoDB\Server\3.4\bin

我们在D盘创建如下文件夹D:\mongodb\data  D:\mongodb\logs

在命令提示符输入
> cd C:\Program Files\MongoDB\Server\3.4\bin

再输入mongod.exe --dbpath=D:\mongodb\data --logpath=D:\mongodb\logs\mongodb.log --install

输入net start mongodb启动服务

最后在浏览器输入http://localhost:27017/在页面看到It looks like you are trying to access MongoDB over HTTP on the native driver port.表示成功

在这里我说一下我安装的时候遇到的几个坑
>1.首先就是安装包问题，需要安装3.4版本的<br>
>2.在输入net start mongodb之后，提示我服务没有响应控制功能，之后我发现在配置path路径时把C:\windows\system32给删掉了，把这句加上就可以了<br>
>在D盘创建文件夹时，当时看别人的博客是把logs文件夹放到data文件夹里面，我这样操作之后启动服务是无法启动的，当我把logs文件夹和data文件夹并列之后，启动是可以的。