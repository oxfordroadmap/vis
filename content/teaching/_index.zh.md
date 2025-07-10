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
      title: '🛠️AI 工程'
      filters:
        folders:
          - teaching
        tag: 'AI_Engineering'
    design:
      view: article-grid
      css_class: 'bg-secondary-500/50'
      columns: 3
  - block: collection
    id: posts
    content:
      title: '🛣️学习路径'
      filters:
        folders:
          - teaching
        tag: 'Roadmaps'
    design:
      view: article-grid
      css_class: 'bg-gradient-to-r from-primary-500/50 via-primary-100/10 to-primary-500/50 dark:bg-gradient-to-r dark:via-primary-900/90'
      columns: 2
  - block: collection
    id: posts
    content:
      title: '📝写作'
      filters:
        folders:
          - teaching
        tag: 'Writing'
    design:
      view: article-grid
      # view: card | date-title-summary
      css_class: 'bg-gray-500/10 dark:bg-gray-500/90'
      columns: 3
---

<!-- $block.design. background | spacing.padding | clip_path | css_style | css_class | columns | {{/* Special case: Slider widget. */}} loop | interval -->