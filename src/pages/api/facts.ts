import type { APIRoute } from 'astro'
import { z } from 'zod'
import { createOpenAI } from '@ai-sdk/openai'
import { generateObject } from 'ai'
import { formatSpookyFactPrompt } from '@/prompts'

const groq = createOpenAI({
	baseURL: 'https://api.groq.com/openai/v1',
	apiKey: import.meta.env.GROQ_API_KEY
})

const CREEPY_SCHEMA = z.object({
	fact: z.object({ content: z.string(), bgPrompt: z.string(), mask: z.string() })
})

export const POST: APIRoute = async ({ request }) => {
	if (request.headers.get('Content-Type') === 'application/json') {
		const body = await request.json()
		const summary = body.summary
		const { object } = await generateObject({
			model: groq('llama-3.1-70b-versatile'),
			schema: CREEPY_SCHEMA,
			prompt: formatSpookyFactPrompt({
				summary
			})
		})

		const fact = object.fact

		return new Response(
			JSON.stringify({
				...fact
			})
		)
	}
	return new Response(null, { status: 400 })
}
