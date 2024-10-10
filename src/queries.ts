export const REPOSITORIES_QUERY = `
query ($number_of_repos: Int!) {
  viewer {
    repositories(
      first: $number_of_repos
      ownerAffiliations: OWNER
      isFork: false
      orderBy: {field: STARGAZERS, direction: DESC}
    ) {
      totalCount
      nodes {
        name
        stargazerCount
        description
        createdAt
        forkCount
        primaryLanguage {
          name,
          color
        }
        issues(states:CLOSED) {
          totalCount,
        }
        pullRequests {
          totalCount
        }
      }
    }
  }
}`

export const TOP_LANGUAGES_QUERY = `
query ($after: String) {
  viewer {
    repositories(
      first: 100
      ownerAffiliations: OWNER
      isFork: false
      orderBy: {field: STARGAZERS, direction: DESC}
      after: $after
    ) {
      nodes {
        name
        languages(first: 15, orderBy: {field: SIZE,direction: DESC}) {
          edges {
            size
            node {
              name
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}`
