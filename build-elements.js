const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/angular-custom-element/runtime.js',
    './dist/angular-custom-element/polyfills.js',
    // './dist/angular-custom-element/scripts.js',
    './dist/angular-custom-element/main.js',
  ]
  await fs.ensureDir('angular-custom-element')
  await concat(files, 'angular-custom-element/elements.js');
  await fs.copyFile('./dist/angular-custom-element/styles.css', 'angular-custom-element/styles.css')
  // await fs.copy('./dist/angular-custom-element/assets/', 'angular-custom-element/assets/' )

})()