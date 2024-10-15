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
			animation: {
				float: 'float 2s ease-in-out infinite',
				flicker: 'flicker 3s infinite'
			},
			keyframes: {
				dotAppear: {
					'0%': { opacity: 0 },
					'33%, 100%': { opacity: 1 }
				},
				float: {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-2px)'
					}
				},
				flicker: {
					'0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
						opacity: 1
					},
					'20%, 24%, 55%': {
						opacity: 0
					}
				}
			}
		}
	},
	plugins: []
}
