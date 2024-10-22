import { getRandomFilter } from '@/helpers/filters'
import { getCldImageUrl } from 'astro-cloudinary/helpers'

export const generateCreepyAvatar = ({
	publicId,
	bgPrompt,
	maskPrompt
}: { publicId: string; bgPrompt: string; maskPrompt: string }) => {
	const filter = getRandomFilter()

	const url = getCldImageUrl({
		src: publicId,
		replaceBackground: bgPrompt,
		width: 350,
		height: 350,
		crop: 'fill',
		art: filter,
		replace: {
			from: 'face',
			to: maskPrompt
		}
	})

	return url
}
