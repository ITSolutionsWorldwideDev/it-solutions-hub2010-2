// app/[locale]/job-apply/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import { Metadata } from "next";
import JobApplyForm from "@/components/layout/job-apply-form";

export const metadata: Metadata = {
  title: "Apply Now – IT Solutions Hub",
  description: "Submit your job application to IT Solutions Hub today.",
};

export default async function JobApplyPage({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  // Extract only what you need
  const translations = {
    heading: t("jobApply.heading", "Apply Now"),
    submit: t("jobApply.submit", "Send Now"),
    success: t("jobApply.success", "Application submitted successfully!"),
    requiredFieldsError: t(
      "jobApply.errorRequired",
      "Please fill in all required fields."
    ),
    fileTooLarge: t(
      "jobApply.errorFileSize",
      "Resume file is too large (max 10MB)."
    ),
  };

  return (
    <main className="bg-gray-50 py-8">
      <JobApplyForm translations={translations} locale={locale} />
    </main>
  );
}
