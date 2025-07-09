//🧙 Interactive Recursive Markdown Cleaner with File-Level Prompts

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const regex = /<!--\s*more\s*-->/gi;
const targetDir = process.argv[2];

if (!targetDir) {
  console.error('❌ Usage: node clean.js <folder>');
  process.exit(1);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const normalizeLine = line => line.replace(regex, '<!--more-->');

const getAllMarkdownFiles = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(fullPath));
    } else if (file.endsWith('.md')) {
      results.push(fullPath);
    }
  });
  return results;
};

const processFile = (filePath, done) => {
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');
  let modified = false;

  const checkLine = (i) => {
    if (i >= lines.length) {
      if (modified) {
        fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
        console.log(`✅ Updated: ${filePath}\n`);
      } else {
        console.log(`📎 No changes in: ${filePath}\n`);
      }
      return done();
    }

    if (regex.test(lines[i])) {
      console.log(`\n🗂 File: ${filePath}`);
      console.log(`📌 Line ${i + 1}: ${lines[i]}`);
      if (i > 0) console.log(`⬆️ Prev: ${lines[i - 1]}`);
      if (i < lines.length - 1) console.log(`⬇️ Next: ${lines[i + 1]}`);

      rl.question(`🔧 Replace with "<!--more-->"? (y/n): `, (answer) => {
        if (answer.toLowerCase() === 'y') {
          lines[i] = normalizeLine(lines[i]);
          modified = true;
        }
        checkLine(i + 1); // move to next line
      });
    } else {
      checkLine(i + 1);
    }
  };

  checkLine(0);
};

const markdownFiles = getAllMarkdownFiles(path.resolve(targetDir));
let fileIndex = 0;

const nextFile = () => {
  if (fileIndex < markdownFiles.length) {
    processFile(markdownFiles[fileIndex++], nextFile);
  } else {
    rl.close();
    console.log('🎉 Done! All files checked.');
  }
};

nextFile();
