/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly GITHUB_TOKEN: string
	readonly GROQ_API_KEY: string
	readonly PUBLIC_CLOUDINARY_CLOUD_NAME: string
	readonly PUBLIC_CLOUDINARY_API_KEY: string
	readonly CLOUDINARY_API_SECRET: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
