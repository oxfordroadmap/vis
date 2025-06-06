---
title: 'portfolio: project curation page'
# type: landing
sections:
  - block: portfolio
    id: projects
    page_type: project
    # 要显示的页面类型。例如：project。
    content:
      title: Analyzing Science Outcomes and Impact
      subtitle: 'Analyzing Science Outcomes and Impact'
      text: Add any **markdown** formatted content here - text, images, videos, galleries - and even HTML code!

      # 默认过滤器索引（例如，0 对应于下面的第一个 `filter_button` 实例）。
      filter_default: 0
      default_button_index: 0
      # 要移除工具栏，请删除整个 `filter_button` 块。
      # 过滤器工具栏（可选）。
      # 根据需要添加或删除任意数量的过滤器（`filter_button` 实例）。
      # 要显示所有项目，请将 `tag` 设置为 "*"。
      # 要按特定标签过滤，请将 `tag` 设置为现有标签名称。
      # filter_button:
      buttons:
        - name: All
          tag: '*'
        - name: NetZero
          tag: NetZero
        - name: Other
          tag: Demo
    design:
      columns: '1'
      # view: showcase
      view: masonry 
      flip_alt_rows: true
      background: {}
      spacing: {padding: [4px, 0, 4px, 0]}
---
