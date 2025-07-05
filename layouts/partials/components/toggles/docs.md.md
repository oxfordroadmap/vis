## 🧩 `toggle-details.html`

Reusable toggle button partial to expand/collapse `<details>` blocks via Alpine.js..

### 💡 Usage / Initial Usage

go-html-template

```
{{ partial "components/toggles/toggle-details.html" (dict
    "page" .Page
    "icon_set" "folder_outline"
    "section_id" "section-resume-experience"
    "target_selector" ".cv_work_details details"
    "aria_label" "Toggle details section"
) }}
```

### 🛠️ Parameters

|Key|Type|Default|Description|
|---|---|---|---|
|`page`|Page|—|Required. Use `.Page` to activate Alpine|
|`icon_set`|string|`"folder_outline"`|Toggles icon pair (open/closed)|
|`section_id`|string|`"section-resume-experience"`|DOM ancestor used for scoping toggle|
|`target_selector`|string|`".cv_work_details details"`|Targets elements to open/close|
|`aria_label`|string|`"Toggle details"`|Accessibility label for screen readers|

### 🎨 Available `icon_set`s

- `book` → 📖 / 📕
    
- `news` → 📰 / 🗞️
    
- `folder` → 📂 / 📁
    
- `folder_outline` → 🗁 / 🗀
    
- `gesture` → 👐 / 🙏
    
- `finger` → 👉 / 👇
    
- `caret` → 🔽 / ▶️
    

### 🔍 Notes

- Requires Alpine.js (enabled via `.Page.Store.Set`)
    
- Defaults to expanded on page load
    
- Uses emoji fallback if Alpine fails to initialize