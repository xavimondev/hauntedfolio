export const getRandomElement = <T>({ list }: { list: T[] }): T => {
	const randomIndex = Math.floor(Math.random() * list.length)
	return list[randomIndex]
}
