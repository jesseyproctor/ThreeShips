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
    const { slug } = provider

  return (
    <div className="border p-4 mb-4 rounded-md">
     <h2 className="text-xl font-bold mb-2">{provider.name}</h2>
      <img
        src={`https://d126ytvel6227q.cloudfront.net/logos/${slug}.jpg`}
        alt={`${provider.name} Logo`}
        className="max-w-full mb-2 rounded-md"
      />
      <p>
        <StarRating rating={provider.review_score} />
        {provider.review_score} / 5
      </p>
      <p>
       {provider.address}
      </p>
      {/* <p>
        Certs: {provider.certifications}
      </p>
      <p>
        Awards:{provider.awards}
      </p> */}
      <p>
        Services Offered:
        {provider.services.map((service, index) => (
          <span key={index} className="ml-5">
            <FontAwesomeIcon icon={faCheck} color="green" className="mr-2"  />
            {service}
          </span>
        ))}
      </p>

      <p>
        Experiences: {provider.highlights}
      </p>
    </div>
  );
};

export default ProviderCard;
