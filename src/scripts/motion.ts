import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Declarative page motion driven by data attributes.
 *
 * - [data-intro]        fades up on page load (above-the-fold content)
 * - [data-intro-media]  slow settle-in scale on load (hero images)
 * - [data-lines]        heading whose `.line > span` children slide up; on load
 *                       when combined with [data-intro-lines], otherwise on scroll
 * - [data-reveal]       fades up when scrolled into view
 * - [data-stagger]      reveals its direct children in sequence
 * - [data-clip]         image frame that opens from the center, image settles
 * - [data-parallax]     subtle vertical drift tied to scroll position
 *
 * Everything is skipped when the visitor prefers reduced motion; content is
 * always present in the HTML, so motion never gates access to it.
 */

const EASE = 'expo.out'
const root = document.documentElement
let dispose: (() => void) | undefined

const select = <T extends Element = HTMLElement>(selector: string) => gsap.utils.toArray<T>(selector)
const onEnter = (trigger: Element, start = 'top 86%') => ({ trigger, start, once: true })

function initializeMotion() {
    if (root.dataset.motionReady === 'true') return
    root.dataset.motionReady = 'true'

    gsap.registerPlugin(ScrollTrigger)
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
        const intro = gsap.timeline({ defaults: { ease: EASE } })

        select('[data-intro-media]').forEach((element) => {
            intro.fromTo(element, { scale: 1.08 }, { scale: 1, duration: 2.4, ease: 'power2.out' }, 0)
        })

        select('[data-lines][data-intro-lines]').forEach((heading) => {
            intro.fromTo(
                heading.querySelectorAll('.line > span'),
                { y: 0, yPercent: 110 },
                { y: 0, yPercent: 0, duration: 1.3, stagger: 0.09 },
                0.15,
            )
        })

        const introItems = select('[data-intro]')
        if (introItems.length) {
            intro.fromTo(
                introItems,
                { y: 26, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.08 },
                0.55,
            )
        }

        select('[data-lines]:not([data-intro-lines])').forEach((heading) => {
            gsap.fromTo(
                heading.querySelectorAll('.line > span'),
                { y: 0, yPercent: 110 },
                { y: 0, yPercent: 0, duration: 1.2, stagger: 0.08, ease: EASE, scrollTrigger: onEnter(heading) },
            )
        })

        select('[data-reveal]').forEach((element) => {
            gsap.fromTo(
                element,
                { y: 36, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 1.15, ease: EASE, scrollTrigger: onEnter(element, 'top 90%') },
            )
        })

        select('[data-stagger]').forEach((group) => {
            gsap.fromTo(
                group.children,
                { y: 40, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.09, ease: EASE, scrollTrigger: onEnter(group) },
            )
        })

        select('[data-clip]').forEach((frame) => {
            const image = frame.querySelector('img')
            const timeline = gsap.timeline({ scrollTrigger: onEnter(frame, 'top 85%') })
            timeline.fromTo(
                frame,
                { clipPath: 'inset(10% 8% 10% 8% round 6px)' },
                { clipPath: 'inset(0% 0% 0% 0% round 6px)', duration: 1.5, ease: 'expo.inOut' },
            )
            if (image) timeline.fromTo(image, { scale: 1.16 }, { scale: 1, duration: 1.8, ease: EASE }, 0)
        })

        select('[data-parallax]').forEach((element) => {
            gsap.fromTo(
                element,
                { yPercent: -7 },
                {
                    yPercent: 7,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: element.parentElement ?? element,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 0.6,
                    },
                },
            )
        })
    })

    root.classList.remove('motion')

    dispose = () => {
        media.revert()
        delete root.dataset.motionReady
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMotion, { once: true })
} else {
    initializeMotion()
}

document.addEventListener('astro:page-load', initializeMotion)
document.addEventListener('astro:before-swap', () => dispose?.())
