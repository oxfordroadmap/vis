// interactive-color-prefix-fix.js
const fs       = require('fs')
const path     = require('path')
const readline = require('readline')

// ─── CONFIG ────────────────────────────────────────────────────────────────
const ROOT_DIRS     = ['./layouts','./content','./assets']
const FILE_REGEX    = /\.(html|md|tmpl|css)$/
const EXCLUDE_PATHS = ['assets/dist/']    // skip final output
const ALLOWED_COLORS = ['primary','secondary','neutral','amber','hb-dark','gray']
const ALLOWED_SCALES = [50, 300, 500, 700, 950]
const ALLOWED_OPACITIES = [10, 25, 50, 75, 90]


// default suggestions for common Tailwind colors
const COLOR_MAP = {
  blue:     'primary',
  yellow:   'amber',
  green:    'amber',
  red:      'secondary',
  slate:    'gray',
  opacity:  'gray',
  zinc:     'neutral'
}

// only match when preceded by a word boundary and one of the four utils
const CLASS_REGEX = /\b(bg|text|border|ring)-([a-z0-9-]+)-(\d{1,3}(?:\/\d{1,3})?)/gi


// normalize to POSIX for exclusion checks
const toPosix = p => p.replace(/\\/g,'/')

// ─── HELPERS ───────────────────────────────────────────────────────────────
function shouldExclude(fp) {
  const pos = toPosix(fp)
  return EXCLUDE_PATHS.some(x => pos.includes(x))
}

function walk(dir, cb) {
  fs.readdirSync(dir).forEach(name => {
    const full = path.join(dir,name)
    if (shouldExclude(full)) return
    if (fs.statSync(full).isDirectory()) return walk(full,cb)
    if (FILE_REGEX.test(full)) cb(full)
  })
}


function scanFile(file) {
  const txt = fs.readFileSync(file,'utf8')
  let m, out = []
  while ((m = CLASS_REGEX.exec(txt))) {
    const [full, prefix, colorSeg, scaleRaw] = m
    const [colorPart, opacityPart] = colorSeg.split('/')
    const color = colorPart
    const scale = parseInt(scaleRaw?.split('/')[0])
    const opacity = opacityPart ? parseInt(opacityPart) : null

    let suggestedColor = ALLOWED_COLORS.includes(color)
      ? color
      : (COLOR_MAP[color] || 'primary')

    let suggestedScale = ALLOWED_SCALES.includes(scale)
      ? scale
      : nearest(scale, ALLOWED_SCALES)

    let suggestedOpacity = opacity && !ALLOWED_OPACITIES.includes(opacity)
      ? nearest(opacity, ALLOWED_OPACITIES)
      : opacity

    const suggestion = `${prefix}-${suggestedColor}-${suggestedScale}${suggestedOpacity !== null ? '/' + suggestedOpacity : ''}`


    if (!ALLOWED_COLORS.includes(color) ||
        !ALLOWED_SCALES.includes(scale) ||
        (opacity !== null && !ALLOWED_OPACITIES.includes(opacity))) {
      out.push({ file, full, prefix, color, scale, opacity, suggestion })
    }
  }
  return out
}

function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
  })
  return new Promise(res =>
    rl.question(question, ans => {
      rl.close()
      res(ans.trim().toLowerCase())
    })
  )
}

function applyReplacement(file, orig, repl) {
  const content = fs.readFileSync(file,'utf8')
  const updated = content.split(orig).join(repl)
  fs.writeFileSync(file, updated, 'utf8')
}

function nearest(target, list) {
  const num = parseInt(target)
  return list.reduce((prev, curr) =>
    Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev
  )
}


// ─── MAIN ─────────────────────────────────────────────────────────────────
;(async()=>{
  let issues = []

  ROOT_DIRS.forEach(dir => {
    if (fs.existsSync(dir)) {
      walk(dir, f => {
        console.log(`🗂️ Walked: ${f}`)   // <-- Print each walked file here
        issues.push(...scanFile(f))
      })
    }
  })

  if (issues.length === 0) {
    console.log('✅ No non-standard color prefixes found.')
    return
  }

  console.log(`🔍 Found ${issues.length} color outliers:\n`)
  for (let i = 0; i < issues.length; i++) {
    const { file, full, prefix, color, scale, opacity, suggestion } = issues[i]

    console.log(`${i+1}. ${full}`)
    console.log(`   in ${file}`)
    console.log(`   parsed → color: ${color}, scale: ${scale}, opacity: ${opacity ?? 'none'}`)
    console.log(`   suggested → ${suggestion}`)

  const input = await ask(`   New suggestion? ([Enter]=${suggestion}, 'n'=skip): `);
  let final = null;

  if (input === '' || input === suggestion) {
    final = suggestion;
  } else if (['n', 'no'].includes(input)) {
    console.log('   – skipped\n');
    continue;
  } else {
    // Validate basic pattern: e.g., neutral-500/25
    const match = input.match(/^([a-zA-Z0-9-]+)-(\d{1,3})(?:\/(\d{1,3}))?$/);
    if (!match) {
      console.log('   ✖ Invalid format. Skipped.\n');
      continue;
    }

    const [, newColor, newScale, newOpacity] = match;
    console.log(`   You entered → ${newColor}-${newScale}${newOpacity ? '/' + newOpacity : ''}`);
    const confirm = await ask('   Confirm replacement? (Y/n): ');
    if (confirm === 'n' || confirm === 'no') {
      console.log('   – skipped\n');
      continue;
    }

    final = `${newColor}-${newScale}${newOpacity ? '/' + newOpacity : ''}`;
  }

  const replacement = `${prefix}${final}`;
  applyReplacement(file, full, replacement);
  console.log(`   ✔ replaced → ${replacement}\n`);
}
  console.log('🎉 Done. Rebuild Tailwind to regenerate your CSS.')
})()
