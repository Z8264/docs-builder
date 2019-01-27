## 初始化 initialize

### 通过 data 属性调用

```
<div id="container" data-toggle="PHeader"></div>
```

data 属性的详细参数请参考[基本配置选项]和[模块详细配置说明]。

### 通过 Javascript 调用

`PHeader.init([target],options)`;

```
<div id="container"></div>
```

```
PHeader.init($('#container'),{baseUrl:'https://www.panda.tv'});
```

如果设置了`data-toggle="PHeader"`，则 Javascript 调用方式失效，只能实例化一个实例，重复定义无效。
