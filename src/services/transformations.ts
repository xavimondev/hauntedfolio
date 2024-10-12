import { getRandomFilter } from '@/helpers/filters'
import { getCldImageUrl } from 'astro-cloudinary/helpers'

export const transform = ({
	publicId,
	bgPrompt,
	mask
}: { publicId: string; bgPrompt: string; mask: string }) => {
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
			to: mask
		}
	})

	return url
}
