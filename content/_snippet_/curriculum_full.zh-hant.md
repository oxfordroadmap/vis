```mermaid
---
title: 【智能體時代下的...】課程地圖 (人才培育計畫) 如 智能產品開發與應用/智能科學與技術/網絡與新媒體
subtitle: 
config:
  layout: dagre
  look: handDrawn
---
flowchart LR
%%{ init: { 'flowchart': { 'curve': 'monotoneX' } } }%%
%% Agentic New Media & Internet/智能體時代下的網路與新媒體／智能體時代下的網路與新媒體
%% params:
%%  emoji: 🎄
%%  id: Full (16+2)
%%  curriculum: Agentic New Media & Internet
%%  slug: AgenticNMInternet
%%  (cf. 🪴Bare精簡版;🎍Core核心版;🎋Core+核心版;🎄Full完整版;🌲Base基礎版=====🪴🎍🎋🎄🌲) 

    INFOV eUI1@==UI==> FRONT["⚙️ FRONT: <br/>前端框架"]
    FRONT eUI2@==UI==> UIVIS["🎨 UIVIS: <br/>用戶與視覺界面設計"]

    COPYE["✍️ COPYE: <br/>文案編輯與<br/>創意寫作"] --> INFOV["📊 INFOV: 信息可視化"]
    INTRO -.-> INFOV
    COPYE -.-> WEBDN
    INTRO --> WEBDN
    TECHC["🌐 TECHC: 網絡與<br/>智能體技術及協作"] --> WEBDN
    INTRO["📡 INTRO: <br/>智能體導論"] --> PRODM
    COPYE -.-> PRODM
    TECHC --> PRODM
    TECHC ==> ONSUR["🧮 ONSUR: 在線問卷與統計"]
    INTRO -.-> ONSUR

    WEBDN["🐙 AG101<br/>Web開發<br/><strong>with</strong>_AI<br/>🧭<br/>🖥️ WEBDN"] --⚡對用戶和代理的反應式 UI--> FRONT 
    INFOV -."🛂 社會技術：數據驅動決策".-> OPERS 
 
    WEBDN e1@=="🧩技術核心：模塊化網頁編程"==> PYTHN["🐍 PYTHN:<br/> Python語言"] 
    WEBDN e2@=="♻️技術核心：敏捷 & CI/CD"==> OPERS["🤗 AG102<br/>Web開發<br/><strong>Agentic</strong><br/>🤖🔧 OPERS"]

    PRODM["♞🧱 AG201<br/>Agentic<br/><strong>StrCOMM</strong><br/>智能體通傳結構化<br/>📌 PRODM"] ePM1@==🧞項目管理：語境編織者==>  OPERS
    PRODM -.💞PM/UX：體驗構建者.-> USRES["🔍 USRES: <br/>用戶研究"]     
    ONSUR -.😭 社會技術：以用戶為中心的設計.-> OPERS 
    ONSUR eUX1@==❤‍🩹UX/用戶研究==> USRES 

    FRONT -.🌉應用設計：為用戶與智能體適配界面.-> APPUI
    PYTHN e3@--🐍應用設計：數據和庫生態系統--> APPUI["♛🖼️ AG203<br/>Agentic<br/><strong>DataVIS</strong><br/>智能體數據可視化<br/>📱 APPUI"] 
    OPERS e4@==🤖技術核心：聊天機器人==> APPUI
    
    OPERS ePM2@==🏦社會技術：知識與組織㊭==> MLAPI
    PYTHN e5@==📡技術核心：雲端與本地LLM接口==> MLAPI["♝🍞 AG202<br/>Web開發<br/><strong>RAG-SYS</strong><br/>檢索增強生成系統<br/>🤖 MLAPI"]

    OPERS --⚖項目管理：AI與利益相關者協調--> PLNFM["💡 PLNFM: <br/>平台經濟與<br/>創新"]
    USRES -.🛄 服務設計：服務旅程.-> APPUI
    USRES -.🧭 服務設計：服務藍圖.-> MLAPI
    USRES -.🎯 服務設計：價值與增長主張.-> PLNFM
    USRES eUX2@==🙈🙉🙊UX：扎根性 ==> UXANA["🧠 UXANA: <br/>智能體<br/>分析與<br/>用戶體驗"]

    %% Final Phase
    %%     COMMU["🧑‍🤝‍🧑🧬 COMMU: Community of Practice and Self-Curation"]  ~~~ MLAPI
    %%     MLAPI ~~~ LITRV["📚🦠 LITRV: Literature Review and Writing"]



    %% Final Phase Core
    UIVIS --> COMMU     
    UIVIS -.-> LITRV
    APPUI --> COMMU
    APPUI -.-> LITRV
    MLAPI e3@==job==> COMMU["🧑‍🤝‍🧑🧬 AG303<br/>總整課程 Capstone<br/><strong>AI-工程</strong><br/>🏗<br/>aka 實踐社群與自我策展<br/>🧑‍🤝‍🧑🧬COMMU"]  
    MLAPI ==> LITRV["📚🦠 AG302<br/>科技預測 SciDisc<br/><strong>AI-影響</strong><br/>🌈<br/>aka 文獻回顧與寫作<br/>📚🦠 LITRV"]


    %% Final Phase: Green
    PLNFM -.-> COMMU
    PLNFM ==> LITRV

    %% Final Phase: Blue
    UXANA -.-> COMMU
    UXANA ==> LITRV

    %% Balancing
    %% Hidden Links 
    %% COPYE ~~~ WEBDN
    %% COPYE ~~~ WEBDN
    %% TECHC ~~~ PRODM
    %% TECHC ~~~ PRODM

click TECHC callback "Github"


%% Edge Tooltips
%% eUI1 eUI2
linkStyle 0,1 stroke:red, stroke-width:5px
%% eUX1 eUX2
linkStyle 19,29 stroke:blue, stroke-width:5px

linkStyle 14,15,21,22,24 stroke:brown, stroke-width:5px
linkStyle 16,23 stroke:purple, stroke-width:5px


eUI1@{ animate: true }
eUI2@{ animate: true }
eUX1@{ animate: true }
eUX2@{ animate: true }
e1@{ animate: true } 
e2@{ animate: true }
e3@{ animate: true }
e4@{ animate: true }
e5@{ animate: true }
ePM1@{ animate: true }
ePM2@{ animate: true }


%% Node Shapes
PYTHN@{ shape: flag}
COMMU@{ shape: trap-t}
LITRV@{ shape: trap-t}
TECHC@{ shape: trap-b}
INTRO@{ shape: trap-b}
COPYE@{ shape: trap-b}

%% Node Styles

%% Styling 🪾 Bare Minimum (Core) Agentic learning 
%% Shape declarations
%% AG101@{ shape: hex }
%% AG102@{ shape: hex }
%% style AG101 fill:#fff589,stroke:#448aff,stroke-width:2px,color:#222
%% style AG102 fill:#fff589,stroke:#448aff,stroke-width:2px,color:#222
WEBDN@{ shape: trap-b}
OPERS@{ shape: hex }
style WEBDN fill:#fff589,stroke:#448aff,stroke-width:5px,color:#222
style OPERS fill:#fff589,stroke:#448aff,stroke-width:5px,color:#222
%% AG203 ... OPERS
APPUI@{ shape: hex}
%% AG202 ... MLAPI
MLAPI@{ shape: hex}  
style APPUI fill:#fbcfe8,stroke:#002147,stroke-width:5px,color:#222
style MLAPI fill:#cbeafe,stroke:#002147,stroke-width:5px,color:#222
%% AG201 ... PRODM
PRODM@{ shape: hex} 
style PRODM fill:#bbf7d0,stroke:#002147,stroke-width:5px,color:#222


%% Foundational Nodes
style TECHC fill:#C3F1E7,stroke:#333,stroke-width:1px,stroke-dasharray:4
style INTRO fill:#FDE2B9,stroke:#333,stroke-width:1px,stroke-dasharray:4
style COPYE fill:#fbcfe8,stroke:#333,stroke-width:1px,stroke-dasharray:4

%% Final Nodes
style COMMU fill:#ffecd1,stroke:#ff5f5f,stroke-width:5px,stroke-dasharray:8,color:#222
style LITRV fill:#ffecd1,stroke:#e38d00,stroke-width:5px,color:#222

%% Green Socio-Technical/Business/Management
%% style PRODM fill:#bbf7d0,stroke:#333,stroke-width:1px
%% style OPERS fill:#bbf7d0,stroke:#333,stroke-width:1px
style PLNFM fill:#bbf7d0,stroke:#333,stroke-width:1px

%% Blue Social Science/UX
style ONSUR fill:#cbeafe,stroke:#333,stroke-width:1px
style USRES fill:#cbeafe,stroke:#333,stroke-width:1px
style UXANA fill:#cbeafe,stroke:#333,stroke-width:1px

%% Pink Design Core
style INFOV fill:#fbcfe8,stroke:#333,stroke-width:1px
style FRONT fill:#fbcfe8,stroke:#333,stroke-width:1px
style UIVIS fill:#fbcfe8,stroke:#333,stroke-width:1px
%% style APPUI fill:#fbcfe8,stroke:#333,stroke-width:1px

%% Yellow Technical Core
style PYTHN fill:#fff589,stroke:#bbf7d0,stroke-width:5px,stroke-dasharray:4,color:#222
%% style WEBDN fill:#fff589,stroke:#333,stroke-width:2px
%% style MLAPI fill:#fff589,stroke:#333,stroke-width:2px
```

