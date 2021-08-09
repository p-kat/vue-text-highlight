import base from './config.base';

const config = Object.assign({}, base, {
  output: {
    file: 'dist/vue-text-highlight-international.umd.js',
    format: 'umd',
    name: 'vue-text-highlight-international',
  },
});

export default config;
