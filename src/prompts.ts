export const formatSpookyBioPrompt = ({
	bio,
	username,
	name,
	topLanguages,
	featuredProjects,
	location
}: {
	bio: string | null
	username: string
	name: string
	topLanguages: string
	featuredProjects: string
	location: string | null
}) => {
	return `Given the following information:

  Username: ${username}
  Name: ${name}
  ${bio ? `Bio: ${bio}` : ''}
  ${location ? `Location: ${location}` : ''}
  Top Languages: ${topLanguages}
  Featured Projects: ${featuredProjects}

  Generate:

  1. A creepy alias, maximum 3 words.
  2. A spooky bio, maximum 20 words. Avoid repeating words from the given bio. Use location.`
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
	
	Project name: ${repositoryName}
	Number of stars: ${numStarts}
	Programming language: ${programmingLanguage}
	`
}
