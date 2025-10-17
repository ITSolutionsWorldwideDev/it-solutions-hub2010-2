import React from "react";

const MissionVisionSection = () => {
  const data = [
    {
      title: "Our Mission",
      content:
        "IT Solutions Worldwide aims to empower businesses through innovative IT solutions that optimize business flow, enhance operational efficiency, and create remarkable market value. We focus on delivering cutting-edge technology solutions and expert technical support to our clients, helping them overcome complexities and grow faster in the digital market.",
    },
    {
      title: "Our Vision",
      content:
        "Our vision is to emerge as one of the leading IT companies known and recognized for our IT solution services, innovation, and integrity. We look forward to building a strong committed bond with our clients to optimise their business operations and be recognized for their work and services. We believe in automating your business with the help of cutting-edge technology services, and we aim to build a platform where businesses can integrate advanced technology and grow to their full potential.",
    },
  ];

  return (
    <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row lg:flex-row justify-center gap-8 md:gap-3 lg:gap-8 p-4 md:px-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="max-w-sm bg-white shadow-md rounded-lg p-6 text-center"
        >
          <h3 className="text-xl font-semibold border-b-2 border-teal-500 pb-2 mb-4">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MissionVisionSection;
