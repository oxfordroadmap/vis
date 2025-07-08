## Core Main Default Structure
* baseof.html 
    * list.html
    * single.html

## Default
* Only one base!  --  baseof.html 
  * ```<!doctype html>..```
* Two ways of defining "main" inside by default --
  * list.html
  * single.html

## Extended -- hugoblox
 [hugo-blox-builder](https://github.com/HugoBlox/hugo-blox-builder/tree/44e75541f7be16116e80e5c71ff98f6997d63fe5) > [modules](https://github.com/HugoBlox/hugo-blox-builder/tree/44e75541f7be16116e80e5c71ff98f6997d63fe5/modules) > [blox-tailwind](https://github.com/HugoBlox/hugo-blox-builder/tree/44e75541f7be16116e80e5c71ff98f6997d63fe5/modules/blox-tailwind) / layouts

*  docs
      * list.html
      * single.html
* landing
      * list.html
      * single.html
* partials
  * components
    * headers
        * {{ $show_search := site.Params.header.navbar.show_search | default false }}
        * {{ $show_theme_chooser := site.Params.header.navbar.show_theme_chooser | default true }}
        * {{ $show_translations := site.Params.header.navbar.show_translations | default true }}
        * if site.Params.header.navbar.button.enable<!-- CTA button -->
        * if $show_search --   {{- partial "components/search-modal.html" . -}}
* shortcodes
