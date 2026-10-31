import type { ImageMetadata } from 'astro'
import classicRioImage from '../assets/experiences/classic-rio-day-tour.jpg'
import customizeImage from '../assets/experiences/customize-your-own-experience.jpg'
import niteroiImage from '../assets/experiences/niteroi-day-tour.jpg'
import petropolisImage from '../assets/experiences/petropolis-day-tour.jpg'
import buziosImage from '../assets/experiences/rio-buzios-arraial.jpg'
import coastNatureImage from '../assets/experiences/rio-coast-nature.jpg'
import ilhaGrandeImage from '../assets/experiences/rio-ilha-grande-tour.jpg'
import nightlifeImage from '../assets/experiences/rio-nightlife-tour.jpg'
import tijucaImage from '../assets/experiences/rio-tijuca-explore.jpg'

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
    cover: ImageMetadata
    coverAlt: string
    tours: Experience[]
}

/** Departure point of every route line. */
export const rioCenter: LonLat = [-43.18, -22.92]

export const chapters: Chapter[] = [
    {
        id: 'iconic-landmarks',
        title: 'Iconic Landmarks',
        summary: 'Sugarloaf, viewpoints and more',
        cover: classicRioImage,
        coverAlt: 'Rio de Janeiro seen from Sugarloaf Mountain, with a cable car in the foreground',
        tours: [
            {
                name: 'Classic Rio Day Tour',
                slug: 'classic-rio-day-tour',
                description: "An introduction to Rio's defining landmarks, viewpoints and historic neighborhoods.",
                image: classicRioImage,
                imageAlt: 'Rio de Janeiro seen from Sugarloaf Mountain, with a cable car in the foreground',
                stops: [{ label: 'Sugarloaf', at: [-43.156, -22.949] }],
                camera: { at: [-43.19, -22.94], span: 0.8 },
            },
            {
                name: 'Niterói Day Tour',
                slug: 'niteroi-day-tour',
                description: 'Cross the bay for distinctive architecture, coastal scenery and a different perspective of Rio.',
                image: niteroiImage,
                imageAlt: 'Niterói Contemporary Art Museum beside Guanabara Bay',
                stops: [{ label: 'Niterói', at: [-43.126, -22.907] }],
                camera: { at: [-43.13, -22.88], span: 0.8 },
            },
        ],
    },
    {
        id: 'nature-adventure',
        title: 'Nature & Adventure',
        summary: 'Forest, waves and scenic roads',
        cover: tijucaImage,
        coverAlt: 'The Vista Chinesa pavilion silhouetted against a golden sunset in Tijuca',
        tours: [
            {
                name: 'Rio Tijuca Explore',
                slug: 'rio-tijuca-explore',
                description: "Discover the forest landscapes, viewpoints and natural character of Rio's Tijuca region.",
                image: tijucaImage,
                imageAlt: 'The Vista Chinesa pavilion silhouetted against a golden sunset in Tijuca',
                stops: [{ label: 'Tijuca Forest', at: [-43.28, -22.955] }],
                camera: { at: [-43.25, -22.95], span: 0.8 },
            },
            {
                name: 'Rio Coast & Nature',
                slug: 'rio-coast-nature',
                description: "Explore Rio's coastline through beaches, scenic roads and landscapes beyond the central sights.",
                image: coastNatureImage,
                imageAlt: 'Long Atlantic waves rolling towards a green headland on the Rio coast',
                stops: [{ label: 'Rio’s wild coast', at: [-43.5, -23.03] }],
                camera: { at: [-43.36, -22.96], span: 1 },
            },
        ],
    },
    {
        id: 'culture-history',
        title: 'Culture & History',
        summary: 'Imperial past in the mountains',
        cover: petropolisImage,
        coverAlt: 'Historic Quitandinha palace and its lake in the mountains of Petrópolis',
        tours: [
            {
                name: 'Petrópolis Day Tour',
                slug: 'petropolis-day-tour',
                description: 'A day beyond Rio focused on the architecture, landscape and history of Petrópolis.',
                image: petropolisImage,
                imageAlt: 'Historic Quitandinha palace and its lake in the mountains of Petrópolis',
                stops: [{ label: 'Petrópolis', at: [-43.178, -22.505] }],
                camera: { at: [-43.18, -22.72], span: 1 },
            },
        ],
    },
    {
        id: 'hidden-gems',
        title: 'Hidden Gems',
        summary: 'Islands and secret coves',
        cover: ilhaGrandeImage,
        coverAlt: 'Swimmers in a turquoise cove surrounded by forest at Ilha Grande',
        tours: [
            {
                name: 'Rio & Ilha Grande Tour',
                slug: 'rio-ilha-grande-tour',
                description: 'Combine time in Rio with the tropical landscapes and island setting of Ilha Grande.',
                image: ilhaGrandeImage,
                imageAlt: 'Swimmers in a turquoise cove surrounded by forest at Ilha Grande',
                stops: [{ label: 'Ilha Grande', at: [-44.23, -23.14] }],
                camera: { at: [-43.7, -23], span: 1.6 },
            },
            {
                name: 'Rio, Búzios & Arraial',
                slug: 'rio-buzios-arraial',
                description: 'A coastal journey connecting Rio with the clear water and relaxed atmosphere beyond the city.',
                image: buziosImage,
                imageAlt: 'Calm green water and a sandy beach framed by rocks in Búzios',
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
        cover: nightlifeImage,
        coverAlt: 'A traditional Rio de Janeiro bar full of guests under warm light',
        tours: [
            {
                name: 'Rio Nightlife Tour',
                slug: 'rio-nightlife-tour',
                description: "Experience Rio after dark through local meeting places, flavors and the city's social rhythm.",
                image: nightlifeImage,
                imageAlt: 'A traditional Rio de Janeiro bar full of guests under warm light',
                stops: [{ label: 'Rio after dark', at: [-43.18, -22.91] }],
                camera: { at: [-43.18, -22.9], span: 0.7 },
            },
            {
                name: 'Customize Your Own Experience',
                slug: 'customize-your-own-experience',
                description: 'Begin with your interests and shape a private experience around the way you want to see Rio.',
                image: customizeImage,
                imageAlt: 'A colorful collage of Rio scenes: trams, boats, beaches, food and Sugarloaf',
                stops: [],
                camera: { at: [-43.1, -22.85], span: 3.2 },
            },
        ],
    },
]

export const experiences = chapters.flatMap((chapter) => chapter.tours)
