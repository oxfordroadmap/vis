---
# section (top-level directory) 此部分显示来自 `content/project/` 的内容。
# 请参阅 [Sections](https://gohugo.io/content-management/sections/)
type: landing
design:
  spacing: '0.4rem'
# Page sections
sections:
  - block: markdown
    id: 'top'
    content:
      title: '📝作品項目'
      subtitle: ''
      text: |-
        ```markmap {height="200px"}
        - 实证可视化，交互智能化，决策系统化。
          * 🔬[NetBib](#CaseNetBib) -- 科研成果及影响分析
          * [🍃visNetZero, 🍃visCEADs](#theme_NetZero) -- 淨零经济路线, 淨零产业路线
          * 🏛️[bipa2024](#theme_public_adm) -- 牛津大学公共行政指数🚧
          * [🤖panel_chat, 🧬pybibx](#theme_extensions) -- 展示开放协作的扩充延伸成果🚧
        ````
    design:
      columns: '1'
  - block: collection
    id: 'CaseNetBib'
    content:
      title: '🔬NetBib 分析机构科研成果及影响'
      text: '采用UTD计量法，量化贡献比例，做具前瞻决策，系统地分析投入产出。'
      filters:
        folders: ['project']
        tag: 'CaseNetBib'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: card
      spacing: {padding: [1rem, 0, 1rem, 0]}
  - block: collection
    id: 'theme_NetZero'
    content:
      title: '🍃visNetZero 🍃visCEADs 淨零经济及产业'
      text: '利用**产业经济**及**能源排放数据**等实证，系统地可视化投入、产出及排放影响，做战略决策。'
      filters:
        folders: ['project']
        tag: 'theme_NetZero'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: article-grid
      columns: 2
      spacing: {padding: [1rem, 0, 1rem, 0]}
  - block: collection
    id: 'theme_public_adm'
    content:
      title: '🏛️公共行政---展示开放协作的能力及潜力'
      text: '全球政务绩效数据（🏛️牛津大学公共行政指数）智能应用项目'
      filters:
        folders: ['project']
        tag: "theme_public_adm"
    design:
      view: card
  - block: collection
    id: 'theme_extensions'
    content:
      title: '🚧扩充延伸'
      text: '成果展示开放（自由）协作的能力及潜力'
      filters:
        folders: ['project']
        tag: 'theme_extensions'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: article-grid
      columns: 2
      spacing: {padding: [1rem, 0, 1rem, 0]}
---
<!-- override styles -->
<style>
.mb-6 {
  margin-bottom: 0rem; /*1.5rem*/
}
.text-3xl {
  font-size: 1.75rem;/*1.875rem*/
  line-height: 1.75rem;/*2.25rem*/
}
</style>


