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
  2. A spooky bio, maximum 20 words. Avoid repeating words from the given bio. Use location.
  3. Eight spooky facts, each maximum 50 words, using the given information. Start each fact with an emoji and end with one too. 
  Most should be terrifying, and a few can be humorous in a Halloween theme. At least one word in each fact should be in uppercase.
  
  Make sure to be creative and avoid repetition in the facts.`
}
