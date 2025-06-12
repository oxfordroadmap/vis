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
      title: 'Markdown'
      filters:
        folders:
          - post
        tag: "Markdown"
	design:
      view: article-grid
      columns: 3
sections:
  - block: collection
    id: posts
    content:
      title: 'Hugo'
      filters:
        folders:
          - post
        tag: "Hugo"
	design:
      view: date-title-summary
      spacing:
        padding: [0, 0, 0, 0]
 ---

