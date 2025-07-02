---
title: '数据可视化AI代理人——路线图'
date: 2025-06-30
tags:
  - 'insights'
  - '聊天机器人'
  - RAG
  - AI工程
  - '服务设计'
  - 'AI能力'
image:
  caption: 'Image credit: [Tableau Agent](https://www.tableau.com/zh-tw/products/tableau-agent)'
---
🤔 将聊天机器人界面与功能集成到数字系统中，有助于在多样化情境中生成洞察。

💡方法：通过战略性地将这些AI驱动的触点嵌入关键决策流程中，组织可提升积极成果，同时主动降低潜在风险。

🎁贡献：本文开启融合 **AI工程** 与 **服务设计** 的旅程，致力于在数字转型中最大化 _**AI能力**_。

<!--more-->

## 🧠 生成式AI与商业智能的融合

现代企业运用检索增强生成（RAG）技术，弥合原始资料与可行洞察之间的落差。与独立的LLM相比，RAG系统结合语言模型的生成能力与从知识库丶资料库与文件中精准检索，确保AI回应有组织专属语境的「**扎根性**（groundedness）」(或可译**接地气程度**)。此 **扎根性** 正是透过提供结构化与非结构化资料於RAG中实现。

这扎根性程度正呼应Gartner於 [_2025数据与分析十大趋势_](https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-identifies-top-trends-in-data-and-analytics-for-2025) 中提出的「代理式分析（Agentic Analytics）」能力。


{{< figure
  src="UI_Dashbord_Chatbot.png"
  alt="UI_Dashbord_Chatbot.png"
  caption="仪表盘 加 智能代理：关键人机交互接触点"
  class="ma0 w-75"
>}}


### 📈 工业部署示例 📊

Oracle 和 Tableau 的行业解决方案展示了 AI 代理人在企业数据驱动决策过程中的潜力。

#### Oracle 的 RAG 应用架构

在开发企业级 RAG 解决方案的领先厂商中，Oracle 的架构整合了 **互动式仪表板与聊天界面**，成为前端应用的协调管线之一。其目标是提供来自实时或受监管数据集中具有上下文的回答——无论托管在本地或云端（参见 [部署 Oracle 多云生成式AI RAG](https://docs.oracle.com/en/solutions/oci-multicloud-genai-rag/index.html)）。例如，在供应链、能源和金融等场景中，用户可通过自然语言快速获取与关键绩效指标（KPI）相关的数据洞察。

#### Tableau：交互式仪表板实践

Tableau 作为“12 次 Gartner 魔力象限领导者”，其 2025 版本的核心是 **Tableau Agent**，即嵌入仪表板的多语言 **AI 助手**。该助手允许用户用自然语言提问，接收上下文回答，并从图表界面直接触发操作。另一个系统 **Tableau Pulse** 甚至可在用户提出问题前主动提供数据洞察。开发者还可通过 **VizQL Data Service API** 更细化控制 RAG 逻辑如何连接至 Tableau 的语义层。

这些聊天与RAG功能进一步增强了 Tableau 核心的 **Explain Data** 与 **Data Stories** 工具，为分析提供**即时叙事**与**可视化下钻/钻取（「由广入深/见树见林」）**能力。

#### 工业案例总结

总之，这些 AI 代理能力贯穿于人类决策者与仪表板的多个触点之间，使 AI 从“助手”转变为“引导者”。也就是说，AI 应该 **不仅提供辅助，还应具备指导作用**。

良好设计与实施的代理式数据仪表板，理应建立并强化正向反馈循环，从而提升决策的稳健性。

## 🧗 挑战 🌀

不过，Gartner 也[预测到 2027 年将有超过 40% 的代理式 AI 项目被终止，主要原因在于炒作与应用不当](https://analyticsindiamag.com/ai-news-updates/gartner-predicts-that-over-40-of-agentic-ai-projects-will-be-discontinued-by-2027/)。

在实时可视化和决策上下文中，展示和交互式分析 KPI 可能存在时效性、可追溯性和问责性方面的问题。

在将 LLM 引入商业智能平台与流程时，开发者必须思考以下问题：

- 如何正确解释复杂问题？
    
- 如何检索支持性数据？
    
- 如何将洞察可视化地呈现在仪表板中？
    

这些问题正强调 Gartner 所提出的“多模数据结构（Multimodal Data Fabric）”的重要性——这是支持跨结构化与非结构化数据的 RAG 部署关键。

## 仪表板与聊天代理集成路线图

我们可以通过融合 **AI 工程** 与 [服务设计](https://www.nngroup.com/articles/service-blueprints-definition/) 构建系统性方案，以最大化数字转型中的 _**AI 能力**_。

设计原则聚焦于提升各类 “接触点（touchpoints）” 的扎根性：

- **组织层**：使用 [服务蓝图](https://www.nngroup.com/articles/service-blueprints-definition/) 识别人与数据视图之间现有与潜在的关键接触点
    
- **社会层**：展开（1）决策系统设计与（2）用户体验研究，以确认其对于流程与体验的正向影响，并制定评估 groundedness 的指标
    
- **技术层**：聚焦于人类决策者与仪表板的接触点，开发 AI 工程项目提升聊天代理人的扎根性，例如使用 Model as a Service（MaaS）
    

### 🔄 针对开发者与设计者的扎根性建议

若要提升 RAG 型仪表板的“扎根性”评分，建议将其拆解为以下四层：

1. **语言模型层（LLM）**：用于解析查询上下文、重构意图与生成输出，建议考虑企业级与部门级语境建模
    
2. **检索层**：预处理内部文档或表格数据，构建混合索引体系，最好结合专家视角的 MoE（专家混合）上下文
    
3. **用户界面与叙事层**：在数据驱动流程中嵌入高阶的 Explain Data 与 Data Stories 设计
    
4. **组织层**：围绕 CI/CD 生命周期设计代理参与的人机协同系统，并保障时效、可追溯与问责要求
    

#### ✅ 结语：路线图

数据分析的未来将聚焦于 _可行动的对话_ （actionable conversations, c.f. _可行动情报_ actionable intelligence  ），或 IBM 创的新词 [ 对话型分析情报 （Conversational Analytics）](https://www.ibm.com/think/topics/conversational-analytics)，特别是在集成聊天机器人与数据仪表板的系统中——这些AI代理/智能体将针对**组织的关键知识与完善的数据处理流程进行应用**。

```markmap {height="400px"}
- 🤖 + 📊
  - 定义 🏷️
    - 🔗 集成
      - 聊天机器人 🤖
      - 数据仪表板 📊
  - 目标 🥅
    - 🔓 解锁
      - AI 能力 🧠
        - _可行动的对话_  💬
        - [对话型分析情报📡](https://www.ibm.com/think/topics/conversational-analytics)
    - 🤝 [共同设计](https://link.springer.com/chapter/10.1007/978-3-031-93733-0_25)
      - 基于LLM的多智能体 🧑‍🚀
  - 🛠️ 行动
    - 🤔 考虑
      - 接触点 🎯
        - 组织 🏢
        - 社会 🧑‍🤝‍🧑
        - 技术 🛠️
      - 层级 🧩
        - **语言模型层** 🧬
        - **检索层** 🔍
        - **界面与叙事层** 🖼️
        - **组织层** 🏛️
    - 🧲 应用
      - 集成指标 📐
        - _扎根性_ ⚓
      - 专业知识 🤹
        - AI 工程 🧑‍💻
          - 模型扎根 🧭
          - 机器人扎根 🤖
          - 模型即服务 (MaaS) 🧰
          - 持续集成与部署 CI/CD 🔄🚀
        - 服务设计 🎨
          - 📌 识别
            - 界面扎根性
            - 用户体验扎根性
            - 战略接触点
          - 🎼 协调
            - 系统设计扎根性 🎯
            - 服务蓝图 🔄🗺️
    - 🧵 生成
      - 即时叙述 ⏱️
      - 可视化下钻/钻取 📊
      - 可操作建议 💡
    - 🔋 优化 🎛️
      - 闭环正面影响 🌟
      - 用户正面体验 😊
      - 其他关键指标 📈
        - 时效性 ⏰
        - 可追溯性 🔍
        - 问责性 ⚖️🚨
  - 知识 📚
    - ⚙️ 生成
      - 社会技术设计 🧯
    - 🤝 [共同设计](https://link.springer.com/chapter/10.1007/978-3-031-93733-0_25)
      - 基于LLM的多智能体 🛰️
      - [跨学科](https://link.springer.com/chapter/10.1007/978-3-031-93733-0_25) 🎓
        - CI/CD 🔄🚀
        - 服务蓝图 🔄🗺️
        - 人机协同 (HITL)🌟😊
        - 因果循环（系统思维）🔄
```

部署 AI 代理需跨足**AI 工程**与**服务设计**两个领域，密切监测人机交互的正向反馈与成果。 

**扎根性**良好，真正「接地气」的AI代理，将在模型、检索、用户界面与组织层展现出清晰性、前瞻性与可靠性。

{{% callout note %}}
##### ✅ 结语：路线图
数据分析的未来将聚焦于 _可行动的对话。
**扎根性**良好，真正「接地气」的AI代理，将在模型、检索、用户界面与组织层展现出清晰性、前瞻性与可靠性。
{{% /callout %}}

---

## Oxon8 的相关项目

Oxon8 拥有多个仪表板项目（包括 [🍃💵visNetZero]({{% ref path="/project/visNetZero" %}})、[🍃🏭visCEADs]({{% ref path="/project/visCEADs" %}})、[🏫NFU.edu.cn]({{% ref path="/project/NetBib_NFU.edu.cn" %}})、以及 [🧰NetBib]({{% ref path="/project/NetBib" %}})），这些项目将集成 AI 代理，实现问答系统和 RAG 功能：

{{% include "/_snippet_/projects_all" %}}

这些 [🚧 智能应用扩展]({{% ref path="/project#theme_extensions" %}}) 预计将使用 [多个 Python 框架构建 AI 应用的界面](https://getstream.io/blog/ai-chat-ui-tools/#3-chainlit-build-uis-for-conversational-ai)，如 Panel（Holoviz）、[`Gradio Python 客户端`](https://www.gradio.app/docs/python-client/introduction) 和 [`Vercel 的 ai-chatbot`](https://github.com/vercel/ai-chatbot)。
