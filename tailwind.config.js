/** @type {import('tailwindcss').Config} */
const formKitTailwind = require('@formkit/themes/tailwindcss');
module.exports = {
	content: [
		'./assets/**/*.{vue,js,css}',
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./tailwind-theme.js',
	],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['[data-theme=light]'],
					primary: '#6BA612',
					secondary: '#ED3237',
				},
			},
		],
	},
	theme: {
		container: {
			// you can configure the container to be centered
			center: true,

			// or have default horizontal padding
			padding: '1rem',
		},
		colors: {
			primary: '#6BA612',
			secondary: '#ED3237',
			white: '#ffffff',
			dark: '#000000',
			gray: '#fafafa',
			grey: '#f6f8fd',
			'light-gray': '#282828',
			'dark-gray': '#f2f3f7',
		},

		fontFamily: {
			sans: ['DM Sans'],
			fleur: ['Fleur De Leah'],
		},
	},
	plugins: [
		// require('@tailwindcss/forms'),
		require('daisyui'),
		formKitTailwind
	],
};
