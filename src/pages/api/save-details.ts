import { saveHauntedFolio } from '@/services/db'
import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
	if (request.headers.get('Content-Type') === 'application/json') {
		const { username, alias, bio, spookyAvatar, intro, creepyAvatarPublicId } = await request.json()
		try {
			await saveHauntedFolio({
				data: {
					login: username,
					spookyAlias: alias,
					spookyBio: bio,
					spookyIntro: intro,
					spookyAvatarUrl: spookyAvatar,
					creepyAvatarPublicId
				},
				isNew: false
			})

			return new Response(
				JSON.stringify({
					ok: true
				}),
				{ status: 200 }
			)
		} catch (error) {
			console.error(error)
			return new Response(
				JSON.stringify({
					ok: false,
					error: 'Could not save spooky data.'
				}),
				{
					status: 400
				}
			)
		}
	}
	return new Response(null, { status: 400 })
}
