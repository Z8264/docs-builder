
# 简介

pandatv sidebar 组件，简称PSbar

|版本号|sdk|
|--|--|
|2.0.0|https://s.h2.pdim.gs/static/3bd5dc7077b52778/PSbar_v2.0.0_beta.js|


## 安装依赖

* jquery
  * a
  * b
* RUC
* icon-level
* jquery ui
* prefect-scroll

## English prefect

``` js
// 容器
let dom = $('#container')
// 配置
let options = {
    baseUrl:"https://www.panda.tv"
}
// 初始化
PSbar.init(dom, options, function(){
    // 回掉函数，sidebar渲染完成之后执行
    // ...
})
```
``` css
.abc{
  color:red;
}
.def{
  color:green;
}
```
``` xml
<body>
  <p>abc</p>
</body>
```

``` diff
+ div
+ icons
+   |- a.svg
+   |- b.svg
  package.json
```
``` bash
$ echo foo$myvarbar
```