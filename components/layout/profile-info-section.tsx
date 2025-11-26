import { FC } from "react";

interface card {
  title: string;
  description?: string;
  image?: string;
  icon?: string;
}

interface ProfileInfoSectionProps {
  heading: string;
  columns?: number;
  text?: string;
  cards: card[];
}

const ProfileInfoSection: FC<ProfileInfoSectionProps> = ({
  heading,
  text,
  cards,
  columns = 3,
}) => {
  const gridColsClass =
    {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
      5: "lg:grid-cols-5",
      6: "lg:grid-cols-6",
    }[columns] || "lg:grid-cols-1";

  return (
    <div className="max-w-[1152px] mx-auto md:mx-4 lg:mx-auto my-12">
      <div className="w-full py-2 ml-4 sm:ml-0">
        <h2 className="text-2xl text-[45px] text-center font-bold mb-4 text-[#26D0CE] max-w-3xl mx-auto">{heading}</h2>
        <p className="text-gray-700">{text}</p>
      </div>

      <div
        className={`w-full grid grid-cols-1 sm:grid-cols-2  ${gridColsClass} gap-4 py-2`}
      >{/* lg:grid-cols-${columns} */}
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg p-4 flex flex-col items-start "
          >
            {card.image && (
              <img
                src={card.image}
                alt={card.title}
                className="w-auto h-auto object-cover mb-4 rounded-t-lg"
              />
            )}
            {card.icon && (
              <img
                src={card.icon}
                alt={card.title}
                className="w-20 h-auto object-cover mb-4 rounded-t-lg"
              />
            )}
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileInfoSection;
