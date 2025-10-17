// components/layout/image-section-bg-blue.tsx
import Image from "next/image";
import { FC, ReactNode } from "react";

interface PointItem {
  title: string;
  icon?: string | ReactNode;
}

interface ImageSectionBgBlueProps {
  title: string;
  subtitle?: string;
  text?: string;
  points: PointItem[];
  image: string;
  TextColor?: string;
  iconColor?: string;
  leftColor?: string;
  rightColor?: string;
}

const ImageSectionBgBlue: FC<ImageSectionBgBlueProps> = ({
  title,
  subtitle,
  text,
  points,
  image,
  TextColor = "#ffffff",
  iconColor = "#00AAB4",
  leftColor = "#00AAB4",
  rightColor = "#00AAB4",
}) => {
  return (
    <section
      aria-label={title}
      style={{
        background: `linear-gradient(to right, ${leftColor}, ${rightColor})`,
        maxWidth: "1152px",
        margin: "0 auto",
        borderRadius: "1rem",
      }}
    >
      <div className="flex flex-col md:flex-row items-center p-8 py-12">
        {/* Left Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={image}
            alt={`${title} illustration`}
            width={500}
            height={500}
            className="rounded-md object-contain"
          />
        </div>

        {/* Right Content Section */}
        <div
          className="md:w-1/2 mt-8 md:mt-0 px-4"
          style={{ color: TextColor }}
        >
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <h3 className="text-2xl font-semibold mb-4">{subtitle}</h3>
          <p className="mb-6">{text}</p>

          <ul className="space-y-4">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg"
              >
                <div
                  className="text-white p-3 rounded-full flex justify-center items-center"
                  style={{ backgroundColor: iconColor }}
                >
                  {typeof point.icon === "string" ? (
                    <Image
                      src={point.icon}
                      alt={point.title}
                      width={24}
                      height={24}
                    />
                  ) : (
                    point.icon
                  )}
                </div>
                <span className="text-black text-lg font-medium">
                  {point.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ImageSectionBgBlue;
