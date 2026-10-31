import type { ImageMetadata } from 'astro'
import classicRioImage from '../assets/photos/rio-corcovado-christ-view.jpg'
import customizeImage from '../assets/photos/ipanema-surfer-sunset.jpg'
import niteroiImage from '../assets/photos/niteroi-mac-museum.jpg'
import petropolisImage from '../assets/photos/quitandinha-palace-petropolis.jpg'
import buziosImage from '../assets/photos/arraial-do-cabo-boats.jpg'
import coastNatureImage from '../assets/photos/rio-coast-boardwalk.jpg'
import ilhaGrandeImage from '../assets/photos/ilha-grande-bay.jpg'
import nightlifeImage from '../assets/photos/selaron-steps-night.jpg'
import tijucaImage from '../assets/photos/tijuca-forest-stone-bridge.jpg'

export type LonLat = readonly [lon: number, lat: number]

export interface Stop {
    label: string
    at: LonLat
}

export interface Experience {
    name: string
    slug: string
    description: string
    image: ImageMetadata
    imageAlt: string
    /** Places lit on the map, in route order from Rio. */
    stops: Stop[]
    /** Map camera: point to centre on and visible width, in degrees of longitude. */
    camera: { at: LonLat; span: number }
}

export interface Chapter {
    id: string
    title: string
    summary: string
    tours: Experience[]
}

/** Departure point of every route line. */
export const rioCenter: LonLat = [-43.18, -22.92]

export const chapters: Chapter[] = [
    {
        id: 'iconic-landmarks',
        title: 'Iconic Landmarks',
        summary: 'Sugarloaf, viewpoints and more',
        tours: [
            {
                name: 'Classic Rio Day Tour',
                slug: 'classic-rio-day-tour',
                description: "An introduction to Rio's defining landmarks, viewpoints and historic neighborhoods.",
                image: classicRioImage,
                imageAlt: 'Christ the Redeemer overlooking Rio de Janeiro and Sugarloaf Mountain',
                stops: [{ label: 'Sugarloaf', at: [-43.156, -22.949] }],
                camera: { at: [-43.19, -22.94], span: 0.8 },
            },
            {
                name: 'Niterói Day Tour',
                slug: 'niteroi-day-tour',
                description: 'Cross the bay for distinctive architecture, coastal scenery and a different perspective of Rio.',
                image: niteroiImage,
                imageAlt: 'Niterói Contemporary Art Museum with its red ramp beside Guanabara Bay',
                stops: [{ label: 'Niterói', at: [-43.126, -22.907] }],
                camera: { at: [-43.13, -22.88], span: 0.8 },
            },
        ],
    },
    {
        id: 'nature-adventure',
        title: 'Nature & Adventure',
        summary: 'Forest, waves and scenic roads',
        tours: [
            {
                name: 'Rio Tijuca Explore',
                slug: 'rio-tijuca-explore',
                description: "Discover the forest landscapes, viewpoints and natural character of Rio's Tijuca region.",
                image: tijucaImage,
                imageAlt: 'A stone bridge surrounded by lush rainforest in Tijuca National Park',
                stops: [{ label: 'Tijuca Forest', at: [-43.28, -22.955] }],
                camera: { at: [-43.25, -22.95], span: 0.8 },
            },
            {
                name: 'Rio Coast & Nature',
                slug: 'rio-coast-nature',
                description: "Explore Rio's coastline through beaches, scenic roads and landscapes beyond the central sights.",
                image: coastNatureImage,
                imageAlt: 'Wooden boardwalk leading through green dunes to a beach on the Rio coast',
                stops: [{ label: 'Rio’s wild coast', at: [-43.5, -23.03] }],
                camera: { at: [-43.36, -22.96], span: 1 },
            },
        ],
    },
    {
        id: 'culture-history',
        title: 'Culture & History',
        summary: 'Imperial past in the mountains',
        tours: [
            {
                name: 'Petrópolis Day Tour',
                slug: 'petropolis-day-tour',
                description: 'A day beyond Rio focused on the architecture, landscape and history of Petrópolis.',
                image: petropolisImage,
                imageAlt: 'Quitandinha Palace and its lake in the mountains of Petrópolis',
                stops: [{ label: 'Petrópolis', at: [-43.178, -22.505] }],
                camera: { at: [-43.18, -22.72], span: 1 },
            },
        ],
    },
    {
        id: 'hidden-gems',
        title: 'Hidden Gems',
        summary: 'Islands and secret coves',
        tours: [
            {
                name: 'Rio & Ilha Grande Tour',
                slug: 'rio-ilha-grande-tour',
                description: 'Combine time in Rio with the tropical landscapes and island setting of Ilha Grande.',
                image: ilhaGrandeImage,
                imageAlt: 'Turquoise bay and forested hills at Ilha Grande',
                stops: [{ label: 'Ilha Grande', at: [-44.23, -23.14] }],
                camera: { at: [-43.7, -23], span: 1.6 },
            },
            {
                name: 'Rio, Búzios & Arraial',
                slug: 'rio-buzios-arraial',
                description: 'A coastal journey connecting Rio with the clear water and relaxed atmosphere beyond the city.',
                image: buziosImage,
                imageAlt: 'Boats in clear turquoise water in front of a green hillside at Arraial do Cabo',
                stops: [
                    { label: 'Arraial do Cabo', at: [-42.03, -22.966] },
                    { label: 'Búzios', at: [-41.882, -22.747] },
                ],
                camera: { at: [-42.5, -22.88], span: 1.75 },
            },
        ],
    },
    {
        id: 'exclusive-experiences',
        title: 'Exclusive Experiences',
        summary: 'After dark, or made entirely for you',
        tours: [
            {
                name: 'Rio Nightlife Tour',
                slug: 'rio-nightlife-tour',
                description: "Experience Rio after dark through local meeting places, flavors and the city's social rhythm.",
                image: nightlifeImage,
                imageAlt: 'The Selarón Steps in Lapa lit up at night',
                stops: [{ label: 'Rio after dark', at: [-43.18, -22.91] }],
                camera: { at: [-43.18, -22.9], span: 0.7 },
            },
            {
                name: 'Customize Your Own Experience',
                slug: 'customize-your-own-experience',
                description: 'Begin with your interests and shape a private experience around the way you want to see Rio.',
                image: customizeImage,
                imageAlt: 'A surfer walking along Ipanema Beach at sunset with Dois Irmãos behind',
                stops: [],
                camera: { at: [-43.1, -22.85], span: 3.2 },
            },
        ],
    },
]

export const experiences = chapters.flatMap((chapter) => chapter.tours)
