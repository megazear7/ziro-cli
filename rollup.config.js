import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import packageJson from './package.json' assert { type: "json" };

export default {
  input: 'src/ziro.js',
  output: {
    dir: 'dist',
    format: 'esm',
    banner: '#!/usr/bin/env node'
  },
  plugins: [
    replace({ 'ZIRO_PROJECT_VERSION': packageJson.version }),
    commonjs({
        include: /node_modules/
    }),
    nodeResolve()
  ]
};