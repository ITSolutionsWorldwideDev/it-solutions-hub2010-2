"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export function Logo() {
  const { theme } = useTheme();

  console.log('theme ==== ',theme);

  return (
    <Link href="/" className="flex flex-shrink-0 items-center gap-2">
      <Image
        src={
          theme === "light" ? "/assets/images/main-logo.png" : "/assets/images/main-logo.png"
        }
        alt="ITSW Logo"
        width={260}
        height={78}
        className="h-10 w-auto"
        priority
      />
      {/* Hidden image preload for smoother theme switching */}
      <Image
        src={
          theme === "light" ? "/assets/images/main-logo.png" : "/assets/images/main-logo.png"
        }
        alt="ITSW Logo Preload"
        width={260}
        height={78}
        className="hidden"
        priority
      />
    </Link>
  );
}
