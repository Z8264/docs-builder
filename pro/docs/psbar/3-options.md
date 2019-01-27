## 业务参数配置 options

### 基本参数

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


### LOGO `module_logo` `[Object]`

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


### 搜索 `module_search` `[Object]`

|参数|默认值|说明|
|--|--|--|
|placeholder|'搜游戏/主播'|提示文案|
|pretext|''|预设搜索文案|
|prehref|''|预设搜索链接，存在预设搜索文案时生效|
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




### 广告推荐 `module_ads` `[Array]`

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
### 导航菜单 `module_menu` `[Array]`

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

### 推荐分类 `module_recommend` `[Array]`

推荐分类，在未登录或未进行个人定制的情况下显示。

CMS资源配置："侧边栏推荐分类设置"

此业务禁止自定义配置。

### 全部分类 `module_cates` `[Array]`

CMS资源配置："分类列表"

此业务禁止自定义配置。

### 分类补充 `module_labels` `[Array]`

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

### 自定义链接 `module_link` `[Array]`

|参数|默认值|说明|
|--|--|--|
|title|''|标题|
|key|''|关键字，与icon和页面路径保持一致|
|href|''|链接|
|target|'_self'|`<a>`标签的target属性|

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

### 自定义帮助 `module_help` `[Array]`

[参看自定义链接]

### 用户面板 `module_user` `[Object]`

|参数|默认值|描述|
|--|--|--|
|chargeFirstText|``|首冲文案|
|chargeActiveText|``|充值活动文案，尽在非首冲时显示|
|memberAttestText|``|实名认证提示文案|
|alivehref|``|我要做主播按钮地址，开播引导链接|
|link|`[Array]`|用户链接|
|alive|`[Array]`|直播设置，开通直播间后显示|
|manage|`[Array]`|房间管理，存在可管理房间权限时显示|

```
PSbar.init($("#container"), {
  module_user: {
    chargeFirstText: "首冲文案",
    chargeActiveText: "充值活动文案",
    memberAttestText: "认证会员：1~4级英雄免费送>>",
    alivehref:"https://www.panda.tv/sps/zhuboguide2018.html",
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
