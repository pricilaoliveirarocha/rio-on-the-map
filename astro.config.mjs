import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://rioonthemap.com',
    output: 'static',
    trailingSlash: 'always',
    integrations: [
        sitemap({
            filter: (page) => !new URL(page).pathname.match(/^\/experiences\/[^/]+\/$/),
        }),
    ],
    redirects: {
        '/about-us': '/about/',
        '/contact-us': '/contact/',
    },
});
