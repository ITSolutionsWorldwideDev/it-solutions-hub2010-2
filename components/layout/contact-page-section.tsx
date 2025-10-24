// components/layout/contact-page-section.tsx

// import Image from "next/image";
import initServerI18n from "@/utils/serverTranslation";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

type Props = {
  locale: string;
};

export default async function ContactCard({ locale }: Props) {
  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");


  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-xl flex flex-wrap lg:flex-nowrap">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 bg-[#175864] text-white p-8 flex flex-col justify-center rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {t("home.contactheading")}
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-[#29A1B6] p-3 rounded-full hover:bg-[#175864] transition">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm">{t("home.contactemail")}</p>
                  <p className="font-medium break-all">
                    <Link
                      href="mailto:info@itsolutionsworldwide.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      info@itsolutionsworldwide.com
                    </Link>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="bg-[#29A1B6] p-3 rounded-full hover:bg-[#175864] transition">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm">{t("home.contactephone")}</p>
                  <p className="font-medium">
                    <Link
                      href="https://wa.me/+31107660786"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +31 10 766 0786
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm mb-2">{t("home.contactconnect")}</p>
              <div className="flex space-x-4">
                {[
                  {
                    href: "https://www.facebook.com/itsolutionsww/",
                    Icon: Facebook,
                    label: "Facebook",
                  },
                  {
                    href: "https://twitter.com/ITSolutionsBV",
                    Icon: Twitter,
                    label: "Twitter",
                  },
                  {
                    href: "https://nl.linkedin.com/company/it-solutions-worldwide-bv",
                    Icon: Linkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://www.instagram.com/itsolutionsworldwide/",
                    Icon: Instagram,
                    label: "Instagram",
                  },
                ].map(({ href, Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 bg-[#29A1B6] rounded-full hover:bg-[#175864] transition"
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center lg:text-left">
            {t("home.contactform")}
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  {t("home.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#175864] transition"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  {t("home.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#175864] transition"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-lg font-medium text-gray-700"
              >
                {t("home.subject")}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#175864] transition"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                {t("home.message")}
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#175864] transition"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-[#175864] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1f6f69] transition duration-300 transform hover:scale-105 cursor-pointer"
            >
              {t("home.sendmessage")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
