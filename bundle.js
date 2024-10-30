const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./test-apollon.js'],
  bundle: true,
  outfile: 'dist/bundle.js',
  format: 'iife',
  globalName: 'ApollonTest',
  loader: { '.css': 'text' },
}).catch(() => process.exit(1));
``