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
