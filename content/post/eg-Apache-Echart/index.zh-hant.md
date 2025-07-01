---
title: "紅樓夢人物關係圖"
date: 2025-05-30
type: post
tags:
  - 'insights'
  - '洞察'
  - Apache-Echart
  - '社交網絡分析'
  - '數位人文'
  - '紅樓夢'
image:
  preview_only: true
---

透過一張關係網絡圖，探索18世紀中國古典小說《[_**紅樓夢**_](https://zh.wikipedia.org/wiki/%E7%B4%85%E6%A8%93%E5%A4%A2)》中人物之間的情感與互動關係，使用[Apache-Echart](https://echarts.apache.org/)。

<!-- more -->
{{% callout note %}}
##### 小結
`關係網絡圖`可產出`洞察`，中國古典小說亦能有新角度觀察。
{{% /callout %}}

這張人物網絡圖基於[這份資料集](https://github.com/XianWoo/SNA_Dream_of_the_Red_Chamber/blob/main/relationship.csv)所繪製。僅包含加權度數最高的前 25 位人物，並且僅保留連結值大於等於 25 的關係。

### 網絡圖

{{< echarts-network name="人物網絡圖：紅樓夢" id="Network_Dream_of_the_Red_Chamber" data="red_chamber_characters.yaml" >}}

請注意，節點大小是按比例縮放的。

群組根據人物所屬的家族或角色分組（例如賈府、薛家、僕人／侍女及其他角色），每個群組對應一種顏色／類別。這種方式對《紅樓夢》的人物非常直觀，也具有視覺上的意義，無需運行完整的社群偵測演算法。

### 群組群組與顏色對應
- 紅色：賈府
  - 寶玉、賈母、王夫人、賈璉、賈政、賈探春、賈惜春、賈迎春、李紈、邢夫人、賈蓉、賈珍、賈環
- 藍色：薛家
  - 寶釵、薛姨媽、金釵
- 綠色：僕人／侍女
  - 紫鵑、妙玉、秋紋、平兒
- 橘色：其他親戚／朋友
  - 鳳姐、史湘雲、秦可卿、尤氏
- 紫色：主要主角
  - 黛玉

## 小結

關係網絡圖可產出洞察，中國古典小說亦能有新角度觀察。