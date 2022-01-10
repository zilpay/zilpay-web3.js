// rollup.config.js
import { swc } from 'rollup-plugin-swc3';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import define from 'rollup-plugin-define';
import { visualizer } from 'rollup-plugin-visualizer';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'index.ts',
	output: {
		sourcemap: false,
		format: 'iife',
		name: 'inpage',
		file: 'dist/inpage.js'
	},
	plugins: [
		commonjs(),
		json(),
		resolve({
			jsnext: true,   
			main: true,
			brower: true,
			preferBuiltins: false
		}),
		production && visualizer({
			filename: 'inpage.html'
		}),
		define({
      replacements: {
				WebAssembly: 'null'
      }
    }),
    swc({
      // All options are optional
      include: /\.[jt]sx?$/, // default
      exclude: /node_modules/, // default
      tsconfig: 'tsconfig.json', // default
			minify: production,
      // And add your swc configuration here!
      // "filename" will be ignored since it is handled by rollup
      jsc: {
				"keepClassNames": true
			}
    })
	]
};
