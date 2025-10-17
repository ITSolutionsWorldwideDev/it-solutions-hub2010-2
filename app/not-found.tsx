// app/not-found.tsx
import Link from "next/link";
import initServerI18n from "@/utils/serverTranslation";

export default async function GlobalNotFound() {
  // You may parse locale from URL path if you like
  const locale = "en"; // fallback or detection logic
  const i18n = await initServerI18n(locale);
  const t = i18n.getFixedT(locale, "common");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl text-gray-600 mb-8 mt-2">{t("notfound.message")}</p>
      <Link href={`/${locale}`} className="mt-4 px-6 py-2 bg-[#12E193] hover:bg-[#29A1B6] text-white rounded-lg">
        {t("notfound.homeButton")}
      </Link>
    </div>
  );
}
