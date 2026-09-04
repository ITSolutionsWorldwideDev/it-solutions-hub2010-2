// components/layout/about/team-member.tsx
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
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  bio,
  bio2,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer flex flex-col items-center w-[275px] mx-auto my-2"
      >
        <div className="relative w-[275px] h-[330px] overflow-hidden flex items-end justify-center group rounded-lg">
          <Image
            src={image || "/assets/images/profile/avatar.jpg"}
            alt={name}
            fill
            className="object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="text-center mt-3">
          <div className="font-semibold text-lg text-black">{name}</div>
          <div className="text-sm text-[#467a7e]">{role}</div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="items-center text-center pb-10">
          <div className="w-full relative text-justify text-xl text-gray font-lexend">
            <div className="flex flex-col md:flex-row px-[5%]">
              <div className="md:w-1/3 flex justify-center items-center">
                <Image
                  className="rounded-[10.89px] w-full max-w-[388px] h-[450px] md:h-[541px] object-contain pt-6"
                  width={388}
                  height={541}
                  alt={name}
                  src={image || "/assets/images/profile/avatar.jpg"}
                />
              </div>

              <div className="md:w-2/3 md:pl-8 pt-6 md:pt-0">
                <div className="text-left text-[25px] text-[#467a7e]">
                  <div className="text-[32px] md:text-[40px] font-semibold text-black">
                    {name}
                  </div>
                  <div>{role}</div>
                </div>
                <div className="mt-6 text-[#898989] text-justify font-lexend text-[16px] md:text-[18px]">
                  {bio || "Bio coming soon..."}
                </div>
                <div className="mt-4 text-[#898989] text-justify font-lexend text-[16px] md:text-[18px]">
                  {bio2 || ""}
                </div>

                <div className="flex flex-col md:flex-row md:gap-5 md:mt-5 mt-4">
                  <div className="text-lg text-black">
                    <div className="md:w-[360px] flex flex-row items-center rounded-[11px] border-gainsboro border-solid border-2 box-border p-4">
                      <div className="w-[50px] flex-shrink-0">
                        <Image
                          className="bg-[#DBF7F8] rounded-full p-2"
                          width={36}
                          height={36}
                          alt="email"
                          src="/assets/images/aboutus/modal-email.svg"
                        />
                      </div>
                      <div className="ml-3 overflow-hidden text-left">
                        <div className="capitalize text-[16px]">Email:</div>
                        <div className="tracking-[0.01em] lowercase mt-1 text-[#898989] font-lexend text-[15px] truncate">
                          <Link href="mailto:info@itsolutionshub2010.com" target="_blank" rel="noreferrer">
                            info@itsolutionshub2010.com
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-lg text-black my-2 md:my-0">
                    <div className="md:w-[360px] flex flex-row items-center rounded-[11px] border-gainsboro border-solid border-2 box-border p-4">
                      <div className="w-[50px] flex-shrink-0">
                        <Image
                          className="bg-[#DBF7F8] rounded-full p-2"
                          width={36}
                          height={36}
                          alt="phone"
                          src="/assets/images/aboutus/modal-phone.svg"
                        />
                      </div>
                      <div className="ml-3 text-left">
                        <div className="capitalize text-[16px]">Phone Call:</div>
                        <div className="tracking-[0.01em] mt-1 text-[#898989] font-lexend text-[15px]">
                          <Link href="https://wa.me/+923195815278" target="_blank" rel="noreferrer">
                            +92 319 5815278
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex mt-5 md:gap-4">
                  <div className="flex space-x-4">
                    {[
                      { href: "https://www.facebook.com/people/It-Solutions-Hub-2010-PVT-Ltd/100095307775094/?mibextid=kFxxJD", src: "/assets/images/aboutus/facebook.svg", label: "Facebook" },
                      { href: "https://x.com/ITSolution2010", src: "/assets/images/aboutus/twiter.svg", label: "Twitter" },
                      { href: "https://www.linkedin.com/company/it-solutions-hub-2010/", src: "/assets/images/aboutus/linkedin.svg", label: "LinkedIn" },
                      { href: "https://www.instagram.com/itsolutionshub2010/?hl=en", src: "/assets/images/aboutus/instagram.svg", label: "Instagram" },
                    ].map(({ href, src, label }) => (
                      <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="p-1 rounded-full hover:bg-[#236B7A] transition">
                        <Image className="max-w-full overflow-hidden max-h-full transition" width={40.4} height={40.4} alt={label} title={label} src={src} />
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