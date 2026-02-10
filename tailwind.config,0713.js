import 'dotenv/config'
const defaultTheme = require('tailwindcss/defaultTheme')
const typographyPlugin = require('@tailwindcss/typography');
const content_extra = process.env.HB_TW_CONTENT ? process.env.HB_TW_CONTENT.split(', ') : '';

console.log('Current directory: ' + process.cwd());
//console.log('content_extra: ${content_extra}' + content_extra);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './hugo_stats.json',
    './layouts/**/*.html',
    './assets/**/*.css',
    //'./assets/media/**/*.svg',
    //'**/libs/chroma/*.css',
    //'./content/**/*.md',
    //...content_extra,
    //'../../starters/**/*.md',
    // ...(process.env.HB_TPL ? '../../starters/'+process.env.HB_TPL+'/hugo_stats.json' : './hugo_stats.json'),
  ],
  plugins: [
    typographyPlugin({ target: 'legacy' }),
  ],
  safelist: [
    // 👇 Safelist to preserve runtime-controlled display classes.
    // These are toggled via Alpine.js in components like `toggle-toc.html`
    // Ensure visibility switching with Tailwind's `hidden` / `block` utilities.
    'hidden', 'block', 
    'task-list',   /* As it's added via JS */
    'pl-4', 'pl-8', 'pl-12',   /* TOC indents */
    'z-0','z-10','z-20','z-30','z-40','z-50','z-auto',  /* Default */
    'min-h-screen', /* Blox options */
    { pattern: /justify-(start|end|center|between|around|evenly|normal|stretch)/, variants: ['hover', 'focus', 'md'] },
    { pattern: /^list-(none|disc|decimal|square|roman)$/ },
    { pattern: /grid-cols-+/, variants: ['md'] },
    { pattern: /w-1\/(2|3|4|5)/, variants: ['sm', 'md', 'lg', 'hover'] },
    { pattern: /col-span-+/, variants: ['md'] },
    { pattern: /^line-clamp-(1|2|3|4|5|6)$/ },
    { pattern: /^leading-(none|tight|normal|loose)$/ },
    { pattern: /bg-white+/ },
    { pattern: /bg-gradient+/ },
    { pattern: /from-primary+/ },
    { pattern: /to-primary+/ },
    { pattern: /(bg|border|text|ring)-(primary|secondary|neutral|amber|hb-dark)-(100|300|500|700|900)(\/(25|50|75))?/, variants: ['', 'hover', 'focus', 'dark', 'dark:hover', 'dark:focus'] },
    { pattern: /bg-transparent/, variants: ['hover', 'focus', 'active', 'group-hover'] },
    { pattern: /space-y-(1|3|5|7|9)/ },  ],
  darkMode: ['class'],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'max-md': { max: '768px' }, // enables @screen max-md
        'max-xl': { max: '1280px' }, // enables @screen max-md
      },
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
        // You can override existing types too
      },
      colors: {
        'hb-dark': 'rgb(23, 24, 28)',
        neutral: {
          DEFAULT: "rgb(var(--color-neutral) / <alpha-value>)",
          50: "rgb(var(--color-neutral-50) / <alpha-value>)",
          100: "rgb(var(--color-neutral-100) / <alpha-value>)",
          200: "rgb(var(--color-neutral-200) / <alpha-value>)",
          300: "rgb(var(--color-neutral-300) / <alpha-value>)",
          400: "rgb(var(--color-neutral-400) / <alpha-value>)",
          500: "rgb(var(--color-neutral-500) / <alpha-value>)",
          600: "rgb(var(--color-neutral-600) / <alpha-value>)",
          700: "rgb(var(--color-neutral-700) / <alpha-value>)",
          800: "rgb(var(--color-neutral-800) / <alpha-value>)",
          900: "rgb(var(--color-neutral-900) / <alpha-value>)",
          },
        primary: {
          50: "rgb(var(--color-primary-50) / <alpha-value>)",
          100: "rgb(var(--color-primary-100) / <alpha-value>)",
          200: "rgb(var(--color-primary-200) / <alpha-value>)",
          300: "rgb(var(--color-primary-300) / <alpha-value>)",
          400: "rgb(var(--color-primary-400) / <alpha-value>)",
          500: "rgb(var(--color-primary-500) / <alpha-value>)",
          600: "rgb(var(--color-primary-600) / <alpha-value>)",
          700: "rgb(var(--color-primary-700) / <alpha-value>)",
          800: "rgb(var(--color-primary-800) / <alpha-value>)",
          900: "rgb(var(--color-primary-900) / <alpha-value>)",
          950: "rgb(var(--color-primary-950) / <alpha-value>)",
        },
        secondary: {
          50: "rgb(var(--color-secondary-50) / <alpha-value>)",
          100: "rgb(var(--color-secondary-100) / <alpha-value>)",
          200: "rgb(var(--color-secondary-200) / <alpha-value>)",
          300: "rgb(var(--color-secondary-300) / <alpha-value>)",
          400: "rgb(var(--color-secondary-400) / <alpha-value>)",
          500: "rgb(var(--color-secondary-500) / <alpha-value>)",
          600: "rgb(var(--color-secondary-600) / <alpha-value>)",
          700: "rgb(var(--color-secondary-700) / <alpha-value>)",
          800: "rgb(var(--color-secondary-800) / <alpha-value>)",
          900: "rgb(var(--color-secondary-900) / <alpha-value>)",
          950: "rgb(var(--color-secondary-950) / <alpha-value>)",
        },
      },
      fontFamily: {
          // inner double quotes for font names that contain spaces to ensure they’re handled as single units by both Tailwind and the browser.
          sans: [
            '"Source Han Sans"',
            '"Microsoft YaHei"',
            '"PingFang SC"',
            '"PingFang TC"',
            ...defaultTheme.fontFamily.sans,
          ],
          serif: [
            '"Source Han Serif"',
            '"SimSun"','"MingLiu"',
            '"Songti SC"',
            '"Songti TC"',
            ...defaultTheme.fontFamily.serif,
          ],
        },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem'
      },
    },

    typography: ({ theme }) => {
      // —— BASE LINK STYLES — default everywhere
      const baseLinkStyles = {
        textDecoration: 'none',
        transitionProperty: 'all',
        transitionDuration: theme('transitionDuration.DEFAULT'),
        backgroundColor: 'transparent',
        color: 'inherit',
        '&:hover': {
          backgroundColor: theme('colors.primary.500'),
          color: theme('colors.white'),
        },
      };
      // —— PROSE LINK STYLES — override inside .prose
      const proseLinkStyles = {
        textDecoration: 'underline dotted',
        textDecorationColor: theme('colors.primary.700'),
        color: theme('colors.primary.700'),
        transitionProperty: 'all',
        transitionDuration: theme('transitionDuration.DEFAULT'),
        '&:hover': {
          backgroundColor: theme('colors.primary.500'),
          color: theme('colors.white'),
        },
        // Dark mode overrides
        'html.dark &': {
          color: theme('colors.primary.50'),
          textDecorationColor: theme('colors.primary.50'),
          '&:hover': {
            backgroundColor: theme('colors.primary.300'),
            color: theme('colors.gray.900'),
          },
        },
      };

      // —— NON-PROSE LINK VARIANT (create .link-alt in @layer components)
      // This isn't in typography block, but you can centralize:
      // .link-alt { @apply no-underline hover:bg-secondary-500 text-inherit transition; }

      // —— SHARED FONT SIZES
      const smallCss = {
        h1: { fontSize: '1.25rem' },
        h2: { fontSize: '1.125rem' },
        h3: { fontSize: '1rem' },
        h4: { fontSize: '0.875rem' },
        p:  { fontSize: '.875rem' },
      };

      const largeCss = {
        h1: { fontSize: '1.875rem' },
        h2: { fontSize: '1.75rem' },
        h3: { fontSize: '1.5rem' },
        h4: { fontSize: '1.25rem' },
        h5: { fontSize: '1.125rem' },
        h6: { fontSize: '1.125rem' },
        p:  { fontSize: '1rem' },
      };

      // —— GLOBAL BASE STYLES (used in all variants)
      const baseCss = {
        a: baseLinkStyles,
        mark: {
          color: theme('colors.neutral.100 / 1'),
          backgroundColor: theme('colors.primary.600 / 1'),
          padding: '0.1rem 0.2rem',
          borderRadius: '0.25rem',
        },
        h1: { marginTop: theme('spacing.2'), fontWeight: theme('fontWeight.black')},
        h2: { marginTop: theme('spacing.2') },
        h3: { marginTop: theme('spacing.2'), fontWeight: theme('fontWeight.black') },
        h4: { marginTop: theme('spacing.2') },
        h5: { marginTop: theme('spacing.2'), fontWeight: theme('fontWeight.black') },
        h6: { marginTop: theme('spacing.2'), fontWeight: theme('fontWeight.semibold') },
        p:  { marginTop: theme('spacing.2') },
        "--tw-prose-body":        theme("colors.neutral.700 / 1"),
        "--tw-prose-headings":    theme("colors.neutral.800 / 1"),
        "--tw-prose-lead":        theme("colors.neutral.500 / 1"),
        "--tw-prose-links":       theme("colors.primary.600 / 1"),
        "--tw-prose-bold":        theme("colors.neutral.900 / 1"),
        "--tw-prose-counters":    theme("colors.neutral.800 / 1"),
        "--tw-prose-bullets":     theme("colors.neutral.500 / 1"),
        "--tw-prose-hr":          theme("colors.neutral.200 / 1"),
        "--tw-prose-quotes":      theme("colors.neutral.700 / 1"),
        "--tw-prose-quote-borders": theme("colors.primary.200 / 1"),
        "--tw-prose-captions":    theme("colors.neutral.500 / 1"),
        "--tw-prose-code":        theme("colors.secondary.700 / 1"),
        "--tw-prose-pre-code":    theme("colors.neutral.700 / 1"),
        "--tw-prose-pre-bg":      theme("colors.neutral.50 / 1"),
        "--tw-prose-th-borders":  theme("colors.neutral.500 / 1"),
        "--tw-prose-td-borders":  theme("colors.neutral.300 / 1"),
        "--tw-prose-invert-body":     theme("colors.neutral.300 / 1"),
        "--tw-prose-invert-headings": theme("colors.neutral.50 / 1"),
        "--tw-prose-invert-lead":     theme("colors.neutral.500 / 1"),
        "--tw-prose-invert-links":    theme("colors.primary.400 / 1"),
        "--tw-prose-invert-bold":     theme("colors.neutral.DEFAULT / 1"),
        "--tw-prose-invert-counters": theme("colors.neutral.400 / 1"),
        "--tw-prose-invert-bullets":  theme("colors.neutral.600 / 1"),
        "--tw-prose-invert-hr":       theme("colors.neutral.500 / 1"),
        "--tw-prose-invert-quotes":   theme("colors.neutral.200 / 1"),
        "--tw-prose-invert-quote-borders": theme("colors.primary.900 / 1"),
        "--tw-prose-invert-captions": theme("colors.neutral.400 / 1"),
        "--tw-prose-invert-code":     theme("colors.secondary.400 / 1"),
        "--tw-prose-invert-pre-code": theme("colors.neutral.200 / 1"),
        "--tw-prose-invert-pre-bg":   theme("colors.neutral.700 / 1"),
        "--tw-prose-invert-th-borders": theme("colors.neutral.500 / 1"),
        "--tw-prose-invert-td-borders": theme("colors.neutral.700 / 1"),
      };

      // —— DARK MODE
      const invertCss = {
        a: {
          textDecorationColor: theme('colors.neutral.500 / 1'),
          '&:hover': { color: theme('colors.primary.300 / 1') },
        },
        mark: {
          backgroundColor: theme('colors.primary.400 / 1'),
          color: theme('colors.black / 1'),
        },
      };

      return {
        DEFAULT: { css: { ...baseCss, ...largeCss , a: { ...baseLinkStyles } } },
        xs:      { css: { ...baseCss, ...smallCss , a: { ...baseLinkStyles } } },
        sm:      { css: { ...baseCss, ...smallCss , a: { ...baseLinkStyles } } },
        md:      { css: { ...baseCss, ...largeCss , a: { ...baseLinkStyles } } },
        lg:      { css: { ...baseCss, ...largeCss , a: { ...baseLinkStyles } } },
        xl:      { css: { ...baseCss, ...largeCss , a: { ...baseLinkStyles } } },
        '2xl':   { css: { ...baseCss, ...largeCss , a: { ...baseLinkStyles } } },
        
        prose: {
          css: {
            a: proseLinkStyles,
          },
        },
        invert: { css: invertCss },
      };
    },
  },  
}

/*✅ Why This Works

This works because:

✅ Each size variant applies baseLinkStyles to all <a> tags.

✅ The prose variant applies proseLinkStyles only inside .prose a.

✅ Tailwind’s typography plugin automatically scopes a: to .prose a inside the prose variant.

Function-based theme keys like typography: ({ theme }) => ({}) must be at the top level of theme, not inside extend.

Tailwind merges them properly when placed directly under theme.*/