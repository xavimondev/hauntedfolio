import { FILTERS } from '@/constants'
import { getRandomElement } from '@/helpers/get-random-element'
import { getCldImageUrl } from 'astro-cloudinary/helpers'

export const generateCreepyAvatar = ({
	publicId,
	bgPrompt,
	maskPrompt
}: { publicId: string; bgPrompt: string; maskPrompt: string }) => {
	const randomFilter = getRandomElement({ list: FILTERS })

	const url = getCldImageUrl({
		src: publicId,
		replaceBackground: bgPrompt,
		width: 350,
		height: 350,
		crop: 'fill',
		art: randomFilter,
		replace: {
			from: 'face',
			to: maskPrompt
		}
	})

	return url
}
