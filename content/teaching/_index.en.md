---
title: Teaching 🛠️AI Engineering and more
summary: "Learning by doing: 🛠️AI Engineering, 📝Writing, and 🛣️Roadmaps! This resource offers teaching and training materials to build `engineering`, `writing`, and `innovation` capabilities, including top-tier course content on **API, ML & AI**, alongside specialized modules for **EAP Writing**, **AI Agents**, and hands-on **AI Engineering 🛠️**. Plus, you'll find clear **🛣️ Roadmaps** for navigating your learning journey."
type: landing
design:
  spacing: 1rem
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
      title: 🛠️ AI Engineering Courses 🤗
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
      title: 🛠️ AI Engineering Curriculum 🪴
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
      title: 🤔Essays
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
      title: 📝Writing Products
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