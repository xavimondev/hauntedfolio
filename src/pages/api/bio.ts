import type { APIRoute } from 'astro'
import { z } from 'zod'
import { createOpenAI } from '@ai-sdk/openai'
import { generateObject } from 'ai'
import { formatSpookyBioPrompt } from '@/prompts'

const openai = createOpenAI({
	compatibility: 'strict',
	apiKey: import.meta.env.OPENAI_API_KEY
})

const CREEPY_SCHEMA = z.object({
	spookyData: z.object({
		alias: z.string(),
		intro: z.string(),
		bio: z.string()
	})
})

export const POST: APIRoute = async ({ request }) => {
	if (request.headers.get('Content-Type') === 'application/json') {
		const body = await request.json()
		const summary = body.summary

		const { object } = await generateObject({
			model: openai('gpt-4o-mini'),
			schema: CREEPY_SCHEMA,
			prompt: formatSpookyBioPrompt({
				summary
			})
		})

		const spookyData = object.spookyData

		return new Response(
			JSON.stringify({
				...spookyData
			})
		)
	}
	return new Response(null, { status: 400 })
}
