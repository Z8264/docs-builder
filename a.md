
## 简介

pandatv sidebar 组件，简称PSbar

|版本号|sdk|
|--|--|
|2.0.0|https://s.h2.pdim.gs/static/3bd5dc7077b52778/PSbar_v2.0.0_beta.js|


#### 安装依赖

* jquery
  * a
  * b
* RUC
* icon-level
* jquery ui
* prefect-scroll

#### 示例

```
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


## 初始化

#### 使用`init`方法初始化

```
PSbar.init([dom],[options],[callback])
```

#### 使用同步`syncInit`和异步`asyncInit`方法依次初始化

同步`syncInit`和异步`asyncInit`方法是将`init`方法的初始化过程划分为两部分，以便让用户更快的看到页面。

`syncInit`能够将不依赖接口请求的dom节点快速的渲染到页面上；
```
PSbar.syncInit([dom],[options])
```

`asyncInit`则是将依赖接口请求的内容渲染到页面上，该方法必须在`syncInit`方法之后被调用。
```
PSbar.asyncInit([callback])
```

## 基本参数 `[options]`

|参数|默认值|说明|
|--|--|--|
|baseUrl| '' |将相对路径指向baseUrl|
|mini|`false`|可设置为`true`将初始化为收起状态，默认为展开状态|
|currentByPath|`false`|开启路径检测，来自动设置当前导航状态, 此规则仅适用于`www.panda.tv`下的页面，其他业务不要开启此配置|

``` javascript
PSbar.init($('#container'),{
    baseUrl:"https://www.panda.tv",
    mini: true,
    currentByPath: true
})
```



## 业务模块参数 `[options]`

#### LOGO `module_logo` `[Object]`

|参数|默认值|说明|
|--|--|--|
|href|'/'|地址|
|img|https://i.h2.pdim.gs/3459966f6e12c3f61e596278e5af4b54.png|图片|

```
PSbar.init($('#container'),{
    module_logo:{
        href:'/',
        img:'https://i.h2.pdim.gs/bae905b5ccc183b82c00b445c5fb4c89.png'
    }
});
```


#### 搜索 `module_search` `[Object]`

|参数|默认值|说明|
|--|--|--|
|placeholder|'搜游戏/主播'|提示文案|
|pretext|''|预设搜索文案|
|prehref|''|如果存在预设文案，点击搜索预设文案将直接跳转到此链接|
|action|https://www.panda.tv/search|action地址|
|paramname|'kw'|传递参数所需要参数名|

```
PSbar.init($('#container'),{
    module_search:{
        placeholder:'搜游戏/主播',
        pretext:'',
        prehref:'',
        action:'/search',
        paramname:'kw'
    }
});
```




#### 广告推荐 `module_ads` `[Array]`

CMS资源配置："侧边栏推荐活动配置" 

|参数|默认值|说明|
|--|--|--|
|name|''|标题|
|link|''|链接|
|tag|''|标签|
|color|''|标签颜色|


```
PSbar.init($("#container"), {
  module_ads: [
    {
      color: "red",
      link: "https://www.panda.tv/sps/chinajoy2018.html",
      name: "夏日盛典",
      tag: "活动"
    },
    {
      color: "red",
      link: "https://www.panda.tv/sps/chinajoy2018.html",
      name: "夏日盛典",
      tag: "活动"
    }
  ]
});
```
#### 导航菜单 `module_menu` `[Array]`

|参数|默认值|说明|
|--|--|--|
|title|''|标题|
|key|''|关键字，与icon和页面路径保持一致|
|href|''|链接|
|tag|''|标签|
|target|'_self'|`<a>`标签的target属性|
|needLogin| false |是否需要在登录状态下显示 |

```
PSbar.init($("#container"), {
  module_menu: [
    {
      title: "熊猫游戏",
      key: "game",
      href: "https://wan.panda.tv/",
      target: "_blank",
      tag: "HOT"
    },
    {
      title: "我的订阅",
      key: "myfollow",
      href: "/myfollow",
      needLogin: true
    }
  ]
});
```

#### 推荐分类 `module_recommend` `[Array]`

推荐分类，在未登录或未进行个人定制的情况下显示。

CMS资源配置："侧边栏推荐分类设置"

此业务禁止自定义配置。

#### 全部分类 `module_cates` `[Array]`

CMS资源配置："分类列表"

此业务禁止自定义配置。

#### 分类补充 `module_labels` `[Array]`

向全部分类列表中注入`label`业务标签，注入示例：

```
PSbar.init($("#container"), {
  module_labels: {
    yllm: [
      {
        ename: "asmr",
        cname: "ASMR"
      },
      {
        ename: "hwb",
        cname: "萌宠乐园"
      }
    ]
  }
});
```

#### 自定义链接 `module_link` `[Array]`

```
PSbar.init($("#container"), {
  module_link: [
    {
      title: "一屏多看",
      key: "",
      href: ""
    },
    {
      title: "主播地图",
      key: "",
      href: ""
    }
  ]
});
```

#### 自定义帮助 `module_help` `[Array]`

[参看自定义链接]

#### 用户面板 `module_user` `[Object]`

|参数|默认值|描述|
|--|--|--|
|chargeFirstText|``|首冲文案|
|chargeActiveText|``|充值活动文案，尽在非首冲时显示|
|alivehref|``|我要做主播按钮地址，开播引导链接|
|link|`[Array]`|用户链接|
|alive|`[Array]`|直播设置，开通直播间后显示|
|manage|`[Array]`|房间管理，存在可管理房间权限时显示|

```
PSbar.init($("#container"), {
  module_user: {
    chargeFirstText: "首冲文案",
    chargeActiveText: "充值活动文案",
    link: [
      {
        title: "消费记录",
        key: "consumestat",
        href: "https://www.panda.tv/consumestat"
      },
      {
        title: "竞猜记录",
        key: "quizstat",
        href: "https://www.panda.tv/personal?tab=quizstat"
      },
      {
        title: "观看历史",
        key: "watchhistory",
        href: "https://www.panda.tv/watchhistory"
      },
      {
        title: "我的消息",
        key: "message",
        href: "https://message.panda.tv/message?__plat=pc_web"
      },
      {
        title: "我的订阅",
        key: "myfollow",
        href: "https://www.panda.tv/myfollow"
      },
      {
        title: "车队",
        key: "chedui",
        href: "javascript:void(0)"
      }
    ],
    alive: [
      {
        title: "我的直播间",
        key: "mine",
        href: "https://www.panda.tv"
      },
      {
        title: "直播设置",
        key: "setting",
        href: "https://www.panda.tv/setting"
      },
      {
        title: "统计查询",
        key: "bamboostat",
        href: "https://www.panda.tv/bamboostat"
      }
    ],
    manage: [
      {
        title: "房间管理",
        key: "manageroom",
        href: "https://www.panda.tv/manageroom"
      }
    ]
  }
});
```

## 方法

|方法|示例|描述|
|--|--|--|
|init|`PSbar.init([dom],[options],[callback])`|初始化|
|syncInit|`PSbar.syncInit([dom],[options])`|同步初始化|
|asyncInit|`PSbar.asyncInit([callback])`|异步初始化|
|mini|`PSbar.mini()`|收起侧边栏|
|unmini|`PSbar.unmini()`|展开侧边栏|
|setCurrentKey|`PSbar.setCurrentKey('all')`|设置导航选中项|
|setCurrentCate|`PSbar.setCurrentCate('nsh')`|设置分类选中项|
|setMaobi|`PSbar.setMaobi([Number])`|设置猫币数量|
|setBamboo|`PSbar.setBamboo([Number])`|设置竹子数量|
|setHostLevel|`PSbar.setHostLevel([Number])`|设置主播等级|
|setExp|`PSbar.setExp([Object])`|设置经验值，参考主站业务接口|

## 自定义功能

使用callback开发自定义功能

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
    
    // 自定义的"客服"选项，会生成一个特殊 class="psbar-help-kefu"
    $('.psbar-help-kefu').click(function(){
        // 这里是点击客服后执行的内容
        ...
    })
    
    // 你也可以在回掉函数中定义其他方法
    ...
})

```