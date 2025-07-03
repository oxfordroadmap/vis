---
title: 🤓洞察, 👍推荐, 🧠认知站
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
      title: '🤓洞察'
      filters:
        folders:
          - post
        tag: 'insights'
    design:
      view: article-grid
      columns: 2
  - block: collection
    id: posts
    content:
      title: '👍推荐'
      filters:
        folders:
          - post
        tag: 'recommendations'
    design:
      view: article-grid
      css_class: 'bg-gradient-to-r from-primary-500/50 via-primary-100/10 to-primary-500/50 dark:bg-gradient-to-r dark:via-primary-900/90'
      columns: 3
  - block: collection
    id: posts
    content:
      title: '🧠认知站'
      filters:
        folders:
          - post
        tag: "cognitive-frames"
    design:
      view: card
      #view: date-title-summary
      #spacing:
      #  padding: [0, 0, 0, 0]
---
