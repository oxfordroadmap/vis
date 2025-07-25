```mermaid
---
title: 【AI Agent & Internet】Curriculum
---
flowchart LR
%% AI Agent & Internet/智能體與網際網路
%% params:
%%  emoji: 🎍
%%  id: Core (10+2)
%%  curriculum: AI Agent & Internet
%%  slug: AgenticInternet
%%    (cf. 🪴Bare精簡版;🎍Core核心版;🎋Core+核心版;🎄Full完整版;🌲Base基礎版=====🪴🎍🎋🎄🌲) 

graph LR
%%{ init: { 'flowchart': { 'curve': 'monotoneX' } } }%%
%%  look: handDrawn
%% Curriculum or Learning Roadmap:
%%  - 🎋 Fuller AI Agent & Internet (cf. 🎋🪴🎄)
%%  - 12 modules/courses

    %% [Pink] UI/Design Core (Next for Top Placement)
    TECHC["🌐 TECHC: AI Agent <br/>Technologies and Collaboration"] eUI1@==UI==> FRONT["⚙️ FRONT: <br/>Front-End <br/>Frameworks"]

    %% Phase 1-2
    TECHC e1@==🧩technical core:modular Web programming==> PYTHN["🐍 PYTHN:<br/> Python <br/> Language"] 
    TECHC -.🛂 socio-technical: data-driven decisions.-> WEBDN 
    TECHC eUX2@==🙈🙉🙊UX: groundedness ==> AGNUX["🔍 AGNUX: <br/>Agent UX"]

    %% Phase 2-3 
    PYTHN e2@--🐍App design: data and library ecosystems--> FRONT
    PYTHN e3@==📡technical core: APIs both cloud and local LLM==> OPERS
    WEBDN["🐙 AG101<br/>Web_Dev<br/><strong>with</strong>-ai<br/>🧭<br/>🖥️ WEBDN"] --⚡UI reactive to users & agents--> FRONT 
    WEBDN e4@==♻️technical core: Agile & CI/CD==> OPERS["🤗 AG102<br/>Web_Dev<br/><strong>for</strong>-ai<br/>🔧 OPERS"]
    AGNUX ePM1@==🧞PM as Context Weaver==>  OPERS
    AGNUX eUX1@==❤‍🩹UX/User Research==> AGNEV["🧠 AGNEV: <br/>Agent <br/>Evaluation"] 

    %% Phase 3-4
    %% [Pink] 
    %% Integrate APPUI & MLAPI into ♝🍞 AG202<br/>Web_Dev<br/><strong>rag-sys</strong>"
    %% <br/>📱 APPUI 
    FRONT eUI2@-.🌉App design: adaptive interface for users & agents.-> APPUI
    OPERS e5@==🤖technical core: chatbots==> APPUI["♛🖼️ AG203<br/>Agentic<br/><strong>data-vis</strong><br/>📱 APPUI"] 
    
    %% <br/>🤖 MLAPI
    FRONT --⚡UI reactive to users & agents--> MLAPI
    OPERS ePM2@==🏦 socio-technical: knowledge and organizations㊭==> MLAPI["♝🍞 AG202<br/>Web_Dev<br/><strong>rag-sys</strong><br/>🤖 MLAPI"]

    %% [Blue] Social Science Core (Declared Later for Bottom Placement)    
    %% transitions
    FRONT -.💬 conversational agents.-> AG201
    OPERS ePM3@--⚖PM: AI & stakeholder alignment--> AG201["♞🧱 AG201<br/>Agentic<br/><strong>str-comm</strong>"]
    AGNEV -.🛄 service design: service journey.-> APPUI
    AGNEV -.🧭 service design: service blueprints.-> MLAPI
    AGNEV -.🎯 service design: value and growth propositions.-> AG201

    %% Final Phase
    APPUI ~~~ AG303

    %% Final Phase Core: COMMU=AG303 LITRV=AG302
    APPUI --> AG303
    MLAPI efin1@==job==> AG303[🧑‍🤝‍🧑🧬 AG303<br/>capstone<br/><strong>AI-Engr</strong>🏗<br/>aka. COMMU]  
    %% Balancing
    %% Hidden Links 
    %%MLAPI ~~~ LITRV
    APPUI -.-> AG302
    MLAPI efin2@==> AG302["📚🦠 AG302<br/>SciDisc<br/><strong>AI-Impa</strong>🌈<br/>aka. LITRV"]
    AG201 -.-> AG303
    AG201 ==> AG302


click TECHC callback "Github"


%% Edge Tooltips
%% eUI1 eUI2
linkStyle 0,10 stroke:red, stroke-width:5px
%% eUX1 eUX2
linkStyle 3,8,9,16,17,18,19 stroke:blue, stroke-width:5px

linkStyle 1,2,4,5,6,7,11,13,14,15 stroke:brown, stroke-width:5px
%%linkStyle 16,23 stroke:purple, stroke-width:5px


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
ePM3@{ animate: true }
efin1@{ animate: true }
efin2@{ animate: true }


%% Node Shapes
PYTHN@{ shape: flag}
AG303@{ shape: trap-t}
AG302@{ shape: trap-t}
TECHC@{ shape: trap-b}


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
AG201@{ shape: hex} 
style AG201 fill:#bbf7d0,stroke:#002147,stroke-width:5px,color:#222


%% Foundational Nodes
style TECHC fill:#C3F1E7,stroke:#333,stroke-width:1px,stroke-dasharray:4

%% Final Nodes
style AG303 fill:#ffecd1,stroke:#ff5f5f,stroke-width:5px,stroke-dasharray:8,color:#222
style AG302 fill:#ffecd1,stroke:#e38d00,stroke-width:5px,color:#222

%% Blue Social Science/UX
style AGNEV fill:#cbeafe,stroke:#333,stroke-width:1px
style AGNUX fill:#cbeafe,stroke:#333,stroke-width:1px

%% Pink Design Core
style FRONT fill:#fbcfe8,stroke:#333,stroke-width:1px
%% style APPUI fill:#fbcfe8,stroke:#333,stroke-width:1px

%% Yellow Technical Core
style PYTHN fill:#fff589,stroke:#bbf7d0,stroke-width:5px,stroke-dasharray:4,color:#222
%% style WEBDN fill:#fff589,stroke:#333,stroke-width:2px
%% style MLAPI fill:#fff589,stroke:#333,stroke-width:2px
```

