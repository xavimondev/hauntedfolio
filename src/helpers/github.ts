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
	const { name, avatar_url, bio, location, login, company, html_url, twitter_username } = user
	return {
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
	const data: Record<string, number> = repositories
		.flatMap((rep: GitRepositoryLanguage) => rep.languages.edges)
		.reduce((acc: Record<string, number>, lang: EdgeLanguage) => {
			const { name } = lang.node
			acc[name] = (acc[name] ?? 0) + lang.size
			return acc
		}, {})
	// Retrieve the first three languages from the object data
	const topLanguages = Object.entries(data)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 3)

	return topLanguages
}
