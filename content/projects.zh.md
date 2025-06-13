---
title: '项目'
date: 2024-12-10
type: landing

design:
  spacing: '1rem'

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

# Page sections
sections:
  - block: collection
    content:
      title: '🏗原创'
      text: 原创成果展示利用数据的可视化交互化智能化的加值，提供用户洞察
      filters:
        folders:
          - project
        tag: 原创 
    design:
      view: article-grid
      fill_image: false
      columns: 2
  - block: collection
    content:
      title: '🚧扩充延伸'
      text: 🚧扩充延伸成果展示开放（自由）协作的能力及潜力
      filters:
        folders:
          - project
        tag: 扩充延伸 
    design:
      view: card
---
