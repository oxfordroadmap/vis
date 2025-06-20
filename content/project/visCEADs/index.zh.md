---
title: visCEADs
date: 2023-12-10T08:08:08.888Z
draft: false
featured: true
authors:
  - admin
tags:
  - '🏗原创'
  - SDA行业脱碳法
  - NetZero净零
  - 网络图可视化
  - theme_NetZero
  - 'theme_creations'
categories:
  - project
  - portfolio
image:
  # dir: \assets\media\photoBW_Poznan_Factory.jpg
  filename: prj-visCEADs.webp 
  preview_only: true
---

「精准脱碳」产品，`🍃🏭VisCEADs`为中国各省各行业脱碳路线提供 [中国碳核算数据库](https://www.ceads.net.cn/)(Carbon Emission Accounts & Datasets，CEADs) 数据的交互可視化。

2024年6月推出，精准脱碳[``《🏗仪表盘》``] (https://oxon8.netlify.app/visualization/prj-visCEADs/index.zh)及 [``《🧰使用手册》``](https://oxon8.netlify.app/visualization/prj-visceads/html/index.zh) 

`🍃🏭VisCEADs`可结合 **部门脱碳方法/行业脱碳法 (SDA)** 及 **净零经济(Net Zero Economy)** 产出洞察。

<!--more-->

## 項目簡介

`🍃🏭VisCEADs`交互可视化产品功能包括：
* ``网络图``、
* ``桑基图``、
* ``关键指标互动图表``，

可为地方及行业领导、产业经营者、研究者及智能碳排管理平台等，依各脱碳指标（如中国[《2024—2025年节能降碳行动方案》](https://www.gov.cn/zhengce/202405/content_6954583.htm)），结合 **部门脱碳方法/行业脱碳法 (SDA)** 及 **净零经济(Net Zero Economy)** 产出以下关键信息及情报：

* ``减多少``、
* ``减哪``、
* ``如何产业链上下游连减``
* 
`🍃🏭VisCEADs` 最早于2023年释出[「α」0.1版本] (https://oxon8.netlify.app/visualization/prj-visceads0.1/index.zh)，未来将结合 [🤖panel_chat项目]({{% ref path="/project/panel_chat" %}}) 的大语言模型 ( LLM ) 能力推出``脱碳智能助手``。

## 项目各图
###  网络图
#### 展示投入产出关系及关键指标

展出核心**产业结构**，`网络图`[展示投入产出关系及行业部门关键指标](https://oxon8.netlify.app/visualization/prj-visceads/html/chapters/02.main)。其交互控件有[年份、地区、主要指标、网络引力斥力调整](https://oxon8.netlify.app/visualization/prj-visceads/html/features/app_feature_main-02.zh)。


{{< figure
  src="prj-VisCEADs_layout.png"
  alt="精准脱碳🍃🏭VisCEADs《🏗仪表盘》 主页截屏一：展示  网络图 、 桑基图 、关键指标互动图表"
  link="https://oxon8.netlify.app/visualization/prj-visCEADs/index.zh"   caption="🍃🏭VisCEADs 提供 中国碳核算数据库(Carbon Emission Accounts & Datasets，CEADs) 数据的交互可視化《🏗仪表盘》 主页截屏一：展示  网络图 、 桑基图 、关键指标互动图表"
  class="ma0 w-75" >}}

###  桑基图
#### 探索 **产业结构** 与 **能源结构** 关系及指标

探索 **产业结构** 与 **能源结构** 关系，`桑基图`允许用户选择 `地区` 及 `年份`，比较[核心投入产出行业关系桑基（图）](https://oxon8.netlify.app/visualization/prj-visceads/html/features/app_feature-04)。

`桑基图`和`网络图`构成 **关键指标互动图表**，还能与与多可交互图表交叉使用。


### 更多可交互图表
#### 构成 **减污降碳全景图**

补充详细信息，[📅副图表](https://oxon8.netlify.app/visualization/prj-visceads/html/chapters/03.additional.zh)整合以下分页：
- [🏭分页1行业表](https://oxon8.netlify.app/visualization/prj-visceads/html/features/app_feature-01.zh)
- [💹分页2投入产出表](https://oxon8.netlify.app/visualization/prj-visceads/html/features/app_feature-02.zh)
- [📉分页3历史走势](https://oxon8.netlify.app/visualization/prj-visceads/html/features/app_feature-03.zh)
- [🔀分页4桑基图](https://oxon8.netlify.app/visualization/prj-visceads/html/features/app_feature-04.zh)

更多详细[``中国碳核算数据库（CEADs）``](https://www.ceads.net.cn/) 信息的投入产出及碳核算可視化，为各省各行业提供 `减污降碳全景图` 。

## 项目创新点：
### 数据科学缩减及可视化

精准脱碳 `🍃🏭VisCEADs` 创新点主要将 CEADs 相关的百万多的数据点，经数据科学有效缩减并转换成可视化的格式。

{{% callout note %}}
VisCEADs 综合考量信息量、视觉负担，以及网络交互响应速度后，采用各年份各省前5%的边缘数据，计88个边。
{{% /callout %}}

相关的数据缩减及转换说明请参见：

* [``《使用手册》4. 🗃️CEADs 数据库``](https://oxon8.netlify.app/visualization/prj-visceads/html/chapters/05.roadmapping.zh)。


### 从情报到智能助手

智能化指的是进一步使用机器学习、合成数据、人工智能等，使可视化平台提升智能功能。

精准脱碳 `🍃🏭VisCEADs` 要达成的创新点之一是：能回答用户脱碳问题。

**脱碳智能助手**生成建议及可视化详情参考请见[`使用手册 5. 🧭发展路线`](https://oxon8.netlify.app/visualization/prj-visceads/html/chapters/05.roadmapping.zh)

{{% callout success %}}
和[廖汉腾]({{% ref path="/experience" lang="zh" %}})合作，开启`精准脱碳智能助手`共建共用之旅。[ Email 📧 连络](mailto:h.liao%40ieee.org?subject=AboutVisCEADs)。
{{% /callout %}}

智能化方向之一是，使用生成**数据与文本合成数据**，开发人工智能问答系统，回答用户如以下问题：**广东在2060年达成碳中和时间表及产业投入产出路线图應应为何？** 

相关技术路线将使用 [Panel Chat](https://github.com/holoviz-topics/panel-chat-examples)案例，建构并应用[OpenAI](https://openai.com/blog/chatgpt), [Mistral AI](https://docs.mistral.ai/), [Llama](https://ai.meta.com/llama/), 等大语言模型。

### 发展历程

发表科研论文成果 ([Smart digital platforms for carbon neutral management and services: Business models based on ITU standards for green digital transformation](https://www.frontiersin.org/journals/ecology-and-evolution/articles/10.3389/fevo.2023.1134381/full)) 后，双碳平台的 `标准化` 及 `商业化` 成为产业结构脱碳转型决策关键。

`🍃🏭VisCEADs` 用于 **双碳平台搭建**，能提供产业结构脱碳转型决策的精准情报，服务各省市各行业双化转型，将 **碳排负资产** 转为加值新能力。

对于碳排及产业数据推动绿色化数字化双化行动，此「精准脱碳」交互可视化产品最早于2023年12月[COP 28《联合国气候变化框架公约》第28次缔约方大会](https://www.mee.gov.cn/xxgk/hjyw/202311/t20231101_1044710.shtml)同时同地的[IEEE 绿色技术丶可持续发展和净零政策与实践研讨会 （IEEE GTSNZ） 2023](https://gtsnz.org/)，由廖汉腾报告两篇产业论文支持[绿色化数字行动@COP28](https://oxon8.netlify.app/post/2023-12-02-SPCG-ITU-ISO-progress-Oxon-translated)。


## 关于 CEADs

由清华大学关大博教授 创建于2016年 主持的[`中国碳核算数据库（CEADs）`](https://www.ceads.net.cn/) ，多年来得到中国、英国研究机构的支持，所产出的碳核算数据平台。参见官方[网站](https://www.ceads.net.cn/)，特别是[投入产出表](https://www.ceads.net.cn/data/input_output_tables/)。
