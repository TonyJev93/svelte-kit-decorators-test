import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import babel from 'vite-plugin-babel'

export default defineConfig({
	plugins: [
		sveltekit(),
		babel(
			{
				babelConfig: {
					babelrc: false,
					configFile: false,
					plugins: [
						[
							'@babel/plugin-proposal-decorators', //  to enable transformation
							{decoratorsBeforeExport: true} // resolve for : The decorators plugin, when .version is '2018-09' or not specified," + " requires a 'decoratorsBeforeExport' option, whose value must be a boolean.
						],
						'@babel/plugin-proposal-class-properties', // Class 내 프로퍼티 사용을 위해 필요
					]
				}
			}
		)
	]
});
