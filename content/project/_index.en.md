---
type: landing
has_markmap: true
title: '🏗 Projects'
aliases: ["/en/projects/", "/en/about/prjs" , "/en/prjs"]
# section (top-level directory) 此部分显示来自 `content/project/` 的内容。
# 请参阅 [Sections](https://gohugo.io/content-management/sections/)
# Page sections
sections:
  - block: markdown
    id: 'top'
    content:
      title: 'Overview'
      text: |-
        {{< details summary="👉(Clickable) Project mindmap" open=true class="w-full md:w-auto">}}
        {{% include "/_snippet_/projects_all" %}}
        {{< /details >}}
  - block: collection
    id: 'CaseNetBib'
    content:
      title: '🔬 Science Outcome and Impact Analysis'
      text: 'Measuring contribution ratio using UTD; Deciding inputs and outputs using strategic foresight on empirical data. See [🧰NetBib and pricing]({{% ref path="/project/NetBib"  %}}) and [🗄Case NFU]({{% ref path="/project/NetBib_NFU.edu.cn" %}})'
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
      title: '🍃 NetZero Industry and Economy Roadmap'
      text:  'Insights into **industry economics** and **energy emissions** data to make strategic evidence-based decisions. See **[🍃💵visNetZero]({{% ref path="/project/visNetZero" %}})** and **[🍃🏭visCEADs]({{% ref path="/project/visCEADs" %}})**'
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
      title: '⚖️㊖ Global Civic Service Performance'
      text: '🏛️Oxford University Public Administration Index Smart Application (🚧Extensions) '
      filters:
        folders: ['project']
        tag: "theme_public_adm"
    design:
      view: card
  - block: collection
    id: 'theme_extensions'
    content:
      title: '🚧 Smart Application Extensions'
      text: 'AI capabilities demonstrated through free and open collaboration: 🤖 🧬'
      filters:
        folders: ['project']
        tag: 'theme_extensions'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: article-grid
      columns: 2
---
