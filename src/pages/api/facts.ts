import type { APIRoute } from 'astro'
import { z } from 'zod'
import { createOpenAI } from '@ai-sdk/openai'
import { generateObject } from 'ai'
import { formatSpookyFactPrompt } from '@/prompts'
import { getHauntedFolio } from '@/services/db'

const openai = createOpenAI({
	compatibility: 'strict',
	apiKey: import.meta.env.OPENAI_API_KEY
})

const CREEPY_SCHEMA = z.object({
	fact: z.string()
})

export const POST: APIRoute = async ({ request }) => {
	if (request.headers.get('Content-Type') === 'application/json') {
		const body = await request.json()
		const username = body.username

		const data = await getHauntedFolio({
			userId: username
		})
		const { summary } = data ?? {}

		const { object } = await generateObject({
			model: openai('gpt-4o-mini'),
			schema: CREEPY_SCHEMA,
			temperature: 0.6,
			prompt: formatSpookyFactPrompt({
				summary: summary ?? 'A developer from deep in the internet'
			})
		})

		const fact = object.fact

		return new Response(
			JSON.stringify({
				fact
			})
		)
	}
	return new Response(null, { status: 400 })
}
