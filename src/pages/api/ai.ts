import type { APIRoute } from 'astro'
import { createOpenAI } from '@ai-sdk/openai'
import { generateObject } from 'ai'
import { fetchUserData, fetchUserRepos, getLanguagesFromRepositories } from '@/services/github'
import { z } from 'zod'
import { formatSpookyBioPrompt } from '@/prompts'
import { uploadImage } from '@/services/image'

const groq = createOpenAI({
	baseURL: 'https://api.groq.com/openai/v1',
	apiKey: import.meta.env.GROQ_API_KEY
})

const CREEPY_SCHEMA = z.object({
	spookyData: z.object({
		alias: z.string(),
		bio: z.string(),
		facts: z.array(z.string())
	})
})

export const GET: APIRoute = async ({ params }) => {
	const username = params.user
	if (!username) {
		return new Response(
			JSON.stringify({
				data: null
			}),
			{ status: 400 }
		)
	}
	const userData = await fetchUserData({ username })

	if (!userData) {
		return new Response(
			JSON.stringify({
				data: null
			}),
			{ status: 400 }
		)
	}
	const { name, bio, location, login, githubUrl, avatarUrl, id } = userData

	const publicId = await uploadImage({ imageUrl: avatarUrl, userId: String(id) })

	if (!publicId || publicId.error) {
		return new Response(
			JSON.stringify({
				data: publicId?.error ?? null
			}),
			{ status: 400 }
		)
	}
	const languageRepos = await getLanguagesFromRepositories({ username })
	const userRepos = await fetchUserRepos({ username, numberOfRepos: 3 })

	if (!userData || !languageRepos || !userRepos) {
		return new Response(
			JSON.stringify({
				data: null
			}),
			{ status: 400 }
		)
	}

	const topLanguages = languageRepos.map((language) => language.name).join(', ')

	const featuredProjects = userRepos.reduce((acc, repo) => {
		const { name, stars } = repo
		return `- ${name} with stars: ${stars}\n${acc}`
	}, '')

	const { object } = await generateObject({
		model: groq('llama-3.1-70b-versatile'),
		schema: CREEPY_SCHEMA,
		prompt: formatSpookyBioPrompt({
			bio,
			username: login,
			name,
			location,
			topLanguages,
			featuredProjects
		})
	})

	return new Response(
		JSON.stringify({
			data: {
				name,
				username,
				githubUrl,
				...object.spookyData,
				location,
				avatarUrl,
				topLanguages,
				featuredProjects,
				publicId: publicId.data,
				languageRepos
			}
		})
	)
}
