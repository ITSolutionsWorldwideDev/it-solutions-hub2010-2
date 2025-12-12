// components/layout/contact-page-section.tsx

import initServerI18n from "@/utils/serverTranslation";
import ContactCardClient from "./contact-page-section.client";

type Props = {
  locale: string;
};

export default async function ContactCard({ locale }: Props) {
  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const translations = {
    contactform: t("home.contactform"),
    name: t("home.name"),
    email: t("home.email"),
    subject: t("home.subject"),
    message: t("home.message"),
    sendmessage: t("home.sendmessage"),
    sending: t("sending"),

    thanks: t("thanks"),
    messageSent: t("messageSent"),
    redirecting: t("redirecting"),
    goNow: t("goNow"),

    contactheading: t("home.contactheading"),
    contactemail: t("home.contactemail"),
    contactephone: t("home.contactephone"),
    contactconnect: t("home.contactconnect"),
  };

  return <ContactCardClient translations={translations} />;
}
