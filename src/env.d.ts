/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly GITHUB_TOKEN: string
	readonly GROQ_API_KEY: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
