import { uploadImage } from '@/services/image'
import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
	if (request.headers.get('Content-Type') === 'application/json') {
		const { avatarUrl, username } = await request.json()
		const result = await uploadImage({ githubAvatarUrl: avatarUrl, username })
		return new Response(
			JSON.stringify({
				publicId: result?.data
			})
		)
	}

	return new Response(null, { status: 400 })
}
