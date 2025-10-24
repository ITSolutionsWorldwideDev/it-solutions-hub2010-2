// components/layout/get-in-touch-section.tsx

import initServerI18n from "@/utils/serverTranslation";
import Image from "next/image";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

type SocialLinks = {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
};

type GetInTouchProps = {
  locale: string;
  socialLinks?: SocialLinks;
};

export default async function GetInTouchSection({
  locale,
  socialLinks = {},
}: GetInTouchProps) {
  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  return (
    <section className="max-w-[1152px] mx-auto bg-[#175864] flex flex-col md:flex-row items-stretch justify-between p-8 lg:p-12 rounded-lg py-12">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 bg-[#29A1B6] text-white p-8 lg:p-12 rounded-lg shadow-md flex flex-col space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            {t("home.contactheading")}
          </h2>

          {/* Email */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-[#175864] p-3 rounded-full hover:bg-[#236B7A]">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm">{t("home.contactemail")}</p>
              <p className="font-medium">
                <Link
                  href="mailto:info@itsolutionsworldwide.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  info@itsolutionsworldwide.com
                </Link>
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#175864] p-3 rounded-full hover:bg-[#236B7A]">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm">{t("home.contactephone")}</p>
              <p className="font-medium">
                <Link
                  href="https://wa.me/+31107660786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  +31 10 766 0786
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <p className="text-sm mb-2">{t("home.contactconnect")}</p>
          <div className="flex space-x-4">
            {socialLinks.facebook && (
              <Link
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 bg-[#175864] rounded-full hover:bg-[#236B7A]"
              >
                <Facebook className="h-5 w-5 text-white" />
              </Link>
            )}
            {socialLinks.twitter && (
              <Link
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 bg-[#175864] rounded-full hover:bg-[#236B7A]"
              >
                <Twitter className="h-5 w-5 text-white" />
              </Link>
            )}
            {socialLinks.linkedin && (
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 bg-[#175864] rounded-full hover:bg-[#236B7A]"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </Link>
            )}
            {socialLinks.instagram && (
              <Link
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 bg-[#175864] rounded-full hover:bg-[#236B7A]"
              >
                <Instagram className="h-5 w-5 text-white" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative mt-8 lg:mt-0">
        <Image
          src="/assets/images/aboutus12.png"
          alt="IT Solutions team in office"
          width={800}
          height={600}
          className="rounded-lg shadow-md w-full h-auto"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
