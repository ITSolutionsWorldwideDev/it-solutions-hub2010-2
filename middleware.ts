// middleware.ts

// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import i18nConfig from './i18n/i18nConfig';

const PUBLIC_FILE = /\.(.*)$/;
const locales = i18nConfig.locales;
const defaultLocale = i18nConfig.defaultLocale;

// Setup accepted languages
acceptLanguage.languages(locales);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip _next, api and static files
  if (
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname) ||
    pathname.includes('_next')
  ) {
    return;
  }

  // If the pathname already includes a locale (e.g. /en or /nl)
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  if (pathnameIsMissingLocale) {
    // 1️⃣ Get locale from cookie or browser
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
    const browserLocale = acceptLanguage.get(
      request.headers.get('accept-language') || ''
    );

    // 2️⃣ Use cookie > browser > default
    const locale = cookieLocale || browserLocale || defaultLocale;

    // 3️⃣ Redirect to localized path
    const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

// Apply to all routes except api, _next, and public assets
export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
};





/* const PUBLIC_FILE = /\.(.*)$/;
const locales = ['en', 'nl'];
const defaultLocale = 'en';

import i18nConfig from './i18n/i18nConfig'; */





/* export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public files and API routes
  if (
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname) ||
    pathname.includes('_next')
  ) {
    return;
  }

  // Already has a locale in path
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  if (pathnameIsMissingLocale) {
    const locale = defaultLocale;
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
} 
  */

/* Old code

export function middleware(request: NextRequest) {
  const { pathname, locale } = request.nextUrl;

  // If pathname has no locale prefix, redirect to default locale or detected locale
  const pathnameIsMissingLocale = i18nConfig.locales.every(
    (loc) => !pathname.startsWith(`/${loc}`),
  );

  if (pathnameIsMissingLocale) {
    // Detect language from cookie or header, fallback to defaultLocale
    const cookieLocale = request.cookies.get(i18nConfig.localeCookie)?.value;
    const detectedLocale = cookieLocale || request.headers.get('accept-language')?.split(',')[0].split('-')[0] || i18nConfig.defaultLocale;

    // Use prefixDefault to decide whether to add default locale prefix or not
    const redirectLocale = i18nConfig.prefixDefault ? detectedLocale : (detectedLocale === i18nConfig.defaultLocale ? '' : detectedLocale);

    return NextResponse.redirect(new URL(`/${redirectLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
} 
  
*/



