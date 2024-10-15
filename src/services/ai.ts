import { formatFarewellPrompt } from '@/prompts'
import { createOpenAI } from '@ai-sdk/openai'
import { generateText } from 'ai'

const groq = createOpenAI({
	baseURL: 'https://api.groq.com/openai/v1',
	apiKey: import.meta.env.GROQ_API_KEY
})

export const generateFarewellMessage = async ({
	repositoryName,
	numStarts,
	programmingLanguage
}: { repositoryName: string; numStarts: number; programmingLanguage: string }) => {
	const { text } = await generateText({
		model: groq('llama-3.1-8b-instant'),
		temperature: 0.5,
		prompt: formatFarewellPrompt({
			repositoryName,
			numStarts,
			programmingLanguage
		})
	})

	return text
}
