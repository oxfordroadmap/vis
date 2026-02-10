flowchart LR
  %% Tier Linking
  L1 -.- A1
  L2 -.- A2
  L3 -.- A3
  L4 -.- A4

  %% Technical Stack Group
  subgraph TS["🤖 Technical LLM Stack 🧰"]
    A1
    A2
    A3
    A4
  end

  %% Human Meaning-Making Stack Group
  subgraph MS["🧍 Human Meaning-Making Stack 🎭"]
    B1
    B2
    B3
    B4
  end

  %% Layer 1: Interface & Persona
  subgraph L1["🔷 Layer 1: Interface & Persona"]
    direction LR
    A1["🤖 Application Layer<br/>🦾 UIs, assistants, chat flows"]
    B1["🤼 Human Interaction Layer<br/>💞 Empathy, trust, tone, roles 💬"]
    A1 ---|"🪞 Mirrors 🪞"| B1
  end

  %% Layer 2: Flow & Strategy
  subgraph L2["🔷 Layer 2: Flow & Strategy"]
    direction LR
    A2["🪄 Orchestration Layer<br/>🧵 Prompt logic, agent coordination"]
    B2["🎲 Language Game Layer<br/>👩‍⚖ Discourse structure, genre rules"]
    A2 ---|"🧭 Guided by 🧭"| B2
  end

  %% Layer 3: Cognition & Logic
  subgraph L3["🔷 Layer 3: Cognition & Logic"]
    direction LR
    A3["📦 Model Layer<br/>🛞 LLMs, embeddings, inference engines"]
    B3["📜 Knowledge Construction Layer<br/>⚖ Reasoning, truth claims"]
    A3 ---|"🧱 Constrained by 🧱"| B3
  end

  %% Layer 4: Memory, Context & Grounding
  subgraph L4["🔷 Layer 4: Memory, Context & Grounding"]
    direction LR
    A4["📦 Data Layer<br/>🧮 Vectors, RAG, case history"]
    B4["🎎 Contextual and Tacit Knowledge Layer<br/>💒 Culture, norms, precedent"]
    A4 ---|"🎨 Shaped by 🎨"| B4
  end
