export const site = {
    name: 'Rio On The Map',
    url: 'https://rioonthemap.com',
    email: 'rioonthemap@gmail.com',
    whatsappDisplay: '+55 21 99904-0267',
    whatsappUrl: 'https://wa.me/5521999040267',
    instagramUrl: 'https://www.instagram.com/rioonthemap/',
    instagramHandle: '@rioonthemap',
    facebookUrl: 'https://www.facebook.com/RioOnTheMap/',
    tripadvisorUrl:
        'https://www.tripadvisor.com/Attraction_Review-g303506-d6868124-Reviews-Rio_On_the_Map-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html',
    googleMapsUrl: 'https://maps.app.goo.gl/bUiYWnxEgu6nQLsy9',
} as const

export const navigation = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about/' },
    { label: 'Experiences', href: '/experiences/' },
    { label: 'Contact Us', href: '/contact/' },
] as const

/** Public rating snapshot — verified October 2026. Update when the platforms change. */
export const ratings = [
    { platform: 'Google', score: 5.0, count: '92 reviews', href: site.googleMapsUrl },
    { platform: 'Tripadvisor', score: 4.9, count: '95 reviews', href: site.tripadvisorUrl },
] as const

export const reviews = [
    { quote: 'Friendly and passionate about his city.', author: 'Niclas P.', origin: 'Stockholm, Sweden', date: 'March 2026' },
    { quote: 'He knows the cool “out of the way” spots.', author: 'Karen P.', origin: 'Tripadvisor traveler', date: 'August 2025' },
    { quote: 'Always punctual and an excellent driver.', author: 'Aneal K.', origin: 'Virginia, United States', date: 'November 2023' },
] as const

export const principles = [
    { icon: 'diamond', title: 'Bespoke Experiences', text: 'Shaped around your interests, your pace and your travel style.' },
    { icon: 'group', title: 'Private & Exclusive', text: 'Every experience is for you and your group, never shared.' },
    { icon: 'pin', title: 'Hidden Gems', text: 'Guided by people who know Rio well beyond the postcard views.' },
    { icon: 'star', title: 'Comfort & Care', text: 'Thoughtful hospitality from the first message to the end of the day.' },
] as const

export const approachSteps = [
    { title: 'You tell us your idea', text: 'Dates, group size and what you are most curious about. A rough idea is enough.' },
    { title: 'We talk it through', text: 'You get a personal reply, and we shape the possibilities with you directly.' },
    { title: 'Rio, at your rhythm', text: 'Nothing is booked until every detail is agreed. On the day, slow down where something catches your eye.' },
] as const
