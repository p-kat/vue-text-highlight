import base from './config.base';

const config = Object.assign({}, base, {
  output: {
    file: 'dist/vue-text-highlight-international.esm.js',
    format: 'es',
  },
});

export default config;
