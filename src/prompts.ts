export const formatSpookyBioPrompt = ({ summary }: { summary: string }) => {
	return `Given the following summary:

  ${summary}

  Generate:

  1. A creepy alias, maximum 3 words. To generate the alias, avoid mentioning the words "code", "phantom" and use the summary to generate the alias.
  2. A spooky intro(introduction) using 55 words.
	3. A creepy bio(biography) using 35 words. Be as creepy as possible.`
}

export const formatSpookyFactPrompt = ({
	summary
}: {
	summary: string
}) => {
	return `Given the following summary from a haunted individual:
${summary}

Generate:

A spooky fact with a maximum of 40 words. Start each fact with an emoji and end with one too.
It should be terrifying or humorous in a Halloween theme. At least one word should be in UPPERCASE.
Once you generate the spooky fact, create the following prompts based on the fact:

1. Background prompt: Use three words to describe an eerie scene related to the fact.
2. Mask: Use three words to describe an object that should replace the face of the user, keeping in mind the Halloween theme.`
}

export const formatFarewellPrompt = ({
	repositoryName,
	numStarts,
	programmingLanguage
}: {
	repositoryName: string
	numStarts: number
	programmingLanguage: string
}) => {
	return `Generate a sarcastic farewell message for a dead project, 
	including the project's name, the programming language it was built with, and its number of stars. 
	The message should be no longer than 13 words, with a humorous and ironic tone, as if the project 
	was once promising but failed to live up to expectations.
	Don't start the message the message with the word "farewell" or "goodbye".
	Don't mention the project's name in the message.
	
	Project name: ${repositoryName}
	Number of stars: ${numStarts}
	Programming language: ${programmingLanguage}
	`
}

export const formatCreepySkillsPrompt = ({
	cursedLanguages,
	cursedProjects
}: {
	cursedLanguages: string
	cursedProjects: string
}) => {
	return `Generate a list of eight creepy skills for a GitHub user based on their top projects and 
the programming languages they work with. The skills should have a dark, spooky vibe with some sarcastic undertones. 
The skills should be a mix of eerie-sounding abilities that subtly reference common developer struggles and exaggerated powers tied to their expertise. 
Here's the user's information:

1. Top Projects: 
${cursedProjects}

2. Programming Languages: ${cursedLanguages} 

The skills should make the user sound ominously powerful but with a humorous edge.
Every skill should have 5 words as maximum`
}

export const formatCursedCreationsPrompt = ({
	topProjects
}: {
	topProjects: string
}) => {
	return `Given a list of the top projects, generate a spooky description for each project. 
Don't include neither the number of stars and language in the summary. 
Ensure the description is no longer than 8 words.

Here is the list of projects:

${topProjects}

The summaries should evoke a haunting or mysterious feeling, 
hinting that these projects have dark powers or eerie traits. Keep them short and chilling.

Return the project name as the "id" and the spooky description as the "summary." `
}
