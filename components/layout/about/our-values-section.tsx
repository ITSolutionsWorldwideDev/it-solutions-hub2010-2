// components/layout/about/our-values-section.tsx
import Image from "next/image";
import initServerI18n from "@/utils/serverTranslation";

export default async function OurValuesSection({ locale }: { locale: string }) {
  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  return (
    <div className="w-full relative text-justify text-lg text-gray mx-auto my-12 py-3 md:py-4 lg:py-12 px-4 md:px-4 lg:px-5  ">
      <div className=" w-full text-center">
        <div className="border-[#467a7e] border-solid border-2 rounded-4xl p-2 inline-flex">
          <Image
            className=" w-auto h-auto pr-2 object-contain"
            width={15}
            height={8}
            sizes="100vw"
            alt=""
            src="/assets/images/aboutus/group-9254.svg"
          />
          <div>{t("aboutus.our_values_main_heading")}</div>
          <Image
            className="w-auto h-auto pl-2 object-contain"
            width={15}
            height={8}
            sizes="100vw"
            alt=""
            src="/assets/images/aboutus/group-9253.svg"
          />
        </div>
      </div>
      <div className=" w-full text-[45px] top-4 font-semibold text-center text-black">
        {t("aboutus.our_values_main_subheading")}
        {/* <span>The </span>
        <span className="text-[#467a7e]">Foundation</span>
        <span> of Everything We Do</span> */}
      </div>
      <div className="  text-xl w-full text-black text-center opacity-[0.6]">{t("aboutus.our_values_main_text")}</div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 py-2">
        <div className="rounded-lg shadow-lg p-4 flex flex-col items-start bg-white ">
          <div className="px-10 py-5">
            <div className="text-xl font-semibold text-black text-left inline-block pb-2">{t("aboutus.our_values_widget_heading1")}</div>
            <div className="border-[#467a7e] border-solid border-t-[3px] box-border w-[60%] h-[3px]" />
            <div className="pt-4 text-left">{t("aboutus.our_values_widget_text1")}</div>
          </div>
        </div>

        <div className="rounded-lg shadow-lg p-4 flex flex-col items-start bg-white ">
          <div className="px-10 py-5">
            <div className="text-xl font-semibold text-black text-left inline-block pb-2">{t("aboutus.our_values_widget_heading3")}
              
            </div>
            <div className="border-[#467a7e] border-solid border-t-[3px] box-border w-[60%] h-[3px]" />
            <div className="pt-4 text-left">{t("aboutus.our_values_widget_text2")}</div>
          </div>
        </div>

        <div className="rounded-lg shadow-lg p-4 flex flex-col items-start bg-white ">
          <div className="px-10 py-5">
            <div className="text-xl font-semibold text-black text-left inline-block pb-2">{t("aboutus.our_values_widget_heading3")}
              
            </div>
            <div className="border-[#467a7e] border-solid border-t-[3px] box-border w-[60%] h-[3px]" />
            <div className="pt-4 text-left">{t("aboutus.our_values_widget_text3")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
