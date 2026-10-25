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

export interface Experience {
    name: string
    slug: string
    category: string
    categories: string[]
    description: string
    image: ImageMetadata
    imageAlt: string
    duration: string
    groupSize: string
    languages: string
    price: string
}

const pendingExperienceDetails = {
    duration: 'To be confirmed',
    groupSize: 'Private group',
    languages: 'To be confirmed',
    price: 'On request',
}

export const experiences: Experience[] = [
    {
        ...pendingExperienceDetails,
        name: 'Classic Rio Day Tour',
        slug: 'classic-rio-day-tour',
        category: 'City Highlights',
        categories: ['city', 'culture'],
        description: "An introduction to Rio's defining landmarks, viewpoints and historic neighborhoods.",
        image: classicRioImage,
        imageAlt: 'Christ the Redeemer overlooking Rio de Janeiro',
    },
    {
        ...pendingExperienceDetails,
        name: 'Rio Tijuca Explore',
        slug: 'rio-tijuca-explore',
        category: 'Nature & Beaches',
        categories: ['nature'],
        description: "Discover the forest landscapes, viewpoints and natural character of Rio's Tijuca region.",
        image: tijucaImage,
        imageAlt: 'View across Rio de Janeiro from Vista Chinesa',
    },
    {
        ...pendingExperienceDetails,
        name: 'Petrópolis Day Tour',
        slug: 'petropolis-day-tour',
        category: 'Culture & History',
        categories: ['culture'],
        description: 'A day beyond Rio focused on the architecture, landscape and history of Petrópolis.',
        image: petropolisImage,
        imageAlt: 'Historic architecture and mountain landscape in Petrópolis',
    },
    {
        ...pendingExperienceDetails,
        name: 'Rio Nightlife Tour',
        slug: 'rio-nightlife-tour',
        category: 'Sunset & Nightlife',
        categories: ['food', 'nightlife'],
        description: "Experience Rio after dark through local meeting places, flavors and the city's social rhythm.",
        image: nightlifeImage,
        imageAlt: 'Rio de Janeiro nightlife venue with warm lights',
    },
    {
        ...pendingExperienceDetails,
        name: 'Rio, Búzios & Arraial',
        slug: 'rio-buzios-arraial',
        category: 'Multi-Day',
        categories: ['nature', 'multiday'],
        description: 'A coastal journey connecting Rio with the clear water and relaxed atmosphere beyond the city.',
        image: buziosImage,
        imageAlt: 'Beach and clear coastal water in Búzios',
    },
    {
        ...pendingExperienceDetails,
        name: 'Niterói Day Tour',
        slug: 'niteroi-day-tour',
        category: 'Culture & History',
        categories: ['city', 'culture'],
        description: 'Cross the bay for distinctive architecture, coastal scenery and a different perspective of Rio.',
        image: niteroiImage,
        imageAlt: 'Niterói Contemporary Art Museum beside Guanabara Bay',
    },
    {
        ...pendingExperienceDetails,
        name: 'Rio & Ilha Grande Tour',
        slug: 'rio-ilha-grande-tour',
        category: 'Multi-Day',
        categories: ['nature', 'multiday'],
        description: 'Combine time in Rio with the tropical landscapes and island setting of Ilha Grande.',
        image: ilhaGrandeImage,
        imageAlt: 'Tropical coast and clear water at Ilha Grande',
    },
    {
        ...pendingExperienceDetails,
        name: 'Rio Coast & Nature',
        slug: 'rio-coast-nature',
        category: 'Nature & Beaches',
        categories: ['nature'],
        description: "Explore Rio's coastline through beaches, scenic roads and landscapes beyond the central sights.",
        image: coastNatureImage,
        imageAlt: 'Green coastline and beach in Rio de Janeiro state',
    },
    {
        ...pendingExperienceDetails,
        name: 'Customize Your Own Experience',
        slug: 'customize-your-own-experience',
        category: 'Made For You',
        categories: ['city', 'nature', 'culture', 'food', 'nightlife', 'multiday'],
        description: 'Begin with your interests and shape a private experience around the way you want to see Rio.',
        image: customizeImage,
        imageAlt: 'Panoramic view across Rio de Janeiro and Guanabara Bay',
    },
]
