/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly GITHUB_TOKEN: string
	readonly GROQ_API_KEY: string
	readonly PUBLIC_CLOUDINARY_CLOUD_NAME: string
	readonly PUBLIC_CLOUDINARY_API_KEY: string
	readonly CLOUDINARY_API_SECRET: string
	readonly UPSTASH_REDIS_REST_URL: string
	readonly UPSTASH_REDIS_REST_TOKEN: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
