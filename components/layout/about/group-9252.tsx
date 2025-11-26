import type { NextPage } from "next";
import Image from "next/image";

const Group9252: NextPage = () => {
  return (
    <div className="w-full relative text-justify text-lg text-gray mx-auto my-12 py-3 md:py-4 lg:py-12 px-4 md:px-4 lg:px-10">
      <div className="relative rounded-[50px]  h-[693px] bg-cover bg-no-repeat bg-[top]">
        <Image
          className=" rounded-[32px] w-full h-[693px] object-cover"
          width={1318}
          height={693}
          sizes="100vw"
          alt=""
          src="/assets/images/aboutus/about-us-banner.png"
        />
        <div className="absolute top-[639px] left-[860px] bg-gainsboro w-[415px] h-[284px]" />
      </div>
      {/* <div className="relative rounded-[50px] [background:linear-gradient(-90deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.7))] w-[1318px] h-[693px]">
        <Image
          className="absolute top-[160px] left-[60px] rounded-[32px] w-[1318px] h-[693px] object-cover"
          width={1318}
          height={693}
          sizes="100vw"
          alt=""
          src="/assets/images/aboutus/subtract.png"
        />
        <div className="absolute top-[639px] left-[860px] bg-gainsboro w-[415px] h-[284px]" />
      </div> */}
      <div className="absolute top-[461px] left-[68px] w-[336px] h-[55px]">
        <div className="absolute top-[15px] left-[212px] w-[124px] h-[26px] opacity-[0.8]">
          <div className="absolute top-[0px] left-[0px] leading-[26px]">
            Learn more
          </div>
          <Image
            className="absolute top-[6px] left-[112px] w-3 h-3 object-contain"
            width={12}
            height={12}
            sizes="100vw"
            alt=""
            src="/assets/images/aboutus/polygon-1.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[0px] shadow-[4px_4px_30px_rgba(0,_0,_0,_0.03)] rounded-[50px] bg-cadetblue flex items-center justify-center py-4 px-10">
          <b className="relative">Get in Touch</b>
        </div>
      </div>

      {/* <div className="w-auto h-[239px] text-[22.63px] text-gray float-right font-lexend mt-[-200px] mr-[60px]">
        <div className="shadow-[0px_4px_34px_rgba(0,_0,_0,_0.13)] rounded-[33.94px] p-10 bg-white w-[384.7px] h-[239px] right-4">
          <div className=" leading-[42.43px] font-medium">
            Trusted by many clients
          </div>
          <div className="left-[44px] text-[39.37px] leading-[73.82px] font-medium text-cadetblue">
            300+
          </div>
          <div className=" inline-flex w-[186.7px] h-[59.4px]">
            <Image
              className="rounded-[50%] w-[59.4px] h-[59.4px] object-cover"
              width={59.4}
              height={59.4}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/banner-image-1.svg"
            />
            <Image
              className="rounded-[50%] w-[59.4px] h-[59.4px] object-cover"
              width={59.4}
              height={59.4}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/banner-image-2.svg"
            />
            <Image
              className="rounded-[50%] w-[59.4px] h-[59.4px] object-cover"
              width={59.4}
              height={59.4}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/banner-image-3.svg"
            />
            <Image
              className=" rounded-[50%] w-[59.4px] h-[59.4px] object-cover"
              width={59.4}
              height={59.4}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/banner-image-4.svg"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Group9252;
