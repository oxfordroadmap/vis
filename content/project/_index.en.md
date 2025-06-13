---
title: 'Projects'
date: 2024-12-10
type: landing

design:
  spacing: '1rem'

# [Configure cascade](https://gohugo.io/configuration/cascade/)
cascade:
  - target:
      kind: page
      path: '{/projects,/project/**}'
    params:
      show_breadcrumb: true

# Page sections
sections:
  - block: collection
    content:
      title: Selected Projects
      text: I enjoy making things. Here are a selection of projects that I have worked on over the years.
      filters:
        folders:
          - project
        tag: creations
    design:
      view: article-grid
      fill_image: false
      columns: 2
  - block: collection
    content:
      title: '🚧Extensions'
      text: '🚧Extended outcomes that demonstrate the capabilities and potentials of free and open collaboration'
      filters:
        folders:
          - project
        tag: extensions
    design:
      view: card
---
