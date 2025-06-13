---
title: '作品項目'
subtitle: '利用实证可视化，分析科研成果及影响，做具前瞻战略的系统思考'
date: 2024-12-10
type: landing

# 请参阅 https://bootstrap.hugoblox.com/blocks/portfolio/  
# 此部分显示来自 `content/project/` 的内容。

design:
  spacing: '1rem'

# Page sections
sections:
  - block: collection
    content:
      title: 分析机构科研成果及影响
      text: '采用UTD计量法量化贡献比例，**实证**分析科研成果及影响，做具前瞻的系统决策，如科研经费、人员等的投入产出。'
      # 要显示的页面类型。例如：project。
      filters:
        folders:
          - project
        # Only show content with these tags
        tag: 'NetBib'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: masonry
      fill_image: true
      background: {}
      spacing: {padding: [4px, 0, 4px, 0]}
  - block: collection
    content:
      title: 淨零经济及产业路线
      text: '利用**产业经济**及**能源排放数据**等实证可视化，分析产业投入及产出及排放影响，做具战略的系统思考。'
      # 要显示的页面类型。例如：project。
      filters:
        folders:
          - project
        # Only show content with these tags
        tag: 'NetZero净零'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: article-grid
      columns: 2
      background: {}
      spacing: {padding: [4px, 0, 4px, 0]}
  - block: collection
    id: '🏗原创'
    content:
      title: '🏗原创'
      text: '原创成果展示利用数据的可视化交互化智能化的加值，提供用户洞察'
      filters:
        folders:
          - project
        # Only show content with these tags
        tag: 'NetBib'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: card
      spacing: {padding: [4px, 0, 4px, 0]}
  - block: collection
    id: '🚧扩充延伸'
    content:
      title: '🚧扩充延伸'
      text: 🚧扩充延伸成果展示开放（自由）协作的能力及潜力
      filters:
        folders:
          - project
        tag: "扩充延伸"
    design:
      view: card
---



