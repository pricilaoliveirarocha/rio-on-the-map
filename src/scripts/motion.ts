const root = document.documentElement

export const prefersMotion = () => !matchMedia('(prefers-reduced-motion: reduce)').matches

/** Fades each `data-reveal` block in once, the first time it reaches the viewport. */
export function initReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return
                entry.target.classList.add('is-visible')
                observer.unobserve(entry.target)
            })
        },
        { rootMargin: '0px 0px -6% 0px' },
    )
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
    root.classList.add('ready')
}
