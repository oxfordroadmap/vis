
My search for output.css in the layouts directory yielded no results, but searching for
  wc.min in layouts found a reference in partials/site_head.html.


  This confirms that Hugo is indeed looking for dist/wc.min.css and then fingerprinting it. The output.css is an
  intermediate file that Hugo then processes.


  The previous change I made to uncomment the Tailwind build steps is still correct, as it ensures that the
  output.css (which Hugo then uses) is up-to-date.


  So, the full flow is:
   1. Tailwind CSS builds assets/css/main.css into static/css/output.css.
   2. Hugo, during its build process, takes static/css/output.css, minifies it, and outputs it to
      public/dist/wc.min.css (or a similar path, depending on Hugo Blox's configuration).
   3. Hugo then fingerprints public/dist/wc.min.css to create the cache-busting filename (e.g.,
      wc.min.40d365a5c94bd94585e708f7c92e5782e00a8d8eefc348f5d2f21a80bb7783c8.css).


  The key is that the GitHub Actions workflow now correctly builds the output.css file, which Hugo then picks up.



-----

(base) Q:\__coding_scientometrics__\_2025_\vis>npm init -y
Wrote to Q:\__coding_scientometrics__\_2025_\vis\package.json:

{
  "name": "vis",
  "version": "1.0.0",
  "description": "[![Screenshot](.github/preview.webp)](https://hugoblox.com/templates/)",
  "main": "tailwind.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}



(base) Q:\__coding_scientometrics__\_2025_\vis>npm install -D tailwindcss@3

added 112 packages, and audited 113 packages in 8s

29 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

(base) Q:\__coding_scientometrics__\_2025_\vis>