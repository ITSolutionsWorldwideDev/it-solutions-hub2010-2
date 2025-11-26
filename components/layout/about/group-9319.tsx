import type { NextPage } from "next";
import Image from "next/image";

const Group9319: NextPage = () => {
  return (
    <div className="w-full relative text-white font-lexend mx-2 md:mx-0">
      {/* Background Image */}
      <div className="relative w-full h-[680px] md:h-[200px]">
        <Image
          src="/assets/images/aboutus/rectangle-140.png"
          alt=""
          className="rounded-[21px] object-cover"
          fill
          sizes="100vw"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 rounded-[21px] bg-gray/40 backdrop-blur-xl"></div>
      <div className="absolute inset-0 rounded-[21px] bg-[#278083] mix-blend-color"></div>

      {/* Stats */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6">
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-semibold">14+</div>
          <div className="text-lg md:text-xl font-semibold">Year Of Experience</div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-16 bg-white"></div>
        <div className="block md:hidden w-20 h-px bg-white"></div>

        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-semibold">200+</div>
          <div className="text-lg md:text-xl font-semibold">Project’s Complete</div>
        </div>

        <div className="hidden md:block w-px h-16 bg-white"></div>
        <div className="block md:hidden w-20 h-px bg-white"></div>

        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-semibold">68+</div>
          <div className="text-lg md:text-xl font-semibold">Team Members</div>
        </div>

        <div className="hidden md:block w-px h-16 bg-white"></div>
        <div className="block md:hidden w-20 h-px bg-white"></div>

        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-semibold">99+</div>
          <div className="text-lg md:text-xl font-semibold">Total Award Wins</div>
        </div>
      </div>
    </div>
  );
};

export default Group9319;

/* import type { NextPage } from "next";
import Image from "next/image";

const Group9319: NextPage = () => {
  return (
    <div className="w-full relative text-left text-[45px] text-white font-lexend">
      <div className="relative w-full h-[174px]">
        <Image
          src="/assets/images/aboutus/rectangle-140.png"
          alt=""
          className="rounded-[21px] object-cover"
          fill
          sizes="100vw"
        />
      </div>
      <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(34px)] rounded-[21px] bg-gray w-full h-[174px]" />
      <div className="absolute top-[0px] left-[0px] rounded-[21px] bg-[#278083] w-full h-[174px] mix-blend-color" />
      <div className="absolute top-[46px] left-[86px] w-[1147px] h-[82px]">
        <div className="absolute top-[0px] left-[0px] w-[1147px] h-num-73">
          <div className="absolute top-[0px] left-[0px] w-[193px] h-num-73">
            <div className="absolute top-[0px] left-[0px] font-semibold">
              14+
            </div>
            <div className="absolute top-[48px] left-[0px] text-xl font-semibold">
              Year Of Experience
            </div>
          </div>
          <div className="absolute top-[0px] left-[340px] w-[187px] h-num-73">
            <div className="absolute top-[0px] left-[0px] font-semibold">
              200+
            </div>
            <div className="absolute top-[48px] left-[0px] text-xl font-semibold">
              Project’s Complete
            </div>
          </div>
          <div className="absolute top-[0px] left-[674px] w-[152px] h-num-73">
            <div className="absolute top-[0px] left-[0px] font-semibold">
              68+
            </div>
            <div className="absolute top-[48px] left-[0px] text-xl font-semibold">
              Team Members
            </div>
          </div>
          <div className="absolute top-[0px] left-[973px] w-[174px] h-num-73">
            <div className="absolute top-[0px] left-[0px] font-semibold">
              99+
            </div>
            <div className="absolute top-[48px] left-[0px] text-xl font-semibold">
              Total Award Wins
            </div>
          </div>
        </div>
        <div className="absolute top-[2px] left-[264px] border-white border-solid border-r-[1px] box-border w-px h-[81px]" />
        <div className="absolute top-[2px] left-[606px] border-white border-solid border-r-[1px] box-border w-px h-[81px]" />
        <div className="absolute top-[2px] left-[905px] border-white border-solid border-r-[1px] box-border w-px h-[81px]" />
      </div>
    </div>
  );
};

export default Group9319; */
