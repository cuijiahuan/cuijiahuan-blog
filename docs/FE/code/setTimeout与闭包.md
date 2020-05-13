---
title: setTimeout与闭包
date: 2018-01-30 01:07:11
tags: 
- 异步
---
### <center>分享总结</center>
今天学姐给我们主要分享了关于setTimeout与闭包的问题，在这里我写一下自己的感受
***
在这之前，我个人认为首先需要了解一下javascript的单线程和异步。

作为一个脚本语言，javascript的主要用途是与用户互动，以及操作DOM，这决定了它只能是单线程，否则会带来很复杂的同步问题，所以也决定了它本身是不可能异步的。

但是，我们通过某种方式又可以使得js具备异步属性，当网络请求、定时器和事件监听时，如果同步执行的话，效率会非常低，所以这时浏览器会开辟另外的线程，主要包括http请求线程，浏览器定时触发器，浏览器事件触发进程，这些都是异步的。

那么问题来了，当异步任务都完成后，主线程又是如何知道的？答案是回调函数，整个程序是事件驱动的，每个事件都会绑定相应的回调函数，例如：

```
setTimeout(function(){
    console.log(time is out);
},50);
```
当执行这段函数时，浏览器异步执行计时操作，当50ms时，会触发定时事件，这个时候就会把回调函数放到任务队列里

> **所以，js一直都是单线程的，浏览器实现异步**

***

下面我们主要来回顾一下学姐今天给我们讲的知识：

1、setTimeout(f1,0)

这个语句中的f1数是立刻执行的吗？并不一定，我们首先要知道主线程内的命令是否执行完，如：

```
setTimeout(function(){
    console.log(1);
},0)
console.log(2);
```
这段代码输出为2,1，因为执行setTimeout后，会立即把匿名函数放到任务队列里面等待主线程召唤，等到执行完console.log(2)之后，才会执行匿名函数，这里有人会问为什么要用setTimeout(f1,0)语句，首先我们要确认这个语句是具有意义的：如果f1很费时，那么我们需要先将它放到任务队列里面，等到主程序执行完之后再执行f1。

2、setTimeout中的闭包

```
for(var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    },1000*i);
}
```
结果：开始打印一个5，然后每隔一秒输出5，总共5个5

解析：先执行setTimeout外面的函数，然后执行setTimeout里面的函数，这时因为for循环已经遍历完，所以i=5，接着执行console.log(i),执行5次，所以输出5个5

那么如何得到0-4呢？

```
for(var i = 0;i < 5; i++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    })(i);
}
```
结果：每隔一秒输出，输出0-4

解析：在这里我的理解是for循环遍历时，将每次i的值暂时存到(i)里面，然后当执行setTimeout时，通过function(i)将值引入进来，所以输出0-4

删掉i时

```
for(var i = 0; i < 5; i++){
    (function(){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    })(i);
}
```
结果：5个5

解析：个人感觉这样写和第一个语句一样，是通过同样的方式输出。

变：

```
for(var i = 0; i < 5; i++){
    setTimeout((function(i){
        console.log(i);
    })(i),i*1000);
}
```
结果：立刻输出0-4

解析：在这里我个人理解是先打印出0-4，但是先保存，最后一起输出

最后一个

```
setTimeout(function() {
  console.log(1)
}, 0);
new Promise(function executor(resolve) {
  console.log(2);
  for( var i=0 ; i<10000 ; i++ ) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function() {
  console.log(4);
});
console.log(5);
```
答案是2 3 5 4 1

对于第一个不输出1，我大概理解是它的执行时间是大于0小于1的，所以先执行下面的函数，最后执行setTimeout函数，所以最后打印1（看了mkicrotask和macrotask的区别后，我理解是console(1)会先存入macrotask中，当microtask任务执行完之后，最后执行macrotask任务）

对于es6中的promise方法，这是一种异步解决方法，它有三种状态：pending(进行中)、Resolved(已经完成)和Rejected(已失败)，上面代码里是resolve，是异步操作成功，因此打印出2

当i为9999且resolve()成立时，输出3

promise生成之后，用then方法分别指定Resolved状态和Reject状态的回调函数因此打印4，这块我认为4在5后面的原因是console.log(4)在函数内，执行时会先存入任务队列，然后promise优先级高于setTimeout，所以先输出5，然后是4，最后是1（不知道理解的对不对）

最后，学姐提到了macrotask与microtask,我查看了资料后，显示，它们两个相当于异步任务中不同的两个任务队列

而它们的不同如下：

```
console.log(1);
setTimeout(function(){
    console.log(2);
},0);
Promise.resolve().then(function(){
    console.log(3);
}).then(function(){
    console.log(4);
})
```
输出是1,3,4,2

由上代码我们就可以看出来（学姐的最后一个代码块也可以看出），Promise的异步任务优先级高于setTimeout的延时为0的任务

原因是Promise的then方法的函数会被存入microtasks队列，而setTimeout函数会被存入marcotasks中

在任务队列中，每一次事件循环，macrotask只会提取一个执行，而microtask会一直提取，直到microtask队列为空，也就是说如果某个microtask推入到执行中，那么当主线程任务完成之后，会循环调用该队列的下一个任务，直到全部完成，而事件循环每次只会引入一个macrotask，执行完之后主线程又会检查microtask队列，完成所有之后再执行macrotask任务
