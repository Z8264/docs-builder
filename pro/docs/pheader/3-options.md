## 业务参数配置 options

### 基本参数

配置`baseUrl`，将该组件中默认配置的相对路径指向 baseUrl 地址，但不会改变自定义配置中的路径。通过 data 属性配置的方法，参数为 `data-base-url=""`。示例：

```
PHeader.init($('#container'),{
    baseUrl:'http://www.panda.tv'
});
```

可以通过引入参数 `module_`+[子模块名]，来自定义配置一个子模块(`module`)，例如：

```
PHeader.init($('#container'),{
    module_logo:{
        url:'https://i.h2.pdim.gs/bae905b5ccc183b82c00b445c5fb4c89.png'
    },
    module_search:{
        placeholder:'搜游游戏/主播'
    }
});
```

默认情况下所有子模块(`module`)处于开启状态，如果你需要关闭掉一个子模块，可以将模块参数设置为 false，例如：

```
PHeader.init($('#container'),{
    module_search:false
});
```

### LOGO `module_logo`

|参数|data属性|默认值|说明|
|--|--|--|--|
|url|data-logo-url|[参考远程配置]|logo图片地址|

```
PHeader.init($('#container'),{
    module_logo:{
        url:'https://i.h2.pdim.gs/bae905b5ccc183b82c00b445c5fb4c89.png'
    }
});
```

### 导航 `module_nav`

|参数|data属性|默认值|说明|
|--|--|--|--|
|current|data-nav-current|''|当前正在显示的状态，与items中的key值相同|
|items|--|[参考远程配置]|导航列表配置项`title` `key` `href` `image`|

|items参数|说明|
|--|--|
|title|显示标题，例如 `title:"首页"`|
|key|用于current索引的关键字，例如 `key:"home"`|
|href|href 例如 `href:"/all"`|
|image|导航右上角的小图标|



注意：如果你配置了itmes参数，此配置项将覆盖远程和本地的默认配置，且`baseUrl`将对导航失效，我们并不推荐你这么做，请尽量联系维护人员，更改远程配置。

```
PHeader.init($('#container'),{
    module_nav:{
        current:'home',
        items:[{
            title:'首页',
            key:'home',
            href:'/'
        },{
            title:'全部',
            key:'all',
            href:'/all'
        },{
            title:'官方商城',
            key:'king',
            href:'https://mall.panda.tv/',
            image:'https://i.h2.pdim.gs/cc55ce1b8a23b5b5e19538918c71bec3.png'
        }]
    }
});
```

### 搜索 `module_search`

|参数|data属性|默认值|说明|
|--|--|--|--|
|placeholder|data-search-placeholder|[参考远程配置]|提示文案|
|preinstall|data-search-preinstall|[参考远程配置]|预设搜索文案|
|action|data-search-action|[参考远程配置]|action地址|
|paramname|data-search-paramname|[参考远程配置]|传递参数所需要参数名|

```
PHeader.init($('#container'),{
    module_search:{
        placeholder:'搜游戏/主播',
        action:'/search',
        paramname:'kw'
    }
});

```

### 下载 `module_download`

|参数|data属性|默认值|说明|
|--|--|--|--|
|text|data-download-text|[参考远程配置]|提示文案|
|href|data-download-href|[参考远程配置]|href地址|

```
PHeader.init($('#container'),{
    module_download:{
        text:'下载',
        href:'/client.html'
    }
});

```
### 订阅 `module_follow`

默认参数值为ture，关闭可设置为false

### 个人面板 `module_myinfo`

|参数|data属性|默认值|说明|
|--|--|--|--|
|recharge|data-myinfo-recharge|[参考远程配置]|活动文案|

