---
title: "红楼梦人物关系图"
date: 2025-06-30
type: post
tags:
  - 'insights'
  - '洞察'
  - Apache-Echart
  - '社交网络分析'
  - '数位人文'
  - '红楼梦'
image:
  preview_only: true
---

透过一张关系网络图，探索18世纪中国古典小说《[_**红楼梦**_](https://zh.wikipedia.org/wiki/%E7%B4%85%E6%A8%93%E5%A4%A2)》中人物之间的情感与互动关系，使用[Apache-Echart](https://echarts.apache.org/)。

<!-- more -->
{{% callout note %}}
##### 小结
`关系网络图`可产出`洞察`，中国古典小说亦能有新角度观察。
{{% /callout %}}

这张人物网络图基於[这份资料集](https://github.com/XianWoo/SNA_Dream_of_the_Red_Chamber/blob/main/relationship.csv)所绘制。仅包含加权度数最高的前 25 位人物，并且仅保留连结值大於等於 25 的关系。

### 网络图

{{< echarts-network name="人物网络图：红楼梦" id="Network_Dream_of_the_Red_Chamber" data="red_chamber_characters.yaml" >}}

请注意，节点大小是按比例缩放的。

群组根据人物所属的家族或角色分组（例如贾府、薛家、仆人／侍女及其他角色），每个群组对应一种颜色／类别。这种方式对《红楼梦》的人物非常直观，也具有视觉上的意义，无需运行完整的社群侦测演算法。

### 群组群组与颜色对应
- 红色：贾府
  - 宝玉、贾母、王夫人、贾琏、贾政、贾探春、贾惜春、贾迎春、李纨、邢夫人、贾蓉、贾珍、贾环
- 蓝色：薛家
  - 宝钗、薛姨妈、金钗
- 绿色：仆人／侍女
  - 紫鹃、妙玉、秋纹、平儿
- 橘色：其他亲戚／朋友
  - 凤姐、史湘云、秦可卿、尤氏
- 紫色：主要主角
  - 黛玉

## 小结

关系网络图可产出洞察，中国古典小说亦能有新角度观察。