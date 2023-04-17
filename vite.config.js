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
							{
								legacy: true // 데코레이터 문법을 지원하지 않는 브라우저/환경에서도 문법을 지원하기 위해 사용되는 옵션
							}
						],
						'@babel/plugin-proposal-class-properties', // Class 내 프로퍼티 사용을 위해 필요
					]
				}
			}
		)
	]
});
