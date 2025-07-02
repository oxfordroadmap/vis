---
title: 教学相长 AI 工程🛠️, 写作📝, 学习路径🛣️ 
summary: 就`工程`，`写作`，与`创新`的教学及培训材料及学习路径图，含一流课程材料 **API, ML & AI**，以及 **EAP写作📝**, **AI 代理** 与 **AI 工程🛠️** 的内容 （含总览的 **学习路径🛣️**）。
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
      title: '🛠️AI Engineering'
      filters:
        folders:
          - teaching
        tag: 'AI_Engineering'
    design:
      view: article-grid
      columns: 3
  - block: collection
    id: posts
    content:
      title: '📝Writing'
      filters:
        folders:
          - teaching
        tag: 'Writing'
    design:
      view: article-grid
      columns: 2
  - block: collection
    id: posts
    content:
      title: '🛣️Roadmaps'
      filters:
        folders:
          - teaching
        tag: 'Roadmaps'
    design:
      view: card
      #view: date-title-summary
---
