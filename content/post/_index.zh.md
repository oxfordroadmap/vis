---
title: 文章
type: landing

design:
  # Default section spacing
  spacing: "2rem"

sections:
  - block: collection
    id: posts
    content:
      title: Markdown 文章
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
      title: 'Hugo 2 '
      filters:
        folders:
          - post
        tag: "Hugo"
    design:
      view: date-title-summary
      spacing:
        padding: [0, 0, 0, 0]
---

