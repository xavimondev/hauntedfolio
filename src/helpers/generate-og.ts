import { getCldOgImageUrl } from 'astro-cloudinary/helpers'
import { getRandomElement } from '@/helpers/getRandomElement'

const sticker = 'stickers/pepo'
const randomOg = getRandomElement({ list: ['og/land-moon', 'og/haunted-house'] })

export const generateOgImageUrl = ({
	spookyAlias,
	spookyBio,
	creepyAvatarPublicId
}: { spookyAlias: string; spookyBio: string; creepyAvatarPublicId: string }) => {
	return getCldOgImageUrl({
		src: randomOg,
		overlays: [
			{
				text: {
					fontFamily: 'Creepster',
					fontSize: 87,
					fontWeight: 'bold',
					text: spookyAlias ?? 'PhantomCoder13',
					border: '10px_solid_black',
					letterSpacing: 8,
					stroke: 'stroke',
					color: '#F0E68C'
				},
				position: {
					x: 390,
					y: 160,
					gravity: 'north_west'
				}
			},
			{
				text: {
					fontFamily: 'Merriweather',
					fontSize: 29,
					fontWeight: 'bold',
					text: spookyBio ? spookyBio.replaceAll(',', ' ') : 'A spooky portfolio',
					border: '10px_solid_black',
					stroke: 'stroke',
					color: '#F0E68C'
				},
				position: {
					x: 390,
					y: 275,
					gravity: 'north_west'
				},
				width: 790,
				crop: 'fit'
			},
			{
				publicId: creepyAvatarPublicId,
				width: 310,
				height: 310,
				position: {
					x: 70,
					y: -10,
					gravity: 'west'
				}
			},
			{
				publicId: sticker,
				width: 100,
				height: 100,
				position: {
					x: 70,
					y: 50,
					gravity: 'south_east'
				}
			}
		]
	})
}
