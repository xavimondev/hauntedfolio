import type { SpookyData } from '@/types'
import { Redis } from '@upstash/redis'

const redis = new Redis({
	url: import.meta.env.UPSTASH_REDIS_REST_URL,
	token: import.meta.env.UPSTASH_REDIS_REST_TOKEN
})

export const getHauntedFolio = async ({
	userId
}: { userId: string }): Promise<SpookyData | undefined> => {
	const data = (await redis.hgetall(`user:${userId}`)) as unknown
	return data as SpookyData | undefined
}

export const saveHauntedFolio = async ({ data, isNew }: { data: unknown; isNew: boolean }) => {
	// @ts-ignore
	await redis.hset(`user:${data.login}`, data)

	if (isNew) {
		// @ts-ignore
		await redis.expire(`user:${data.login}`, 60 * 60 * 24 * 30) // 30 days
	}
}
