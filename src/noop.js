// noop.js - diagnostics stub for Vite bundler

import mermaidPkg from 'mermaid/package.json';
import plotlyPkg from 'plotly.js/package.json';
import katexPkg from 'katex/package.json';
import alpinePkg from 'alpinejs/package.json';

console.log('[noop diagnostics] Build Timestamp:', new Date().toISOString());

console.log('[noop diagnostics] Library versions:');
console.log(`- mermaid: ${mermaidPkg.version}`);
console.log(`- plotly.js: ${plotlyPkg.version}`);
console.log(`- katex: ${katexPkg.version}`);
console.log(`- alpinejs: ${alpinePkg.version}`);

export default {
  mermaid: mermaidPkg.version,
  plotly: plotlyPkg.version,
  katex: katexPkg.version,
  alpine: alpinePkg.version,
  builtAt: new Date().toISOString(),
};
