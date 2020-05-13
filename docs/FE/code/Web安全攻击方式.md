---
title: Web安全攻击方式
date: 2018-05-18 23:56:27
tags: 
- web安全
---

### xss
xss是跨站脚本攻击，指攻击者在网页中嵌入客户端脚本，当用户浏览次页面时，脚本就会在用户浏览器上执行，从而达到攻击目的

比如我们下载有这么一个代码
> &lt;input type="text" name="address" value="valuefrom"&gt;

valuefrom是来自用户的输入，如果用户不是输入valuefrom而是输入"/&gt;&lt;script&gt;alert(document.cookie)&gt;/script&gt;&lt;!-,即变成
> &lt;input type="text" name="address" value=""/&gt;&lt;script&gt;alert(document.cookie)&lt;/script&gt;&lt;!-">

嵌入的javascript代码将会被执行

**xss漏洞修复**
原则：不要相信用户输入的数据

*注意：攻击代码不一定在&lt;script&gt;&lt;script&gt;标签里

> * 将重要的cookie标记为http only，这样js的document.cookie语句就无法获取cookie
> * 只允许用户输入我们规定的数据，比如年龄只允许输入数字
> * 对数据进行html Encode处理
> * 过滤或移除特殊的html标签，例如&lt;script&gt;,&lt;iframe&gt;
> * 过滤掉js事件的标签，比如onclick,onfocus

### csrf
csrf是跨站请求伪造，指攻击者盗用了你的身份，以你的名义发送恶意请求，csrf能够以你名义发送邮件，发消息......会造成个人隐私泄露以及财产安全等问题

要完成一次csrf攻击，受害者必须依次完成两个步骤：

>登录受信任网站A，并在本地生成cookie
>
>在不登出A的情况下，访问危险网站B

看到这里，你也许会说：“如果我不满足以上两个条件中的一个，我就不会受到CSRF的攻击”。是的，确实如此，但你不能保证以下情况不会发生：

>1.你不能保证你登录了一个网站后，不再打开一个tab页面并访问另外的网站。
>
>2.你不能保证你关闭浏览器了后，你本地的Cookie立刻过期，你上次的会话已经结束。（事实上，关闭浏览器不能结束一个会话，但大多数人都会错误的认为关闭浏览器就等于退出登录/结束会话了......）
>
>3.所谓的攻击网站，可能是一个存在其他漏洞的可信任的经常被人访问的网站。

**csrf防御**

1.服务端进行csrf防御

服务端的CSRF方式方法很多样，但总的思想都是一致的，就是在客户端页面增加伪随机数。

(1).Cookie Hashing(所有表单都包含同一个伪随机值)

(2).验证码

(3).One-Time Tokens(不同的表单包含一个不同的伪随机值)

目前防御 CSRF 攻击主要有三种策略：

①验证 HTTP Referer 字段；

②在请求地址中添加 token 并验证；

③在 HTTP 头中自定义属性并验证。