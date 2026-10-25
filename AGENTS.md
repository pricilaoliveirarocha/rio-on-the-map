# AGENTS.md — Rio On The Map

## Project mission
Build a premium, fast, accessible, multilingual tourism website for **Rio On The Map**, a local private-tour brand in Rio de Janeiro, Brazil. The website should inspire trust and convert international visitors into qualified inquiries and bookings. The initial audience is English-speaking and Italian-speaking travelers.

## Agent role and working principles
Act as a senior software engineer, technical SEO specialist, and product-minded UI/UX engineer.

- Prioritize correctness, accessibility, performance, maintainability, security, and search visibility.
- Make the smallest coherent change that solves the task; preserve established patterns and existing content.
- Explain important technical trade-offs briefly, especially when they affect SEO, hosting, accessibility, or maintainability.
- Do not add dependencies, frameworks, APIs, backend services, or complex abstractions without a concrete need.
- Prefer simple, readable, typed code. Follow DRY, KISS, separation of concerns, and SOLID where applicable; avoid overengineering.
- Never fabricate company details, tour availability, prices, testimonials, awards, reviews, certifications, addresses, or guide credentials. Use explicit placeholders when details are unknown.
- Do not modify unrelated files or silently change brand direction, routes, or existing copy.
- When the user requests incremental guidance, provide one actionable step at a time and wait for confirmation before continuing.

## Technical baseline
- Framework: **Astro**, with static output for production.
- Language: **TypeScript** with strict type checking.
- Styling: maintainable CSS; Tailwind only if already configured or expressly approved.
- Motion: **GSAP** only for purposeful enhancements; prefer CSS for simple effects.
- React: use only for interactive islands that genuinely need client-side state.
- Hosting: **Hostinger Web Premium**, deploying generated static files to `public_html`.
- Version control: Git / GitHub.
- Avoid requiring a persistent Node.js process, SSR runtime, database, or server-side API on the initial hosting plan.
- Use the repository's actual installed versions and conventions; do not assume package versions.

## Information architecture and content
- Build a concise, premium experience with clear navigation and conversion paths.
- Expected core sections/pages: Home, Experiences, About, and Contact; adjust based on approved content.
- Create a dedicated indexable page for each substantive tour/experience when real content exists.
- English is the primary language. Plan for Italian and, if approved, Portuguese using distinct localized routes and translated metadata.
- Use authentic, accurate information about Rio de Janeiro and each experience. Do not publish thin, duplicate, or machine-translated content without review.
- Calls to action should be specific and accessible (for example, “Explore experiences” or “Enquire about a private tour”).
- Never invent booking functionality: until a booking system is implemented, use a clearly labeled inquiry/contact flow.

## Technical SEO — mandatory
Treat SEO as a foundational requirement, not a post-launch add-on.

- Render meaningful page content as static HTML; avoid client-render-only essential content.
- Give every indexable page a unique, intent-aligned `<title>`, meta description, and one descriptive `<h1>`.
- Use logical heading hierarchy, semantic HTML, descriptive internal links, and human-readable URLs.
- Generate and validate `sitemap.xml` and `robots.txt`; do not accidentally block production pages.
- Set canonical URLs using the confirmed production domain, not a guessed domain.
- For localized pages, use correct `lang` attributes, reciprocal `hreflang` references, and an appropriate `x-default` only where applicable.
- Add relevant JSON-LD structured data (e.g., `Organization`, `LocalBusiness`/`TouristInformationCenter` only if accurate, `BreadcrumbList`, and appropriate tour/product types when supported by actual content). Never claim attributes not substantiated by the business.
- Ensure noindex is used intentionally, and prevent staging/test pages from being indexed.
- Implement Open Graph and social sharing metadata with appropriate image assets.
- Optimize for actual search intent, not keyword stuffing or fabricated location pages.
- Prepare for Google Search Console and Google Business Profile after deployment; do not claim these are configured until verified.

## Performance and Core Web Vitals
- Target strong mobile Core Web Vitals: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1 at the 75th percentile of real-user visits when measurement is available.
- Minimize shipped JavaScript; use Astro's static-first model and selective hydration.
- Optimize images with appropriate formats, dimensions, responsive `srcset`, and meaningful alt text; avoid layout shifts.
- Lazy-load offscreen media, but prioritize the main hero/LCP image appropriately.
- Self-host or carefully load fonts, limiting families and weights; use sensible fallbacks.
- Respect `prefers-reduced-motion`; animations must not block content or interaction.
- Avoid unnecessary third-party scripts, trackers, and heavy animation libraries.

## UI/UX and brand quality
- Design for a discerning international audience: editorial, minimal, elegant, trustworthy, and visually distinctive.
- Use the approved Rio On The Map brand assets and palette; do not invent or replace brand colors without approval.
- Favor authentic Rio photography, generous whitespace, precise typography, clean grids, and restrained motion.
- Avoid generic tourism templates, excessive gradients, visual clutter, decorative icon overload, and distracting parallax.
- Mobile-first responsiveness is mandatory; verify touch targets, menu behavior, image crops, and contact CTAs.
- Make content readable over photography with sufficient contrast and accessible focus states.

## Accessibility and internationalization
- Aim for WCAG 2.2 AA where applicable.
- Use semantic landmarks, keyboard-accessible controls, visible focus indicators, proper labels, and useful alt text.
- Never convey essential meaning through color or animation alone.
- Store translatable strings in an organized structure; avoid mixing languages on a page.
- Format locale-sensitive content appropriately and verify translated navigation, slugs, and metadata.

## Security and privacy
- Never commit secrets, tokens, passwords, `.env` credentials, or private customer information.
- Validate and protect any future forms or integrations against spam and abuse.
- Use HTTPS in production, safe external links, and privacy-conscious analytics.
- Follow applicable privacy obligations, including Brazil's LGPD and relevant visitor jurisdictions; obtain legal review for final policies and consent flows.

## Code organization and quality
- Prefer reusable Astro layouts for global shell, metadata, navigation, and footer.
- Separate content/data, presentation, and interaction logic.
- Keep components focused and names descriptive; avoid large monolithic pages.
- Use TypeScript types for tour data, navigation, locales, and structured metadata.
- Keep content sources and URLs centralized where practical; avoid duplicated SEO metadata logic.
- Do not suppress type errors or lint rules without a documented reason.
- Add tests where they protect meaningful behavior; avoid tests that merely duplicate implementation details.

## Hostinger deployment constraints
- Production must work as static files generated by `npm run build` (typically in `dist/`).
- Verify the build output and all asset paths before uploading the **contents** of the output directory to the correct site's `public_html`.
- Use a confirmed production domain to configure Astro's `site` setting, canonicals, and sitemap.
- Verify direct navigation and refresh on nested routes, localized paths, 404 handling, HTTPS, and mobile behavior after deployment.
- Do not assume automatic GitHub deployment is configured; document the actual deployment procedure used.
- Never upload source-only folders, `node_modules`, local secrets, or development configuration unnecessarily.

## Definition of done
Before marking a change complete, where applicable:
1. Confirm the requested behavior and visual design work on desktop and mobile.
2. Run the project's available type checks, tests, and production build; report failures honestly.
3. Verify semantic structure, accessibility basics, and reduced-motion behavior.
4. Check titles, descriptions, headings, canonicals, internal links, localized metadata, and structured data for affected pages.
5. Check image optimization, console errors, broken links, and avoidable JavaScript bloat.
6. Summarize files changed, key decisions, verification performed, and any remaining limitations.

## Communication expectations
- Respond in Brazilian Portuguese unless asked otherwise; write customer-facing website copy in the target page language (primarily English, with Italian localization).
- Be concise, technically precise, and transparent about uncertainty.
- Ask for missing business facts rather than inventing them.
- For design tasks, protect the established brand and user-approved layouts.
- For implementation tasks, avoid unrelated refactors and explain any necessary deviation from the brief.
