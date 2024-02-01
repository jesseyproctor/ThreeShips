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
import Popover from './Popover'; 
import { relative } from "path";

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
    const names = author.split(' ');
    const firstName = names[0];
    const lastNameInitial = names.length > 1 ? names[1].charAt(0) + '.' : '';
  
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
      <div className={`border p-20 mb-4 rounded-md ${isFirstCard ? 'border-blue-500 border-4' : 'border-gray-300'}`}>
        <img
          src={`https://d126ytvel6227q.cloudfront.net/logos/${slug}.jpg`}
          alt={`${provider.name} Logo`}
          className="max-w-full mb-2 rounded-md"
        />
        <h1 className="text-xl font-bold mb-2 text-black">{provider.name}</h1>
        <div className="flex items-center mb-2 text-gray-500">
          <StarRating rating={provider.review_score} />

          <Popover
            anchor={
              <span
                className="ml-2 font-bold text-black relative text-sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {provider.review_score} / 5
                <IoIosInformationCircleOutline
                  className="text-gray-500 ml-1 inline align-text-top text-xs"
                  style={{ marginTop: '-2px' }}
                />
              </span>
            }
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </Popover>

          <span className="ml-2 text-gray-300">|</span>
          <span className="ml-2 text-gray-500">{provider.address}</span>
        </div>
        <div>
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
        <p className="text-gray-600 mt-10">
          <div className="font-bold mb-5">SERVICES OFFERED</div>
          {provider.services.map((service, index) => (
            <span key={index} className={`ml-${index === 0 ? '0' : '5'}`}>
              <FontAwesomeIcon icon={faCheck} color="green" className="mr-2" />
              {service}
            </span>
          ))}
        </p>
        <div className="mt-10">
          <div className="text-gray-600 font-bold mt-10">EXPERIENCES</div>
          <div className="text-gray-600 bg-gray-50 p-4 mt-5 mb-10 min-h-20">
            {randomExperience ? (
              <>
                <span className="italic">&ldquo;{randomExperience.text}&rdquo;</span>
                <div className="text-right mt-4">
                  - {getFormattedAuthor(randomExperience.author)}
                </div>
              </>
            ) : (
              <span>No experiences available</span>
            )}
          </div>
        </div>
        <button className="absolute mt-8 top-20 right-20 bg-blue-700 text-white font-bold px-20 py-4">Get Quote</button>
        <button
          className=" p-2 ml-auto font-semibold text-sm text-gray-500 flex items-center"
          onClick={() => console.log('Show more content!')}
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

