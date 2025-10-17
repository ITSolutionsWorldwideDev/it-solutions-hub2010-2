// app/layout-wrapper.tsx
"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/header";
import HomeHeader from "@/components/layout/home-header";
import Footer from "@/components/layout/footer";
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface LayoutWrapperProps {
  children: ReactNode;
  locale: string;
}

export default function LayoutWrapper({ children, locale }: LayoutWrapperProps) {
  const pathname = usePathname();

  // const isHome = pathname === "/";
  const isHome = pathname === `/${locale}` || pathname === '/'; // handles `/en`, `/nl`, etc.

  return (
    <>
      {isHome ? <HomeHeader /> : <Header />}
      {children}
      <Footer />
      <LanguageSwitcher />
    </>
  );
}