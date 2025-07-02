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
