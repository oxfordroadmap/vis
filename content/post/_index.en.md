---
title: Posts
type: landing

design:
  # Default section spacing
  spacing: "2rem"

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: posts
    content:
      title: 'Hugo Blox 1 '
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
      title: 'Markdown 2 '
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
