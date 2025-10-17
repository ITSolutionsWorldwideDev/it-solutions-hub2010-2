// app/[locale]/layout.tsx

import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import i18nConfig from '@/i18n/i18nConfig';
import LayoutWrapper from '../layout-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
import '../globals.css';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}): Promise<ReactNode> {
  const { locale } = await params;

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LayoutWrapper locale={locale}>
        {children}
      </LayoutWrapper>
    </ThemeProvider>
  );
}
