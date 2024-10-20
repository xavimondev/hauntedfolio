import { generateVideo } from '@/services/image'
import type { APIRoute } from 'astro'
import JSZip from 'jszip'

export const POST: APIRoute = async ({ request }) => {
	if (request.headers.get('Content-Type') === 'application/json') {
		const body = await request.json()
		const { manifest } = body

		try {
			const zip = new JSZip()
			zip.file('CltManifest.json', JSON.stringify(manifest))

			const blob = await zip.generateAsync({ type: 'blob' })
			const arrayBuffer = await blob.arrayBuffer()
			const buffer = Buffer.from(arrayBuffer)

			const results = await generateVideo({
				buffer,
				folder: 'xavimondev',
				publicId: 'my-summary'
			})

			return new Response(
				JSON.stringify({
					results
				})
			)
		} catch (e) {
			console.log(e)
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
