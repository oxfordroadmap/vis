---
title: Posts
view: article-grid
cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: posts
    content:
      title: 'All posts'
      filters:
        folders:
          - post
    design:
      view: article-grid
      columns: 3
---

