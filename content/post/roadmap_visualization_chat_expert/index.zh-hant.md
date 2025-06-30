---
title: '資料視覺化AI代理人——藍圖規劃'
date: 2025-06-30
tags:
  - '聊天機器人'
  - 'AI代理人'
  - '檢索增強生成（RAG）'
  - 'AI工程'
  - '服務設計'
  - 'AI能力'
---

- 🤔 整合聊天機器人介面與功能至數位系統中，有助於在多元情境中產生洞察力。
    
- 💡方法：透過策略性地在關鍵決策流程中嵌入這些AI驅動的接觸點，組織得以強化正向成果，並積極降低潛在風險。
    
- 🎁貢獻：本篇文章展開一段融合 **AI工程** 與 **服務設計** 的旅程，旨在於數位轉型中最大化 _**AI能力**_。

<!--more-->

## 🧠 生成式AI與商業智慧的融合

現代企業運用檢索增強生成（RAG）技術，彌合原始資料與可行洞察之間的落差。與獨立的LLM相比，RAG系統結合語言模型的生成能力與從知識庫、資料庫與文件中精準檢索，確保AI回應有組織專屬語境的「接地氣（groundedness）」。此 **接地氣程度** 正是透過提供結構化與非結構化資料於RAG中實現。

這接地氣程度正呼應Gartner於 [_2025數據與分析十大趨勢_](https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-identifies-top-trends-in-data-and-analytics-for-2025) 中提出的「代理式分析（Agentic Analytics）」能力。

### 📈 工業應用案例 📊

Oracle與Tableau提供的產業解決方案展現企業決策流程中，導入AI代理人的實務。

#### Oracle的RAG應用架構

Oracle在生成式AI生態中持續佔有領先地位，其RAG架構整合 **互動式儀表板與聊天介面**，形成前端應用程式的協調管線。其目標是讓AI從即時或監管資料中提供語境化回答，不論系統是在地端或雲端運行（參見 [部署 Oracle 多云生成式AI RAG](https://docs.oracle.com/en/solutions/oci-multicloud-genai-rag/index.html)）。舉例來說，企業可使用自然語言提問，即時獲得與供應鏈、能源或金融KPI相關的分析回應。

#### Tableau：交談式儀表板的實踐

Tableau於2025推出的核心功能為內嵌的 **Tableau Agent** 多語AI助手，讓使用者以自然語言提問、得到語境化答案，並直接從圖表界面觸發互動。另一套系統 **Tableau Pulse** 則可在用戶提問前主動推送洞察。透過 **VizQL Data Service API**，開發者可更細緻地控制RAG邏輯在Tableau語意層的應用。

聊天與RAG功能強化Tableau核心的 **Explain Data** 與 **Data Stories**，為決策流程即時提供敘事與視覺化鑽取能力。

#### 工業案例總結

總結而言，這些AI代理人在人機接觸點中的應用，讓AI從「協助者」進化為「引導者」。換句話說，AI的角色應 **不只是輔助，還應具備引導作用**。

良好的代理式儀表板設計與部署，應建構正向回饋迴路以強化決策的韌性。

## 🧗 挑戰 🌀

Gartner也[預測，至2027年將有逾40%的代理式AI專案遭到中止](https://analyticsindiamag.com/ai-news-updates/gartner-predicts-that-over-40-of-agentic-ai-projects-will-be-discontinued-by-2027/)，原因多為炒作與誤用（參見相關預測報告）。

特別是在即時視覺化與決策場景中，互動式KPI資料牽涉到時效性、可追蹤性與問責性。

導入LLM至商業智慧平台時，必須解決以下挑戰：

- 如何理解複雜問題
    
- 檢索支持資料
    
- 直接於儀表板呈現洞察
    

這正凸顯Gartner提出的「多模資料織體（Multimodal Data Fabric）」之必要性，為RAG系統涵蓋結構化與非結構化資料提供基礎。

## 儀表板與聊天代理人整合藍圖

透過整合 **AI工程** 與 [服務設計](https://www.nngroup.com/articles/service-blueprints-definition/)，可系統性地設計出 _**高AI能力**_ 的數位轉型方案。

設計核心目標為：提升每個「接觸點」的 groundedness：

- **組織層級**：運用 [服務藍圖](https://www.nngroup.com/articles/service-blueprints-definition/) 判斷人與資料的關鍵接觸點
    
- **社會層級**：設計決策系統，並進行用戶研究來衡量其正向影響與使用者體驗
    
- **技術層級**：設計AI工程專案以提升對話代理人的groundedness，如部署模型即服務（MaaS）
    

### 🔄 開發與設計者如何實現 groundedness？

建構具RAG功能的智慧儀表板時，可將 groundedness 劃分為四個層級：

1. **LLM層級**：用於語境詮釋與重構意圖
    
2. **檢索層級**：處理文件與資料表，並建構混合型索引
    
3. **UI與敘事層級**：提供Explain Data與Data Stories的語境根基
    
4. **組織層級**：設計具CI/CD流程的決策架構，符合時效、可溯與問責要求
    

### ✅ 結語

未來的資料分析聚焦在 **可行的對話**，尤其是整合關鍵知識與清晰資料流程的聊天儀表板。部署AI代理人需跨越AI工程與服務設計兩大領域，並監控人機互動中的正向結果與回饋。真正「接地氣」的代理人將在模型、檢索、介面與組織各層面展現清晰度、前瞻性與可信度。