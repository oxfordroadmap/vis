## 🧠 Collection Block Flow in HugoBlox

When a block like `resume-experience` is declared in frontmatter, HugoBlox processes it via:

1. `landing_page.html` (or equivalent layout)
    
2. → which calls `parse_block_v2.html`
    
3. → which passes a dict like:
    

go-html-template

```
(dict "page" . "block" $block)
```

4. → which calls `partials/blox/resume-experience.html` with that dict
    
5. → then inside it, you’re calling `toggle-details.html`
    

So, inside `resume-experience.html`, your local `.page` or `.wcPage` variable is **not** accessible via `.Page`. You need to extract it manually.