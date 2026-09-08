// app/layout.tsx
import "./globals.css";
import { Lexend } from "next/font/google";
import PageUpButton from "@/components/ui/PageUpButton";
import { Metadata } from "next";
import DeferredScripts from "@/components/DeferredScripts";

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
      { url: "/favicon-16x16.webp", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.webp", sizes: "32x32", type: "image/png" },
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
        {/* Analytics & Pixels are now deferred to user interaction or 4s timeout */}
        <DeferredScripts />
        {children}
        <PageUpButton />
      </body>
    </html>
  );
}