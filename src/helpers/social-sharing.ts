import { APP_DOMAIN } from '@/constants'

const DOMAIN_OG = `${APP_DOMAIN}/portfolio`

export const handleShareX = async ({ username }: { username: string }) => {
	const intent = 'https://twitter.com/intent/tweet'
	const text = `🎃 👻 Dive into my haunted portfolio! 
	
🦇 Check out my projects that are more spine-chilling than ever this Halloween! 🕸️ 
Don't miss out—explore if you dare...🔗 ⬇️

${DOMAIN_OG}/${username}`

	window.open(`${intent}?text=${encodeURIComponent(text)}`)
}

export const handleShareFacebook = async ({ username }: { username: string }) => {
	const myProfile = `${DOMAIN_OG}/${username}`
	const intent = 'https://www.facebook.com/sharer/sharer.php'
	const text = `👻 🎃 Come take a look at my eerie portfolio this Halloween!

🕸️ I've crafted some spook-tacular projects just for you. 👀
Click the link, and dare to explore! 🔗 ⬇️

${DOMAIN_OG}/${username}`

	window.open(`${intent}?u=${encodeURIComponent(myProfile)}&quote=${encodeURIComponent(text)}`)
}

export const handleShareLinkedin = async ({ username }: { username: string }) => {
	const myProfile = `${DOMAIN_OG}/${username}`
	const intent = 'https://www.linkedin.com/sharing/share-offsite/'
	const text = `🧌 Step into my haunted portfolio and discover the projects lurking in the shadows!

Ready to see how I bring creativity and code to life? 👻
Explore if you're brave enough! 🔗 ⬇️`

	window.open(`${intent}?url=${encodeURIComponent(myProfile)}&text=${encodeURIComponent(text)}`)
}
