---
title: 教學相長 AI 工程🛠️, 寫作📝, 學習路徑🛣️ 
summary: 就`工程`，`寫作`，與`創新`的教學及培訓材料及學習路徑圖，含一流課程材料 **API, ML & AI**，以及 **EAP寫作📝**, **AI 代理** 與 **AI 工程🛠️** 的內容 （含總覽的 **學習路徑🛣️**）。
type: landing

design:
  # Default section spacing
  spacing: "1rem"

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: posts
    content:
      title: '🛠️AI 工程'
      filters:
        folders:
          - teaching
        tag: 'AI 工程'
    design:
      view: article-grid
      columns: 3
  - block: collection
    id: posts
    content:
      title: '📝寫作'
      filters:
        folders:
          - teaching
        tag: '寫作'
    design:
      view: article-grid
      columns: 2
  - block: collection
    id: posts
    content:
      title: '🛣️學習路徑'
      filters:
        folders:
          - teaching
        tag: '學習路徑'
    design:
      view: card
      #view: date-title-summary
---