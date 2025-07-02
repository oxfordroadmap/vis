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
        tag: 'AI_Engineering'
    design:
      view: article-grid
      css_class: 'bg-red-100 dark:bg-red-900'
      columns: 3
  - block: collection
    id: posts
    content:
      title: '📝寫作'
      filters:
        folders:
          - teaching
        tag: 'Writing'
    design:
      view: article-grid
      css_class: 'bg-gray-100 dark:bg-gray-900'
      columns: 2
  - block: collection
    id: posts
    content:
      title: '🛣️學習路徑'
      filters:
        folders:
          - teaching
        tag: 'Roadmaps'
    design:
      view: card
      css_class: 'bg-primary-100 dark:bg-primary-900'
      #view: date-title-summary
---
