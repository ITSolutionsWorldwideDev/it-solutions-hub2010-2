// components/layout/about/why-us-section.tsx
// import type { NextPage } from "next";
import Image from "next/image";
import initServerI18n from "@/utils/serverTranslation";

export default async function WhyUsSection({ locale }: { locale: string }) {
  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  return (
    <div className="w-full relative text-justify text-lg text-gray mx-auto my-12 py-3 md:py-4 lg:py-12 px-4 md:px-4 lg:px-10">
      <div className="flex flex-col md:flex-row">
        <div className=" w-full text-left">
          <div className="border-teal border-solid border-2 rounded-4xl p-2 inline-flex">
            <Image
              className=" w-auto h-auto pr-2 object-contain"
              width={15}
              height={8}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/group-9254.svg"
            />
            <div>{t("aboutus.why_us_heading")}</div>
            <Image
              className="w-auto h-auto pl-2 object-contain"
              width={15}
              height={8}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/group-9253.svg"
            />
          </div>

          <div>
            <div className="text-[45px] font-semibold">
              {t("aboutus.why_us_heading_2")} IT Solutions Hub 2010{/* What Define Us */}
            </div>
            <div className=" text-lg text-gray flex items-center sm:w-auto md:w-[549px] mb-4">
               {t("aboutus.why_us_text")}
              {/*  IT Solutions Hub 2010 is a leading company that provides the
              best-updated solutions to a comprehensive range of industries */}
            </div>

            <div className="mb-4">
              <div className="flex flex-col md:flex-row gap-4">
                <Image
                  className="w-[82px] h-[82px] bg-[rgb(230_237_237)] rounded-full p-4"
                  width={82}
                  height={82}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/streamline-freehand-security-it-service.svg"
                />

                <div className="">
                  <div className="font-semibold"> {t("aboutus.why_us_widget_heading1")}</div>
                  <div className=" text-[15px] text-gray text-justify flex items-center sm:w-auto md:w-[434px]">{t("aboutus.why_us_widget_text1")}</div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-col md:flex-row gap-4">
                <Image
                  className="w-[82px] h-[82px] bg-[rgb(230_237_237)] rounded-full p-4"
                  width={82}
                  height={82}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/lucide-chart-line.svg"
                />

                <div className="">
                  <div className="font-semibold">{t("aboutus.why_us_widget_heading2")}</div>
                  <div className=" text-[15px] text-gray text-justify flex items-center sm:w-auto md:w-[434px]">{t("aboutus.why_us_widget_text2")}</div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-col md:flex-row gap-4">
                <Image
                  className="w-[82px] h-[82px] bg-[rgb(230_237_237)] rounded-full p-4"
                  width={82}
                  height={82}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/formkit-people.svg"
                />

                <div className="">
                  <div className="font-semibold">{t("aboutus.why_us_widget_heading3")}</div>
                  <div className=" text-[15px] text-gray text-justify flex items-center sm:w-auto md:w-[434px]">{t("aboutus.why_us_widget_text3")}</div>
                </div>
              </div>
            </div>

            {/* <div className="text-[21.8px] text-white font-plus-jakarta-sans">
              <div className="bg-[#278083] inline-flex text-white rounded-[12.11px] px-4 py-2 font-semibold transition">
                <b className="">Take Our Services</b>
                <div className="">
                  <Image
                    className=""
                    width={29.1}
                    height={29.1}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/icon-park-outline-arrow-up.svg"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className=" w-full">
          <div className="top-[51px] realtive w-full md:w-[676px] md:h-[552px]">
            <Image
              className="float-right rounded-[36px] w-full md:w-[551px] md:h-[552px] object-cover"
              width={551}
              height={552}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/rectangle-122.png"
            />
            <div className="hidden  absolute top-[594px] md:top-[294px] border-white border-8 rounded-[28.97px] w-[280px] h-[199.5px] overflow-hidden md:flex items-center justify-center">
              <Image
                className="w-full h-full object-cover absolute left-0 top-0 transform-[scale(1.079)]"
                width={280}
                height={199.5}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/rectangle-123.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
