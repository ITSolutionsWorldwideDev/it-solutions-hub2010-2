// app/layout.tsx
import "./globals.css";
import { Lexend } from "next/font/google";
import PageUpButton from "@/components/ui/PageUpButton";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lexend.className} suppressHydrationWarning>
      <body>
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
