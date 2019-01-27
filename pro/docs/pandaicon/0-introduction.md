# 介绍 introduction

熊猫直播，通用业务图标集

### 安装

```
<link rel="stylesheet" href="https://www.panda.tv/cmstatic/pandaicon.css">
```

### 通用图标
使用规则：`<i class="icon-[name]">`

<div id="common" class="demo">
  <ul class="clearfix">
    <li>
      <i class="icon-bamboo"></i>
      <span>bamboo</span>
    </li>
    <li>
      <i class="icon-maobi"></i>
      <span>maobi</span>
    </li>
  </ul>
</div>

### 用户等级图标
使用规则：`<i class="icon-level icon-level-[number]">`

<div id="level" class="demo"></div>

### 主播等级图标

使用规则：`<i class="icon-host-level icon-host-level-[number]`></i>`

灰色图标：`icon-host-level-grey`

<div id="hostlevel" class="demo"></div>

### 主播粉丝徽章

使用规则：`<i class="icon-badge icon-badge-level-[number]></i>`

颜色类型：`icon-badge-type-[number]` 蓝-1 绿-2 紫-3 粉-4 红-5 橘-6

图标尺寸：`icon-badge-size-big`

<div id="badge" class="demo"></div>

### 英雄职业徽章

使用规则：`<i class="class="icon-hero-vip icon-hero-vip-[type]-[number]`></i>`

<div id="hero" class="demo"></div>


  <style>
    .demo {
      padding: 10px 20px;
      width:100%;
      overflow:auto;
      border:1px solid #eee;
      border-radius:5px;
    }
    .demo ul {
      padding: 15px 0;
    }
    .demo li {
      padding: 5px 0;
      margin: 0 !important;
      list-style: none;
      float: left;
      text-align: center;
    }
    .demo li span {
      padding: 5px 0 0;
      display: block;
      text-align: center;
      font-size: 12px;
    }
    #common ul {
      width: 300px;
    }
    #common li {
      width: 25%;
    }
    #level ul {
      width: 300px;
    }
    #level li {
      width: 20%;
    }
    #hostlevel ul {
      width: 400px;
    }
    #hostlevel li {
      width: 10%;
    }
    #badge ul {
      width: 600px;
    }
    #badge li {
      width: 16.6666%;
    }
    #hero ul {
      width: 600px;
    }
    #hero li {
      width: 16.6666%;
    }
  </style>
