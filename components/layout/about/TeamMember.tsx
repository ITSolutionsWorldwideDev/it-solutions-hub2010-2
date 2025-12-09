"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";
import Link from "next/link";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  bio2?: string;
  email?: string;
  phone?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
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
        className="relative cursor-pointer group w-[301px] h-[350px]  pt-5 overflow-hidden"
      >
        <Image
          src={image || "/assets/images/profile/avatar.jpg"}
          alt={name}
          width={301}
          height={350}
          className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
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

                  <div className="text-lg text-black  my-2 md:my-0">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TeamMember;


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
