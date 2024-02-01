/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { IServiceProvider } from "@/public/types/serviceProvider";
import { IExperience } from "@/public/types/experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GiFlamer } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import StarRating from "./StarRating";
import Popover from "./Popover";

interface ProviderCardProps {
  provider: IServiceProvider;
  experiences: IExperience[];
  isFirstCard?: boolean;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider, experiences, isFirstCard }) => {
  const { slug } = provider;
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const [randomExperience, setRandomExperience] = useState<IExperience | null>(null);

  const getFormattedAuthor = (author: string) => {
    const names = author.split(" ");
    const firstName = names[0];
    const lastNameInitial = names.length > 1 ? names[1].charAt(0) + "." : "";

    return `${firstName} ${lastNameInitial}`;
  };

  React.useEffect(() => {
    const getRandomExperience = (): IExperience | null => {
      if (experiences.length === 0) return null;
      const randomIndex = Math.floor(Math.random() * experiences.length);
      return experiences[randomIndex];
    };

    setRandomExperience(getRandomExperience());
  }, []);

  const handleMouseEnter = () => {
    setPopoverVisible(true);
  };

  const handleMouseLeave = () => {
    setPopoverVisible(false);
  };

  return (
    <div className="relative">
      {isFirstCard && (
        <div className="bg-blue-500 p-4 rounded-t-md">
          <h2 className="text-white font-bold text-lg">FEATURED PARTNER</h2>
        </div>
      )}
      <div className={`border md:p-20 p-4 mb-4 rounded-md ${isFirstCard ? "border-blue-500 border-4" : "border-gray-300"}`}>
        <div className="flex">
          <div className="max-w-60 mr-4">
            <img
              src={`https://d126ytvel6227q.cloudfront.net/logos/${slug}.jpg`}
              alt={`${provider.name} Logo`}
              className="max-w-full mb-2 rounded-md"
            />
          </div>
          <button className=" bg-blue-700 text-white font-bold max-h-12 md:px-20 px-8 md:text-xl ml-auto">
            Get Quote
          </button>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-black">{provider.name}</h1>
        <div className="flex flex-col md:flex-row md:items-center mb-2 mt-4 text-gray-500">
          <StarRating rating={provider.review_score} />
          <Popover
            anchor={
              <span
                className="mt-2 md:ml-2 font-bold text-black relative text-xs md:text-sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {provider.review_score} / 5
                <IoIosInformationCircleOutline
                  className="text-gray-500 ml-1 inline align-text-top text-xs"
                  style={{ marginTop: "-2px" }}
                />
              </span>
            }
          >
            <p className="text-xs md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </Popover>
          <span className="mt-2 md:ml-2 text-gray-300">|</span>
          <span className="mt-2 md:ml-2 text-gray-500">{provider.address}</span>
        </div>
        <div className="my-5">
          {provider.distance && provider.distance < 5 && (
            <span>
              <FaLocationDot className="text-green-700 inline" /> Nearby
            </span>
          )}
          {provider.review_count && provider.review_count >= 100 && (
            <span>
              <GiFlamer className="text-green-700 inline" /> Popular
            </span>
          )}
        </div>
        <p className="text-gray-600 mt-6 md:mt-12">
          <div className="font-bold mb-2 md:mb-5">SERVICES OFFERED</div>
          <div className="flex flex-wrap">
            {provider.services.map((service, index) => (
              <div key={index} className={`flex items-center my-2 mr-6 md:mr-8 ml-${index === 0 ? "0" : "4"}`}>
                <FontAwesomeIcon icon={faCheck} color="green" className="mr-2" />
                {service}
              </div>
            ))}
          </div>
        </p>
        <div className="mt-6 md:mt-10">
          <div className="text-gray-600 font-bold mt-6 md:mt-10">EXPERIENCES</div>
          <div className="text-gray-600 bg-gray-50 p-4 mt-4 md:mt-5 mb-8 md:mb-10 min-h-20">
            {randomExperience ? (
              <>
                <span className="italic text-xs md:text-sm">&ldquo;{randomExperience.text}&rdquo;</span>
                <div className="text-right mt-2 md:mt-4">
                  - {getFormattedAuthor(randomExperience.author)}
                </div>
              </>
            ) : (
              <span>No experiences available</span>
            )}
          </div>
        </div>
        <button
          className="mt-4 md:mt-8 p-2 md:p-4 ml-auto font-semibold text-xs md:text-sm text-gray-500 flex items-center"
          onClick={() => console.log("Show more content!")}
        >
          SEE MORE
          <span className="ml-1">
            <FontAwesomeIcon icon={faAngleDown} color="blue" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProviderCard;


