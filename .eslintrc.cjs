module.exports = {
	root: true,
	parser: '@typescript.svg-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript.svg-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript.svg-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
