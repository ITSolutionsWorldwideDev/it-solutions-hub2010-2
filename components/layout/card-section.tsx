// components/layout/card-section.tsx

'use client';

import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import React from "react";
import Link from "next/link";

type CardSectionProps = {
  heading: string;
  text: string;
};

const cards = [
  {
    title: "Our Office",
    phone: "+31107660786",
    phoneLink: "https://wa.me/31107660786",
    address: "Mandenmakerstraat 100C, 3194DG, Hoogvliet Rotterdam",
    image: "/assets/images/career3.png",
  },
  {
    title: "Our Partner Office",
    phone: "+923187192053",
    phoneLink: "https://wa.me/923187192053",
    address: "Seventeen Square Block A Multi Gardens B-17 Islamabad, Pakistan",
    image: "/assets/images/career4.png",
  },
];

const CardSection: React.FC<CardSectionProps> = ({ heading, text }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl text-[#175864] text-center mb-2">{heading}</h2>
      <p className="text-center text-[#175864] mb-8">{text}</p>

      <div className="flex flex-col sm:flex-row gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-1 border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority={index === 0}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center mb-6">{card.title}</h3>
              <div className="flex justify-around text-center text-sm gap-4 flex-wrap">
                {/* Phone */}
                <div className="flex flex-col items-center" itemProp="telephone">
                  <Phone className="text-[#175864] w-6 h-6" />
                  <Link
                    href={card.phoneLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-blue-600 hover:underline"
                  >
                    {card.phone}
                  </Link>
                </div>

                {/* Address */}
                <div className="flex flex-col items-center" itemProp="address">
                  <MapPin className="text-[#175864] w-6 h-6" />
                  <span className="mt-2 max-w-[200px] text-center text-gray-700">
                    {card.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
