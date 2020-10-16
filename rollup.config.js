import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    strict: false,
    banner: '#! /usr/bin/env node\n',
  },
  plugins: [
    resolve(),
    json(),
    commonjs({ include: 'node_modules/**' }),
    terser(),
    visualizer(),
  ],
  external: [
    'child_process',
    'fs',
    'path',
    'os',
    'https',
    'readline',
    'zlib',
    'events',
    'stream',
    'util',
    'buffer',
  ],
};
