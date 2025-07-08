// scan-color-suffixes.js
const fs   = require('fs')
const path = require('path')

// Folders to scan
const rootDirs      = ['./layouts', './content', './assets']

// Your allowed values
const allowedScales   = [50, 300, 500, 700, 950]
const allowedOpacity  = [10, 25, 50, 75, 90]

// File extensions
const fileRegex = /\.(html|md|tmpl|css)$/

// Capture groups: 1=base utility+color, 2=scale, 3=opacity (if present)
const regex = /((?:bg|text|border|ring)-(?:primary|secondary|neutral|amber|hb-dark)-)(\d{1,3})(?:\/(\d{1,3}))?/g

// Helper: find nearest number in an array
function findNearest(target, arr) {
  return arr.reduce((prev, curr) =>
    Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev
  )
}

const findings = []

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  let m
  while ((m = regex.exec(content))) {
    const [fullMatch, base, rawScale, rawOpacity] = m
    const scale   = parseInt(rawScale, 10)
    const opacity = rawOpacity ? parseInt(rawOpacity, 10) : null

    const scaleOk   = allowedScales.includes(scale)
    const opacityOk = opacity === null || allowedOpacity.includes(opacity)

    if (!scaleOk || !opacityOk) {
      const nearestScale  = scaleOk   ? scale    : findNearest(scale, allowedScales)
      const nearestOpac   = !rawOpacity
                           ? '' 
                           : (opacityOk 
                              ? `/${opacity}` 
                              : `/${findNearest(opacity, allowedOpacity)}`)
      findings.push({
        full:     fullMatch,
        file:     filePath,
        suggestion: `${base}${nearestScale}${nearestOpac}`
        + `  // nearest: ${nearestScale}${nearestOpac || ''}`
      })
    }
  }
}

// Recursively walk a dir
function walk(dir) {
  fs.readdirSync(dir).forEach(entry => {
    const fp = path.join(dir, entry)
    if (fs.statSync(fp).isDirectory()) return walk(fp)
    if (fileRegex.test(fp)) scanFile(fp)
  })
}

// Kick off scan
rootDirs.forEach(walk)

// Print numbered results
if (!findings.length) {
  console.log('✅ No non-standard color/scale/opacity classes found.')
} else {
  console.log(`🔍 Found ${findings.length} non-standard color classes:\n`)
  findings.forEach((it, i) => {
    console.log(`${i+1}. ${it.full} in ${it.file}`)
    console.log(`   ↪ Suggested: ${it.suggestion}\n`)
  })
}
