import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
	cloud_name: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: import.meta.env.PUBLIC_CLOUDINARY_API_KEY,
	api_secret: import.meta.env.CLOUDINARY_API_SECRET
})

export const uploadImage = async ({ imageUrl, userId }: { imageUrl: string; userId: string }) => {
	try {
		const response = await cloudinary.uploader.upload(imageUrl, {
			// I use userId as the folder name because user sometimes change their username,
			// so in order to avoid conflicts, I use this approach
			asset_folder: userId,
			format: 'png',
			public_id: userId
		})

		const imagePublicId = response.public_id

		if (!imagePublicId || typeof imagePublicId !== 'string') {
			throw new Error('There was an error uploading your video, please try again')
		}

		return { data: imagePublicId }
	} catch (error) {
		console.error(error)
		if (error instanceof Error) {
			return {
				error: error.message
			}
		}
	}
}

export const languagesAssetsTransformation = async ({
	publicId,
	color
}: { publicId: string; color: string }) => {
	try {
		const res = await cloudinary.uploader.explicit(publicId, {
			eager: [{ width: 400, height: 400, effect: 'colorize:80', color }],
			type: 'upload'
		})
		return res.eager[0].url
	} catch (error) {
		console.error(error)
	}
}

export const generateTombstone = async ({
	publicId,
	name,
	farewellMessage,
	stars,
	forks,
	pullRequests
}: {
	publicId: string
	name: string
	farewellMessage: string
	stars: number
	forks: number
	pullRequests: number
}) => {
	try {
		const res = await cloudinary.uploader.explicit(publicId, {
			eager: [
				{
					width: 400,
					height: 500,
					crop: 'fit',
					transformation: [
						{
							overlay: 'stickers:group-skulls',
							gravity: 'north',
							width: 170,
							x: 5,
							y: 222
						},
						{
							overlay: 'stickers:skulls-corner',
							gravity: 'north_east',
							width: 140,
							y: 20
						},
						{
							overlay: 'stickers:skulls-corner',
							gravity: 'north_west',
							width: 140,
							y: 20
						},
						{
							overlay: 'stickers:pumpkins',
							width: 120,
							gravity: 'west',
							y: 122,
							x: 90
						},
						{
							width: 290,
							crop: 'fit',
							overlay: {
								font_family: 'Fredericka the Great',
								text_align: 'center',
								font_size: 35,
								font_weight: 'bold',
								text: name
							},
							gravity: 'north',
							y: 101,
							// x: 20,
							color: '#B22222'
						},
						{
							width: 300,
							crop: 'fit',
							overlay: {
								font_family: 'Black Ops One',
								text_align: 'center',
								font_size: 20,
								text: farewellMessage,
								font_weight: 'bold',
								font_style: 'italic',
								stroke: 'stroke'
							},
							gravity: 'north',
							y: 260,
							x: 10,
							color: '#FDFDE1',
							border: '3px_solid_black'
						},
						{
							overlay: {
								font_family: 'Black Ops One',
								font_size: 28,
								text: `Stars: ${stars}`,
								letter_spacing: 1,
								font_weight: 'bold',
								stroke: 'stroke'
							},
							gravity: 'north',
							y: 390,
							x: 70,
							color: '#FDFDE1',
							border: '3px_solid_black'
						},
						{
							overlay: {
								font_family: 'Black Ops One',
								text_align: 'center',
								font_size: 24,
								text: `Forks: ${forks}`,
								letter_spacing: 1,
								font_weight: 'bold',
								stroke: 'stroke'
							},
							gravity: 'south_west',
							y: 80,
							x: 100,
							color: '#FDFDE1',
							border: '3px_solid_black'
						},
						{
							overlay: {
								font_family: 'Black Ops One',
								text_align: 'center',
								font_size: 24,
								text: `PR: ${pullRequests}`,
								letter_spacing: 1,
								font_weight: 'bold',
								stroke: 'stroke'
							},
							gravity: 'south_east',
							y: 85,
							x: 80,
							color: '#FDFDE1',
							border: '3px_solid_black'
						}
					]
				}
			],
			type: 'upload',
			format: 'avif'
		})
		return res.eager[0].url
	} catch (error) {
		console.error(error)
	}
}
