// https://v3.tailwindcss.com/docs/configuration   using Tailwind as a PostCSS plugin
let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './tailwind.config.js';

module.exports = {
	plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {config: tailwindConfig},
    autoprefixer: {},
  }
};
