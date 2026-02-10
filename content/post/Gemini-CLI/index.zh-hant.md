---
title: AI 工程 (AI Engineering) ：Gemini CLI 加 Gemini 2.5 Pro
date: 2025-06-29
authors:
  - admin
tags:
  - recommendations
  - AI
  - 代理
  - 自由開源
image:
  caption: "圖片來源: [**Google**](https://blog.google/intl/zh-tw/products/cloud/gemini-cli-your-open-source-ai-agent/)"
---

任何想動手做 AI 代理的人，不只是開發者見習者，還有産品經理及大學生，我推薦可以開始用2025年6月26日由Google推出的零成本（目前）的Gemini CLI 加 Gemini 2.5 Pro。

這篇文章主要說明

命令列介面（Command Line Interface, CLI）

## 聲明

關於 Gemini CLI 加 Gemini 2.5 Pro 的産品，有以下事項聲明，並以此劃定本文範圍之外的內容，並做框架式提示：

* 商業與競爭方向：Gemini CLI 加 Gemini 2.5 Pro 的組合商模式並非首創，其主要競品為Anthropic 提供的 Claude Code。有關於 Claude Code vs Gemini CLI 的 各方面如商業及技術或體驗比較不在本文的討論範圍，在此僅提示讀者，Gemini CLI 加 Gemini 2.5 Pro 的商業價值主張是：(1) Gemini CLI 採用 [Apache 2.0 授權](http://github.com/google-gemini/gemini-cli)的開源專案，(2) Gemini 2.5 Pro （核心LLM技術）提供**個人用戶**有上限的免費使用額度。此額度目前為100 萬詞元（token）的脈絡長度（context window），用量每分鐘 60 次，每日最多可達 1,000 次的模型執行額度。
* 技術方向：

本文著重面對  AI 代理 所知有限，但有高度興趣的學生、應用程式App業餘愛好者和專業開發者的***產品開發學習門檻***的（1）體驗（2）成本 及 （3）應用開發方向 的**概念**及**工具**簡要及大綱式說明，以利讀者能進一步繪出符合自己要的學習路線圖。

## 概念地圖：專業工具與業餘玩具


## 思維導圖

## 靈感觸發圖

Gemini Code Assist 是我們專為學生、程式設計業餘愛好者和專業開發者所設計的 AI 程式碼編寫助理，現在它與 Gemini CLI 採用了相同的核心技術。這意味著在 VS Code 中，

Hugo Blox supports a Markdown extension for mindmaps.

With this open format, can even edit your mindmaps in other popular tools such as Obsidian.

Simply insert a Markdown code block labelled as `markmap` and optionally set the height of the mindmap as shown in the example below.

Mindmaps can be created by simply writing the items as a Markdown list within the `markmap` code block, indenting each item to create as many sub-levels as you need:

<div class="highlight">
<pre class="chroma">
<code>
```markmap {height="200px"}
- Hugo Modules
  - Hugo Blox
  - blox-plugins-netlify
  - blox-plugins-netlify-cms
  - blox-plugins-reveal
```
</code>
</pre>
</div>

renders as

```markmap {height="200px"}
- Hugo Modules
  - Hugo Blox
  - blox-plugins-netlify
  - blox-plugins-netlify-cms
  - blox-plugins-reveal
```

Anh here's a more advanced mindmap with formatting, code blocks, and math:

<div class="highlight">
<pre class="chroma">
<code>
```markmap
- Mindmaps
  - Links
    - [Hugo Blox Docs](https://docs.hugoblox.com/)
    - [Discord Community](https://discord.gg/z8wNYzb)
    - [GitHub](https://github.com/HugoBlox/hugo-blox-builder)
  - Features
    - Markdown formatting
    - **inline** ~~text~~ *styles*
    - multiline
      text
    - `inline code`
    -
      ```js
      console.log('hello');
      console.log('code block');
      ```
    - Math: $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$
```
</code>
</pre>
</div>

renders as

```markmap
- Mindmaps
  - Links
    - [Hugo Blox Docs](https://docs.hugoblox.com/)
    - [Discord Community](https://discord.gg/z8wNYzb)
    - [GitHub](https://github.com/HugoBlox/hugo-blox-builder)
  - Features
    - Markdown formatting
    - **inline** ~~text~~ *styles*
    - multiline
      text
    - `inline code`
    -
      ```js
      console.log('hello');
      console.log('code block');
      ```
    - Math: $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$
```

## Highlighting

<mark>Highlight</mark> important text with `mark`:

```html
<mark>Highlighted text</mark>
```

## Callouts

Use [callouts](https://docs.hugoblox.com/reference/markdown/#callouts) (aka _asides_, _hints_, or _alerts_) to draw attention to notes, tips, and warnings.

By wrapping a paragraph in `{{%/* callout note */%}} ... {{%/* /callout */%}}`, it will render as an aside.

```markdown
{{%/* callout note */%}}
A Markdown aside is useful for displaying notices, hints, or definitions to your readers.
{{%/* /callout */%}}
```

renders as

{{% callout note %}}
A Markdown aside is useful for displaying notices, hints, or definitions to your readers.
{{% /callout %}}

Or use the `warning` callout type so your readers don't miss critical details:

{{% callout warning %}}
A Markdown aside is useful for displaying notices, hints, or definitions to your readers.
{{% /callout %}}

## Did you find this page helpful? Consider sharing it 🙌
