import {
	formatCreepySkillsPrompt,
	formatCursedCreationsPrompt,
	formatFarewellPrompt
} from '@/prompts'
import { createOpenAI } from '@ai-sdk/openai'
import { generateObject, generateText } from 'ai'
import { z } from 'zod'

const openai = createOpenAI({
	compatibility: 'strict',
	apiKey: import.meta.env.OPENAI_API_KEY
})

export const generateFarewellMessage = async ({
	repositoryName,
	numStarts,
	programmingLanguage
}: { repositoryName: string; numStarts: number; programmingLanguage: string }) => {
	const { text } = await generateText({
		model: openai('gpt-4o-mini'),
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
		model: openai('gpt-4o-mini'),
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
		model: openai('gpt-4o-mini'),
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
