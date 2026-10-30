export const site = {
    name: 'Rio On The Map',
    url: 'https://rioonthemap.com',
    email: 'rioonthemap@gmail.com',
    profiles: [
        'https://www.instagram.com/rioonthemap/',
        'https://www.facebook.com/RioOnTheMap/',
        'https://www.tripadvisor.com/Attraction_Review-g303506-d6868124-Reviews-Rio_On_the_Map-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html',
        'https://maps.app.goo.gl/bUiYWnxEgu6nQLsy9',
    ],
    tripadvisorUrl:
        'https://www.tripadvisor.com.br/Attraction_Review-g303506-d6868124-Reviews-Rio_On_the_Map-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html',
    googleMapsUrl: 'https://maps.app.goo.gl/bUiYWnxEgu6nQLsy9',
} as const

/** Public rating snapshot — verified October 2026. Update when the platforms change. */
export const ratings = [
    { platform: 'Google', score: '5.0', count: '92 reviews', href: site.googleMapsUrl },
    { platform: 'Tripadvisor', score: '4.9', count: '95 reviews', href: site.tripadvisorUrl },
] as const

export const reviews = [
    { quote: 'Friendly and passionate about his city.', author: 'Niclas P.', origin: 'Stockholm, Sweden', date: 'March 2026' },
    { quote: 'He knows the cool “out of the way” spots.', author: 'Karen P.', origin: 'Tripadvisor traveler', date: 'August 2025' },
    { quote: 'Always punctual and an excellent driver.', author: 'Aneal K.', origin: 'Virginia, United States', date: 'November 2023' },
] as const

export const principles = [
    { title: 'Local expertise', text: 'Guided by people who know Rio beyond the postcard views.' },
    { title: 'Fully private', text: 'Every experience is for your group only, never shared.' },
    { title: 'Personalized itineraries', text: 'Shaped around your interests, your pace and your travel style.' },
    { title: 'Comfort and care', text: 'Thoughtful hospitality from the first message to the end of the day.' },
] as const

export const enquirySteps = [
    { title: 'Send your ideas', text: 'Dates, group size and what interests you most.' },
    { title: 'Receive a personal reply', text: 'We discuss possibilities with you directly by email.' },
    { title: 'Shape the experience', text: 'Nothing is booked until every detail is agreed.' },
] as const
