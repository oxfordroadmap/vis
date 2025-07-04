---
title: 🤖AI 工程（AI Engineering）：建构智慧应用的 2025 年必读书籍📖
date: 2025-06-24
authors:
  - admin
tags:
  - recommendations
  - AI_Engineering
  - AI能力
  - AI代理
  - RAG
  - 自由开源
image:
  caption: "图片来源: [**O'Reilly**](https://www.oreilly.com/library/view/ai-engineering/9781098166298/)"
---

如果 2025 年只能推荐一本关於智慧应用的书籍，那麽由 Chip Huyen 撰写的这本[《AI 工程：使用基础模型建构应用程式》（Building Applications with Foundation Models）](https://www.oreilly.com/library/view/ai-engineering/9781098166298/)，无疑地是最佳选择。

在总结 AI 应用程式 开发方面，该书已达成三项成果：(1) 应用及实作的精要通用化、 (2) AI 工程的共通术语、 (3) 辩证了AI 应用的工程学基础。

## 书籍总览
```markmap
# AI 工程

## 1–3. 智能应用与基础模型

### 🚀 构建智能应用导论

- AI 工程的兴起  
- 应用场景  
  - 编码任务  
  - 图像与视频生成  
  - 写作支持  
  - 教育辅导  
  - 对话机器人  
  - 信息整合  
  - 数据组织  
  - 自动化流程  
- 应用规划  
  - 场景评估  
  - 设定期望  
  - 里程碑规划  
  - 持续维护  
- AI 工程技术栈  
  - 三层结构  
  - 与 ML 工程的区别  
  - 与全栈工程的区别  

### 🧠 技术理解基础

- 训练数据  
  - 多语言模型  
  - 行业专属模型  
- 模型构建  
  - 模型结构  
  - 模型规模  
- 后训练（微调）  
  - 监督式微调  
  - 偏好式微调  
- 采样机制  
  - 采样基本原理  
  - 策略与方法  
  - 推理过程计算成本  
  - 结构化输出  
  - AI 的概率性本质  

### 📏 评估方法学

- 评估挑战  
- 语言建模指标  
  - 熵  
  - 交叉熵  
  - 每字符/字节比特数  
  - 困惑度及其解读与应用  
- 精确评估方法  
  - 功能正确性  
  - 与参考数据的相似度  
  - 向量嵌入基础  
- 使用 AI 模型作为评审  
  - 为什么  
  - 如何使用  
  - 限制与考量  
  - 哪些模型适合胜任  
- 模型对比排名  
  - 比较挑战  
  - 未来发展  

## 4. AI 系统评估

### 🧪 评估标准

- 领域适应能力  
- 生成表现能力  
- 指令理解与执行  
- 成本与延迟控制  

### 🧭 模型选择

- 评估流程  
- 自建 vs. 购买  
- 如何使用公开评测基准  

### 🛠️ 评估流程设计

- 步骤 1：评估各组件  
- 步骤 2：制定评估规范  
- 步骤 3：定义方法与数据  

## 5. 提示工程（Prompt Engineering）

### 🎯 提示基础知识

- 上下文学习：Zero-shot 与 Few-shot  
- 系统提示与用户提示  
- 上下文长度与效率管理  

### ✨ 最佳实践指南

- 写出清晰明了的指令  
- 提供足够的上下文  
- 拆解复杂任务  
- 给模型时间思考  
- 多轮迭代与提示优化  
- 工具评估与版本管理  

### 🛡️ 安全防护策略

- 保护提示内容、防止逆向分析  
- 防止提示越权与注入攻击  
- 敏感信息提取检测  
- 防御 AI 攻击的多种手段  

## 6. RAG 与 AI Agents

### 🔍 RAG
- =检索增强生成
- 架构概览  
- 检索算法  
- 检索优化策略  
- 多模态扩展（超越文本）  

### 🤖 AI Agents
- =智能体/代理系统
- 工具能力整合  
- 自动规划机制  
- 错误处理与能力评估  

### 🧠 记忆模块
- 短期记忆机制
- 长期记忆机制  

## 7–10. 微调、优化与使用者回馈

### 🔧 微调模块

- 何时需要微调  
  - 微调的场景与动机  
  - 微调与 RAG 的选择对比  
- 内存瓶颈解析  
  - 反向传播与可训练参数  
  - 数值表示与内存计算  
  - 模型量化机制  
- 高效技术方案  
  - 参数高效微调  
  - 模型融合与多任务微调  
  - 战术与技巧  

### 🧱 数据工程

- 数据整理与获取  
  - 数据质量  
  - 覆盖范围与规模  
  - 数据标注与采集方法  
- 数据增强与合成  
  - 数据合成动机  
  - 传统 vs. AI驱动方法  
  - 模型蒸馏技术  
- 数据处理流程  
  - 检查、去重、清洗、格式转化  

### 🚀 推理优化

- 推理指标与理解  
  - 性能评估标准  
  - AI 加速硬件支持  
- 优化实践  
  - 模型层优化策略  
  - 推理服务优化部署  

### 🏗️ 架构设计与回馈机制

- 智能应用的整体架构设计  
- 使用者回馈回圈与体验优化  

```

### 定位与对象

该书强调要提供**应用导向**、**实作层面**的知识，而非学术理论的深度研究，是部为工程师、开发者与技术决策者量身打造的实用指南，内容聚焦於如何***善用基础模型来构建智慧应用***。（见`前言` ）

我浏览大纲并查看其**应用**、**实作**的细节，发现虽然这本书并没有提供实作代码，但是的确已综合精要总结了***如何善用基础模型去设计并验证大语言模型***开於智能运用的所有相关操作型知识。

### 特点

所以这本书的特点，同时也是其优点（及缺点），正是以出版商书介所提的 `模型作为服务`（model-as-a-service approach ，或可缩为**MaaS 模型即服务**，可和之前 **SaaS 软件即服务** 相比较）。

这意谓着此书没法带读者用任何工具做出一个智能App，但是同时就不会被任一厂商或平台的工具所绑定。该书的主要优点是，其**应用**、**实作**的细节有高度的共通性、必要性、及实用性，所以非常适合作为新手入门见树也见林，也适合已熟悉某些工具及任务流程的老手用来去理解其他竞品工具、以及上下游任务流程的工具书。

这进一步突显此书在科技管理及科技治理的潜力，这本书的确把近年来以大语言模型去进行服务人类社会的工程经验概化并摘要，所以提练并科普了不少基本工程学用与机器学习及人工智能的 **评鉴/评估**、**提示/引导**、**品质管理/故障排除** 各方面。

总的来说，从整体到细节的优化，《AI 工程》提出一套能用於规划并改进的整合系统及工程知识。是目前我看到在实践 智能App 的 CI / CD （持续整合及开发）的最完整的核心知识工具书。

### AI 工程：从基础模型评鉴/评估开始

**第一至三章** 奠定**评鉴/评估**基础，为了要达成第三章**评鉴/评估**（Evaluation）方法学的基础，该书前三章不多不少地介绍 AI 应用开发、大型语言模型（LLM），再到基础模型（Foundation Models）的演进。

前三章的基本假设及框架可以用一句话总结是：「AI 工程」已是一门新兴学门。

首先，虽然应用情境广泛且有差异，但其**开发流程与规划具有共通性**：包括使用情境评估、期望设定与维运安排。其次，虽然技术繁多，但 AI 工程 有三层架构的技术栈，并以此和已建立的专业或学门（指 ML Engr. 机器学习工程师 与 Full-Stack Engr. 全端/全栈软件工程师）有其根本差异。最后，在该书前二章简要介绍如训练资料（包括多语模型、领域优化等）、模型参数（架构与大小）、微调/后训（监督式与偏好式）、采样策略（包括策略、计算负载、输出结构化程度、机率特性等等）技术概念后，於第三章**评鉴/评估**方面概要了实践常用的大型语言模型应用工程的经典技术指标方法，不只包括模型评估技术指标，还包括
  **精确评估**、  **AI 即评鉴者**  及 **模型排名比较**  等评估方法。

### 整体 AI 系统：模型以外的评鉴方法及改进工程

**第四章** 探讨整体 AI 系统的评鉴，而不仅是模型本身。评鉴准则包括：领域能力、生成效果、指令遵循度、成本与延迟等。此章也涵盖了模型选择的流程、建置与采购的取舍分析，以及完整评估流程的设计与基准参考。

**第五章** 聚焦於提示工程（Prompt Engineering），从 Zero-shot、Few-shot 到 System Prompt 的应用，还有如何管理上下文与提示效能。最佳实践包括撰写明确指令、提供充足上下文、拆解复杂任务与反覆优化提示。最後也谈到了提示攻击、防御策略与提示版本管理。

### AI 代理：建构及改进工程

**第六章** 引介增强式生成（RAG）与自主 AI 代理人。涵盖检索架构、演算法与扩展应用（如非文字），代理人部分则着重工具、规划与故障评估，以及记忆机制的应用。

**第七章** 探讨微调策略：何时该进行微调，何时应选择其他方法（如 RAG），并解析记忆瓶颈、数值表示法与参数量量化等关键议题。最後介绍各种参数效率微调技巧与模型合并策略。

**第八章** 锁定资料工程，内容涵盖资料品质管理、涵盖范围、资料量级与标注方式，并深入探讨资料合成（传统与 AI 驱动方法）以及蒸馏技术。也提供资料处理管道建议，包括去重、清洗、转换与格式化。

**第九章** 专注於推论优化。先介绍效能指标与硬体加速器（如 AI 晶片），再来是模型层与服务层的最佳化技巧，以提升整体系统效率。

**第十章** 最後聚焦於 AI 系统架构设计与使用者回馈机制，强调持续性改进与人机共创的实务方法。

## 初读心得

由於该书总结 AI 应用程式 开发方面的实用概化价值，在 2025年的当下，各年级的大学生及各层级的经管人员都可以人手一本作为消化最新进展的概念与规范工具书，享受其见树及见林的业界人士总结。（由於此书 界定了 (1) 应用及实作的精要通用化。）

对於企业及政府部门的领导、管理及技术人员来说，该书虽未绑定特定厂商或平台的工具甚至标准，但已消化出应用及实践的共通专业术语，是有价值的工具书，来产出如各项技术标准、政府标案标书、新产品及服务文档的重要参考。（由於此书 界定了(2) AI 工程的共通术语。）

对於教学管理人员及课程开发者来说，该书辩证的AI 应用的工程学基础，是有强大潜力和各专业知识的评估及评鉴体系做创新的，此方向的创新是可在任务、概念、流程、资料等等各方面展开。（由於此书 (3) 辩证了AI 应用的工程学基础。）

---