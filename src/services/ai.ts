import {
	formatCreepySkillsPrompt,
	formatCursedCreationsPrompt,
	formatFarewellPrompt
} from '@/prompts'
import { createOpenAI } from '@ai-sdk/openai'
import { generateObject, generateText } from 'ai'
import { z } from 'zod'

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

export const generateSpookySkills = async ({
	cursedLanguages,
	cursedProjects
}: {
	cursedLanguages: string
	cursedProjects: string
}) => {
	const { object } = await generateObject({
		model: groq('llama-3.1-8b-instant'),
		schema: z.object({
			skills: z.array(z.string())
		}),
		prompt: formatCreepySkillsPrompt({
			cursedLanguages,
			cursedProjects
		})
	})

	return object.skills
}

export const generateCursedCreations = async ({ topProjects }: { topProjects: string }) => {
	const { object } = await generateObject({
		model: groq('llama-3.1-8b-instant'),
		schema: z.object({
			cursedCreations: z.array(
				z.object({
					id: z.string(),
					description: z.string()
				})
			)
		}),
		prompt: formatCursedCreationsPrompt({
			topProjects
		})
	})

	return object.cursedCreations
}
