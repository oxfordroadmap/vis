// interactive-opacity-fix.js
const fs       = require('fs')
const path     = require('path')
const readline = require('readline')

// ─── CONFIG ────────────────────────────────────────────────────────────────
const ROOT_DIRS       = ['./layouts','./content','./assets']
const FILE_REGEX      = /\.(html|md|tmpl|css)$/
const EXCLUDE_PATHS   = ['assets/dist/']
const ALLOWED_OPACITY = [25,50,75]

// capture <utility>/<opacity>
const OP_REGEX = /((?:bg|text|border|ring)-[\w-]+)\/(\d{1,3})/g

// normalize to POSIX
const toPosix = p => p.replace(/\\/g, '/')

// ─── HELPERS ───────────────────────────────────────────────────────────────
function findNearest(target, list) {
  return list.reduce((best, cur) =>
    Math.abs(cur - target) < Math.abs(best - target) ? cur : best
  )
}

function shouldExclude(fp) {
  const pos = toPosix(fp)
  return EXCLUDE_PATHS.some(ex => pos.includes(ex))
}

function walk(dir, cb) {
  fs.readdirSync(dir).forEach(name => {
    const full = path.join(dir, name)
    if (shouldExclude(full)) return
    if (fs.statSync(full).isDirectory()) return walk(full, cb)
    if (FILE_REGEX.test(full)) cb(full)
  })
}

function scanFile(file) {
  const txt = fs.readFileSync(file, 'utf8')
  let m, found = []
  while ((m = OP_REGEX.exec(txt))) {
    const [all, base, raw] = m
    const num = +raw
    if (!ALLOWED_OPACITY.includes(num)) {
      const nearest = findNearest(num, ALLOWED_OPACITY)
      found.push({
        file,
        full: all,
        replacement: `${base}/${nearest}`
      })
    }
  }
  return found
}

function ask(prompt) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  return new Promise(res => rl.question(prompt, ans => {
    rl.close()
    res(ans.trim().toLowerCase())
  }))
}

function applyReplacement(file, orig, repl) {
  const c = fs.readFileSync(file, 'utf8')
  fs.writeFileSync(file, c.split(orig).join(repl), 'utf8')
}

// ─── MAIN ─────────────────────────────────────────────────────────────────
;(async ()=>{
  let issues = []

  // gather
  ROOT_DIRS.forEach(dir => {
    if (fs.existsSync(dir)) walk(dir, f => {
      issues.push(...scanFile(f))
    })
  })

  if (!issues.length) {
    console.log('✅ No oddball opacity suffixes found.')
    return
  }

  // interact
  console.log(`🔍 Found ${issues.length} non-standard opacity classes:\n`)
  for (let i = 0; i < issues.length; i++) {
    const { file, full, replacement } = issues[i]
    console.log(`${i+1}. ${full} → ${replacement}`)
    console.log(`   in ${file}`)
    const ans = await ask('   Replace? (Y/n) ')
    if (ans === 'n' || ans === 'no') {
      console.log('   – skipped\n')
    } else {
      applyReplacement(file, full, replacement)
      console.log('   ✔ replaced\n')
    }
  }

  console.log('🎉 Done. Rebuild Tailwind to regenerate your CSS.')
})()
