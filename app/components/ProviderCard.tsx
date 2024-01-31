/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IServiceProvider } from "@/public/types/serviceProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import StarRating from "./StarRating";

interface ProviderCardProps {
  provider: IServiceProvider;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  const { slug } = provider;

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
      {/* <p>
        Certs: {provider.certifications}
      </p>
      <p>
        Awards:{provider.awards}
      </p> */}
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
        <div className="text-gray-600 bg-gray-200 italic p-2 mt-5 mb-10 min-h-20">{provider.highlights}</div>
      </div>
      <button className="absolute top-2 right-2 bg-blue-500 text-white px-10 py-4">Get Quote</button>
    </div>
  );
};

export default ProviderCard;


