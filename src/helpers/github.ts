import type { UserData, UserResponse } from '../types'

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
