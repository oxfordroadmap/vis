---
# 请参阅 https://bootstrap.hugoblox.com/blocks/portfolio/  
# 此部分显示来自 `content/project/` 的内容。
type: landing

title: '作品項目'
date: 2024-12-10
# Begin multi-line `summary` with YAML's `|` or `|2-` prefix and indent 2 spaces
summary: |
  实证可视化，交互智能化，决策系统化。
  * 🔬NetBib -- 科研成果及影响分析
  * 🍃visNetZero, 🍃visCEADs -- 淨零经济路线, 淨零产业路线
  * 🏛️bipa2024 -- 牛津大学公共行政指数🚧
  * 🤖panel_chat, 🧬pybibx -- 展示开放协作的扩充延伸成果🚧
design:
  spacing: '0.4rem'
# Page sections
sections:
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
      title: '🍃visNetZero 🍃visCEADs 淨零经济及产业路线'
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
      text: '全球政务绩效数据（🏛️牛津大学公共行政指数）智能应用项目
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
      columns: 3
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


