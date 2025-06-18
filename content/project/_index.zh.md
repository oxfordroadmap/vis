---
type: landing
has_markmap: true
title: '🏗作品项目'
aliases: ["/zh-hant/projects/", "/zh-hant/about/prjs" , "/zh-hant/prjs"]
# section (top-level directory) 此部分显示来自 `content/project/` 的内容。
# 请参阅 [Sections](https://gohugo.io/content-management/sections/)
# Page sections
sections:
  - block: markdown
    id: 'top'
    content:
      title: '项目概览'
      text: |-
        {{< details summary="👉所有项目思维导图" open=true class="w-full md:w-auto">}}
        {{% include "/_snippet_/projects_all" %}}
        {{< /details >}}
  - block: collection
    id: 'CaseNetBib'
    content:
      title: '🔬 机构科研成果及影响分析'
      text: '采用UTD计量法，量化贡献比例，做具前瞻决策，系统地分析投入产出。见 [🧰NetBib项目订价]({{% ref path="/project/NetBib"  %}}) 及 [🗄案例NFU]({{% ref path="/project/NetBib_NFU.edu.cn" %}})'
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
      title: '🍃 净零经济及产业进展及组成'
      text: |
        * 透视 **产业经济** 及 **能源排放** 数据，依实证做战略决策
        * 见 **[🍃💵visNetZero项目]({{% ref path="/project/visNetZero" %}})** 及 **[🍃🏭visCEADs项目]({{% ref path="/project/visCEADs" %}})**
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
      title: '⚖️㊖ 全球政务绩效数据'
      text: '🏛️牛津大学 公行指数 智能应用（🚧扩充延伸）'
      filters:
        folders: ['project']
        tag: "theme_public_adm"
    design:
      view: card
  - block: collection
    id: 'theme_extensions'
    content:
      title: '🚧 智能应用扩充延伸'
      text: '展示开放（自由）协作于智能应用的能力：🤖 🧬'
      filters:
        folders: ['project']
        tag: 'theme_extensions'
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: article-grid
      columns: 2
---
