import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const GetInTouchSection: NextPage = () => {
  return (
    <div className="w-full  md:h-[511px] relative text-left text-[25px] text-white font-lexend">
      {/* <div className="">
        <Image
          className="rounded-[27px] w-full [background:linear-gradient(90deg,_#278083,_#000)] h-[428px] object-contain opacity-80"
          fill
          sizes="100vw"
          alt=""
          src="/assets/images/aboutus/rectangle-128.png"
        />
      </div> */}
      {/* overflow-hidden */}

      <div
        className=" bg-cover bg-center w-full px-10 mx-auto bg-no-repeat rounded-xl shadow-lg  flex items-center justify-center"
        style={{
          backgroundImage: `url("/assets/images/aboutus/get-in-touch-footer.png")`,
        }}
        role="img"
      >
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* <div className="relative grid pt-20 text-center">
            <div className="font-semibold">Make an Appointment</div>
            <div className="text-justify">
              <div className="relative mx-auto">
                <Image
                  className="absolute top-[0px] left-[0px] rounded-num-50 w-[62.7px] h-num-62_7 object-cover"
                  width={62.7}
                  height={62.7}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/get-in-touch-icon-1.svg"
                />
                <Image
                  className="absolute top-[0px] left-[44.78px] rounded-num-50 w-[62.7px] h-num-62_7 object-cover"
                  width={62.7}
                  height={62.7}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/get-in-touch-icon-2.svg"
                />
                <Image
                  className="absolute top-[0px] left-[89.56px] rounded-num-50 w-[62.7px] h-num-62_7 object-cover"
                  width={62.7}
                  height={62.7}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/get-in-touch-icon-3.svg"
                />
                <Image
                  className="absolute top-[0px] left-[134.33px] rounded-num-50 w-[62.7px] h-num-62_7 object-cover"
                  width={62.7}
                  height={62.7}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/get-in-touch-icon-4.svg"
                />
                <Image
                  className="absolute top-[0px] left-[174.15px] rounded-num-50 w-[62.7px] h-num-62_7 object-cover"
                  width={62.7}
                  height={62.7}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/get-in-touch-icon-5.svg"
                />
                <Image
                  className="absolute top-[0px] left-[215.31px] rounded-num-50 w-[62.7px] h-num-62_7 object-cover"
                  width={62.7}
                  height={62.7}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/get-in-touch-icon-6.svg"
                />
              </div>
            </div>
            <div className="">
              <div className="font-semibold">3000+ Client Reviews</div>
              
            </div>
          </div> */}

          <div className="relative grid pt-20 text-left text-lg">
            <div className="text-[45px] font-semibold">Get In Touch</div>

            <div className="text-justify flex flex-row gap-4 mt-5 md:mt-0">
              <div className="w-auto">
                <Image
                  className="w-9 h-9"
                  width={36}
                  height={36}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/material-symbols-light-mail-outline-rounded.svg"
                />
              </div>

              <div className="w-auto">
                <div className="leading-[30px] capitalize">Email us</div>
                <div className="text-[15px] tracking-[0.01em] leading-[100%] lowercase font-medium text-silver mt-2 md:mt-0">
                  <a href="mailto:info@itsolutionshub2010.com">info@itsolutionshub2010.com</a>
                </div>
              </div>
            </div>

            <div className="text-justify flex flex-row gap-4 mt-5 md:mt-0">
              <div className="w-auto">
                <Image
                  className=" w-9 h-9"
                  width={36}
                  height={36}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/material-symbols-light-call-outline-sharp.svg"
                />
              </div>
              <div className="w-auto">
                <div className="leading-[30px] capitalize">Phone Number</div>
                <div className="text-[15px] tracking-[0.01em] leading-[100%] lowercase font-medium text-silver mt-2 md:mt-0">
                  <a href="tel:+31107660786">+31 10 766 0786</a>
                </div>
              </div>
            </div>
            <div className="mt-10 md:mt-0">
              {/* <b className=" leading-[50.37px] capitalize">Contact Us</b>
                <Image
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/outlined-32-arrow-right.svg"
                /> */}

              <Link
                href="/contact-us"
                className="rounded-[5px] bg-white text-base leading-[50.37px] text-[16.79px] text-[#467a7e] inline-flex px-4 py-0 align-middle hover:text-[#236B7A]"
              >
                Contact Us
                <Image
                  className="w-6 h-6 ml-2 self-center"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/outlined-32-arrow-right.svg"
                />
              </Link>
            </div>
          </div>

          <div className="md:relative md:w-[550px] md:h-[500px]">
            <Image
              className=" md:absolute  md:-top-10"
              width={550}
              height={565}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/lady-caller.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
