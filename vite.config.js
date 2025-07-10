// Description: Vite configuration for building static assets with custom handling for libraries like Mermaid, Plotly, KaTeX, and more.
// This configuration includes static asset copying, manifest generation, and cleaning up stale directories.
// vite.config.js - Vite configuration for static asset management
// This file is used to build and manage static assets for a web application, including libraries like  
// Mermaid, Plotly.js, KaTeX, and Alpine.js. It handles copying static files, cleaning up directories,
// and generating a manifest file for built assets.
// This file is part of the static asset build process and is not intended to be run directly
// 
// npm run assets:dist
console.log(">>> Using Vite config from:", __dirname);

import {defineConfig} from 'vite'
import {viteStaticCopy} from 'vite-plugin-static-copy'
import {rm} from 'node:fs/promises'

//const distDir = './assets/dist/lib';
const distDir = path.resolve(__dirname, './assets/dist/lib');
console.log("🧾 Vite output dir:", distDir);

import path from 'node:path';


const copyTargets = [
  { src: "node_modules/mermaid/dist/mermaid.min.js", dest: "mermaid/" },
  { src: "node_modules/plotly.js/dist/plotly.min.js", dest: "plotly/" },
  { src: "node_modules/katex/dist/katex.min.js", dest: "katex/" },
  { src: "node_modules/katex/dist/katex.min.css", dest: "katex/" },
  { src: "node_modules/katex/dist/contrib/auto-render.min.js", dest: "katex/" },
  { src: "node_modules/katex/dist/fonts/", dest: "katex/" },
  { src: "node_modules/markmap-autoloader/dist/index.js", dest: "markmap/" },
  { src: "node_modules/alpinejs/dist/cdn.min.js", dest: "alpinejs/" }
];

copyTargets.forEach(target => {
  console.log("→", target.src, "⇒", target.dest);
});





export default defineConfig({
build: {
  // 🧹 Clean the output folder before build
  emptyOutDir: true,
  outDir: distDir,
  rollupOptions: {
    // 🎯 This stub satisfies Vite's entry requirement
    //input: 'layouts/index.html',
    input: path.resolve(__dirname, 'src/noop.js'), // ✅ stub for synthetic entry
    // 🏷️ Content-hash output for reproducibility and cache busting
    //output: {
    //  entryFileNames: '[name]-[hash].js',
    //  assetFileNames: '[name]-[hash][extname]',
    //},
  },
},

  plugins: [  
  // 🧭 Copy static assets before build begins (e.g. mermaid, plotly.js)
    viteStaticCopy({        
        targets: [
        { src: "node_modules/mermaid/dist/mermaid.min.js", dest: "mermaid/" },
        { src: "node_modules/plotly.js/dist/plotly.min.js", dest: "plotly/" },
        { src: "node_modules/katex/dist/katex.min.js", dest: "katex/" },
        { src: "node_modules/katex/dist/katex.min.css", dest: "katex/" },
        { src: "node_modules/katex/dist/contrib/auto-render.min.js", dest: "katex/" },
        { src: "node_modules/katex/dist/fonts/", dest: "katex/" },
        { src: "node_modules/markmap-autoloader/dist/index.js", dest: "markmap/" },
        { src: "node_modules/alpinejs/dist/cdn.min.js", dest: "alpinejs/" }
        ],
    hook: "writeBundle", enforce: 'pre'
    }), 
  ]
})
