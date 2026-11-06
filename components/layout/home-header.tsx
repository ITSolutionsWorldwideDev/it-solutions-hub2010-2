import Image from "next/image";
import Link from "next/link";
import NavbarHome from "./nav-bar-home";
import SegmentTabs from "./home/SegmentTabComponent";

export default function Header() {
  const fallbackImage = "/assets/images/backgrounds/hero-section-bg.webp";

  return (
    <div className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden bg-black">
      {/* Background Media & Overlay Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={fallbackImage}
          alt="Empowering Businesses with Smart IT Solutions"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto relative z-20">
        <div className="relative z-50">
          <NavbarHome />
        </div>

        <div className="relative z-0 flex flex-col items-center justify-center text-center text-white px-4 pt-20">
          <h1 className="text-[45px] sm:text-6xl/tight lg:text-7xl/tight 2xl:text-8xl/tight font-bold mb-8 w-full sm:w-10/12 lg:w-8/12 xl:w-9/12">
            Empowering Businesses with Smart IT Solutions
          </h1>

          <div className="flex flex-col lg:flex-row items-center lg:space-x-4 mb-12">
            <div className="flex items-center space-x-2 uppercase text-[16px] sm:text-lg/tight lg:text-lg/tight 2xl:text-3xl/tight">
              <span>Innovate</span>
              <span className="inline-block">|</span>
              <span>Automate</span>
              <span className="inline-block">|</span>
              <span>Succeed</span>
            </div>
          </div>

          <Link href="/contact-us" target="_blank" aria-label="Get FREE Consultation">
            <button className="bg-[#175864] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer">
              Get FREE Consultation
            </button>
          </Link>

          <SegmentTabs />
        </div>
      </div>
    </div>
  );
}