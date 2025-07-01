---
title: 'Data Visualization AI agent-- a roadmap'
date: 2025-06-30
tags:
  - 'insights'
  - 'Chatbots'
  - RAG
  - 'AI Engineering'
  - 'Service Design'
  - 'AI capabilities'
image:
  caption: 'Image credit: [Tableau Agent](https://www.tableau.com/zh-tw/products/tableau-agent)'
---

'🤔' Integrating chatbot interfaces and functionalities into digital systems enables insight generation across diverse operational contexts.  

'💡Method:' By strategically embedding these AI-driven touchpoints throughout key decision-making processes, organizations can amplify positive outcomes while proactively mitigating potential risks.

'🎁Contribution:' This post begins a journey that integrates **AI Engineering** and **Service Design** to maximize ***AI capabilities*** in digital transformation.

<!--more-->
## 🧠 Generative AI Meets Business Intelligence

Modern enterprises are turning to Retrieval-augmented Generation (RAG) technique to bridge gaps between raw data and actionable insights. Unlike standalone LLMs, RAG systems combine the generative power of language models with targeted retrieval from trusted sources like knowledge bases, databases, and documentation. This architecture ensures that AI-driven responses are grounded in accurate, organization-specific context.  Such "groundedness" is ensured by providing enterprise knowledge and information in both structured and unstructured data in RAG systems. 

This "groundedness" through RAG technique, can contribute to the notion of “Agentic Analytics”, a critical AI capability defined in by Gartner’s [_Top Trends in Data & Analytics for 2025_](https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-identifies-top-trends-in-data-and-analytics-for-2025).  


{{< figure
  src="UI_Dashbord_Chatbot.png"
  alt="UI_Dashbord_Chatbot.png"
  caption="Dashboard plus AI Agents：Critical touchpoints between AI and humans"
  class="ma0 w-75"
>}}


### 📈 Industrial Deployment Examples 📊 

Industrial solutions provided by Oracle and Tableau demonstrate the AI-agentic offering in such data-driven decision processes in enterprises. 

#### Oracle’s Applied RAG Architectures

Among the enterprise leaders actively developing production-grade RAG solutions, Oracle does include **the integration of interactive dashboards and chatbot interfaces**, as part of the orchestrated pipelines across front-end applications.  The goals is to enable contextual answers drawn from live or regulated datasets—whether hosted on-premise or in the cloud. (See _[Deploy Multicloud Generative AI Retrieval Augmented Generation (RAG)](https://docs.oracle.com/en/solutions/oci-multicloud-genai-rag/index.html)_) The enterprise KPIs, for instance, can be immediately retrieved when using natural language questions, with this agentic capability to support complex decision-making in sectors like supply chain, energy, and finance.  

#### Tableau: Conversational Dashboards in Action

Recently rebranded as a “12x Gartner Magic Quadrant Leader”, the core of Tableau's 2025 release is **Tableau Agent**, a multilingual **AI assistant embedded within dashboards**. It enables users to ask plain-language questions, receive contextual answers, and trigger actions directly from the chart interface.  An additional system called **Tableau Pulse**  proactively surfaces data insights to users before asking.  More granular control over how RAG logic within the Tableau semantic layer is provided to developers through **VizQL Data Service API**.  

The chat and RAG functionality thus add values to Tableau’s core **Explain Data** and **Data Stories** tools by using the conversational stack to offer just-in-time narratives and visual drilldowns. 

#### Summary of Industrial Cases

In short, these AI agentic capabilities in various **touchpoints of human decision-makers and dashboards** elevate the role of AI from "assistance" to "guidance".  That is to say, AI should **not only assist but also guide**.  

Good design and implementation of such agentic data dashboards should ideally create and reinforce a positive feedback loop that strengthens decision-making resilience.

## 🧗	Challenges 🌀 

However, these Agentic AI Projects can be of low-quality, as Gartner also [predicts that over 40% will be discontinued by 2027](https://analyticsindiamag.com/ai-news-updates/gartner-predicts-that-over-40-of-agentic-ai-projects-will-be-discontinued-by-2027/), mainly because of hype and misapplication. 

Indeed, for instance, in real-time visualization and decision-making contexts, visualization of and interaction with enterprise KPIs entail issues such as timing, traceability, and accountability.

When introducing LLMs into business intelligence platforms and processes, how can one ensure conversational agents to achieve the following properly?

* interpret complex questions, 
* retrieve supporting data, and 
* present insights directly within visual dashboards

 These questions highlight the importance of, what Gartner coined as "Multimodal Data Fabric", critical for RAG deployments spanning both structured and unstructured data.

## A roadmap when integrating dashboards and chat agents

Here, a potential systematic solution can be designed by integrating **AI Engineering** and **[Service Design](https://www.nngroup.com/articles/service-blueprints-definition/)** to maximize ***AI capabilities*** in digital transformation.

The principle design goal is to increase the level of "groundedness" at each **touchpoints**: 

* ***Organizational***: First, use [Service Blueprints](https://www.nngroup.com/articles/service-blueprints-definition/) to identify existing and potential **critical touchpoints** between human actors and data access points/views.
* ***Social***: Second, conduct both (1) decision system design and (2) user experience research to ensure both (1) positive impact in the loop and (2) positive user experience, with relevant metrics to evaluate the "groundedness" for both decision system and user experience. 
* ***Technical***: Third, focusing on the  **touchpoints of human decision-makers and dashboards**, conduct and develop **AI engineering** projects that increase  the "groundedness" of the chatbots, including the Model as a Service (MaaS).

#### 🔄 Groundedness Implications for Developers and Designers

With the aim to contribute to the "Groundedness" scores when developing an intelligent dashboard with RAG functionality, it might be useful to distinguish groundedness at three major layers. 
1. **Language Model Layer**: Use LLMs to contextualize queries, rephrase intents, and synthesize outputs, preferably in both enterprise and department (expertise) contexts
2. **Retrieval Layer**: Preprocess internal documents or tabular datasets into vector stores or hybrid indices, preferably blending relevant Mixture of Experts (MoE) contexts and capabilities
3. **UI and Narrative Layer**: Design high-level **Explain Data** and **Data Stories** groundedness in the overall data-driven decision workflows
4. **Organizational Layer**: Design the overall organization-level of human and agentic decision-making process that ensures timing, traceability, and accountability requirements, preferably using clear service design on continuous integration and continuous delivery (CI/CD) of digital data dashboard and AI agentic objects. 

#### ✅ Final Thought: A Roadmap

The future of analytics lies in _actionable conversations_, or what IBM coined as [Conversational Analytics](https://www.ibm.com/think/topics/conversational-analytics) in active operations, especially by integrating data dashboards with chatbots that **apply critical expert and organizational knowledge to well-curated data and data processes**.  


```markmap {height="400px"}
- 🤖 + 📊
  - Definition 🏷️
    - 🔗 Integrate
      - Chatbots 🤖
      - Dashboards 📊
  - Goals 🥅
    - 🔓 Unlock
      - AI Capabilities 🧠
        - _Actionable Conversations_💬
        - [Conversational Analytics📡](https://www.ibm.com/think/topics/conversational-analytics)
    - 🤝 [Co-design](https://link.springer.com/chapter/10.1007/978-3-031-93733-0_25)
      - with LLM-Based Multi-agents 🧑‍🚀
  - 🛠️ Actions
    - 🤔 Consider
      - Touchpoints 🎯
        - Organizational 🏢
        - Social 🧑‍🤝‍🧑
        - Technical 🛠️
      - Layers 🧩
        - **Language Model** 🧬
        - **Retrieval** 🔍
        - **UI and Narrative** 🖼️
        - **Organizational** 🏛️
    - 🧲 Apply
      - Integrating Metrics 📐
        - _Groundedness_ ⚓
      - With Expertise From 🤹
        - AI Engineering 🧑‍💻
          - Model "Groundedness" 🧭
          - Chatbot "Groundedness" 🤖
          - Model as a Service (MaaS) 🧰
          - CI/CD 🔄🚀
        - Service Design 🎨
          - 📌identify
            - UI "Groundedness"
            - UX "Groundedness"
            - strategic touchpoints
          - 🎼orchestrate
            - system design "Groundedness"🎯
            - service blueprints 🔄🗺️
    - 🧵 Produce
      - Just-in-time Narratives ⏱️
      - Visual Drilldowns 📊
      - Actionable Suggestions 💡
    - 🔋Optimize For 🎛️
      - Positive Impact in the Loop 🌟
      - Positive User Experience 😊
      - Other KPIs 📈
        - Timing ⏰
        - Traceability 🔍
        - Accountability ⚖️🚨
  - Knowledge 📚
    - ⚙️ Generate
      - Socio-technical Design 🧯
    - 🤝 [Co-design](https://link.springer.com/chapter/10.1007/978-3-031-93733-0_25)
      - with LLM-Based Multi-agents 🛰️
      - [Interdisciplinary](https://link.springer.com/chapter/10.1007/978-3-031-93733-0_25) 🎓
        - CI/CD 🔄🚀
        - service blueprints 🔄🗺️
        - "Human-in-the-loop" (HITL)🌟😊
        - "causal loop" (system thinking)🔄
```

Designing and deploying AI agents thus require cross-disciplinary integration of **AI engineering** and **service design**, monitoring positive outcomes and feedbacks at strategic touchpoints of human and agentic interactions.  

AI Agents can work with clarity, foresight, and assurance with measurable groundedness across model, retrieval, UI, and organizational layers.

---

## Related Projects at Oxon8

Oxon8 has several dashboards (including projects such as [🍃💵visNetZero]({{% ref path="/project/visNetZero" %}}), [🍃🏭visCEADs]({{% ref path="/project/visCEADs" %}}), [🏫NFU.edu.cn]({{% ref path="/project/NetBib_NFU.edu.cn" %}}), and [🧰NetBib]({{% ref path="/project/NetBib"  %}})) that will be implemented with AI agents that deliver Question-Answering and RAG functionalities:

{{% include "/_snippet_/projects_all" %}}

These [🚧 Smart Application Extensions]({{% ref path="/project#theme_extensions" %}})  improvements will be likely using [several Python Frameworks to build UIs for AI Apps](https://getstream.io/blog/ai-chat-ui-tools/#3-chainlit-build-uis-for-conversational-ai), such as Panel (Holoviz), [`Gradio Python Client`](https://www.gradio.app/docs/python-client/introduction) and [`ai-chatbot by Vercel`](https://github.com/vercel/ai-chatbot).   

These projects currently only cover retrieval and UI level of groundedness.  Future work will further document and discuss the other layers such as model and organizational layers.