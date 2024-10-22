import { uploadImage } from '@/services/image'
import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
	if (request.headers.get('Content-Type') === 'application/json') {
		const { avatarUrl, username, publicId } = await request.json()
		const result = await uploadImage({ githubAvatarUrl: avatarUrl, username, publicId })
		return new Response(
			JSON.stringify({
				publicId: result?.data
			})
		)
	}

	return new Response(null, { status: 400 })
}
