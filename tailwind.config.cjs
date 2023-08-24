import { join } from 'path';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			height: {
				screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh']
			}
		}
	},
	plugins: [forms, typography, ...skeleton()]
};
