---
title: 文章
type: landing
cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: posts
    content:
      title: 文章
      filters:
        folders:
          - post
    design:
      view: article-grid
      columns: 3
---

