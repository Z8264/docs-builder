## 自定义功能 defined

创建自定义链接，并在callback中定义功能

```
// 定义容器
let dom = $('#container');

// 在modules_help模块中自定义“客服”链接
let options = {
    modules_help:[{
        title:'客服',
        key:'kefu',
        href:'javascript:void(0)'
    }]
}

// 初始化
PSbar.init(dom,options,function(){

    // 自定义的"客服"选项，会生成一个li class="psbar-help-kefu"
    $('.psbar-help-kefu').click(function(){
        // 这里是点击客服后执行的内容
        ...
    })

    // 你也可以在回掉函数中定义其他方法
    ...
})
```
