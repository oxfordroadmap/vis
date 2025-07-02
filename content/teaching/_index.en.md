---
title: 🛠️AI Engineering, 📝Writing, and 🛣️Roadmaps
summary: Learn by Doing! This resource offers teaching and training materials to build `engineering`, `writing`, and `innovation` capabilities, including top-tier course content on **API, ML & AI**, alongside specialized modules for **EAP Writing**, **AI Agents**, and hands-on **AI Engineering 🛠️**. Plus, you'll find clear **🛣️ Roadmaps** for navigating your learning journey.

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
      css_class: 'bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500'
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
      css_class: 'bg-gradient-to-r from-pink-500 via-red-500 to-pink-500'
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
      css_class: 'bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-500'
      #view: date-title-summary
---

<!-- $block.design. background | spacing.padding | clip_path | css_style | css_class | columns | {{/* Special case: Slider widget. */}} loop | interval -->