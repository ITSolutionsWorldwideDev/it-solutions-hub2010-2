// components/layout/home/AnimatedBorderCard.tsx
import Link from "next/link";
import Image from "next/image";

export default function AnimatedBorderCard() {
  const data = {
    image: {
      src: "/assets/icons/free-scm-check.webp",
      alt: "Free SCM Check Icon",
    },
    content: {
      title: "Free SCM Check",
    },
  };

  return (
    <Link href="/supply-health-check-info" target="_blank" rel="noopener noreferrer">
      <div className="bg-black grid place-items-center">
        <div className="movingBorder">
          <div className="flex flex-col items-center justify-center text-white py-2 bg-black">
            <Image 
              src={data.image.src} 
              alt={data.image.alt} 
              width={40} 
              height={40} 
            />
            <p className="text-[10px] pt-[5px]">
              {data.content.title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}