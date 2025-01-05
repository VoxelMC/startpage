import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				mob: { max: '1024px' }, // Mobile
				gtmob: { min: '1025px' }, // Greater than Mobile (for exclusion)
			},
			colors: {
				// lightModeBg: '#E6E6E6', // Default
				lightModeBg: '#FAF5FF', // Lavender Whip
				// lightModeBg: '#FEF5EA', // Creame
				darkModeBg: '#1A1A1A',
				accentColor: '#A682FF',
				accentColorLight: '#daccff',
				lightModeText: 'hsl(0deg, 0%, 26%)',
				darkModeText: 'white',
				darkCodeBg: '#333333',
				lightCodeBg: '#CCCCCC',
			},
			fontFamily: {
				rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
				mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
				// ptmono: ['"PT Mono"', ...defaultTheme.fontFamily.mono],
			},
		}
	},
	plugins: [],
}
