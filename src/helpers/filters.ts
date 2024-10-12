const FILTERS = ['sizzle', 'quartz', 'incognito', 'fes', 'linen', 'hokusai']

export const getRandomFilter = () => {
	const randomIndex = Math.floor(Math.random() * FILTERS.length)
	return FILTERS[randomIndex]
}
