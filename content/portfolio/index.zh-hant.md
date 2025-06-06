---
# 使用 Portfolio 小部件创建的部分。
# 此部分显示来自 `content/project/` 的内容。
# 请参阅 https://docs.hugoblox.com/widget/portfolio/
widget: portfolio

# 此文件表示页面部分。
headless: true

# 此部分在页面上的显示顺序。
weight: 20

title: ''
subtitle: ''

filter_default: 0

content:
  # 要显示的页面类型。例如：project。
  page_type: project

  # 默认过滤器索引（例如，0 对应于下面的第一个 `filter_button` 实例）。
  filter_default: 0

  # 过滤器工具栏（可选）。
  # 根据需要添加或删除任意数量的过滤器（`filter_button` 实例）。
  # 要显示所有项目，请将 `tag` 设置为 "*"。
  # 要按特定标签过滤，请将 `tag` 设置为现有标签名称。
  # 要移除工具栏，请删除整个 `filter_button` 块。
  filter_button:
    - name: All
      tag: '*'
    - name: Machine Learning
      tag: ML
    - name: Computer Vision
      tag: CV
    - name: NLP
      tag: NLP

design:
  columns: '1'
  view: masonry
  flip_alt_rows: true
  background: {}
  spacing: {padding: [0, 0, 0, 0]}
---
