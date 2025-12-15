// app/layout.tsx
import "./globals.css";
import { Lexend } from "next/font/google";
import PageUpButton from "@/components/ui/PageUpButton";
import { Metadata } from "next";
import GoogleTagManager from "@/components/GoogleTagManager";
import TikTokPixel from "@/components/TikTokPixel";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Empowering Businesses with Smart IT Solutions | IT Solutions Hub 2010",
    template: "%s | IT Solutions Hub 2010",
  },
  description: "Get expert marketing automation & professional services automation software in the Netherlands. Scalable solutions tailored to your business needs.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lexend.className} suppressHydrationWarning>
      <body>
        <GoogleAnalytics measurementId="G-7NMTE5LZNR" />
        <GoogleTagManager gtmId="GTM-PNHZ8DPL" />
        <TikTokPixel pixelId="D4U48FJC77U9L5PJ11G0" />
        {children}
        <PageUpButton />
      </body>
    </html>
  );
}

/*
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import LayoutWrapper from "./layout-wrapper";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={lexend.className}>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
} */

