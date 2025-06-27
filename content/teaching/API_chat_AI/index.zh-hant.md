---
title: API對話AI
summary: 從閑聊到專家組，如何高效借力生成式AI生態，產出有價值的智能產品原型？
date: 2025-06-01
type: docs
math: false
tags:
  - Python
  - API
  - 項目管理
---

***《API對話AI》*** 課程旨在帶領學習者，完成具`檢索增強生成（RAG）`功能的智能產品原型，一方面掌握從界面到評測各環節的 `LLM 大語言模型` 流程架構及理論知識，另一方面透過代碼及文檔實踐並記錄已有成果及引發想法的 `LLM應用` 實踐課程。
<!--more-->

本頁具體說明及展示本課程的知識及實踐內容。

## API 演化出的 MCP

智能應用的整合要如何實做？雲端或本地的一問一答、有來有往的智能API如何能像一塊塊的磚，構建出有用且具體的智能App？

看劇（或編劇）不怕從中間開始的攔腰法（In medias res）。要回答上面的問題，不妨直接浸入（大語言）`模型上下文協定 Model Context Protocol (MCP) `。

### 基本概念：概念的掌握

以下影片看的方式是，把所有陌生的名詞記下來放一邊，把聽懂的動詞放另一邊，筆記下來。

{{< youtube 7j1t3UZA1TY >}}

按上述影片內容，MCP 如何強化 智能 AI？ MCP 如何簡化 LLM 工作流程？ 其中 API 扮演什麼角色？

### 基礎實踐：代碼塊的掌握

以下影片看的方式是，把所有相關代碼的說明按一塊塊筆記下來其相關的動詞及名詞即可，具體的操作及代碼請務必略過。

{{< youtube EyYJI8TPIj8 >}}

## 自我測試的強化學習

學習是自己的，不用證明給老師看，只要能提升自我解決問題的能力就是好的成長。

本課程的基礎內容，會以如下的交互內容，對學習者提問，強化學習成果。

{{< spoiler text="👉 ⁉ 2024 年底 Anthropic 提出什麼開放標准？" >}} 業界雖已有使用 API 調用 LLM 大語言模型的問答方式 (i.e. 發問－取答的一往一來) ，但是在更高效提供問答的上下文 (Context) 的流程化及及標准化共同難點方面，則並沒有好的標准及解方，所以才有了開放標准 Model Context Protocol (MCP)　的提案。🎉 {{< /spoiler >}}

{{< spoiler text="👉 ❓ 2024 年底由 Anthropic 提出的開放標准，具體想解決業界什麼實踐難點？" >}} LLM 應用 （常特指 AI 代理人）的兩大實踐要點是**內容（content）**及**工具（tools）**。🎉 內容指的像是文件集數據庫、或知識庫，工具指的像是搜索、可視化、內容生成等功能，MCP 開放標准則可以將內容及工具整套有共識標准的方式把`工具`、`資源`、及`問答模板`分別打包成機器可查找的清單目錄，進行提供比單一API調用更具體系的使用方式。{{< /spoiler >}}

## 評測 Evaluating LLM apps

要改進App，必需先有好的有用的評測。特別是RAG的應用，像[[🦜️🛠️ LangSmith (LangChain)](https://docs.smith.langchain.com/evaluation/tutorials/rag)] 及[LlamaIndex](https://docs.llamaindex.ai/en/stable/module_guides/stable/module)。

{{% callout 註 %}}
在`評測（Evaluation）`這環節，對接下來的`觀察（Observability）`、及`部署（Deployment）`具有指導及指引性的影響，因此是學習及操練的重點。
{{% /callout %}}

### 基本評測指標

在通用的機器學習及以文件檢索方面，常見的基本評測指標包括`召回率（Recall）`、`精確率（Precision）`等等:

`召回率（Recall）`，所有實際正例被正確標誌為正例的佔比，或稱`真正例率(TPR)`：
{{< math >}}

$$
Recall = \frac{ TP }{TP + FN}= \frac{Correctly Labeled Actual Positives}{All Actual Positive}
$$

{{< /math >}}

`精確率（Precision）`，所有被標誌為正例中實際為正例的佔比：

{{< math >}}

$$
Precision = \frac{ TP }{TP + FP}= \frac{Correctly Labeled Actual Positives }{All Labeled As Positive}
$$

{{< /math >}}

### LLM RAG 應用評測指標

利用LLM完成具`檢索增強生成（RAG）`功能的評測常涉及以下評測指標：`回答相關性Relevance (Question)`、 `上下文相關性 Relevance (Context)`、`接地氣程度 (Groundedness)`、`LLM作為裁判（LLM-as-a-judge）`等等。

## 技能：代碼實踐 Code

要獲取LLM App開發及改良的核心編程能力，本課程的 {{< icon name="python" >}} Python 代碼實踐著兩方面技能：（1）LLM 管道及（2）循序 UI。

{{% callout note %}}
`LLM 管道（LLM pipeline）`是本地實踐 LLM 難點之一，不過若能克服則能夠實踐體會雲端至本地含 GPU 的實踐考量差異。`循序 UI （Sequential UI）`雖是較進階的用戶使用界面，但正是帶有流程性質應用之必備技能。
{{% /callout %}}

以下代碼展示，部分關於[🦜️🔗 LangChain 語言鏈代碼實踐Hugging Face 平台所提供的模型（開源和公開可用的）的本地管道]((https://python.langchain.com/docs/integrations/llms/huggingface_pipelines/#gpu-inference))包裝器使用方式：

```python
### 模型加載
from langchain_huggingface.llms import HuggingFacePipeline  
  
hf = HuggingFacePipeline.from_model_id(  
model_id="gpt2",  
task="text-generation",  
pipeline_kwargs={"max_new_tokens": 10},  
)

### 創建鏈，使用提問句模板
from langchain_core.prompts import PromptTemplate
template = """Question: {question}Answer: Let's think step by step."""
prompt = PromptTemplate.from_template(template)
chain = prompt | hf
question = "What is electroencephalography?"
print(chain.invoke({"question": question}))
```

## 項目式學習（project-based learning ）

本課程學習成果之一是學習者的***舉一反三***的項目展示：根據本課程實踐的項目，學習者按自身展示需要，產出以下作品：

1. 有引伸/改進/擴張的 ′LLM 應用′（如增加另一種語言的文本及提問模板、改迸一管道的評測水平、擴張文本以外的可視化應用、等）  
2. 簡要詳實的 ′LLM 應用技術文檔′，主要利用 學習鷹架（scaffolding）概念，能引領專家及新手理解此 LLM 應用 的再應用、學習、或問題解決價值。
3. '150 字項目簡介'，主要利用自己對實踐社群、自我、及項目的當下理解，針對某一實踐社群平台（如Github, LinkedIn, 或項目討論區）去介紹帶連結的′LLM 應用′及 ′LLM 應用技術文檔′，對目標群眾展示具體價值。

150 字項目簡介示例如下：

```
感謝您們有提供[Panel Chat Examples](https://holoviz-topics.github.io/panel-chat-examples/)學習教案，讓我能進一步打造出具檢索增強生成（RAG）功能的《孫子兵法》的中英文雙語智能對話系統，見[App展示](#App展示)及[技術文檔](#技術文檔)。請問要如何改進此項目文檔，以利展示Panel整合LangChain的潛力及價值？
```