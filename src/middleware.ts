import createMiddleware from 'next-intl/middleware';
import { pathnames, locales, localePrefix } from '@/lib/config';

export default createMiddleware({
    defaultLocale: 'zh',
    locales,
    pathnames,
    localePrefix,
    localeDetection: false,
});

export const config = {
    matcher: [
        // Enable a redirect to a matching locale at the root
        '/',

        // Set a cookie to remember the previous locale for
        // all requests that have a locale prefix
        '/(en|fr|de|es|ja|ko|ph|pt|tw|vi|zh)/:path*',

        // Enable redirects that add missing locales
        // (e.g. `/pathnames` -> `/en/pathnames`)
        '/((?!_next|_vercel|.*\\..*).*)',
    ],
};