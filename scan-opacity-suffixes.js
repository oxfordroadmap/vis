// scan-opacity-suffixes.js
const fs   = require('fs')
const path = require('path')

// Directories to scan
const rootDirs      = ['./layouts', './content', './assets']
const validSuffixes = [10, 25, 50, 75, 90]

// File extensions to include in scan
const fileRegex = /\.(html|md|tmpl|css)$/

// Regex to capture utility classes with an opacity suffix
const regex    = /((?:bg|text|border|ring)-[\w-]+)\/(\d{1,3})/g

// Collect findings in an array
const findings = []

// Find nearest valid opacity
function findNearest(target) {
  return validSuffixes.reduce((nearest, curr) =>
    Math.abs(curr - target) < Math.abs(nearest - target) ? curr : nearest
  )
}

// Scan a single file for oddball opacity suffixes
function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  let match
  while ((match = regex.exec(content))) {
    const [full, base, raw] = match
    const num = parseInt(raw, 10)
    if (!validSuffixes.includes(num)) {
      const nearest = findNearest(num)
      findings.push({
        full,
        file: filePath,
        suggestion: `${base}/${nearest}  // Nearest standard: ${nearest}%`
      })
    }
  }
}

// Recursively walk a directory
function walk(dir) {
  fs.readdirSync(dir).forEach(entry => {
    const fullPath = path.join(dir, entry)
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath)
    } else if (fileRegex.test(fullPath)) {
      scanFile(fullPath)
    }
  })
}

// Kick off the scan
rootDirs.forEach(walk)

// Output results with numbering
if (findings.length === 0) {
  console.log('✅ No oddball opacity suffixes found.')
} else {
  console.log(`🔍 Detected ${findings.length} non-standard opacity suffixes:\n`)
  findings.forEach((item, index) => {
    console.log(`${index + 1}. ${item.full} in ${item.file}`)
    console.log(`   ↪ Suggested: ${item.suggestion}\n`)
  })
}
