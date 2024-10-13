import type {
	EdgeLanguage,
	GitRepositoryLanguage,
	GitRepositoryResponse,
	NodeRepository,
	TopRepositoryData,
	UserData,
	UserResponse
} from '@/types'

export const getUserData = ({ user }: { user: UserResponse }): UserData => {
	const { name, avatar_url, bio, location, login, company, html_url, twitter_username, id } = user
	return {
		id,
		login: login,
		name: name,
		avatarUrl: avatar_url,
		bio: bio,
		location: location,
		company,
		twitter: twitter_username,
		githubUrl: html_url
	}
}

export const getTopRepositories = ({
	repositories
}: {
	repositories: GitRepositoryResponse
}): TopRepositoryData[] => {
	const repos = repositories.data.user.repositories.nodes
	const topRepositories = repos.map((repo: NodeRepository) => ({
		name: repo.name,
		stars: repo.stargazerCount,
		pullRequests: repo.pullRequests.totalCount,
		forks: repo.forkCount,
		primaryLanguage: repo.primaryLanguage
	}))
	return topRepositories
}

export const getTopLanguages = ({ repositories }: { repositories: GitRepositoryLanguage[] }) => {
	const data = repositories
		.flatMap((rep: GitRepositoryLanguage) => rep.languages.edges)
		.reduce((acc: Array<{ name: string; size: number; color: string }>, lang: EdgeLanguage) => {
			const { name, color } = lang.node
			const elem = acc.find((el) => el.name === name)
			if (elem) {
				elem.size += lang.size
			} else {
				acc.push({ name, size: lang.size, color })
			}

			return acc
		}, [])
	// Retrieve the first three languages from the object data
	const topLanguages = data.sort((a, b) => b.size - a.size).slice(0, 3)

	return topLanguages
}
