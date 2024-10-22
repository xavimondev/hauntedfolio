import {
	DEFAULT_SPOOKY_ALIAS,
	DEFAULT_SPOOKY_BIO,
	DEFAULT_SPOOKY_INTRO,
	INTERVIEW_ANSWERS,
	USER_PATH_CLD
} from '@/constants'
import { generateVideo } from '@/services/image'
import type { APIRoute } from 'astro'
import JSZip from 'jszip'
import templateManifest from '@/data/manifest.json'
import { getHauntedFolio, saveHauntedFolio } from '@/services/db'
import { getRandomElement } from '@/helpers/getRandomElement'
import { generateCursedCreations, generateSpookySkills } from '@/services/ai'
import {
	getAvatarTrack,
	getButtonsTrack,
	getCrypticLanguagesTrack,
	getCursedCreationsTrack,
	getEndTrack,
	getFinalQuestionTrack,
	getFirstEmptyScreenTrack,
	getFithSceneVideo,
	getFourthEmptyScreenTrack,
	getInitialScreenTrack,
	getInitialTrack,
	getSecondEmptyScreenTrack,
	getSecondSceneVideo,
	getSecondScreenTrack,
	getSixthSceneVideo,
	getThirdEmptyScreenTrack,
	getThirdSceneVideo
} from '@/data/tracks'

export const POST: APIRoute = async ({ request }) => {
	if (request.headers.get('Content-Type') === 'application/json') {
		const body = await request.json()
		const { username } = body
		try {
			const hauntedFolio = await getHauntedFolio({
				userId: username
			})

			if (!hauntedFolio) {
				return new Response(
					JSON.stringify({
						error: 'Could not find spooky data'
					}),
					{ status: 404 }
				)
			}

			const {
				spookyAlias,
				spookyIntro,
				spookyBio,
				topLanguages,
				topRepositories,
				name,
				location,
				creepyAvatarPublicId
			} = hauntedFolio

			const randomInterviewAnswer = getRandomElement({
				list: INTERVIEW_ANSWERS
			})

			const cursedProjects =
				topRepositories?.reduce((acc, repo) => {
					const { name, primaryLanguage, stars } = repo
					return `- Project: ${name} built with ${primaryLanguage} and has ${stars} stars\n${acc}`
				}, '') ?? ''

			const cursedLanguages = topLanguages.map((lang) => lang.name).join(', ')

			const skills = await generateSpookySkills({
				cursedLanguages,
				cursedProjects
			})

			const cursedCreations = await generateCursedCreations({
				topProjects: cursedProjects
			})

			// Formatting manifest
			const manifest = {
				...templateManifest
			}

			const cursedCreationsClips = cursedCreations.map(({ id, description }) => {
				const repository = topRepositories.find((tr) => tr.name === id)
				const { stars, forks, name } = repository ?? {}
				return {
					description: `${name} ${description.toLowerCase()}`,
					details: `With ${stars} stars and ${forks} forks`
				}
			})

			const tracks = [
				...getInitialTrack(),
				getAvatarTrack({
					publicId: creepyAvatarPublicId ?? 'stickers/witch-pumpkin'
				}),
				...getInitialScreenTrack({
					name,
					spookyAlias: spookyAlias ?? DEFAULT_SPOOKY_ALIAS,
					location,
					spookyBio: spookyBio ?? DEFAULT_SPOOKY_BIO
				}),
				...getButtonsTrack(),
				getFirstEmptyScreenTrack(),
				...getSecondScreenTrack({
					spookyIntro: spookyIntro ?? DEFAULT_SPOOKY_INTRO,
					skills
				}),
				getSecondSceneVideo(),
				getSecondEmptyScreenTrack(),
				...getCrypticLanguagesTrack({
					crypticLanguages: topLanguages.map((lang) => lang.name)
				}),
				...getThirdSceneVideo(),
				getThirdEmptyScreenTrack(),
				...getCursedCreationsTrack({
					cursedCreationsClips
				}),
				getFithSceneVideo(),
				getFourthEmptyScreenTrack(),
				...getFinalQuestionTrack({
					answer: randomInterviewAnswer
				}),
				getSixthSceneVideo(),
				...getEndTrack()
			]

			// @ts-ignore
			manifest.tracks.push(...tracks)

			const zip = new JSZip()
			zip.file('CltManifest.json', JSON.stringify(manifest))

			const blob = await zip.generateAsync({ type: 'blob' })
			const arrayBuffer = await blob.arrayBuffer()
			const buffer = Buffer.from(arrayBuffer)

			const results = await generateVideo({
				buffer,
				folder: `${USER_PATH_CLD}/${username}`,
				publicId: 'my-summary'
			})

			// @ts-ignore
			const videoUrl = results.secure_url.replace('.clt', '.mp4')
			await saveHauntedFolio({ data: { login: username, summaryVideoUrl: videoUrl }, isNew: false })

			return new Response(
				JSON.stringify({
					results
				})
			)
		} catch (e) {
			console.error(e)
			return new Response(
				JSON.stringify({
					error: 'Could not generate video.'
				}),
				{
					status: 400
				}
			)
		}
	}
	return new Response(null, { status: 400 })
}
