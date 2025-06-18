---
title: 文章
type: landing

design:
  # Default section spacing
  spacing: "1rem"

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: false

sections:
  - block: collection
    id: posts
    content:
      title: '1 Hugo Blox 1 '
      filters:
        folders:
          - post
        tag: "Hugo Blox"
    design:
      view: article-grid
      columns: 2
  - block: collection
    id: posts
    content:
      title: 2 Markdown 文章
      filters:
        folders:
          - post
        tag: "Markdown"
    design:
      view: article-grid
      columns: 3
  - block: collection
    id: posts
    content:
      title: '3 Hugo '
      filters:
        folders:
          - post
        tag: "Hugo"
    design:
      view: card
      #view: date-title-summary
      spacing:
        padding: [0, 0, 0, 0]
---

