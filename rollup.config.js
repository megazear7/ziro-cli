import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import fs from 'fs';

const packageJsonFile = fs.readFileSync('package.json');
const packageJson = JSON.parse(packageJsonFile);
const version = packageJson.version;

export default {
  input: 'src/ziro.js',
  output: {
    dir: 'dist',
    format: 'esm',
    banner: '#!/usr/bin/env node'
  },
  plugins: [
    commonjs({
        include: /node_modules/
    }),
    nodeResolve(),
    replace({ 'ZIRO_PROJECT_VERSION': version, preventAssignment: true })
  ]
};