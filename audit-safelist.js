const fs = require('fs');

// Load Hugo-generated class list
const stats = JSON.parse(fs.readFileSync('./hugo_stats.json', 'utf8'));
const usedClasses = new Set(stats.css?.classes?.map(cls => cls.name.trim()));


// Simulated safelist class generator (example)
const safelistClasses = new Set([
  // Add all classes from your pattern-generated output
  'bg-primary-500',
  'hover:bg-primary-500',
  'dark:hover:text-primary-300',
  // Add more or dynamically generate from your config
]);

// Compare
const unused = [...safelistClasses].filter(cls => !usedClasses.has(cls));
const missing = [...usedClasses].filter(cls => !safelistClasses.has(cls));

console.log(`🔍 Unused safelist classes: ${unused.length}`);
unused.forEach(cls => console.log(`  - ${cls}`));

console.log(`⚠️ Classes used but not safelisted: ${missing.length}`);
missing.forEach(cls => console.log(`  - ${cls}`));
