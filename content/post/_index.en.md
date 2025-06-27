---
title: 🤓Insights, 👍Recommendations, 🧠Cognitive Frames
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
      title: '🤓Insights'
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
      title: '👍Recommendations'
      filters:
        folders:
          - post
        tag: 'recommendations'
    design:
      view: article-grid
      columns: 3
  - block: collection
    id: posts
    content:
      title: '🧠Cognitive Frames'
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
