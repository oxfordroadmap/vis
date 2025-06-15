---
# 請參閱 https://bootstrap.hugoblox.com/blocks/portfolio/  
# 此部分顯示來自 `content/project/` 的內容。
type: landing

title: '作品項目'
date: 2024-12-10
# Begin multi-line `summary` with YAML's `|` or `|2-` prefix and indent 2 spaces
summary: |
  實證可視化，交互智能化，決策系統化。
  * 🔬NetBib -- 科研成果及影響分析
  * 🍃visNetZero, 🍃visCEADs -- 淨零經濟路線, 淨零產業路線
  * 🏛️bipa2024 -- 牛津大學公共行政指數🚧
  * 🤖panel_chat, 🧬pybibx -- 展示開放協作的擴充延伸成果🚧
design:
  # Section spacing
  spacing: '1rem'
# Page sections
sections:
  - block: collection
    id: 'CaseNetBib'
    content:
      title: '🔬NetBib 分析機構科研成果及影響'
      text: '采用UTD計量法量化貢獻比例，**實證**分析科研成果及影響，做具前瞻的系統決策，如科研經費、人員等的投入產出。'
      # 要顯示的頁面類型。例如：project。
      filters:
        folders:
          - project
        # Only show content with these tags
        tag: 'CaseNetBib'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: card
      fill_image: true
      background: {}
      spacing: {padding: [4px, 0, 4px, 0]}
  - block: collection
    id: 'theme_NetZero'
    content:
      title: '🍃visNetZero visCEADs 淨零經濟及產業路線'
      text: '利用**產業經濟**及**能源排放數據**等實證可視化，分析產業投入及產出及排放影響，做具戰略的系統思考。'
      filters:
        folders:
          - project
        # Only show content with these tags
        tag: 'theme_NetZero'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: article-grid
      columns: 2
      spacing: {padding: [4px, 0, 4px, 0]}
  - block: collection
    id: '🏛️公共行政'
    content:
      title: '🏛️公共行政'
      text: '🏛️公共行政---展示開放協作的能力及潛力'
      filters:
        folders:
          - project
        tag: "theme_public_adm"
    design:
      view: card
  - block: collection
    id: '🚧擴充延伸'
    content:
      title: '🚧擴充延伸'
      text: '成果展示開放（自由）協作的能力及潛力'
      # 要顯示的頁面類型。例如：project。
      filters:
        folders:
          - project
        # Only show content with these tags
        tag: 'theme_extensions'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: article-grid
      columns: 2
      spacing: {padding: [4px, 0, 4px, 0]}
---



