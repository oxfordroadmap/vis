---
title: '作品項目'
subtitle: '利用實證可視化，分析科研成果及影響，做具前瞻戰略的系統思考'
date: 2024-12-10
type: landing

# 請參閱 https://bootstrap.hugoblox.com/blocks/portfolio/  
# 此部分顯示來自 `content/project/` 的內容。

design:
  spacing: '1rem'

# Page sections
sections:
  - block: collection
    content:
      title: 分析機構科研成果及影響
      text: '采用UTD計量法量化貢獻比例，**實證**分析科研成果及影響，做具前瞻的系統決策，如科研經費、人員等的投入產出。'
      # 要顯示的頁面類型。例如：project。
      filters:
        folders:
          - project
        # Only show content with these tags
        tag: 'NetBib'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: masonry
      fill_image: true
      background: {}
      spacing: {padding: [4px, 0, 4px, 0]}
  - block: collection
    id: '🏗原創'
    content:
      title: '🏗原創'
      text: '原創成果展示利用數據的可視化交互化智能化的加值，提供用戶洞察'
      filters:
        folders:
          - project
        # Only show content with these tags
        tag: 'NetBib'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: card
      spacing: {padding: [4px, 0, 4px, 0]}
  - block: collection
    id: '🚧擴充延伸'
    content:
      title: '🚧擴充延伸'
      text: 🚧擴充延伸成果展示開放（自由）協作的能力及潛力
      filters:
        folders:
          - project
        tag: "擴充延伸"
    design:
      view: card
  - block: collection
    content:
      title: 淨零經濟及產業路線
      text: '利用**產業經濟**及**能源排放數據**等實證可視化，分析產業投入及產出及排放影響，做具戰略的系統思考。'
      # 要顯示的頁面類型。例如：project。
      filters:
        folders:
          - project
          - vis
        # Only show content with these tags
        tag: 'NetZero淨零'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: article-grid
      columns: 2
      background: {}
      spacing: {padding: [4px, 0, 4px, 0]}
---



