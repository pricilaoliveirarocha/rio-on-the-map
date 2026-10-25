import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let disposeMotion: (() => void) | undefined

function initializeHomeMotion() {
    const main = document.querySelector<HTMLElement>('main')
    if (!main || main.dataset.motionReady === 'true') return

    main.dataset.motionReady = 'true'
    gsap.registerPlugin(ScrollTrigger)

    const media = gsap.matchMedia()
    const context = gsap.context(() => {
        media.add('(prefers-reduced-motion: no-preference)', () => {
            const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

            heroTimeline
                .from('.hero__image', { scale: 1.045, duration: 1.8, ease: 'power2.out' })
                .from('.hero__line > span', { yPercent: 112, duration: 0.86, stagger: 0.1 }, 0.18)
                .from('.hero__description', { y: 18, autoAlpha: 0, duration: 0.65 }, 0.58)
                .from('.hero__actions', { y: 14, autoAlpha: 0, duration: 0.58 }, 0.72)

            gsap.to('.hero__image', {
                yPercent: 5,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.7,
                },
            })

            gsap.from('.featured-experiences__header > *', {
                y: 34,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.featured-experiences__header',
                    start: 'top 82%',
                    once: true,
                },
            })

            gsap.from('.featured-card', {
                y: 46,
                autoAlpha: 0,
                duration: 0.75,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.featured-experiences__grid',
                    start: 'top 82%',
                    once: true,
                },
            })

            gsap.from('.connection-story__image', {
                clipPath: 'inset(0 18% 0 0 round 0 180px 180px 0)',
                duration: 1.1,
                ease: 'power3.inOut',
                scrollTrigger: {
                    trigger: '.connection-story',
                    start: 'top 76%',
                    once: true,
                },
            })

            gsap.from('.connection-story__content > *', {
                x: 30,
                autoAlpha: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.connection-story__content',
                    start: 'top 78%',
                    once: true,
                },
            })

            gsap.from('.review-score', {
                y: 24,
                autoAlpha: 0,
                duration: 0.65,
                stagger: 0.12,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.review-scores',
                    start: 'top 84%',
                    once: true,
                },
            })

            gsap.from('.review-card', {
                xPercent: 8,
                autoAlpha: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.review-grid',
                    start: 'top 84%',
                    once: true,
                },
            })

            gsap.from('.home-enquiry__banner-content > *', {
                y: 26,
                autoAlpha: 0,
                duration: 0.75,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.home-enquiry__banner',
                    start: 'top 80%',
                    once: true,
                },
            })
        })
    }, main)

    disposeMotion = () => {
        media.revert()
        context.revert()
        delete main.dataset.motionReady
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHomeMotion, { once: true })
} else {
    initializeHomeMotion()
}

document.addEventListener('astro:page-load', initializeHomeMotion)
document.addEventListener('astro:before-swap', () => disposeMotion?.())
