---
type: landing
# section (top-level directory) 此部分顯示來自 `content/project/` 的內容。
# 請參閱 [Sections](https://gohugo.io/content-management/sections/)
design:
  spacing: '0.4rem'
# Page sections
sections:
  - block: markdown
    id: 'top'
    content:
      title: '📝作品項目'
      subtitle: '所有項目'
      text: |-
        {{% include "/_snippet_/projects_all" %}}
    design:
      columns: '1'
  - block: collection
    id: 'CaseNetBib'
    content:
      title: '🔬NetBib 分析機構科研成果及影響'
      text: '采用UTD計量法，量化貢獻比例，做具前瞻決策，系統地分析投入產出。'
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
      title: '🍃visNetZero 🍃visCEADs 淨零經濟及產業'
      text: '利用**產業經濟**及**能源排放數據**等實證，系統地可視化投入、產出及排放影響，做戰略決策。'
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
      title: '🏛️公共行政---展示開放協作的能力及潛力'
      text: '全球政務績效數據（🏛️牛津大學公共行政指數）智能應用項目'
      filters:
        folders: ['project']
        tag: "theme_public_adm"
    design:
      view: card
  - block: collection
    id: 'theme_extensions'
    content:
      title: '🚧擴充延伸'
      text: '成果展示開放（自由）協作的能力及潛力'
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
