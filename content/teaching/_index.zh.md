---
title: 教学相长 AI 工程🛠️, 写作📝 ...
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
    id: docs
    content:
      count: 3  # Show only 3 items
      title: 🛠️AI 工程 课程 🤗
      subtitle: Start your learning journey here with Copilot...
      filters:
        folders:
          - teaching
        tag: AIE_course
    design:
      view: article-grid
      css_class: bg-gradient-to-r from-secondary-500/50 via-secondary-100/10 to-secondary-500/50 dark:bg-gradient-to-r dark:via-secondary-900/90
      columns: 3
  - block: collection
    id: docs
    content:
      count: 3  # Show only 3 items
      title: 🛠️AI 工程 人培方案 🪴
      filters:
        folders:
          - teaching
        tag: AIE_curriculum
    design:
      view: article-grid
      css_class: bg-gradient-to-r from-primary-500/50 via-primary-100/10 to-primary-500/50 dark:bg-gradient-to-r dark:via-primary-900/90
      columns: 3
  - block: collection
    id: docs
    content:
      count: 3  # Show only 3 items
      title: 🛣️学思
      filters:
        folders:
          - teaching
        tag: Essay_teaching
    design:
      view: article-grid
      css_class: bg-secondary-500/50
      columns: 3
  - block: collection
    id: docs
    content:
      count: 3  # Show only 3 items
      title: 📝写作
      filters:
        folders:
          - teaching
        tag: Writing
    design:
      view: article-grid
      css_class: bg-gray-500/25 dark:bg-gray-500/75
      columns: 3
---

<!-- $block.design. background | spacing.padding | clip_path | css_style | css_class | columns | {{/* Special case: Slider widget. */}} loop | interval -->