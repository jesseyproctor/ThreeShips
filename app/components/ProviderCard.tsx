/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IServiceProvider } from "@/public/types/serviceProvider";
import { IExperience } from "@/public/types/experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import StarRating from "./StarRating";

interface ProviderCardProps {
  provider: IServiceProvider;
  experiences: IExperience[];
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider, experiences }) => {
  const { slug } = provider;

  const getFormattedAuthor = (author: string) => {
    const names = author.split(' ');
    const firstName = names[0];
    const lastNameInitial = names.length > 1 ? names[1].charAt(0) + '.' : '';
  
    return `${firstName} ${lastNameInitial}`;
  };  

  const getRandomExperience = (): IExperience | null => {
    if (experiences.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * experiences.length);
    return experiences[randomIndex];
  };

  const randomExperience = getRandomExperience();

  return (
    <div className="relative border p-20 mb-4 rounded-md">
      <img
        src={`https://d126ytvel6227q.cloudfront.net/logos/${slug}.jpg`}
        alt={`${provider.name} Logo`}
        className="max-w-full mb-2 rounded-md"
      />
      <h1 className="text-xl font-bold mb-2 text-black">{provider.name}</h1>
      <div className="flex items-center mb-2 text-gray-500">
        <StarRating rating={provider.review_score} />
        <span className="ml-2 font-bold text-black">{provider.review_score} / 5</span>
        <span className="ml-2">|</span>
        <span className="ml-2">{provider.address}</span>
      </div>
      <p className="text-gray-600 mt-10">
        <div className="font-bold mb-5">Services Offered:</div>
        {provider.services.map((service, index) => (
          <span key={index} className={`ml-${index === 0 ? '0' : '5'}`}>
            <FontAwesomeIcon icon={faCheck} color="green" className="mr-2" />
            {service}
          </span>
        ))}
      </p>
      <div className="mt-10">
        <div className="text-gray-600 font-bold mt-10">Experiences:</div>
        <div className="text-gray-600 bg-gray-50 p-4 mt-5 mb-10 min-h-20">
            {randomExperience ? (
            <>
                <span className="italic">{randomExperience.text}</span>
                <div className="text-right mt-4">
                     - {getFormattedAuthor(randomExperience.author)}
                </div>
            </>
            ) : (
            <span>No experiences available</span>
            )}
        </div>
      </div>
      <button className="absolute top-2 right-2 bg-blue-500 text-white px-10 py-4">Get Quote</button>
    </div>
  );
};

export default ProviderCard;


