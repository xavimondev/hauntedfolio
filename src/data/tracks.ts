import { COMMUNICATION_LANGUAGES, CREEPY_LOCATIONS } from '@/constants'
import { getRandomElement } from '@/helpers/getRandomElement'

export const getInitialTrack = () => {
	return [
		{
			width: 1280,
			height: 720,
			clips: [
				{
					media: ['assets/intro-2', 'video'],
					type: 'video'
				}
			]
		},
		{
			startOffset: 15000,
			endOffset: 15800,
			width: 100,
			height: 120,
			x: 920,
			y: 560,
			clips: [
				{
					media: ['assets/cursed-face', 'image'],
					type: 'image',
					transformation: 'b_rgb:020307'
				}
			]
		},
		{
			startOffset: 4000,
			endOffset: 11500,
			y: 340,
			clipDefaults: {
				textAlign: 'center',
				textVerticalAlign: 'middle',
				fontSize: 65,
				fontColor: 'white',
				fontType: 'Creepster',
				textMaxWidth: 400,
				clipDuration: 4000,
				clipEffect: {
					name: 'KenBurns',
					easing: 'linear',
					zoom: 1.9,
					center: [0.5, 0.5],
					direction: 'forward'
				}
			},
			clips: [
				{
					text: 'The Final Question',
					type: 'text'
				}
			]
		},
		{
			startOffset: 16000,
			width: 1280,
			height: 720,
			clips: [
				{
					media: ['assets/man-computer-1', 'video'],
					type: 'video'
				}
			]
		},
		{
			startOffset: 22000,
			endOffset: 25000,
			width: 1280,
			height: 720,
			clips: [
				{
					media: ['assets/empty-screen', 'image'],
					type: 'image'
				}
			]
		},
		{
			startOffset: 22000,
			endOffset: 25000,
			y: 40,
			clipDefaults: {
				textAlign: 'center',
				textVerticalAlign: 'middle',
				fontSize: 57,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				textMaxWidth: 480,
				clipDuration: 4000
			},
			clips: [
				{
					text: 'SOUL SURVIVOR',
					type: 'text'
				}
			]
		}
	]
}

export const getAvatarTrack = ({ publicId }: { publicId: string }) => {
	// 'hauntedfolio/midudev/avatar'
	return {
		startOffset: 22000,
		endOffset: 25000,
		width: 240,
		height: 240,
		x: 270,
		y: 125,
		clips: [
			{
				media: [publicId, 'image'],
				type: 'image'
			}
		],
		transformation: 'c_thumb,g_face,r_max,b_rgb:0067D3'
	}
}

export const getInitialScreenTrack = ({
	name,
	spookyAlias,
	location,
	spookyBio
}: { name: string; spookyAlias: string; location: string | null; spookyBio: string }) => {
	const randomLanguage = getRandomElement({ list: COMMUNICATION_LANGUAGES })
	let renderedLocation = location
	if (!renderedLocation) {
		renderedLocation = getRandomElement({ list: CREEPY_LOCATIONS })
	}

	return [
		{
			startOffset: 22000,
			endOffset: 25000,
			x: 600,
			y: 125,
			clipDefaults: {
				textVerticalAlign: 'middle',
				fontSize: 26,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				textMaxWidth: 550,
				clipDuration: 4000
			},
			clips: [
				{
					text: `NAME: ${name.toUpperCase()}`,
					type: 'text'
				}
			]
		},
		{
			startOffset: 22000,
			endOffset: 25000,
			x: 600,
			y: 185,
			clipDefaults: {
				textVerticalAlign: 'middle',
				fontSize: 26,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				textMaxWidth: 550,
				clipDuration: 4000
			},
			clips: [
				{
					text: `ALIAS: ${spookyAlias}`,
					type: 'text'
				}
			]
		},
		{
			startOffset: 22000,
			endOffset: 25000,
			x: 600,
			y: 245,
			clipDefaults: {
				textVerticalAlign: 'middle',
				fontSize: 26,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				textMaxWidth: 550,
				clipDuration: 4000
			},
			clips: [
				{
					text: `LOCATION: ${renderedLocation}`,
					type: 'text'
				}
			]
		},
		{
			startOffset: 22000,
			endOffset: 25000,
			x: 600,
			y: 305,
			clipDefaults: {
				textVerticalAlign: 'middle',
				fontSize: 26,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				textMaxWidth: 550,
				clipDuration: 4000
			},
			clips: [
				{
					text: `LANGUAGE: ${randomLanguage.toUpperCase()}`,
					type: 'text'
				}
			]
		},
		{
			startOffset: 22000,
			endOffset: 25000,
			x: 105,
			y: 315,
			width: 1050,
			height: 230,
			clipDefaults: {
				textVerticalAlign: 'middle',
				fontSize: 25,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: spookyBio,
					type: 'textArea'
				}
			]
		}
	]
}

export const getButtonsTrack = () => {
	return [
		{
			startOffset: 22000,
			endOffset: 25000,
			y: 540,
			x: 870,
			width: 300,
			height: 40,
			radius: '15%',
			clips: [
				{
					border: 6,
					borderColor: '#4bb0f3',
					type: 'color'
				}
			]
		},
		{
			startOffset: 22000,
			endOffset: 25000,
			x: 943,
			y: 550,
			clipDefaults: {
				fontSize: 25,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				textMaxWidth: 300,
				clipDuration: 4000
			},
			clips: [
				{
					text: 'SEE DETAILS',
					type: 'text'
				}
			]
		},
		{
			startOffset: 22000,
			endOffset: 25000,
			y: 540,
			x: 105,
			width: 300,
			height: 40,
			radius: '15%',
			clips: [
				{
					border: 6,
					borderColor: '#eb626f',
					type: 'color'
				}
			]
		},
		{
			startOffset: 22000,
			endOffset: 25000,
			x: 206,
			y: 550,
			clipDefaults: {
				fontSize: 25,
				fontColor: '#eb626f',
				fontType: 'Merriweather',
				textMaxWidth: 300,
				clipDuration: 4000
			},
			clips: [
				{
					text: 'REJECT',
					type: 'text'
				}
			]
		}
	]
}

export const getFirstEmptyScreenTrack = () => {
	return {
		startOffset: 28000,
		endOffset: 30000,
		width: 1280,
		height: 720,
		clips: [
			{
				media: ['assets/empty-screen', 'image'],
				type: 'image'
			}
		]
	}
}

export const getSecondScreenTrack = ({
	spookyIntro,
	skills
}: { spookyIntro: string; skills: string[] }) => {
	const [skillOne, skillTwo, skillThree, skillFour, skillFive, skillSix, skillSeven, skillEight] =
		skills
	return [
		{
			startOffset: 28000,
			endOffset: 30000,
			x: 105,
			y: 50,
			clipDefaults: {
				textVerticalAlign: 'middle',
				fontSize: 57,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				textMaxWidth: 580,
				clipDuration: 4000
			},
			clips: [
				{
					text: 'THE HAUNTED STORY',
					type: 'text'
				}
			]
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			x: 105,
			y: 135,
			width: 1050,
			height: 250,
			clipDefaults: {
				fontSize: 23,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: spookyIntro,
					type: 'textArea'
				}
			]
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			x: 105,
			y: 290,
			clipDefaults: {
				textVerticalAlign: 'middle',
				fontSize: 57,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				textMaxWidth: 465,
				clipDuration: 4000
			},
			clips: [
				{
					text: 'SPOOKY SKILLS',
					type: 'text'
				}
			]
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			width: 20,
			height: 20,
			x: 105,
			y: 380,
			clips: [
				{
					media: ['stickers/new-skull', 'image'],
					type: 'image'
				}
			],
			transformation: 'c_thumb,b_rgb:0067D3'
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			x: 130,
			y: 380,
			width: 500,
			height: 320,
			clipDefaults: {
				fontSize: 22,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: skillOne,
					type: 'text'
				}
			]
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			width: 20,
			height: 20,
			x: 105,
			y: 440,
			clips: [
				{
					media: ['stickers/new-skull', 'image'],
					type: 'image'
				}
			],
			transformation: 'c_thumb,b_rgb:0067D3'
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			x: 130,
			y: 440,
			width: 500,
			height: 320,
			clipDefaults: {
				fontSize: 22,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: skillTwo,
					type: 'text'
				}
			]
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			width: 20,
			height: 20,
			x: 105,
			y: 500,
			clips: [
				{
					media: ['stickers/new-skull', 'image'],
					type: 'image'
				}
			],
			transformation: 'c_thumb,b_rgb:0067D3'
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			x: 130,
			y: 500,
			width: 500,
			height: 320,
			clipDefaults: {
				fontSize: 22,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: skillThree,
					type: 'text'
				}
			]
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			width: 20,
			height: 20,
			x: 105,
			y: 560,
			clips: [
				{
					media: ['stickers/new-skull', 'image'],
					type: 'image'
				}
			],
			transformation: 'c_thumb,b_rgb:0067D3'
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			x: 130,
			y: 560,
			width: 500,
			height: 320,
			clipDefaults: {
				fontSize: 22,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: skillFour,
					type: 'text'
				}
			]
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			width: 20,
			height: 20,
			x: 600,
			y: 380,
			clips: [
				{
					media: ['stickers/new-skull', 'image'],
					type: 'image'
				}
			],
			transformation: 'c_thumb,b_rgb:0067D3'
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			x: 630,
			y: 380,
			width: 450,
			height: 320,
			clipDefaults: {
				fontSize: 22,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: skillFive,
					type: 'text'
				}
			]
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			width: 20,
			height: 20,
			x: 600,
			y: 440,
			clips: [
				{
					media: ['stickers/new-skull', 'image'],
					type: 'image'
				}
			],
			transformation: 'c_thumb,b_rgb:0067D3'
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			x: 630,
			y: 440,
			width: 450,
			height: 320,
			clipDefaults: {
				fontSize: 22,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: skillSix,
					type: 'text'
				}
			]
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			width: 20,
			height: 20,
			x: 600,
			y: 500,
			clips: [
				{
					media: ['stickers/new-skull', 'image'],
					type: 'image'
				}
			],
			transformation: 'c_thumb,b_rgb:0067D3'
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			x: 630,
			y: 500,
			width: 500,
			height: 320,
			clipDefaults: {
				fontSize: 22,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: skillSeven,
					type: 'text'
				}
			]
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			width: 20,
			height: 20,
			x: 600,
			y: 560,
			clips: [
				{
					media: ['stickers/new-skull', 'image'],
					type: 'image'
				}
			],
			transformation: 'c_thumb,b_rgb:0067D3'
		},
		{
			startOffset: 28000,
			endOffset: 30000,
			x: 630,
			y: 560,
			width: 500,
			height: 320,
			clipDefaults: {
				fontSize: 22,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: skillEight,
					type: 'text'
				}
			]
		}
	]
}

export const getSecondSceneVideo = () => {
	return {
		startOffset: 30000,
		width: 1280,
		height: 720,
		clips: [
			{
				media: ['assets/man-computer-2', 'video'],
				type: 'video'
			}
		]
	}
}

export const getSecondEmptyScreenTrack = () => {
	return {
		startOffset: 32000,
		endOffset: 34000,
		width: 1280,
		height: 720,
		clips: [
			{
				media: ['assets/empty-screen', 'image'],
				type: 'image'
			}
		]
	}
}

export const getCrypticLanguagesTrack = ({ crypticLanguages }: { crypticLanguages: string[] }) => {
	const [language1, language2, language3] = crypticLanguages
	const unknownLanguage = getRandomElement({ list: COMMUNICATION_LANGUAGES })

	return [
		{
			startOffset: 32000,
			endOffset: 34000,
			x: 105,
			y: 50,
			clipDefaults: {
				textVerticalAlign: 'middle',
				fontSize: 57,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				textMaxWidth: 550,
				clipDuration: 4000
			},
			clips: [
				{
					text: 'CRYPTIC LANGUAGES',
					type: 'text'
				}
			]
		},
		{
			startOffset: 32000,
			endOffset: 34000,
			width: 350,
			height: 350,
			x: 105,
			y: 180,
			clips: [
				{
					media: ['assets/pie-chart', 'image'],
					type: 'image',
					transformation: 'b_rgb:036FD6'
				}
			]
		},
		{
			startOffset: 32000,
			endOffset: 34000,
			x: 580,
			y: 230,
			width: 18,
			height: 18,
			radius: '15%',
			clips: [
				{
					border: 6,
					borderColor: '#0b376b',
					type: 'color'
				}
			]
		},
		{
			startOffset: 32000,
			endOffset: 34000,
			x: 620,
			y: 230,
			width: 500,
			height: 320,
			clipDefaults: {
				fontSize: 28,
				fontColor: '#0b376b',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: language1,
					type: 'text'
				}
			]
		},
		{
			startOffset: 32000,
			endOffset: 34000,
			x: 580,
			y: 290,
			width: 18,
			height: 18,
			radius: '15%',
			clips: [
				{
					border: 6,
					borderColor: '#FF921B',
					type: 'color'
				}
			]
		},
		{
			startOffset: 32000,
			endOffset: 34000,
			x: 620,
			y: 290,
			width: 500,
			height: 320,
			clipDefaults: {
				fontSize: 28,
				fontColor: '#FF921B',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: language2,
					type: 'text'
				}
			]
		},
		{
			startOffset: 32000,
			endOffset: 34000,
			x: 580,
			y: 350,
			width: 18,
			height: 18,
			radius: '15%',
			clips: [
				{
					border: 6,
					borderColor: '#5E7BBD',
					type: 'color'
				}
			]
		},
		{
			startOffset: 32000,
			endOffset: 34000,
			x: 620,
			y: 350,
			width: 500,
			height: 320,
			clipDefaults: {
				fontSize: 28,
				fontColor: '#5E7BBD',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: language3,
					type: 'text'
				}
			]
		},
		{
			startOffset: 32000,
			endOffset: 34000,
			x: 580,
			y: 410,
			width: 18,
			height: 18,
			radius: '15%',
			clips: [
				{
					border: 6,
					borderColor: '#69ABC3',
					type: 'color'
				}
			]
		},
		{
			startOffset: 32000,
			endOffset: 34000,
			x: 620,
			y: 410,
			width: 500,
			height: 320,
			clipDefaults: {
				fontSize: 28,
				fontColor: '#69ABC3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: unknownLanguage,
					type: 'text'
				}
			]
		}
	]
}

export const getThirdSceneVideo = () => {
	return [
		{
			startOffset: 34000,
			width: 1280,
			height: 720,
			clips: [
				{
					media: ['assets/man-computer-3', 'video'],
					type: 'video'
				}
			]
		},
		{
			startOffset: 36000,
			endOffset: 39000,
			width: 1280,
			height: 720,
			clips: [
				{
					media: ['assets/thunder', 'video'],
					type: 'video'
				}
			]
		},
		{
			startOffset: 36000,
			endOffset: 38600,
			width: 170,
			height: 200,
			x: 980,
			y: 510,
			clips: [
				{
					media: ['assets/cursed-face', 'image'],
					type: 'image',
					transformation: 'b_rgb:030407'
				}
			]
		},
		{
			startOffset: 39000,
			width: 1280,
			height: 720,
			clips: [
				{
					media: ['assets/man-computer-4', 'video'],
					type: 'video'
				}
			]
		}
	]
}

export const getThirdEmptyScreenTrack = () => {
	return {
		startOffset: 43000,
		endOffset: 45000,
		width: 1280,
		height: 720,
		clips: [
			{
				media: ['assets/empty-screen', 'image'],
				type: 'image'
			}
		]
	}
}

export const getCursedCreationsTrack = ({
	cursedCreationsClips
}: {
	cursedCreationsClips: {
		description: string
		details: string
	}[]
}) => {
	const [creationOne, creationTwo, creationThree, creationFour, creationFive, creationSix] =
		cursedCreationsClips
	return [
		{
			startOffset: 43000,
			endOffset: 45000,
			x: 105,
			y: 50,
			clipDefaults: {
				fontSize: 57,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				textMaxWidth: 570,
				clipDuration: 4000
			},
			clips: [
				{
					text: 'CURSED CREATIONS',
					type: 'text'
				}
			]
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			width: 90,
			height: 90,
			x: 240,
			y: 150,
			clips: [
				{
					media: ['stickers/friendly-pumpkin', 'image'],
					type: 'image'
				}
			],
			transformation: 'b_rgb:0168D5'
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			x: 130,
			y: 250,
			width: 350,
			height: 320,
			clipDefaults: {
				textAlign: 'center',
				fontSize: 20,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: creationOne.description,
					type: 'textArea'
				}
			]
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			x: 170,
			y: 315,
			width: 350,
			height: 320,
			clipDefaults: {
				fontSize: 18,
				fontColor: '#ecd872',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: creationOne.details,
					type: 'textArea'
				}
			]
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			width: 90,
			height: 90,
			x: 590,
			y: 150,
			clips: [
				{
					media: ['stickers/hunter', 'image'],
					type: 'image'
				}
			],
			transformation: 'b_rgb:006EDC'
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			x: 480,
			y: 250,
			width: 345,
			height: 320,
			clipDefaults: {
				textAlign: 'center',
				fontSize: 20,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: creationTwo.description,
					type: 'textArea'
				}
			]
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			x: 530,
			y: 315,
			width: 350,
			height: 320,
			clipDefaults: {
				fontSize: 18,
				fontColor: '#ecd872',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: creationTwo.details,
					type: 'textArea'
				}
			]
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			width: 90,
			height: 90,
			x: 940,
			y: 150,
			clips: [
				{
					media: ['stickers/pepo', 'image'],
					type: 'image'
				}
			],
			transformation: 'b_rgb:006EDC'
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			x: 820,
			y: 250,
			width: 380,
			height: 320,
			clipDefaults: {
				textAlign: 'center',
				fontSize: 20,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: creationThree.description,
					type: 'textArea'
				}
			]
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			x: 870,
			y: 315,
			width: 350,
			height: 320,
			clipDefaults: {
				fontSize: 18,
				fontColor: '#ecd872',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: creationThree.details,
					type: 'textArea'
				}
			]
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			width: 90,
			height: 105,
			x: 240,
			y: 350,
			clips: [
				{
					media: ['stickers/clown', 'image'],
					type: 'image'
				}
			],
			transformation: 'b_rgb:006EDC'
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			x: 130,
			y: 470,
			width: 360,
			height: 320,
			clipDefaults: {
				textAlign: 'center',
				fontSize: 20,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: creationFour.description,
					type: 'textArea'
				}
			]
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			x: 170,
			y: 550,
			width: 350,
			height: 320,
			clipDefaults: {
				fontSize: 18,
				fontColor: '#ecd872',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: creationFour.details,
					type: 'textArea'
				}
			]
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			width: 90,
			height: 90,
			x: 590,
			y: 355,
			clips: [
				{
					media: ['stickers/castle', 'image'],
					type: 'image'
				}
			],
			transformation: 'b_rgb:006EDC'
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			x: 480,
			y: 470,
			width: 330,
			height: 320,
			clipDefaults: {
				textAlign: 'center',
				fontSize: 20,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: creationFive.description,
					type: 'textArea'
				}
			]
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			x: 530,
			y: 550,
			width: 350,
			height: 320,
			clipDefaults: {
				fontSize: 18,
				fontColor: '#ecd872',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: creationFive.details,
					type: 'textArea'
				}
			]
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			width: 90,
			height: 90,
			x: 940,
			y: 360,
			clips: [
				{
					media: ['stickers/haunted-ghost', 'image'],
					type: 'image'
				}
			],
			transformation: 'b_rgb:006EDC'
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			x: 810,
			y: 470,
			width: 340,
			height: 320,
			clipDefaults: {
				textAlign: 'center',
				fontSize: 20,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: creationSix.description,
					type: 'textArea'
				}
			]
		},
		{
			startOffset: 43000,
			endOffset: 45000,
			x: 860,
			y: 550,
			width: 350,
			height: 320,
			clipDefaults: {
				fontSize: 18,
				fontColor: '#ecd872',
				fontType: 'Merriweather',
				clipDuration: 4000
			},
			clips: [
				{
					text: creationSix.details,
					type: 'textArea'
				}
			]
		}
	]
}

export const getFithSceneVideo = () => {
	return {
		startOffset: 45000,
		width: 1280,
		height: 720,
		clips: [
			{
				media: ['assets/man-computer-5-new', 'video'],
				type: 'video'
			}
		]
	}
}

export const getFourthEmptyScreenTrack = () => {
	return {
		startOffset: 46000,
		width: 1280,
		height: 720,
		clips: [
			{
				media: ['assets/empty-screen', 'image'],
				type: 'image'
			}
		]
	}
}

export const getFinalQuestionTrack = ({ answer }: { answer: string }) => {
	return [
		{
			startOffset: 46000,
			x: 105,
			y: 50,
			width: 980,
			clipDefaults: {
				fontSize: 68,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				textMaxWidth: 980,
				clipDuration: 4000
			},
			clips: [
				{
					text: 'WHERE DO YOU SEE YOURSELF IN 5 YEARS?',
					type: 'textArea'
				}
			]
		},
		{
			startOffset: 46000,
			x: 105,
			y: 280,
			width: 1100,
			clipDefaults: {
				textAlign: 'left',
				fontSize: 40,
				fontColor: '#4bb0f3',
				fontType: 'Merriweather',
				textMaxWidth: 1100
			},
			clips: [
				{
					text: answer,
					type: 'textArea'
				}
			]
		}
	]
}

export const getSixthSceneVideo = () => {
	return {
		startOffset: 49000,
		width: 1280,
		height: 720,
		clips: [
			{
				media: ['assets/man-computer-6', 'video'],
				type: 'video'
			}
		]
	}
}

export const getEndTrack = () => {
	return [
		{
			startOffset: 55000,
			clips: [
				{
					color: 'black',
					type: 'color'
				}
			]
		},
		{
			startOffset: 55000,
			clipDefaults: {
				textAlign: 'center',
				textVerticalAlign: 'middle',
				fontSize: 36,
				fontColor: 'white',
				fontType: 'Poppins',
				textMaxWidth: 350,
				clipDuration: 2000,
				transitionDuration: 1000,
				transition: 'windowslice'
			},
			clips: [
				{
					text: 'Created by the Mad Developer: Xavi',
					type: 'textArea'
				},
				{
					text: 'Conjured with the dark magic of Cloudinary API',
					type: 'textArea'
				}
			]
		},
		{
			startOffset: 59000,
			width: 1280,
			height: 720,
			clips: [
				{
					media: ['assets/end-cover', 'image'],
					type: 'image'
				}
			]
		}
	]
}
