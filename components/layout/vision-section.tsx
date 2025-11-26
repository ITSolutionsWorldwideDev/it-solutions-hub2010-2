// components/layout/vision-section.tsx
import Image from "next/image";
import Link from "next/link";
// import { ChevronDown, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { FC } from "react";

// 1. Define the prop types
interface VisionSectionProps {
  imageUrl: string;
  heading: string;
  text: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
  leftColor?: string;
  rightColor?: string;
  textColor?: string;
  logoUrl?: string;
  borderWidth?: string;
  borderColor?: string;
}

const VisionSection: FC<VisionSectionProps> = ({
  imageUrl,
  heading,
  text,
  buttonText,
  buttonLink,
  leftColor = "#ffffff",
  rightColor = "#ffffff",
  textColor = "#ffffff",
  logoUrl,
  borderWidth = "0px",
  borderColor = "transparent",
}) => {
  const isInternalLink = buttonLink?.startsWith("/");
  // Determine if buttonLink is internal (starts with "/")
  //   const isInternalLink = buttonLink && buttonLink.startsWith("/");

  return (
    <section
      aria-label={heading}
      className="mx-4 md:mx-auto my-12 py-3 md:py-4 lg:py-12 px-4 md:px-4 lg:px-10 rounded-md"
      style={{
        // maxWidth: "1152px",
        background: `linear-gradient(to right, ${leftColor}, ${rightColor})`,
        border: `${borderWidth} solid ${borderColor}`,
      }}
    >
      <div className="flex flex-col md:flex-row lg:flex-row gap-1 items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="w-full lg:w-2/3">
          <h2
            className="text-3xl lg:text-3xl font-semibold mb-4"
            style={{ color: textColor, fontWeight: "bold" }}
          >
            {heading}
          </h2>
          <div className="text-lg lg:text-lg" style={{ color: textColor }}>
            {text}
          </div>

          {buttonText && buttonLink && (
            <div className="mt-4">
              {isInternalLink ? (
                <Link
                  href={buttonLink}
                  className="bg-[#9B51E0] text-white px-4 py-2 rounded font-semibold"
                  passHref
                >
                  {buttonText}
                </Link>
              ) : (
                <Link
                  href={buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#9B51E0] text-white px-4 py-2 rounded font-semibold"
                >
                  {buttonText}
                </Link>
              )}
            </div>
          )}

          {logoUrl && (
            <div className="mt-4">
              <Image
                src={logoUrl}
                alt="logo"
                width={360}
                height={100} // Adjust height to maintain aspect ratio
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
        </div>

        <div className="w-full md:w-[70%] lg:w-auto">
          <Image
            src={imageUrl}
            alt="Image related to the content"
            width={584.1}
            height={510.3}
            className="top-6 w-[525.524px]
  h-[437.937px]
  shrink-0
  aspect-[525.52/437.94]
  -rotate-[8.443deg]"
            layout="responsive"
            objectFit="contain"
            priority={true} // prioritize loading for SEO important images
          />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

/* 

width: 525.524px;
height: 437.937px;
transform: rotate(-8.443deg);
flex-shrink: 0;
aspect-ratio: 525.52/437.94;
*/
