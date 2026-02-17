import type { NextPage } from "next";
import TeamMember from "./TeamMember";

// const CreativeTeamSection: NextPage = () => {
import Image from "next/image";
import initServerI18n from "@/utils/serverTranslation";

export default async function CreativeTeamSection({ locale }: { locale: string }) {
  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");
  const team = [
    {
      name: "Sheetal Devi",
      role: "(co-founder)",
      bg_image: "/assets/images/profile/member_bg_red.png",
      image: "/assets/images/profile/sheetal_devi 1.png",
      bio: "Sheetal Devi founded the company in 2018 with a clear goal: help businesses work smarter through practical technology and supply-chain solutions.",
      bio2: "What began as a small consultancy has now grown into a two-branch operation in the Netherlands and South Asia, delivering AI-driven systems, digital automation, and operational improvements to clients world wide. With deep experience in logistics, warehousing, and supply-chain optimization, Sheetal leads the company with a focus on efficiency, innovation, and creating solutions that genuinely move businesses forward.",
    },
    {
      name: "Zeb Raja",
      role: "(co-founder)",
      bg_image: "/assets/images/profile/member_bg_blue.png",
      image: "/assets/images/profile/avatar.png",
      // image: "/assets/images/profile/team_member_6.png",
      bio: "Zeb Raja is the co-founder and Head of Marketing at IT Solutions Hub 2010, responsible for shaping the company's brand, digital presence, and growth strategy. With a background spanning transport, IT, and digital marketing, he combines operational understanding with sharp commercial insight to drive high-impact marketing initiatives.",
      bio2: "Zeb leads the company’s global marketing direction—building strong client relationships, developing data-driven campaigns, and positioning the company as a forward-thinking provider of AI, tech, and outsourcing solutions. His experience across international markets helps the brand connect with diverse audiences and scale effectively.",
    },
    // {
    //   name: "Turab",
    //   role: "HR Manager",
    //   department: "HR",
    //   bg_image: "/assets/images/profile/member_bg_yellow.png",
    //   image: "/assets/images/profile/turab.png",
    //   bio: "Turab Ahmad manages HR operations for IT Solutions Hub Pakistan and supports HR processes for IT Solutions Hub 2010 in the Netherlands. He specializes in recruitment, HR policy development, performance management, employee documentation, and legal compliance.",
    //   bio2: "He also led ISO 9001:2015 & ISO 27001:2022 documentation for the company. Turab is committed to building a strong, professional, and globally aligned workforce.",
    // },
    {
      name: "Amer",
      role: "Senior Full Stack Developer",
      department: "IT",
      bg_image: "/assets/images/profile/member_bg_purple.png",
      // image: "/assets/images/profile/team_member_7.png",
      image: "/assets/images/profile/amer.png",
      bio: "Amer is a Senior Full Stack Developer with more than 12 years of experience delivering complex, cloud-based web applications. Specializing in the MEAN stack (MongoDB, Express.js, Angular, Node.js), he builds scalable, high-performance systems using microservices, API-driven architecture, and modern CI/CD pipelines.",
      bio2: "With hands-on expertise in AWS and Azure, Amer designs and deploys reliable solutions that support growth and heavy workloads. He brings solid leadership to development teams, mentors junior engineers, and works efficiently within agile environments to ensure smooth delivery of enterprise-grade projects. Amer is known for his Agile engineering approach, strong problem-solving skills, and consistent track record of achieving outstanding client satisfaction.",
    },
  ];

  return (
    <div className="w-full relative text-left text-[84px] text-black font-lexend mx-auto py-3 md:py-4 lg:py-12  px-4 md:px-0 lg:px-0">
      <div className="">
        <div className="text-xl opacity-[0.6] pb-4">{t("aboutus.creative_team_subheading")}</div>
        <div className="leading-[86px] font-semibold inline-block">
          <span>{t("aboutus.creative_team_heading")}</span>
          {/* <span className="text-[#467a7e]"></span> */}
        </div>
      </div>

      <section className="flex flex-wrap gap-6 justify-center py-12">
        {team.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </section>
    </div>
  );
};

{
  /* <div className="absolute top-[296px] left-[678.72px] w-[301.4px] h-[349.8px] text-[5.26px]">
        <div className="absolute top-[-0.23px] left-[0px] w-[301.4px] h-[350px]">
          <Image
            className="absolute top-[0.23px] left-[0px] rounded-[10.89px] w-[301.4px] h-[349.8px] object-cover"
            width={301.4}
            height={349.8}

            alt="" src="/assets/images/aboutus/creative_team-1.png"
          />
          <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(24px)] rounded-[10.89px] bg-gainsboro-200 w-[301.4px] h-[349.8px] opacity-0" />
          <div className="absolute top-[215.22px] left-[122px] w-[57px] h-[41px] opacity-0">
            <div className="absolute top-[0px] left-[0px] rounded-[2.31px] bg-white w-[57px] h-[41px]" />
            <div className="absolute top-[4.63px] left-[3.37px] w-[50.3px] h-[31.6px]">
              <div className="absolute top-[0px] left-[8.41px] w-[34px] h-3">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  Daniel Smith
                </div>
                <div className="absolute top-[7.99px] left-[3.58px] text-[3.37px] text-[#467a7e]">
                  Digital Marketer
                </div>
              </div>
              <div className="absolute top-[18.3px] left-[0px] border-gainsboro-100 border-solid border-t-[0.2px] box-border w-[50.5px] h-[0.2px]" />
              <div className="absolute top-[24.4px] left-[7.78px] w-[35px] h-[7.2px]">
                <div className="absolute top-[0px] left-[0px] w-[7.2px] h-[7.2px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <Image
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      width={7.2}
                      height={7.2}
                      sizes="100vw"
                      alt="" src="/assets/images/aboutus/creative_team-1.png"
                    />
                    <Image
                      className="absolute h-[76.39%] w-[40.28%] top-[22.63%] right-[30.31%] bottom-[0.98%] left-[29.41%] max-w-full overflow-hidden max-h-full"
                      width={2.9}
                      height={5.5}
                      sizes="100vw"
                      alt="" src="/assets/images/aboutus/rectangle-128.png"
                    />
                  </div>
                </div>
                <div className="absolute top-[0px] left-[9.27px] w-[7.2px] h-[7.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={7.2}
                    height={7.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/rectangle-128.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[18.53px] w-[7.2px] h-[7.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={7.2}
                    height={7.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/rectangle-128.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[27.8px] w-[7.2px] h-[7.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={7.2}
                    height={7.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/rectangle-128.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[296px] left-[0px] w-[301.4px] h-[349.8px] text-[8.95px]">
        <div className="absolute top-[-0.23px] left-[0px] w-[301.4px] h-[350px]">
          <Image
            className="absolute top-[0.23px] left-[0px] rounded-[10.89px] w-[301.4px] h-[349.8px] object-cover"
            width={301.4}
            height={349.8}
            sizes="100vw"
            alt="" src="/assets/images/aboutus/creative_team-2.png"
          />
          <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(24px)] rounded-[10.89px] bg-gainsboro-200 w-[301.4px] h-[349.8px] opacity-0" />
          <div className="absolute top-[200.83px] left-[102px] w-[97px] h-[69.8px] opacity-0">
            <div className="absolute top-[0px] left-[0px] rounded-[3.94px] bg-white w-[97px] h-[69.8px]" />
            <div className="absolute top-[7.87px] left-[calc(50%_-_42.77px)] w-[85.5px] h-[53.7px]">
              <div className="absolute top-[0px] left-[calc(50%_-_32.37px)] w-[65px] h-[20.6px]">
                <div className="absolute top-[0px] left-[calc(50%_-_32.5px)] font-semibold">
                  Ambert Daniel
                </div>
                <div className="absolute top-[13.6px] left-[10.02px] text-[5.73px] text-[#467a7e]">{`CEO & Founder`}</div>
              </div>
              <div className="absolute top-[31.14px] left-[0px] border-gainsboro-100 border-solid border-t-[0.4px] box-border w-[85.9px] h-[0.4px]" />
              <div className="absolute top-[41.52px] left-[13.24px] w-[59.5px] h-[12.2px]">
                <div className="absolute top-[0px] left-[0px] w-[12.2px] h-[12.2px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <Image
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      width={12.2}
                      height={12.2}
                      sizes="100vw"
                      alt="" src="/assets/images/aboutus/"
                    />
                    <Image
                      className="absolute h-[77.05%] w-[40.98%] top-[22.73%] right-[29.48%] bottom-[0.22%] left-[29.54%] max-w-full overflow-hidden max-h-full"
                      width={5}
                      height={9.4}
                      sizes="100vw"
                      alt="" src="/assets/images/aboutus/"
                    />
                  </div>
                </div>
                <div className="absolute top-[0px] left-[15.77px] w-[12.2px] h-[12.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={12.2}
                    height={12.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[0px] left-[31.54px] w-[12.2px] h-[12.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={12.2}
                    height={12.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[0px] left-[47.31px] w-[12.2px] h-[12.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={12.2}
                    height={12.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[296px] left-[339.36px] w-[301.4px] h-[349.8px] text-[6.92px]">
        <div className="absolute top-[-0.23px] left-[0px] w-[301.4px] h-[350px]">
          <Image
            className="absolute top-[0.23px] left-[0px] rounded-[10.89px] w-[301.4px] h-[349.8px] object-cover"
            width={301.4}
            height={349.8}
            sizes="100vw"
            alt="" src="/assets/images/aboutus/creative_team-3.png"
          />
          <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(24px)] rounded-[10.89px] bg-gainsboro-200 w-[301.4px] h-[349.8px] opacity-0" />
          <div className="absolute top-[208.74px] left-[113px] w-[75px] h-[54px] opacity-0">
            <div className="absolute top-[0px] left-[0px] rounded-[3.04px] bg-white w-[75px] h-[54px]" />
            <div className="absolute top-[6.09px] left-[calc(50%_-_33.07px)] w-[66.1px] h-[41.5px]">
              <div className="absolute top-[0px] left-[calc(50%_-_22.81px)] w-[46px] h-[16.5px]">
                <div className="absolute top-[0px] left-[calc(50%_-_23px)] font-semibold">
                  Milano Digits
                </div>
                <div className="absolute top-[10.52px] left-[9.69px] text-[4.43px] text-[#467a7e]">
                  CO-Founder
                </div>
              </div>
              <div className="absolute top-[24.08px] left-[0px] border-gainsboro-100 border-solid border-t-[0.3px] box-border w-[66.4px] h-[0.3px]" />
              <div className="absolute top-[32.1px] left-[10.24px] w-[46px] h-[9.4px]">
                <div className="absolute top-[0px] left-[0px] w-[9.4px] h-[9.4px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={9.4}
                    height={9.4}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[0px] left-[12.19px] w-[9.4px] h-[9.4px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={9.4}
                    height={9.4}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[0px] left-[24.38px] w-[9.4px] h-[9.4px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={9.4}
                    height={9.4}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[0px] left-[36.58px] w-[9.4px] h-[9.4px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={9.4}
                    height={9.4}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[296px] left-[1018.08px] w-[301.4px] h-[349.8px] text-[6.73px]">
        <div className="absolute top-[0px] left-[0px] w-[301.4px] h-[349.8px]">
          <Image
            className="absolute top-[0px] left-[0px] rounded-[10.89px] w-[301.4px] h-[349.8px] object-cover"
            width={301.4}
            height={349.8}
            sizes="100vw"
            alt="" src="/assets/images/aboutus/creative_team-4.png"
          />
          <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(24px)] rounded-[10.89px] bg-gainsboro-200 w-[301.4px] h-[349.8px] opacity-0" />
          <div className="absolute top-[209.24px] left-[114px] w-[73px] h-[52.5px] opacity-0">
            <div className="absolute top-[0px] left-[0px] rounded-[2.96px] bg-white w-[73px] h-[52.5px]" />
            <div className="absolute top-[5.93px] left-[calc(50%_-_32.19px)] w-[64.4px] h-[40.4px]">
              <div className="absolute top-[0px] left-[calc(50%_-_22.23px)] w-11 h-[15.2px]">
                <div className="absolute top-[0px] left-[calc(50%_-_22px)] font-semibold">
                  Latina Lucas
                </div>
                <div className="absolute top-[10.24px] left-[3.5px] text-[4.31px] text-[#467a7e]">
                  Network Engineer
                </div>
              </div>
              <div className="absolute top-[23.44px] left-[0px] border-gainsboro-100 border-solid border-t-[0.3px] box-border w-[64.6px] h-[0.3px]" />
              <div className="absolute top-[31.25px] left-[9.97px] w-[44.8px] h-[9.2px]">
                <div className="absolute top-[0px] left-[0px] w-[9.2px] h-[9.2px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <Image
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      width={9.2}
                      height={9.2}
                      sizes="100vw"
                      alt="" src="/assets/images/aboutus/"
                    />
                    <Image
                      className="absolute h-[77.17%] w-[40.22%] top-[22.68%] right-[30.31%] bottom-[0.14%] left-[29.48%] max-w-full overflow-hidden max-h-full"
                      width={3.7}
                      height={7.1}
                      sizes="100vw"
                      alt="" src="/assets/images/aboutus/"
                    />
                  </div>
                </div>
                <div className="absolute top-[0px] left-[11.87px] w-[9.2px] h-[9.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={9.2}
                    height={9.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[0px] left-[23.73px] w-[9.2px] h-[9.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={9.2}
                    height={9.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[0px] left-[35.6px] w-[9.2px] h-[9.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={9.2}
                    height={9.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
