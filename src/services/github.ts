import { getUserData } from '../helpers/github'
import type { UserData, UserResponse } from '../types'

const BASE_URL = 'https://api.github.com'

export const fetchUserData = async ({ username }: { username: string }): Promise<UserData> => {
	const response = await fetch(`${BASE_URL}/users/${username}`, {
		method: 'GET',
		headers: {
			Accept: 'application/vnd.github.v3+json',
			Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`
		}
	})
	const data = (await response.json()) as UserResponse

	return getUserData({ user: data })
}
