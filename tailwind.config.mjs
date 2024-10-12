import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ['Creepster', ...defaultTheme.fontFamily.sans],
				subtitle: ['Crimson Text', ...defaultTheme.fontFamily.sans],
				body: ['Roboto Mono Variable', ...defaultTheme.fontFamily.sans]
			},
			keyframes: {
				dotAppear: {
					'0%': { opacity: 0 },
					'33%, 100%': { opacity: 1 }
				}
			}
		}
	},
	plugins: []
}
