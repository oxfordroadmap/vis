---
title: "Dream of the Red Chamber Graph"
date: 2025-06-30
type: post
tags:
  - 'insights'
  - 'Social Network Analysis'
  - 'Dream of the Red Chamber'
image:
  preview_only: true
---

Explore the character relationships in a Chinese novel written in 18th century China called [_**Dream of the Red Chamber**_《红楼梦》](https://en.wikipedia.org/wiki/Dream_of_the_Red_Chamberusing) with a network graph.

<!-- more -->
{{% callout note %}}
##### In short
Insights can be gained through `network graph`, including new perspectives from this case of a Chinese novel.
{{% /callout %}}

This character network graph is based on [the dataset](https://github.com/XianWoo/SNA_Dream_of_the_Red_Chamber/blob/main/relationship.csv). Only **the top 25** nodes by weighted degree are included, and only links value equal or larger than 25 are kept.  

### Graph

Note that the node size is scaled proportionally. 

{{< echarts-network name="Character Network Graph: Dream of the Red Chamber" id="Network_Dream_of_the_Red_Chamber" data="red_chamber_characters.yaml" >}}

 Clusters are constructed according to their family or role (e.g., Jia family main branch, Jia family Ning branch, Xue family, maids/servants, and others). Each cluster is assigned a unique color/category. This approach is intuitive for this novel’s characters and visually meaningful, without running a full community-detection algorithm.

### Cluster assignments and colors

- Red: Jia family main branch 
  - 宝玉, 贾母, 王夫人, 贾琏, 贾政, 贾探春, 贾惜春, 贾迎春, 李纨, 邢夫人, 贾蓉, 贾珍, 贾环 
- Blue: Xue family 
  - 宝钗, 薛姨妈, 金钏
- Green: Maids/servants 
  - 紫鹃, 妙玉, 秋纹, 平儿
- Orange: Other close kin/friends 
  - 凤姐, 史湘云, 秦可卿, 尤氏 
- Purple: Main protagonist 
  - 黛玉

## In short

Insights can be gained through network, including new perspectives from this case of a Chinese novel.
