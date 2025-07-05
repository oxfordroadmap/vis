Elegant ways to make a **monochrome gray SVG icon work seamlessly in dark mode**

### 🌗 Option 1: CSS `filter: invert()` for Dark Mode

If the SVG is inline or in an `<img>` tag, you can conditionally invert it using Tailwind’s dark mode class:

html

```
<img src="/icons/download.svg" class="dark:invert" />
```

Or if you're embedding it directly:

html

```
<svg class="dark:invert">
  <!-- your SVG paths -->
</svg>
```

💡 Tailwind’s `dark:invert` applies `filter: invert(100%)` only when the `dark` class (or media query) is active.

### 🎨 Option 2: `fill-current` + Text Color Control

If the SVG uses `fill="#464646"` (like your `.st0` path), consider replacing it with `fill="currentColor"` so Tailwind’s text color utilities can drive its appearance:

1. **Modify the SVG paths**:
    

xml

```
<style>
  .st0 { fill: currentColor; }
</style>
```

2. **Control via Tailwind**:
    

html

```
<svg class="text-gray-700 dark:text-white">
  <!-- paths with class="st0" -->
</svg>
```

This lets you define the icon’s tint with normal color classes, which is cleaner and more scalable across themes.

### 🛠 If You're Using External SVG

Wrap the icon with a parent container and apply CSS filter:

html

```
<div class="dark:filter dark:invert">
  <img src="/icons/download.svg" alt="Download icon" />
</div>
```

Or scope it with `:global()` if you're working in scoped Hugo or Tailwind environments.