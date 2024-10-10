export interface UserResponse {
	login: string
	id: number
	node_id: string
	avatar_url: string
	gravatar_id: string
	url: string
	html_url: string
	followers_url: string
	following_url: string
	gists_url: string
	starred_url: string
	subscriptions_url: string
	organizations_url: string
	repos_url: string
	events_url: string
	received_events_url: string
	type: string
	site_admin: boolean
	name: string
	company: string | null
	blog: string
	location: string
	email: string | null
	hireable: null
	bio: string
	twitter_username: string
	public_repos: number
	public_gists: number
	followers: number
	following: number
	created_at: Date
	updated_at: Date
	private_gists: number
	total_private_repos: number
	owned_private_repos: number
	disk_usage: number
	collaborators: number
	two_factor_authentication: boolean
	plan: Plan
}

interface Plan {
	name: string
	space: number
	collaborators: number
	private_repos: number
}

export interface UserData {
	login: string
	name: string
	avatarUrl: string
	bio: string
	location: string
	company: string | null
	githubUrl: string
	twitter: string | null
}

export interface GitRepositoryResponse {
	data: {
		viewer: Viewer
	}
	errors?: unknown
}

interface Viewer {
	repositories: Repositories
}

interface Repositories {
	totalCount: number
	nodes: NodeRepository[]
}

export interface NodeRepository {
	name: string
	stargazerCount: number
	description: string
	createdAt: Date
	forkCount: number
	issues: Issue
	pullRequests: PullRequest
	primaryLanguage: PrimaryLanguage
}

interface Issue {
	totalCount: number
}

interface PullRequest {
	totalCount: number
}

interface PrimaryLanguage {
	name: string
	color: string
}

interface PrimaryLanguage {
	name: string
	color: string
}

export interface TopRepositoryData {
	name: string
	stars: number
	pullRequests: number
	forks: number
	primaryLanguage: PrimaryLanguage
}

export interface GitRepositoryLanguage {
	name: string
	languages: ProgrammingLanguage
}

export interface ProgrammingLanguage {
	edges: EdgeLanguage[]
}

export interface EdgeLanguage {
	size: number
	node: NodeLanguage
}

export interface NodeLanguage {
	name: string
}
