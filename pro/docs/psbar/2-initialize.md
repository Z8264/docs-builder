## 初始化 initialize

### 使用`init`方法初始化

```
PSbar.init([dom],[options],[callback])
```

### 使用同步`syncInit`和异步`asyncInit`方法依次初始化

同步`syncInit`和异步`asyncInit`方法是将`init`方法的初始化过程划分为两部分，以便让用户更快的看到页面。

`syncInit`能够将不依赖接口请求的dom节点快速的渲染到页面上；
```
PSbar.syncInit([dom],[options])
```

`asyncInit`则是将依赖接口请求的内容渲染到页面上，该方法必须在`syncInit`方法之后被调用。
```
PSbar.asyncInit([callback])
```