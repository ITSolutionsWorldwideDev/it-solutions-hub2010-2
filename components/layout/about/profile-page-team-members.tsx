"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";
// import {
//   Mail,
//   Phone,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
// } from "lucide-react";
import Link from "next/link";

interface ProfilePgTeamMemberProps {
  name: string;
  role: string;
  bg_image: string;
  image: string;
  bio?: string;
  bio2?: string;
  email?: string;
  phone?: string;
}

const ProfilePgTeamMember: React.FC<ProfilePgTeamMemberProps> = ({
  name,
  role,
  bg_image,
  image,
  bio,
  bio2,
  email,
  phone,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        style={{ backgroundImage: `url(${bg_image})` }}
        className="relative cursor-pointer group w-[301px] h-[350px] bg-cover bg-no-repeat bg-center pt-5 overflow-hidden"
      >
        <Image
          src={image}
          alt={name}
          fill
          // width={301}
          // height={350}
          className="rounded-lg absolute -top-5 w-full h-[370px] transition-transform duration-300 group-hover:scale-105 px-5 pt-2"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 rounded-3xl transition-all flex items-center justify-center text-white">
          <div>
            <div className="font-semibold text-lg">{name}</div>
            <div className="text-sm text-[#467a7e]">{role}</div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="items-center text-center pb-10">
          <div className="w-full relative text-justify text-xl text-gray font-lexend">
            <div className="flex flex-col md:flex-row  px-[5%]">
              <div className="md:w-1/3">
                <Image
                  className="rounded-[10.89px] w-[388px] h-[541px] object-cover p-[5%] pt-10"
                  width={388}
                  height={541}
                  sizes="100vw"
                  alt=""
                  src={image || "/assets/images/profile/avatar.jpg"}
                />
              </div>

              <div className="md:w-2/3 pt-15">
                <div className="text-left text-[25px] text-[#467a7e]">
                  <div className="text-[40px] font-semibold text-black">
                    {name}
                  </div>
                  <div className="">{role}</div>
                </div>
                <div className="mt-10 text-[#898989] text-justify font-lexend text-[18px] not-italic font-normal leading-normal">
                  {bio || "Bio coming soon..."}
                </div>
                <div className="mt-2 text-[#898989] text-justify font-lexend text-[18px] not-italic font-normal leading-normal">
                  {bio2 || "..."}
                </div>

                <div className="flex flex-col md:flex-row md:gap-5 md:mt-5">
                  <div className="text-lg text-black">
                    <div className=" md:w-[400px] flex flex-col md:flex-row rounded-[11px] border-gainsboro border-solid border-2 box-border p-5">
                      <div className="w-[50px]">
                        <Image
                          className=" bg-[#DBF7F8] rounded-4xl p-2"
                          width={36}
                          height={36}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/modal-email.svg"
                        />
                      </div>
                      <div className="">
                        <div className="capitalize text-[18px] ">Email:</div>
                        <div className="tracking-[0.01em] lowercase mt-1 text-[#898989] text-justify font-lexend text-[18px] not-italic font-normal leading-normal">
                          <Link
                            href="mailto:info@itsolutionshub2010.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            info@itsolutionshub2010.com
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-lg text-black my-2 md:my-0">
                    <div className=" md:w-[400px] flex flex-col md:flex-row rounded-[11px] border-gainsboro border-solid border-2 box-border p-5">
                      <div className="w-[50px]">
                        <Image
                          className=" bg-[#DBF7F8] rounded-4xl p-2"
                          width={36}
                          height={36}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/modal-phone.svg"
                        />
                      </div>
                      <div className="">
                        <div className="capitalize text-[18px]">
                          Phone Call:
                        </div>
                        <div className="tracking-[0.01em] lowercase mt-1 text-[#898989] text-justify font-lexend text-[18px] not-italic font-normal leading-normal">
                          <Link
                            href="https://wa.me/+31107660786"
                            target="_blank"
                            rel="noreferrer"
                          >
                            +31 10 766 0786
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex mt-5 md:gap-4">
                  <div className="flex space-x-4">
                    {[
                      {
                        href: "https://www.facebook.com/people/It-Solutions-Hub-2010-PVT-Ltd/100095307775094/?mibextid=kFxxJD",
                        src: "/assets/images/aboutus/facebook.svg",
                        label: "Facebook",
                      },
                      {
                        href: "https://x.com/ITSolution2010",
                        src: "/assets/images/aboutus/twiter.svg",
                        label: "Twitter",
                      },
                      {
                        href: "https://www.linkedin.com/company/it-solutions-hub-2010/",
                        src: "/assets/images/aboutus/linkedin.svg",
                        label: "LinkedIn",
                      },
                      {
                        href: "https://www.instagram.com/itsolutionshub2010/?hl=en",
                        src: "/assets/images/aboutus/instagram.svg",
                        label: "Instagram",
                      },
                    ].map(({ href, src, label }) => (
                      <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="p-1 rounded-full hover:bg-[#236B7A] transition"
                      >
                        <Image
                          className="max-w-full overflow-hidden max-h-full transition"
                          width={40.4}
                          height={40.4}
                          sizes="100vw"
                          alt={label}
                          title={label}
                          src={src}
                        />
                      </Link>
                    ))}
                  </div>

                  {/* <div className="w-[40.4px] h-[40.4px]"> 
                    <Image
                      className="max-w-full overflow-hidden max-h-full"
                      width={40.4}
                      height={40.4}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/facebook.svg"
                    />
                  </div>
                  <div className="w-[40.4px] h-[40.4px]">
                    <Image
                      className="max-w-full overflow-hidden max-h-full"
                      width={40.4}
                      height={40.4}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/instagram.svg"
                    />
                  </div>
                  <div className="w-[40.4px] h-[40.4px]">
                    <Image
                      className="max-w-full overflow-hidden max-h-full"
                      width={40.4}
                      height={40.4}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/twiter.svg"
                    />
                  </div>
                  <div className="w-[40.4px] h-[40.4px]">
                    <Image
                      className="max-w-full overflow-hidden max-h-full"
                      width={40.4}
                      height={40.4}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/linkedin.svg"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col items-center text-center">
          <div className="w-full h-[661px] relative text-justify text-xl text-gray font-lexend">
            <div className="absolute top-[0px] left-[0px] w-[1318px] h-[661px]">
              <div className="absolute top-[0px] left-[0px] rounded-[46px] bg-white w-[1318px] h-[661px]" />
              <div className="absolute top-[563.82px] left-[505px] w-[40.4px] h-[40.4px]">
                <Image
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  width={40.4}
                  height={40.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/facebook.svg"
                />
              </div>
              <div className="absolute top-[563.82px] left-[567.88px] w-[40.4px] h-[40.4px]">
                <Image
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  width={40.4}
                  height={40.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/instagram.svg"
                />
              </div>
              <div className="absolute top-[563.82px] left-[630.77px] w-[40.4px] h-[40.4px]">
                <Image
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  width={40.4}
                  height={40.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/twiter.svg"
                />
              </div>
              <div className="absolute top-[563.82px] left-[693.65px] w-[40.4px] h-[40.4px]">
                <Image
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  width={40.4}
                  height={40.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/linkedin.svg"
                />
              </div>
              <div className="absolute top-[60px] left-[505px] w-[291px] h-[87px] text-left text-[25px] text-[#467a7e]">
                <div className="absolute top-[56px] left-[0px]">{role}</div>
                <div className="absolute top-[0px] left-[calc(50%_-_145.5px)] text-[40px] font-semibold text-black">
                  {name}
                </div>
              </div>
              <Image
                className="absolute top-[60px] left-[60px] rounded-[10.89px] w-[388px] h-[541px] object-cover"
                width={388}
                height={541}
                sizes="100vw"
                alt=""
                src={image}
              />
              <div className="absolute top-[167px] left-[505px] flex items-center w-[756px]">
                {bio || "Bio coming soon..."}
              </div>
              <div className="absolute top-[312px] left-[505px] flex items-center w-[756px]">
                {bio2 || "..."}
              </div>
              <div className="absolute top-[433px] left-[505px] w-[358px] h-[83px] text-lg text-black">
                <div className="absolute top-[24px] left-[26px] w-[281px] h-9">
                  <div className="absolute top-[0px] left-[46px] w-[235px] h-9">
                    <div className="absolute top-[0px] left-[0px] leading-[30px] capitalize">
                      Email:
                    </div>
                    <div className="absolute top-[21px] left-[0px] text-[15px] tracking-[0.01em] leading-[100%] lowercase font-medium text-darkgray">
                      info@itsolutionshub2010.com
                    </div>
                  </div>
                  <Image
                    className="absolute top-[0px] left-[0px] w-9 h-9 bg-[#DBF7F8] rounded-4xl p-2"
                    width={36}
                    height={36}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/modal-email.svg"
                  />
                </div>
                <div className="absolute top-[0px] left-[0px] rounded-[11px] border-gainsboro border-solid border-[2px] box-border w-[358px] h-[83px]" />
              </div>
              <div className="absolute top-[433px] left-[903px] w-[358px] h-[83px] text-lg text-black">
                <div className="absolute top-[0px] left-[0px] rounded-[11px] border-gainsboro border-solid border-[2px] box-border w-[358px] h-[83px]" />
                <div className="absolute top-[23.93px] left-[22px] w-[186px] h-9">
                  <div className="absolute top-[0px] left-[46px] w-[140px] h-9">
                    <div className="absolute top-[0px] left-[0px] leading-[30px] capitalize">
                      Phone Call:
                    </div>
                    <div className="absolute top-[21px] left-[0px] text-[15px] tracking-[0.01em] leading-[100%] lowercase font-medium text-darkgray">
                      208-6666-0112 308
                    </div>
                  </div>
                  <Image
                    className="absolute top-[0px] left-[0px] w-9 h-9 bg-[#DBF7F8] rounded-4xl p-2"
                    width={36}
                    height={36}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/modal-phone.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal> */}
    </>
  );
};

export default ProfilePgTeamMember;
