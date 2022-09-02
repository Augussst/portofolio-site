/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			accent: '#2d8cea',
			containerbg: '#232323',
			innercontainerbg: '#1D1D1D',
			innercontaineraccent: '#2A2A2A',
			rootbg: '#161616',
			white: '#ededed',
			gray: '#b1b1b1',
			green: '#22d699',
			darkgreen: '#176a4c',
			purple: '#a690e2',
			orange: '#eea53c'
		},
		extend: {
			scrollMargin: {
				main: '4.35rem'
			}
		}
	},
	plugins: []
};
