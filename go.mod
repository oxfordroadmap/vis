module github.com/oxfordroadmap/hugo-blox-builder/starters/academic-cv

go 1.19

//✅ “Use my fork of hugo-blox-builder for all references to github.com/HugoBlox/hugo-blox-builder.”
// Override HugoBlox builder core module with oxfordroadmap fork
replace github.com/HugoBlox/hugo-blox-builder => github.com/oxfordroadmap/hugo-blox-builder v0.0.2-20250704122556-8b683644319a931af94fb5d8b65f637ced7fd4c4

//✅ “Still resolve plugins like blox-plugin-netlify and blox-tailwind using the versions specified.”
// Plugin modules maintained by HugoBlox (used as-is)
require (
	github.com/HugoBlox/hugo-blox-builder/modules/blox-plugin-netlify v1.1.2-0.20231209203044-d31adfedd40b
    github.com/HugoBlox/hugo-blox-builder/modules/blox-tailwind v0.3.1
)