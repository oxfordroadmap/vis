---
weight: 7100
title: ⤷✍寫清楚💭
summary: Easily manage your projects - create ideation mind maps, Gantt charts, todo lists, and more!
date: 2023-10-23
type: docs
authors:
  - admin
tags:
  - Writing
image:
  caption: "Image credit: [**Unsplash**](https://unsplash.com)"
---

```mermaid
gantt
section Section
Completed :done,    des1, 2014-01-06,2014-01-08
Active        :active,  des2, 2014-01-07, 3d
Parallel 4   :         des3, after des1, 1d
Parallel 3   :         des4, after des1, 1d
Parallel 2   :         des5, after des3, 1d
Parallel 1   :         des6, after des4, 1d
```

## Diagrams

Hugo Blox supports the _Mermaid_ Markdown extension for diagrams.

An example **Gantt diagram**:

    ```mermaid
    gantt
    section Section
    Completed :done,    des1, 2014-01-06,2014-01-08
    Active        :active,  des2, 2014-01-07, 3d
    Parallel 1   :         des3, after des1, 1d
    Parallel 2   :         des4, after des1, 1d
    Parallel 3   :         des5, after des3, 1d
    Parallel 4   :         des6, after des4, 1d
    ```


---

## 測2 mermaid


{{% include "_snippet_/test_mermaid" %}}



---

## 測3 curriculum_bare
{{% include "_snippet_/curriculum_bare" %}}



## 測1


<pre class="mermaid" style="white-space: pre-wrap;" >{{% include "_snippet_/test_mermaid" %}}</pre>

projects_all


