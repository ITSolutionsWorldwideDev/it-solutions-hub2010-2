// app/[locale]/iso-certified/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import CertificationBanner from "@/components/ui/certification-banner";
import BenefitCard from "@/components/ui/BenefitCard";

import Image from "next/image";
import ISO_Section3 from "@/components/ui/ISO-Section3";
import ISO_Section4 from "@/components/ui/ISO-Section4";
import ISO_Section5 from "@/components/ui/ISO-Section5";
import ISO_Section6 from "@/components/ui/ISO-Section6";
import ISO_Section7 from "@/components/ui/ISO-Section7";

export default async function ISOCertified({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const translations = {
    heading: t("jobApply.heading", "Apply Now"),
    submit: t("jobApply.submit", "Send Now"),
    success: t("jobApply.success", "Application submitted successfully!"),
    requiredFieldsError: t(
      "jobApply.errorRequired",
      "Please fill in all required fields.",
    ),
  };

  return (
    <>
      <CertificationBanner
        title="Certified Excellence"
        mainHeading="ISO Certified IT Solutions You Can Trust"
        description="IT Solutions Worldwide is an ISO-certified company, committed to international standards of quality, security, and continuous improvement—so our clients receive reliable, compliant, and future-ready IT services."
        buttons={[
          { label: "Work With an ISO Certified Partner", href: "/contact" },
          { label: "Contact Us", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="w-full bg-whitesmoke-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our ISO Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 flex gap-6">
              <div className="shrink-0">
                <Image
                  src="/assets/icons/certificate2.png"
                  alt="ISO 9001 Certificate Icon"
                  width={64}
                  height={64}
                  className="rounded-xl bg-[#CBFBF1] p-4"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">ISO 9001</h3>
                <p className="text-sm font-semibold text-[#00786f] mt-1">
                  Quality Management System
                </p>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  Ensures consistent service quality, structured workflows, and
                  continuous improvement across all IT services.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 flex gap-6">
              <div className="shrink-0">
                <Image
                  src="/assets/icons/lock.png"
                  alt="ISO 27001 Security Icon"
                  width={64}
                  height={64}
                  className="rounded-xl bg-[#CBFBF1] p-4"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">ISO 27001</h3>
                <p className="text-sm font-semibold text-[#00786f] mt-1">
                  Information Security Management System
                </p>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  Guarantees the protection of sensitive data, secure handling
                  of information, and strong cybersecurity practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-whitesmoke-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Benefits of Working With an ISO Certified IT Partner
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon="/assets/icons/guarantee.png"
              title="Guaranteed Quality Standards"
              description="Our ISO-driven processes ensure consistent, high-quality results—every project, every time."
            />

            <BenefitCard
              icon="/assets/icons/standard.png"
              title="Strong Data Security & Confidentiality"
              description="We follow strict security protocols to protect your business data, intellectual property, and systems."
            />

            <BenefitCard
              icon="/assets/icons/moving-up.png"
              title="Reduced Business Risk"
              description="ISO standards help us identify, manage, and reduce operational and security risks proactively."
            />

            <BenefitCard
              icon="/assets/icons/audit.png"
              title="Transparent & Documented Processes"
              description="You benefit from clear workflows, accountability, and structured project management."
            />

            <BenefitCard
              icon="/assets/icons/global.png"
              title="Global Compliance & Trust"
              description="ISO certification makes us a reliable partner for international clients and regulated industries."
            />

            <BenefitCard
              icon="/assets/icons/truct.png"
              title="Continuous Improvement Culture"
              description="We don't just meet standards—we continuously improve our services, tools, and processes."
            />
          </div>
        </div>
      </section>
      <ISO_Section3 />
      <ISO_Section4 />
      <ISO_Section5 />
      <ISO_Section6 />
      <ISO_Section7 />
    </>
  );
}
