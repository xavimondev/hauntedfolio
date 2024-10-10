/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly GITHUB_TOKEN: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
