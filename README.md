# Merrier API

[Merrier说](https://merrier.wang)网站API，使用`express`进行搭建，并通过`pm2`进行进程管理

## Demo

```
curl http://api.merrier.wang/websites
```

```json
{
  "link_length": 240,
  "category_length": 16,
  "data": [
    {
      "title": "VR相关",
      "list": [
        {
          "desc":
            "汇集了国外涉及到VR的大部分知名网站，对VR感兴趣的闲暇时间可以逛逛",
          "url": "http://www.vrfavs.com/",
          "name": "VR网站仓库"
        }
      ]
    },
    {
      "title": "个人博客",
      "list": [
        {
          "desc": "用各种wearable记录自己的数据 特效特别酷炫",
          "url": "http://aprilzero.com/",
          "name": "Aanad Sharma"
        },
        {
          "desc":
            "这位前端开发者的博客都比较基础，而且很多都是总结性质的，很适合给初学者开扩视野",
          "url": "http://www.cnblogs.com/AllenChou/",
          "name": "AllenChou博客"
        },
        {
          "desc":
            "风格诡谲暗黑手绘草稿儿一样的网站，一段充满特效的旅程就此开始",
          "url": "http://aualeu.ro/",
          "name": "Auăleu"
        },
        {
          "desc":
            "应用多种媒介来展示不同内容，博主是这个时代少见的同时精通电子学、编程、交互设计的全能型天才。",
          "url": "http://worrydream.com/",
          "name": "Bret Victor"
        },
        {
          "desc":
            "腾讯的一位前端大牛，github有1K+follower，前端基础很好，值得学习",
          "url": "http://www.cnblogs.com/coco1s/",
          "name": "chokcoco"
        }
      ]
    },
    {
      "title": "人工智能",
      "list": [
        {
          "desc":
            "关于AI的各种信息，包括新闻和资源下载，旨在让大家更了解人工智能",
          "url": "http://www.atyun.com/",
          "name": "AiTechYun"
        },
        {
          "desc":
            "基于Python语言的机器学习工具，可以很轻松的实现分类、聚类、回归等",
          "url": "http://sklearn.lzjqsdd.com/",
          "name": "scikit-learn"
        },
        {
          "desc": "一个交互型网站，可以尝试输入各种词，比如“呵呵”",
          "url": "http://miaoxiaoer.com/",
          "name": "喵小二"
        }
      ]
    },
    {
      "title": "优秀网站",
      "list": [
        {
          "desc":
            "是一项为期三年的通过未知的史诗级水下之旅,探索世界上最不寻常的生物，网站动效和视觉效果很不错",
          "url": "http://aquatilis.tv/aquatilis-expedition/",
          "name": "Aquatilis Expedition"
        },
        {
          "desc": "通过点击手指添加不同乐器与和弦",
          "url": "http://www.basics09.de/",
          "name": "Basics09"
        },
        {
          "desc":
            "一段关于Ben来历的视频，营造出一个很酷的场景。它采用了很另类的视觉设计",
          "url": "http://benthebodyguard.com/",
          "name": "Ben the Bodyguard"
        },
        {
          "desc": "codepen网站的设计模式",
          "url": "https://codepen.io/guide",
          "name": "Codepen设计模式"
        },
        {
          "desc": "Ashley 的个人博客，一位外国妹子，主题就是摄影作品展示",
          "url": "http://girlwithacamera.co.uk/",
          "name": "Girl With a Camera"
        }
      ]
    }
  ]
}
```

## Install

#### Requirements

* Node v8.0+

```bash
git clone https://github.com/merrier/merrier-api.git
cd merrier-api
npm install
npm run dev
```

## Thanks

* [overwatch-api](https://github.com/alfg/overwatch-api)
* [Jieraaa](https://github.com/Jieraaa)

## License

MIT
