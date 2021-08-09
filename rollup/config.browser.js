import { minify } from 'uglify-es';
import { uglify } from 'rollup-plugin-uglify';
import base from './config.base';

const config = Object.assign({}, base, {
  output: {
    file: 'dist/vue-text-highlight-international.min.js',
    format: 'iife',
    exports: 'named',
    name: 'VueTextHighlightInternational',
  },
});

config.plugins.push(uglify({}, minify));

export default config;
