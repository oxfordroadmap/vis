  

To get your <ul> nav menu to render as a 2x3 or 3x2 grid in mobile view (instead of 6 stacked rows), a responsive grid layout is the most effective TailwindCSS approach—especially given your Hugo setup and the semantic <ul><li> structure.

  

## 💡 Step-by-Step Tailwind Solution

✅ Update the ul classes

html

<ul id="nav-menu"

    class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 px-4 pb-6 lg:flex lg:space-x-2 xl:space-x-8 lg:pb-0 lg:w-auto lg:order-1">

This setup does the following:

  

grid grid-cols-2: shows 2 items per row on mobile

  

sm:grid-cols-3: bumps to 3 per row on small screens (≥640px)

  

gap-x-4 gap-y-2: adds horizontal and vertical spacing

  

lg:flex: switches to horizontal flex layout on large screens

  

Other existing lg:* and xl:* layout settings still apply

  

🎯 Additional Notes

Your existing hidden lg:flex means the grid will only be visible on mobile and lg screen sizes will switch to flex. Make sure that behavior matches your intended visibility.

  

Consider removing hidden if the menu should always be visible but styled differently on breakpoints.

  

For semantic integrity and accessibility, keep the <li> elements as-is with .nav-item and .nav-link.

  

🚀 Optional Enhancements

If you're styling this in Hugo with Markdown or data-driven menu config:

  

Add a partial loop that wraps each link in <li class="nav-item"> with the responsive grid applied to the parent container

  

Create a reusable shortcode or partial that conditionally switches grid-cols-2/grid-cols-3 based on content length or user-defined breakpoint