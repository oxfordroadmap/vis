---
type: landing
has_markmap: true
title: '🏗作品項目'
aliases: ["/zh/projects/", "/zh/about/prjs" , "/zh/prjs"]
# section (top-level directory) 此部分顯示來自 `content/project/` 的內容。
# 請參閱 [Sections](https://gohugo.io/content-management/sections/)
# Page sections
sections:
  - block: markdown
    id: 'top'
    content:
      title: '項目概覽'
      css_class: "items-start max-w-prose gap-3 justify-start px-3"
      text: |-
        {{< details summary="👉所有項目思維導圖" open=true class="w-full md:w-auto">}}
        {{% include "/_snippet_/projects_all" %}}
        {{< /details >}}
  - block: collection
    id: 'CaseNetBib'
    content:
      title: '🔬 機構科研成果及影響分析'
      text: '采用UTD計量法，量化貢獻比例，做具前瞻決策，系統地分析投入產出。見 [🧰NetBib項目訂價]({{% ref path="/project/NetBib"  %}}) 及 [🗄案例NFU]({{% ref path="/project/NetBib_NFU.edu.cn" %}})'
      filters:
        folders: ['project']
        tag: 'CaseNetBib'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: card
  - block: collection
    id: 'theme_NetZero'
    content:
      title: '🍃 淨零經濟及產業進展及組成'
      text: |
        * 透視 **產業經濟** 及 **能源排放** 數據，依實證做戰略決策
        * 見 **[🍃💵visNetZero項目]({{% ref path="/project/visNetZero" %}})** 及 **[🍃🏭visCEADs項目]({{% ref path="/project/visCEADs" %}})**
      filters:
        folders: ['project']
        tag: 'theme_NetZero'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: article-grid
      columns: 2
  - block: collection
    id: 'theme_public_adm'
    content:
      title: '⚖️㊖ 全球政務績效數據'
      text: '🏛️牛津大學 公行指數 智能應用（🚧擴充延伸）'
      filters:
        folders: ['project']
        tag: "theme_public_adm"
    design:
      view: card
  - block: collection
    id: 'theme_extensions'
    content:
      title: '🚧 智能應用擴充延伸'
      text: '展示開放（自由）協作於智能應用的能力：🤖 🧬'
      filters:
        folders: ['project']
        tag: 'theme_extensions'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: article-grid
      columns: 2
---
