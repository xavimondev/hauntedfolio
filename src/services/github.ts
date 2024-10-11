import { getTopLanguages, getTopRepositories, getUserData } from '@/helpers/github'
import { REPOSITORIES_QUERY, TOP_LANGUAGES_QUERY } from '@/queries'
import type { GitRepositoryLanguage, UserData, UserResponse } from '@/types'

const BASE_URL = 'https://api.github.com'

export const fetchUserData = async ({
	username
}: { username: string }): Promise<UserData | null> => {
	const response = await fetch(`${BASE_URL}/users/${username}`, {
		method: 'GET',
		headers: {
			Accept: 'application/vnd.github.v3+json',
			Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`
		}
	})
	const result = await response.json()

	if (result.status === '404' || result.message) {
		return null
	}

	const data = result as UserResponse

	return getUserData({ user: data })
}

export const fetchUserRepos = async ({
	username,
	numberOfRepos
}: { username: string; numberOfRepos?: number }) => {
	try {
		const response = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				query: REPOSITORIES_QUERY,
				variables: {
					number_of_repos: numberOfRepos ?? 10,
					login: username
				}
			})
		})

		if (!response.ok) {
			throw new Error('An error occured during fetching repositories')
		}

		const data = await response.json()
		const { errors } = data
		if (errors) {
			console.error(errors)
			throw new Error('An error occured during fetching repositories')
		}
		const topRepositories = getTopRepositories({ repositories: data })
		return topRepositories
	} catch (error) {
		console.error(error)
	}
}

export const getLanguagesFromRepositories = async ({
	username
}: { username: string }): Promise<[string, number][] | undefined> => {
	try {
		const languagesRepositories: GitRepositoryLanguage[] = []
		let hasNextPage = true
		let endCursor = null
		while (hasNextPage) {
			const variables = { login: username, after: endCursor }
			const response = await fetch('https://api.github.com/graphql', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					query: TOP_LANGUAGES_QUERY,
					variables
				})
			})

			if (!response.ok) {
				throw new Error('An error occured during fetching repositories')
			}

			const data = await response.json()
			if (data.errors) {
				console.error(data.errors)
				throw new Error('An error occured during fetching repositories')
			}

			const repositories = data.data.user.repositories
			const repositoryNodes: GitRepositoryLanguage[] = repositories.nodes
			if (repositoryNodes.length > 0) {
				languagesRepositories.push(...repositoryNodes)
			}

			hasNextPage = repositories.pageInfo.hasNextPage
			endCursor = repositories.pageInfo.endCursor
		}

		const repositories = getTopLanguages({ repositories: languagesRepositories })
		return repositories
	} catch (error) {
		console.error(error)
	}
}
