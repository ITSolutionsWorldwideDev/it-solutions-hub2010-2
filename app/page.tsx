// app/page.tsx     Home Page
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import acceptLanguage from 'accept-language';
import i18nConfig from '@/i18n/i18nConfig';

acceptLanguage.languages(i18nConfig.locales);

export default async function RootPage() {
  const headerList = await headers();
  const cookie = headerList.get('cookie');
  const langHeader = headerList.get('accept-language');
  const detectedLang = acceptLanguage.get(langHeader) || i18nConfig.defaultLocale;

  // Optional: if you store user preference in NEXT_LOCALE cookie
  const userCookie = cookie?.match(/NEXT_LOCALE=(\w+)/)?.[1];
  const locale = userCookie || detectedLang || i18nConfig.defaultLocale;

  redirect(`/${locale}`);
}

/* import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/en");
} */
