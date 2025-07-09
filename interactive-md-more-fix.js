//🧙 Interactive Recursive Markdown Cleaner with File-Level Prompts

const fs = require('fs');
const path = require('path');
const readline = require('readline/promises');

const regex = /<!--\s*more\s*-->/gi;
const correctForm = '<!--more-->';
const targetDir = process.argv[2];

if (!targetDir) {
  console.error('❌ Usage: node clean.js <folder>');
  process.exit(1);
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const normalizeLine = (line) => regex.test(line) ? line.replace(regex, correctForm) : line;

const getAllMarkdownFiles = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(fullPath));
    } else if (file.endsWith('.md')) {
      results.push(fullPath);
    }
  });
  return results;
};

const processFile = async (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let modified = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (regex.test(line) && line.trim() !== correctForm) {
      console.log(`\n🗂 File: ${filePath}`);
      console.log(`📌 Line ${i + 1}: ${line}`);
      if (i > 0) console.log(`⬆️ Prev: ${lines[i - 1]}`);
      if (i < lines.length - 1) console.log(`⬇️ Next: ${lines[i + 1]}`);

      const answer = await rl.question(`🔧 Replace with "${correctForm}"? (Y/n): `);
      if (answer.trim().toLowerCase() !== 'n') {
        lines[i] = normalizeLine(line);
        modified = true;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log(`✅ Updated: ${filePath}\n`);
  } else {
    console.log(`📎 No changes in: ${filePath}\n`);
  }
};

const run = async () => {
  const markdownFiles = getAllMarkdownFiles(path.resolve(targetDir));
  for (const file of markdownFiles) {
    await processFile(file);
  }
  rl.close();
  console.log('🎉 Done! All files processed.');
};

run();
