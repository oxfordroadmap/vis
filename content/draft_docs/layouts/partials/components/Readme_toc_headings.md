Key Points of What’s Kept vs. What’s Added:

- ✅ Kept:
    
    - Level check (`if ge $level 4`) to stop deep recursion
        
    - Computation of `$padding` and `$class` for indent and weight
        
    - Rendering of `.Title` via `plainify` + `htmlUnescape`
        
    - Recursive structure via `range $headings` and `template "toc-headings"`
        
- ➕ Added for interactivity:
    
    - `x-data="{ open: false }"` on each `<li>`
        
    - A `<button>` wrapper instead of bare `<a>` to toggle `open`
        
    - A small SVG chevron that rotates when `open` is true
        
    - `<ul x-show="open" x-transition>` around child nodes