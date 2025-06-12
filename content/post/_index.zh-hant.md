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
      title: '文章 Tag "Markdown" only'
      # Choose how many pages you would like to display (0 = all pages)
      count: 0
      # Page type to display. E.g. post, talk, publication...
      # page_type: post
      # Filter on criteria
      filters:
        folders:
          - post
        #author: ""
        #category: ""
        tag: "Markdown"
        #exclude_featured: false
        #exclude_future: false
        #exclude_past: false
        #publication_type: ""
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: date-title-summary
      #view: article-grid
      columns: 3
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]
---
