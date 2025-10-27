// app/[locale]/not-found.tsx

import Link from "next/link";
import initServerI18n from "@/utils/serverTranslation";

export default async function NotFound() {
  const locale = "en"; // fallback to default or detect dynamically
  const i18n = await initServerI18n(locale);
  const t = i18n.getFixedT(locale, "common");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">404 43534</h1>
      <p className="text-xl text-gray-600 mb-8 mt-2">{t("notfound.message")}</p>
      <Link
        href={`/${locale}`}
        className="mt-4 px-6 py-2 bg-[#236b7a] hover:bg-[#29A1B6] text-white rounded-lg"
      >
        {t("notfound.homeButton")}
      </Link>
    </div>
  );
}


/* import initServerI18n from "@/utils/serverTranslation";
import Link from "next/link";

type Props = {
  params: { locale: string };
};

export default async function NotFound({ params }: Props) {
  const { locale } = params;
  const i18n = await initServerI18n(locale);
  const t = i18n.getFixedT(locale, "common");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl text-gray-600 mb-8  mt-2">
        {t("notfound.message")}
      </p>
      <Link
        href={`/${locale}`}
        className="mt-4 px-6 py-2 bg-[#236b7a] hover:bg-[#29A1B6] text-white rounded-lg no-underline"
      >
        {t("notfound.homeButton")}
      </Link>
    </div>
  );
} */
